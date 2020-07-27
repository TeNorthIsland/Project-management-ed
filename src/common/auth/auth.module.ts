import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from 'src/model/User/user.model';
import { Code } from 'src/model/Verification/verification';

@Module({
  imports: [
    TypegooseModule.forFeature([Code,User]),
    PassportModule,
    // 注册验证器
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy], //依赖进行注入  
  exports: [AuthService],
})
export class AuthModule {}
