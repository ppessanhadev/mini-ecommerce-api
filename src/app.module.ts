import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ControllerModule } from '@controllers/controller.module';

@Module({
  imports: [
    ControllerModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI, { dbName: 'api' }),
  ],
})
export class AppModule {}
