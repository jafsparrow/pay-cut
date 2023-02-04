import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BarcodeService } from '@pay-cut/backend/barcode';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './model/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,

    @Inject(BarcodeService) private readonly barcodeService: BarcodeService
  ) {}

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

  async findUserFromUserBarcode(barcode: string) {
    const userId = await this.barcodeService.getUserIdfromBarcode(barcode);
    const userDoc = await this.userModel.findById(userId);
    return userDoc;
  }
}
