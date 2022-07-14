import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';
import { User } from 'src/user/entities/user.entity'; //have to import this entity to make the LoggedUser on line 20 to work

@ApiTags('order')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({
    summary: 'Create an order',
  })
  create(@LoggedUser() user: User, @Body() createOrderDto: CreateOrderDto) {
    //including the LoggedUser from auth you increase the security
    return this.orderService.create(user.id, createOrderDto); //the user.id is taken from the user entity of User.
  }

  @Get()
  @ApiOperation({
    summary: 'List all orders',
  })
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualize the order by the id',
  })
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }
}
