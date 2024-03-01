import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(
    session({
      name: 'Nest_JS_SESSION_ID',
      secret: 'my-secret',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 60000,
      },
    }),
  );

  await app.listen(8080);
}
bootstrap();
