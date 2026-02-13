import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/infra/posts.module';
import { SharedModule } from 'src/shared/infra/shared.module';

@Module({
  imports: [PostsModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
