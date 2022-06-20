import { Controller, Get, Post } from '@nestjs/common'; // this is importing the methods used to render the data

@Controller('table') //using the table here you are setting the table as the prefix for this controller
export class TableController {
  //check this out, now you can do the get, post, put and delete easy.
  @Get() //using the @get to find all the tables
  findAll() {
    return 'Buscar todas as mesas';
  }

  @Post() //using the @post to insert a new table
  create() {
    return 'Criar uma mesa';
  }
}
