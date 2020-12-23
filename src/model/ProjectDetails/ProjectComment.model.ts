import { ApiPropertyOptional } from "@nestjs/swagger"
import { prop, Ref } from "@typegoose/typegoose"
import { IsNotEmpty } from "class-validator"
import { User } from "../User/user.model"
import { Project } from "./Project.model"

export class ProjectComment {

  @ApiPropertyOptional({ description: '创建的时间', example: Date.now() })
  @prop({ default: Date.now })
  createAtTime: Date


  @ApiPropertyOptional({ description: '评论用户id', example: 'ISBD109U43' })
  @IsNotEmpty({ message: '评论用户id是必填的' })
  @prop({})
  useId: Ref<User>


  @ApiPropertyOptional({ description: '评论内容', example: '我饭神了百年更恩更恶二哥哥额额额' })
  @IsNotEmpty({ message: '评论内容是必填的！' })
  @prop({})
  content: string


  @ApiPropertyOptional({ description: '所属于的任务id', example: '所属于的任务id' })
  @IsNotEmpty({ message: '所属于的任务id不能为空' })
  @prop({})
  originTaskId: Ref<User>

  @ApiPropertyOptional({ description: '所属的项目id', example: '所属的项目id' })
  @IsNotEmpty({ message: '所属的项目id不能为空' })
  @prop({})
  originProjectId: Ref<Project>

}