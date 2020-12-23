import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProjectDynamicModel } from 'src/model/ProjectDetails/ProjectDynamic.model';
import { LogController } from './log.controller';
import { LogService } from './log.service';

@Module({
  imports: [
    TypegooseModule.forFeature([ProjectDynamicModel]),
  ],
  controllers: [LogController],
  providers: [LogService]
})
export class LogModule { }
