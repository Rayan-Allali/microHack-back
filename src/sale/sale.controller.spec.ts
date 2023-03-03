import { Test, TestingModule } from '@nestjs/testing';
import { SaleController } from './sale.controller';

describe('SaleController', () => {
  let controller: SaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleController],
    }).compile();

    controller = module.get<SaleController>(SaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
