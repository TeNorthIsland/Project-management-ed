import { Test, TestingModule } from '@nestjs/testing';
import { ProJectMService } from './pro-ject-m.service';

describe('ProJectMService', () => {
  let service: ProJectMService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProJectMService],
    }).compile();

    service = module.get<ProJectMService>(ProJectMService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
