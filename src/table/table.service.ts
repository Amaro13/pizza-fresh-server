import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany(); //return all the items in the prisma.table
  }

  findOne(id: string): Promise<Table> {
    return this.prisma.table.findUnique({ where: { id } }); //return the item where the value id is equal to the one informed from the prisma.table
  }

  create(dto: CreateTableDto): Promise<Table> {
    const data: Table = { ...dto }; //this creates an item called table that has an id(as optional in the entity) and all the info from the createTableDto using the spread(...) operator. If you name the receiving as data, you can just use the data in the create method, since the key and value is of the same name

    return this.prisma.table.create({ data }); // this returns the new data table(since it has the name data you can just write data instead of data:data) to the prisma table with the id getting created automatically with the ORM.
  }

  update(id: string, dto: UpdateTableDto): Promise<Table> {
    const data: Partial<Table> = { ...dto }; // here you are using the Partial <> to turn every value within, in this case the table, into optional values

    return this.prisma.table.update({
      where: { id },
      data,
    });
  }
}
