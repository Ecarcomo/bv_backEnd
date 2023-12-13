import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Stock } from './stock.entity';

@Injectable()
export class StockService {
  constructor(
    @Inject('STOCK_REPOSITORY')
    private stockRepository: Repository<Stock>,
  ) {}

  async findAll(): Promise<Stock[]> {
    return this.stockRepository.find();
  }
}