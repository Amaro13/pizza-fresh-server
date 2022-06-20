import { Module } from '@nestjs/common';
import { TableController } from './table.controller';
import { TableService } from './table.service';

@Module({
  controllers: [TableController],
  providers: [TableService], // using the TableService as a provider, it makes it possible to send it's methods into a controller, in this case a TableController
})
export class TableModule {}
