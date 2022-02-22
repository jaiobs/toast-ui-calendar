import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import Calendar from 'tui-calendar'; /* ES6 */
import "tui-calendar/dist/tui-calendar.css";
import { AppConfig } from '../constanKeys';
@Component({
  selector: 'app-tui-calendar',
  templateUrl: './tui-calendar.component.html',
  styleUrls: ['./tui-calendar.component.scss']
})
export class TuiCalendarComponent implements OnInit {
  title = 'reusableComponents';
  public calendar: any;
  public renderDate: any;
  public pushCreateData: any = [];
  public pushUpdateData: any = [];
  public pushDeleteData: any = [];
  public localData: any;
  public calendarArray:any;
  templates: any;
  bindValue:any;
  constructor(public config:AppConfig) { }

  ngOnInit() { 
    this.bindValue = "All";
    this.calendarArray = this.config.calendarArray;
    this.calendarLoad();   
    this.scheduleCreate();
    this.scheduleUpdate();
    this.scheduleDelete();
    this.displayMonthYear();
    this.scheduleLoad();
  }

  calendarLoad(){
    this.calendar = new Calendar('#calendar', {
      defaultView: 'month',   
      taskView: true,
      useCreationPopup: true,
      useDetailPopup: true,
      scheduleView: true,
      template: {
        monthDayname: function (dayname) {
          return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
        }
      },
      calendars:this.calendarArray
    });
  }

  scheduleCreate(){
     // beforeCreateSchedule
     this.calendar.on('beforeCreateSchedule', (event: any) => {
      var schedule = {
        id: 'Evt' + new Date().getTime().toString(),
        title: event.title,
        calendarId: event.calendarId ? event.calendarId : 1,
        category: 'time',
        dueDateClass: '',
        start: new Date(event.start),
        end: new Date(event.end),
        isPrivate: event.isPrivate,
        isAllDay: event.isAllDay,
        state: event.state,
        guide: event.guide      
      };
      this.calendar.createSchedules([schedule]);
      //localStorage data createSchedules
      if (localStorage.getItem("scheduleCreateData")?.length) {
        this.pushCreateData = localStorage.getItem("scheduleCreateData");
        this.pushCreateData = JSON.parse(this.pushCreateData);
      }
      this.pushCreateData.push(schedule)
      localStorage.setItem("scheduleCreateData", JSON.stringify(this.pushCreateData));
      this.calendarFilter(event.calendarId ? event.calendarId : 1, false)
    });
  }

  scheduleUpdate(){
    // beforeUpdateSchedule
    this.calendar.on('beforeUpdateSchedule', (event: any) => {
      var schedule = event.schedule;
      var changes = event.changes;
      this.calendar.updateSchedule(schedule.id, schedule.calendarId, changes);
      //localStorage data updateSchedules    
      if (localStorage.getItem("scheduleCreateData")?.length) {
        this.pushUpdateData = localStorage.getItem("scheduleCreateData");
        this.pushUpdateData = JSON.parse(this.pushUpdateData);   
        if(changes.start){
          changes.start = new Date(changes.start);
        }
        if(changes.end){
          changes.end = new Date(changes.end);        
        }
        var newState = this.pushUpdateData.map((data: { id: any; }) => data.id).indexOf(schedule.id);
        this.pushUpdateData[newState] = {...this.pushUpdateData[newState], ...changes};
        localStorage.setItem("scheduleCreateData", JSON.stringify(this.pushUpdateData));
          this.calendarFilter(schedule.calendarId, false);
      }
    });
  }

  scheduleDelete(){
        // beforeDeleteSchedule
        this.calendar.on('beforeDeleteSchedule', (event: any) => {
          var schedule = event.schedule;
          this.calendar.deleteSchedule(schedule.id, schedule.calendarId);
          //localStorage data deleteSchedules
          if (localStorage.getItem("scheduleCreateData")?.length) {
            this.pushDeleteData = localStorage.getItem("scheduleCreateData");
            this.pushDeleteData = JSON.parse(this.pushDeleteData);
            var removeIndex = this.pushDeleteData.map((data: { id: any; }) => data.id).indexOf(schedule.id);
            this.pushDeleteData.splice(removeIndex, 1);
            localStorage.setItem("scheduleCreateData", JSON.stringify(this.pushDeleteData));
          }
        });
  }

  scheduleLoad(){
        //localStorage load data createSchedules
        if (localStorage.getItem("scheduleCreateData")?.length) {
          this.localData = localStorage.getItem("scheduleCreateData");
          this.localData = JSON.parse(this.localData);
          for (let i = 0; i < this.localData.length; i++) {
            this.calendar.createSchedules([this.localData[i]]);
          }
        }
  }

  displayMonthYear(){
    this.renderDate = moment(this.calendar._renderDate._date).format('MMMM YYYY');
  }

  previous() {
    this.calendar.prev();
    this.displayMonthYear();
  }

  today() {
    this.calendar.today();
    this.displayMonthYear();
  }

  next() {
    this.calendar.next();
    this.displayMonthYear();
  }

  monthView(values: any) {
    switch (values) {
      case 'daily view':
        // daily view
        this.calendar.changeView('day', true);
        break;
      case 'weekly view':
        // weekly view
        this.calendar.changeView('week', true);
        break;
        case '2 weeks monthly view':
          // 2 weeks monthly view
          this.calendar.setOptions({ month: { visibleWeeksCount: 2 } }, true);
          this.calendar.changeView('month', true);
          break;
      case '3 weeks monthly view':
        // 3 weeks monthly view
        this.calendar.setOptions({ month: { visibleWeeksCount: 3 } }, true);
        this.calendar.changeView('month', true);
        break;
      case '6 weeks monthly view':
        // monthly view(default 6 weeks view)
        this.calendar.setOptions({ month: { visibleWeeksCount: 6 } }, true);
        this.calendar.changeView('month', true);
        break;
      default:
        // monthly view with 5 weeks or 6 weeks based on the month
        this.calendar.setOptions({ month: { visibleWeeksCount: 0, isAlways6Week: false } }, true);
        this.calendar.changeView('month', true);
        break;
    }
  }

  weekView(values: any) {
    switch (values) {
      case 'start monday':
        // change start day of week(from monday)
        this.calendar.setOptions({week: {startDayOfWeek: 1}}, true);
        this.calendar.setOptions({month: {startDayOfWeek: 1}}, true);
        this.calendar.setOptions({week: {workweek: false}}, true);
        this.calendar.setOptions({month: {workweek: false}}, true);
        this.calendar.setOptions({month: {narrowWeekend: false}}, true);
        this.calendar.setOptions({week: {narrowWeekend: false}}, true);
        this.calendar.changeView(this.calendar.getViewName(), true);
        break;
      case 'work week':
        //work week
        this.calendar.setOptions({week: {workweek: true}}, true);
        this.calendar.setOptions({month: {workweek: true}}, true);
        this.calendar.setOptions({month: {narrowWeekend: false}}, true);
        this.calendar.setOptions({week: {narrowWeekend: false}}, true);
        this.calendar.setOptions({week: {startDayOfWeek: 0}}, true);
        this.calendar.setOptions({month: {startDayOfWeek: 0}}, true);
        this.calendar.changeView(this.calendar.getViewName(), true);
        break;     
      default:
        // narrow weekend
        this.calendar.setOptions({month: {narrowWeekend: true}}, true);
        this.calendar.setOptions({week: {narrowWeekend: true}}, true);
        this.calendar.setOptions({week: {startDayOfWeek: 0}}, true);
        this.calendar.setOptions({month: {startDayOfWeek: 0}}, true);
        this.calendar.setOptions({week: {workweek: false}}, true);
        this.calendar.setOptions({month: {workweek: false}}, true);
        this.calendar.changeView(this.calendar.getViewName(), true);
      break;
    }
  }

  calendarFilter(value:any, isFilter:boolean){
    // this.calendarLoad();
    if(value !== 'All'){
      this.calendarArray = this.config.calendarArray.find(data => data.id === value);
      this.calendarArray = [this.calendarArray];
    } else {
      this.calendarArray = this.config.calendarArray;
    }   
    if (localStorage.getItem("scheduleCreateData")?.length) {
      this.localData = localStorage.getItem("scheduleCreateData");
      this.localData = JSON.parse(this.localData);
      this.calendar.clear();
      for (let i = 0; i < this.localData.length; i++) {   
        if(isFilter && (this.localData[i].calendarId === value || value === 'All')){
          this.calendar.createSchedules([this.localData[i]], true);
          this.calendar.render();
        } 
        if(!isFilter && (this.localData[i].calendarId === this.bindValue || this.bindValue === 'All')){
          // this.bindValue = this.calendarArray[0].id;
          this.calendar.createSchedules([this.localData[i]], true);
          this.calendar.render();
        }
      }
    }
  }

  calendarView(values: any) {
    switch (values) {
      case '1':
        this.calendarFilter('1', true);
        break;
      case '2':
        this.calendarFilter('2', true);
        break;     
      case '3':
        this.calendarFilter('3', true);
        break;  
      case '4':
        this.calendarFilter('4', true);
        break;  
      case '5':
        this.calendarFilter('5', true);
        break;  
      case '6':
        this.calendarFilter('6', true);
        break;  
      default:
        this.calendarFilter('All', true);
        break;
    }
  }
}
