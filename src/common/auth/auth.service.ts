import { Injectable, UseFilters, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import * as bcrypt from 'bcrypt'
import { HttpExceptionFilter } from '../../common/filters/http-exception.filter';
import { User } from 'src/model/User/user.model';
import { QueryStructure } from 'src/utils/pageations';
import { JwtStrategy } from './jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private readonly UserMolde: ModelType<User>,
    private readonly jwtService: JwtService,
    private readonly JwtStrategy: JwtStrategy,
  ) { }


  // 获取当前登录的用户的数据
  async index(req): Promise<any> {
    let token = req.headers.token
    let res = await this.jwtService.verifyAsync(token)
    let { username } = res

    let data = this.UserMolde.find({ 'username': username })
    return data[0]
  }

  // 修改用户信息
  async updataUser(req, body) {
    let { id } = QueryStructure(req)
    return this.UserMolde.findByIdAndUpdate(id, body)
  }

  // 根据token结构出对应的数据结构
  async getUserInfoFormToken(token: string) {

  }

  // 进行验证发布给用户token
  @UseFilters(new HttpExceptionFilter())
  async login(req: any): Promise<any> {
    // 我们去数据库进行查询数据
    let payload = await this.UserMolde.find({ username: req.username }).select('+password').findOne({})
      .populate({
        path: 'rule'
      })
      .exec()
      
    console.log('payload', payload);

    if (!payload) {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, message: '用户不存在', error: 'user is notfind' },
        HttpStatus.BAD_REQUEST,
      );
    }

    // 进行解密运算和签名认证
    let UserData: User = payload as any
    let { username, password } = UserData
    const isValid = bcrypt.compareSync(req.password, password)  //

    if (!isValid) {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, message: '密码错误', error: 'password error' },
        HttpStatus.BAD_REQUEST,
      )
    }

    return {
      access_token: this.jwtService.sign({ username, password }),
      user: payload
    };
  }

}
