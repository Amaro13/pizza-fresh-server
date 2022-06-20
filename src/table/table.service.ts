import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  tables: Table[] = []; // this is creating the item tables in this class with the data pulled from the table.entity

  findAll() {
    return this.tables; //return the item tables created in the first line of this class
  }

  create(createTableDto: CreateTableDto) {
    const table: Table = { id: 'random_id', ...createTableDto }; //this creates an item called table that has an id and all the info from the createTableDto using the spread(...) operator

    this.tables.push(table); //this inserts the item table into the tables

    return table; // this returns the item table
  }
}
