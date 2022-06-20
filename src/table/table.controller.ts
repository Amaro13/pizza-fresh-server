import { Controller, Get, Post, Body } from '@nestjs/common'; // this is importing the methods used to render the data
import { TableService } from './table.service'; // this is importing the functions from table.service as methods
import { CreateTableDto } from './dto/create-table.dto'; // this is importing the functions from create-table.dto as methods
import { ApiTags } from '@nestjs/swagger'; // this is importing from the swagger for apiTags (must install with npm first)

@ApiTags('table')
@Controller('table') //using the table here you are setting the table as the prefix for this controller
export class TableController {
  constructor(private tableService: TableService) {} // this is creating in the class as the object tableService with the methods from the imported TableSevice as it's contents. and it's declared as private so it only exists inside of this class.

  //check this out, now you can do the get, post, put and delete easy.
  @Get() //using the @get to find all the tables
  findAll() {
    return this.tableService.findAll();
  }

  @Post() //using the @post to insert a new table
  create(@Body() createTableDto: CreateTableDto) {
    // with this @body it now is getting the info from createTableDto and inserting into the @body
    return this.tableService.create(createTableDto);
  }
}
