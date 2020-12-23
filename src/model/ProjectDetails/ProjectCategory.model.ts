import { ApiPropertyOptional } from "@nestjs/swagger"
import { prop } from "@typegoose/typegoose"
import { IsNotEmpty } from "class-validator"

export class ProjectCategory {

  @ApiPropertyOptional({ description: '分类名称', example: 'SASDA98766' })
  @IsNotEmpty({ message: '分类名称是必填的' })
  @prop({})
  name: string

  @ApiPropertyOptional({ description: '分类描述', example: 'SASDA98766' })
  @IsNotEmpty({ message: '分类描述是必填的' })
  @prop({})
  description: string
}