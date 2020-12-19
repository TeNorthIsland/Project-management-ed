import { Test, TestingModule } from '@nestjs/testing';
import { GroleController } from './grole.controller';


describe('Grole Controller', () => {
  let controller: GroleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroleController],
    }).compile();

    controller = module.get<GroleController>(GroleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
