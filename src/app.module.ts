import { Module } from '@nestjs/common';
import { AppService } from './app.service';
// 配置项分离模块
import { ConfigModule, ConfigService } from 'nestjs-config';
import * as path from 'path';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailModule } from './common/email/email.module';
import { AppController } from './app.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModule } from './common/auth/auth.module';
import { LogingModule } from './modules/loging/loging.module';
import { AlbumModule } from './common/album/album.module';
import { GroleModule } from './modules/grole/grole.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProJectMModule } from './modules/pro-ject-m/pro-ject-m.module';
import { LogModule } from './modules/log/log.module';
import configDatabase from './config/database'


@Module({
  imports: [
    // 部署客户端 程序
    // 客户端
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    // 配置项集中管理
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    // 进行邮件验证项
    MailerModule.forRootAsync({  // 配置我们的邮件服务配置项
      useFactory: (config: ConfigService) => config.get('email'),
      inject: [ConfigService], // 外部的持续注入，注入到具体的模块中去
    }),
    // 配置数据库服务项
    TypegooseModule.forRoot(configDatabase.uri, {
      ...configDatabase.other
    }),
    EmailModule,
    AuthModule,
    LogingModule,
    AlbumModule,
    GroleModule,
    ProJectMModule,
    LogModule


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
