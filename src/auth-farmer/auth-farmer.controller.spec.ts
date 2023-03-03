import { Test, TestingModule } from '@nestjs/testing';
import { AuthFarmerController } from './auth-farmer.controller';

describe('AuthFarmerController', () => {
  let controller: AuthFarmerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthFarmerController],
    }).compile();

    controller = module.get<AuthFarmerController>(AuthFarmerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
