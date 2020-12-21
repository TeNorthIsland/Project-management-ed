import { Test, TestingModule } from '@nestjs/testing';
import { ProJectMController } from './pro-ject-m.controller';

describe('ProJectM Controller', () => {
  let controller: ProJectMController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProJectMController],
    }).compile();

    controller = module.get<ProJectMController>(ProJectMController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
