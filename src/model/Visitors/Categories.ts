import { prop } from '@typegoose/typegoose'
import  * as bcrypt from 'bcrypt'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'


// 用类 定义模型
export class Categories {

  @ApiPropertyOptional({description:'类别标题',example:'烟花爆竹类'})
  @IsNotEmpty({message:'类别标题不能为空'})
  @prop({})
  title:string
  
  @ApiPropertyOptional({description:'类别图标',example:'icon-fire'})
  @IsNotEmpty({message:'类别图标'})
  @prop({}) 
  icon:string


}
  