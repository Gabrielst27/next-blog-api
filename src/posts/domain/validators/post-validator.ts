import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PostProps } from 'src/posts/domain/entities/post-entity';
import { ClassValidator } from 'src/shared/domain/validators/class.validator';

class PostRules {
  @IsNotEmpty({ message: 'title não pode estar vazio' })
  @IsString({ message: 'title deve ser string' })
  @MinLength(4, { message: 'title deve ter pelo menos 4 caracteres' })
  @MaxLength(64, { message: 'title deve ter no máximo 64 caracteres' })
  title: string;

  @IsNotEmpty({ message: 'excerpt não pode estar vazio' })
  @IsString({ message: 'excerpt deve ser string' })
  @MinLength(4, { message: 'excerpt deve ter pelo menos 4 caracteres' })
  @MaxLength(128, { message: 'excerpt deve ter no máximo 128 caracteres' })
  excerpt: string;

  @IsNotEmpty({ message: 'author não pode estar vazio' })
  @IsString({ message: 'author deve ser string' })
  @MinLength(4, { message: 'author deve ter pelo menos 4 caracteres' })
  @MaxLength(64, { message: 'author deve ter no máximo 64 caracteres' })
  author: string;

  @IsNotEmpty({ message: 'content não pode estar vazio' })
  @IsString({ message: 'content deve ser string' })
  @MinLength(4, { message: 'content deve ter pelo menos 4 caracteres' })
  @MaxLength(512, { message: 'content deve ter no máximo 512 caracteres' })
  content: string;

  @IsNotEmpty({ message: 'published não pode estar vazio' })
  @IsBoolean({ message: 'published deve ser boolean' })
  published: boolean;

  constructor({ title, excerpt, author, content, published }: PostProps) {
    Object.assign(this, { title, excerpt, author, content, published });
  }
}

export class PostValidator extends ClassValidator<PostRules> {
  validate(props: PostProps): boolean {
    const rules = new PostRules(props);
    return super.validate(rules);
  }
}

export class PostValidatorFactory {
  static create(): PostValidator {
    return new PostValidator();
  }
}
