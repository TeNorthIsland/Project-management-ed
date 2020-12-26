import { ApiPropertyOptional } from "@nestjs/swagger"
import { prop, Ref } from "@typegoose/typegoose"
import { IsNotEmpty } from "class-validator"
import { User } from "../User/user.model"
import { ProjectCategory } from "./ProjectCategory.model"

export class Project {

  @ApiPropertyOptional({ description: '项目名称', example: '我是A项目' })
  @IsNotEmpty({ message: '项目名称不能为空' })
  @prop({})
  name: string

  @ApiPropertyOptional({ description: '项目编号', example: 'SASDA98766' })
  @IsNotEmpty({ message: '项目编号' })
  @prop({})
  numbering: string

  @ApiPropertyOptional({ description: '项目类型Id', example: ['5fe354c8c9ebe00d98787c83', '5fe354ccc9ebe00d98787c84', '5fe354cfc9ebe00d98787c85'] })
  @IsNotEmpty({ message: '项目类型不能为空' })
  @prop({ ref: () => ProjectCategory })
  projectCategoryId: Ref<ProjectCategory>[]

  @ApiPropertyOptional({ description: '项目计划开始时间', example: Date.now() })
  @IsNotEmpty({ message: '项目计划开始时间不能为空' })
  @prop({ default: Date.now })
  planStartTime: Date

  @ApiPropertyOptional({ description: '项目计划结束时间', example: Date.now() })
  @IsNotEmpty({ message: '项目计划结束时间不能为空' })
  @prop({ default: Date.now })
  planEndTime: Date

  @ApiPropertyOptional({ description: '项目实际开始时间', example: Date.now() })
  @prop({ default: Date.now })
  actualStartTime: Date

  @ApiPropertyOptional({ description: '项目实际结束时间', example: Date.now() })
  @prop({ default: Date.now })
  actualEndTime: Date

  @ApiPropertyOptional({ description: '项目经理Id', example: 'SASDA98766sss' })
  @IsNotEmpty({ message: '项目经理Id不能为空' })
  @prop({})
  projectManagerId: Ref<User>

  @ApiPropertyOptional({ description: '项目成员Ids', example: ['5fdda60ebdef57391ca93071', '5fdddf29242a1156182bda3c', '5fdde07a8ed4012274ab044d'] })
  @prop({ ref: () => User })
  projectEmpIds: Ref<User>[]

  @ApiPropertyOptional({ description: '项目描述', example: 'SASDA98766' })
  @prop({})
  projectIntroduction: string

  @ApiPropertyOptional({ description: '项目状态', example: 'SASDA98766' })
  @prop({})
  projectState: string

}