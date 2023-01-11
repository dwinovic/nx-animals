import { Injectable, Query } from '@nestjs/common';
import { Animal } from '@nx-animals/shared-types';
import { animals } from '../animals';
@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to animals!' };
  }

  getAnimals(): Animal[] {
    return animals;
  }

  searchAnimal(query): Animal[] {
    const keyword = (query.q as string).toLocaleLowerCase();
    return animals.filter(
      ({ name }) => name.toLocaleLowerCase().includes(keyword) ?? ''
    );
  }
}
