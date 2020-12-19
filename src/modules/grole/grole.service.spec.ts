import { Test, TestingModule } from '@nestjs/testing';
import { GroleService } from './grole.service';

describe('GroleService', () => {
  let service: GroleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroleService],
    }).compile();

    service = module.get<GroleService>(GroleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
