import { Module } from '@nestjs/common';
import { AppService } from './app.service';
// 配置项分离模块
import { ConfigModule,ConfigService } from 'nestjs-config';
import * as path from 'path';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailModule } from './common/email/email.module';
import { AppController } from './app.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModule } from './common/auth/auth.module';
import { LogingModule } from './modules/loging/loging.module';
import { VisitorsModule } from './modules/visitors/visitors.module';
@Module({
  imports: [
    // 配置项集中管理
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    // 进行邮件验证项
    MailerModule.forRootAsync({  // 配置我们的邮件服务配置项
      useFactory: (config: ConfigService) => config.get('email'),
      inject: [ConfigService], // 外部的持续注入，注入到具体的模块中去
    }),
    // 配置数据库服务项
    TypegooseModule.forRoot("mongodb://localhost:27017/SafetySystm-api", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    EmailModule,
    AuthModule,
    LogingModule,
    VisitorsModule,
  
    
  ],
  controllers:[AppController],
  providers: [AppService],
})
export class AppModule {}
