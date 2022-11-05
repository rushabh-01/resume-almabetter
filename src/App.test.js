import { render, screen } from '@testing-library/react';
import App from './containers/App';
import {BrowserRouter} from 'react-router-dom';

// unit testing

test('renders', () => {
  render(
    <BrowserRouter><App/></BrowserRouter>)
  const text = screen.getByText('Build your brand-new resume in as little as 5 minutes.');
  expect(text).toBeInTheDocument();
});

// snapshot testing

it("should take a snapshot", () => {
	const { asFragment } = render(<BrowserRouter><App/></BrowserRouter>);

	expect(asFragment(<App />)).toMatchSnapshot();
});





