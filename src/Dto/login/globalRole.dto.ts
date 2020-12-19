import { IsNotEmpty } from "class-validator"
export class GlobalRoleDto {
  @IsNotEmpty({ message: '不允许为空' })
  name: string
  descripition: string
  rules: string
}