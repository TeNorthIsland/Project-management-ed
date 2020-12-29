import { ApiPropertyOptional } from "@nestjs/swagger"
import { prop, Ref } from "@typegoose/typegoose"
import { User } from "../User/user.model"
import { Task } from "./Task.model"

// 任务历史记录
export class TaskHistory {

  @ApiPropertyOptional({ description: '动态记录时间', example: Date.now() })
  @prop({ default: Date.now })
  createAtTime: Date

  @ApiPropertyOptional({ description: '所属任务id', example: 'ssdas' })
  @prop({ ref: () => Task })
  ref_Task: Ref<Task>

  @ApiPropertyOptional({ description: '操作', example: '' })
  @prop({})
  options: string

  @ApiPropertyOptional({ description: '操作人Id', example: '' })
  @prop({ ref: () => User })
  useId: Ref<User>

  @ApiPropertyOptional({ description: "操作变更之后的内容", example: '需求类型' })
  @prop({})
  changeMessage: string

}
