import { PostValidatorFactory } from 'src/posts/domain/validators/post-validator';
import { BaseEntity, BaseProps } from 'src/shared/domain/entities/base-entity';
import { EntityValidationError } from 'src/shared/domain/errors/validation.error';

export type PostProps = {
  title: string;
  excerpt: string;
  author: string;
  content: string;
  published: boolean;
} & BaseProps;

export class PostEntity extends BaseEntity<PostProps> {
  constructor(props: PostProps, id?: string) {
    PostEntity.validate(props);
    super(props, id);
  }

  static validate(props: PostProps): void {
    const validator = PostValidatorFactory.create();
    const isValid = validator.validate(props);
    if (!isValid) {
      throw new EntityValidationError(validator.errors);
    }
  }
}
