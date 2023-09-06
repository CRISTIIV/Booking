import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();//habilitar cors
  //puerto 3002
  await app.listen(parseInt(process.env.APP_PORT,10));
}

bootstrap();
