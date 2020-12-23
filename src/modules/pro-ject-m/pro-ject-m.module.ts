import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProjectComment } from 'src/model/ProjectDetails/ProjectComment.model';
import { PmLable } from 'src/model/ProjectM/lable.model';
import { ProJectMController } from './pro-ject-m.controller';
import { ProJectMService } from './pro-ject-m.service';

@Module({
  imports: [
    TypegooseModule.forFeature([PmLable, ProjectComment, ProjectComment]),
  ],
  controllers: [ProJectMController],
  providers: [ProJectMService]
})
export class ProJectMModule { }
