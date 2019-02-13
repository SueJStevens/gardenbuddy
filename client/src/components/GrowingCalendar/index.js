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
    let hardinessZone = "10a"; //10a by default
    
    let commonName1 = this.props.location.state.commonName;
    let commonName = commonName1.toUpperCase();
    //console.log(commonName);
    
    let searchedZone = this.props.location.state.searchedZone;
    if(searchedZone) {
      hardinessZone = searchedZone;
    }
    this.loadGrowCal(commonName,hardinessZone);
  }

  loadGrowCal(commonName, zone) {
    console.log ("The Common Name is:" + commonName)
    console.log ("The Zone is:" + zone)
    API.getGrowCal(commonName, zone)
        .then(res => {
            console.log("GROW!!!")
            //console.log(res.data);
            console.log(res.data);
            //call new function to reformat data
            this.setGrowCal(res.data);
            //call function here to translate the response            
        })
        .catch(err => console.log(err));
  }  

  //New Function to reformat data
  reformat(data) {
    //this.setgrowcal(returned data)
  }

  setGrowCal(data) {
    // We're not really using state for the calendar attributes
    // this.setState({growCal: data});

    // $("#calendar").fullCalendar('rerenderEvents');

    let growData = data;
    let commonName = this.props.location.state.commonName.toUpperCase();
    let calendarAttrs = {
      indoorStart : "",
      indoorEnd : "",
      directStart : "",
      directEnd : "",
      transplantStart : "",
      transplantEnd : ""
    };

    // Step 1: Check how many growCal entries we got
    console.log(commonName + "has " + growData.length + " growing calendar entries");

    // Extract the start and end dates for each type of growing calendar
    growData.forEach( (item) => {
      let currentSowType = item.sowType.toLowerCase();
      console.log("Found " + currentSowType + " calendar for " + commonName);
      switch(currentSowType) {
        case "indoor sow" :
          calendarAttrs.indoorStart = moment(item.dtRangeStart).format("YYYY-MM-DD");
          calendarAttrs.indoorEnd = moment(item.dtRangeEnd).format("YYYY-MM-DD");
          break;
        case "direct sow" :
          calendarAttrs.directStart = moment(item.dtRangeStart).format("YYYY-MM-DD");
          calendarAttrs.directEnd = moment(item.dtRangeEnd).format("YYYY-MM-DD");
          break;
        case "transplant" :
          calendarAttrs.transplantStart = moment(item.dtRangeStart).format("YYYY-MM-DD");
          calendarAttrs.transplantEnd = moment(item.dtRangeEnd).format("YYYY-MM-DD");
          break;
        default:
          console.log("Unexpected sow type - " + currentSowType);
      }
    })



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
            start: calendarAttrs.transplantStart,
            end: calendarAttrs.transplantEnd,
            title: (moment(calendarAttrs.transplantStart).format("MM-DD")
                    + " to " +
                    moment(calendarAttrs.transplantEnd).format("MM-DD")),
            allDay: true
          },
          {
            id: "2",
            resourceId: "Indoor Sow",
            start: calendarAttrs.indoorStart,
            end: calendarAttrs.indoorEnd,
            title: (moment(calendarAttrs.indoorStart).format("MM-DD")
                    + " to " +
                    moment(calendarAttrs.indoorEnd).format("MM-DD")),
            allDay: true
          },
          {
            id: "3",
            resourceId: "Direct Sow",
            start: calendarAttrs.directStart,
            end: calendarAttrs.directEnd,
            title: (moment(calendarAttrs.directStart).format("MM-DD")
                    + " to " +
                    moment(calendarAttrs.directEnd).format("MM-DD")),
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
        },
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source'
      });
    };


  render() {
    return (
      <div id="calendar"></div>

    )
  }
}

export default withRouter(GrowingCalendar);