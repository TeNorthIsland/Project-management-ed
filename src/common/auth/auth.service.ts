import { Injectable, UseFilters, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import  * as bcrypt from 'bcrypt'
import { HttpExceptionFilter } from '../../common/filters/http-exception.filter';
import { User } from 'src/model/User/user.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private readonly UserMolde:ModelType<User>,
    private readonly jwtService: JwtService,
  ) {}


  // 获取所有数据
  async index () :Promise<any> {
    return this.UserMolde.find().select('+password')
  }


  // 进行验证发布给用户token
  @UseFilters(new HttpExceptionFilter())
  async login(req:User): Promise<any> {
    // 我们去数据库进行查询数据
    let payload  =  await this.UserMolde.find({username:req.username}).select('+password')

    
    if(payload.length === 0){
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, message: '用户不存在', error: 'user is notfind' },
        HttpStatus.BAD_REQUEST,
      );
    }

      // 进行解密运算和签名认证
      let UserData:User = payload[0] as any
      let {  username,password } = UserData    
      const isValid = bcrypt.compareSync(req.password, password)

      if( !isValid ){
        throw new HttpException( 
          { status: HttpStatus.BAD_REQUEST, message: '密码错误', error: 'password error' },
          HttpStatus.BAD_REQUEST,
        )
      }

    return {
      access_token: this.jwtService.sign({ username,password}),
    };
  }

}
