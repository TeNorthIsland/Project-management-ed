import { prop, Ref } from '@typegoose/typegoose'
import  * as bcrypt from 'bcrypt'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { Categories } from './Categories'
import { User } from '../User/user.model'


// 用类 定义模型
export class NormativeStandards {

  @ApiPropertyOptional({description:'规范标准标题',example:'烟花爆竹规范'})
  @IsNotEmpty({message:'规范标准标题是必填项'})
  @prop({})  // 这个是写schma的东西，但是我们一般不写了
  title:string

  @ApiPropertyOptional({description:'规范标准内容',example:'啊阿萨大大撒回家哈的阿萨大'})
  @IsNotEmpty({message:'规范标准内容是必填项'})
  @prop({})  // 这个是写schma的东西，但是我们一般不写了
  content:string

  @ApiPropertyOptional({description:'规范标准所属单位',example:'全国烟花爆竹管理办公室'})
  @IsNotEmpty({message:'规范标准所属单位,所属于得单位是必填项'})
  @prop({})  // 这个是写schma的东西，但是我们一般不写了
  membership:string

  @ApiPropertyOptional({description:'规范标准所发布的时间',example:new Date})
  @prop({default:new Date})  // 这个是写schma的东西，但是我们一般不写了
  createAt:Date

  
  @ApiPropertyOptional({description:'规范标准所发布的发布状态',example:false})
  @prop({default:false})  // 这个是写schma的东西，但是我们一般不写了
  state:Boolean

  @ApiPropertyOptional({description:'规范标准的类别id',example:'asdasdads'})
  @prop({ref:Categories})  // 这个是写schma的东西，但是我们一般不写了
  category:Array<Ref<Categories>>


  @ApiPropertyOptional({description:'最后的操作人',example:'小王'})
  @prop({ref:User})  // 这个是写schma的东西，但是我们一般不写了
  last_update:Array<Ref<User>>

}
  