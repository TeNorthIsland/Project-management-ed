import { Test, TestingModule } from '@nestjs/testing';
import { TaskMService } from './task-m.service';

describe('TaskMService', () => {
  let service: TaskMService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskMService],
    }).compile();

    service = module.get<TaskMService>(TaskMService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
