import { ReactNode, createContext, useCallback, useEffect, useMemo, useReducer } from 'react';

export interface Event {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
}

interface EventsProviderProps {
  children: ReactNode;
}

interface EventsContextProps {
  events: Event[];
  addEvent: (event: Event) => void;
  editEvent: (id: string, data: Partial<Event>) => void;
  removeEvent: (id: string) => void;
}

type EventAction =
  | { type: 'ADD_EVENT'; payload: Event }
  | { type: 'EDIT_EVENT'; payload: { id: string; data: Partial<Event> } }
  | { type: 'REMOVE_EVENT'; payload: string };

const eventsReducer = (state: Event[], action: EventAction): Event[] => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.payload];
    case 'EDIT_EVENT':
      return state.map(event =>
        event.id === action.payload.id ? { ...event, ...action.payload.data } : event
      );
    case 'REMOVE_EVENT':
      return state.filter(event => event.id !== action.payload);
    default:
      return state;
  }
};

const EventsContext = createContext<EventsContextProps>({
  events: [],
  addEvent: () => null,
  editEvent: () => null,
  removeEvent: () => null,
});

const EventsProvider = ({ children }: EventsProviderProps) => {
  const storageEvents = localStorage.getItem('eventList');
  const initialEvents = storageEvents ? JSON.parse(storageEvents) : [];

  const [events, dispatch] = useReducer(eventsReducer, initialEvents);

  const addEvent = useCallback((event: Event) => {
    dispatch({ type: 'ADD_EVENT', payload: event });
  }, []);

  const editEvent = useCallback((id: string, data: Partial<Event>) => {
    dispatch({ type: 'EDIT_EVENT', payload: { id, data } });
  }, []);

  const removeEvent = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_EVENT', payload: id });
  }, []);

  useEffect(() => {
    localStorage.setItem('eventList', JSON.stringify(events));
  }, [events]);

  const memoizedValue = useMemo(
    () => ({ events, addEvent, editEvent, removeEvent }),
    [events, addEvent, editEvent, removeEvent]
  );

  return <EventsContext.Provider value={memoizedValue}>{children}</EventsContext.Provider>;
};

export { EventsProvider, EventsContext };
