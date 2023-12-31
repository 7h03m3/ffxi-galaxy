import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('FFXI-Galaxy-API')
    .setDescription('FFXI-Galaxy Web Interface')
    .setVersion('1.0')
    .addTag('ffxi-galaxy')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  const configService: ConfigService = app.get(ConfigService);
  process.env.TZ = configService.get('timeZone');
  await app.listen(configService.get('port'));
}

bootstrap();
