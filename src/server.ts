import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule, { cors: true });
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );

  app.use(bodyParser.json());

  await app.listen(8000);
}
bootstrap();
