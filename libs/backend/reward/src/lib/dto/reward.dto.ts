export class CreateRewardDto {
    type: string;
    amount: number;
    userId: string;

}

export class CreateRedeemDto {
    type: string;
    points: number;
    userId: string;
}