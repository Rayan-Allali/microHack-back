import { Test, TestingModule } from '@nestjs/testing';
import { FarmerService } from './farmer.service';

describe('FarmerService', () => {
  let service: FarmerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FarmerService],
    }).compile();

    service = module.get<FarmerService>(FarmerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
