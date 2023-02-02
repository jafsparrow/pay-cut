import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Reward, RewardDocument } from './model/reward.schema';
import { Connection, Model } from 'mongoose';
import { CreateRedeemDto, CreateRewardDto } from './dto/reward.dto';
import { UserService } from '@pay-cut/backend/user';

@Injectable()
export class RewardService {
  constructor(
    @InjectModel(Reward.name) private rewardModel: Model<RewardDocument>,
    @Inject(UserService) private readonly userService: UserService,
    @InjectConnection() private readonly connection: Connection
  ) {}

  async addReward(createRewardDto: CreateRewardDto) {
    // return await this.rewardModel.create(createRewardDto);
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const orgId = 'this comes from user jwt';
      // [TODO] - create reward amout to be converted to points... need an alogrithm fro this.
      console.log('updating user')
      const history = await this.userService.updateRewardPoint(createRewardDto.amount, createRewardDto.userId);
      const newRewardModel = new this.rewardModel({...createRewardDto, currentHistory: `A point of ${createRewardDto.amount} is added to ${history.old} , cuurent balance is: ${history.new} points`});
      console.log('creating new reward documetn')
      newRewardModel.save({ session })
      await session.commitTransaction();
    } catch(error) {
      console.log('in the trasaction error', error);
      await session.abortTransaction();
    } finally {
      session.endSession();
      
    }
  
  }
  async addRedeem(createRedeemDto: CreateRedeemDto) {
    const session = await this.connection.startSession();
    const redeemDataWithNotes: Reward = {
      ...createRedeemDto,
      currentHistory: 'chaing it from this to that',
    };

    session.startTransaction();
    try {
  
      const organisation = 'orgId from user jwt';
      const history = await this.userService.updateRewardPoint(createRedeemDto.points, createRedeemDto.userId);
      const newRewardModel = new this.rewardModel({...redeemDataWithNotes, currentHistory: `A point of ${createRedeemDto.points} is redeemed from ${history.old} , cuurent balance is: ${history.new} points`});
      newRewardModel.save({ session })
      await session.commitTransaction();
    } catch (error) {
      console.log('in the trasaction error', error);
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }

  async findRewardForAPeriod(period = '') {
    if (!period) {
      return await this.rewardModel.find();
    }
  }
}
