import { Test, TestingModule } from '@nestjs/testing';
import { AuthUserService } from './auth-user.service';

describe('AuthUserService', () => {
  let service: AuthUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthUserService],
    }).compile();

    service = module.get<AuthUserService>(AuthUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
