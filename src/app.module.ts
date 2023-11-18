import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpanseModule } from './expanse/expanse.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://exapnse-track:DThSUcLlAW8YQKlQ@cluster0.xif31.mongodb.net/',{dbName: 'exapnse-track'}),
    ExpanseModule,
    AuthModule,
    UserModule,
    DashboardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
