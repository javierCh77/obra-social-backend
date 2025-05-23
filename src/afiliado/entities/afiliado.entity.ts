import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('afiliados')
export class Afiliado {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ type: 'enum', enum: ['M', 'F', 'X'] })
  sexo: 'M' | 'F' | 'X';

  @Column()
  esTitular: boolean;

  @Column()
  numeroAfiliado: string;

 @Column({ unique: true })
dni: string;
  
  @Column()
  cuil: string;

  @Column({ nullable: true })
  dniFamiliar?: string;
  
  @Column({ nullable: true })
  cuilFamiliar?: string;

  @Column({ type: 'date' })
  fechaNacimiento: string;
  
  @Column({ type: 'date' })
  fechaIngreso: string;

  @Column()
  direccion: string;
  
  @Column({ nullable: true }) 
  piso?: string;
  
  @Column({ nullable: true })
  departamento?: string;

  @Column()
  telefono: string;
  
  @Column()
  email: string;

  @Column({ nullable: true })
  estado?: string;
  
  @Column({ nullable: true })
  observaciones?: string;
}
