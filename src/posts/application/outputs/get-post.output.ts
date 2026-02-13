import { PostEntity } from 'src/posts/domain/entities/post-entity';

export type GetPostOutput = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export class GetPostOutputMapper {
  static toOutput(entity: PostEntity): GetPostOutput {
    return entity.toJson();
  }
}
