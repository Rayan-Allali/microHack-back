import { Test, TestingModule } from '@nestjs/testing';
import { FavorieController } from './favorie.controller';

describe('FavorieController', () => {
  let controller: FavorieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavorieController],
    }).compile();

    controller = module.get<FavorieController>(FavorieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
