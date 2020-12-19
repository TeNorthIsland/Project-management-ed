import { ApiPropertyOptional } from "@nestjs/swagger"
import { arrayProp, ArrayProp, prop } from "@typegoose/typegoose"
import { IsNotEmpty } from "class-validator"

export class GlobalRole {

  @ApiPropertyOptional({ description: '角色名称', example: '访客' })
  @IsNotEmpty({ message: '不允许为空' })
  @prop({})
  name: string

  @ApiPropertyOptional({ description: '角色描述', example: '这个是一个默认的描述' })
  @prop({})
  descripition: string

  @ApiPropertyOptional({ description: '角色权限组', example: 'View,Edit,Super' })
  @prop({})
  rules: string
}