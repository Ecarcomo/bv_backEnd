import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { VaperDto } from './dto/vaper.dto';
import { ImageDto } from './dto/image.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getProducts')
  getProducts(): VaperDto[] {
    return this.appService.getProducts();
  }

  @Get('getImages')
  getImages(): ImageDto[] {
    return this.appService.getImages();
  }
}
