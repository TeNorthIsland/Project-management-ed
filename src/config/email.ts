import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export default {
  transport: 'smtps://861795660@qq.com:dsumjmlrqjhdbcba@smtp.qq.com',
  defaults: {
    from: '"nest-modules" <modules@nestjs.com>',
  },

  template: {
    dir: join(__dirname, '../common/email/templates/email'),
    adapter: new HandlebarsAdapter(), // 适配器 同样的你也可以使用ejs
    options: {
      strict: true,
    },
  },
};
