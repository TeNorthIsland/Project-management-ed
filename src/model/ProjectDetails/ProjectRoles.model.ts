import { ApiPropertyOptional } from "@nestjs/swagger";
import { prop, Ref } from "@typegoose/typegoose";
import { IsNotEmpty } from "class-validator";
import { User } from "../User/user.model";
import { Project } from "./Project.model";

// 项目中的角色
export class ProjectRoles {

  @ApiPropertyOptional({ description: '角色名称', example: 'ISBD109U43' })
  @IsNotEmpty({ message: '名称不能为空' })
  @prop({})
  name: string

  @ApiPropertyOptional({ description: '角色描述', example: 'ISBD109U43' })
  @IsNotEmpty({ message: '描述不能为空' })
  @prop({})
  descriptin: string

  @ApiPropertyOptional({ description: '角色所属于的项目', example: 'ISBD109U43' })
  @IsNotEmpty({ message: '角色所属于的项目是必填的' })
  @prop({})
  originId: Ref<Project>

  @ApiPropertyOptional({ description: '角色下成员的ids', example: 'ISBD109U43' })
  @IsNotEmpty({ message: '角色下成员的ids' })
  @prop({ ref: () => User })
  emptyIds: Ref<User>[]
}
