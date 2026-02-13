import { BadRequestException } from '@nestjs/common';
import { GetPostOutput } from 'src/posts/application/outputs/get-post.output';
import { PagedOutput } from 'src/shared/application/outputs/paged-output';
import { UseCase } from 'src/shared/application/usecases/base-usecase';
import { SearchParams } from 'src/shared/domain/repositories/search-params';

type Input = {
  page: number | 0;
  perPage: number | 15;
  sort: string | 'createdAt';
  sortDir: 'asc' | 'desc';
};
type Output = PagedOutput<GetPostOutput>;

export class GetAllPostsUseCase implements UseCase<Input, Output> {
  execute(input: Input): Promise<Output> {
    if (input.perPage > 50) {
      throw new BadRequestException(
        'Não é permitido buscar mais de 50 itens por página',
      );
    }
    const params = new SearchParams({
      queries: [],
      page: input.page,
      perPage: input.perPage,
      sort: input.sort,
      sortDir: input.sortDir,
    });
    //TODO: Implementar e consumir repositório
    throw new Error('Method not implemented.');
  }
}
