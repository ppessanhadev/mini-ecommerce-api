import { Module } from '@nestjs/common';
import { ProductController } from '@controllers/product';

@Module({
  controllers: [...ProductController],
})
export class ControllerModule {}
