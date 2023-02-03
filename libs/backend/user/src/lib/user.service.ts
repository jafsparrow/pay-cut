import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './model/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(userDto: CreateUserDto) {
    return await this.userModel.create(userDto);
  }

  async updateRewardPoint(userAquiredPoint: number, userId: string) {
    const currentPartnerUser: UserDocument = await this.userModel.findById(
      userId
    );
    const history = { old: currentPartnerUser.rewards, new: 0 };
    currentPartnerUser.rewards = currentPartnerUser.rewards + userAquiredPoint;
    history.new = currentPartnerUser.rewards;
    await currentPartnerUser.save();
    return history;
  }

  async updateRedeemPoints(userRequestedRedeemPoint: number, userId: string) {
    const currentPartnerUser: UserDocument = await this.userModel.findById(
      userId
    );
    const history = { old: currentPartnerUser.rewards, new: 0 };
    if (currentPartnerUser.rewards - userRequestedRedeemPoint < 0) {
      console.log('now it has to be an error ');
      throw new Error('cannot update');
    }
    currentPartnerUser.rewards =
      currentPartnerUser.rewards - userRequestedRedeemPoint;
    history.new = currentPartnerUser.rewards;
    await currentPartnerUser.save();

    return history;
  }
}
