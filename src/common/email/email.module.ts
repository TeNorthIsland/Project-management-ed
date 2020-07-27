import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Code } from 'src/model/Verification/verification';
import { LogingService } from 'src/modules/loging/loging.service';
import { User } from 'src/model/User/user.model';

@Module({
  imports: [
    TypegooseModule.forFeature([User,Code])],
  controllers: [EmailController],
  providers: [EmailService,LogingService],
  exports:[EmailService]
})
export class EmailModule {}
