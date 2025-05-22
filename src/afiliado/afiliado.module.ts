import { Module } from '@nestjs/common';
import { AfiliadoService } from './afiliado.service';
import { AfiliadoController } from './afiliado.controller';

@Module({
  controllers: [AfiliadoController],
  providers: [AfiliadoService],
})
export class AfiliadoModule {}
