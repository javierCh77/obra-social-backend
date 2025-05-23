import { IsBoolean, IsDateString, IsEnum, IsOptional, IsString, Matches } from '@nestjs/class-validator';


export class CreateAfiliadoDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsEnum(['M', 'F', 'X'])
  sexo: 'M' | 'F' | 'X';

  @IsBoolean()
  esTitular: boolean;

  @IsString()
  numeroAfiliado: string;

  @IsString()
  @Matches(/^\d{7,8}$/, { message: 'DNI debe tener entre 7 y 8 dígitos' })
  dni: string;

  @IsString()
  cuil: string;

  @IsOptional()
  @IsString()
  dniFamiliar?: string;

  @IsOptional()
  @IsString()
  cuilFamiliar?: string;

  @IsDateString()
  fechaNacimiento: string;

  @IsDateString()
  fechaIngreso: string;

  @IsString()
  direccion: string;

  @IsOptional()
  @IsString()
  piso?: string;

  @IsOptional()
  @IsString()
  departamento?: string;

  @IsString()
  telefono: string;

  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  estado?: string;

  @IsOptional()
  @IsString()
  observaciones?: string;
}
