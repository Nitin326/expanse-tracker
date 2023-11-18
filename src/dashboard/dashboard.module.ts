import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { ExpanseMiddleware } from 'src/auth/middlwware/expanse.middlware';
import { AuthModule } from 'src/auth/auth.module';
import { UserSchema } from 'src/schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[AuthModule,MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [DashboardController],
  providers: [DashboardService]
})

export class DashboardModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ExpanseMiddleware)
      .forRoutes('dashboard');
  }
}
