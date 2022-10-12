import { render, screen } from '@testing-library/react';
import App from './containers/App';
import {BrowserRouter} from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <BrowserRouter><App/></BrowserRouter>)
  const text = screen.getByText('Choose a template');
  expect(text).toBeInTheDocument();
});





