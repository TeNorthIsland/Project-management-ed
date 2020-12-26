import { ApiPropertyOptional } from "@nestjs/swagger"
import { prop, Ref } from "@typegoose/typegoose"
import { IsNotEmpty } from "class-validator"
import { Project } from "../ProjectDetails/Project.model"
import { ProjectMieage } from "../ProjectDetails/ProjectMileage.model"
import { User } from "../User/user.model"
import { TaskCategroy } from "./TaskCategroy.model"


export class Task {

  @ApiPropertyOptional({ description: '任务名称', example: 'AAA' })
  @IsNotEmpty({ message: '任务名称不嫩为空' })
  @prop({})
  task_name: string

  @ApiPropertyOptional({ description: '优先级', example: 'BBB' })
  @prop({})
  task_level: string

  @ApiPropertyOptional({ description: '所属的项目ID', example: '5fe3597eb2e27a082c85a7bf' })
  @prop({ ref: () => Project })
  task_of_project: Ref<Project>


  @ApiPropertyOptional({ description: '属于的里程碑ID', example: '5fe4a699753887579094d83b' })
  @prop({ ref: () => ProjectMieage })
  task_mileage: Ref<ProjectMieage>

  @ApiPropertyOptional({ description: '任务的类型ID', example: '5fe6b304c3db494e584284cc' })
  @IsNotEmpty({ message: '任务的类型ID不能为空' })
  @prop({ ref: () => TaskCategroy })
  task_type: Ref<TaskCategroy>

  // @ApiPropertyOptional({ description: '关联的其它任务的IdList', example: '需求类型' })
  // @prop({ ref: () => Task })
  // task_associated: Ref<Task>[]

  @ApiPropertyOptional({ description: '描述', example: '需求类型' })
  @prop({})
  task_descrpiton: string

  @ApiPropertyOptional({ description: '计划开始时间', example: Date.now() })
  @IsNotEmpty({ message: '计划开始时间' })
  @prop({ default: Date.now })
  plan_start_time: Date

  @ApiPropertyOptional({ description: '计划结束时间', example: Date.now() })
  @IsNotEmpty({ message: '计划结束时间' })
  @prop({ default: Date.now })
  plan_end_time: Date

  @ApiPropertyOptional({ description: '预计工时', example: Date.now() })
  @IsNotEmpty({ message: '预计工时' })
  @prop({ default: 8 })
  task_budget_time: number

  @ApiPropertyOptional({ description: '负责人ID', example: '5fdda60ebdef57391ca93071' })
  @IsNotEmpty({ message: '负责人ID' })
  @prop({ ref: () => User })
  task_responsible: Ref<User>

  @ApiPropertyOptional({ description: '协助人IDList', example: ['5fdda60ebdef57391ca93071'] })
  @IsNotEmpty({ message: '协助人IDList' })
  @prop({ ref: () => User })
  task_helper: Ref<User>[]

  @ApiPropertyOptional({ description: '确认人ID', example: '5fdda60ebdef57391ca93071' })
  @IsNotEmpty({ message: '确认人ID' })
  @prop({ ref: () => User })
  task_ok_name: Ref<User>

  @ApiPropertyOptional({ description: '状态（枚举）', example: 'XXX' })
  @IsNotEmpty({ message: '状态（枚举）' })
  @prop({})
  task_state: string

  //  文件id
  @ApiPropertyOptional({ description: '附件地址,对应到附件系统里去,一对多，允许多传值', example: '5fdda60ebdef57391ca93071' })
  @IsNotEmpty({ message: '附件地址,对应到附件系统里去,一对多，允许多传值' })
  @prop({ ref: () => User })
  file_id: Ref<User>

}
