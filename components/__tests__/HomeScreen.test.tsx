import { act } from 'react';
import { fireEvent, render, renderHook, userEvent, cleanup } from '../tests-utils/test-utils';
import { screen } from '@testing-library/dom';
import useCount from '@/hooks/useCount';

import HomeScreen, { CustomText } from '@/app/index';

describe('<HomeScreen />', () => {
  // Cleanup helper function after each test
  afterEach(() => cleanup());

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

    // Act is meant to wait for side effects or state updates in the event handlers of the button before assertion
    await act(async () => {
      fireEvent.press(button);
    });

    expect(getByText('1')).toBeOnTheScreen();
  });

  test('Handle button actions with user event', async () => {
    const { getByText } = render(<HomeScreen />);

    const button = getByText('Press Me');

    const user = userEvent.setup();

    await act(async () => {
      await user.press(button);
    });

    expect(getByText('1')).toBeOnTheScreen();
  });

  // Custom Hooks are tested with the renderHook API
  test('Test custom hooks with renderHook API', async () => {
    const { result, rerender } = renderHook((initialProp: number) => useCount(initialProp), {
      initialProps: 1
    });

    expect(result.current.count).toBe(1);
    await act(async () => {
      result.current.increment();
    });

    expect(result.current.count).toBe(2);
    rerender(5);
    expect(result.current.count).toBe(5);
  });
});
