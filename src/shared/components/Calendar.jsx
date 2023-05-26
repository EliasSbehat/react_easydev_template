import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Calendar as ReactCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import styled from 'styled-components';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import { darken } from 'polished';
import {
 borderLeft, marginLeft, marginRight, paddingLeft, paddingRight, left, 
} from '@/utils/directions';
import {
  colorAccent,
  colorAdditional,
  colorBackgroundBody,
  colorFieldsBorder,
  colorHover,
  colorText,
} from '@/utils/palette';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(ReactCalendar);

const formats = {
  dayFormat: (date, culture) => localizer.format(date, 'DD', culture),
};

const Calendar = ({ small, events: propEvents, dir }) => {
  const [events, setEvents] = useState(propEvents);

  const moveEvent = ({ event, start, end }) => {
    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    setEvents(nextEvents);
  };

  const eventStyleGetter = (event) => {
    let color;

    switch (event.priority) {
      case 'high':
        color = '#fa697d';
        break;

      case 'family':
        color = '#4ce1b6';
        break;

      case 'non':
        color = '#70bbfd';
        break;
      default:
        color = colorAdditional;
        break;
    }

    const style = {
      backgroundColor: color,
      border: 'none',
    };

    return {
      style,
    };
  };

  return (
    <CalendarWrap small={small}>
      <DragAndDropCalendar
        rtl={dir === 'rtl'}
        localizer={localizer}
        events={events}
        views={['month', 'week', 'day']}
        popup
        formats={formats}
        step={60}
        timeslots={1}
        showMultiDayTimes
        onEventDrop={moveEvent}
        defaultDate={new Date(moment().format('MMMM DD YY'))}
        eventPropGetter={eventStyleGetter}
        messages={{
          previous: <span className="lnr lnr-chevron-left" />,
          next: <span className="lnr lnr-chevron-right" />,
          today: <span className="lnr lnr-calendar-full" />,
        }}
      />
    </CalendarWrap>
  );
};

Calendar.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    allDay: PropTypes.bool,
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
    priority: PropTypes.string,
  })).isRequired,
  small: PropTypes.bool,
  dir: PropTypes.string,
};

Calendar.defaultProps = {
  small: false,
  dir: '',
};

export default Calendar;

// region STYLES

const CalendarWrap = styled.div`
  height: 600px;
  margin-bottom: 70px;

  .rbc-month-row {
    min-height: 60px;
  }
  
  .rbc-date-cell {
    text-align: ${left};
    ${paddingRight}: 0;

    button {
      display: block;
      width: 100%;
      ${paddingLeft}: 10px;
      padding-top: 5px;
      font-weight: 500;
      font-size: 13px;
      color: ${colorText};
    }
  }

  .rbc-header {
    height: 40px;
    display: flex;
    color: ${colorAdditional};

    @media screen and (max-width: 600px) {
      white-space: pre-wrap;
    }

    @media screen and (max-width: 400px){
      height: 20px;
    }

    background-color: ${colorBackgroundBody};

    span {
      margin: auto;
      text-transform: uppercase;
      font-size: 12px;
    }

    button {
      display: block;
      margin: auto;
    }
  }

  .rbc-time-slot {
    display: flex;

    span {
      margin: auto 0;
    }
  }

  .rbc-off-range-bg {
    background-color: transparent;
  }

  .rbc-event {
    height: 20px;
    font-size: 10px;
  }

  .rbc-toolbar-label {
    text-transform: uppercase;
    font-weight: 700;
    color: ${colorText};

    @media (max-width: 325px) {
      font-size: 14px;
    }

    @media (max-width: 280px) {
      font-size: 10px;
    }
  }

  .rbc-label {
    color: ${colorText};
  }

  .rbc-show-more {
    background-color: transparent;
  }

  .rbc-toolbar button {
    height: 30px;
    border-radius: 3px;
    border: none;
    font-size: 11px;
    color: ${colorAdditional};
    transition: all 0.3s;
    padding: 8px 14px;
    cursor: pointer;
    background-color: ${colorHover};

    &.rbc-active {
      box-shadow: none;
      pointer-events: none;
      background-color: ${colorFieldsBorder};
    }

    &:hover {
      color: ${colorText};
      background-color: ${props => darken(0.02, colorHover(props))};
    }

    &:focus, &:active {
      outline: none;
      box-shadow: none;
      color: ${colorText};
    }

    span {
      font-size: 8px;
      font-weight: 700;
    }
  }

  .rbc-btn-group:first-child {

    button {
      ${marginRight}: 5px;
      padding: 8px 11px;

      &:last-child:not(:first-child), &:not(:first-child):not(:last-child),
      &:first-child:not(:last-child) {
        border-radius: 3px;
      }
    }
  }

  .rbc-btn-group:last-child {

    @media (max-width: 500px) {
      margin-top: 10px;
    }
  }

  .rbc-btn-group {
    min-width: 156px;

    @media (max-width: 325px) {
      min-width: 105px !important;
    }
  }

  .rbc-header + .rbc-today {
    &:before {
      content: "";
      height: 3px;
      width: 100%;
      background-color: ${colorAccent};
      top: 0;
      left: 0;
      right: 0;
      position: absolute;
    }
  }

  .rbc-today {
    background-color: transparent;
    position: relative;
  }

  .rbc-current-time-indicator {
    background-color: ${colorAccent};

    &:before {
      background-color: ${colorAccent};
    }
  }

  ${props => props.small && `
    height: 400px;

    .rbc-toolbar-label {
      font-size: 10px;
      padding: 0 5px;
    }

    .rbc-btn-group {
      min-width: auto;

      button {
        padding: 4px 8px;
      }
    }
  `}

  .rbc-timeslot-group {
    border-bottom: 1px solid #DDD !important;
  }

  .rbc-time-content > * + * > * {
    border: none;
    ${borderLeft}: 1px solid #DDD;
  }

  .rbc-time-header-content {
    border: none;
    ${borderLeft}: 1px solid #DDD;
  }

  .rbc-header + .rbc-header {
    border: none;
    border-bottom: 1px solid #DDD;
    ${borderLeft}: 1px solid #DDD;
  }

  .rbc-day-bg + .rbc-day-bg {
    border: none;
    ${borderLeft}: 1px solid #DDD;
  }

  .rbc-day-slot .rbc-events-container {
    ${marginRight}: 14px !important;
    ${marginLeft}: 0 !important;
  }

  .rbc-event-content {
    white-space: nowrap;
  }
  .rbc-time-column {
    left: -1px;
  }
`;

// endregion
