import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { ValidationPipe } from '@nestjs/common';
import * as compression from 'compression';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();  //解决跨域
  // 静态资源访问
  app.useStaticAssets(join(__dirname, './', 'uploads'))
  app.enableCors();  //解决静态资源跨域问题
  app.use(compression()); //开启http网络传输压缩

  const options = new DocumentBuilder() // swagger
    .setTitle('测试环境')
    .setDescription('这是最初版本的测试环境下的后台接口')
    .setVersion('1.0')
    .addTag('bm-laoli')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  app.useGlobalPipes(new ValidationPipe())  // 开启全局的验证管道和错误过滤   
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3045);
}
bootstrap();
