import { prop } from '@typegoose/typegoose'
import  * as bcrypt from 'bcrypt'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'


// 用类 定义模型
export class User {
  @ApiPropertyOptional({description:'用户名',example:'admin'})
  @IsNotEmpty({message:'改表单字段不允许为空'})
  @prop({default:'hahha'})  // 这个是写schma的东西，但是我们一般不写了
  username:string

  @ApiPropertyOptional({description:'用户邮箱',example:'861795660@qq.com'})
  @IsNotEmpty({message:'改表单字段不允许为空'})
  @prop({})  // 这个是写schma的东西，但是我们一般不写了
  email:string

  @ApiPropertyOptional({description:'登录密码',example:'123456'})
  @prop({
    set:value =>  bcrypt.hashSync(value,10),
    get:value => value,
    select: false, // 默认不允许查询出密码字段
  })
  password:string
}
  