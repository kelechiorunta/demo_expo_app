import { act } from 'react';
import { fireEvent, render } from '../tests-utils/test-utils';
import { screen } from '@testing-library/dom';

import HomeScreen, { CustomText } from '@/app/index';

describe('<HomeScreen />', () => {
  test('CustomText renders correctly', () => {
    const tree = render(<CustomText>Some text</CustomText>);

    expect(tree).toMatchSnapshot();
  });
  test('Text renders correctly on HomeScreen', () => {
    const { getByText } = render(<HomeScreen />);

    getByText('Welcome!');
  });

  test('Button Accessibility Test', () => {
    const { getByRole } = render(<HomeScreen />);

    const button = getByRole('button', { hidden: true, name: /Press Me/i });

    expect(button).toBeOnTheScreen();
  });

  test('Handle button actions', async () => {
    const { getByText } = render(<HomeScreen />);

    const button = getByText('Press Me');

    await act(async () => {
      fireEvent.press(button);
    });

    expect(getByText('1')).toBeOnTheScreen();
  });
});
