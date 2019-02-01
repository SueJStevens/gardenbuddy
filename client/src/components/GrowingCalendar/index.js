import React, { Component } from 'react'
import moment from "moment";
import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-scheduler';
import "fullcalendar-reactwrapper";

export default class GrowingCalendar extends Component {
 
    componentDidMount() {
        
        $(function() {
            // $("#calendar").fullCalendar('rerenderEvents');
                $('#calendar').fullCalendar({
                  defaultView: 'timelineYear',
                  slotDuration: { months: 1 },
                  height: 250,
                  visibleRange: {
                    start: moment('2018-01-01'),
                    end: moment('2018-01-02')
                  },
                  resourceAreaWidth: '20%',
                  resourceLabelText: 'Plant Type',
                  header: {
                    'left': 'timeline, agendaYear',
                    'center': 'title'
                  },
                  resources: [
                    { id: 'a', title: 'Indoor Sow' },
                    { id: 'b', title: 'Outdoor Sow', eventColor: 'green' },
                    { id: 'c', title: 'Transplants', eventColor: 'orange' }
                  ],
                  events: [
                    {
                      id: "1",
                      resourceId: "a",
                      start: "2020-04-06",
                      end: "2021-06-30",
                      title: "event 1",
                      allDay: true
                    },
                    {
                      id: "2",
                      resourceId: "b",
                      start: "2018-04-07",
                      end: "2018-05-07",
                      title: "event 2"
                    },
                    // {
                    //   id: "3",
                    //   resourceId: "b",
                    //   start: "2018-04-07T12:00:00",
                    //   end: "2018-04-08T06:00:00",
                    //   title: "event 3"
                    // },
                    // {
                    //   id: "4",
                    //   resourceId: "c",
                    //   start: "2018-04-07T07:30:00",
                    //   end: "2018-04-07T09:30:00",
                    //   title: "event 4"
                    // },
                    // {
                    //   id: "5",
                    //   resourceId: "d",
                    //   start: "2018-04-07T10:00:00",
                    //   end: "2018-04-07T15:00:00",
                    //   title: "event 5"
                    // }
                  ]
        
                });
              });

            
    }


  render() {
    return (
        <div id="calendar"></div>

    )
  }
}
