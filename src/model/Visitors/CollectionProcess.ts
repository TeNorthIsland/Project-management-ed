import { prop, Ref } from '@typegoose/typegoose'
import  * as bcrypt from 'bcrypt'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { User } from '../User/user.model'


// 用类 定义模型
export class CollectionProcess {

  @ApiPropertyOptional({description:'证件名称',example:'烟花爆竹安全生产许可证'})
  @IsNotEmpty({message:'标题不能为空'})
  @prop({})
  title:string
  
  @ApiPropertyOptional({description:'证件缩略图',example:'icon-fire'})
  @prop({default:'asdasdasdasd'}) 
  image:string
 
  @ApiPropertyOptional({description:'编辑时间',example:'编辑时间'})
  @prop({default:new Date()})
  createAt:Date
  
  @ApiPropertyOptional({description:'具体内容',example:'icon-fire'})
  @prop({default:'asdasdasdasd'}) 
  content:string

  @ApiPropertyOptional({description:'领证流程的发布状态',example:false})
  @prop({default:false})  // 这个是写schma的东西，但是我们一般不写了
  state:Boolean

  @ApiPropertyOptional({description:'最后的操作人',example:'小王'})
  @prop({ref:User})  // 这个是写schma的东西，但是我们一般不写了
  last_update:Ref<User>
}
  