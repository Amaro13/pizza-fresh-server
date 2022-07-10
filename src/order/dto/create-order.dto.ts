import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'The user ID is creating the order',
    example: '0f4e748f-7c1e-41d1-b92a-9949af36faa5',
  })
  userId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Number of the table creating the order',
    example: 1,
  })
  tableNumber: number;

  @IsUUID(undefined, { each: true }) //this is testing if the condition is true
  @ApiProperty({
    description: 'List of IDs that are in the order',
    example:
      '["be02e7b0-238a-44c2-b9db-ccb339d63fc9", "f2e401a9-3fc4-4fae-92c2-cb6c4964641f"]',
  })
  products: string[];
}
