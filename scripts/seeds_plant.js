const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Plants collection and inserts the plants below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/plantbuddy", { useNewUrlParser: true }
);

const plantSeed = [
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Artichokes"
    ],
    "commonName": "Artichoke",
    "variety": "Artichoke, Imperial Star Hybrid",
    "plantAttrURL": "https://www.burpee.com/vegetables/artichokes/artichoke-imperial-star-hybrid-prod000566.html",
    "plantAttributes": {
      "DaysToMaturity": "80-90 days",
      "FruitSize": "3-6 inches",
      "Sun": "Full Sun",
      "Spread": "48 inches",
      "Height": "36-48 inches",
      "SowMethod": "Indoor Sow",
      "PlantingTime": "Spring",
      "SowTime": "6-8 weeks BLF",
      "Thin": "4 feet",
      "LifeCycle": "Perennial in zones 7-11, Annual in zones 4-6"
    },
    "zone": "4-11",
    "zones": ["4a","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Artichoke_J1.jpg/440px-Artichoke_J1.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Artichokes"
    ],
    "commonName": "Artichoke",
    "variety": "Artichoke, Lulu Hybrid",
    "plantAttrURL": "https://www.burpee.com/vegetables/artichokes/artichoke-lulu-hybrid-prod003452.html",
    "plantAttributes": {
      "DaysToMaturity": "90-110 days",
      "FruitSize": "3-6 inches",
      "Sun": "Full Sun",
      "Spread": "48 inches",
      "Height": "36 inches",
      "SowMethod": "Indoor Sow",
      "PlantingTime": "Spring",
      "SowTime": "6-8 weeks BLF",
      "Thin": "4 feet",
      "LifeCycle": "Perennial in zones 7-11, Annual in zones 4-6"
    },
    "zone": "4-11",
    "zones": ["4a","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/3/35/Wien-Hietzing_-_Artischocken.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Arugula"
    ],
    "commonName": "Arugula",
    "variety": "Arugula, Rocket (Roquette)",
    "plantAttrURL": "https://www.burpee.com/vegetables/arugula/arugula-rocket-roquette-prod000886.html",
    "plantAttributes": {
      "DaysToMaturity": "35 days",
      "LeafTexture": "Frilly",
      "Sun": "Full Sun",
      "Spread": "4 inches",
      "Height": "12-14 inches",
      "SowMethod": "Direct Sow/Indoor Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "6 inches",
      "LifeCycle": "Annual"
    },
    "zone": "2-10",
    "zones": ["2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "photoURL": "https://commons.wikimedia.org/wiki/File:Eruca_sativa_1_IP0206101.jpg#/media/File:Eruca_sativa_1_IP0206101.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Asian Greens",
      "Mustard"
    ],
    "commonName": "Mustard",
    "variety": "Mustard, Mizuna",
    "plantAttrURL": "https://www.burpee.com/vegetables/mustard/mustard-mizuna-prod002048.html",
    "plantAttributes": {
      "DaysToMaturity": "30-45 days",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "14-16 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "12 inches",
      "LifeCycle": "Annual"
    },
    "zone": "2-10",
    "zones": ["2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "photoURL": "https://commons.wikimedia.org/wiki/File:Flower_of_Mustard_Plant.jpg#/media/File:Flower_of_Mustard_Plant.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Asian Greens",
      "Spinach"
    ],
    "commonName": "Spinach",
    "variety": "Malabar Spinach, Red Stem",
    "plantAttrURL": "https://www.burpee.com/vegetables/spinach/malabar-spinach-red-stem-prod500145.html",
    "plantAttributes": {
      "DaysToMaturity": "60-80 days",
      "Sun": "Full Sun",
      "Spread": "6 feet",
      "Height": "7 feet",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring, Summer",
      "SowTime": "After Last Frost",
      "Thin": "2 feet",
      "LifeCycle": "Annual"
    },
    "zone": "2-10",
    "zones": ["2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "compatable": ["Asparagus","Brussels","Cabbage","Celery","Dill","Eggplant","Lettuce","Onions","Peas","Peppers","Radishes","Strawberries","Tomatoes"],
    "combative":  [""],  
    "photoURL": "https://commons.wikimedia.org/wiki/File:Spinacia_oleracea_Spinazie_bloeiend.jpg#/media/File:Spinacia_oleracea_Spinazie_bloeiend.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Garlic"
    ],
    "commonName": "Garlic",
    "variety": "Garlic, Nootka Rose",
    "plantAttrURL": "https://www.burpee.com/vegetables/garlic/garlic-nootka-rose-prod001486.html",
    "plantAttributes": {
      "Type": "Softneck",
      "DaysToMaturity": "90-240 days",
      "Sun": "Full Sun",
      "Spread": "4 inches",
      "Height": "18 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Fall, Spring"
    },
    "zone": "3-8",
    "zones": ["3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b"],
    "photoURL": "https://commons.wikimedia.org/wiki/File:Italian_garlic_PDO.JPG#/media/File:Italian_garlic_PDO.JPG"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Asparagus"
    ],
    "commonName": "Asparagus",
    "variety": "Asparagus, Jersey Knight",
    "plantAttrURL": "https://www.burpee.com/vegetables/asparagus/asparagus-jersey-knight-prod001588.html",
    "plantAttributes": {
      "DaysToMaturity": "730 days",
      "FruitSize": "8 inches",
      "Sun": "Full Sun, Part Sun",
      "Spread": "15-18 inches",
      "Height": "48-60 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "18 inches"
    },
    "zone": "2-10a",
    "zones": ["2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a"],
    "compatable": ["Basil","Beets","Lettuce","Parsley","Spinach","Tomatoes"],
    "combative":  [""],
    "photoURL": "https://commons.wikimedia.org/wiki/File:Asparagus_Tip.jpg#/media/File:Asparagus_Tip.jpg"  
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Beans"
    ],
    "commonName": "Bush Bean",
    "variety": "Bean, Blue Lake 47 Bush",
    "plantAttrURL": "https://www.burpee.com/vegetables/beans/bean-blue-lake-47-bush-prod000577.html",
    "plantAttributes": {
      "Type": "Bush Snap",
      "DaysToMaturity": "58 days",
      "FruitSize": "6 inches",
      "Sun": "Full Sun",
      "Spread": "10 inches",
      "Height": "15-20 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring, Summer",
      "SowTime": "After Last Frost",
      "Thin": "6 inches"
    },
    "zone": "2-13",
    "zones": ["2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b","11a","11b","12a","12b","13a","13b"],
    "compatable": ["Broccoli","Cabbage","Carrots","Cauliflower","Celery","Corn","Cucumbers","Eggplant","Peas","Potatoes","Radishes","Squash","Strawberries","Tomatoes"],
    "combative":  ["Garlic","Onions","Peppers","Sunflowers"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/9e/A_green_bean.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Beans"
    ],
    "commonName": "French Bean",
    "variety": "Bean, Pole, Fortex",
    "plantAttrURL": "https://www.burpee.com/vegetables/beans/bean-pole-fortex-prod000583.html",
    "plantAttributes": {
      "Type": "Pole Filet",
      "DaysToMaturity": "75 days",
      "FruitSize": "6 inches",
      "Sun": "Full Sun",
      "Spread": "18 inches",
      "Height": "96-120 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring, Summer",
      "SowTime": "After Last Frost",
      "Thin": "6 inches"
    },
    "zone": "2-13",
    "zones": ["2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b","11a","11b","12a","12b","13a","13b"],
    "compatable": ["Broccoli","Cabbage","Carrots","Cauliflower","Celery","Corn","Cucumbers","Eggplant","Peas","Potatoes","Radishes","Squash","Strawberries","Tomatoes"],
    "combative":  ["Garlic","Onions","Peppers","Sunflowers"], 
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Heaps_of_beans.jpg" 
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Beets"
    ],
    "commonName": "Beet",
    "variety": "Beet, Detroit Dark Red Medium Top",
    "plantAttrURL": "https://www.burpee.com/vegetables/beets/beet-detroit-dark-red-medium-top-prod000611.html",
    "plantAttributes": {
      "DaysToMaturity": "59 days",
      "FruitSize": "3 inches",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "8-10 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring, Summer",
      "SowTime": "2-4 weeks BLF",
      "Thin": "4 inches",
      "LifeCycle": "Annual"
    },
    "zone": "2-10",
    "zones": ["2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "compatable": ["Asparagus","Broccoli","Cauliflower","Lettuce","Onions"],
    "combative":  ["Mustard","Pole Beans"],  
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/21/Beets-Bundle.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Brassica",
      "Brussels Sprouts"
    ],
    "commonName": "Brussels Sprouts",
    "variety": "Brussels Sprouts, Octia Hybrid Top",
    "plantAttrURL": "https://www.burpee.com/vegetables/brussels-sprouts/brussels-sprouts-octia-hybrid-prod003199.html",
    "plantAttributes": {
      "DaysToMaturity": "78 days",
      "FruitSize": "1 inches",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "36 inches",
      "SowMethod": "Direct Sow/Indoor Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "6-8 weeks BLF",
      "Thin": "12 inches",
      "LifeCycle": "Annual"
    },
    "zone": "2-10",
    "zones": ["2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "compatable": ["Dill","Lettuce","Radishes","Sage","Spinach","Turnips"],
    "combative":  ["Tomatoes"],  
    "photoURL": "https://commons.wikimedia.org/wiki/File:BrusselsSproutColes.jpg#/media/File:BrusselsSproutColes.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Brassica",
      "Cauliflower"
    ],
    "commonName": "Cauliflower",
    "variety": "Cauliflower, Snowball Self-Blanching",
    "plantAttrURL": "https://www.burpee.com/vegetables/cauliflower/cauliflower-snowball-self-blanching-prod002020.html",
    "plantAttributes": {
      "DaysToMaturity": "65-75 days",
      "FruitSize": "6-8 inches",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "24-30 inches",
      "SowMethod": "Indoor Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "6-8 weeks BLF",
      "Thin": "12 inches",
      "LifeCycle": "Annual"
    },
    "zone": "2-10",
    "zones": ["2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "compatable": ["Beans","Beets","Celery","Cucumbers","Sage","Thyme"],
    "combative":  ["Broccoli","Cabbage","Strawberries","Tomatoes"],  
    "photoURL": "https://commons.wikimedia.org/wiki/File:Cauliflower_plants_growing_in_New_Jersey_in_April.jpg#/media/File:Cauliflower_plants_growing_in_New_Jersey_in_April.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Brassica",
      "Kale"
    ],
    "commonName": "Kale",
    "variety": "Kale, Lacinato",
    "plantAttrURL": "https://www.burpee.com/vegetables/kale/kale-lacinato--prod001950.html",
    "plantAttributes": {
      "DaysToMaturity": "65-80 days",
      "Sun": "Full Sun",
      "Spread": "24-36 inches",
      "Height": "24-36 inches",
      "SowMethod": "Direct Sow/Indoor Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "12 inches",
      "LifeCycle": "Annual"
    },
    "zone": "2-10",
    "zones": ["2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "compatable": ["Cabbage","Dill","Potatoes","Rosemary","Sage"],
    "combative":  ["Strawberries","Tomatoes"], 
    "photoURL" : "https://commons.wikimedia.org/wiki/File:Boerenkool.jpg#/media/File:Boerenkool.jpg",
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Brassica",
      "Cabbage"
    ],
    "commonName": "Cabbage",
    "variety": "Cabbage, Early Jersey Wakefield",
    "plantAttrURL": "https://www.burpee.com/vegetables/cabbages/cabbage-early-jersey-wakefield-prod002049.html",
    "plantAttributes": {
      "DaysToMaturity": "90-110 days",
      "FruitSize": "5-7 inches",
      "Sun": "Full Sun",
      "Spread": "12-18 inches",
      "Height": "9-15 inches",
      "SowMethod": "Indoor Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "6-8 weeks BLF",
      "Thin": "18 inches",
      "LifeCycle": "Annual"
    },
    "zone": "2-10",
    "zones": ["2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "compatable": ["Beans","Celery","Cucumbers","Dill","Kale","Lettuce","Onions","Potatoes","Sage","Spinach","Thyme"],
    "combative":  ["Broccoli","Cauliflower","Strawberries","Tomatoes"],  
    "photoURL": "https://commons.wikimedia.org/wiki/File:Chou_1.jpg#/media/File:Chou_1.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Brassica",
      "Broccoli"
    ],
    "commonName": "Broccoli",
    "variety": "Broccoli, Gypsy Hybrid",
    "plantAttrURL": "https://www.burpee.com/vegetables/broccoli/broccoli-gypsy-hybrid-prod500139.html",
    "plantAttributes": {
      "DaysToMaturity": "60-65 days",
      "Sun": "Full Sun",
      "Spread": "40-45 inches",
      "Height": "30-36 inches",
      "SowMethod": "Direct Sow/Indoor Sow",
      "PlantingTime": "Fall, Spring, Summer",
      "SowTime": "2-4 weeks BLF",
      "Thin": "26 inches",
      "LifeCycle": "Annual"
    },
    "zone": "3-9",
    "zones": ["3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b"],
    "compatable": ["Beans","Beets","Celery","Cucumbers","Onions","Potatoes","Sage"],
    "combative":  ["Cabbage","Cauliflower","Lettuce","Pole Beans","Tomatoes"],  
    "photoURL": "https://commons.wikimedia.org/wiki/File:Broccoli_flowers_2525385935_e13d4de4c4_b.jpg#/media/File:Broccoli_flowers_2525385935_e13d4de4c4_b.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Brussels Sprouts"
    ],
    "commonName": "Brussels Sprouts",
    "variety": "Brussels Sprouts, Long Island Improved",
    "plantAttrURL": "https://www.burpee.com/vegetables/brussels-sprouts/brussels-sprouts-long-island-improved-prod001111.html",
    "plantAttributes": {
      "DaysToMaturity": "90 days",
      "FruitSize": "1 inches",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "24 inches",
      "SowMethod": "Direct Sow/Indoor Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "6-8 weeks BLF",
      "Thin": "12 inches",
      "LifeCycle": "Annual"
    },
    "zone": "2-10",
    "zones": ["2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "compatable": ["Dill","Lettuce","Radishes","Sage","Spinach","Turnips"],
    "combative":  ["Tomatoes"],  
    "photoURL": "https://commons.wikimedia.org/wiki/File:Brussels_Sprouts_ready_for_harvest.jpg#/media/File:Brussels_Sprouts_ready_for_harvest.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables",
      "fruits"
    ],
    "plantClass": [
      "Cantaloupe",
      "Melon"
    ],
    "commonName": "Cantaloupe",
    "variety": "Cantaloupe, Burpee's Ambrosia Hybrid",
    "plantAttrURL": "https://www.burpee.com/vegetables/melon/cantaloupe-burpees-ambrosia-hybrid-prod000541.html",
    "plantAttributes": {
      "DaysToMaturity": "86 days",
      "FruitWeight": "5 pounds",
      "Sun": "Full Sun",
      "Spread": "36-72 inches",
      "Height": "15-18 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Summer",
      "SowTime": "After Last Frost",
      "Thin": "36 inches",
      "LifeCycle": "Annual"
    },
    "zone": "4-13",
    "zones": ["4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b","11a","11b","12a","12b","13a","13b"],
    "photoURL": "https://commons.wikimedia.org/wiki/File:Cantaloupes.jpg#/media/File:Cantaloupes.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Carrots"
    ],
    "commonName": "Carrot",
    "variety": "Carrot, Nantes Half Long",
    "plantAttrURL": "https://www.burpee.com/vegetables/carrots/carrot-nantes-half-long-prod000635.html",
    "plantAttributes": {
      "Type": "Nantes",
      "DaysToMaturity": "70 days",
      "FruitSize": "7 inches",
      "Sun": "Full Sun",
      "Spread": "3 inches",
      "Height": "4-8 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "3 inches"
    },
    "zone": "2-10",
    "zones": ["2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "compatable": ["Beans","Lettuce","Onions","Peas","Radishes","Rosemary","Sage","Tomatoes"],
    "combative":  ["Dill","Parsley"], 
    "photoURL": "https://commons.wikimedia.org/wiki/File:Carrots_of_many_colors.jpg#/media/File:Carrots_of_many_colors.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Celery"
    ],
    "commonName": "Celery",
    "variety": "Celery, Tall Utah 52-70R Improved",
    "plantAttrURL": "https://www.burpee.com/vegetables/celery/celery-tall-utah-52-70r-improved-prod000649.html",
    "plantAttributes": {
      "DaysToMaturity": "90-100 days",
      "FruitSize": "11 inches",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "18-24 inches",
      "SowMethod": "Indoor Sow",
      "PlantingTime": "Spring",
      "SowTime": "8-12 weeks BLF",
      "Thin": "8 inches",
      "LifeCycle": "Annual"
    },
    "zone": "2-10",
    "zones": ["2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "compatable": ["Beans","Broccoli","Cabbage","Cauliflower","Leeks","Spinach","Tomatoes"],
    "combative":  [""],  
    "photoURL": "https://commons.wikimedia.org/wiki/File:Celery_(2905891576).jpg#/media/File:Celery_(2905891576).jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Collards"
    ],
    "commonName": "Collards",
    "variety": "Collards, Georgia",
    "plantAttrURL": "https://www.burpee.com/vegetables/collards/collards-georgia-prod000650.html",
    "plantAttributes": {
      "DaysToMaturity": "65 days",
      "LeafTexture": "Smooth",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "24-36 inches",
      "SowMethod": "Direct Sow/Indoor Sow",
      "PlantingTime": "Fall, Spring, Summer",
      "SowTime": "2-4 weeks BLF",
      "Thin": "18 inches",
      "LifeCycle": "Annual"
    },
    "zone": "2-10",
    "zones": ["2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "photoURL": "https://en.wikipedia.org/wiki/File:Collards_in_container.jpg#/media/File:Collards_in_container.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Corn"
    ],
    "commonName": "Corn",
    "variety": "Corn, Illini Xtra Sweet Hybrid",
    "plantAttrURL": "https://www.burpee.com/vegetables/corn/corn-illini-xtra-sweet-hybrid-prod000668.html",
    "plantAttributes": {
      "Type": "SH2",
      "DaysToMaturity": "85 days",
      "FruitSize": "8 inches",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "6 feet",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring",
      "SowTime": "After Last Frost",
      "Thin": "12 inches"
    },
    "zone": "3-10",
    "zones": ["3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "compatable": ["Beans","Cucumbers","Lettuce","Melons","Peas","Potatoes","Squash","Sunflowers"],
    "combative":  ["Tomatoes"],  
    "photoURL": "https://commons.wikimedia.org/wiki/File:GreenCorn.JPG#/media/File:GreenCorn.JPG"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Corn"
    ],
    "commonName": "Corn",
    "variety": "Corn, Ambrosia Hybrid",
    "plantAttrURL": "https://www.burpee.com/vegetables/corn/corn-ambrosia-hybrid-prod001817.html",
    "plantAttributes": {
      "Type": "SE",
      "DaysToMaturity": "75 days",
      "FruitSize": "8 inches",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "6-7 feet",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring",
      "SowTime": "After Last Frost",
      "Thin": "9 inches"
    },
    "zone": "3-10",
    "zones": ["3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "compatable": ["Beans","Cucumbers","Lettuce","Melons","Peas","Potatoes","Squash","Sunflowers"],
    "combative":  ["Tomatoes"],  
    "photoURL": "https://commons.wikimedia.org/wiki/File:Corn_blooming.jpg#/media/File:Corn_blooming.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Corn"
    ],
    "commonName": "Corn",
    "variety": "Corn, Golden Bantam",
    "plantAttrURL": "https://www.burpee.com/vegetables/corn/corn-golden-bantam--prod000666.html",
    "plantAttributes": {
      "Type": "OP",
      "DaysToMaturity": "80 days",
      "FruitSize": "5-6 inches",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "5 feet",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring",
      "SowTime": "After Last Frost",
      "Thin": "12 inches"
    },
    "zone": "3-10",
    "zones": ["3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "compatable": ["Beans","Cucumbers","Lettuce","Melons","Peas","Potatoes","Squash","Sunflowers"],
    "combative":  ["Tomatoes"],  
    "photoURL": "https://commons.wikimedia.org/wiki/File:Corntassel_7095.jpg#/media/File:Corntassel_7095.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Corn"
    ],
    "commonName": "Corn",
    "variety": "Corn, Silver Queen Hybrid",
    "plantAttrURL": "https://www.burpee.com/vegetables/corn/corn-silver-queen-hybrid-prod000675.html",
    "plantAttributes": {
      "Type": "SU",
      "DaysToMaturity": "92 days",
      "FruitSize": "8-9 inches",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "84-96 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring",
      "SowTime": "After Last Frost",
      "Thin": "12 inches"
    },
    "zone": "3-10",
    "zones": ["3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "compatable": ["Beans","Cucumbers","Lettuce","Melons","Peas","Potatoes","Squash","Sunflowers"],
    "combative":  ["Tomatoes"],  
    "photoURL": "https://commons.wikimedia.org/wiki/File:ZeaMays.jpg#/media/File:ZeaMays.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Corn"
    ],
    "commonName": "Corn",
    "variety": "Corn, Maple Sugar Hybrid",
    "plantAttrURL": "https://www.burpee.com/vegetables/corn/corn-maple-sugar-hybrid-64085A.html",
    "plantAttributes": {
      "Type": "Mini",
      "DaysToMaturity": "78 days",
      "FruitSize": "5 inches",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "72-84 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring",
      "SowTime": "After Last Frost",
      "Thin": "12 inches"
    },
    "zone": "3-10",
    "zones": ["3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "compatable": ["Beans","Cucumbers","Lettuce","Melons","Peas","Potatoes","Squash","Sunflowers"],
    "combative":  ["Tomatoes"],  
    "photoURL": "https://commons.wikimedia.org/wiki/File:Klip_kukuruza_uzgojen_u_Me%C4%91imurju_(Croatia).JPG#/media/File:Klip_kukuruza_uzgojen_u_Me%C4%91imurju_(Croatia).JPG"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Corn Salad"
    ],
    "commonName": "Corn Salad",
    "variety": "Corn Salad, Vit Organic",
    "plantAttrURL": "https://www.burpee.com/vegetables/corn-salad/corn-salad-vit-organic-prod000657.html",
    "plantAttributes": {
      "DaysToMaturity": "50 days",
      "Sun": "Full Sun",
      "Spread": "2 inches",
      "Height": "4-6 inches",
      "SowMethod": "Direct Sow/Indoor Sow",
      "PlantingTime": "Spring",
      "Thin": "2 inches",
      "LifeCycle": "Annual"
    },
    "zone": "3-10",
    "zones": ["3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "photoURL": "https://commons.wikimedia.org/wiki/File:Ackersalat02.jpg#/media/File:Ackersalat02.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Cowpeas"
    ],
    "commonName": "Black-eyed Pea",
    "variety": "Cowpea, California Blackeye No.5",
    "plantAttrURL": "https://www.burpee.com/vegetables/cowpeas/cowpea-california-blackeye-no.5-prod000681.html",
    "plantAttributes": {
      "DaysToMaturity": "80 days",
      "FruitSize": "6-8 inches",
      "Sun": "Full Sun",
      "Spread": "10 inches",
      "Height": "16-18 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring, Summer",
      "SowTime": "After Last Frost",
      "Thin": "6 inches",
      "LifeCycle": "Annual"
    },
    "zone": "5-10",
    "zones": ["5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "photoURL": "https://commons.wikimedia.org/wiki/File:Black-eyed_pea_pods_on_plant_in_Hong_Kong.jpg#/media/File:Black-eyed_pea_pods_on_plant_in_Hong_Kong.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Cucumbers"
    ],
    "commonName": "Cucumber",
    "variety": "Cucumber, Bragger Hybrid",
    "plantAttrURL": "https://www.burpee.com/vegetables/cucumbers/cucumber-bragger-hybrid-prod500118.html",
    "plantAttributes": {
      "Type": "Slicing",
      "DaysToMaturity": "45 days",
      "FruitSize": "6 inches",
      "Sun": "Full Sun",
      "Spread": "6 feet",
      "Height": "20 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring, Summer",
      "SowTime": "After Last Frost",
      "Thin": "2 feet"
    },
    "zone": "2-10",
    "zones": ["2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b"],
    "compatable": ["Beans","Broccoli","Cabbage","Cauliflower","Corn","Lettuce","Peas","Radishes","Sunflowers"],
    "combative":  ["Herbs","Melons","Potatoes"],  
    "photoURL": "https://commons.wikimedia.org/wiki/File:ARS_cucumber.jpg#/media/File:ARS_cucumber.jpg"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Eggplants"
    ],
    "commonName": "Eggplant",
    "variety": "Eggplant, Meatball Hybrid",
    "plantAttrURL": "https://www.burpee.com/vegetables/eggplants/eggplant-meatball-hybrid-prod099571.html",
    "plantAttributes": {
      "DaysToMaturity": "55-60 days",
      "FruitSize": "4-6 inches",
      "Sun": "Full Sun",
      "Spread": "25-32 inches",
      "Height": "24-32 inches",
      "SowMethod": "Indoor Sow",
      "PlantingTime": "Spring",
      "SowTime": "8-12 weeks BLF",
      "Thin": "24 inches",
      "LifeCycle": "Annual"
    },
    "zone": "3-10",
    "zones": ["3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b","11a","11b","12a","12b","13a","13b"],
    "compatable": ["Basil","Beans","Lettuce","Peas","Potatoes","Spinach"],
    "combative":  [""], 
    "photoURL": "https://commons.wikimedia.org/wiki/File:Solanum_melongena_24_08_2012_(1).JPG#/media/File:Solanum_melongena_24_08_2012_(1).JPG"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Endive"
    ],
    "commonName": "Endive",
    "variety": "Curly Endive, Galia Frisse",
    "plantAttrURL": "https://www.burpee.com/vegetables/endive/curly-endive-galia-frisse-67030A.html",
    "plantAttributes": {
      "DaysToMaturity": "40-70 days",
      "Sun": "Full Sun",
      "Spread": "6 inches",
      "Height": "8-10 inches",
      "SowMethod": "Direct Sow/Indoor Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "6 inches",
      "LifeCycle": "Annual"
    },
    "zone": "3-10",
    "zones": ["3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b","11a","11b","12a","12b","13a","13b"],
    "photoURL": "https://commons.wikimedia.org/wiki/File:Cichorium_endivia_-_Botanischer_Garten_Mainz_IMG_5453.JPG#/media/File:Cichorium_endivia_-_Botanischer_Garten_Mainz_IMG_5453.JPG"
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Borage"
    ], 
    "zones" : [
        "3b", 
        "4a", 
        "4b", 
        "5a", 
        "5b", 
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b", 
        "9a", 
        "9b", 
        "10a", 
        "10b", 
        "11a", 
        "11b"
    ], 
    "compatable" : [
        "Beans", 
        "Strawberry", 
        "Cucumber", 
        "Squash", 
        "Fruit trees", 
        "Tomatoes", 
        "Cabbage"
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "Borage", 
    "variety" : "Borage", 
    "plantAttrURL" : "https://www.burpee.com/herbs/borage/borage-prod000462.html", 
    "zone" : "3b-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Borage#/media/File:Borage_starflower_Rohtopurasruoho_01.jpg", 
    "plantAttributes" : {
        "Sun" : "Full Sun, Part Sun", 
        "DaysToMaturity" : "50-80 days", 
        "LifeCycle" : "Annual", 
        "Height" : "18 inches", 
        "Spread" : "12-24 inches", 
        "AdditionalUses" : "Fragrant", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Spring", 
        "Thin" : "12 inches"
    }, 
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Coriander"
    ], 
    "zones" : [
        "3b", 
        "4a", 
        "4b", 
        "5a", 
        "5b", 
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b", 
        "9a", 
        "9b", 
        "10a", 
        "10b", 
        "11a", 
        "11b", 
        "12a", 
        "12b"
    ], 
    "compatable" : [
        "Anise", 
        "Cabbage", 
        "Spinach", 
        "Lettuce", 
        "Tomato", 
        "Beans", 
        "Peas"
    ], 
    "combative" : [
        "Dill"
    ], 
    "commonName" : "Coriander", 
    "variety" : "Coriander", 
    "plantAttrURL" : "https://www.burpee.com/herbs/cilantro/cilantro-coriander-prod000469.html", 
    "zone" : "3b-12", 
    "photoURL" : "https://en.wikipedia.org/wiki/Coriander#/media/File:A_scene_of_Coriander_leaves.JPG", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "60-90 days", 
        "LifeCycle" : "Annual", 
        "Height" : "18-24 inches", 
        "Spread" : "10-14 inches", 
        "AdditionalUses" : "Fragrant", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Spring, Summer", 
        "Thin" : "12 inches"
    }, 
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Lemon Balm"
    ], 
    "zones" : [
        "4a", 
        "4b", 
        "5a", 
        "5b", 
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b", 
        "9a", 
        "9b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "Lemon Balm", 
    "variety" : "Lemon Balm", 
    "plantAttrURL" : "https://www.burpee.com/herbs/lemon-balm/lemon-balm-61457A.html", 
    "zone" : "4-9", 
    "photoURL" : "https://en.wikipedia.org/wiki/Lemon_balm#/media/File:Lemon_Balm_(5744694087).jpg", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "90-200 days", 
        "LifeCycle" : "Perennial", 
        "Height" : "24 inches", 
        "Spread" : "12-18 inches", 
        "AdditionalUses" : "Fragrant", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Spring", 
        "Thin" : "10 inches"
    }, 
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Marjoram"
    ], 
    "zones" : [
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b", 
        "9a", 
        "9b", 
        "10a", 
        "10b", 
        "11a", 
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "Marjoram", 
    "variety" : "Marjoram, Sweet", 
    "plantAttrURL" : "https://www.burpee.com/herbs/marjoram/marjoram-sweet-prod000478.html", 
    "zone" : "6-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Marjoram#/media/File:Origanum_majorana_002.JPG", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "60-90 days", 
        "LifeCycle" : "Annual", 
        "Height" : "12 inches", 
        "Spread" : "6-8 inches", 
        "AdditionalUses" : "Container Plant", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Spring, Summer", 
        "Thin" : "8 inches"
    }, 
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Spearmint"
    ], 
    "zones" : [
        "4a", 
        "4b", 
        "5a", 
        "5b", 
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b", 
        "9a", 
        "9b"
    ], 
    "compatable" : [
        "Alliums", 
        "Brassicas", 
        "Cabbage", 
        "Peas", 
        "Tomatoes"
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "Spearmint", 
    "variety" : "Mint, Spearmint", 
    "plantAttrURL" : "https://www.burpee.com/herbs/mint/mint-spearmint--prod000479.html", 
    "zone" : "4-9", 
    "photoURL" : "https://en.wikipedia.org/wiki/Spearmint#/media/File:Minze.jpg", 
    "plantAttributes" : {
        "Sun" : "Full Sun, Part Sun", 
        "DaysToMaturity" : "90-200 days", 
        "LifeCycle" : "Perennial", 
        "Height" : "18-24 inches", 
        "Spread" : "10-12 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Fall, Spring, Summer", 
        "Thin" : "12 inches"
    }, 
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Peppermint"
    ], 
    "zones" : [
        "4a", 
        "4b", 
        "5a", 
        "5b", 
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b", 
        "9a", 
        "9b"
    ], 
    "compatable" : [
        "Alliums", 
        "Brassicas", 
        "Cabbage", 
        "Peas", 
        "Tomatoes"
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "Peppermint", 
    "variety" : "Mint, Peppermint", 
    "plantAttrURL" : "https://www.burpee.com/herbs/mint/mint-peppermint-prod003356.html", 
    "zone" : "4-9", 
    "photoURL" : "https://en.wikipedia.org/wiki/Peppermint#/media/File:Pfefferminze_natur_peppermint.jpg\r\n", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "90-200 days", 
        "LifeCycle" : "Perennial", 
        "Height" : "18-24 inches", 
        "Spread" : "18-24 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Fall, Spring, Summer", 
        "SoilpH" : "Acidic", 
        "Thin" : "24 inches"
    }, 
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Oregano"
    ], 
    "zones" : [
        "5a", 
        "5b", 
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b", 
        "9a", 
        "9b", 
        "10a", 
        "10b", 
        "11a", 
        "11b", 
        "12a"
    ], 
    "compatable" : [
        "Alliums", 
        "Brassicas", 
        "Cabbage", 
        "Peas", 
        "Tomatoes"
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "Oregano", 
    "variety" : "Oregano, Organic", 
    "plantAttrURL" : "https://www.burpee.com/herbs/oregano/oregano-organic-prod000497.html", 
    "zone" : "5-12a", 
    "photoURL" : "https://en.wikipedia.org/wiki/Oregano#/media/File:Majorana_syriaca_-_za%27atar.jpg", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "90-200 days", 
        "LifeCycle" : "Perennial", 
        "Height" : "12-24 inches", 
        "Spread" : "10-14 inches", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Spring, Summer", 
        "Thin" : "18 inches"
    }, 
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Rosemary"
    ], 
    "zones" : [
        "4a", 
        "4b", 
        "5a", 
        "5b", 
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b", 
        "9a", 
        "9b", 
        "10a", 
        "10b"
    ], 
    "compatable" : [
        "Cabbage", 
        "Beans", 
        "Brassicas", 
        "Carrots", 
        "Thyme"
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "Rosemary", 
    "variety" : "Rosemary", 
    "plantAttrURL" : "https://www.burpee.com/herbs/rosemary/rosemary-prod000483.html", 
    "zone" : "4-10", 
    "photoURL" : "https://en.wikipedia.org/wiki/Rosemary#/media/File:Rosemary_in_bloom.JPG", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "90-400 days", 
        "LifeCycle" : "Perennial", 
        "Height" : "24-36 inches", 
        "Spread" : "12-24 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "Thin" : "18 inches"
    }, 
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Sage"
    ], 
    "zones" : [
        "5a", 
        "5b", 
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b", 
        "9a", 
        "9b", 
        "10a", 
        "10b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "Sage", 
    "variety" : "Sage, Common", 
    "plantAttrURL" : "https://www.burpee.com/herbs/sage/sage-common-prod000484.html", 
    "zone" : "5-10", 
    "photoURL" : "https://vignette.wikia.nocookie.net/gardener/images/f/fd/Sage_Salvia_officinalis.jpg/revision/latest/scale-to-width-down/250?cb=20100906182112", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "90-200 days", 
        "LifeCycle" : "Perennial", 
        "Height" : "12-24 inches", 
        "Spread" : "16-24 inches", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "Thin" : "24 inches"
    }, 
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Thyme"
    ], 
    "zones" : [
        "4a", 
        "4b", 
        "5a", 
        "5b", 
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b", 
        "9a", 
        "9b", 
        "10a", 
        "10b", 
        "13b"
    ], 
    "compatable" : [
        "Brassicas", 
        "Cabbage", 
        "Eggplant", 
        "Potato", 
        "Strawberry", 
        "Tomato", 
        "Brussels Sprouts"
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "Thyme", 
    "variety" : "Thyme, Common", 
    "plantAttrURL" : "https://www.burpee.com/herbs/thyme/thyme-common-prod000487.html", 
    "zone" : "4-10, 13b", 
    "photoURL" : "https://en.wikipedia.org/wiki/Thyme#/media/File:Flowering_thyme.JPG", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "180-200 days", 
        "LifeCycle" : "Perennial", 
        "Height" : "6-12 inches", 
        "Spread" : "6-8 inches", 
        "AdditionalUses" : "Container Plant, Easy Care, Eco-Friendly, Low Maintenance", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "Thin" : "12 inches"
    }, 
  },
  // ----------------------------------------------
  { 
    "plantAttributes" : {
        "AdditionalUses" : [
            "Container Plant, Fragrant"
        ], 
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "60-90 days", 
        "LifeCycle" : "Annual", 
        "Height" : "12-18 inches", 
        "Spread" : "10-14 inches", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Spring, Summer", 
        "Thin" : "12 inches"
    }, 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Basil"
    ], 
    "zones" : [
        "2a", 
        "2b", 
        "3a", 
        "3b", 
        "4a", 
        "4b", 
        "5a", 
        "5b", 
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b", 
        "9a", 
        "9b", 
        "10a", 
        "10b", 
        "11a", 
        "11b", 
        "12a", 
        "12b", 
        "13a", 
        "13b"
    ], 
    "compatable" : [
        "Tomato", 
        "Peppers", 
        "Oregano", 
        "Asparagus", 
        "Petunias", 
        "Grapes", 
        "Chamomile", 
        "Anise"
    ], 
    "combative" : [
        "Rue", 
        "Thyme"
    ], 
    "commonName" : "Basil", 
    "variety" : "Basil, Sweet Classic Variety", 
    "plantAttrURL" : "https://www.burpee.com/herbs/basil/basil-sweet-prod000460.html", 
    "zone" : "2-13", 
    "photoURL" : "https://vignette.wikia.nocookie.net/gardener/images/c/c6/Basil_Sweet_basil.jpg/revision/latest/scale-to-width-down/250?cb=20100827171817", 
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Chive"
    ], 
    "zones" : [
        "3b", 
        "4a", 
        "4b", 
        "5a", 
        "5b", 
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b", 
        "9a", 
        "9b", 
        "10a", 
        "10b", 
        "11a"
    ], 
    "compatable" : [
        "Apples", 
        "Carrots", 
        "Grapes", 
        "Roses", 
        "Tomatoes", 
        "", 
        "Broccoli", 
        "Cabbage", 
        "Mustard"
    ], 
    "combative" : [
        "Beans", 
        "Peas"
    ], 
    "commonName" : "Chive", 
    "variety" : "Chives, Common", 
    "plantAttrURL" : "https://www.burpee.com/herbs/chive/chives-common-prod000467.html", 
    "zone" : "3b-11a", 
    "photoURL" : "https://en.wikipedia.org/wiki/Chives#/media/File:Allium_schoenoprasum_in_NH_01.jpg", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "80-90 days", 
        "LifeCycle" : "Perennial", 
        "Height" : "12-18 inches", 
        "Spread" : "3-4 inches", 
        "AdditionalUses" : "Container Plant, Easy Care, Eco-Friendly, Low Maintenance", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "Thin" : "3 inches"
    }, 
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Cilantro"
    ], 
    "zones" : [
        "3b", 
        "4a", 
        "4b", 
        "5a", 
        "5b", 
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b", 
        "9a", 
        "9b", 
        "10a", 
        "10b", 
        "11a", 
        "11b", 
        "12a", 
        "12b"
    ], 
    "compatable" : [
        "Anise", 
        "Cabbage", 
        "Spinach", 
        "Lettuce", 
        "Tomato", 
        "Beans", 
        "Peas"
    ], 
    "combative" : [
        "Dill"
    ], 
    "commonName" : "Cilantro", 
    "variety" : "Mexican Culantro, Common", 
    "plantAttrURL" : "https://www.burpee.com/herbs/coriander/mexican-culantro-common-prod099829.html", 
    "zone" : "3b-12", 
    "photoURL" : "https://vignette.wikia.nocookie.net/gardener/images/1/1b/Coriander.jpg/revision/latest?cb=20100830220635", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "30-60 days", 
        "LifeCycle" : "Annual", 
        "Height" : "4-6 inches", 
        "Spread" : "8-12 inches", 
        "AdditionalUses" : "Container Plant", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring, Summer", 
        "Thin" : "6 inches"
    }, 
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Dill"
    ], 
    "zones" : [
        "2a", 
        "2b", 
        "3a", 
        "3b", 
        "4a", 
        "4b", 
        "5a", 
        "5b", 
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b", 
        "9a", 
        "9b", 
        "10a", 
        "10b", 
        "11a", 
        "11b", 
        "12a", 
        "12b", 
        "13a", 
        "13b"
    ], 
    "compatable" : [
        "Brassicas", 
        "Broccoli", 
        "Cabbage", 
        "Corn", 
        "Eggplant", 
        "Fennel", 
        "Lettuce", 
        "Onions", 
        "Cucumbers"
    ], 
    "combative" : [
        "Carrots", 
        "Tomatoes", 
        "Cilantro"
    ], 
    "commonName" : "Dill", 
    "variety" : "Dill, Hera Organic", 
    "plantAttrURL" : "https://www.burpee.com/organic-dill/dill-hera-organic-prod002201.html", 
    "zone" : "2-13", 
    "photoURL" : "https://en.wikipedia.org/wiki/Dill#/media/File:Anethum_graveolens_001.JPG", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "40-60 days", 
        "LifeCycle" : "Annual", 
        "Height" : "18-24 inches", 
        "Spread" : "8-12 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring, Summer", 
        "Thin" : "8 inches"
    }, 
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Fennel"
    ], 
    "zones" : [
        "3b", 
        "4a", 
        "4b", 
        "5a", 
        "5b", 
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b", 
        "9a", 
        "9b", 
        "10a", 
        "10b", 
        "11a", 
        "11b", 
        "12a", 
        "12b", 
        "13a", 
        "13b"
    ], 
    "compatable" : [
        "Brassicas", 
        "Broccoli", 
        "Cabbage", 
        "Corn", 
        "Eggplant", 
        "Fennel", 
        "Lettuce", 
        "Onions", 
        "Cucumbers"
    ], 
    "combative" : [
        "Dill"
    ], 
    "commonName" : "Fennel", 
    "variety" : "Fennel, Orion Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/herbs/fennel/fennel-orion-hybrid-prod001629.html", 
    "zone" : "3b-13", 
    "photoURL" : "https://en.wikipedia.org/wiki/Fennel#/media/File:Foeniculum_July_2011-1a.jpg", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "80-85 days", 
        "LifeCycle" : "Annual", 
        "Height" : "24 inches", 
        "Spread" : "24 inches", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Spring, Summer", 
        "Thin" : "12 inches"
    }, 
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Parsley"
    ], 
    "zones" : [
        "2a", 
        "2b", 
        "3a", 
        "3b", 
        "4a", 
        "4b", 
        "5a", 
        "5b", 
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b", 
        "9a", 
        "9b", 
        "10a", 
        "10b", 
        "11a", 
        "11b", 
        "12a", 
        "12b", 
        "13a", 
        "13b"
    ], 
    "compatable" : [
        "Asparagus", 
        "Corn", 
        "Tomatoes", 
        "Apple", 
        "Asparagus", 
        "Rose"
    ], 
    "combative" : [
        "Alliums", 
        "Lettuce"
    ], 
    "commonName" : "Parsley", 
    "variety" : "Parsley, Italian Essence", 
    "plantAttrURL" : "https://www.burpee.com/herbs/parsley/parsley-italian-essence--prod099651.html", 
    "zone" : "2-13", 
    "photoURL" : "https://en.wikipedia.org/wiki/Parsley#/media/File:Petroselinum.jpg", 
    "plantAttributes" : {
        "Sun" : "Full Sun, Part Sun", 
        "DaysToMaturity" : "60-90 days", 
        "LifeCycle" : "Biennial", 
        "Height" : "18 inches", 
        "Spread" : "3-4 inches", 
        "AdditionalUses" : "Container Plant", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Spring, Summer", 
        "Thin" : "4 inches"
    }, 
  }
  // ----------------------------------------------
];

db.Plant
  .deleteMany({})
  .then(() => db.Plant.collection.insertMany(plantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });