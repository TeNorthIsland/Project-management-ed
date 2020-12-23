import { ApiPropertyOptional } from "@nestjs/swagger"
import { prop, Ref } from "@typegoose/typegoose"
import { IsNotEmpty } from "class-validator"
import { User } from "../User/user.model"
import { Project } from "./Project.model"

export class ProjectDynamicModel {

  @ApiPropertyOptional({ description: '创建的时间', example: Date.now() })
  @prop({ default: Date.now })
  createAtTime: Date

  @ApiPropertyOptional({ description: '操作', example: 'change' })
  @IsNotEmpty({ message: 'S' })
  @prop({})
  options: string

  @ApiPropertyOptional({ description: '操作人', example: 'ISBD109U43' })
  @IsNotEmpty({ message: '操作人是必填的' })
  @prop({})
  useId: Ref<User>

  @ApiPropertyOptional({ description: '里程碑id', example: 'ISBD109U43' })
  @prop({})
  originMilestoneId: Ref<User>


  @ApiPropertyOptional({ description: '操作变更后存储的数据内容', example: '我饭神了百年更恩更恶二哥哥额额额' })
  @IsNotEmpty({ message: '变更内容不能为空' })
  @prop({})
  changeMessage: string

  @ApiPropertyOptional({ description: '项目的id', example: '项目的id' })
  @IsNotEmpty({ message: '项目id能为空' })
  @prop({})
  originProjectId: Ref<Project>

}