import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Afiliado } from './entities/afiliado.entity';
import { CreateAfiliadoDto } from './dto/create-afiliado.dto';
import { UpdateAfiliadoDto } from './dto/update-afiliado.dto';

@Injectable()
export class AfiliadoService {
  constructor(
    @InjectRepository(Afiliado)
    private afiliadoRepo: Repository<Afiliado>,
  ) {}

  findAll() {
    return this.afiliadoRepo.find();
  }

  async findOne(id: string) {
    const afiliado = await this.afiliadoRepo.findOneBy({ id });
    if (!afiliado) throw new NotFoundException('Afiliado no encontrado');
    return afiliado;
  }

  async create(data: CreateAfiliadoDto) {
    const existente = await this.afiliadoRepo.findOneBy({ dni: data.dni });
    if (existente) {
      throw new BadRequestException(`Ya existe un afiliado con el DNI ${data.dni}`);
    }

    const nuevo = this.afiliadoRepo.create(data);
    return this.afiliadoRepo.save(nuevo);
  }

  async update(id: string, changes: UpdateAfiliadoDto) {
    const afiliado = await this.findOne(id);
    this.afiliadoRepo.merge(afiliado, changes);
    return this.afiliadoRepo.save(afiliado);
  }

  async remove(id: string) {
    const afiliado = await this.findOne(id);
    return this.afiliadoRepo.remove(afiliado);
  }
}
