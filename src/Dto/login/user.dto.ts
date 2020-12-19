import { IsNotEmpty } from "class-validator"

//  定义DTO模型
export class UserDto {
  username: string
  name: string
  phoneNumber: string
  rule: string

  @IsNotEmpty({ message: '用户邮箱不允许为空' })
  email: string

  sex: string
  brith: Date
  description: string

  @IsNotEmpty({ message: '密码不能为空' })
  password: string

}
