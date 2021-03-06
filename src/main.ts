import { ValidationPipe } from '@nestjs/common'; //this adds the validation into the main(must install with npm first)
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from "@nestjs/platform-express"; //
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; //this adds the routes verification from swagger (must install with npm first)
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true }); // with this cors security as true, anyone can access the data inserted with a fetch freely

  // To get the https protocol
	app.set("trust proxy", 1);

  // Validation
  app.useGlobalPipes(new ValidationPipe()); //this validates the data with the ValidationPipe

  // Swagger
  const config = new DocumentBuilder() //this creates a documentBuilder for validation with swagger
    .setTitle('PizzaFresh')
    .setDescription('App for table management of a pizza place.')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('auth')
    .addTag('table')
    .addTag('product')
    .addTag('user')
    .addTag('order')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
