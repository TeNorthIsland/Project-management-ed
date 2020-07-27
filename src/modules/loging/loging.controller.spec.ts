import { Test, TestingModule } from '@nestjs/testing';
import { LogingController } from './loging.controller';

describe('Loging Controller', () => {
  let controller: LogingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogingController],
    }).compile();

    controller = module.get<LogingController>(LogingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
