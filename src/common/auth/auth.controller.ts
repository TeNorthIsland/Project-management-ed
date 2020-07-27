import { Controller, Get, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiHeaders, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from 'src/model/User/user.model';


@ApiTags('登录获取token')
@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,  //注入验证器
    ) {}



  // // 用户注册
  // @ApiOperation({summary:'用户注册'})  
  // @Post('admin')
  // async regets(@Body() Body:User):Promise<any> {  
  //   return this.authService.createUser(Body)
  // }

  // // 获取数据
  // @ApiOperation({summary:'获取当前的所有的数据'})  
  // @Get('admin')
  // async index():Promise<any> {  
  //   return this.authService.index()
  // } 

  // 核心代码，发给用户token
  @ApiOperation({summary:'登录接口获取token'})
  @UseGuards(AuthGuard('local'))
  @Post('/auth/login')
  async login(@Body() body:User) {
    return this.authService.login(body);
  }

  // // 正确的通过验证之后才能访问的接口
  // @UseGuards(AuthGuard('jwt'))  //这里就能直接做数据验证了
  // @Get('me')
  // getProfile() {
  //   return {message:'您通过的了权限校验'}
  // }
}
