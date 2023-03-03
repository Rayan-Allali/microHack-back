import { Test, TestingModule } from '@nestjs/testing';
import { FarmerController } from './farmer.controller';

describe('FarmerController', () => {
  let controller: FarmerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarmerController],
    }).compile();

    controller = module.get<FarmerController>(FarmerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
