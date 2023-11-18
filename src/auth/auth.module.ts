import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: "zjP9h6ZI5LoSKCRj547578364gcvc34vc6",
      signOptions: { expiresIn: '1d' }, // e.g. 30s, 7d, 24h
    }),
  ],
  controllers: [],
  providers: [AuthService,JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}