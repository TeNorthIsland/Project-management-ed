import { Module } from '@nestjs/common';
import { VisitorsController } from './visitors.controller';
import { VisitorsService } from './visitors.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { DocNotification } from 'src/model/Visitors/DocNotification';
import { AccessMessages } from 'src/model/Visitors/AccessMessages';
import { NormativeStandards } from 'src/model/Visitors/NormativeStandards';
import { Categories } from 'src/model/Visitors/Categories';
import { CollectionProcess } from 'src/model/Visitors/CollectionProcess';

@Module({
  imports:[
    TypegooseModule.forFeature([ 
      DocNotification,AccessMessages,
      NormativeStandards,Categories,
      CollectionProcess ])
  ],
  controllers: [VisitorsController],
  providers: [VisitorsService]
})
export class VisitorsModule {}
