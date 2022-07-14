import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }), // using this register and defaulStrategy we are informing that the jwt strategy will always be used in login
    JwtModule.register({
      secret: process.env.JWT_SECRET, // authentication test
      signOptions: { expiresIn: '24h' }, // the authentication lasts for 24h
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // the strategy that makes the defaultStrategy work (the jwt) is provided from the JwtStrategy created
})
export class AuthModule {}
