import { Module } from '@nestjs/common';
import { UserModule } from '@controllers/user/user.module';
import { ProductModule } from '@controllers/product/product.module';

@Module({
  imports: [ProductModule, UserModule],
})
export class ControllerModule {}
