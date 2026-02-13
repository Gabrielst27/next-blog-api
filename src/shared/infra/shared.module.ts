import { Module } from '@nestjs/common';
import { EnvConfigModule } from 'src/shared/infra/env-config/env-config.module';

@Module({
  imports: [EnvConfigModule],
})
export class SharedModule {}
