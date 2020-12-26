import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Task } from 'src/model/TaskModel/Task.model';
import { TaskCategroy } from 'src/model/TaskModel/TaskCategroy.model';
import { TaskMController } from './task-m.controller';
import { TaskMService } from './task-m.service';
@Module({
  imports: [
    TypegooseModule.forFeature([
      TaskCategroy, Task
    ])
  ],
  controllers: [TaskMController],
  providers: [TaskMService]
})
export class TaskMModule { }
