import { Injectable } from '@nestjs/common';
import { VaperDto } from './dto/vaper.dto';
import { ImageDto } from './dto/image.dto';

@Injectable()
export class AppService {
  getProducts(): VaperDto[] {
    return  [{
      id: 1,
      name: "NikBar 2500 PUFF Cool Mint",
      imageUrl: "https://nikbarofficial.com/wp-content/uploads/2023/05/Cool-Mint-Nikbar-2500-Puffs.png",
      description: "N2500 Puffs: Up to 2500\nE-liquid Capacity: 7,5ml\nNicotine Strength: 20mg & 50mg\nBattery Capacity: 950mAh\nCoil Type: COREX Heating Tech",
      price: 3500,
      offer_price:  2500,
      quantity: 10
    },
    {
      id: 2,
      name: "NikBar 4000 PUFF Blue Razz Ice",
      imageUrl: "https://nikbarofficial.com/wp-content/uploads/2023/05/Blue-Razz-Ice-4000-Puffs.png",
      description: "N4000 Puffs: Up to 4000\nE-liquid Capacity: 10ml\nNicotine Strength: 20mg & 50mg\nBattery Capacity: 400mAh (Rechargeable)\nCharging Port: Type-C\nCoil Type: COREX Heating Tech\nSize: 71x44x16mm",
      price: 3500,
      offer_price:  0,
      quantity: 10
    },
    {
      id: 3,
      name: "NikBar 2500 PUFF Cool Mint",
      imageUrl: "https://nikbarofficial.com/wp-content/uploads/2023/05/Cool-Mint-Nikbar-2500-Puffs.png",
      description: "N2500 Puffs: Up to 2500\nE-liquid Capacity: 7,5ml\nNicotine Strength: 20mg & 50mg\nBattery Capacity: 950mAh\nCoil Type: COREX Heating Tech",
      price: 3500,
      offer_price:  2500,
      quantity: 10
    },
    {
      id: 4,
      name: "NikBar 4000 PUFF Blue Razz Ice",
      imageUrl: "https://nikbarofficial.com/wp-content/uploads/2023/05/Blue-Razz-Ice-4000-Puffs.png",
      description: "N4000 Puffs: Up to 4000\nE-liquid Capacity: 10ml\nNicotine Strength: 20mg & 50mg\nBattery Capacity: 400mAh (Rechargeable)\nCharging Port: Type-C\nCoil Type: COREX Heating Tech\nSize: 71x44x16mm",
      price: 3500,
      offer_price:  0,
      quantity: 10
    },
    {
      id: 5,
      name: "NikBar 2500 PUFF Cool Mint",
      imageUrl: "https://nikbarofficial.com/wp-content/uploads/2023/05/Cool-Mint-Nikbar-2500-Puffs.png",
      description: "N2500 Puffs: Up to 2500\nE-liquid Capacity: 7,5ml\nNicotine Strength: 20mg & 50mg\nBattery Capacity: 950mAh\nCoil Type: COREX Heating Tech",
      price: 3500,
      offer_price:  2500,
      quantity: 10
    },
    {
      id: 6,
      name: "NikBar 4000 PUFF Blue Razz Ice",
      imageUrl: "https://nikbarofficial.com/wp-content/uploads/2023/05/Blue-Razz-Ice-4000-Puffs.png",
      description: "N4000 Puffs: Up to 4000\nE-liquid Capacity: 10ml\nNicotine Strength: 20mg & 50mg\nBattery Capacity: 400mAh (Rechargeable)\nCharging Port: Type-C\nCoil Type: COREX Heating Tech\nSize: 71x44x16mm",
      price: 3500,
      offer_price:  0,
      quantity: 10
    }];
  }

 
  getImages(): ImageDto[] {
    return  [{
      id: 1,
      imageUrl: "https://i.ibb.co/tqcq1J5/logo.png",
      size: "medium",
      positionId: "logo_img"
    },
    {
      id: 2,
      imageUrl: "https://i.ibb.co/b1GNMrC/slogan.png",
      size: "medium",
      positionId: "slogan_img"
    },
    {
      id: 3,
      imageUrl: "https://nikbarargentina.com.ar/wp-content/uploads/slider/cache/41a06d592c894f06a1633a63a70b0c24/4000-Puffs-04-1.png",
      size: "medium",
      positionId: "slide_img"
    }
   ];
  }

  getHello(): string {
    return 'Hello World!';
  }
}
