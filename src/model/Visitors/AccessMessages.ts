import { prop } from '@typegoose/typegoose'
import  * as bcrypt from 'bcrypt'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'


// 用类 定义模型
export class AccessMessages {

  @ApiPropertyOptional({description:'留言信息',example:'你们公司的产品实在是太好用了，好用得 不！得了！'})
  @IsNotEmpty({message:'留言信息不允许为空'})
  @prop({})  // 这个是写schma的东西，但是我们一般不写了
  content:string

  @ApiPropertyOptional({description:'留言的创建时间',example:new Date()})
  @prop({default:new Date()})
  createAt:Date
}
  