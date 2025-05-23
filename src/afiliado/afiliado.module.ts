import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Afiliado } from './entities/afiliado.entity';
import { AfiliadoService } from './afiliado.service';
import { AfiliadoController } from './afiliado.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Afiliado])],
  controllers: [AfiliadoController],
  providers: [AfiliadoService],
})
export class AfiliadoModule {}
