import { prop, Ref } from '@typegoose/typegoose'
import * as bcrypt from 'bcrypt'
import { ApiPropertyOptional, ApiRequestTimeoutResponse } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { GlobalRole } from '../GlobalRole/globalRole.model'


// 用类 定义模型
export class User {
  @ApiPropertyOptional({ description: '用户名', example: 'admin' })
  @IsNotEmpty({ message: '用户名不能为空' })
  @prop({ default: 'hahha' })
  username: string


  @ApiPropertyOptional({ description: '姓名', example: '老王' })
  @prop({})
  name: string

  @ApiPropertyOptional({ description: '手机', example: '18376627155' })
  @prop({})
  phoneNumber: string

  @ApiPropertyOptional({ description: '用户角色', example: '' })
  @prop({ ref: GlobalRole })
  rule: Ref<GlobalRole>

  @ApiPropertyOptional({ description: '用户邮箱', example: '861795660@qq.com' })
  @IsNotEmpty({ message: '用户邮箱不允许为空' })
  @prop({})
  email: string


  @ApiPropertyOptional({ description: '用户性别', example: 'isMan' })
  @prop({ default: 'isMan' })
  sex: string

  @ApiPropertyOptional({ description: '用户生日', example: '' })
  @prop({ default: Date.now })
  brith: Date

  @ApiPropertyOptional({ description: '描述', example: '这是一段简单的描述' })
  @prop({})
  description: string

  @ApiPropertyOptional({ description: '登录密码', example: '123456' })
  @IsNotEmpty({ message: '密码不能为空' })
  @prop({
    set: value => bcrypt.hashSync(value, 10),
    get: value => value,
    select: false, // 默认不允许查询出密码字段
  })
  password: string

}
