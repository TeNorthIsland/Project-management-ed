import { ApiPropertyOptional } from "@nestjs/swagger"
import { prop, Ref } from "@typegoose/typegoose"
import { IsNotEmpty } from "class-validator"
import { User } from "../User/user.model"
import { Project } from "./Project.model"

export class ProjectMieage {
  @ApiPropertyOptional({ description: '里程碑名称', example: '我是里程碑1' })
  @prop({})
  name: string

  @ApiPropertyOptional({ description: '里程碑负责人', example: 'ISBD109U43' })
  @IsNotEmpty({ message: '里程碑负责人是必填的' })
  @prop({})
  useId: Ref<User>

  @ApiPropertyOptional({ description: '里程碑描述', example: 'change' })
  @IsNotEmpty({ message: '里程碑描述不能为空' })
  @prop({})
  description: string

  @ApiPropertyOptional({ description: '项目里程碑计划开始时间', example: Date.now() })
  @IsNotEmpty({ message: '项目里程碑计划开始时间不能为空' })
  @prop({ default: Date.now })
  planStartTime: Date

  @ApiPropertyOptional({ description: '项目里程碑计划结束时间', example: Date.now() })
  @IsNotEmpty({ message: '项目里程碑计划结束时间不能为空' })
  @prop({ default: Date.now })
  planEndTime: Date

  @ApiPropertyOptional({ description: '项目里程碑实际开始时间', example: Date.now() })
  @prop({ default: Date.now })
  actualStartTime: Date

  @ApiPropertyOptional({ description: '项目里程碑实际结束时间', example: Date.now() })
  @prop({ default: Date.now })
  actualEndTime: Date

  @ApiPropertyOptional({ description: '项目的id', example: '项目的id' })
  @IsNotEmpty({ message: '所属于的项目id能为空' })
  @prop({})
  originProjectId: Ref<Project>


}