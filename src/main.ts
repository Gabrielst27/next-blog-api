import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvConfigService } from 'src/shared/infra/env-config/env-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const envConfig = app.get(EnvConfigService);
  await app.listen(envConfig.getPort());
}
bootstrap();
