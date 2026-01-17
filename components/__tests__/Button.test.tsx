import { act } from 'react';
import { fireEvent, render, renderHook, userEvent, cleanup } from '../tests-utils/test-utils';
// import { screen } from '@testing-library/dom';
import Button from '../Button';

describe('Button', () => {
  // Cleanup helper function after each test
  afterEach(() => cleanup());
  it('renders button snapshot', () => {
    const tree = render(<Button>Click Me</Button>);

    expect(tree).toMatchSnapshot();
  });

  it('displays children text', () => {
    const { getByTestId, getByText } = render(<Button testID="testButton" name="Click Me" />);

    const testButton = getByTestId('testButton');
    const textInButton = getByText('Click Me');

    expect(testButton).toBeOnTheScreen();
    expect(textInButton).toBeOnTheScreen();
  });

  it('displays the current styles', () => {
    const { getByTestId } = render(<Button testID="testButton">Click Me</Button>);

    const testButton = getByTestId('testButton');

    expect(testButton).toHaveStyle({ borderRadius: 10, padding: 10 });
  });

  it('expects new styles to be implemented', () => {
    const customStyles = { backgroundColor: 'grey', margin: 10, zIndex: 5 };
    const { getByTestId } = render(<Button testID="testButton" styles={customStyles} />);

    const testButton = getByTestId('testButton');

    expect(testButton).toHaveStyle({
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'grey',
      margin: 10,
      zIndex: 5
    });
  });

  it('expects the handler onPress to be fired', async () => {
    const mockPress = jest.fn();

    const { getByTestId } = render(<Button testID="testButton" onPress={mockPress} />);

    const testButton = getByTestId('testButton');

    const user = userEvent.setup();

    await act(async () => user.press(testButton));

    expect(mockPress).toHaveBeenCalled();
  });
});
