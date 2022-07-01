import { IsNumber, IsPositive } from 'class-validator'; //this is imported from the validator (must install with npm)
import { ApiProperty } from '@nestjs/swagger'; //this is imported from the swagger for tests (must install with npm first)

export class CreateTableDto {
  @IsNumber() //this rule from the validator makes it only possible to accept a type number
  @IsPositive() //this rule from the validator makes it only possible to accept a positive
  @ApiProperty({
    //this informs that this data is an Api property and adding the item it adds the property with the item as an example
    description: 'The table number',
    example: 1,
  })
  number: number;
}
