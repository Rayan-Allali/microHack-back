import { Test, TestingModule } from '@nestjs/testing';
import { AuthFarmerService } from './auth-farmer.service';

describe('AuthFarmerService', () => {
  let service: AuthFarmerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthFarmerService],
    }).compile();

    service = module.get<AuthFarmerService>(AuthFarmerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
