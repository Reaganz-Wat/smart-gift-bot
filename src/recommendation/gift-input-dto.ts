import { IsString, IsArray, IsBoolean, IsOptional, IsEnum } from 'class-validator';

export class SettingDto {
  @IsString()
  label: string;

  @IsEnum(["radio", "text", "number", "dropdown", "multi-checkbox"])
  type: string;

  @IsBoolean()
  required: boolean;

  @IsString()
  default: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  options?: string[];
}

export class TelexMessageDto {
  @IsString()
  message: string;

  @IsArray()
  settings: SettingDto[];
}
