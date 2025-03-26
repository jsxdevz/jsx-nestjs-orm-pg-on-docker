import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Task } from './tasks/entities/task/task'; // ตรวจสอบ path ของ entity
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [Task], // ตรวจสอบว่าคุณได้เพิ่ม entity Task ไว้ที่นี่
        synchronize: true, // ใช้ true เฉพาะตอนพัฒนา
      }),
      inject: [ConfigService],
    }),
    TasksModule,
  ],
})
export class AppModule {}
