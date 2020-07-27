import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {  DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { ValidationPipe } from '@nestjs/common';
import * as compression from 'compression';
import {HttpExceptionFilter} from './common/filters/http-exception.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();  //解决跨域s
  app.use(compression()); //开启压缩

  const options = new DocumentBuilder()
  .setTitle('测试环境')
  .setDescription('这是最初版本的测试环境下的后台接口')
  .setVersion('1.0')
  .addTag('bm-laoli')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);
  
  app.useGlobalPipes( new ValidationPipe() )   
  
  app.useGlobalFilters(new HttpExceptionFilter());  
  await app.listen(3000);
}
bootstrap();
