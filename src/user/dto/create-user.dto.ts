import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Username. Used in the login. Must be unique',
    example: 'amarofrancisco',
  })
  nickname: string;

  @IsString()
  @ApiProperty({
    description: 'Username. Just for Exibition',
    example: 'Amaro Francisco',
  })
  name: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too weak',
  })
  @ApiProperty({
    description: 'Login password',
    example: 'Abcd@1234',
  })
  password: string;

  @ApiProperty({
    description: 'The password confirmation must be the same as the password',
    example: 'Abcd@1234',
  })
  confirmPassword: string;

  @IsUrl()
  @ApiProperty({
    description: 'User profile image',
    example: 'https://avatars.githubusercontent.com/u/88009922',
  })
  image: string;
}