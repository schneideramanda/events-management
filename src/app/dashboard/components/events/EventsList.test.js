import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EventsList from './EventsList';
import '@testing-library/jest-dom/extend-expect';

test('renders events list header', () => {
  render(<EventsList />);

  const headerElement = screen.getByText('Events List');

  expect(headerElement).toBeInTheDocument();
});

test('renders create event button', () => {
  render(<EventsList />);

  const buttonElement = screen.getByText('Create Event');

  expect(buttonElement).toBeInTheDocument();
});

test('opens event modal when create event button is clicked', () => {
  render(<EventsList />);

  const buttonElement = screen.getByText('Create Event');
  fireEvent.click(buttonElement);
  const modalElement = screen.getByRole('dialog');

  expect(modalElement).toBeInTheDocument();
});

test('closes event modal when close button is clicked', () => {
  render(<EventsList />);

  const buttonElement = screen.getByText('Create Event');
  fireEvent.click(buttonElement);
  const modalElement = screen.getByRole('dialog');
  const closeButtonElement = screen.getByText('Close');
  fireEvent.click(closeButtonElement);

  expect(modalElement).not.toBeInTheDocument();
});

test('displays "You still dont have events. Try creating one!" when no events are present', () => {
  render(<EventsList />);

  const noEventsElement = screen.getByText(`You still don't have events. Try creating one!`);

  expect(noEventsElement).toBeInTheDocument();
});
