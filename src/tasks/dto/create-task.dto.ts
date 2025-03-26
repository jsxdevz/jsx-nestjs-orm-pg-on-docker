import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ description: 'ชื่อของ Task' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'คำอธิบายของ Task', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'สถานะว่า Task เสร็จหรือไม่', default: false })
  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean;
}
