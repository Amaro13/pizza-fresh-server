import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity'; // you have to import this to make the user for the authenticator on line 38 to work
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';
import { LoggedUser } from './logged-user.decorator';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Make a login receiving a token authentication',
  })
  login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    // this is the login function for authorization
    return this.authService.login(loginDto);
  }

  @Get()
  @UseGuards(AuthGuard()) //nest has a AuthGuard that checks the authorization, this makes the guard available for the route.
  @ApiOperation({
    summary: 'Returns the authenticated user in this moment',
  })
  @ApiBearerAuth()
  profile(@LoggedUser() user: User) {
    return user;
  }
}
