import * as moment from "moment";

export class AppConfig {
    COMMON_CUSTOM_THEME = {
        'common.border': '1px solid #ffbb3b',
        'common.backgroundColor': '#ffbb3b0f',
        'common.holiday.color': '#f54f3d',
        'common.saturday.color': '#3162ea',
        'common.dayname.color': '#333'
    };
    
    MONTHLY_CUSTOM_THEME = {
        // month header 'dayname'
        'month.dayname.height': '42px',
        'month.dayname.borderLeft': 'none',
        'month.dayname.paddingLeft': '8px',
        'month.dayname.paddingRight': '0',
        'month.dayname.fontSize': '13px',
        'month.dayname.backgroundColor': 'inherit',
        'month.dayname.fontWeight': 'normal',
        'month.dayname.textAlign': 'left',
    
        // month day grid cell 'day'
        'month.holidayExceptThisMonth.color': '#f3acac',
        'month.dayExceptThisMonth.color': '#bbb',
        'month.weekend.backgroundColor': '#fafafa',
        'month.day.fontSize': '16px',
    
        // month schedule style
        'month.schedule.borderRadius': '5px',
        'month.schedule.height': '18px',
        'month.schedule.marginTop': '2px',
        'month.schedule.marginLeft': '10px',
        'month.schedule.marginRight': '10px',
    
        // month more view
        'month.moreView.boxShadow': 'none',
        'month.moreView.paddingBottom': '0',
        'month.moreView.border': '1px solid #9a935a',
        'month.moreView.backgroundColor': '#f9f3c6',
        'month.moreViewTitle.height': '28px',
        'month.moreViewTitle.marginBottom': '0',
        'month.moreViewTitle.backgroundColor': '#f4f4f4',
        'month.moreViewTitle.borderBottom': '1px solid #ddd',
        'month.moreViewTitle.padding': '0 10px',
        'month.moreViewList.padding': '10px'
    };
    
    WEEKLY_CUSTOM_THEME = {
        // week header 'dayname'
        'week.dayname.height': '41px',
        'week.dayname.borderTop': '1px solid #ddd',
        'week.dayname.borderBottom': '1px solid #ddd',
        'week.dayname.borderLeft': '1px solid #ddd',
        'week.dayname.paddingLeft': '5px',
        'week.dayname.backgroundColor': 'inherit',
        'week.dayname.textAlign': 'left',
        'week.today.color': '#b857d8',
        'week.pastDay.color': '#999',
    
        // week vertical panel 'vpanel'
        'week.vpanelSplitter.border': '1px solid #ddd',
        'week.vpanelSplitter.height': '3px',
    
        // week daygrid 'daygrid'
        'week.daygrid.borderRight': '1px solid #ddd',
        'week.daygrid.backgroundColor': 'inherit',
    
        'week.daygridLeft.width': '77px',
        'week.daygridLeft.backgroundColor': '#a8def74d',
        'week.daygridLeft.paddingRight': '5px',
        'week.daygridLeft.borderRight': '1px solid #ddd',
    
        'week.today.backgroundColor': '#b857d81f',
        'week.weekend.backgroundColor': 'inherit',
    
        // week timegrid 'timegrid'
        'week.timegridLeft.width': '77px',
        'week.timegridLeft.backgroundColor': '#03a9f44d',
        'week.timegridLeft.borderRight': '1px solid #ddd',
        'week.timegridLeft.fontSize': '12px',
        'week.timegridLeftTimezoneLabel.height': '51px',
        'week.timegridLeftAdditionalTimezone.backgroundColor': '#fdfdfd',
    
        'week.timegridOneHour.height': '48px',
        'week.timegridHalfHour.height': '24px',
        'week.timegridHalfHour.borderBottom': '1px dotted #f9f9f9',
        'week.timegridHorizontalLine.borderBottom': '1px solid #eee',
    
        'week.timegrid.paddingRight': '10px',
        'week.timegrid.borderRight': '1px solid #ddd',
        'week.timegridSchedule.borderRadius': '0',
        'week.timegridSchedule.paddingLeft': '0',
    
        'week.currentTime.color': '#135de6',
        'week.currentTime.fontSize': '12px',
        'week.currentTime.fontWeight': 'bold',
    
        'week.pastTime.color': '#808080',
        'week.pastTime.fontWeight': 'normal',
    
        'week.futureTime.color': '#333',
        'week.futureTime.fontWeight': 'normal',
    
        'week.currentTimeLinePast.border': '1px solid rgba(19, 93, 230, 0.3)',
        'week.currentTimeLineBullet.backgroundColor': '#135de6',
        'week.currentTimeLineToday.border': '1px solid #135de6',
        'week.currentTimeLineFuture.border': '1px solid #135de6',
    
        // week creation guide style
        'week.creationGuide.color': '#135de6',
        'week.creationGuide.fontSize': '12px',
        'week.creationGuide.fontWeight': 'bold',
    
        // week daygrid schedule style
        'week.dayGridSchedule.borderRadius': '0',
        'week.dayGridSchedule.height': '18px',
        'week.dayGridSchedule.marginTop': '2px',
        'week.dayGridSchedule.marginLeft': '10px',
        'week.dayGridSchedule.marginRight': '10px'
    };
    
    themeConfig = {
        'common.border': '1px solid #e5e5e5',
        'common.backgroundColor': 'white',
        'common.holiday.color': '#ff4040',
        'common.saturday.color': '#333',
        'common.dayname.color': '#333',
        'common.today.color': '#333',
        
        // creation guide style
        'common.creationGuide.backgroundColor': 'rgba(81, 92, 230, 0.05)',
        'common.creationGuide.border': '1px solid #515ce6',
        
        // month header 'dayname'
        'month.dayname.height': '31px',
        'month.dayname.borderLeft': '1px solid #e5e5e5',
        'month.dayname.paddingLeft': '10px',
        'month.dayname.paddingRight': '10px',
        'month.dayname.backgroundColor': 'inherit',
        'month.dayname.fontSize': '12px',
        'month.dayname.fontWeight': 'normal',
        'month.dayname.textAlign': 'left',
        
        // month day grid cell 'day'
        'month.holidayExceptThisMonth.color': 'rgba(255, 64, 64, 0.4)',
        'month.dayExceptThisMonth.color': 'rgba(51, 51, 51, 0.4)',
        'month.weekend.backgroundColor': 'inherit',
        'month.day.fontSize': '14px',
        
        // month schedule style
        'month.schedule.borderRadius': '2px',
        'month.schedule.height': '24px',
        'month.schedule.marginTop': '2px',
        'month.schedule.marginLeft': '8px',
        'month.schedule.marginRight': '8px',
        
        // month more view
        'month.moreView.border': '1px solid #d5d5d5',
        'month.moreView.boxShadow': '0 2px 6px 0 rgba(0, 0, 0, 0.1)',
        'month.moreView.backgroundColor': 'white',
        'month.moreView.paddingBottom': '17px',
        'month.moreViewTitle.height': '44px',
        'month.moreViewTitle.marginBottom': '12px',
        'month.moreViewTitle.backgroundColor': 'inherit',
        'month.moreViewTitle.borderBottom': 'none',
        'month.moreViewTitle.padding': '12px 17px 0 17px',
        'month.moreViewList.padding': '0 17px',
        
        // week header 'dayname'
        'week.dayname.height': '42px',
        'week.dayname.borderTop': '1px solid #e5e5e5',
        'week.dayname.borderBottom': '1px solid #e5e5e5',
        'week.dayname.borderLeft': 'inherit',
        'week.dayname.paddingLeft': '0',
        'week.dayname.backgroundColor': 'inherit',
        'week.dayname.textAlign': 'left',
        'week.today.color': '#333',
        'week.pastDay.color': '#bbb',
        
        // week vertical panel 'vpanel'
        'week.vpanelSplitter.border': '1px solid #e5e5e5',
        'week.vpanelSplitter.height': '3px',
        
        // week daygrid 'daygrid'
        'week.daygrid.borderRight': '1px solid #e5e5e5',
        'week.daygrid.backgroundColor': 'inherit',
        
        'week.daygridLeft.width': '72px',
        'week.daygridLeft.backgroundColor': 'inherit',
        'week.daygridLeft.paddingRight': '8px',
        'week.daygridLeft.borderRight': '1px solid #e5e5e5',
        
        'week.today.backgroundColor': 'rgba(81, 92, 230, 0.05)',
        'week.weekend.backgroundColor': 'inherit',
        
        // week timegrid 'timegrid'
        'week.timegridLeft.width': '72px',
        'week.timegridLeft.backgroundColor': 'inherit',
        'week.timegridLeft.borderRight': '1px solid #e5e5e5',
        'week.timegridLeft.fontSize': '11px',
        'week.timegridLeftTimezoneLabel.height': '40px',
        'week.timegridLeftAdditionalTimezone.backgroundColor': 'white',
        
        'week.timegridOneHour.height': '52px',
        'week.timegridHalfHour.height': '26px',
        'week.timegridHalfHour.borderBottom': 'none',
        'week.timegridHorizontalLine.borderBottom': '1px solid #e5e5e5',
        
        'week.timegrid.paddingRight': '8px',
        'week.timegrid.borderRight': '1px solid #e5e5e5',
        'week.timegridSchedule.borderRadius': '2px',
        'week.timegridSchedule.paddingLeft': '2px',
        
        'week.currentTime.color': '#515ce6',
        'week.currentTime.fontSize': '11px',
        'week.currentTime.fontWeight': 'normal',
        
        'week.pastTime.color': '#bbb',
        'week.pastTime.fontWeight': 'normal',
        
        'week.futureTime.color': '#333',
        'week.futureTime.fontWeight': 'normal',
        
        'week.currentTimeLinePast.border': '1px dashed #515ce6',
        'week.currentTimeLineBullet.backgroundColor': '#515ce6',
        'week.currentTimeLineToday.border': '1px solid #515ce6',
        'week.currentTimeLineFuture.border': 'none',
        
        // week creation guide style
        'week.creationGuide.color': '#515ce6',
        'week.creationGuide.fontSize': '11px',
        'week.creationGuide.fontWeight': 'bold',
        
        // week daygrid schedule style
        'week.dayGridSchedule.borderRadius': '2px',
        'week.dayGridSchedule.height': '24px',
        'week.dayGridSchedule.marginTop': '2px',
        'week.dayGridSchedule.marginLeft': '8px',
        'week.dayGridSchedule.marginRight': '8px'
    };
    
    calendarArray=[
          {
            id: '1',
            name: 'My Calendar',
            color: '#ffffff',
            bgColor: '#9e5fff',
            dragBgColor: '#9e5fff',
            borderColor: '#9e5fff'
          },
          {
            id: '2',
            name: 'Company',
            color: '#ffffff',
            bgColor: '#00a9ff',
            dragBgColor: '#00a9ff',
            borderColor: '#00a9ff'
          },
          {
            id: '3',
            name: 'Family',
            color: '#ffffff',
            bgColor: '#ff5583',
            dragBgColor: '#ff5583',
            borderColor: '#ff5583'
          },
          {
            id: '4',
            name: 'Friend',
            color: '#ffffff',
            bgColor: '#03bd9e',
            dragBgColor: '#03bd9e',
            borderColor: '#03bd9e'
          },
          {
            id: '5',
            name: 'Birthday',
            color: '#ffffff',
            bgColor: '#ffbb3b',
            dragBgColor: '#ffbb3b',
            borderColor: '#ffbb3b'
          },
          {
            id: '6',
            name: 'National Holidays',
            color: '#ffffff',
            bgColor: '#ff4040',
            dragBgColor: '#ff4040',
            borderColor: '#ff4040'
    }];

    templates = {
        milestone: (schedule: any) => {
          return this.getGridCategoryTemplate('milestone', schedule);
        },
        milestoneTitle: () => {
          return this.getGridTitleTemplate('milestone');
        },
        task: (schedule: any) => {
          return this.getGridCategoryTemplate('task', schedule);
        },
        taskTitle: () => {
          return this.getGridTitleTemplate('task');
        },
        allday: (schedule: any) => {
          return this.getTimeTemplate(schedule, true);
        },
        alldayTitle: () => {
          return this.getGridTitleTemplate('allday');
        },
        time: (schedule: any) => {
          return this.getTimeTemplate(schedule, false);
        },
        goingDuration: function (schedule: any) {
          return '<span class="calendar-icon ic-travel-time"></span>' + schedule.goingDuration + 'min.';
        },
        comingDuration: function (schedule: any) {
          return '<span class="calendar-icon ic-travel-time"></span>' + schedule.comingDuration + 'min.';
        },
        monthMoreTitleDate: function (date: any, dayname: any) {
          var day = date.split('.')[2];
          return '<span class="tui-full-calendar-month-more-title-day">' + day + '</span> <span class="tui-full-calendar-month-more-title-day-label">' + dayname + '</span>';
        },
        monthMoreClose: function () {
          return '<span class="tui-full-calendar-icon tui-full-calendar-ic-close"></span>';
        },
        monthGridHeader: function (dayModel: any) {
          var date = parseInt(dayModel.date.split('-')[2], 10);
          var classNames = ['tui-full-calendar-weekday-grid-date '];
  
          if (dayModel.isToday) {
            classNames.push('tui-full-calendar-weekday-grid-date-decorator');
          }
  
          return '<span class="' + classNames.join(' ') + '">' + date + '</span>';
        },
        monthGridHeaderExceed: function (hiddenSchedules: any) {
          return '<span class="weekday-grid-more-schedules">+' + hiddenSchedules + '</span>';
        },
        monthGridFooter: function () {
          return '';
        },
        monthGridFooterExceed: function (hiddenSchedules: any) {
          return '';
        },
        monthDayname: function (model: any) {
          return String(model.label).toLocaleUpperCase();
        },
        weekDayname: function(model:any) {
          return '<span class="tui-full-calendar-dayname-date">' + model.date + '</span>&nbsp;&nbsp;<span class="tui-full-calendar-dayname-name">' + model.dayName + '</span>';
        },
        weekGridFooterExceed: function(hiddenSchedules:any) {
          return '+' + hiddenSchedules;
        },
        dayGridTitle: (viewName: any) => {
          /*
          * use another functions instead of 'dayGridTitle'
          * milestoneTitle: function() {...}
          * taskTitle: function() {...}
          * alldayTitle: function() {...}
          */
  
          return this.getGridTitleTemplate(viewName);
        },
        schedule: (schedule: any) => {
          /*
          * use another functions instead of 'schedule'
          * milestone: function() {...}
          * task: function() {...}
          * allday: function() {...}
          */
  
          return this.getGridCategoryTemplate(schedule.category, schedule);
        },
        collapseBtnTitle: function() { // ??? 어떤 템플릿인가요??
          return '<span class="tui-full-calendar-icon tui-full-calendar-ic-arrow-solid-top"></span>';
        },
        // timezoneDisplayLabel: function(timezoneOffset:any, displayLabel:any) {
        //   var gmt, hour, minutes;
    
        //   if (!displayLabel) {
        //     gmt = timezoneOffset < 0 ? '-' : '+';
        //     hour = Math.abs(timezoneOffset / 60);
        //     // hour = Math.abs(parseInt(timezoneOffset / 60, 10));
        //     minutes = Math.abs(timezoneOffset % 60);
        //     displayLabel = gmt + this.getPadStart(hour) + ':' + this.getPadStart(minutes);
        //   }
        //   return displayLabel;
        // },
        timegridDisplayPrimayTime: function(time:any) {
          /* will be deprecated. use 'timegridDisplayPrimaryTime' */
          var hour = time.hour;
          var meridiem = hour >= 12 ? 'pm' : 'am';
    
          if (hour > 12) {
            hour = hour - 12;
          }
    
          return hour + ' ' + meridiem;
        },
        timegridDisplayPrimaryTime: function(time:any) {
          var hour = time.hour;
          var meridiem = hour >= 12 ? 'pm' : 'am';
    
          if (hour > 12) {
            hour = hour - 12;
          }
    
          return hour + ' ' + meridiem;
        },
        // timegridDisplayTime: function(time:any) {
        //   return this.getPadStart(time.hour) + ':' + this.getPadStart(time.hour);
        // },
        timegridCurrentTime: function(timezone:any) {
          var templates = [];
    
          if (!timezone) {
              return '';
          }
    
          if (timezone.dateDifference !== 0) {
              templates.push('[' + timezone.dateDifferenceSign + timezone.dateDifference + ']<br>');
          }
    
          templates.push(moment(timezone.hourmarker.toUTCString()).format('HH:mm'));
          return templates.join('');
        },
  
        popupIsAllDay: function () {
          return 'All Day';
        },
        popupStateFree: function () {
          return 'Free';
        },
        popupStateBusy: function () {
          return 'Busy';
        },
        titlePlaceholder: function () {
          return 'Subject';
        },
        locationPlaceholder: function () {
          return 'Location';
        },
        startDatePlaceholder: function () {
          return 'Start date';
        },
        endDatePlaceholder: function () {
          return 'End date';
        },
        popupSave: function () {
          return 'Save';
        },
        popupUpdate: function () {
          return 'Update';
        },
        popupDetailDate: function(isAllDay:any, start:any, end:any) {
          var isSameDate = moment(start).isSame(end);
          var endFormat = (isSameDate ? '' : 'YYYY.MM.DD ') + 'hh:mm a';
  
          if (isAllDay) {
            return moment(start).format('YYYY.MM.DD') + (isSameDate ? '' : ' - ' + moment(end).format('YYYY.MM.DD'));
          }
  
          return (moment(start).format('YYYY.MM.DD hh:mm a') + ' - ' + moment(end).format(endFormat));
        },
        popupDetailLocation: function (schedule: any) {
          return 'Location : ' + schedule.location;
        },
        popupDetailUser: function (schedule: any) {
          return 'User : ' + (schedule.attendees || []).join(', ');
        },
        popupDetailState: function (schedule: any) {
          return 'State : ' + schedule.state || 'Busy';
        },
        popupDetailRepeat: function (schedule: any) {
          return 'Repeat : ' + schedule.recurrenceRule;
        },
        popupDetailBody: function (schedule: any) {
          return 'Body : ' + schedule.body;
        },
        popupEdit: function () {
          return 'Edit';
        },
        popupDelete: function () {
          return 'Delete';
        }
      };

    getTimeTemplate(schedule: any, isAllDay: any) {
        var html = [];
        if (!isAllDay) {
          html.push('<strong>' + moment(schedule.start.getTime()).format('HH:mm') + '</strong> ');
        }
        if (schedule.isPrivate) {
          html.push('<span class="calendar-font-icon ic-lock-b"></span>');
          html.push(' Private');
        } else {
          if (schedule.isReadOnly) {
            html.push('<span class="calendar-font-icon ic-readonly-b"></span>');
          } else if (schedule.recurrenceRule) {
            html.push('<span class="calendar-font-icon ic-repeat-b"></span>');
          } else if (schedule.attendees.length) {
            html.push('<span class="calendar-font-icon ic-user-b"></span>');
          } else if (schedule.location) {
            html.push('<span class="calendar-font-icon ic-location-b"></span>');
          }
          html.push(' ' + schedule.title);
        }
    
        return html.join('');
      }
    
    getGridTitleTemplate(type: any) {
        var title = '';
    
        switch (type) {
          case 'milestone':
            title = '<span class="tui-full-calendar-left-content">MILESTONE</span>';
            break;
          case 'task':
            title = '<span class="tui-full-calendar-left-content">TASK</span>';
            break;
          case 'allday':
            title = '<span class="tui-full-calendar-left-content">ALL DAY</span>';
            break;
        }
    
        return title;
      }
    
    getGridCategoryTemplate(category: any, schedule: any) {
        var tpl;
    
        switch (category) {
          case 'milestone':
            tpl = '<span class="calendar-font-icon ic-milestone-b"></span> <span style="background-color: ' + schedule.bgColor + '">' + schedule.title + '</span>';
            break;
          case 'task':
            tpl = '#' + schedule.title;
            break;
          case 'allday':
            tpl = this.getTimeTemplate(schedule, true);
            break;
        }
    
        return tpl;
      }
    
      // getPadStart(value:any) {
      //     value = value.toString();
      //     return value.padStart(2, '0');
      // }
}    


      