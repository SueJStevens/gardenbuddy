const mongoose = require("mongoose");
const db = require("../models");
const moment = require("moment");

// This file empties the Plants collection and inserts the plants below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/plantbuddy", { useNewUrlParser: true }
);

const plantingCalendarSeed = [
  {
    "plantCategories": ["Fruits","Vegetables"],
    "commonName": "WATERMELON",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-30"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-30"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      }
    ]
  },
  {
    "plantCategories": ["Fruits", "Vegetables"],
    "commonName": "HONEYDEW",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-30"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-30"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals","Perennials"],
    "commonName": "ASCLEPIAS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-18",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-09-01",
        "dtRangeEnd": "2019-10-06"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-09-03",
        "dtRangeEnd": "2019-09-30"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-22",
        "dtRangeEnd": "2019-12-29"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-04",
        "dtRangeEnd": "2019-10-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-07-23",
        "dtRangeEnd": "2019-08-06"
      }
    ]
  },
  {
    "plantCategories": ["Annuals","Perennials"],
    "commonName": "BABY'S BREATH",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-06-05",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-05",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-16",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Annuals","Perennials"],
    "commonName": "POPPY",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-02"
      }
    ]
  },
  {
    "plantCategories": ["Annuals","Perennials"],
    "commonName": "DIANTHUS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-04",
        "dtRangeEnd": "2019-10-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-07-23",
        "dtRangeEnd": "2019-08-06"
      }
    ]
  },
  {
    "plantCategories": ["Annuals","Perennials"],
    "commonName": "DAISIES",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-11-23",
        "dtRangeEnd": "2019-12-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Annuals","Perennials"],
    "commonName": "GERANIUMS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-25",
        "dtRangeEnd": "2019-03-10"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-08",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Annuals","Perennials"],
    "commonName": "LILIES",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Annuals","Perennials"],
    "commonName": "LOBELIAS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-15"
      }
    ]
  },
  {
    "plantCategories": ["Annuals","Perennials"],
    "commonName": "RUDBECKIAS",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-04",
        "dtRangeEnd": "2019-10-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-25",
        "dtRangeEnd": "2019-03-10"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-08",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-11-23",
        "dtRangeEnd": "2019-12-07"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-11-23",
        "dtRangeEnd": "2019-12-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals","Perennials"],
    "commonName": "SALVIA",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Fruits","Vegetable"],
    "commonName": "CANTALOUPE",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-30"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "ALYSSUM",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-14"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "AMARANTHUS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-06-05",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "AMMI MAJUS",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-15",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-02"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "ANGELONIA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-15"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "ASTER",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-04-07",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-06-05",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "BALSAM",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-05"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "BEGONIA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-18",
        "dtRangeEnd": "2019-02-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-06-05",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-06-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "BELL OF IRELAND",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-04-07",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "BLUE EYED DAISIES",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "CALADIUM",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-04-07",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-06-05",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-06-05",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "CALENDULA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "CALIBRACHOA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "CALLA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "CANNA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "CELOSIA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-04-07",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "CHRYSANTHEMUM",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "CLEOME",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "COLEUS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-06-05",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "CORNFLOWER",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-02-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "COSMOS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "CUPHEA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "CYPRESS VINE",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "DAHLIAS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-25",
        "dtRangeEnd": "2019-03-10"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-08",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-11-23",
        "dtRangeEnd": "2019-12-07"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-11-23",
        "dtRangeEnd": "2019-12-07"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "DICHONDRA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "DUSTY MILLER",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "ELEPHANT EARS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "FOUR O'CLOCKS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-04-07",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "GAILLARDIA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-04-07",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "GAZANIA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "GERBERA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-02-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-25",
        "dtRangeEnd": "2019-03-10"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-08",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "GLADIOLUS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-11-23",
        "dtRangeEnd": "2019-12-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "GOMPHRENA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-04-07",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "ICE PLANTS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-04-07",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "IMPATIENS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-25",
        "dtRangeEnd": "2019-03-10"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-08",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "IPOMOPSIS",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "LISIANTHUS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "MARIGOLDS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-04-07",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "MILLET",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "MOONFLOWERS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "MORNING GLORIES",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "NASTURTIUM",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-04-07",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "NEMOPHILA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "NICOTIANA",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "ORNAMENTAL KALES",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-09-01",
        "dtRangeEnd": "2019-11-03"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-08-01",
        "dtRangeEnd": "2019-08-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-09-03",
        "dtRangeEnd": "2019-09-30"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-09-01",
        "dtRangeEnd": "2019-11-03"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-01",
        "dtRangeEnd": "2019-12-29"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-08-21",
        "dtRangeEnd": "2019-10-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-11-17",
        "dtRangeEnd": "2019-12-29"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "PANSIES",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-25",
        "dtRangeEnd": "2019-03-10"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-08",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-25",
        "dtRangeEnd": "2019-05-26"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-15",
        "dtRangeEnd": "2019-05-02"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-08-01",
        "dtRangeEnd": "2019-08-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-09-03",
        "dtRangeEnd": "2019-09-30"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-09-01",
        "dtRangeEnd": "2019-11-03"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-01",
        "dtRangeEnd": "2019-11-03"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-08-21",
        "dtRangeEnd": "2019-10-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-11-17",
        "dtRangeEnd": "2019-12-29"
      },
      { 
          "zone" : "11", 
          "zones" : ["11a", "11b"], 
          "sowType": "Direct Sow",
          "dtRangeStart" : "2019-11-17", 
          "dtRangeEnd" : "2019-12-29"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "PENNISETUM",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-05-26"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-01",
        "dtRangeEnd": "2019-11-03"
      },
      { 
        "zone" : "11", 
        "zones" : ["11a", "11b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-11-17", 
        "dtRangeEnd" : "2019-12-29"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "PENTAS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-25",
        "dtRangeEnd": "2019-03-10"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-08",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-06-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "PETUNIAS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "PHLOX FLOWERS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "PLECTRANTHUS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "PORTULACA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-25",
        "dtRangeEnd": "2019-03-10"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-08",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-06-05",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "SALPIGLOSSIS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-11-23",
        "dtRangeEnd": "2019-12-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "SCABIOSA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "SCAEVOLA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-25",
        "dtRangeEnd": "2019-03-10"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-08",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "SNAPDRAGONS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-02-25"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-08",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-11-23",
        "dtRangeEnd": "2019-12-07"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-11-23",
        "dtRangeEnd": "2019-12-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-15"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "STATICE",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-11-23",
        "dtRangeEnd": "2019-12-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-25",
        "dtRangeEnd": "2019-03-10"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-08",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-06-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "STOCK",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-25",
        "dtRangeEnd": "2019-03-10"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-08",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "STRAWFLOWERS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-04-07",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "SUNFLOWERS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-25"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "SWEET PEAS",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-04-07",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-05"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "THUNBERGIA",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-05"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "TITHONIA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "TORENIA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-18",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "TUBEROSE",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "VERBENAS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-09",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "VIGNA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "VINCAS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "VIOLAS",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-25",
        "dtRangeEnd": "2019-03-10"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-08",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-25",
        "dtRangeEnd": "2019-05-26"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-15",
        "dtRangeEnd": "2019-05-02"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-08-01",
        "dtRangeEnd": "2019-08-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-09-03",
        "dtRangeEnd": "2019-09-30"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-09-01",
        "dtRangeEnd": "2019-11-03"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-01",
        "dtRangeEnd": "2019-11-03"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-08-21",
        "dtRangeEnd": "2019-10-30"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-11-17",
        "dtRangeEnd": "2019-12-29"
      },
      { 
        "zone" : "11", 
        "zones" : ["11a", "11b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-01", 
        "dtRangeEnd" : "2019-12-29"
      }
    ]
  },
  {
    "plantCategories": ["Annuals"],
    "commonName": "ZINNIAS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-05-05"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-04-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-18",
        "dtRangeEnd": "2019-02-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-18",
        "dtRangeEnd": "2019-02-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Fruits"],
    "commonName": "BLACKBERRY PLANTS",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      }
    ]
  },
  {
    "plantCategories": ["Fruits"],
    "commonName": "CURRANT",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Fruits"],
    "commonName": "FIGS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      }
    ]
  },
  {
    "plantCategories": ["Fruits"],
    "commonName": "FRUIT TREES",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Fruits"],
    "commonName": "GRAPES",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      }
    ]
  },
  {
    "plantCategories": ["Fruits"],
    "commonName": "MELON",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      }
    ]
  },
  {
    "plantCategories": ["Fruits"],
    "commonName": "RASPBERRY PLANTS",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Fruits"],
    "commonName": "SPECIALTY FRUITS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Fruits"],
    "commonName": "STRAWBERRY PLANTS",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "BASIL",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "BORAGE",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "CAT-GRASS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "CATNIP",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-25",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "CHAMOMILE",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "CHERVIL",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "CHIVE",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-02-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "CILANTRO",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "CORIANDER",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "DILL",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "FENNEL",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-18",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-14"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "LAVENDER",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "LEMON BALM",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "LEMON GRASS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "LEMON VERBENA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "MARJORAM",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-02-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "MINT",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-02-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "OREGANO",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-17"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "PARSLEY",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-17"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "ROSEMARY",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-02-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-25",
        "dtRangeEnd": "2019-03-10"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-08",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "SAGE",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-02-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "STEVIA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "SWEET MARIGOLD",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      }
    ]
  },
  {
    "plantCategories": ["Herbs"],
    "commonName": "THYME",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-02-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "ACHILLEA",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-06-26",
        "dtRangeEnd": "2019-07-10"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-07-23",
        "dtRangeEnd": "2019-08-06"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "AGAPANTHUS",
    "sowCal": [
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "AGASTACHES",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-07-23",
        "dtRangeEnd": "2019-08-06"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "ALLIUMS",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "AMSONIA",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "ANEMONE",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "ASTERS",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-07-11"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "ASTILBE",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "ASTRANTIA",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "BUTTERFLY BUSH",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-08-06",
        "dtRangeEnd": "2019-08-20"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-22"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "CAMPANULA",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-12-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-16",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "CARNATIONS",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-16",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "CHINESE LANTERNS",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "CHRYSANTHEMUMS",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-16",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-04",
        "dtRangeEnd": "2019-10-15"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "CLEMATIS",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "COLUMBINE",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "COREOPSIS",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "CROCUS",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-04",
        "dtRangeEnd": "2019-10-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "DAFFODIL BULBS",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-04",
        "dtRangeEnd": "2019-10-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "DAYLILIES",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "DELOSPERMA",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "DELPHINIUM",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-04",
        "dtRangeEnd": "2019-10-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "ECHINACEA",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-04",
        "dtRangeEnd": "2019-10-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "FERNS",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "FOLIAGE",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-04",
        "dtRangeEnd": "2019-10-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "FOXGLOVES",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "GAILLARDIAS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-22",
        "dtRangeEnd": "2019-11-05"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-04",
        "dtRangeEnd": "2019-10-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      },
      { 
        "zone" : "11", 
        "zones" : ["11a", "11b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-22", 
        "dtRangeEnd" : "2019-10-20"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "GALANTHUS",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-04",
        "dtRangeEnd": "2019-10-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "GLORIOSA DAISIES",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "HEDGES",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-04",
        "dtRangeEnd": "2019-10-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "HELENIUM",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "HELLEBORES",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "HEUCHERA",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "HIBISCUS",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-25",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "HOLLYHOCK",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-04",
        "dtRangeEnd": "2019-10-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "HOSTAS",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "HYACINTH",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-11-12"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "HYDRANGEAS",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "IRIS",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "KNIPHOFIA",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-08-20",
        "dtRangeEnd": "2019-09-03"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "LAVENDERS",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-07",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-08-06",
        "dtRangeEnd": "2019-09-03"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "LITHODORA",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "LONICERA",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "LUNARIA",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-16",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "LUPINE",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-26",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-16",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "LYCHNIS",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-16",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "MANGAVE",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-15"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "MONARDA",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "MUMS",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-04",
        "dtRangeEnd": "2019-10-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "ORNAMENTAL GRASS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-16",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "PAINTED DAISIES",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "PENSTEMON",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "PEONY",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "PERENNIAL GRASSES",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "PHLOX",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "ROSES",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "SEDUM",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "SHASTA DAISIES",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-17",
        "dtRangeEnd": "2019-10-29"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "SHRUBS",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "SOLIDAGO",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "TRADESCANTIA",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "TREES",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-16",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "TRITOMA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "TULIP BULBS",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-16",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-04",
        "dtRangeEnd": "2019-10-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "VERBASCUM",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Perennials"],
    "commonName": "WEIGELA",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "ARTICHOKE",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-01-14",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-04"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "ARUGULA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-02-28"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-18",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-02-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-02-28"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "ASIAN GREENS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-18",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-18",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "ASPARAGUS",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-25",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-03-28"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "BEANS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-11"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-07-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-11"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-11"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "BEETS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-07-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-28"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "BROCCOLI",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-05-05"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-04-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-06-12",
        "dtRangeEnd": "2019-07-24"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-08-15",
        "dtRangeEnd": "2019-09-05"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "BROCCOLI RAAB",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-18",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "BROKALI",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-05-05"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-18",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-18",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-06-12",
        "dtRangeEnd": "2019-07-24"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-08-15",
        "dtRangeEnd": "2019-09-05"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "BRUSSELS SPROUTS",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-18",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-07-24",
        "dtRangeEnd": "2019-09-18"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-07-09",
        "dtRangeEnd": "2019-08-20"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-01",
        "dtRangeEnd": "2019-10-15"
      },
      { 
          "zone" : "3-4", 
          "zones" : ["3a", "3b", "4a", "4b"], 
          "sowType": "Direct Sow",
          "dtRangeStart" : "2019-07-10", 
          "dtRangeEnd" : "2019-08-21"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "CABBAGE",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-05-05"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-04-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-06-12",
        "dtRangeEnd": "2019-07-24"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-08-15",
        "dtRangeEnd": "2019-09-05"
      },
      { 
        "zone" : "9-10", 
        "zones" : ["9a", "9b", "10a", "10b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-01-12", 
        "dtRangeEnd" : "2019-02-09"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "CARROTS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-18",
        "dtRangeEnd": "2019-07-25"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-28"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "CAULIFLOWER",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-21"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-05-05"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-01-18"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-04-18"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-09-08",
        "dtRangeEnd": "2019-09-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-06-12",
        "dtRangeEnd": "2019-07-24"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-09-08",
        "dtRangeEnd": "2019-09-22"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-09-08",
        "dtRangeEnd": "2019-09-22"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-22",
        "dtRangeEnd": "2019-10-29"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-08-15",
        "dtRangeEnd": "2019-09-05"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-22",
        "dtRangeEnd": "2019-10-29"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-22",
        "dtRangeEnd": "2019-10-29"
      },
      { 
          "zone" : "11", 
          "zones" : ["11a", "11b"], 
          "sowType": "Direct Sow",
          "dtRangeStart" : "2019-09-22", 
          "dtRangeEnd" : "2019-10-20"
      },
      { 
          "zone" : "7-8", 
          "zones" : ["7a", "7b", "8a", "8b"], 
          "sowType": "Direct Sow",
          "dtRangeStart" : "2019-09-22",
          "dtRangeEnd" : "2019-10-20"
      },
      { 
          "zone" : "9-10", 
          "zones" : ["9a", "9b", "10a", "10b"], 
          "sowType": "Direct Sow",
          "dtRangeStart" : "2019-09-22", 
          "dtRangeEnd" : "2019-10-20"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "CELERY",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-18",
        "dtRangeEnd": "2019-02-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-25",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-05-05"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-04-18"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "CHINESE CABBAGE",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-05-19"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-05-05"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-05-02"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-07-24",
        "dtRangeEnd": "2019-09-18"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-08-15",
        "dtRangeEnd": "2019-09-05"
      },
      { 
        "zone" : "11", 
        "zones" : ["11a", "11b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-01-12", 
        "dtRangeEnd" : "2019-02-09"
      },
      { 
        "zone" : "3-4", 
        "zones" : ["3a", "3b", "4a", "4b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-08-21", 
        "dtRangeEnd" : "2019-09-04"
      },
      { 
        "zone" : "5-6", 
        "zones" : ["5a", "5b", "6a", "6b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-17", 
        "dtRangeEnd" : "2019-10-01"
      },
      { 
        "zone" : "7-8", 
        "zones" : ["7a", "7b", "8a", "8b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-01-12",
        "dtRangeEnd" : "2019-02-09"
      },
      { 
        "zone" : "9-10", 
        "zones" : ["9a", "9b", "10a", "10b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-01-12", 
        "dtRangeEnd" : "2019-02-09"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "COLLARDS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-05-19"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-05-02"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      { 
        "zone" : "3-4", 
        "zones" : ["3a", "3b", "4a", "4b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-07-10", 
        "dtRangeEnd" : "2019-08-21"
      },
      { 
        "zone" : "5-6", 
        "zones" : ["5a", "5b", "6a", "6b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-08-06", 
        "dtRangeEnd" : "2019-09-17"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "CORN",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-11"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-30"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-06-13"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-11"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-11"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "CORN SALAD",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-02-28"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-05-19"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-05-02"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-02-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-02-28"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "COWPEAS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-11"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-11"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-11"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "CUCUMBERS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-11"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-30"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-11"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-11"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "EGGPLANTS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-30"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "ENDIVE",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-04-11"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-18",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-11"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-11"
      },
      { 
        "zone" : "11", 
        "zones" : ["11a", "11b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-22", 
        "dtRangeEnd" : "2019-10-20"
      },
      { 
        "zone" : "3-4", 
        "zones" : ["3a", "3b", "4a", "4b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-07-10", 
        "dtRangeEnd" : "2019-08-21"
      },
      { 
        "zone" : "5-6", 
        "zones" : ["5a", "5b", "6a", "6b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-08-06", 
        "dtRangeEnd" : "2019-09-17"
      },
      { 
        "zone" : "7-8", 
        "zones" : ["7a", "7b", "8a", "8b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-22",
        "dtRangeEnd" : "2019-10-20"
      },
      { 
        "zone" : "9-10", 
        "zones" : ["9a", "9b", "10a", "10b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-22", 
        "dtRangeEnd" : "2019-10-20"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "GARLIC",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-25",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-08",
        "dtRangeEnd": "2019-10-06"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-08",
        "dtRangeEnd": "2019-10-06"
      },
      { 
        "zone" : "11", 
        "zones" : ["11a", "11b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-08",
        "dtRangeEnd" : "2019-10-20"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "GOURDS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-30"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "HORSERADISH",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-02"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "KALE",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-05-05"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-21",
        "dtRangeEnd": "2019-05-02"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-07-10",
        "dtRangeEnd": "2019-07-24"
      },
      { 
        "zone" : "3-4", 
        "zones" : ["3a", "3b", "4a", "4b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-08-15", 
        "dtRangeEnd" : "2019-09-04"
      },
      { 
        "zone" : "5-6", 
        "zones" : ["5a", "5b", "6a", "6b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-08-06", 
        "dtRangeEnd" : "2019-08-20"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "KOHLRABI",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-28",
        "dtRangeEnd": "2019-06-09"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-11",
        "dtRangeEnd": "2019-05-23"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      { 
        "zone" : "11", 
        "zones" : ["11a", "11b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-08", 
        "dtRangeEnd" : "2019-10-06"
      },
      { 
        "zone" : "3-4", 
        "zones" : ["3a", "3b", "4a", "4b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-07-10", 
        "dtRangeEnd" : "2019-08-21"
      },
      { 
        "zone" : "7-8", 
        "zones" : ["7a", "7b", "8a", "8b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-08",
        "dtRangeEnd" : "2019-10-06"
      },
      { 
        "zone" : "9-10", 
        "zones" : ["9a", "9b", "10a", "10b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-08", 
        "dtRangeEnd" : "2019-10-06"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "LEEKS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-05-05"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-08-25",
        "dtRangeEnd": "2019-09-22"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-08",
        "dtRangeEnd": "2019-10-06"
      },
      { 
        "zone" : "3-4", 
        "zones" : ["3a", "3b", "4a", "4b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-07-10", 
        "dtRangeEnd" : "2019-08-21"
      },
      { 
        "zone" : "9-10", 
        "zones" : ["9a", "9b", "10a", "10b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-08", 
        "dtRangeEnd" : "2019-10-06"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "LETTUCE",
    "sowCal": [
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-04-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-05-05"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "MELON SEEDS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-19",
        "dtRangeEnd": "2019-06-30"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "MESCLUN",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-05-05"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "MICROGREENS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      { 
          "zone" : "5-6", 
          "zones" : ["5a", "5b", "6a", "6b"], 
          "sowType": "Direct Sow",
          "dtRangeStart" : "2019-08-06", 
          "dtRangeEnd" : "2019-09-17"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "MUSTARD",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-28",
        "dtRangeEnd": "2019-06-09"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-11",
        "dtRangeEnd": "2019-05-23"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      { 
        "zone" : "11", 
        "zones" : ["11a", "11b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-22", 
        "dtRangeEnd" : "2019-10-20"
      },
      { 
        "zone" : "3-4", 
        "zones" : ["3a", "3b", "4a", "4b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-07-10", 
        "dtRangeEnd" : "2019-08-21"
      },
      { 
        "zone" : "5-6", 
        "zones" : ["5a", "5b", "6a", "6b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-08-06", 
        "dtRangeEnd" : "2019-09-17"
      },
      { 
        "zone" : "7-8", 
        "zones" : ["7a", "7b", "8a", "8b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-22",
        "dtRangeEnd" : "2019-10-20"
      },
      { 
        "zone" : "9-10", 
        "zones" : ["9a", "9b", "10a", "10b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-22", 
        "dtRangeEnd" : "2019-10-20"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "OKRA",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-16",
        "dtRangeEnd": "2019-07-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-30",
        "dtRangeEnd": "2019-07-11"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "ONIONS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-11-15",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-05-05"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-11-15",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-11-15",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-05-02"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-25",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-25",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-08-06",
        "dtRangeEnd": "2019-09-17"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "PARSNIPS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-18",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      { 
        "zone" : "11", 
        "zones" : ["11a", "11b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-08", 
        "dtRangeEnd" : "2019-10-06"
      },
      { 
        "zone" : "3-4", 
        "zones" : ["3a", "3b", "4a", "4b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-07-10", 
        "dtRangeEnd" : "2019-08-21"
      },
      { 
        "zone" : "7-8", 
        "zones" : ["7a", "7b", "8a", "8b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-08",
        "dtRangeEnd" : "2019-10-06"
      },
      { 
        "zone" : "9-10", 
        "zones" : ["9a", "9b", "10a", "10b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-08", 
        "dtRangeEnd" : "2019-10-06"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "PEAS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-01-18",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-01-18",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-01-18",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "PEPPERS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-10",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-30"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "POTATOES",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-25",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-01"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "PUMPKINS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-30"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-14",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-14",
        "dtRangeEnd": "2019-04-25"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "RADICCHIO",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-28",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-11",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      { 
        "zone" : "11", 
        "zones" : ["11a", "11b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-22", 
        "dtRangeEnd" : "2019-10-20"
      },
      { 
        "zone" : "3-4", 
        "zones" : ["3a", "3b", "4a", "4b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-07-10", 
        "dtRangeEnd" : "2019-08-21"
      },
      { 
        "zone" : "7-8", 
        "zones" : ["7a", "7b", "8a", "8b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-22",
        "dtRangeEnd" : "2019-10-22"
      },
      { 
        "zone" : "9-10", 
        "zones" : ["9a", "9b", "10a", "10b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-22", 
        "dtRangeEnd" : "2019-10-20"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "RADISH",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-14",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-14"
      },
      { 
          "zone" : "5-6", 
          "zones" : ["5a", "5b", "6a", "6b"], 
          "sowType": "Direct Sow",
          "dtRangeStart" : "2019-08-06", 
          "dtRangeEnd" : "2019-09-17"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "RHUBARB",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-02",
        "dtRangeEnd": "2019-05-16"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "RUTABAGA",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-28",
        "dtRangeEnd": "2019-05-05"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-28",
        "dtRangeEnd": "2019-05-02"
      },
      { 
        "zone" : "11", 
        "zones" : ["11a", "11b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-22", 
        "dtRangeEnd" : "2019-10-20"
      },
      { 
        "zone" : "7-8", 
        "zones" : ["7a", "7b", "8a", "8b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-22",
        "dtRangeEnd" : "2019-10-20"
      },
      { 
        "zone" : "9-10", 
        "zones" : ["9a", "9b", "10a", "10b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-22", 
        "dtRangeEnd" : "2019-10-20"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "SALAD GREENS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      { 
        "zone" : "5-6", 
        "zones" : ["5a", "5b", "6a", "6b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-08-20", 
        "dtRangeEnd" : "2019-09-17"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "SCALLIONS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-11-15",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-03-24"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-05-05"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-02-22",
        "dtRangeEnd": "2019-03-07"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-11-15",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-11-15",
        "dtRangeEnd": "2019-01-04"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-25",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-25",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "SHALLOTS",
    "sowCal": [
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-08",
        "dtRangeEnd": "2019-10-06"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-09-08",
        "dtRangeEnd": "2019-10-06"
      },
      { 
        "zone" : "11", 
        "zones" : ["11a", "11b"], 
        "sowType": "Transplant",
        "dtRangeStart" : "2019-09-08",
        "dtRangeEnd" : "2019-10-06"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "SOYBEAN",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-11"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-11"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-11"
      },
      { 
          "zone" : "11", 
          "zones" : ["11a", "11b"], 
          "sowType": "Direct Sow",
          "dtRangeStart" : "2019-09-08", 
          "dtRangeEnd" : "2019-10-06"
      },
      { 
        "zone" : "7-8", 
        "zones" : ["7a", "7b", "8a", "8b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-08",
        "dtRangeEnd" : "2019-10-06"
      },
      { 
        "zone" : "9-10", 
        "zones" : ["9a", "9b", "10a", "10b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-08", 
        "dtRangeEnd" : "2019-10-06"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "SPINACH",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-06-16"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-05-30"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "SQUASH",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-30"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-07-11"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "SWEET POTATOES",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-10",
        "dtRangeEnd": "2019-05-15"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-15",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-06-13"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-10",
        "dtRangeEnd": "2019-05-15"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-04-10",
        "dtRangeEnd": "2019-05-15"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "SWISS CHARD",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-12-21",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-05",
        "dtRangeEnd": "2019-07-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-18",
        "dtRangeEnd": "2019-07-11"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-03-28"
      },
      { 
        "zone" : "11", 
        "zones" : ["11a", "11b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-10-06", 
        "dtRangeEnd" : "2019-08-25"
      },
      { 
        "zone" : "3-4", 
        "zones" : ["3a", "3b", "4a", "4b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-07-10", 
        "dtRangeEnd" : "2019-08-21"
      },
      { 
        "zone" : "5-6", 
        "zones" : ["5a", "5b", "6a", "6b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-08-06", 
        "dtRangeEnd" : "2019-09-17"
      },
      { 
        "zone" : "7-8", 
        "zones" : ["7a", "7b", "8a", "8b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-10-06",
        "dtRangeEnd" : "2019-08-25"
      },
      { 
        "zone" : "9-10", 
        "zones" : ["9a", "9b", "10a", "10b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-10-06", 
        "dtRangeEnd" : "2019-08-25"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "TOMATILLOES",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-04",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-30"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "TOMATOES",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-01-18",
        "dtRangeEnd": "2019-02-22"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-24",
        "dtRangeEnd": "2019-04-07"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-06-30"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Indoor Sow",
        "dtRangeStart": "2019-03-07",
        "dtRangeEnd": "2019-03-21"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Transplant",
        "dtRangeStart": "2019-05-02",
        "dtRangeEnd": "2019-05-30"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "TURNIPS",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-21",
        "dtRangeEnd": "2019-06-02"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-04-04",
        "dtRangeEnd": "2019-05-16"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-01",
        "dtRangeEnd": "2019-03-01"
      },
      { 
        "zone" : "11", 
        "zones" : ["11a", "11b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-08", 
        "dtRangeEnd" : "2019-10-06"
      },
      { 
        "zone" : "3-4", 
        "zones" : ["3a", "3b", "4a", "4b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-07-10", 
        "dtRangeEnd" : "2019-08-21"
      },
      { 
        "zone" : "5-6", 
        "zones" : ["5a", "5b", "6a", "6b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-08-06", 
        "dtRangeEnd" : "2019-09-17"
      },
      { 
        "zone" : "7-8", 
        "zones" : ["7a", "7b", "8a", "8b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-08",
        "dtRangeEnd" : "2019-10-06"
      },
      { 
        "zone" : "9-10", 
        "zones" : ["9a", "9b", "10a", "10b"], 
        "sowType": "Direct Sow",
        "dtRangeStart" : "2019-09-08", 
        "dtRangeEnd" : "2019-10-06"
      }
    ]
  },
  {
    "plantCategories": ["Vegetables"],
    "commonName": "ZUCCHINI",
    "sowCal": [
      {
        "zone": "11",
        "zones": ["11a", "11b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-02-15",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "3-4",
        "zones": ["3a", "3b", "4a", "4b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-06-02",
        "dtRangeEnd": "2019-07-28"
      },
      {
        "zone": "5-6",
        "zones": ["5a", "5b", "6a", "6b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-05-16",
        "dtRangeEnd": "2019-07-11"
      },
      {
        "zone": "7-8",
        "zones": ["7a", "7b", "8a", "8b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      },
      {
        "zone": "9-10",
        "zones": ["9a", "9b", "10a", "10b"],
        "sowType": "Direct Sow",
        "dtRangeStart": "2019-03-01",
        "dtRangeEnd": "2019-04-25"
      }
    ]
  }
];

/**
 * Some sowCal objects have end dates occurring before start dates.
 * For these, change the 'year' for the start date to the previous year.
 */
const correctEntries = () => {
  var inversions = 0;
  for(let i = 0; i < plantingCalendarSeed.length; i++)
  {
    let sowCal = plantingCalendarSeed[i]["sowCal"];
    for(let j = 0; j < sowCal.length; j++)
    {
      let startDate = sowCal[j]["dtRangeStart"];
      let endDate = sowCal[j]["dtRangeEnd"];
      if(moment(endDate).isBefore(moment(startDate))){
        console.log(endDate + " " + startDate);
        inversions++;
        sowCal[j]["dtRangeStart"] = moment(startDate).subtract(1,"years").format("YYYY-MM-DD");
      }
    }
  }

  console.log(`Found and corrected ${inversions} objects with endDate before startDate!`);
}

correctEntries();

db.PlantingCalendar
  .deleteMany({})
  .then(() => db.PlantingCalendar.collection.insertMany(plantingCalendarSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });