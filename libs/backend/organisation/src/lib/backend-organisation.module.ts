import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Org, OrgSchema } from './model/organisation.schema';
import { OrgController } from './org.controller';
import { OrgService } from './org.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Org.name, schema: OrgSchema}])],
  controllers: [OrgController],
  providers: [OrgService],
  exports: [],
})
export class BackendOrganisationModule {}
