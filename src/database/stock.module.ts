import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { stockProviders } from './stock.providers';
import { StockService } from './stock.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...stockProviders,
    StockService,
  ],
})
export class StockModule {}