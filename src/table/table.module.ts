import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TableController } from './table.controller';
import { TableService } from './table.service';

@Module({
  imports: [PrismaModule,PassportModule.register({ defaultStrategy: 'jwt' })], // get the PrismaModule from the prisma.module
  controllers: [TableController],
  providers: [TableService], // using the TableService as a provider, it makes it possible to send it's methods into a controller, in this case a TableController
})
export class TableModule {}
