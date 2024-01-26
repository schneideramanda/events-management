import { Calendar as BigCalendar, luxonLocalizer, Views } from 'react-big-calendar';
import { DateTime, Settings } from 'luxon';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useContext, useEffect, useMemo } from 'react';
import { Event, EventsContext } from '../../contexts/EventsContext';
import { SidebarContext } from '../../contexts/SidebarContext';

const defaultTZ = DateTime.local().zoneName;
const defaultDateStr = '2024-01-01';

function getDate(str: string, DateTimeObj: typeof DateTime) {
  return DateTimeObj.fromISO(str).toJSDate();
}

const Calendar = () => {
  const { isMobile } = useContext(SidebarContext);
  const { events } = useContext(EventsContext);

  const formatEvent = (e: Event) => ({
    ...e,
    startDate: new Date(e.startDate),
    endDate: new Date(e.endDate),
  });

  const { defaultDate, getNow, localizer } = useMemo(() => {
    Settings.defaultZone = defaultTZ;
    return {
      defaultDate: getDate(defaultDateStr, DateTime),
      getNow: () => DateTime.local().toJSDate(),
      localizer: luxonLocalizer(DateTime),
    };
  }, []);

  useEffect(() => {
    return () => {
      Settings.defaultZone = defaultTZ; // reset to browser TZ on unmount
    };
  }, []);

  return (
    <div className="calendar" style={{ width: '100%', marginTop: isMobile ? '20px' : '' }}>
      <BigCalendar
        defaultDate={defaultDate}
        defaultView={Views.MONTH}
        events={events.map(formatEvent)}
        getNow={getNow}
        localizer={localizer}
        startAccessor="startDate"
        endAccessor="endDate"
      />
    </div>
  );
};

export default Calendar;
