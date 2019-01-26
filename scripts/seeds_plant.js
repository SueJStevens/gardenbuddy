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
    "commonName": "BEETS",
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
    "commonName": "CABBAGE",
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
    "commonName": "CARROTS",
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
    "commonName" : "Mint", 
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
    "commonName" : "Mint", 
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
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Pet Friendly Herbs", 
        "Cat Grass"
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "CAT-GRASS", 
    "variety" : "Cat Grass", 
    "plantAttrURL" : "https://www.burpee.com/herbs/pet-friendly-herbs/cat-grass-prod000463.html", 
    "zone" : "2-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Dactylis_glomerata#/media/File:Dactylis_glomerata_Kropaar_plant.jpg", 
    "plantAttributes" : {
        "Sun" : "Full Sun, Part Sun", 
        "DaysToMaturity" : "40-60 days", 
        "LifeCycle" : "Annual", 
        "Height" : "36-48 inches", 
        "Spread" : "6-8 inches", 
        "AdditionalUses" : "Container Plant", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "Thin" : "6 inches"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Pet Friendly Herbs", 
        "Cat Grass"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "CATNIP", 
    "variety" : "Catnip", 
    "plantAttrURL" : "https://www.burpee.com/herbs/pet-friendly-herbs/catnip-prod000465.html", 
    "zone" : "3-11", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/8/82/Starr_070906-8819_Nepeta_cataria.jpg", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "80-90 days", 
        "LifeCycle" : "Perennial", 
        "Height" : "18 inches", 
        "Spread" : "12-14 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Fall, Spring, Summer", 
        "Thin" : "18 inches"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Chamomile"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        "Cauliflower", 
        "Broccoli", 
        "Onion", 
        "Cabbage", 
        "Cucumber"
    ], 
    "combative" : [
        "Mint"
    ], 
    "commonName" : "CHAMOMILE", 
    "variety" : "Chamomile, German", 
    "plantAttrURL" : "https://www.burpee.com/herbs/chamomile/chamomile-german-prod000466.html", 
    "zone" : "3-11", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/2/26/Kamomillasaunio_%28Matricaria_recutita%29.JPG", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "90-120 days", 
        "LifeCycle" : "Annual", 
        "Height" : "24 inches", 
        "Spread" : "12-14 inches", 
        "AdditionalUses" : "Fragrant", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Spring, Summer", 
        "Thin" : "12 inches"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Chervil"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        "Broccoli", 
        "Lettuce", 
        "Radish"
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "CHERVIL", 
    "variety" : "Chervil, Curled", 
    "plantAttrURL" : "https://www.burpee.com/herbs/chervil/chervil-curled-61390A.html", 
    "zone" : "3-11", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/f/f1/Chervil.JPG", 
    "plantAttributes" : {
        "Sun" : "Full Sun, Part Sun", 
        "DaysToMaturity" : "120 days", 
        "LifeCycle" : "Annual", 
        "Height" : "20 inches", 
        "Spread" : "10-12 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "Thin" : "10 inches"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "herbs", 
        "Flowers"
    ], 
    "plantClass" : [
        "Lavender"
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
    "commonName" : "LAVENDER", 
    "variety" : "Lavender, Provence Blue", 
    "plantAttrURL" : "https://www.burpee.com/perennials/lavenders/lavender-provence-blue-prod000071.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Lavandula#/media/File:Single_lavendar_flower02.jpg", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "Height" : "18-20 inches", 
        "Spread" : "18-20 inches", 
        "PlantingTime" : "Fall, Spring", 
        "LifeCycle" : "Perennial"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Lemon Grass"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "LEMON GRASS", 
    "variety" : "Herb, Lemongrass", 
    "plantAttrURL" : "https://www.burpee.com/herbs/lemon-grass/herb-lemongrass-prod003511.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Cymbopogon#/media/File:YosriNov04Pokok_Serai.JPG", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "75-100 days", 
        "LifeCycle" : "Annual", 
        "Height" : "36-48 inches", 
        "Spread" : "48-60 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring, Summer", 
        "SoilpH" : "Neutral", 
        "Thin" : "18 inches"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Stevia"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "STEVIA", 
    "variety" : "Stevia, Sweet Leaf", 
    "plantAttrURL" : "https://www.burpee.com/herbs/stevia/stevia-sweet-leaf-prod000486.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Stevia_rebaudiana#/media/File:Stevia_rebaudiana_flowers.jpg", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "40-60 days", 
        "LifeCycle" : "Annual", 
        "Height" : "12-20 inches", 
        "Spread" : "6-8 inches", 
        "AdditionalUses" : "Container Plant", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Spring, Summer", 
        "Thin" : "10 inches"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "herbs"
    ], 
    "plantClass" : [
        "Verbena"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "LEMON VERBENA", 
    "variety" : "Verbena, Lemon", 
    "plantAttrURL" : "https://www.burpee.com/herbs/verbena/verbena-lemon-prod003360.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Aloysia_citrodora#/media/File:Aloysia_citriodora_002.jpg", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "DaysToMaturity" : "60-90 days", 
        "LifeCycle" : "Perennial", 
        "Height" : "36-72 inches", 
        "Spread" : "36-72 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Spring, Summer", 
        "SoilpH" : "Acidic", 
        "Thin" : "6 feet"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Broccoli Raab", 
        "Rapini"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "BROCCOLI RAAB", 
    "variety" : "Broccoli Raab, Spring", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/broccoli-raab/broccoli-raab-spring-prod000614.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Rapini#/media/File:Rapini.jpg", 
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
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Brokali"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "BROKALI", 
    "variety" : "Brokali, Apollo Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/brokali/brokali-apollo-hybrid-prod001617.html", 
    "zone" : "3-11", 
    "photoURL" : "https://images-na.ssl-images-amazon.com/images/I/519gsJAi%2BNL.jpg", 
    "plantAttributes" : {
        "DaysToMaturity" : "50-60 days", 
        "Sun" : "Full Sun", 
        "Spread" : "24-28 inches", 
        "Height" : "24-28 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Spring, Summer", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Chinese Cabbage"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "CHINESE CABBAGE", 
    "variety" : "Chinese Cabbage, Pak Choi, Joi Choi Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/cabbages/chinese-cabbage-pak-choi-joi-choi-hybrid-prod000625.html", 
    "zone" : "3-11", 
    "photoURL" : "http://www.koshercrops.com/uploads/9/4/4/1/9441768/s425178637313967570_p14_i1_w355.jpeg", 
    "plantAttributes" : {
        "DaysToMaturity" : "55 days", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "18-20 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "4-6 weeks BLF", 
        "Thin" : "16 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Cowpeas"
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "COWPEAS", 
    "variety" : "Cowpea, Phenomenal", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/cowpeas/cowpea-phenomenal-prod500511.html", 
    "zone" : "5-11", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/d/d0/BlackEyedPeas.JPG", 
    "plantAttributes" : {
        "DaysToMaturity" : "65 days", 
        "Sun" : "Full Sun", 
        "Spread" : "24-36 inches", 
        "Height" : "24 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "After Last Frost", 
        "Thin" : "4 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Eggplants"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "EGGPLANTS", 
    "variety" : "Eggplant, Black Beauty", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/eggplants/eggplant-black-beauty-prod000706.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Eggplant#/media/File:Solanum_melongena_24_08_2012_(1).JPG", 
    "plantAttributes" : {
        "DaysToMaturity" : "74 days", 
        "FruitSize" : "4-5 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "16 inches", 
        "Height" : "18-24 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "8-12 weeks BLF", 
        "Thin" : "24 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Gourds"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "GOURDS", 
    "variety" : "Gourd, Daisy Gourd", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/gourds/gourd-daisy-gourd--prod003189.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Gourd#/media/File:Gourds_-_grown_in_the_garden.JPG", 
    "plantAttributes" : {
        "DaysToMaturity" : "91-98 days", 
        "FruitSize" : "2-3 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "96 inches", 
        "Height" : "24-36 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "After Last Frost", 
        "Thin" : "36 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Melon"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "HONEYDEW", 
    "variety" : "Melon, Honeydew Green Flesh Organic", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/gourds/gourd-daisy-gourd--prod003189.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Honeydew_(melon)#/media/File:Cantaloupe_Melon_cross_section.png", 
    "plantAttributes" : {
        "DaysToMaturity" : "91-98 days", 
        "FruitSize" : "2-3 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "96 inches", 
        "Height" : "24-36 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "After Last Frost", 
        "Thin" : "36 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Horseradish"
    ], 
    "zones" : [
        "3a", 
        "3b", 
        "4a", 
        "4b", 
        "5a", 
        "5b", 
        "6a", 
        "6b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "HORSERADISH", 
    "variety" : "Horseradish, Maliner Kren", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/horseradish/horseradish-maliner-kren-69039.html", 
    "zone" : "3-6", 
    "photoURL" : "https://en.wikipedia.org/wiki/Horseradish#/media/File:Armoracia_rusticana.jpg", 
    "plantAttributes" : {
        "DaysToMaturity" : "140-160 days", 
        "FruitSize" : "8 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "20-24 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "After Last Frost", 
        "Thin" : "12 inches", 
        "LifeCycle" : "Perennial"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Leeks"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "LEEKS", 
    "variety" : "Leek, Lancelot", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/leeks/leek-lancelot--prod099691.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Leek#/media/File:Leeks.JPG", 
    "plantAttributes" : {
        "DaysToMaturity" : "75 days", 
        "FruitSize" : "12-14 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "24 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "8 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Mesclun"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "MESCLUN", 
    "variety" : "Lettuce, Buttercrunch", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/mesclun/mesclun-sweet-salad-mix-prod000763.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Mesclun#/media/File:Salade_mesclun_et_ch%C3%A8vre_chaud_sur_toasts.jpg", 
    "plantAttributes" : {
        "DaysToMaturity" : "30 days", 
        "Sun" : "Full Sun, Part Sun", 
        "Spread" : "6 inches", 
        "Height" : "9-15 inches", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "1 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Microgreens"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "MICROGREENS", 
    "variety" : "Microgreens Burpee's Mix", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/microgreens/microgreens-burpees-mix-62139A.html", 
    "zone" : "3-11", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/4/4d/Red_Cabbage_Microgreens.jpg", 
    "plantAttributes" : {
        "DaysToMaturity" : "14-28 days", 
        "Sun" : "Full Sun, Part Sun", 
        "Height" : "2-3 inches", 
        "SowMethod" : "Direct Sow/Indoor Sow", 
        "PlantingTime" : "Fall, Spring, Summer", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Parsnips"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        "Bush Beans", 
        "Pepper", 
        "Potato", 
        "Radish", 
        "Fruit Trees"
    ], 
    "combative" : [
        "Carrot", 
        "Celery"
    ], 
    "commonName" : "PARSNIPS", 
    "variety" : "Parsnip, Hollow Crown", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/parsnips/parsnip-hollow-crown-50336A.html", 
    "zone" : "3-11", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/b/b7/PastinakePflanzegeerntet.jpg", 
    "plantAttributes" : {
        "DaysToMaturity" : "105 days", 
        "FruitSize" : "12 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "8 inches", 
        "Height" : "10-15 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "4 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Pumpkins"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        "Corn", 
        "Squash", 
        "Nasturtium", 
        "Beans", 
        "Oregano", 
        "Radish"
    ], 
    "combative" : [
        "Potato"
    ], 
    "commonName" : "PUMPKINS", 
    "variety" : "Pumpkin, Cherokee Bush", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/pumpkins/pumpkin-cherokee-bush-prod500403.html", 
    "zone" : "3-11", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/5/5c/FrenchMarketPumpkinsB.jpg", 
    "plantAttributes" : {
        "DaysToMaturity" : "60-70 days", 
        "FruitWeight" : "5-8 pounds", 
        "Sun" : "Full Sun", 
        "Spread" : "48-58 inches", 
        "Height" : "14-24 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring, Summer", 
        "SowTime" : "After Last Frost", 
        "Thin" : "4 feet", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Rhubarb"
    ], 
    "zones" : [
        "3a", 
        "3b", 
        "4a", 
        "4b", 
        "5a", 
        "5b", 
        "6a", 
        "6b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "RHUBARB", 
    "variety" : "Rhubarb, Crimson Red", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/rhubarb/rhubarb-crimson-red-prod003198.html", 
    "zone" : "3-6", 
    "photoURL" : "https://en.wikipedia.org/wiki/Rhubarb#/media/File:Rheum_rhabarbarum.2006-04-27.uellue.jpg", 
    "plantAttributes" : {
        "DaysToMaturity" : "365 days", 
        "Sun" : "Full Sun", 
        "Spread" : "24-36 inches", 
        "Height" : "24-36 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "36 inches", 
        "LifeCycle" : "Perennial"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Rutabaga"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "RUTABAGA", 
    "variety" : "Rutabaga, Burpee's Purple Top", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/rutabaga/rutabaga--burpees-purple-top-61267A.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Rutabaga#/media/File:Rutabaga,_variety_nadmorska.JPG", 
    "plantAttributes" : {
        "DaysToMaturity" : "90 days", 
        "FruitSize" : "4-6 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "7 inches", 
        "Height" : "12-14 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Fall, Summer", 
        "SowTime" : "Before First Frost", 
        "Thin" : "7 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Onion"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "SCALLIONS", 
    "variety" : "Bunching Onion, Evergreen Long White", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/onions/bunching-onion-evergreen-long-white-prod000771.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Scallion#/media/File:CSA-Red-Spring-Onions.jpg", 
    "plantAttributes" : {
        "Type" : "Bunching", 
        "DaysToMaturity" : "60-120 days", 
        "FruitSize" : "1 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "4 inches", 
        "Height" : "10-12 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "4 inches"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Shallots"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "SHALLOTS", 
    "variety" : "Shallots, Dutch Yellow", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/shallots/shallots-dutch-yellow-prod000890.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Shallot#/media/File:Shallots_-_sliced_and_whole.jpg", 
    "plantAttributes" : {
        "DaysToMaturity" : "90-120 days", 
        "FruitSize" : "2 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "30-35 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "3 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Beans"
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
        "11b"
    ], 
    "compatable" : [
        "Corn", 
        "Sunflower", 
        "Asparagus", 
        "Potato"
    ], 
    "combative" : [
        "Beans", 
        "Onions", 
        "Garlic"
    ], 
    "commonName" : "SOYBEAN", 
    "variety" : "Bean, Soy, Midori Giant", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/beans/bean-soy-midori-giant-prod003170.html", 
    "zone" : "5-11", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Glycine_max_003.JPG", 
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
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Sweet Potato"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "SWEET POTATOES", 
    "variety" : "Sweet Potato, Vardaman", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/sweet-potatoes/sweet-potato-vardaman-prod000946.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Sweet_potato#/media/File:Ipomoea_batatas_006.JPG", 
    "plantAttributes" : {
        "DaysToMaturity" : "100 days", 
        "Sun" : "Full Sun", 
        "Spread" : "36-48 inches", 
        "Height" : "6-10 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "After Last Frost", 
        "Thin" : "12 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Tomatillos"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "TOMATILLOES", 
    "variety" : "Tomatillo, Green Organic", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/tomatillos/tomatillo-green-organic-prod000954.html", 
    "zone" : "3-11", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/3/31/Physalis_ixocarpa.JPG", 
    "plantAttributes" : {
        "DaysToMaturity" : "100 days", 
        "FruitSize" : "2-3 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "36-48 inches", 
        "Height" : "36-48 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "6-8 weeks BLF", 
        "Thin" : "36 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Turnips"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        "Broccoli", 
        "Peas", 
        "Cabbage"
    ], 
    "combative" : [
        "Potato", 
        "Radish", 
        "Carrot", 
        "Mustard"
    ], 
    "commonName" : "TURNIPS", 
    "variety" : "Turnip, Purple Top White Globe", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/turnips/turnip-purple-top-white-globe-prod001185.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Turnip#/media/File:Turnip_2622027.jpg", 
    "plantAttributes" : {
        "DaysToMaturity" : "55 days", 
        "FruitSize" : "1-3 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12-15 inches", 
        "Height" : "12-15 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "4 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables", 
        "fruit"
    ], 
    "plantClass" : [
        "Watermelon"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "WATERMELON", 
    "variety" : "Watermelon, Bush Sugar Baby", 
    "plantAttrURL" : "https://www.burpee.com/fruit/watermelon/watermelon-bush-sugar-baby-prod000553.html", 
    "zone" : "3-11", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg", 
    "plantAttributes" : {
        "DaysToMaturity" : "80 days", 
        "FruitWeight" : "12 pounds", 
        "Sun" : "Full Sun", 
        "Spread" : "24-36 inches", 
        "Height" : "15-24 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "After Last Frost", 
        "Thin" : "24 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Cucumbers"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        "Kohlrabi", 
        "Radish", 
        "Sunflower", 
        "Beans", 
        "Lettuce", 
        "Nasturtiums", 
        "Chamomile", 
        "Marigold", 
        "Peas", 
        "Beets", 
        "Carrot", 
        "Dill", 
        "Onion", 
        "Garlic", 
        "Celery", 
        "Spinach", 
        "Corn", 
        "Cabbage"
    ], 
    "combative" : [
        "Potato", 
        "Sage"
    ], 
    "commonName" : "CUCUMBERS", 
    "variety" : "Cucumber, Bragger Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/cucumbers/cucumber-bragger-hybrid-prod500118.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Cucumber#/media/File:ARS_cucumber.jpg", 
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
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Kohlrabi"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        "Cucumber", 
        "Thyme", 
        "Sage", 
        "Cabbage", 
        "Cauliflower", 
        "Beets", 
        "Onion"
    ], 
    "combative" : [
        "Climbing Bean", 
        "Pepper", 
        "Tomato", 
        "Fennel"
    ], 
    "commonName" : "KOHLRABI", 
    "variety" : "Kohlrabi, Sweet Vienna", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/kohlrabi/kohlrabi-sweet-vienna--prod000727.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Kohlrabi#/media/File:GreenKohlrabi.jpg", 
    "plantAttributes" : {
        "DaysToMaturity" : "45 days", 
        "FruitSize" : "2-3 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "9-15 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "4 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Lettuce"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        "Broccoli", 
        "Beans", 
        "Carrot", 
        "Beets", 
        "Onion", 
        "Radish", 
        "Kohlrabi", 
        "Dill", 
        "Cucumber", 
        "Strawberry", 
        "Thyme", 
        "Coriander", 
        "Nasturtiums", 
        "Parsnips"
    ], 
    "combative" : [
        "Cabbage", 
        "Parsley", 
        "Celery"
    ], 
    "commonName" : "LETTUCE", 
    "variety" : "Lettuce, Buttercrunch", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/leeks/leek-lancelot--prod099691.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Lettuce#/media/File:Iceberg_lettuce_in_SB.jpg", 
    "plantAttributes" : {
        "DaysToMaturity" : "75 days", 
        "FruitSize" : "12-14 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "24 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "8 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Onion"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        "Carrot", 
        "Strawberry", 
        "Chamomile", 
        "Beets", 
        "Cabbage", 
        "Cauliflower", 
        "Lettuce", 
        "Parsnip", 
        "Pepper", 
        "Cucumber", 
        "Dill", 
        "Marigold", 
        "Tomato", 
        "Savory", 
        "Broccoli"
    ], 
    "combative" : [
        "Peas", 
        "Lentils", 
        "Asparagus"
    ], 
    "commonName" : "ONIONS", 
    "variety" : "Onion Collection, Sets", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/onions/onion-collection-sets-prod000770.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Onion#/media/File:ARS_red_onion.jpg", 
    "plantAttributes" : {
        "Type" : "Long Day", 
        "DaysToMaturity" : "70-80 days", 
        "FruitSize" : "1-2 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "4 inches", 
        "Height" : "10-12 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "4 inches"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Peas"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        "Corn", 
        "Carrot", 
        "Eggplant", 
        "Turnip", 
        "Cauliflower", 
        "Garlic", 
        "Broccoli", 
        "Brussels Sprouts", 
        "Mint", 
        "Cucumber", 
        "Beans"
    ], 
    "combative" : [
        "Chive", 
        "Potato", 
        "Onion"
    ], 
    "commonName" : "PEAS", 
    "variety" : "Pea, Sugar Prince", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/peas/pea-sugar-prince-prod500390.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Pea#/media/File:Peas_in_pods_-_Studio.jpg", 
    "plantAttributes" : {
        "Type" : "Snap Edible Pod", 
        "DaysToMaturity" : "68-70 days", 
        "FruitSize" : "3-4 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "10-12 inches", 
        "Height" : "26-30 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Fall, Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "4 inches"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Peppers"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        "Basil", 
        "Tomato", 
        "Sunflower", 
        "Carrot", 
        "Eggplant", 
        "Onion", 
        "Parsley", 
        "Okra", 
        "Marjoram", 
        "Mustard", 
        "Geraniums", 
        "Petunias"
    ], 
    "combative" : [
        "Beans", 
        "Kale", 
        "Apricot", 
        "Fennel", 
        "Kohlrabi", 
        "Brussels", 
        "Sprouts"
    ], 
    "commonName" : "PEPPERS", 
    "variety" : "Pepper, Sweet, California Wonder", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/peppers/pepper-sweet-california-wonder-prod000825.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Bell_pepper#/media/File:Colorful_Bell_Peppers.JPG", 
    "plantAttributes" : {
        "Type" : "Bell", 
        "DaysToMaturity" : "75 days", 
        "FruitSize" : "4 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "12 inches", 
        "Height" : "18-24 inches", 
        "SowMethod" : "Indoor Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "8-12 weeks BLF", 
        "Thin" : "24 inches"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Potatoes"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        "Beans", 
        "Horseradish", 
        "Thyme", 
        "Basil", 
        "Cabbage", 
        "Corn", 
        "Eggplant", 
        "Marigold", 
        "Peas", 
        "Broccoli", 
        "Corn", 
        "Onion", 
        "Garlic", 
        "Clover"
    ], 
    "combative" : [
        "Carrot", 
        "Pumpkin", 
        "Tomato", 
        "Cucumber", 
        "Sunflower", 
        "Squash", 
        "Apple", 
        "Cherry", 
        "Raspberry", 
        "Walnut"
    ], 
    "commonName" : "POTATOES", 
    "variety" : "Potato, Rio Grande Russet", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/potatoes/potato-rio-grande-russet-prod003197.html", 
    "zone" : "3-11", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg", 
    "plantAttributes" : {
        "DaysToMaturity" : "59-65 days", 
        "FruitSize" : "3-5 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "34 inches", 
        "Height" : "38 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring", 
        "SowTime" : "2-4 weeks BLF", 
        "Thin" : "12 inches", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Radish"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        "Chervil", 
        "Lettuce", 
        "Nasturtium", 
        "Squash", 
        "Eggplant", 
        "Cucumber", 
        "Peas", 
        "Beans", 
        "Melons"
    ], 
    "combative" : [
        "Grape Vine", 
        "Brussels Sprout", 
        "Turnip"
    ], 
    "commonName" : "RADISH", 
    "variety" : "Radish, Solaris Hybrid", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/pumpkins/pumpkin-cherokee-bush-prod500403.html", 
    "zone" : "3-11", 
    "photoURL" : "https://en.wikipedia.org/wiki/Radish#/media/File:Radish_3371103037_4ab07db0bf_o.jpg", 
    "plantAttributes" : {
        "DaysToMaturity" : "60-70 days", 
        "FruitWeight" : "5-8 pounds", 
        "Sun" : "Full Sun", 
        "Spread" : "48-58 inches", 
        "Height" : "14-24 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring, Summer", 
        "SowTime" : "After Last Frost", 
        "Thin" : "4 feet", 
        "LifeCycle" : "Annual"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Tomatoes"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        "Aspargus", 
        "Basil", 
        "Garlic", 
        "Beans", 
        "Oregano", 
        "Rose", 
        "Brocolli", 
        "Cabbage", 
        "Celery", 
        "Pepper", 
        "Marigold", 
        "Borage", 
        "Parsley", 
        "Coriander", 
        "Chive", 
        "Carrot", 
        "Eggplant", 
        "Sage", 
        "Thyme", 
        "Mint", 
        "Mustard", 
        "Rosemary", 
        "Stinging Nettle"
    ], 
    "combative" : [
        "Corn", 
        "Dill", 
        "Potato", 
        "Fennel", 
        "Kohlrabi", 
        "Walnut"
    ], 
    "commonName" : "TOMATOES", 
    "variety" : "Tomato, Early Girl Hybrid Tomato, Early ", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/tomatoes/tomato-early-girl-hybrid-prod000986.html", 
    "zone" : "3-11", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg", 
    "plantAttributes" : {
        "Type" : "Slicer", 
        "FruitBearing" : "Indeterminate", 
        "DaysToMaturity" : "59 days", 
        "FruitWeight" : "4-5 ounces", 
        "Sun" : "Full Sun", 
        "Spread" : "52 inches", 
        "Height" : "55 inches", 
        "SowMethod" : "Indoor Sow", 
        "SowTime" : "6-8 weeks BLF", 
        "Thin" : "36 inches"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "vegetables"
    ], 
    "plantClass" : [
        "Squash"
    ], 
    "zones" : [
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
        "11b"
    ], 
    "compatable" : [
        "Corn", 
        "Marjoram", 
        "Parsnip"
    ], 
    "combative" : [
        "Potato"
    ], 
    "commonName" : "ZUCCHINI", 
    "variety" : "Squash, Summer, Fordhook Zucchini Organic Squash, Summer, Ford", 
    "plantAttrURL" : "https://www.burpee.com/vegetables/squash/squash-summer-fordhook-zucchini-organic-prod002150.html", 
    "zone" : "3-11", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Zucchini-Whole.jpg", 
    "plantAttributes" : {
        "Type" : "Summer Zucchini", 
        "DaysToMaturity" : "57 days", 
        "FruitSize" : "6-8 inches", 
        "Sun" : "Full Sun", 
        "Spread" : "48-60 inches", 
        "Height" : "24-30 inches", 
        "SowMethod" : "Direct Sow", 
        "PlantingTime" : "Spring, Summer", 
        "SowTime" : "After Last Frost", 
        "Thin" : "36 inches"
    }
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