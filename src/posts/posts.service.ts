import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) { }
  async findOne(id: number): Promise<Post | null> {
    return undefined;
  }

  async findAll(): Promise<Post[]> {
    return undefined;
  }

  async getPublishedPosts(): Promise<Post[]> {
    return undefined;
  }

  async create(dto: CreatePostDto): Promise<Post> {
    const data: Prisma.PostCreateInput = {
      ...dto
    }

    return this.prisma.post.create({
      data
    })
  }

  async update(id: number, dto: UpdatePostDto): Promise<Post> {
    return undefined;
  }

  async remove(id: number): Promise<Post> {
    return undefined;
  }
}
