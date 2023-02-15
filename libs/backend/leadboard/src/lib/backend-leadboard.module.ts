import { Module } from '@nestjs/common';
import { BackendLeadboardController } from './backend-leadboard.controller';

@Module({
  controllers: [BackendLeadboardController],
  providers: [],
  exports: [],
})
export class BackendLeadboardModule {}
