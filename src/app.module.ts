import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

// Módulos propios
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

// Entidades
import { User } from './users/entities/user.entity';
import { Afiliado } from './afiliado/entities/afiliado.entity';
import { AfiliadoModule } from './afiliado/afiliado.module';




@Module({
  imports: [
    // ✅ Configuración global de variables de entorno
    ConfigModule.forRoot({ isGlobal: true }),

    // ✅ Conexión a base de datos PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      synchronize: true, // Solo para desarrollo
      autoLoadEntities: true,
      entities: [User, Afiliado], // útil si autoLoadEntities = false
    }),

    // ✅ Archivos estáticos públicos
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    // ✅ Módulos de tu aplicación
    UsersModule,
    AuthModule,
    AfiliadoModule
  
  ],
})
export class AppModule {}
