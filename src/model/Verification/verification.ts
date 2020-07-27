import { prop, Ref } from '@typegoose/typegoose'
import { IsNotEmpty } from 'class-validator'
import {User} from '../User/user.model'
import { ApiPropertyOptional } from '@nestjs/swagger'


// 用类 定义模型

export class Code {
  @ApiPropertyOptional({description:'待验证的邮箱',example:'861795660@qq.com'})
  @prop({})  // 这个是写schma的东西，但是我们一般不写了
  email:string

  @ApiPropertyOptional({description:'验证码',example:'85464'})
  @prop()
  code:string

}
  