import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'Name of the product',
    example: 'Pepperoni pizza',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Product Description',
    example:
      'A pepperoni pizza genius, what else must you know? There is cheese, dought, and pepperoni.',
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Product Price',
    example: 12.34,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Product Image',
    example: 'https://i.imgur.com/hNE75Iw.png',
  })
  image: string;
}
