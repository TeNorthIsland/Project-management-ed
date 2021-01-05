import { Controller, Get, Post, Request, UseGuards, Body, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiHeaders, ApiPropertyOptional, ApiQuery, ApiHeader } from '@nestjs/swagger';
import { User } from 'src/model/User/user.model';
import { UserDto } from 'src/Dto/login/user.dto';


@ApiTags('登录获取token')
@Controller('/api')
export class AuthController {
  constructor(
    private readonly authService: AuthService,  //注入验证器
  ) { }

  // 修改用户信息
  @ApiOperation({ summary: '修改用户信息' })
  @ApiQuery({ name: 'id' })
  @Post('edit')
  async edit(@Request() req: any, @Body() Body: User): Promise<any> {
    return this.authService.updataUser(req, Body)
  }

  // 获取数据 
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '获取当前登录的用户数据' })
  @ApiHeader({ name: 'token' })
  @Get('admin')
  async index(@Request() req: any): Promise<any> {
    return this.authService.index(req)
  }

  // 核心代码，发给用户token
  @ApiOperation({ summary: '登录接口获取token' })
  @UseGuards(AuthGuard('local')) // 当您在部署的时候，请使用此字段
  @Post('/auth/login')
  async login(@Body() body: any) {
    return this.authService.login(body);
  }

  // // 正确的通过验证之后才能访问的接口
  // @UseGuards(AuthGuard('jwt'))  //这里就能直接做数据验证了
  // @Get('me')
  // getProfile() {
  //   return {message:'您通过的了权限校验'}
  // }
}
