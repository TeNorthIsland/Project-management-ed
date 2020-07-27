import { Module } from '@nestjs/common';
import { LogingController } from './loging.controller';
import { LogingService } from './loging.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from 'src/model/User/user.model';
import { Code } from 'src/model/Verification/verification';
import { EmailService } from 'src/common/email/email.service';
import { AuthModule } from 'src/common/auth/auth.module';


@Module({
  imports:[
    AuthModule,
    TypegooseModule.forFeature([Code,User]),
  ],
  controllers: [LogingController],
  providers: [EmailService,LogingService],
  exports:[LogingService]
})
export class LogingModule {}
