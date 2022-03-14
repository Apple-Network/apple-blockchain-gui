const apple = require('../../util/apple');

describe('apple', () => {
  it('converts number mojo to apple', () => {
    const result = apple.mojo_to_apple(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to apple', () => {
    const result = apple.mojo_to_apple('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to apple string', () => {
    const result = apple.mojo_to_apple_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to apple string', () => {
    const result = apple.mojo_to_apple_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number apple to mojo', () => {
    const result = apple.apple_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string apple to mojo', () => {
    const result = apple.apple_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = apple.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = apple.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = apple.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = apple.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = apple.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = apple.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
