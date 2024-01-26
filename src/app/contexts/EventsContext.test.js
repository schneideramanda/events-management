import { renderHook, act } from '@testing-library/react';
import { useContext } from 'react';
import { EventsContext, EventsProvider } from './EventsContext';

test('it should add an event', () => {
  const { result } = renderHook(() => useContext(EventsContext), {
    wrapper: EventsProvider,
  });

  const event = {
    id: '1',
    title: 'Test Event',
    startDate: '2024-01-01',
    endDate: '2024-01-02',
  };

  act(() => {
    result.current.addEvent(event);
  });

  expect(result.current.events).toContain(event);
});

test('should edit an event', () => {
  const { result } = renderHook(() => useContext(EventsContext), {
    wrapper: EventsProvider,
  });

  const event = {
    id: '1',
    title: 'Test Event',
    startDate: '2024-01-01',
    endDate: '2024-01-02',
  };

  act(() => {
    result.current.addEvent(event);
  });

  const updatedEvent = {
    title: 'Updated Event',
  };

  act(() => {
    result.current.editEvent(event.id, updatedEvent);
  });

  expect(result.current.events[0].title).toBe(updatedEvent.title);
});

test('should remove an event', () => {
  const { result } = renderHook(() => useContext(EventsContext), {
    wrapper: EventsProvider,
  });

  const event = {
    id: '1',
    title: 'Test Event',
    startDate: '2024-01-01',
    endDate: '2024-01-02',
  };

  act(() => {
    result.current.addEvent(event);
  });

  act(() => {
    result.current.removeEvent(event.id);
  });

  expect(result.current.events).not.toContain(event);
});
