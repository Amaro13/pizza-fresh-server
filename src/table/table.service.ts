import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.table.findMany(); //return all the items in the prisma.table
  }

  create(dto: CreateTableDto) {
    const data: Table = { ...dto }; //this creates an item called table that has an id(as optional in the entity) and all the info from the createTableDto using the spread(...) operator. If you name the receiving as data, you can just use the data in the create method, since the key and value is of the same name

    return this.prisma.table.create({ data }); // this returns the new data table(since it has the name data you can just write data instead of data:data) to the prisma table with the id getting created automatically with the ORM.
  }
}
