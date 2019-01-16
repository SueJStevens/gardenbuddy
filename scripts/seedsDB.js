const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/plantbuddy", { useNewUrlParser: true }
);

const plantSeed = [
{ 
    "_id" : ObjectId("5c22ac3ec43a006d1cc1482c"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Artichokes"
    ], 
    "commonName" : "Artichoke", 
    "variety" : "Artichoke, Imperial Star Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/artichokes/artichoke-imperial-star-hybrid-prod000566.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "80-90 days", 
        "FruitSize" : "3-6 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "48 inches", 
        "Height" : "36-48 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "6-8 weeks BLF", 
        "Thin" : "4 feet", 
        "LifeCycle" : "Perennial"
    }, 
    "createdOn" : ISODate("2018-12-25T22:16:30.863+0000"), 
    "__v" : NumberInt(0)
},
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22b0862ca33484e4350608"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Artichokes"
    ], 
    "commonName" : "Artichoke", 
    "variety" : "Artichoke, Lulu Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/artichokes/artichoke-lulu-hybrid-prod003452.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "90-110 days", 
        "FruitSize" : "3-6 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "48 inches", 
        "Height" : "36 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "6-8 weeks BLF", 
        "Thin" : "4 feet", 
        "LifeCycle" : "Perennial"
    }, 
    "createdOn" : ISODate("2018-12-25T22:34:46.382+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22b2362ca33484e4350609"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Arugula"
    ], 
    "commonName" : "Arugula", 
    "variety" : "Arugula, Rocket (Roquette)", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/arugula/arugula-rocket-roquette-prod000886.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "35 days", 
        "LeafTexture" : "Frilly", 
        "Sun" : "Full Sun", 
        "Spread" : "4 inches", 
        "Height" : "12-14 inches", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "6 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-25T22:41:58.646+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22b43e2ca33484e435060a"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Asian Greens", 
        "Mustard"
    ], 
    "commonName" : "Mustard", 
    "variety" : "Mustard, Mizuna", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/mustard/mustard-mizuna-prod002048.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "30-45 days", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "14-16 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "12 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-25T22:50:38.220+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22b5e52ca33484e435060b"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Asian Greens", 
        "Cabbages"
    ], 
    "commonName" : "Bok Choy", 
    "variety" : "Chinese Cabbage, Pak Choi, Toy Choi Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/cabbages/chinese-cabbage-pak-choi-toy-choi-hybrid-prod000626.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "30 days", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "18-20 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "4-6 weeks BLF", 
        "Thin" : "16 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-25T22:57:41.777+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22e95e3dfb8394f0383988"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Asian Greens", 
        "Spinach"
    ], 
    "commonName" : "Spinach", 
    "variety" : "Malabar Spinach, Red Stem", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/spinach/malabar-spinach-red-stem-prod500145.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "60-80 days", 
        "Sun" : "Full Sun", 
        "Spread" : "6 feet", 
        "Height" : "7 feet", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring, Summer", 
        "SowTime" : "After Last Frost", 
        "Thin" : "2 feet", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T02:37:18.205+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22ea9e4bd2fc92e81ff394"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Asian Greens"
    ], 
    "commonName" : "Shiso", 
    "variety" : "Perilla, Jeok Ssam", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/asian-greens/perilla-jeok-ssam-prod500514.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "50-70 days", 
        "Sun" : "Full Sun", 
        "Spread" : "30-36 inches", 
        "Height" : "5-6 feet", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Spring, Summer", 
        "SowTime" : "After Last Frost", 
        "Thin" : "12 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T02:42:38.071+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c230b179f2d347874464fe9"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Garlic"
    ], 
    "commonName" : "Garlic", 
    "variety" : "Garlic, Nootka Rose", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/garlic/garlic-nootka-rose-prod001486.html", 
    "plantAttributes" : {
        "Type" : "Softneck", 
        "DaysToMaturity" : "90-240 days", 
        "Sun" : "Full Sun", 
        "Spread" : "4 inches", 
        "Height" : "18 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Fall, Spring"
    }, 
    "createdOn" : ISODate("2018-12-26T05:01:11.046+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22eb2d4bd2fc92e81ff395"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Asparagus"
    ], 
    "commonName" : "Asparagus", 
    "variety" : "Asparagus, Jersey Knight", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/asparagus/asparagus-jersey-knight-prod001588.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "730 days", 
        "FruitSize" : "8 inches", 
        "Sun" : "Full Sun, Part Sun", 
        "Spread" : "15-18 inches", 
        "Height" : "48-60 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "18 inches"
    }, 
    "createdOn" : ISODate("2018-12-26T02:45:01.260+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22ec794bd2fc92e81ff396"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Beans"
    ], 
    "commonName" : "Bush Bean", 
    "variety" : "Bean, Blue Lake 47 Bush", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/beans/bean-blue-lake-47-bush-prod000577.html", 
    "plantAttributes" : {
        "Type" : "Bush Snap", 
        "DaysToMaturity" : "58 days", 
        "FruitSize" : "6 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "10 inches", 
        "Height" : "15-20 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring, Summer", 
        "SowTime" : "After Last Frost", 
        "Thin" : "6 inches"
    }, 
    "createdOn" : ISODate("2018-12-26T02:50:33.900+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22ed2e4bd2fc92e81ff397"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Beans"
    ], 
    "commonName" : "French Bean", 
    "variety" : "Bean, Pole, Fortex", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/beans/bean-pole-fortex-prod000583.html", 
    "plantAttributes" : {
        "Type" : "Pole Filet", 
        "DaysToMaturity" : "75 days", 
        "FruitSize" : "6 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "18 inches", 
        "Height" : "96-120 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring, Summer", 
        "SowTime" : "After Last Frost", 
        "Thin" : "6 inches"
    }, 
    "createdOn" : ISODate("2018-12-26T02:53:34.574+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22ed764bd2fc92e81ff398"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Beans"
    ], 
    "commonName" : "Lima Bean", 
    "variety" : "Bean, Bush, Lima Fordhook 242", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/beans/bean-bush-lima-fordhook-242-prod000591.html", 
    "plantAttributes" : {
        "Type" : "Bush Lima", 
        "DaysToMaturity" : "65 days", 
        "FruitSize" : "4 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "10 inches", 
        "Height" : "15-20 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring, Summer", 
        "SowTime" : "After Last Frost", 
        "Thin" : "6 inches"
    }, 
    "createdOn" : ISODate("2018-12-26T02:54:46.381+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22edc14bd2fc92e81ff399"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Beans"
    ], 
    "commonName" : "Kidney Bean", 
    "variety" : "Bean, Cannelino Organic", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/beans/bean-cannelino-organic-60549A.html", 
    "plantAttributes" : {
        "Type" : "Bush Drying", 
        "DaysToMaturity" : "80-85 days", 
        "FruitSize" : "6-7 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "24-36 inches", 
        "Height" : "24-36 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring, Summer", 
        "SowTime" : "After Last Frost", 
        "Thin" : "36 inches"
    }, 
    "createdOn" : ISODate("2018-12-26T02:56:01.596+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22ef024bd2fc92e81ff39a"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Beans", 
        "Soybean"
    ], 
    "commonName" : "Soybean", 
    "variety" : "Bean, Soy, Midori Giant", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/beans/bean-soy-midori-giant-prod003170.html", 
    "plantAttributes" : {
        "Type" : "Bush Soy", 
        "DaysToMaturity" : "68-80 days", 
        "FruitSize" : "2-3 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "18 inches", 
        "Height" : "20-24 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring, Summer", 
        "SowTime" : "After Last Frost", 
        "Thin" : "18 inches"
    }, 
    "createdOn" : ISODate("2018-12-26T03:01:22.786+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22f03e4bd2fc92e81ff39b"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Beets"
    ], 
    "commonName" : "Beet", 
    "variety" : "Beet, Detroit Dark Red Medium Top", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/beets/beet-detroit-dark-red-medium-top-prod000611.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "59 days", 
        "FruitSize" : "3 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "8-10 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring, Summer", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "4 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T03:06:38.750+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22f31c0734478834513897"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Brassica", 
        "Brussels Sprouts"
    ], 
    "commonName" : "Brussels Sprouts", 
    "variety" : "Brussels Sprouts, Octia Hybrid Top", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/brussels-sprouts/brussels-sprouts-octia-hybrid-prod003199.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "78 days", 
        "FruitSize" : "1 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "36 inches", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "6-8 weeks BLF", 
        "Thin" : "12 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T03:18:52.556+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22f40f9f2d347874464fd4"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Brassica", 
        "Cauliflower"
    ], 
    "commonName" : "Cauliflower", 
    "variety" : "Cauliflower, Snowball Self-Blanching", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/cauliflower/cauliflower-snowball-self-blanching-prod002020.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "65-75 days", 
        "FruitSize" : "6-8 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "24-30 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "6-8 weeks BLF", 
        "Thin" : "12 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T03:22:55.101+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22f5049f2d347874464fd5"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Brassica", 
        "Kale"
    ], 
    "commonName" : "Kale", 
    "variety" : "Kale, Lacinato", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/kale/kale-lacinato--prod001950.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "65-80 days", 
        "Sun" : "Full Sun", 
        "Spread" : "24-36 inches", 
        "Height" : "24-36 inches", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "12 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T03:27:00.762+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22f54b9f2d347874464fd6"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Brassica", 
        "Cabbage"
    ], 
    "commonName" : "Cabbage", 
    "variety" : "Cabbage, Early Jersey Wakefield", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/cabbages/cabbage-early-jersey-wakefield-prod002049.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "90-110 days", 
        "FruitSize" : "5-7 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12-18 inches", 
        "Height" : "9-15 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "6-8 weeks BLF", 
        "Thin" : "18 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T03:28:11.887+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22f61f9f2d347874464fd7"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Brassica", 
        "Broccoli"
    ], 
    "commonName" : "Broccoli", 
    "variety" : "Broccoli, Gypsy Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/broccoli/broccoli-gypsy-hybrid-prod500139.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "60-65 days", 
        "Sun" : "Full Sun", 
        "Spread" : "40-45 inches", 
        "Height" : "30-36 inches", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Fall, Spring, Summer", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "26 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T03:31:43.178+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22fc809f2d347874464fd8"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Broccoli Raab"
    ], 
    "commonName" : "Rapini", 
    "variety" : "Broccoli Raab, Spring", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/broccoli-raab/broccoli-raab-spring-prod000614.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "50-60 days", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "24-36 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "6-8 weeks BLF", 
        "Thin" : "12 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T03:58:56.600+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22fd019f2d347874464fd9"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Brokali"
    ], 
    "commonName" : "Brokali", 
    "variety" : " Brokali, Apollo Hybrid Brokali, Apollo Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/brokali/brokali-apollo-hybrid-57005A.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "50-60 days", 
        "Sun" : "Full Sun", 
        "Spread" : "24-28 inches", 
        "Height" : "24-28 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Spring, Summer", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T04:01:05.170+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22fe039f2d347874464fda"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Brussels Sprouts"
    ], 
    "commonName" : "Brussels Sprouts", 
    "variety" : "Brussels Sprouts, Long Island Improved", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/brussels-sprouts/brussels-sprouts-long-island-improved-prod001111.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "90 days", 
        "FruitSize" : "1 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "24 inches", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "6-8 weeks BLF", 
        "Thin" : "12 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T04:05:23.245+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c22ff219f2d347874464fdb"), 
    "plantCategories" : [
        "vegetables", 
        "fruits"
    ], 
    "plantClass" : [
        "Cantaloupe", 
        "Melon"
    ], 
    "commonName" : "Cantaloupe", 
    "variety" : "Cantaloupe, Burpee's Ambrosia Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/melon/cantaloupe-burpees-ambrosia-hybrid-prod000541.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "86 days", 
        "FruitWeight" : "5 pounds", 
        "Sun" : "Full Sun", 
        "Spread" : "36-72 inches", 
        "Height" : "15-18 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Summer", 
        "SowTime" : "After Last Frost", 
        "Thin" : "36 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T04:10:09.988+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c2301b19f2d347874464fdc"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Carrots"
    ], 
    "commonName" : "Carrot", 
    "variety" : "Carrot, Nantes Half Long", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/carrots/carrot-nantes-half-long-prod000635.html", 
    "plantAttributes" : {
        "Type" : "Nantes", 
        "DaysToMaturity" : "70 days", 
        "FruitSize" : "7 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "3 inches", 
        "Height" : "4-8 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "3 inches"
    }, 
    "createdOn" : ISODate("2018-12-26T04:21:05.309+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c2304d59f2d347874464fdd"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Celery"
    ], 
    "commonName" : "Celery", 
    "variety" : "Celery, Tall Utah 52-70R Improved", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/celery/celery-tall-utah-52-70r-improved-prod000649.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "90-100 days", 
        "FruitSize" : "11 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "18-24 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "8-12 weeks BLF", 
        "Thin" : "8 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T04:34:29.159+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c2305419f2d347874464fde"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Collards"
    ], 
    "commonName" : "Collards", 
    "variety" : "Collards, Georgia", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/collards/collards-georgia-prod000650.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "65 days", 
        "LeafTexture" : "Smooth", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "24-36 inches", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Fall, Spring, Summer", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "18 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T04:36:17.291+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c2306a09f2d347874464fdf"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Corn"
    ], 
    "commonName" : "Corn", 
    "variety" : "Corn, Illini Xtra Sweet Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/corn/corn-illini-xtra-sweet-hybrid-prod000668.html", 
    "plantAttributes" : {
        "Type" : "SH2", 
        "DaysToMaturity" : "85 days", 
        "FruitSize" : "8 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "6 feet", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "After Last Frost", 
        "Thin" : "12 inches"
    }, 
    "createdOn" : ISODate("2018-12-26T04:42:08.219+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c2306d39f2d347874464fe0"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Corn"
    ], 
    "commonName" : "Corn", 
    "variety" : "Corn, Ambrosia Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/corn/corn-ambrosia-hybrid-prod001817.html", 
    "plantAttributes" : {
        "Type" : "SE", 
        "DaysToMaturity" : "75 days", 
        "FruitSize" : "8 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "6-7 feet", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "After Last Frost", 
        "Thin" : "9 inches"
    }, 
    "createdOn" : ISODate("2018-12-26T04:42:59.241+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c23070e9f2d347874464fe1"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Corn"
    ], 
    "commonName" : "Corn", 
    "variety" : "Corn, Golden Bantam", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/corn/corn-golden-bantam--prod000666.html", 
    "plantAttributes" : {
        "Type" : "OP", 
        "DaysToMaturity" : "80 days", 
        "FruitSize" : "5-6 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "5 feet", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "After Last Frost", 
        "Thin" : "12 inches"
    }, 
    "createdOn" : ISODate("2018-12-26T04:43:58.159+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c23075d9f2d347874464fe2"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Corn"
    ], 
    "commonName" : "Corn", 
    "variety" : "Corn, Silver Queen Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/corn/corn-silver-queen-hybrid-prod000675.html", 
    "plantAttributes" : {
        "Type" : "SU", 
        "DaysToMaturity" : "92 days", 
        "FruitSize" : "8-9 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "84-96 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "After Last Frost", 
        "Thin" : "12 inches"
    }, 
    "createdOn" : ISODate("2018-12-26T04:45:17.825+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c2307959f2d347874464fe3"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Corn"
    ], 
    "commonName" : "Corn", 
    "variety" : "Corn, Maple Sugar Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/corn/corn-maple-sugar-hybrid-64085A.html", 
    "plantAttributes" : {
        "Type" : "Mini", 
        "DaysToMaturity" : "78 days", 
        "FruitSize" : "5 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "72-84 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "After Last Frost", 
        "Thin" : "12 inches"
    }, 
    "createdOn" : ISODate("2018-12-26T04:46:13.368+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c23082d9f2d347874464fe4"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Corn Salad"
    ], 
    "commonName" : "Corn Salad", 
    "variety" : "Corn Salad, Vit Organic", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/corn-salad/corn-salad-vit-organic-prod000657.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "50 days", 
        "Sun" : "Full Sun", 
        "Spread" : "2 inches", 
        "Height" : "4-6 inches", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Spring", 
        "Thin" : "2 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T04:48:45.944+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c2308de9f2d347874464fe5"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Cowpeas"
    ], 
    "commonName" : "Black-eyed Pea", 
    "variety" : "Cowpea, California Blackeye No.5", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/cowpeas/cowpea-california-blackeye-no.5-prod000681.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "80 days", 
        "FruitSize" : "6-8 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "10 inches", 
        "Height" : "16-18 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring, Summer", 
        "SowTime" : "After Last Frost", 
        "Thin" : "6 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T04:51:42.158+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c2309a19f2d347874464fe6"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Cucumbers"
    ], 
    "commonName" : "Cucumber", 
    "variety" : "Cucumber, Bragger Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/cucumbers/cucumber-bragger-hybrid-prod500118.html", 
    "plantAttributes" : {
        "Type" : "Slicing", 
        "DaysToMaturity" : "45 days", 
        "FruitSize" : "6 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "6 feet", 
        "Height" : "20 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring, Summer", 
        "SowTime" : "After Last Frost", 
        "Thin" : "2 feet"
    }, 
    "createdOn" : ISODate("2018-12-26T04:54:57.952+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c230a2d9f2d347874464fe7"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Eggplants"
    ], 
    "commonName" : "Eggplant", 
    "variety" : "Eggplant, Meatball Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/eggplants/eggplant-meatball-hybrid-prod099571.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "55-60 days", 
        "FruitSize" : "4-6 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "25-32 inches", 
        "Height" : "24-32 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "8-12 weeks BLF", 
        "Thin" : "24 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T04:57:17.626+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5c230a709f2d347874464fe8"), 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Endive"
    ], 
    "commonName" : "Endive", 
    "variety" : "Curly Endive, Galia Frisse", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/endive/curly-endive-galia-frisse-67030A.html", 
    "plantAttributes" : {
        "DaysToMaturity" : "40-70 days", 
        "Sun" : "Full Sun", 
        "Spread" : "6 inches", 
        "Height" : "8-10 inches", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "6 inches", 
        "LifeCycle" : "Annual"
    }, 
    "createdOn" : ISODate("2018-12-26T04:58:24.302+0000"), 
    "__v" : NumberInt(0)
}
// ----------------------------------------------
];

db.Plant
  .remove({})
  .then(() => db.Plant.collection.insertMany(plantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });