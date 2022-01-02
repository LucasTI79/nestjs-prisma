import { IsBoolean, IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';
import { Post } from '../entities/post.entity';

export class CreatePostDto extends Post {
  @IsEmail()
  authorEmail: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  title: string;
}
