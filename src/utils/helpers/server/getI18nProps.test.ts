import { getI18nProp, getI18nProps } from './getI18nProps';

describe('getI18nProp', () => {
  it('returns an object with locale and dictionary properties', async () => {
    // Create a mock context object
    const context = {
      locale: 'en',
    };
    const i18nProp = await getI18nProp(context);
    expect(i18nProp).toHaveProperty('locale');
    expect(i18nProp).toHaveProperty('dictionary');
  });

  it('returns props containing the i18n prop', async () => {
    // Create a mock context object
    const context = {
      locale: 'en',
    };
    const props = await getI18nProps(context);
    expect(props).toHaveProperty('props');
    expect(props).toHaveProperty('props.i18n');
  });
});
