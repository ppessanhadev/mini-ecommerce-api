import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ControllerModule } from '@controllers/controller.module';

@Module({
  imports: [
    ControllerModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
