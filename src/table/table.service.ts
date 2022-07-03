import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
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

  async findById(id: string): Promise<Table> {
    const record = await this.prisma.table.findUnique({ where: { id } }); //return the item where the value id is equal to the one informed from the prisma.table

    if (!record) {
      throw new NotFoundException(`Register with the id:'${id}' not found.`);
    }

    return record;
  }

  async findOne(id: string): Promise<Table> {
    return this.findById(id);
  }

  create(dto: CreateTableDto): Promise<Table> {
    const data: Table = { ...dto }; //this creates an item called table that has an id(as optional in the entity) and all the info from the createTableDto using the spread(...) operator. If you name the receiving as data, you can just use the data in the create method, since the key and value is of the same name

    return this.prisma.table.create({ data }).catch(this.handleError); // this returns the new data table(since it has the name data you can just write data instead of data:data) to the prisma table with the id getting created automatically with the ORM. If an error occurs it prints the error and returns undefined.
  }

  async update(id: string, dto: UpdateTableDto): Promise<Table> {
    await this.findById(id);
    const data: Partial<Table> = { ...dto }; // here you are using the Partial <> to turn every value within, in this case the table, into optional values

    return this.prisma.table.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.table.delete({ where: { id } }); //deletes this item from the table
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(
      lastErrorLine || 'Some undefined error occurred',
    ); // this is magic, if it fails to proccess in any case, it returns the error
  }
}
