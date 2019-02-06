import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from "moment";
import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-scheduler';
import "./style.css";
import API from "../../utils/API";

class GrowingCalendar extends React.Component{
  state = {
    flowers: [],
    events: []
  }

  //variables common name and hardiness zone

  componentDidMount() {
    let commonName = "BASIL";
    let zone = "10a";
    this.loadGrowCal(commonName,zone);
  }

  loadGrowCal(commonName, zone) {
    console.log ("The Common Name is:" + commonName)
    console.log ("The Zone is:" + zone)
    API.getGrowCal(commonName, zone)
        .then(res => {
            console.log("GROW!!!")
            console.log(res.data);
            this.setGrowCal(res.data);
            //call function here to translate the response
            
        })
        .catch(err => console.log(err));
  }  

  setGrowCal(data) {
    this.setState({growCal: data});
      // $("#calendar").fullCalendar('rerenderEvents');
      $('#calendar').fullCalendar({
        defaultView: 'timelineYear',
        slotDuration: { months: 1 },
        height: 205,
        visibleRange: {
          start: moment('2018-01-01'),
          end: moment('2019-01-01')
        },
        resourceAreaWidth: '20%',
        resourceLabelText: 'How to Sow',
        header: {
          'left': '',
          'center': '',
          'right': ''
        },
        resources: [
          { id: 'Indoor Sow', title: 'Indoor Sow' }, //sowType = "Indoor Sow"
          { id: 'Direct Sow', title: 'Direct Sow', eventColor: 'brown' }, //sowType = "Outdoor Sow"
          { id: 'Transplant', title: 'Transplant', eventColor: 'Green' }  //sowType = "Transplant"
        ],
        events: [
        //   {
        //     "zone" : "9-10", 
        //     "zones" : "[9a, 9b, 10a, 10b]", 
        //     "sowType" : "Transplant", 
        //     "dtRangeStart" : "2019-02-15", 
        //     "dtRangeEnd" : "2019-03-28"
        // }, 

        //   {
        //     "zone" : "9-10", 
        //     "zones" : "[9a, 9b, 10a, 10b]", 
        //     "sowType" : "Indoor Sow", 
        //     "dtRangeStart" : "2019-01-04", 
        //     "dtRangeEnd" : "2019-01-18"
        // }, 

      //   {
      //     "zone" : "9-10", 
      //     "zones" : "[9a, 9b, 10a, 10b]", 
      //     "sowType" : "Direct Sow", 
      //     "dtRangeStart" : "2019-03-01", 
      //     "dtRangeEnd" : "2019-04-25"
      // }        
          {
            id: "1",  //PlantID
            resourceId: "Transplant",  //sowType
            start: "2019-02-15",  //dtRangeStart
            end: "2019-03-28",  //dtRangeEnd
            title: "2/15-3/28",  //month&Day of Range
            allDay: true
          },
          {
            id: "2",
            resourceId: "Indoor Sow",
            start: "2019-01-04",
            end: "2019-01-18",
            title: "1/4-1/18",
            allDay: true
          },
          {
            id: "3",
            resourceId: "Direct Sow",
            start: "2019-03-12",
            end: "2019-04-06",
            title: "3/12-4/06",
            allDay: true
          },
          {
            id: "4",
            resourceId: "c",
            start: "2018-04-07T07:30:00",
            end: "2018-04-07T09:30:00",
            title: "event 4"
          },
          {
            id: "5",
            resourceId: "d",
            start: "2018-04-07T10:00:00",
            end: "2018-04-07T15:00:00",
            title: "event 5"
          }
        ],
        eventRender: function(event, element) {
          element.prop("title", event.title);  //hover to reveal entire date range
        }
      });
    };


  render() {
    return (
      <div id="calendar"></div>

    )
  }
}

export default withRouter(GrowingCalendar);