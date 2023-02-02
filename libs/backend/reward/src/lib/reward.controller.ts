import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { Body, Get } from "@nestjs/common";
import { CreateRedeemDto, CreateRewardDto } from "./dto/reward.dto";
import { RewardService } from "./reward.service";



@Controller('reward')
export class RewardController {

constructor(private rewardService: RewardService){}

@Post()
createReward(@Body() createRewardDto: CreateRewardDto) {
    return this.rewardService.addReward(createRewardDto);
}

@Post('redeem')
createRedeem(@Body() createRedeemDto: CreateRedeemDto) {
    return this.rewardService.addRedeem(createRedeemDto)
}

@Get()
findRewardForAPeriod(period: string) {
    return this.rewardService.findRewardForAPeriod('')
}
}