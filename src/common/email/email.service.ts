import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';  // 这个包是需要自己安装的
import { QueryStructure } from 'src/utils/pageations';
import { LogingService } from 'src/modules/loging/loging.service';

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly LoginService: LogingService,
    ) {}

  sendEmail(req:any) {
    let { email } = QueryStructure(req)

    let code = "";
     for(var i = 1;i <= 6;i++){
         const num = Math.floor(Math.random()*10);
         code += num;
     }
    let body = {email, code }
    this.LoginService.create(body)

    this.mailerService.sendMail({
      to: email,
      from: '861795660@qq.com',
      subject: '来自BM老李',
      template: 'welcome',
      context: { 
        code,
      },
    });
  }
}
