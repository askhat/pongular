import { Color } from '../color.enum';
import { Screen } from './screen';

describe('Screen', () => {
  it('should create an instance', () => {
    expect(new Screen(0, 0, 100, 100, Color.BLACK)).toBeTruthy();
  });
});
