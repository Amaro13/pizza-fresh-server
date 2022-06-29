import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TableController } from './table.controller';
import { TableService } from './table.service';

@Module({
  imports: [PrismaModule], // get the PrismaModule from the prisma.module
  controllers: [TableController],
  providers: [TableService], // using the TableService as a provider, it makes it possible to send it's methods into a controller, in this case a TableController
})
export class TableModule {}
