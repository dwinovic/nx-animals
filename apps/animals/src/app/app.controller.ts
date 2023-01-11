import { Controller, Get, Query } from '@nestjs/common';
import { Animal } from '../animals';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/animals')
  getAnimals() {
    return this.appService.getAnimals();
  }

  @Get('/search')
  serachAnimal(@Query() query: { q: string }): Animal[] {
    return this.appService.searchAnimal(query);
  }
}
