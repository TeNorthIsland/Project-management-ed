import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from 'src/model/User/user.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Code } from 'src/model/Verification/verification';
import { QueryStructure } from 'src/utils/pageations';

@Injectable()
export class LogingService {
  constructor(
    @InjectModel(User) private readonly UserModel:ModelType<User>,
    @InjectModel(Code) private readonly CodeModel:ModelType<Code>,
  ){}


  // 生成注册码
  async create(body:any){
    return await this.CodeModel.create(body)
  }
  
  // 查询验证码
  async validataCode(code:any){
    let restul =  await this.CodeModel.find({email:code.email,code:code.code})
    if( restul.length === 0){
      return { message:'验证码错误请重试 '}
    }
    return { message:'验证通过' }
  }

  // 发起注册请求
  async register(req:any,body:User){
    const { email }  = body
    const { code }   = QueryStructure(req)
    
    let user =  await this.CodeModel.find({email:email,code:code})
    if(! (user.length)){
      return { message:'您还未注册，请先注册' }
    }

    return await this.UserModel.create(body)
  }

  // 发起登录请求,登录的时候要求有验证
  
}
