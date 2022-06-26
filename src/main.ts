import { ValidationPipe } from '@nestjs/common'; //this adds the validation into the main(must install with npm first)
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; //this adds the routes verification from swagger (must install with npm first)
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation
  app.useGlobalPipes(new ValidationPipe()); //this validates the data with the ValidationPipe

  // Swagger
  const config = new DocumentBuilder() //this creates a documentBuilder for validation with swagger
    .setTitle('PizzaFresh')
    .setDescription('Aplicação para gestão das mesas de uma pizzaria')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('table')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3333);
}
bootstrap();
