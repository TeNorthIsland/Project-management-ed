import { ApiPropertyOptional } from "@nestjs/swagger"
import { prop } from "@typegoose/typegoose"
import { IsNotEmpty } from "class-validator"

export class PmLable {

  @ApiPropertyOptional({ description: '标注描述', example: '您的项目即将上线！还剩2天！' })
  @IsNotEmpty({ message: '不允许为空' })
  @prop({})
  description: string

  @ApiPropertyOptional({ description: '标注级别', example: 'Seriously' })
  @IsNotEmpty({ message: '不允许为空' })
  @prop({})
  grade: string
}