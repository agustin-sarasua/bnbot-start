import { Component } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { startOfDay, endOfDay, isWithinInterval } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  selectedDays: any[] = [];

  startDay: Date | null = null;
  endDay: Date | null = null;

  dayClicked(day: CalendarMonthViewDay): void {
    if (this.startDay) {
      this.endDay = day.date;
      this.selectedDays = this.getSelectedDays(this.startDay, this.endDay);
      this.startDay = null;  // reset for next selection
      this.endDay = null;  // reset for next selection
    } else {
      this.startDay = day.date;
      day.backgroundColor = '#ccc';  // style for selected start day
    }
  }

  getSelectedDays(start: Date, end: Date): any[] {
    const days: any[] = [];
    for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
      days.push(new Date(date));
    }
    return days;
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      if (this.selectedDays.some(selectedDay => selectedDay.getTime() === day.date.getTime())) {
        day.backgroundColor = '#ccc';  // style for selected days in range
      }
    });
  }
}
