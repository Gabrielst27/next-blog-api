import { BaseEntity, BaseProps } from 'src/shared/domain/entities/base-entity';

export type PostProps = {
  title: string;
  excerpt: string;
  author: string;
  content: string;
  published: boolean;
} & BaseProps;

export class PostEntity extends BaseEntity<PostProps> {
  constructor(props: PostProps, id?: string) {
    super(props, id);
  }
}
