import { Test, TestingModule } from '@nestjs/testing';
import { LogingService } from './loging.service';

describe('LogingService', () => {
  let service: LogingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogingService],
    }).compile();

    service = module.get<LogingService>(LogingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
