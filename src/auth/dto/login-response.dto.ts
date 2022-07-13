import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class LoginResponseDto { //This is the answer given from a Login attempt
  @ApiProperty({
    description: 'JWT generated by the Login',
    example: 'TOKEN_GENERATED_AUTOMATICALLY',
  })
  token: string;

  @ApiProperty({
    description: 'Authenticated user Id',
  })
  user: User;
}