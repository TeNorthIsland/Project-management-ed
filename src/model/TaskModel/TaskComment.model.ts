import { ApiPropertyOptional } from "@nestjs/swagger"
import { prop, Ref } from "@typegoose/typegoose"
import { IsNotEmpty } from "class-validator"
import { Project } from "../ProjectDetails/Project.model"
import { User } from "../User/user.model"
import { Task } from "./Task.model"

// 任务评论
export class TaskComment {

  @ApiPropertyOptional({ description: '发布时间', example: Date.now() })
  @IsNotEmpty({ message: '发布时间不能为空' })
  @prop({ default: Date.now })
  time: Date

  @ApiPropertyOptional({ description: '发布用户', example: '' })
  @prop({ ref: () => User })
  useId: Ref<User>

  @ApiPropertyOptional({ description: '评论具体内容', example: '需求类型' })
  @prop({})
  content: string

  @ApiPropertyOptional({ description: '所属于的任务id', example: '需求类型' })
  @prop({ ref: () => Task })
  belong_taskId: Ref<Task>

  @ApiPropertyOptional({ description: '所属的项目的id', example: '需求类型' })
  @prop({ ref: () => Project })
  belong_projectId: Ref<Project>

  @ApiPropertyOptional({ description: '任务评论的状态', example: '需求类型' })
  @prop({})
  state: string

}
