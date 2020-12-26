import { Test, TestingModule } from '@nestjs/testing';
import { TaskMController } from './task-m.controller';

describe('TaskM Controller', () => {
  let controller: TaskMController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskMController],
    }).compile();

    controller = module.get<TaskMController>(TaskMController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
