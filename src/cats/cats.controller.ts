import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    // ** service 단을 dependency injection 하는 과정
    // - 아래 내용은 catsController라는 소비자가 catsService 라는 제품을 주입 받음
    // - 공급자는 Module에 존재.
    constructor(private readonly catsSrvice: CatsService) {}

    // cats/
    @Get()
    getAllCat() {
        return 'all cat';
    }

    // cats/:id
    @Get(':id')
    getOneCat() {
        return 'one cat';
    }

    @Post()
    createCat() {
        return 'create cat';
    }

    @Put(':id')
    updateCat() {
        return 'update cat';
    }

    @Patch(':id')
    updatePartialCat() {
        return 'update partial cat';
    }

    @Delete(':id')
    deleteCat() {
        return 'delete service';
    }
}
