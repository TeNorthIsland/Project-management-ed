import { Controller, Post, Body, Get, Request, UseGuards } from '@nestjs/common';
import { LogingService } from './loging.service';
import { ApiOperation, ApiQuery, ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
import { User } from 'src/model/User/user.model';
import { Code } from 'src/model/Verification/verification';
import { EmailService } from 'src/common/email/email.service';
import { AuthGuard } from '@nestjs/passport';

@ApiHeader({ name: 'token' })  //如果直接丢这里就是全局的加
@ApiTags('注册模块验证模块')
@Controller('/loging')
export class LogingController {
  constructor(
    private readonly LoginService: LogingService,
    private readonly EmailService: EmailService,
  ) { }

  @ApiOperation({ summary: '获取验证码' })
  @ApiQuery({ name: 'email' })
  @Get('getVerify')
  getVerify(@Request() req: any): any {
    this.EmailService.sendEmail(req)
    return {
      success: true,
      message: '您的验证码已经下发请注意查收！ 3分钟内有效'
    }
  }

  @ApiOperation({ summary: '校验验证码' })
  @Post('getVerify')
  Verify(@Body() body: Code): any {
    return this.LoginService.validataCode(body)
  }


  @ApiOperation({ summary: '发起注册请求' })
  @Post('register')
  @ApiQuery({ name: 'code' })
  register(@Request() req: any, @Body() body: any): any {
    return this.LoginService.register(req, body)
  }

  // @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))  //这里就能直接做数据验证了,这东西就类似于路由守卫
  @Get('me')
  getProfile() {
    return { message: '您通过的了权限校验' }
  }
}
