import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AfiliadoService } from './afiliado.service';
import { CreateAfiliadoDto } from './dto/create-afiliado.dto';
import { UpdateAfiliadoDto } from './dto/update-afiliado.dto';

@Controller('afiliados')
export class AfiliadoController {
  constructor(private readonly afiliadoService: AfiliadoService) {}

  @Get()
  findAll() {
    return this.afiliadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.afiliadoService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateAfiliadoDto) {
    return this.afiliadoService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAfiliadoDto) {
    return this.afiliadoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.afiliadoService.remove(id);
  }
}
