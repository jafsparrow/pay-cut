import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { Reward, RewardSchma } from './model/reward.schema';
import { RewardController } from './reward.controller';
import { RewardService } from './reward.service';
import { BackendUserModule} from '@pay-cut/backend/user'
@Module({imports: [MongooseModule.forFeature([
  { name: Reward.name, schema: RewardSchma}
]), BackendUserModule],
  controllers: [RewardController],
  providers: [RewardService],
  exports: [],
})
export class BackendRewardModule {}
