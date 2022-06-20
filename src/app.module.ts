import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableModule } from './table/table.module'; //Importing the table module to get it's routes

@Module({
  imports: [TableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
