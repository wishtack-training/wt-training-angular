import { BankAModule } from './bank-a.module';

describe('BankAModule', () => {
  let bankAModule: BankAModule;

  beforeEach(() => {
    bankAModule = new BankAModule();
  });

  it('should create an instance', () => {
    expect(bankAModule).toBeTruthy();
  });
});
