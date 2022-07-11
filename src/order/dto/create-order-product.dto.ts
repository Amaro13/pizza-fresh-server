import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, IsUUID } from 'class-validator';

export class CreateOrderProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID of the product',
    example: 'be02e7b0-238a-44c2-b9db-ccb339d63fc9',
  })
  productId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Quantity of itens in the order',
    example: 1,
  })
  quantity: number;

  @IsString()
  @ApiProperty({
    description: 'Product observations',
    example: 'Sem cebola',
  })
  description: string;
}
