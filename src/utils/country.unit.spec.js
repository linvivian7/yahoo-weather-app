import { getCountryCode } from './country';

test('returns the correct country code', () => {
    const code = getCountryCode('Japan');

    expect(code).toEqual('JP');
});
