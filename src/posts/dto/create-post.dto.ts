import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { Post } from '../entities/post.entity';

export class CreatePostDto extends Post {
  @IsNumber()
  authorId?: number;
  @IsString()
  content?: string;
  @IsBoolean()
  published?: boolean;
  @IsString()
  title: string;
}
