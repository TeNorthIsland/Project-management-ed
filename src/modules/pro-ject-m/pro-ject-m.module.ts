import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Project } from 'src/model/ProjectDetails/Project.model';
import { ProjectCategory } from 'src/model/ProjectDetails/ProjectCategory.model';
import { ProjectComment } from 'src/model/ProjectDetails/ProjectComment.model';
import { ProjectMieage } from 'src/model/ProjectDetails/ProjectMileage.model';
import { PmLable } from 'src/model/ProjectM/lable.model';
import { TaskCategroy } from 'src/model/TaskModel/TaskCategroy.model';
import { User } from 'src/model/User/user.model';
import { ProJectMController } from './pro-ject-m.controller';
import { ProJectMService } from './pro-ject-m.service';

@Module({
  imports: [
    TypegooseModule.forFeature([
      PmLable, ProjectComment, ProjectComment,
      Project, User, ProjectCategory,
      ProjectMieage, TaskCategroy
    ]),
  ],
  controllers: [ProJectMController],
  providers: [ProJectMService]
})
export class ProJectMModule { }
