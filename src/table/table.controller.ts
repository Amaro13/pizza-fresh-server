import { Controller, Get, Post } from '@nestjs/common'; // this is importing the methods used to render the data
import { TableService } from './table.service'; // this is importing the functions from table.service as methods

@Controller('table') //using the table here you are setting the table as the prefix for this controller
export class TableController {
  constructor(private tableService: TableService) {} // this is creating in the class as the object tableService with the methods from the imported TableSevice as it's contents. and it's declared as private so it only exists inside of this class.

  //check this out, now you can do the get, post, put and delete easy.
  @Get() //using the @get to find all the tables
  findAll() {
    return this.tableService.findAll();
  }

  @Post() //using the @post to insert a new table
  create() {
    return this.tableService.create();
  }
}
