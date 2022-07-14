import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  HttpStatus,
  HttpCode,
  UseGuards,
} from '@nestjs/common'; // this is importing the methods used to render the data
import { TableService } from './table.service'; // this is importing the functions from table.service as methods
import { CreateTableDto } from './dto/create-table.dto'; // this is importing the functions from create-table.dto as methods
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'; // this is importing from the swagger for apiTags (must install with npm first)
import { Table } from './entities/table.entity';
import { UpdateTableDto } from './dto/update-table.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('table') // links the controller to the all the APITAGs (get, post, delete, etc)
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('table') //using the table here you are setting the table as the prefix for this controller
export class TableController {
  constructor(private tableService: TableService) {} // this is creating in the class as the object tableService with the methods from the imported TableSevice as it's contents. and it's declared as private so it only exists inside of this class.

  //check this out, now you can do the get, post, put and delete easy.
  @Get() //using the @get to find all the tables
  @ApiOperation({
    summary: 'List all the tables',
  })
  findAll(): Promise<Table[]> {
    return this.tableService.findAll();
  }

  @Get(':id') // using the :id is to define that the parameter id is to be brought into this property as a variable
  @ApiOperation({
    summary: 'Show a table',
  })
  findOne(@Param('id') id: string): Promise<Table> {
    // the @Param must be included to define the id as parameter of search. Don't forget when using param no :.
    return this.tableService.findOne(id);
  }

  @Post() //using the @post to insert a new table
  @ApiOperation({
    summary: 'Create a table',
  })
  create(@Body() dto: CreateTableDto): Promise<Table> {
    // with this @body it now is getting the info from createTableDto and inserting into the @body
    return this.tableService.create(dto);
  }

  @Patch(':id') //the patch is used when you want to update partially or fully the values of an object while the post updates it fully
  @ApiOperation({
    summary: 'Updates a table by id',
  })
  update(@Param('id') id: string, @Body() dto: UpdateTableDto): Promise<Table> {
    // requires the id and receives it as string, pulls the value in the body and receives the UpdateTableDto as object
    return this.tableService.update(id, dto);
  }

  @Delete(':id') // is used to delete the item witch contains the id
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletes the table by id',
  })
  delete(@Param('id') id: string) {
    // requires the id as Param and receives the id as string, with the delete it finds the item with this id and deletes it
    this.tableService.delete(id);
  }
}
