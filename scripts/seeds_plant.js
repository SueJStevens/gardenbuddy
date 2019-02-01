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
    "zones": ["4a", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
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
    "zones": ["4a", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
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
    "zones": ["2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/79/Eruca_sativa_1_IP0206101.jpg"
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
    "zones": ["2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flower_of_Mustard_Plant.jpg"
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
    "zones": ["2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "compatable": ["Asparagus", "Brussels", "Cabbage", "Celery", "Dill", "Eggplant", "Lettuce", "Onions", "Peas", "Peppers", "Radishes", "Strawberries", "Tomatoes"],
    "combative": [""],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/3/37/Spinacia_oleracea_Spinazie_bloeiend.jpg"
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
    "zones": ["3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Italian_garlic_PDO.JPG"
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
    "zones": ["2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a"],
    "compatable": ["Basil", "Beets", "Lettuce", "Parsley", "Spinach", "Tomatoes"],
    "combative": [""],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/92/Asparagus_Tip.jpg"
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
    "zones": ["2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b", "11a", "11b", "12a", "12b", "13a", "13b"],
    "compatable": ["Broccoli", "Cabbage", "Carrots", "Cauliflower", "Celery", "Corn", "Cucumbers", "Eggplant", "Peas", "Potatoes", "Radishes", "Squash", "Strawberries", "Tomatoes"],
    "combative": ["Garlic", "Onions", "Peppers", "Sunflowers"],
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
    "zones": ["2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b", "11a", "11b", "12a", "12b", "13a", "13b"],
    "compatable": ["Broccoli", "Cabbage", "Carrots", "Cauliflower", "Celery", "Corn", "Cucumbers", "Eggplant", "Peas", "Potatoes", "Radishes", "Squash", "Strawberries", "Tomatoes"],
    "combative": ["Garlic", "Onions", "Peppers", "Sunflowers"],
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
    "zones": ["2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "compatable": ["Asparagus", "Broccoli", "Cauliflower", "Lettuce", "Onions"],
    "combative": ["Mustard", "Pole Beans"],
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
    "zones": ["2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "compatable": ["Dill", "Lettuce", "Radishes", "Sage", "Spinach", "Turnips"],
    "combative": ["Tomatoes"],
    "photoURL": "https://https://upload.wikimedia.org/wikipedia/commons/7/7f/BrusselsSproutColes.jpg"
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
    "zones": ["2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "compatable": ["Beans", "Beets", "Celery", "Cucumbers", "Sage", "Thyme"],
    "combative": ["Broccoli", "Cabbage", "Strawberries", "Tomatoes"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/d/df/Cauliflower_plants_growing_in_New_Jersey_in_April.jpg"
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
    "zones": ["2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "compatable": ["Cabbage", "Dill", "Potatoes", "Rosemary", "Sage"],
    "combative": ["Strawberries", "Tomatoes"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/20/Boerenkool.jpg",
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
    "zones": ["2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "compatable": ["Beans", "Celery", "Cucumbers", "Dill", "Kale", "Lettuce", "Onions", "Potatoes", "Sage", "Spinach", "Thyme"],
    "combative": ["Broccoli", "Cauliflower", "Strawberries", "Tomatoes"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Chou_1.jpg"
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
    "zones": ["3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b"],
    "compatable": ["Beans", "Beets", "Celery", "Cucumbers", "Onions", "Potatoes", "Sage"],
    "combative": ["Cabbage", "Cauliflower", "Lettuce", "Pole Beans", "Tomatoes"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Broccoli_flowers_2525385935_e13d4de4c4_b.jpg"
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
    "zones": ["2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "compatable": ["Dill", "Lettuce", "Radishes", "Sage", "Spinach", "Turnips"],
    "combative": ["Tomatoes"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Brussels_Sprouts_ready_for_harvest.jpg"
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
    "zones": ["4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b", "11a", "11b", "12a", "12b", "13a", "13b"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/28/Cantaloupes.jpg"
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
    "zones": ["2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "compatable": ["Beans", "Lettuce", "Onions", "Peas", "Radishes", "Rosemary", "Sage", "Tomatoes"],
    "combative": ["Dill", "Parsley"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/3/32/Carrots_of_many_colors.jpg"
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
    "zones": ["2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "compatable": ["Beans", "Broccoli", "Cabbage", "Cauliflower", "Leeks", "Spinach", "Tomatoes"],
    "combative": [""],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Celery_%282905891576%29.jpg"
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
    "zones": ["2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/en/2/28/Collards_in_container.jpg"
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
    "zones": ["3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "compatable": ["Beans", "Cucumbers", "Lettuce", "Melons", "Peas", "Potatoes", "Squash", "Sunflowers"],
    "combative": ["Tomatoes"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/4/4e/GreenCorn.JPG"
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
    "zones": ["3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "compatable": ["Beans", "Cucumbers", "Lettuce", "Melons", "Peas", "Potatoes", "Squash", "Sunflowers"],
    "combative": ["Tomatoes"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/6/67/Corn_blooming.jpg"
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
    "zones": ["3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "compatable": ["Beans", "Cucumbers", "Lettuce", "Melons", "Peas", "Potatoes", "Squash", "Sunflowers"],
    "combative": ["Tomatoes"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/73/Corntassel_7095.jpg"
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
    "zones": ["3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "compatable": ["Beans", "Cucumbers", "Lettuce", "Melons", "Peas", "Potatoes", "Squash", "Sunflowers"],
    "combative": ["Tomatoes"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/6/65/ZeaMays.jpg"
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
    "zones": ["3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "compatable": ["Beans", "Cucumbers", "Lettuce", "Melons", "Peas", "Potatoes", "Squash", "Sunflowers"],
    "combative": ["Tomatoes"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Klip_kukuruza_uzgojen_u_Me%C4%91imurju_%28Croatia%29.JPG"
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
    "zones": ["3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Ackersalat02.jpg"
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
    "zones": ["5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/5/52/Black-eyed_pea_pods_on_plant_in_Hong_Kong.jpg"
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
    "zones": ["2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b"],
    "compatable": ["Beans", "Broccoli", "Cabbage", "Cauliflower", "Corn", "Lettuce", "Peas", "Radishes", "Sunflowers"],
    "combative": ["Herbs", "Melons", "Potatoes"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/96/ARS_cucumber.jpg"
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
    "zones": ["3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b", "11a", "11b", "12a", "12b", "13a", "13b"],
    "compatable": ["Basil", "Beans", "Lettuce", "Peas", "Potatoes", "Spinach"],
    "combative": [""],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/76/Solanum_melongena_24_08_2012_%281%29.JPG"
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
    "zones": ["3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a", "10b", "11a", "11b", "12a", "12b", "13a", "13b"],
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/0/00/Cichorium_endivia_-_Botanischer_Garten_Mainz_IMG_5453.JPG"
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Broccoli Raab",
      "Rapini"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "BROCCOLI RAAB",
    "variety": "Broccoli Raab, Spring",
    "plantAttrURL": "https://www.burpee.com/vegetables/broccoli-raab/broccoli-raab-spring-prod000614.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/76/Rapini.jpg",
    "plantAttributes": {
      "DaysToMaturity": "50-60 days",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "24-36 inches",
      "SowMethod": "Indoor Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "6-8 weeks BLF",
      "Thin": "12 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Brokali"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "BROKALI",
    "variety": "Brokali, Apollo Hybrid",
    "plantAttrURL": "https://www.burpee.com/vegetables/brokali/brokali-apollo-hybrid-prod001617.html",
    "zone": "3-11",
    "photoURL": "https://images-na.ssl-images-amazon.com/images/I/519gsJAi%2BNL.jpg",
    "plantAttributes": {
      "DaysToMaturity": "50-60 days",
      "Sun": "Full Sun",
      "Spread": "24-28 inches",
      "Height": "24-28 inches",
      "SowMethod": "Indoor Sow",
      "PlantingTime": "Spring, Summer",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Chinese Cabbage"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CHINESE CABBAGE",
    "variety": "Chinese Cabbage, Pak Choi, Joi Choi Hybrid",
    "plantAttrURL": "https://www.burpee.com/vegetables/cabbages/chinese-cabbage-pak-choi-joi-choi-hybrid-prod000625.html",
    "zone": "3-11",
    "photoURL": "http://www.koshercrops.com/uploads/9/4/4/1/9441768/s425178637313967570_p14_i1_w355.jpeg",
    "plantAttributes": {
      "DaysToMaturity": "55 days",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "18-20 inches",
      "SowMethod": "Indoor Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "4-6 weeks BLF",
      "Thin": "16 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Cowpeas"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "COWPEAS",
    "variety": "Cowpea, Phenomenal",
    "plantAttrURL": "https://www.burpee.com/vegetables/cowpeas/cowpea-phenomenal-prod500511.html",
    "zone": "5-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/d/d0/BlackEyedPeas.JPG",
    "plantAttributes": {
      "DaysToMaturity": "65 days",
      "Sun": "Full Sun",
      "Spread": "24-36 inches",
      "Height": "24 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "After Last Frost",
      "Thin": "4 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Eggplants"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "EGGPLANTS",
    "variety": "Eggplant, Black Beauty",
    "plantAttrURL": "https://www.burpee.com/vegetables/eggplants/eggplant-black-beauty-prod000706.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/76/Solanum_melongena_24_08_2012_%281%29.JPG",
    "plantAttributes": {
      "DaysToMaturity": "74 days",
      "FruitSize": "4-5 inches",
      "Sun": "Full Sun",
      "Spread": "16 inches",
      "Height": "18-24 inches",
      "SowMethod": "Indoor Sow",
      "PlantingTime": "Spring",
      "SowTime": "8-12 weeks BLF",
      "Thin": "24 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Gourds"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "GOURDS",
    "variety": "Gourd, Daisy Gourd",
    "plantAttrURL": "https://www.burpee.com/vegetables/gourds/gourd-daisy-gourd--prod003189.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/28/Gourds_-_grown_in_the_garden.JPG",
    "plantAttributes": {
      "DaysToMaturity": "91-98 days",
      "FruitSize": "2-3 inches",
      "Sun": "Full Sun",
      "Spread": "96 inches",
      "Height": "24-36 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring",
      "SowTime": "After Last Frost",
      "Thin": "36 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Melon"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "HONEYDEW",
    "variety": "Melon, Honeydew Green Flesh Organic",
    "plantAttrURL": "https://www.burpee.com/vegetables/gourds/gourd-daisy-gourd--prod003189.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Cantaloupe_Melon_cross_section.png",
    "plantAttributes": {
      "DaysToMaturity": "91-98 days",
      "FruitSize": "2-3 inches",
      "Sun": "Full Sun",
      "Spread": "96 inches",
      "Height": "24-36 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring",
      "SowTime": "After Last Frost",
      "Thin": "36 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Horseradish"
    ],
    "zones": [
      "3a",
      "3b",
      "4a",
      "4b",
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "HORSERADISH",
    "variety": "Horseradish, Maliner Kren",
    "plantAttrURL": "https://www.burpee.com/vegetables/horseradish/horseradish-maliner-kren-69039.html",
    "zone": "3-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Armoracia_rusticana.jpg",
    "plantAttributes": {
      "DaysToMaturity": "140-160 days",
      "FruitSize": "8 inches",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "20-24 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "After Last Frost",
      "Thin": "12 inches",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Leeks"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "LEEKS",
    "variety": "Leek, Lancelot",
    "plantAttrURL": "https://www.burpee.com/vegetables/leeks/leek-lancelot--prod099691.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/90/Leeks.JPG",
    "plantAttributes": {
      "DaysToMaturity": "75 days",
      "FruitSize": "12-14 inches",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "24 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "8 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Mesclun"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "MESCLUN",
    "variety": "Lettuce, Buttercrunch",
    "plantAttrURL": "https://www.burpee.com/vegetables/mesclun/mesclun-sweet-salad-mix-prod000763.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Salade_mesclun_et_ch%C3%A8vre_chaud_sur_toasts.jpg",
    "plantAttributes": {
      "DaysToMaturity": "30 days",
      "Sun": "Full Sun, Part Sun",
      "Spread": "6 inches",
      "Height": "9-15 inches",
      "SowMethod": "Direct Sow/Indoor Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "1 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Microgreens"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "MICROGREENS",
    "variety": "Microgreens Burpee's Mix",
    "plantAttrURL": "https://www.burpee.com/vegetables/microgreens/microgreens-burpees-mix-62139A.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Red_Cabbage_Microgreens.jpg",
    "plantAttributes": {
      "DaysToMaturity": "14-28 days",
      "Sun": "Full Sun, Part Sun",
      "Height": "2-3 inches",
      "SowMethod": "Direct Sow/Indoor Sow",
      "PlantingTime": "Fall, Spring, Summer",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Parsnips"
    ],
    "zones": [
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
    "compatable": [
      "Bush Beans",
      "Pepper",
      "Potato",
      "Radish",
      "Fruit Trees"
    ],
    "combative": [
      "Carrot",
      "Celery"
    ],
    "commonName": "PARSNIPS",
    "variety": "Parsnip, Hollow Crown",
    "plantAttrURL": "https://www.burpee.com/vegetables/parsnips/parsnip-hollow-crown-50336A.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/b/b7/PastinakePflanzegeerntet.jpg",
    "plantAttributes": {
      "DaysToMaturity": "105 days",
      "FruitSize": "12 inches",
      "Sun": "Full Sun",
      "Spread": "8 inches",
      "Height": "10-15 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "4 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Pumpkins"
    ],
    "zones": [
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
    "compatable": [
      "Corn",
      "Squash",
      "Nasturtium",
      "Beans",
      "Oregano",
      "Radish"
    ],
    "combative": [
      "Potato"
    ],
    "commonName": "PUMPKINS",
    "variety": "Pumpkin, Cherokee Bush",
    "plantAttrURL": "https://www.burpee.com/vegetables/pumpkins/pumpkin-cherokee-bush-prod500403.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/5/5c/FrenchMarketPumpkinsB.jpg",
    "plantAttributes": {
      "DaysToMaturity": "60-70 days",
      "FruitWeight": "5-8 pounds",
      "Sun": "Full Sun",
      "Spread": "48-58 inches",
      "Height": "14-24 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring, Summer",
      "SowTime": "After Last Frost",
      "Thin": "4 feet",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Rhubarb"
    ],
    "zones": [
      "3a",
      "3b",
      "4a",
      "4b",
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "RHUBARB",
    "variety": "Rhubarb, Crimson Red",
    "plantAttrURL": "https://www.burpee.com/vegetables/rhubarb/rhubarb-crimson-red-prod003198.html",
    "zone": "3-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Rheum_rhabarbarum.2006-04-27.uellue.jpg",
    "plantAttributes": {
      "DaysToMaturity": "365 days",
      "Sun": "Full Sun",
      "Spread": "24-36 inches",
      "Height": "24-36 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "36 inches",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Rutabaga"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "RUTABAGA",
    "variety": "Rutabaga, Burpee's Purple Top",
    "plantAttrURL": "https://www.burpee.com/vegetables/rutabaga/rutabaga--burpees-purple-top-61267A.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Rutabaga%2C_variety_nadmorska.JPG",
    "plantAttributes": {
      "DaysToMaturity": "90 days",
      "FruitSize": "4-6 inches",
      "Sun": "Full Sun",
      "Spread": "7 inches",
      "Height": "12-14 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Fall, Summer",
      "SowTime": "Before First Frost",
      "Thin": "7 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Onion"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "SCALLIONS",
    "variety": "Bunching Onion, Evergreen Long White",
    "plantAttrURL": "https://www.burpee.com/vegetables/onions/bunching-onion-evergreen-long-white-prod000771.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/d/da/CSA-Red-Spring-Onions.jpg",
    "plantAttributes": {
      "Type": "Bunching",
      "DaysToMaturity": "60-120 days",
      "FruitSize": "1 inches",
      "Sun": "Full Sun",
      "Spread": "4 inches",
      "Height": "10-12 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "4 inches"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Shallots"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "SHALLOTS",
    "variety": "Shallots, Dutch Yellow",
    "plantAttrURL": "https://www.burpee.com/vegetables/shallots/shallots-dutch-yellow-prod000890.html",
    "zone": "3-11",
    "photoURL": "https://en.wikipedia.org/wiki/Shallot#/media/File:Shallots_-_sliced_and_whole.jpg",
    "plantAttributes": {
      "DaysToMaturity": "90-120 days",
      "FruitSize": "2 inches",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "30-35 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "3 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Beans"
    ],
    "zones": [
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
    "compatable": [
      "Corn",
      "Sunflower",
      "Asparagus",
      "Potato"
    ],
    "combative": [
      "Beans",
      "Onions",
      "Garlic"
    ],
    "commonName": "SOYBEAN",
    "variety": "Bean, Soy, Midori Giant",
    "plantAttrURL": "https://www.burpee.com/vegetables/beans/bean-soy-midori-giant-prod003170.html",
    "zone": "5-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Glycine_max_003.JPG",
    "plantAttributes": {
      "Type": "Bush Soy",
      "DaysToMaturity": "68-80 days",
      "FruitSize": "2-3 inches",
      "Sun": "Full Sun",
      "Spread": "18 inches",
      "Height": "20-24 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring, Summer",
      "SowTime": "After Last Frost",
      "Thin": "18 inches"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Sweet Potato"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "SWEET POTATOES",
    "variety": "Sweet Potato, Vardaman",
    "plantAttrURL": "https://www.burpee.com/vegetables/sweet-potatoes/sweet-potato-vardaman-prod000946.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/5/58/Ipomoea_batatas_006.JPG",
    "plantAttributes": {
      "DaysToMaturity": "100 days",
      "Sun": "Full Sun",
      "Spread": "36-48 inches",
      "Height": "6-10 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring",
      "SowTime": "After Last Frost",
      "Thin": "12 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Tomatillos"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "TOMATILLOES",
    "variety": "Tomatillo, Green Organic",
    "plantAttrURL": "https://www.burpee.com/vegetables/tomatillos/tomatillo-green-organic-prod000954.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/3/31/Physalis_ixocarpa.JPG",
    "plantAttributes": {
      "DaysToMaturity": "100 days",
      "FruitSize": "2-3 inches",
      "Sun": "Full Sun",
      "Spread": "36-48 inches",
      "Height": "36-48 inches",
      "SowMethod": "Indoor Sow",
      "PlantingTime": "Spring",
      "SowTime": "6-8 weeks BLF",
      "Thin": "36 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Turnips"
    ],
    "zones": [
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
    "compatable": [
      "Broccoli",
      "Peas",
      "Cabbage"
    ],
    "combative": [
      "Potato",
      "Radish",
      "Carrot",
      "Mustard"
    ],
    "commonName": "TURNIPS",
    "variety": "Turnip, Purple Top White Globe",
    "plantAttrURL": "https://www.burpee.com/vegetables/turnips/turnip-purple-top-white-globe-prod001185.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Turnip_2622027.jpg",
    "plantAttributes": {
      "DaysToMaturity": "55 days",
      "FruitSize": "1-3 inches",
      "Sun": "Full Sun",
      "Spread": "12-15 inches",
      "Height": "12-15 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "4 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables",
      "fruit"
    ],
    "plantClass": [
      "Watermelon"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "WATERMELON",
    "variety": "Watermelon, Bush Sugar Baby",
    "plantAttrURL": "https://www.burpee.com/fruit/watermelon/watermelon-bush-sugar-baby-prod000553.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg",
    "plantAttributes": {
      "DaysToMaturity": "80 days",
      "FruitWeight": "12 pounds",
      "Sun": "Full Sun",
      "Spread": "24-36 inches",
      "Height": "15-24 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring",
      "SowTime": "After Last Frost",
      "Thin": "24 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Cucumbers"
    ],
    "zones": [
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
    "compatable": [
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
    "combative": [
      "Potato",
      "Sage"
    ],
    "commonName": "CUCUMBERS",
    "variety": "Cucumber, Bragger Hybrid",
    "plantAttrURL": "https://www.burpee.com/vegetables/cucumbers/cucumber-bragger-hybrid-prod500118.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/96/ARS_cucumber.jpg",
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
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Kohlrabi"
    ],
    "zones": [
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
    "compatable": [
      "Cucumber",
      "Thyme",
      "Sage",
      "Cabbage",
      "Cauliflower",
      "Beets",
      "Onion"
    ],
    "combative": [
      "Climbing Bean",
      "Pepper",
      "Tomato",
      "Fennel"
    ],
    "commonName": "KOHLRABI",
    "variety": "Kohlrabi, Sweet Vienna",
    "plantAttrURL": "https://www.burpee.com/vegetables/kohlrabi/kohlrabi-sweet-vienna--prod000727.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/a/a2/GreenKohlrabi.jpg",
    "plantAttributes": {
      "DaysToMaturity": "45 days",
      "FruitSize": "2-3 inches",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "9-15 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "4 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Lettuce"
    ],
    "zones": [
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
    "compatable": [
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
    "combative": [
      "Cabbage",
      "Parsley",
      "Celery"
    ],
    "commonName": "LETTUCE",
    "variety": "Lettuce, Buttercrunch",
    "plantAttrURL": "https://www.burpee.com/vegetables/leeks/leek-lancelot--prod099691.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/d/da/Iceberg_lettuce_in_SB.jpg",
    "plantAttributes": {
      "DaysToMaturity": "75 days",
      "FruitSize": "12-14 inches",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "24 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "8 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Onion"
    ],
    "zones": [
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
    "compatable": [
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
    "combative": [
      "Peas",
      "Lentils",
      "Asparagus"
    ],
    "commonName": "ONIONS",
    "variety": "Onion Collection, Sets",
    "plantAttrURL": "https://www.burpee.com/vegetables/onions/onion-collection-sets-prod000770.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/93/ARS_red_onion.jpg",
    "plantAttributes": {
      "Type": "Long Day",
      "DaysToMaturity": "70-80 days",
      "FruitSize": "1-2 inches",
      "Sun": "Full Sun",
      "Spread": "4 inches",
      "Height": "10-12 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "4 inches"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Peas"
    ],
    "zones": [
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
    "compatable": [
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
    "combative": [
      "Chive",
      "Potato",
      "Onion"
    ],
    "commonName": "PEAS",
    "variety": "Pea, Sugar Prince",
    "plantAttrURL": "https://www.burpee.com/vegetables/peas/pea-sugar-prince-prod500390.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/1/11/Peas_in_pods_-_Studio.jpg",
    "plantAttributes": {
      "Type": "Snap Edible Pod",
      "DaysToMaturity": "68-70 days",
      "FruitSize": "3-4 inches",
      "Sun": "Full Sun",
      "Spread": "10-12 inches",
      "Height": "26-30 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Fall, Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "4 inches"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Peppers"
    ],
    "zones": [
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
    "compatable": [
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
    "combative": [
      "Beans",
      "Kale",
      "Apricot",
      "Fennel",
      "Kohlrabi",
      "Brussels",
      "Sprouts"
    ],
    "commonName": "PEPPERS",
    "variety": "Pepper, Sweet, California Wonder",
    "plantAttrURL": "https://www.burpee.com/vegetables/peppers/pepper-sweet-california-wonder-prod000825.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/99/Colorful_Bell_Peppers.JPG",
    "plantAttributes": {
      "Type": "Bell",
      "DaysToMaturity": "75 days",
      "FruitSize": "4 inches",
      "Sun": "Full Sun",
      "Spread": "12 inches",
      "Height": "18-24 inches",
      "SowMethod": "Indoor Sow",
      "PlantingTime": "Spring",
      "SowTime": "8-12 weeks BLF",
      "Thin": "24 inches"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Potatoes"
    ],
    "zones": [
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
    "compatable": [
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
    "combative": [
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
    "commonName": "POTATOES",
    "variety": "Potato, Rio Grande Russet",
    "plantAttrURL": "https://www.burpee.com/vegetables/potatoes/potato-rio-grande-russet-prod003197.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg",
    "plantAttributes": {
      "DaysToMaturity": "59-65 days",
      "FruitSize": "3-5 inches",
      "Sun": "Full Sun",
      "Spread": "34 inches",
      "Height": "38 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring",
      "SowTime": "2-4 weeks BLF",
      "Thin": "12 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Radish"
    ],
    "zones": [
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
    "compatable": [
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
    "combative": [
      "Grape Vine",
      "Brussels Sprout",
      "Turnip"
    ],
    "commonName": "RADISH",
    "variety": "Radish, Solaris Hybrid",
    "plantAttrURL": "https://www.burpee.com/vegetables/pumpkins/pumpkin-cherokee-bush-prod500403.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Radish_3371103037_4ab07db0bf_o.jpg",
    "plantAttributes": {
      "DaysToMaturity": "60-70 days",
      "FruitWeight": "5-8 pounds",
      "Sun": "Full Sun",
      "Spread": "48-58 inches",
      "Height": "14-24 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring, Summer",
      "SowTime": "After Last Frost",
      "Thin": "4 feet",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Tomatoes"
    ],
    "zones": [
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
    "compatable": [
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
    "combative": [
      "Corn",
      "Dill",
      "Potato",
      "Fennel",
      "Kohlrabi",
      "Walnut"
    ],
    "commonName": "TOMATOES",
    "variety": "Tomato, Early Girl Hybrid Tomato, Early ",
    "plantAttrURL": "https://www.burpee.com/vegetables/tomatoes/tomato-early-girl-hybrid-prod000986.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg",
    "plantAttributes": {
      "Type": "Slicer",
      "FruitBearing": "Indeterminate",
      "DaysToMaturity": "59 days",
      "FruitWeight": "4-5 ounces",
      "Sun": "Full Sun",
      "Spread": "52 inches",
      "Height": "55 inches",
      "SowMethod": "Indoor Sow",
      "SowTime": "6-8 weeks BLF",
      "Thin": "36 inches"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "vegetables"
    ],
    "plantClass": [
      "Squash"
    ],
    "zones": [
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
    "compatable": [
      "Corn",
      "Marjoram",
      "Parsnip"
    ],
    "combative": [
      "Potato"
    ],
    "commonName": "ZUCCHINI",
    "variety": "Squash, Summer, Fordhook Zucchini Organic Squash, Summer, Ford",
    "plantAttrURL": "https://www.burpee.com/vegetables/squash/squash-summer-fordhook-zucchini-organic-prod002150.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Zucchini-Whole.jpg",
    "plantAttributes": {
      "Type": "Summer Zucchini",
      "DaysToMaturity": "57 days",
      "FruitSize": "6-8 inches",
      "Sun": "Full Sun",
      "Spread": "48-60 inches",
      "Height": "24-30 inches",
      "SowMethod": "Direct Sow",
      "PlantingTime": "Spring, Summer",
      "SowTime": "After Last Frost",
      "Thin": "36 inches"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CARNATIONS",
    "variety": "Carnation, Burpee's Super Giant Mix",
    "plantAttrURL": "https://www.burpee.com/perennials/carnations/carnation-burpees-super-giant-mix-46235A.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Moondust-carnation.JPG",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "18 inches",
      "Spread": "18 inches",
      "BloomSeason": "Fall, Summer",
      "OrnamentalUse": "Borders, Cut Flowers, Thriller",
      "PlantingTime": "Spring",
      "Genus": "Dianthus",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CHINESE LANTERNS",
    "variety": "Chinese Lantern, Strawberry Ground Cherry",
    "plantAttrURL": "https://www.burpee.com/perennials/chinese-lanterns/chinese-lantern-strawberry-ground-cherry-46490A.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Physalis_alkekengi_franchetii1SHSU.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "24 inches",
      "Spread": "24 inches",
      "BloomSeason": "Fall",
      "OrnamentalUse": "Borders, Dried Flowers",
      "PlantingTime": "Spring",
      "Genus": "Physalis",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CLEMATIS",
    "variety": "Clematis, Ernest Markham (red)",
    "plantAttrURL": "https://www.burpee.com/perennials/clematis/clematis-ernest-markham-red-prod002339.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/70/Clematis_%27Nelly_Moser%27.JPG",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "120-180 inches",
      "Spread": "12-36 inches",
      "BloomSeason": "Summer",
      "ResistantTo": "Deer, Rabbit",
      "OrnamentalUse": "Trellis or Lattice",
      "PlantingTime": "Fall, Spring",
      "Genus": "Clematis",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "COLUMBINE",
    "variety": "Columbine, Blue Star",
    "plantAttrURL": "https://www.burpee.com/perennials/columbine/columbine-blue-star-prod000017.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Wald-Akelei.JPG",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "24 inches",
      "Spread": "12-18 inches",
      "BloomSeason": "Spring, Summer",
      "ResistantTo": "Deer, Disease, Pests, Rabbit",
      "OrnamentalUse": "Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Aquilegia",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "COREOPSIS",
    "variety": "Coreopsis, Early Sunrise",
    "plantAttrURL": "https://www.burpee.com/perennials/coreopsis/coreopsis-early-sunrise-prod000023.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Coreopsisgigantea.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "24 inches",
      "Spread": "15-18 inches",
      "BloomSeason": "Spring, Summer",
      "ResistantTo": "Deer, Drought",
      "OrnamentalUse": "Beds, Borders, Container",
      "PlantingTime": "Fall, Spring",
      "Genus": "Coreopsis",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "FOXGLOVES",
    "variety": "Foxglove, Polkadot Princess",
    "plantAttrURL": "https://www.burpee.com/perennials/foxgloves/foxglove-polkadot-princess-prod22355.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/74/Digitalis_purpurea2.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "23-35 inches",
      "Spread": "20-23 inches",
      "BloomSeason": "Spring",
      "ResistantTo": "Deer, Rabbit",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Digitalis",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "GLORIOSA DAISIES",
    "variety": "Gloriosa Daisy, Gloriosa Double Gold",
    "plantAttrURL": "https://www.burpee.com/perennials/gloriosa-daisies/gloriosa-daisy-gloriosa-double--gold-prod000051.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/1/1e/BESusan.JPG",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "36 inches",
      "Spread": "18-24 inches",
      "BloomSeason": "Fall, Summer",
      "ResistantTo": "Deer, Drought",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Spring, Summer",
      "Genus": "Rudbeckia",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "ALYSSUM",
    "variety": "Alyssum, Carpet Of Snow",
    "plantAttrURL": "https://www.burpee.com/flowers/alyssum/alyssum-carpet-of-snow-prod000118.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Alyssum_montanum_ENBLA06.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "4 inches",
      "Spread": "5-8 inches",
      "OrnamentalUse": "Beds, Container",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "Flowering": "Yes",
      "BloomDuration": "4 weeks",
      "Flowercolor": "White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "AMARANTHUS",
    "variety": "Amaranthus, Love Lies Bleeding",
    "plantAttrURL": "https://www.burpee.com/flowers/amaranthus/amaranthus-love-lies-bleeding-prod000122.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/91/Amaranthus_tricolor0.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "36-60 inches",
      "Spread": "14-16 inches",
      "OrnamentalUse": "Borders, Dried Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "6 weeks",
      "Flowercolor": "Red"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
      "10b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "AMMI MAJUS",
    "variety": "Ammi Majus, Queen Anne's Lace",
    "plantAttrURL": "https://www.burpee.com/flowers/ammi-majus/ammi-majus-queen-annes-lace-36202A.html",
    "zone": "3-10",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Ammi_majus_flowerhead1_NWS_%2815367278999%29.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "36-48 inches",
      "Spread": "14-16 inches",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "Flowering": "Yes",
      "BloomDuration": "4 weeks",
      "Flowercolor": "White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "ANGELONIA",
    "variety": "Angelonia, Archangel Cherry",
    "plantAttrURL": "https://www.burpee.com/flowers/angelonia/angelonia-archangel-cherry--prod100059.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Angelonia.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "12-14 inches",
      "Spread": "10-12 inches",
      "OrnamentalUse": "Beds, Borders",
      "LifeCycle": "Annual",
      "Flowering": "Yes",
      "BloomDuration": "12 weeks",
      "Flowercolor": "Red"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "3a",
      "3b",
      "4a",
      "4b",
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "ACHILLEA",
    "variety": "Angelonia, Archangel Cherry",
    "plantAttrURL": "https://www.burpee.com/perennials/perennial-pollinators/achillea-cherries-jubilee-198254.html",
    "zone": "3-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Achillea_millefolium.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "24-28 inches",
      "Spread": "24-28 inches",
      "BloomSeason": "Spring, Summer",
      "ResistantTo": "Deer, Drought",
      "OrnamentalUse": "Beds, Borders, Cut Flowers, Dried Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Achillea",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CHRYSANTHEMUM",
    "variety": "Chrysanthemum, Matchsticks",
    "plantAttrURL": "https://www.burpee.com/perennials/chrysanthemums/chrysanthemum-matchsticks-prod003057.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Chrysanthemum_November_2007_Osaka_Japan.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "18-24 inches",
      "Spread": "18-24 inches",
      "BloomSeason": "Fall",
      "ResistantTo": "Cold, Deer, Rabbit",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Chrysanthemum",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "3a",
      "3b",
      "4a",
      "4b",
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CROCUS",
    "variety": "Crocus, Orange Monarch",
    "plantAttrURL": "https://www.burpee.com/perennials/crocus/crocus-orange-monarch--prod099481.html",
    "zone": "3-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/91/%D8%A8%D8%B1%D8%AF%D8%A7%D8%B4%D8%AA_%D8%B2%D8%B9%D9%81%D8%B1%D8%A7%D9%86_%D8%AF%D8%B1_%D8%B1%D9%88%D8%B3%D8%AA%D8%A7%DB%8C_%D8%B2%D8%A7%D9%84%DB%8C_%D8%B9%DA%A9%D8%B3_%D8%A7%D8%B2_%D8%A7%D8%AD%D9%85%D8%AF_%D9%86%DB%8C%DA%A9_%DA%AF%D9%81%D8%AA%D8%A7%D8%B1.JPG",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "4-6 inches",
      "Spread": "2-3 inches",
      "BloomSeason": "Spring",
      "ResistantTo": "Cold",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Fall",
      "Genus": "Crocus",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "3a",
      "3b",
      "4a",
      "4b",
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "DAFFODIL BULBS",
    "variety": "Daffodil, Geranium",
    "plantAttrURL": "https://www.burpee.com/perennials/daffodil-bulbs/daffodil-geranium-prod001392.html",
    "zone": "3-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/d/de/Narcissus.poeticus.1658.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "14-20 inches",
      "Spread": "4-6 inches",
      "BloomSeason": "Spring",
      "ResistantTo": "Cold, Deer",
      "OrnamentalUse": "Beds, Borders, Container, Cut Flowers",
      "PlantingTime": "Fall",
      "Genus": "Narcissus",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "3a",
      "3b",
      "4a",
      "4b",
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "DAYLILIES",
    "variety": "Daylily, EveryDaylily Pink Cream",
    "plantAttrURL": "https://www.burpee.com/perennials/daylilies/daylily-everydaylily-pink-cream-prod500086.html",
    "zone": "3-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/6/66/Hemerocallis_lilioasphodelus.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "12-16 inches",
      "Spread": "12-16 inches",
      "BloomSeason": "Summer",
      "ResistantTo": "Cold",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Spring",
      "Genus": "Hemerocallis",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "3a",
      "3b",
      "4a",
      "4b",
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "DELPHINIUM",
    "variety": "Delphinium, Fordhook Cottage Garden Mix",
    "plantAttrURL": "https://www.burpee.com/perennials/delphinium/delphinium-fordhook-cottage-garden-mix-prod002679.html",
    "zone": "3-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/25/Delosperma_floribundum_Starburst_4zz.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "36-48 inches",
      "Spread": "24-30 inches",
      "BloomSeason": "Summer",
      "ResistantTo": "Deer",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Delphinium",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "3a",
      "3b",
      "4a",
      "4b",
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "FERNS",
    "variety": "Fern, Autumn",
    "plantAttrURL": "https://www.burpee.com/perennials/ferns/fern-autumn-prod000041.html",
    "zone": "3-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/71/Athyrium_filix-femina.jpg",
    "plantAttributes": {
      "Sun": "Full Shade, Part Sun",
      "Height": "24-30 inches",
      "Spread": "15-18 inches",
      "ResistantTo": "Rabbit",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Fall, Spring",
      "Genus": "Dryopteris",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "3a",
      "3b",
      "4a",
      "4b",
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "GALANTHUS",
    "variety": "Galanthus elwesii",
    "plantAttrURL": "https://www.burpee.com/perennials/galanthus/galanthus-elwesii-prod002955.html",
    "zone": "3-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/23/Galanthus_nivalis.jpg",
    "plantAttributes": {
      "Sun": "Full Shade, Full Sun, Part Sun",
      "Height": "4-6 inches",
      "Spread": "2-3 inches",
      "BloomSeason": "Spring",
      "ResistantTo": "Cold, Deer, Rabbit",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Fall",
      "Genus": "Galanthus",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "3a",
      "3b",
      "4a",
      "4b",
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "HEUCHERA",
    "variety": "Heuchera, Obsidian",
    "plantAttrURL": "https://www.burpee.com/perennials/heuchera/heuchera-obsidian-prod022834.html",
    "zone": "3-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/0/0e/San_Gabriel_Mountains_coralbells.jpg",
    "plantAttributes": {
      "Sun": "Full Shade, Part Sun",
      "Height": "8-10 inches",
      "Spread": "12-16 inches",
      "BloomSeason": "Summer",
      "ResistantTo": "Cold, Poor Soil",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Fall, Spring",
      "Genus": "Heuchera",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "3a",
      "3b",
      "4a",
      "4b",
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "HOLLYHOCK",
    "variety": "Hollyhock, Chaters Maroon",
    "plantAttrURL": "https://www.burpee.com/perennials/hollyhock/hollyhock-chaters-maroon-prod000058.html",
    "zone": "3-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/96/Alcea_setosa.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "60 inches",
      "Spread": "36 inches",
      "BloomSeason": "Spring, Summer",
      "ResistantTo": "Cold, Rabbit",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Fall, Spring",
      "Genus": "Alcea",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "3a",
      "3b",
      "4a",
      "4b",
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "HOSTAS",
    "variety": "Hosta, First Frost",
    "plantAttrURL": "https://www.burpee.com/perennials/hostas/hosta-first-frost-prod000062.html",
    "zone": "3-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Hosta_Bressingham_Blue.JPG",
    "plantAttributes": {
      "Sun": "Full Shade, Part Sun",
      "Height": "15 inches",
      "Spread": "24 inches",
      "BloomSeason": "Summer",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Fall, Spring",
      "Genus": "Hosta",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "3a",
      "3b",
      "4a",
      "4b",
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "HYDRANGEAS",
    "variety": "Hydrangea, Ruby Slippers",
    "plantAttrURL": "https://www.burpee.com/perennials/hydrangeas/hydrangea-ruby-slippers-prod099531.html",
    "zone": "3-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/0/06/Blue_Hydrangea.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "36-48 inches",
      "Spread": "36-60 inches",
      "BloomSeason": "Summer",
      "ResistantTo": "Rabbit",
      "OrnamentalUse": "Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Hydrangea",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "3a",
      "3b",
      "4a",
      "4b",
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "LUPINE",
    "variety": "Lupine, Russell Hybrid Mixed Colors",
    "plantAttrURL": "https://www.burpee.com/perennials/lupine/lupine-russell-hybrid-mixed-colors-prod000077.html",
    "zone": "3-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/4/47/Lupinus_field%2C_St._John%27s%2C_Newfoundland.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "36 inches",
      "Spread": "18-24 inches",
      "BloomSeason": "Spring, Summer",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Spring",
      "Genus": "Lupinus",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CHRYSANTHEMUM",
    "variety": "Garden Mum, Mammoth Daisy Red",
    "plantAttrURL": "https://www.burpee.com/perennials/chrysanthemums/garden-mum-mammoth-daisy-red-prod002463.html",
    "zone": "3-11",
    "photoURL": "https://pics.davesgarden.com/pics/2013/09/15/absinthe27/8bdaa2.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "20-36 inches",
      "Spread": "20-48 inches",
      "BloomSeason": "Fall",
      "ResistantTo": "Cold, Deer, Rabbit",
      "OrnamentalUse": "Beds, Borders, Container, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Chrysanthemum",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "3a",
      "3b",
      "4a",
      "4b",
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "TULIP BULBS",
    "variety": "Tulip, Kikomachi",
    "plantAttrURL": "https://www.burpee.com/perennials/tulip-bulbs/tulip-kikomachi--prod099502.html",
    "zone": "3-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/9e/%D7%A6%D7%91%D7%A2%D7%95%D7%A0%D7%99%D7%9D.JPG",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "16-20 inches",
      "Spread": "5-6 inches",
      "BloomSeason": "Spring",
      "ResistantTo": "Cold",
      "OrnamentalUse": "Beds, Borders, Container, Cut Flowers",
      "PlantingTime": "Fall",
      "Genus": "Tulipa",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "AGASTACHES",
    "variety": "Agastache, Rose Mint",
    "plantAttrURL": "https://www.burpee.com/perennials/agastaches/agastache-rose-mint-prod000116.html",
    "zone": "5-12",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/29/Agastache_rupestris2_lg.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "24 inches",
      "Spread": "10-14 inches",
      "BloomSeason": "Fall, Summer",
      "ResistantTo": "Deer, Drought, Heat",
      "OrnamentalUse": "Beds, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Agastache",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "ASTILBE",
    "variety": "Astilbe, Red Sentinel",
    "plantAttrURL": "https://www.burpee.com/perennials/astilbe/astilbe-red-sentinel-prod022827.html",
    "zone": "5-12",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Astilbe_arendsii1.jpg",
    "plantAttributes": {
      "Sun": "Full Shade, Part Sun",
      "Height": "24-30 inches",
      "Spread": "16-24 inches",
      "BloomSeason": "Summer",
      "ResistantTo": "Deer, Rabbit",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Astilbe",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CAMPANULA",
    "variety": "Campanula, Meteora",
    "plantAttrURL": "https://www.burpee.com/perennials/campanula/campanula-meteora-43160A.html",
    "zone": "5-12",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Campanula_persicifolia_Tehumardi_Saaremaa.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "10 inches",
      "Spread": "10-12 inches",
      "BloomSeason": "Spring, Summer",
      "ResistantTo": "Deer, Rabbit",
      "OrnamentalUse": "Beds, Borders, Container",
      "PlantingTime": "Spring",
      "Genus": "Campanula",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "DELOSPERMA",
    "variety": "Delosperma, Fire Wonder",
    "plantAttrURL": "https://www.burpee.com/perennials/delosperma/delosperma-fire-wonder--prod022586.html",
    "zone": "5-12",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/25/Delosperma_floribundum_Starburst_4zz.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "6-8 inches",
      "Spread": "20-24 inches",
      "BloomSeason": "Summer",
      "ResistantTo": "Drought, Heat",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Fall, Spring",
      "Genus": "Delosperma",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "KNIPHOFIA",
    "variety": "Kniphofia uvaria, Red Rocket",
    "plantAttrURL": "https://www.burpee.com/perennials/kniphofia/kniphofia-uvaria-red-rocket-prod099528.html",
    "zone": "5-12",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Kniphofia02.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "20 inches",
      "Spread": "24 inches",
      "BloomSeason": "Summer",
      "ResistantTo": "Deer, Disease, Heat, Humidity, Rabbit",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Kniphofia",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "LITHODORA",
    "variety": "Lithodora, Grace Ward",
    "plantAttrURL": "https://www.burpee.com/perennials/lithodora/lithodora-grace-ward-prod002903.html",
    "zone": "5-12",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Lithodora_rosmarinifolia1598.JPG",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "6-10 inches",
      "Spread": "16-24 inches",
      "BloomSeason": "Spring, Summer",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Fall, Spring",
      "Genus": "Lithodora",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "ANEMONE",
    "variety": "Anemone, Wild Swan",
    "plantAttrURL": "https://www.burpee.com/perennials/anemone/anemone-wild-swan-prod022703.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/d/de/Anemones5.jpg",
    "plantAttributes": {
      "Sun": "Part Sun",
      "Height": "16-18 inches",
      "Spread": "18-24 inches",
      "BloomSeason": "Fall, Summer",
      "ResistantTo": "Deer",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Anemone",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "ALLIUMS",
    "variety": "Allium, Pink Moon",
    "plantAttrURL": "https://www.burpee.com/perennials/alliums/allium-pink-moon--prod100100.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/94/Selection_of_cultivated_Alliums.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "12-16 inches",
      "Spread": "12-16 inches",
      "BloomSeason": "Fall, Summer",
      "ResistantTo": "Deer",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Allium",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "AMSONIA",
    "variety": "Amsonia, Blue Ice",
    "plantAttrURL": "https://www.burpee.com/perennials/amsonia/amsonia-blue-ice--17001.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Amsonia-tabernaemontana-flowers.JPG",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "20-24 inches",
      "Spread": "20-24 inches",
      "BloomSeason": "Spring, Summer",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Fall, Spring",
      "Genus": "Amsonia",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "ASTRANTIA",
    "variety": "Astrantia, Moulin Rouge",
    "plantAttrURL": "https://www.burpee.com/perennials/astrantia/astrantia-moulin-rouge-19800.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/76/Astrantia.jpg",
    "plantAttributes": {
      "Sun": "Part Sun",
      "Height": "18 inches",
      "Spread": "18 inches",
      "BloomSeason": "Spring, Summer",
      "ResistantTo": "Wet Soil",
      "OrnamentalUse": "Beds, Borders, Cut Flowers, Dried Flowers",
      "PlantingTime": "Spring",
      "Genus": "Astrantia",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "BUTTERFLY BUSH",
    "variety": "Butterfly Bush, Butterfly Hybrid Mix",
    "plantAttrURL": "https://www.burpee.com/perennials/butterfly-bush/butterfly-bush-butterfly-hybrid-mix-prod000010.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/90/BuddlejaDavidiiStrauch.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "72-96 inches",
      "Spread": "72-96 inches",
      "BloomSeason": "Fall, Summer",
      "ResistantTo": "Deer",
      "OrnamentalUse": "Borders, Cut Flowers",
      "PlantingTime": "Spring",
      "Genus": "Buddleia",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "HELENIUM",
    "variety": "Helenium, Pinwheel Collection",
    "plantAttrURL": "https://www.burpee.com/perennials/helenium/helenium-pinwheel-collection-prod003221.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Helenium_autumnale1.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "36 inches",
      "Spread": "12-24 inches",
      "BloomSeason": "Fall, Summer",
      "ResistantTo": "Deer, Rabbit",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Helenium",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "HELLEBORES",
    "variety": "Hellebore, Onyx Odyssey",
    "plantAttrURL": "https://www.burpee.com/perennials/hellebores/hellebore-onyx-odyssey--prod002862.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Helleborus_orientalis%2C_Zaaddozen_zwellen%2C_Locatie%2C_Tuinreservaat_Jonkervallei_01.jpg",
    "plantAttributes": {
      "Sun": "Full Shade, Part Sun",
      "Height": "18-24 inches",
      "Spread": "18-24 inches",
      "BloomSeason": "Spring, Winter",
      "ResistantTo": "Cold, Deer, Pests, Rabbit",
      "OrnamentalUse": "Beds, Borders, Complete Container, Container, Cut Flowers, Filler",
      "PlantingTime": "Fall, Spring",
      "Genus": "Helleborus",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "HIBISCUS",
    "variety": "Hibiscus, Honeymoon Red F1",
    "plantAttrURL": "https://www.burpee.com/perennials/hibiscus/hibiscus-honeymoon-red-f1--prod22497.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Hibiscus_flower_TZ.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "24-36 inches",
      "Spread": "24 inches",
      "BloomSeason": "Fall, Summer",
      "ResistantTo": "Drought, Heat",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Spring",
      "Genus": "Hibiscus",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "HYACINTH",
    "variety": "Hyacinth, Carnegie",
    "plantAttrURL": "https://www.burpee.com/perennials/hyacinth/hyacinth-carnegie-prod002957.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Hyacinth_-_Anglesey_Abbey.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "8-12 inches",
      "Spread": "3-4 inches",
      "BloomSeason": "Spring",
      "ResistantTo": "Cold",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Fall",
      "Genus": "Hyacinthus",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "IRIS",
    "variety": "Iris, Blatant",
    "plantAttrURL": "https://www.burpee.com/perennials/iris/iris-blatant-prod500185.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/4/49/Iris_germanica_%28Purple_bearded_Iris%29%2C_Wakehurst_Place%2C_UK_-_Diliff.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "30-36 inches",
      "Spread": "8-12 inches",
      "BloomSeason": "Fall, Spring",
      "ResistantTo": "Deer, Rabbit",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Spring",
      "Genus": "Iris",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "LUNARIA",
    "variety": "Lunaria, Money Plant",
    "plantAttrURL": "https://www.burpee.com/perennials/lunaria/lunaria-money-plant-41020A.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Lunaria_annua_flowers.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "30 inches",
      "Spread": "24-30 inches",
      "BloomSeason": "Spring, Summer",
      "OrnamentalUse": "Borders, Dried Flowers",
      "PlantingTime": "Spring",
      "Genus": "Lunaria",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "MONARDA",
    "variety": "Monarda, Bee's Knees",
    "plantAttrURL": "https://www.burpee.com/perennials/monarda/monarda-bees-knees--prod003437.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Monarda_didyma_00.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "16-20 inches",
      "Spread": "18-20 inches",
      "BloomSeason": "Summer",
      "ResistantTo": "Deer, Drought",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Fall, Spring",
      "Genus": "Monarda",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "PAINTED DAISIES",
    "variety": "Painted Daisy, Mixed Colors",
    "plantAttrURL": "https://www.burpee.com/perennials/painted-daisies/painted-daisy-mixed-colors-prod000084.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Tanacetum_cinerariifolium1.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "24 inches",
      "Spread": "12 inches",
      "BloomSeason": "Spring, Summer",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Spring",
      "Genus": "Pyrethrum",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "PENSTEMON",
    "variety": "Penstemon barbatus, Twizzle Scarlet",
    "plantAttrURL": "https://www.burpee.com/indoor-sow-flowers/penstemon-barbatus-twizzle-scarlet-prod100063.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Penstemon_palmeri_closeup-400px.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "27-30 inches",
      "Spread": "15-25 inches",
      "BloomSeason": "Fall, Summer",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Spring",
      "Genus": "Penstemon barbatus",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "PEONY",
    "variety": "Peony, Immaculee",
    "plantAttrURL": "https://www.burpee.com/perennials/peony/peony-immaculee-prod002358.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/f/fd/PaeoniaSuffruticosa7.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "24-28 inches",
      "Spread": "24-28 inches",
      "BloomSeason": "Spring",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Spring",
      "Genus": "Paeonia",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "ROSES",
    "variety": "English Rose, Queen of Sweden",
    "plantAttrURL": "https://www.burpee.com/perennials/roses/english-rose-queen-of-sweden--prod22531.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Phlox_Paniculata.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "48 inches",
      "Spread": "24 inches",
      "BloomSeason": "Spring, Summer",
      "ResistantTo": "Drought",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Spring",
      "Genus": "Rosa",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "SHASTA DAISIES",
    "variety": "Shasta Daisy, Silver Princess",
    "plantAttrURL": "https://www.burpee.com/perennials/shasta-daisies/shasta-daisy-silver-princess-prod001098.html",
    "zone": "5-6",
    "photoURL": "https://davesgarden.com/guides/pf/thumbnail.php?image=2006/01/09/Gabrielle/0206cd.jpg&widht=700&height=312",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "12 inches",
      "Spread": "18 inches",
      "BloomSeason": "Fall, Summer",
      "ResistantTo": "Deer, Drought, Rabbit",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Spring",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "SOLIDAGO",
    "variety": "Solidago (Goldenrod), Fireworks",
    "plantAttrURL": "https://www.burpee.com/perennials/solidago/solidago-goldenrod-fireworks-prod000106.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/6/62/Solidago_virgaurea_var._leiocarpa_02-2.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "36 inches",
      "Spread": "24 inches",
      "BloomSeason": "Fall, Summer",
      "ResistantTo": "Deer, Drought, Poor Soil",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Solidago",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "TRADESCANTIA",
    "variety": "Tradescantia, Blue & Gold",
    "plantAttrURL": "https://www.burpee.com/perennials/tradescantia/tradescantia-blue-and-gold-25572.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Spiderwort_Blue_Flower_2.JPG",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "24 inches",
      "Spread": "15-18 inches",
      "BloomSeason": "Spring, Summer",
      "OrnamentalUse": "Beds, Borders, Container",
      "PlantingTime": "Fall, Spring",
      "Genus": "Tradescantia",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "VERBASCUM",
    "variety": "Verbascum, Southern Charm Hybrid",
    "plantAttrURL": "https://www.burpee.com/perennials/verbascum/verbascum-southern-charm-hybrid-prod000108.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Verbascum_sinuatum_August_2007-1.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "30-36 inches",
      "Spread": "24-30 inches",
      "BloomSeason": "Spring, Summer",
      "ResistantTo": "Deer, Drought",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "5a",
      "5b",
      "6a",
      "6b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "WEIGELA",
    "variety": "Weigela florida, Spilled Wine",
    "plantAttrURL": "https://www.burpee.com/perennials/weigela/weigela-florida-spilled-wine-prod022579.html",
    "zone": "5-6",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Weigela_florida_BG_Tallinn.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "24 inches",
      "Spread": "36 inches",
      "BloomSeason": "Spring, Summer",
      "ResistantTo": "Deer",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Fall, Spring",
      "Genus": "Weigela",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "MANGAVE",
    "variety": "Mangave, Mayan Queen",
    "plantAttrURL": "https://www.burpee.com/perennials/succulents/mangave-mayan-queen-prod500508.html",
    "zone": "5-11",
    "photoURL": "https://lh3.ggpht.com/-v8OlmGQSQl4/VD7xoXKXukI/AAAAAAABCyw/7qPSJcUnDSU/s1600-h/141011_Mangave-Bloodspot_001%25255B3%25255D.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "10-12 inches",
      "Spread": "12-14 inches",
      "ResistantTo": "Heat",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Spring",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "ORNAMENTAL GRASS",
    "variety": "Eragrostis, Purple Love Grass",
    "plantAttrURL": "https://www.burpee.com/perennials/ornamental-grass/eragrostis-purple-love-grass-prod000082.html",
    "zone": "5-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Calamagrostis_x_acutiflora_%27Karl_Foerster%27.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "18-24 inches",
      "Spread": "18-24 inches",
      "BloomSeason": "Fall, Summer",
      "ResistantTo": "Deer",
      "OrnamentalUse": "Beds, Borders, Container",
      "PlantingTime": "Fall, Spring",
      "Genus": "Eragrostis",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "TRITOMA",
    "variety": "Tritoma, Red Hot Poker Mix",
    "plantAttrURL": "https://www.burpee.com/perennials/tritoma/tritoma-red-hot-poker-mix-prod001099.html",
    "zone": "5-11",
    "photoURL": "https://www.gardenia.net/rendition.slider_detail/uploads/plant/1521466740-7a19e7dbf9324a19d/39114Optimized.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "42 inches",
      "Spread": "24 inches",
      "BloomSeason": "Fall, Summer",
      "ResistantTo": "Drought",
      "OrnamentalUse": "Borders, Container",
      "PlantingTime": "Spring",
      "Genus": "Kniphofia",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
      "7a",
      "7b",
      "8a",
      "8b",
      "9a",
      "9b",
      "10a",
      "10b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "AGAPANTHUS",
    "variety": "Agapanthus orientalis, Black Pantha",
    "plantAttrURL": "https://www.burpee.com/perennials/agapanthus/agapanthus-orientalis-black-pantha-prod099639.html",
    "zone": "7-10",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/4/43/Agapanthus_africanus1.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "12-36 inches",
      "Spread": "24-36 inches",
      "BloomSeason": "Summer",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Agapanthus orientalis",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
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
      ".8b",
      "9a",
      "9b",
      "10a",
      "10b"
    ],
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "ECHINACEA",
    "variety": "Echinacea, Magnus",
    "plantAttrURL": "https://www.burpee.com/perennials/echinacea/echinacea-magnus-prod000035.html",
    "zone": "3-10",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/b/b4/EchinaceaPurpureaMaxima1a.UME.JPG",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "36 inches",
      "Spread": "15-18 inches",
      "BloomSeason": "Fall, Summer",
      "ResistantTo": "Cold, Deer, Drought, Heat, Rabbit",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Echinacea",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "ASCLEPIAS",
    "variety": "Asclepias, Red Butterfly",
    "plantAttrURL": "https://www.burpee.com/flowers/asclepias/asclepias-red-butterfly-35675A.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Asclepiascommon.JPG",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "36 inches",
      "Spread": "12 inches",
      "OrnamentalUse": "Borders, Dried Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "6 weeks",
      "Flowercolor": "Orange, Red, Yellow"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals",
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "ASTER",
    "variety": "Aster, Salmon Red",
    "plantAttrURL": "https://www.burpee.com/flowers/aster/aster-salmon-red-prod002589.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Asteraceae_-_Aster_amellus.JPG",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "20-24 inches",
      "Spread": "6-8 inches",
      "OrnamentalUse": "Beds, Borders, Container, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Orange, Red"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals",
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "BABY'S BREATH",
    "variety": "Baby's Breath, Covent Garden White",
    "plantAttrURL": "https://www.burpee.com/flowers/babys-breath/babys-breath-covent-garden-white-34421A.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/0/09/Gypsophila_repens_-_close-up_%28aka%29.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "36 inches",
      "Spread": "36 inches",
      "OrnamentalUse": "Borders, Cut Flowers, Dried Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "Flowering": "No",
      "BloomDuration": "8 weeks",
      "Flowercolor": "White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "BALSAM",
    "variety": "Balsam, Mix",
    "plantAttrURL": "https://www.burpee.com/flowers/balsam/balsam-mix-43018A.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/78/Impatiens_balsamina_28_08_2009.JPG",
    "plantAttributes": {
      "Sun": "Full Shade, Full Sun, Part Sun",
      "Height": "2-3 feet",
      "Spread": "10-12 inches",
      "OrnamentalUse": "Beds",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Pink, Red, White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "BEGONIA",
    "variety": "Begonia, Fragrant Falls Peach",
    "plantAttrURL": "https://www.burpee.com/flowers/begonia/begonia-fragrant-falls-peach-prod500047.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Yellow_begonia.jpg",
    "plantAttributes": {
      "Sun": "Full Shade, Part Sun",
      "Height": "6-10 inches",
      "Spread": "8-12 inches",
      "LifeCycle": "Annual",
      "Flowering": "Yes",
      "Flowercolor": "Peach"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "BELL OF IRELAND",
    "variety": "Bells Of Ireland, Moluccella Laevis",
    "plantAttrURL": "https://www.burpee.com/flowers/bells-of-ireland/bells-of-ireland-moluccella-laevis-prod000135.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/3/33/Moluccella_laevis%2C_flowers.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "30 inches",
      "Spread": "10-12 inches",
      "OrnamentalUse": "Borders, Dried Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Green"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "BLUE EYED DAISIES",
    "variety": "Osteospermum, Blue Eyed Beauty",
    "plantAttrURL": "https://www.burpee.com/flowers/blue-eyed-daisies/osteospermum-blue-eyed-beauty-21052.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Arctotis_stoechadifolia_P._J._Bergius%2C_Fr%C3%BChlingsbl%C3%BCte_West_Coast_N.P._P1030626.JPG",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "12-14 inches",
      "Spread": "12-14 inches",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "8 weeks",
      "Flowercolor": "Blue, Yellow"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CALADIUM",
    "variety": "Caladiums, Tropical Mix",
    "plantAttrURL": "https://www.burpee.com/flowers/caladium/caladiums-tropical-mix-84009.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Caladium_bicolor_%27Florida_Sweetheart%27_Plant_2220px.jpg",
    "plantAttributes": {
      "Sun": "Full Shade, Part Sun",
      "Height": "12-18 inches",
      "Spread": "12-15 inches",
      "OrnamentalUse": "Beds, Borders, Container",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "Flowering": "No",
      "Flowercolor": "Green, Pink, Red, White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CALENDULA",
    "variety": "Wildflowers, Pollinator Mix",
    "plantAttrURL": "https://www.burpee.com/flowers/flower-pollinators/wildflowers-pollinator-mix-prod099842.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/6/67/Calendula_January_2008-1_filtered.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "12-36 inches",
      "Spread": "16-20 inches",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "Flowering": "No",
      "BloomDuration": "12 weeks",
      "Flowercolor": "Blue, Gold, Orange, Pink, Purple, Red, Yellow"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CALIBRACHOA",
    "variety": "Calibrachoa, Crave Strawberry Star",
    "plantAttrURL": "https://www.burpee.com/flowers/calibrachoa/calibrachoa-crave-strawberry-star-prod500058.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Calibrachoa_flower_red.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "10-14 inches",
      "Spread": "12-16 inches",
      "LifeCycle": "Annual",
      "Flowering": "Yes",
      "Flowercolor": "Red, White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CALLA",
    "variety": "Calla, Red Alert",
    "plantAttrURL": "https://www.burpee.com/flowers/calla/calla-red-alert-prod003343.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Calla_palustris2.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "20-24 inches",
      "Spread": "8-10 inches",
      "OrnamentalUse": "Beds, Borders, Container, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "Flowering": "Yes",
      "BloomDuration": "12 weeks",
      "Flowercolor": "Red"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CANNA",
    "variety": "Canna, Yellow King Humbert",
    "plantAttrURL": "https://www.burpee.com/direct-sow-seed-sale/canna-yellow-king-humbert-prod000150.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/d/df/Canna_Lily.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "48-60 inches",
      "Spread": "18-24 inches",
      "OrnamentalUse": "Beds, Borders",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Red, Yellow"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CELOSIA",
    "variety": "Celosia, Prestige Scarlet",
    "plantAttrURL": "https://www.burpee.com/flowers/celosia/celosia-prestige-scarlet-prod500040.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/5/50/CelosiaCristataYellowToreador.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "12-24 inches",
      "Spread": "18-24 inches",
      "OrnamentalUse": "Beds, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "Flowercolor": "Red"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CHRYSANTHEMUM",
    "variety": "Chrysanthemum, Blue Knoll",
    "plantAttrURL": "https://www.burpee.com/flowers/chrysanthemum/chrysanthemum-blue-knoll-prod099534.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Chrysanthemum_November_2007_Osaka_Japan.jpg",
    "plantAttributes": {
      "Sun": "Part Sun",
      "Height": "10-12 inches",
      "Spread": "10-12 inches",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Blue"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CLEOME",
    "variety": "Cleome, Queen Mixed Colors",
    "plantAttrURL": "https://www.burpee.com/flowers/cleome/cleome-queen-mixed-colors-37077A.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Tarenaya_hassleriana_o_Cleome_Hassleriana_o_Cleome_Spinosa.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "48-72 inches",
      "Spread": "12-18 inches",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Pink, Purple, Red, White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "COLEUS",
    "variety": "Coleus, Chocolate Covered Cherry",
    "plantAttrURL": "https://www.burpee.com/flowers/coleus/coleus-chocolate-covered-cherry-prod003364.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/3/38/%E0%A6%AA%E0%A6%BE%E0%A6%A4%E0%A6%BE%E0%A6%AC%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%B0.jpg",
    "plantAttributes": {
      "Sun": "Full Shade, Part Sun",
      "Height": "12-14 inches",
      "Spread": "10-12 inches",
      "OrnamentalUse": "Beds, Borders",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "No",
      "Flowercolor": "Green, Pink, Purple"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CORNFLOWER",
    "variety": "Cornflower, Tall Double Mixed Colors",
    "plantAttrURL": "https://www.burpee.com/flowers/cornflower/cornflower-tall-double-mixed-colors-prod000171.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Cornflower_Blue.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "30 inches",
      "Spread": "10-12 inches",
      "OrnamentalUse": "Borders, Cut Flowers, Dried Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "Flowering": "Yes",
      "BloomDuration": "8 weeks",
      "Flowercolor": "Blue, Pink, Red, White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "COSMOS",
    "variety": "Cosmos, Psyche White",
    "plantAttrURL": "https://www.burpee.com/flowers/cosmos/cosmos-psyche-white-prod000180.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Cosmos_na_Mostra_de_Flor_de_Hong_Kong.JPG",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "24-48 inches",
      "Spread": "16-18 inches",
      "OrnamentalUse": "Beds, Borders",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "Flowering": "Yes",
      "BloomDuration": "12 weeks",
      "Flowercolor": "White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CUPHEA",
    "variety": "Cuphea, Sriracha Rose",
    "plantAttrURL": "https://www.burpee.com/flowers/cuphea/cuphea-sriracha-rose-33385A.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/0/05/Cuphea_nudicostata_2.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "10-16 inches",
      "Spread": "10-12 inches",
      "OrnamentalUse": "Beds, Borders",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "14 weeks",
      "Flowercolor": "Red"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "CYPRESS VINE",
    "variety": "Cypress Vine, Red",
    "plantAttrURL": "https://www.burpee.com/flowers/cypress-vine/cypress-vine-red-prod000186.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Cyprus_vine_flower.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "180 inches",
      "Spread": "72-96 inches",
      "OrnamentalUse": "Trellis or Lattice",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "12 weeks",
      "Flowercolor": "Red, White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "DAHLIAS",
    "variety": "Dahlia, Café au Lait",
    "plantAttrURL": "https://www.burpee.com/flowers/dahlias/dahlia-cafe-au-lait-prod003351.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/1/18/Dahlia_flower_-_colour.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "34-36 inches",
      "Spread": "18-24 inches",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "Flowering": "Yes",
      "BloomDuration": "8 weeks",
      "Flowercolor": "Cream"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals",
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "DAISIES",
    "variety": "Shasta Daisy, Crazy Daisy",
    "plantAttrURL": "https://www.burpee.com/perennials/shasta-daisies/shasta-daisy-crazy-daisy-prod000112.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Daisy_G%C3%A4nsebl%C3%BCmchen_Bellis_perennis_01.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "18-24 inches",
      "Spread": "18-24 inches",
      "BloomSeason": "Summer",
      "ResistantTo": "Deer, Drought, Rabbit",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals",
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "DIANTHUS",
    "variety": "Dianthus, Sweet Black Cherry Hybrid",
    "plantAttrURL": "https://www.burpee.com/flowers/dianthus/dianthus-sweet-black-cherry-hybrid-prod003485.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/4/42/Dianthus_caryophyllus_L_%28Clove_pink%29.JPG",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "18-36 inches",
      "Spread": "10-12 inches",
      "BloomSeason": "Summer",
      "ResistantTo": "Light Frost",
      "OrnamentalUse": "Beds, Borders, Complete Container, Container, Cut Flowers, Decorative",
      "PlantingTime": "Spring",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "DICHONDRA",
    "variety": "Dichondra, Silver Falls",
    "plantAttrURL": "https://www.burpee.com/flowers/dichondra/dichondra-silver-falls-20422.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Dichondra_micratha.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "2-3 inches",
      "Spread": "36-48 inches",
      "OrnamentalUse": "Beds, Borders, Container",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "No"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "DUSTY MILLER",
    "variety": "Dusty Miller, Silver Lace",
    "plantAttrURL": "https://www.burpee.com/flowers/dusty-miller/dusty-miller-silver-lace-prod000198.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/1/15/Centaurea_cineraria%2C_Manie_van_der_Schijff_BT.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "7 inches",
      "Spread": "8 inches",
      "OrnamentalUse": "Beds, Container, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "No"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "ELEPHANT EARS",
    "variety": "Elephant Ear, Black",
    "plantAttrURL": "https://www.burpee.com/flowers/elephant-ears/elephant-ear-black-prod001597.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Elephant_ear_plant_with_blossum.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "36-48 inches",
      "Spread": "12-18 inches",
      "OrnamentalUse": "Beds, Borders, Container",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "Flowering": "No"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "FOUR O'CLOCKS",
    "variety": "Four O'Clock, High Tea Mix",
    "plantAttrURL": "https://www.burpee.com/flowers/four-oclocks/four-oclock-high-tea-mix-prod000199.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/8/83/2006-10-18Mirabilis_jalapa10.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "24 inches",
      "Spread": "10-12 inches",
      "OrnamentalUse": "Beds, Borders, Container",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Red, White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals",
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "GAILLARDIA",
    "variety": "Gaillardia, Goblin",
    "plantAttrURL": "https://www.burpee.com/perennials/gaillardias/gaillardia-goblin-prod002065.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/d/de/Gaillardia_fanfare_centered.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "12 inches",
      "Spread": "12-15 inches",
      "BloomSeason": "Summer",
      "ResistantTo": "Drought, Rabbit",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Spring",
      "Genus": "Gaillardia",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals",
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "GERANIUMS",
    "variety": "Geranium, Havana Blues",
    "plantAttrURL": "https://www.burpee.com/perennials/geraniums/geranium-havana-blues-prod002367.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Geranium_sanguineum0.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "8-10 inches",
      "Spread": "8-10 inches",
      "BloomSeason": "Spring, Summer",
      "ResistantTo": "Cold, Deer, Rabbit",
      "OrnamentalUse": "Beds, Borders, Decorative",
      "PlantingTime": "Fall, Spring",
      "Genus": "Geranium",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "GERBERA",
    "variety": "Gerbera, Garvinea Sweet Glow",
    "plantAttrURL": "https://www.burpee.com/flowers/gerbera/gerbera-garvinea-sweet-glow-prod500054.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/0/01/Orange_gerbera_Daisy.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "15-18 inches",
      "Spread": "12-15 inches",
      "OrnamentalUse": "Borders",
      "LifeCycle": "Annual",
      "Flowering": "Yes",
      "Flowercolor": "Orange"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "GLADIOLUS",
    "variety": "Gladiolus, Butterfly",
    "plantAttrURL": "https://www.burpee.com/flowers/gladiolus/gladiolus-butterfly-prod002852.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/25/Gartengladiole_apricot.JPG",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "36 inches",
      "Spread": "5-6 inches",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Red, White, Yellow"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "GOMPHRENA",
    "variety": "Gomphrena, QIS Mix",
    "plantAttrURL": "https://www.burpee.com/flowers/gomphrena/gomphrena-qis-mix-prod000220.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/1/16/Gomphrena_serrata_in_Hyderabad_W_IMG_8869.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "24-30 inches",
      "Spread": "8-10 inches",
      "OrnamentalUse": "Beds, Borders, Container, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Orange, Pink, Purple, Red, White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "ICE PLANTS",
    "variety": "Ice Plant, Harlequin Mix",
    "plantAttrURL": "https://www.burpee.com/flowers/ice-plants/ice-plant-harlequin-mix-prod000225.html",
    "zone": "3-11",
    "photoURL": "https://seedsnpots.com/wp-content/uploads/2017/10/mesembryanthemum-510x510.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "2 inches",
      "Spread": "9 inches",
      "OrnamentalUse": "Beds",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Pink, Red, White, Yellow"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "IMPATIENS",
    "variety": "Impatiens, Cherry Splash",
    "plantAttrURL": "https://www.burpee.com/flowers/impatiens/impatiens-cherry-splash-prod001515.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/5/51/Impatiens_zombensis.JPG",
    "plantAttributes": {
      "Sun": "Part Sun",
      "Height": "6-10 inches",
      "Spread": "6-10 inches",
      "OrnamentalUse": "Beds, Borders, Container, Filler",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "12 weeks",
      "Flowercolor": "Pink, Red"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "IPOMOPSIS",
    "variety": "Ipomopsis, Hummingbird Mix",
    "plantAttrURL": "https://www.burpee.com/flowers/ipomopsis/ipomopsis-hummingbird-mix-prod000239.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Ipomopsis_arizonica_2.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "36-48 inches",
      "Spread": "6-8 inches",
      "OrnamentalUse": "Borders",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Pink, Red, Yellow"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "LISIANTHUS",
    "variety": " Lisianthus, Yellow",
    "plantAttrURL": "https://www.burpee.com/flowers/lisianthus/lisianthus-yellow-prod500271.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/1/18/Eustoma_grandiflorum_purple_02.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "30-40 inches",
      "Spread": "8-10 inches",
      "OrnamentalUse": "Beds, Cut Flowers",
      "LifeCycle": "Annual",
      "Flowering": "Yes"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals",
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "LILIES",
    "variety": "Lily, Oriental Soft Music",
    "plantAttrURL": "https://www.burpee.com/perennials/lilies/lily-oriental-soft-music-prod001604.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/3/30/Lilium_candidum_1.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "32-40 inches",
      "Spread": "15-18 inches",
      "BloomSeason": "Summer",
      "OrnamentalUse": "Beds, Container, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals",
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "LOBELIAS",
    "variety": "Lobelia, Crystal Palace Blue",
    "plantAttrURL": "https://www.burpee.com/flowers/lobelias/lobelia-crystal-palace-blue-prod000256.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/8/86/Lobelia_%28aka%29.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "6-8 inches",
      "Spread": "6 inches",
      "OrnamentalUse": "Beds, Container",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "8 weeks",
      "Flowercolor": "Blue"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "MARIGOLDS",
    "variety": "Sweet Marigold, Licorice",
    "plantAttrURL": "https://www.burpee.com/herbs/sweet-marigold/sweet-marigold-licorice-prod001080.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/5/55/Calendula_officinalis_03-09-2005_15.21.56.JPG",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "12 inches",
      "Spread": "18 inches",
      "OrnamentalUse": "Beds, Borders, Container",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "Flowering": "No"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "MOONFLOWERS",
    "variety": "Moonflower, Giant White",
    "plantAttrURL": "https://www.burpee.com/flowers/moonflowers/moonflower-giant-white-prod000281.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Ipomoea_alba270483816.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "15 feet",
      "Spread": "8-10 feet",
      "OrnamentalUse": "Trellis or Lattice",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "8 weeks",
      "Flowercolor": "White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "MORNING GLORIES",
    "variety": "Morning Glory, Heavenly Blue",
    "plantAttrURL": "https://www.burpee.com/flowers/morning-glories/morning-glory-heavenly-blue-prod000284.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/3/32/Glorious_Morning_Glories.JPG",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "8-12 feet",
      "Spread": "6-8 feet",
      "OrnamentalUse": "Trellis or Lattice",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Blue, White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "NASTURTIUM",
    "variety": "Nasturtium, Vesuviu",
    "plantAttrURL": "https://www.burpee.com/flowers/nasturtium/nasturtium-vesuvius-prod000297.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/78/Nasturtium-Tropaeolum.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "10-12 inches",
      "Spread": "10-12 inches",
      "OrnamentalUse": "Beds, Container",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Orange, Pink"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "NEMOPHILA",
    "variety": "Nemophila, Baby Blue Eyes",
    "plantAttrURL": "https://www.burpee.com/flowers/nemophila/nemophila-baby-blue-eyes-prod000298.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Nemophila-menziesii-20080330.JPG",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "6 inches",
      "Spread": "12 inches",
      "OrnamentalUse": "Beds, Container",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "6 weeks",
      "Flowercolor": "Blue, White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "NICOTIANA",
    "variety": "Nicotiana, Heaven Scent",
    "plantAttrURL": "https://www.burpee.com/flowers/nicotiana/nicotiana-heaven-scent-prod000299.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/4/49/Tabak_9290019.JPG",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "20-24 inches",
      "Spread": "10 inches",
      "OrnamentalUse": "Borders",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "12 weeks",
      "Flowercolor": "Pink, Red, White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "ORNAMENTAL KALES",
    "variety": "Ornamental Kale, Song Bird Red",
    "plantAttrURL": "https://www.burpee.com/flowers/ornamental-kales/-ornamental-kale-song-bird-red--prod002429.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/4/45/Ornamental_Kale_Nagoya_White_F1_--_Brassica_oleracea.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Spread": "6-10 inches",
      "Height": "6-10 inches",
      "SowMethod": "Direct Sow/Indoor Sow",
      "PlantingTime": "Fall, Spring",
      "Thin": "10 inches",
      "LifeCycle": "Annual"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "PANSIES",
    "variety": "Pansy, Moulin Rouge",
    "plantAttrURL": "https://www.burpee.com/flowers/pansies/pansy-moulin-rouge-prod000304.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Life_will_overcome_some_day.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "8 inches",
      "Spread": "8-10 inches",
      "OrnamentalUse": "Beds, Borders, Container",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "12 weeks",
      "Flowercolor": "Blue, Purple, Red, Yellow"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "PENNISETUM",
    "variety": "Ornamental Grass, Pennisetum",
    "plantAttrURL": "https://www.burpee.com/flowers/pennisetum/ornamental-grass-pennisetum--prod000300.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/91/Starr_061114-9870_Pennisetum_polystachion.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "36 inches",
      "Spread": "14-16 inches",
      "OrnamentalUse": "Borders, Container, Dried Flowers, Thriller",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "8 weeks",
      "Flowercolor": "Pink, Red"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "PENTAS",
    "variety": "Pentas, Starcluster Red",
    "plantAttrURL": "https://www.burpee.com/flowers/pentas/pentas-starcluster-red-prod003487.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Pentas_lanceolata2.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "14-18 inches",
      "Spread": "14-18 inches",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Red"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "PETUNIAS",
    "variety": "Petunia, Cascadia Rim Magenta",
    "plantAttrURL": "https://www.burpee.com/flowers/petunias/petunia-cascadia-rim-magenta-prod003475.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Petunia_exserta_by_Scott_Zona_-_004_%281%29.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "10-16 inches",
      "Spread": "16-20 inches",
      "OrnamentalUse": "Beds, Borders",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "12 weeks",
      "Flowercolor": "Cream, Red"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals",
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "PHLOX",
    "variety": "Phlox, David",
    "plantAttrURL": "https://www.burpee.com/perennials/phlox/phlox-david-prod000091.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Phlox_Paniculata.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "36 inches",
      "Spread": "24-30 inches",
      "BloomSeason": "Fall, Summer",
      "ResistantTo": "Deer",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Phlox",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals",
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "POPPY",
    "variety": "Poppy, Oriental Poppy Mix",
    "plantAttrURL": "https://www.burpee.com/perennials/poppy/poppy-oriental-poppy-mix-prod001097.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/5/56/Yellow_Poppy.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "24-36 inches",
      "Spread": "18-24 inches",
      "BloomSeason": "Summer",
      "ResistantTo": "Deer",
      "OrnamentalUse": "Borders, Cut Flowers, Dried Flowers",
      "PlantingTime": "Spring",
      "Genus": "Papaver",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "PORTULACA",
    "variety": "Portulaca, Sundial Hybrid Mix",
    "plantAttrURL": "https://www.burpee.com/flowers/portulaca/portulaca-sundial-hybrid-mix-prod000348.html",
    "zone": "3-11",
    "photoURL": "https://en.wikipedia.org/wiki/Portulaca#/media/File:Portulaca_amilis.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "4-6 inches",
      "Spread": "6-8 inches",
      "OrnamentalUse": "Beds, Container",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "12 weeks",
      "Flowercolor": "Orange, Pink, Red, White, Yellow"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals",
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "RUDBECKIAS",
    "variety": "Rudbeckia, Indian Summer",
    "plantAttrURL": "https://www.burpee.com/flowers/rudbeckias/rudbeckia-indian-summer-prod000352.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Rudbeckia_hirta_flower_closeup.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "36-42 inches",
      "Spread": "12-16 inches",
      "OrnamentalUse": "Beds, Borders, Container, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "12 weeks",
      "Flowercolor": "Gold, Yellow"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals",
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "SALVIA",
    "variety": "Salvia, Amistad",
    "plantAttrURL": "https://www.burpee.com/flowers/salvia/salvia-amistad-prod003473.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Salvia_officinalis0.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "36-48 inches",
      "Spread": "36 inches",
      "OrnamentalUse": "Beds, Borders",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "12 weeks",
      "Flowercolor": "Black, Blue"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals",
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "SCABIOSA",
    "variety": "Scabiosa, Summer Berries",
    "plantAttrURL": "https://www.burpee.com/flowers/scabiosa/scabiosa-summer-berries-prod000364.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/79/Scabiosa_columbaria_Pink_Mist.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "24-30 inches",
      "Spread": "10-12 inches",
      "OrnamentalUse": "Borders",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Black, Pink, Red"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "SCAEVOLA",
    "variety": "Scaevola, Fancy",
    "plantAttrURL": "https://www.burpee.com/flowers/scaevola/scaevola-fancy-prod000365.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/4/44/Starr_020925-0070_Scaevola_chamissoniana.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "8 inches",
      "Spread": "12-14 inches",
      "OrnamentalUse": "Beds, Container, Filler, Spiller",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "14 weeks",
      "Flowercolor": "Blue"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "SNAPDRAGONS",
    "variety": "Snapdragon, Cinderella Mixed Colors",
    "plantAttrURL": "https://www.burpee.com/flowers/snapdragons/snapdragon-cinderella-mixed-colors-prod000367.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/6/66/Antirrhinum_majus_from_Thasos.JPG",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "20 inches",
      "Spread": "6-8 inches",
      "OrnamentalUse": "Borders, Container, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Pink, Red, Yellow"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "STATICE",
    "variety": "Statice, Mixed Bold Colors",
    "plantAttrURL": "https://www.burpee.com/flowers/statice/statice-mixed-bold-colors-prod000374.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/7/74/Limonium_perezii_3.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "24-30 inches",
      "Spread": "8-10 inches",
      "OrnamentalUse": "Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "9 weeks",
      "Flowercolor": "Blue, Purple, Red, White, Yellow"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "STOCK",
    "variety": "Stock, Harmony Mix",
    "plantAttrURL": "https://www.burpee.com/flowers/stock/stock-harmony-mix-prod000375.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Matthiola_incana6.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "10 inches",
      "Spread": "6-8 inches",
      "OrnamentalUse": "Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "6 weeks",
      "Flowercolor": "Pink, Purple, Red, White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "STRAWFLOWERS",
    "variety": "Strawflower, Tall Mixed Colors",
    "plantAttrURL": "https://www.burpee.com/flowers/strawflowers/strawflower-tall-mixed-colors-prod000377.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/26/Xerochrysum_bracteatum_on_a_dune.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "24-36 inches",
      "Spread": "8-10 inches",
      "OrnamentalUse": "Beds, Borders, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "12 weeks",
      "Flowercolor": "Brown, Pink, Red, White, Yellow"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "SUNFLOWERS",
    "variety": "Sunflower, Teddy Bear",
    "plantAttrURL": "https://www.burpee.com/flowers/sunflowers/sunflower-teddy-bear--prod000404.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg",
    "plantAttributes": {
      "Type": "Dwarf",
      "Sun": "Full Sun",
      "Height": "24-36 inches",
      "Spread": "14-16 inches",
      "OrnamentalUse": "Beds, Container, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "BloomDuration": "5 weeks",
      "Flowercolor": "Gold, Green, Yellow"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "SWEET PEAS",
    "variety": "Sweet Pea, Eckfords Finest Mix",
    "plantAttrURL": "https://www.burpee.com/flowers/sweet-peas/sweet-pea-eckfords-finest-mix-prod000406.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/5/59/Sweet_Pea-0.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "48-60 inches",
      "Spread": "24-36 inches",
      "OrnamentalUse": "Borders, Cut Flowers, Trellis or Lattice",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "Flowering": "Yes",
      "BloomDuration": "8 weeks",
      "Flowercolor": "Blue, Orange, Pink, Red, White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "THUNBERGIA",
    "variety": "Thunbergia alata Mix",
    "plantAttrURL": "https://www.burpee.com/flowers/thunbergia/thunbergia-alata-mix-prod000410.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Thunbergia_alata.JPG",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "60 inches",
      "Spread": "72-96 inches",
      "OrnamentalUse": "Trellis or Lattice",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "12 weeks",
      "Flowercolor": "Orange, White, Yellow"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "TITHONIA",
    "variety": "Tithonia, Sundance",
    "plantAttrURL": "https://www.burpee.com/flowers/tithonia/tithonia-sundance--prod000411.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Tithonia_diversifolia.JPG",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "36-48 inches",
      "Spread": "18-24 inches",
      "OrnamentalUse": "Borders",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Orange"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "TORENIA",
    "variety": "Torenia, Summer Wave Large Amethyst",
    "plantAttrURL": "https://www.burpee.com/flowers/torenia/torenia-summer-wave-large-amethyst-prod500465.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Torenia_travancorica_at_Kadavoor.jpg",
    "plantAttributes": {
      "Sun": "Part Sun",
      "Height": "8-10 inches",
      "Spread": "18-24 inches",
      "OrnamentalUse": "Beds, Borders, Container",
      "LifeCycle": "Annual",
      "Flowering": "Yes",
      "Flowercolor": "Purple"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "TUBEROSE",
    "variety": "Tuberose, The Pearl",
    "plantAttrURL": "https://www.burpee.com/flowers/tuberose/tuberose-the-pearl-prod000414.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tuberose_flower.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "36 inches",
      "Spread": "6-8 inches",
      "OrnamentalUse": "Beds, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow",
      "Flowering": "Yes",
      "BloomDuration": "8 weeks",
      "Flowercolor": "White"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "VERBENAS",
    "variety": "Verbena, Bonariensis",
    "plantAttrURL": "https://www.burpee.com/perennials/verbena/verbena-bonariensis-prod001064.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/4/42/Verbena_bonariensis1.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "36-72 inches",
      "Spread": "12-18 inches",
      "BloomSeason": "Fall, Summer",
      "OrnamentalUse": "Beds, Borders",
      "PlantingTime": "Spring",
      "Genus": "Verbena",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "VINCAS",
    "variety": "Trailing Vinca, Peach",
    "plantAttrURL": "https://www.burpee.com/flowers/vincas/trailing-vinca-peach-prod001741.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/9/92/Vinca_spreading_along_a_border.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "4-6 inches",
      "Spread": "20-30 inches",
      "OrnamentalUse": "Beds, Container",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "No",
      "BloomDuration": "12 weeks",
      "Flowercolor": "Peach, Pink"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "VIOLAS",
    "variety": "Viola, Johnny-Jump Up",
    "plantAttrURL": "https://www.burpee.com/flowers/violas/viola-johnny-jump-up-prod000422.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Viola_reichenbachiana_LC0128.jpg",
    "plantAttributes": {
      "Sun": "Full Sun, Part Sun",
      "Height": "10 inches",
      "Spread": "6 inches",
      "OrnamentalUse": "Beds, Container",
      "LifeCycle": "Annual",
      "SowMethod": "Indoor Sow",
      "Flowering": "Yes",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Purple, Yellow"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Annuals"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "ZINNIAS",
    "variety": "Zinnia, Exquisite",
    "plantAttrURL": "https://www.burpee.com/flowers/zinnias/zinnia-exquisite-prod000431.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Zinnia_single_layer_and_12_Petals_2.jpg",
    "plantAttributes": {
      "Type": "Dahlia-flowering",
      "Sun": "Full Sun",
      "Height": "36 inches",
      "Spread": "8-10 inches",
      "OrnamentalUse": "Beds, Container, Cut Flowers",
      "LifeCycle": "Annual",
      "SowMethod": "Direct Sow/Indoor Sow",
      "BloomDuration": "10 weeks",
      "Flowercolor": "Pink, Red"
    }
  },
  // ----------------------------------------------
  {
    "plantCategories": [
      "flowers"
    ],
    "plantClass": [
      "Perennials"
    ],
    "zones": [
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
    "compatable": [
      ""
    ],
    "combative": [
      ""
    ],
    "commonName": "SEDUM",
    "variety": "Sedum, Firecracke",
    "plantAttrURL": "https://www.burpee.com/perennials/sedum/sedum-firecracker-prod022598.html",
    "zone": "3-11",
    "photoURL": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Biting_stonecrop_close_800.jpg",
    "plantAttributes": {
      "Sun": "Full Sun",
      "Height": "4-6 inches",
      "Spread": "16-18 inches",
      "BloomSeason": "Summer",
      "ResistantTo": "Deer, Drought, Rabbit",
      "OrnamentalUse": "Borders, Cut Flowers",
      "PlantingTime": "Fall, Spring",
      "Genus": "Sedum",
      "LifeCycle": "Perennial"
    }
  },
  // ----------------------------------------------
  { 
    "plantCategories" : [
        "fruits"
    ], 
    "plantClass" : [
        "Blackberry Plants"
    ], 
    "zones" : [
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
    "commonName" : "BLACKBERRY", 
    "variety" : "Blackberry, Prime-Ark Traveler", 
    "plantAttrURL" : "https://www.burpee.com/fruit/blackberry-plants/blackberry-prime-ark-traveler--prod099945.html", 
    "zone" : "5-6", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/7/78/Ripe%2C_ripening%2C_and_green_blackberries.jpg", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "Height" : "4-6 feet", 
        "Spread" : "2-3 feet", 
        "LifeCycle" : "Perennial", 
        "GrowthHabit" : "Erect", 
        "FoodUse" : "Edible Fruit", 
        "Genus" : "Rubus", 
        "OrnamentalUse" : "Beds, Borders", 
        "PlantingTime" : "Fall, Spring"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "fruits"
    ], 
    "plantClass" : [
        "Blueberry Plants"
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
    "commonName" : "BLUEBERRY", 
    "variety" : "Blueberry, Jersey", 
    "plantAttrURL" : "https://www.burpee.com/fruit/blueberry-plants/blueberry-jersey-prod002405.html", 
    "zone" : "3-11", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/8/88/PattsBlueberries.jpg", 
    "plantAttributes" : {
        "FruitBearing" : "Late Season", 
        "Sun" : "Full Sun", 
        "Height" : "72-96 inches", 
        "Spread" : "60-72 inches", 
        "GrowthHabit" : "Northern Highbush", 
        "FoodUse" : "Edible Fruit, Pie", 
        "OrnamentalUse" : "Beds, Borders"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "fruits"
    ], 
    "plantClass" : [
        "Currant"
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
    "commonName" : "CURRANT", 
    "variety" : "Currant, Consort Black", 
    "plantAttrURL" : "https://www.burpee.com/fruit/currant/currant-consort-black-prod002656.html", 
    "zone" : "3-6", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/0/00/Grape_Rasins_plus_Zante_Currants.jpg", 
    "plantAttributes" : {
        "Sun" : "Full Sun, Part Sun", 
        "Height" : "48-60 inches", 
        "Spread" : "36-48 inches", 
        "LifeCycle" : "Perennial", 
        "GrowthHabit" : "Bush", 
        "FoodUse" : "Edible Fruit, Sauce", 
        "Genus" : "Ribes", 
        "PlantingTime" : "Fall, Spring"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "fruits"
    ], 
    "plantClass" : [
        "Figs"
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
    "commonName" : "FIGS", 
    "variety" : "Fig, Olympian", 
    "plantAttrURL" : "https://www.burpee.com/fruit/figs/fig-olympian--prod100090.html", 
    "zone" : "5-11", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/0/04/Fig.jpg", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "Height" : "4-8 feet", 
        "Spread" : "4-8 feet", 
        "LifeCycle" : "Perennial", 
        "GrowthHabit" : "Tree", 
        "FoodUse" : "Edible Fruit", 
        "Genus" : "Ficus carica", 
        "PlantingTime" : "Fall, Spring"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "fruits"
    ], 
    "plantClass" : [
        "Grapes"
    ], 
    "zones" : [
        "51", 
        "5b", 
        "61", 
        "6b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "GRAPES", 
    "variety" : "Grape, Hope Seedless", 
    "plantAttrURL" : "https://www.burpee.com/fruit/grapes/grape-hope-seedless-prod003494.html", 
    "zone" : "5-6", 
    "photoURL" : "https://en.wikipedia.org/wiki/Grape#/media/File:Abhar-iran.JPG", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "Height" : "48-72 inches", 
        "Spread" : "96-120 inches", 
        "LifeCycle" : "Perennial", 
        "GrowthHabit" : "Vine", 
        "FoodUse" : "Edible Fruit, Sauce", 
        "Genus" : "Vitis", 
        "PlantingTime" : "Spring"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "fruits"
    ], 
    "plantClass" : [
        "Raspberry Plants"
    ], 
    "zones" : [
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
    "commonName" : "RASPBERRY", 
    "variety" : "Raspberry, Tulamagi", 
    "plantAttrURL" : "https://www.burpee.com/fruit/raspberry-plants/raspberry-tulamagic--prod022677.html", 
    "zone" : "5-6", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/6/69/Raspberries05.jpg", 
    "plantAttributes" : {
        "FruitBearing" : "Everbearing", 
        "Sun" : "Full Sun", 
        "Height" : "4-5 feet", 
        "Spread" : "3-5 feet", 
        "LifeCycle" : "Perennial", 
        "GrowthHabit" : "Shrub", 
        "FoodUse" : "Edible Fruit", 
        "OrnamentalUse" : "Beds", 
        "PlantingTime" : "Spring"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "fruits"
    ], 
    "plantClass" : [
        "Specialty Fruits"
    ], 
    "zones" : [
        "5a", 
        "5b", 
        "6a", 
        "6b", 
        "7a", 
        "7b", 
        "8a", 
        "8b"
    ], 
    "compatable" : [
        ""
    ], 
    "combative" : [
        ""
    ], 
    "commonName" : "KIWI", 
    "variety" : "Hardy Ken's Red Kiwi, Hardy ", 
    "plantAttrURL" : "https://www.burpee.com/fruit/specialty-fruits/kiwi-hardy-kens-red-prod002659.html", 
    "zone" : "5-8", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/5/58/Kiwifruit-Actinidia_deliciosa-plantation.jpg", 
    "plantAttributes" : {
        "Sun" : "Full Sun, Part Sun", 
        "Height" : "15-20 feet", 
        "Spread" : "5-8 feet", 
        "LifeCycle" : "Perennial", 
        "GrowthHabit" : "Vine", 
        "FoodUse" : "Edible Fruit", 
        "Genus" : "Actinidia", 
        "OrnamentalUse" : "Trellis or Lattice"
    }
},
// ----------------------------------------------
{ 
    "plantCategories" : [
        "fruits"
    ], 
    "plantClass" : [
        "Strawberry Plants"
    ], 
    "zones" : [
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
    "commonName" : "STRAWBERRY", 
    "variety" : "Strawberry, Galletta", 
    "plantAttrURL" : "https://www.burpee.com/fruit/strawberry-plants/strawberry-galletta-prod022679.html", 
    "zone" : "5-6", 
    "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Strawberry_Plant_in_early_June.JPG", 
    "plantAttributes" : {
        "Sun" : "Full Sun", 
        "Height" : "12-16 inches", 
        "Spread" : "12-16 inches", 
        "FruitBearing" : "Junebearing", 
        "GrowthHabit" : "Prostrate", 
        "LifeCycle" : "Perennial", 
        "Genus" : "Fragaria", 
        "OrnamentalUse" : "Beds, Borders, Container"
    }
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/d/de/Anethum_graveolens_001.JPG", 
  "plantAttributes" : {
      "Sun" : "Full Sun", 
      "DaysToMaturity" : "40-60 days", 
      "LifeCycle" : "Annual", 
      "Height" : "18-24 inches", 
      "Spread" : "8-12 inches", 
      "SowMethod" : "Direct Sow", 
      "PlantingTime" : "Spring, Summer", 
      "Thin" : "8 inches"
  }
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Petroselinum.jpg/800px-Petroselinum.jpg", 
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
  }
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Borage_starflower_Rohtopurasruoho_01.jpg/1280px-Borage_starflower_Rohtopurasruoho_01.jpg", 
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
  }
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/5/51/A_scene_of_Coriander_leaves.JPG?download", 
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
  }
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Lemon_Balm_%285744694087%29.jpg/1024px-Lemon_Balm_%285744694087%29.jpg", 
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
  }
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Origanum_majorana_002.JPG/800px-Origanum_majorana_002.JPG", 
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
  }
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/0/05/Minze.jpg?download", 
  "plantAttributes" : {
      "Sun" : "Full Sun, Part Sun", 
      "DaysToMaturity" : "90-200 days", 
      "LifeCycle" : "Perennial", 
      "Height" : "18-24 inches", 
      "Spread" : "10-12 inches", 
      "SowMethod" : "Indoor Sow", 
      "PlantingTime" : "Fall, Spring, Summer", 
      "Thin" : "12 inches"
  }
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pfefferminze_natur_peppermint.jpg/1280px-Pfefferminze_natur_peppermint.jpg", 
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
  }
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Majorana_syriaca_-_za%27atar.jpg/1920px-Majorana_syriaca_-_za%27atar.jpg", 
  "plantAttributes" : {
      "Sun" : "Full Sun", 
      "DaysToMaturity" : "90-200 days", 
      "LifeCycle" : "Perennial", 
      "Height" : "12-24 inches", 
      "Spread" : "10-14 inches", 
      "SowMethod" : "Direct Sow/Indoor Sow", 
      "PlantingTime" : "Spring, Summer", 
      "Thin" : "18 inches"
  }
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Rosemary_in_bloom.JPG/1280px-Rosemary_in_bloom.JPG", 
  "plantAttributes" : {
      "Sun" : "Full Sun", 
      "DaysToMaturity" : "90-400 days", 
      "LifeCycle" : "Perennial", 
      "Height" : "24-36 inches", 
      "Spread" : "12-24 inches", 
      "SowMethod" : "Indoor Sow", 
      "PlantingTime" : "Fall, Spring", 
      "Thin" : "18 inches"
  }
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
  }
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flowering_thyme.JPG/1280px-Flowering_thyme.JPG", 
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
  }
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
  "photoURL" : "https://vignette.wikia.nocookie.net/gardener/images/c/c6/Basil_Sweet_basil.jpg/revision/latest/scale-to-width-down/250?cb=20100827171817"
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
  }
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/c/c0/Foeniculum_July_2011-1a.jpg?download", 
  "plantAttributes" : {
      "Sun" : "Full Sun", 
      "DaysToMaturity" : "80-85 days", 
      "LifeCycle" : "Annual", 
      "Height" : "24 inches", 
      "Spread" : "24 inches", 
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Dactylis_glomerata_Kropaar_plant.jpg/800px-Dactylis_glomerata_Kropaar_plant.jpg", 
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Single_lavendar_flower02.jpg/1280px-Single_lavendar_flower02.jpg", 
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/b/bd/YosriNov04Pokok_Serai.JPG", 
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Aloysia_citriodora_002.jpg/800px-Aloysia_citriodora_002.jpg", 
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Aloysia_citriodora_002.jpg/800px-Aloysia_citriodora_002.jpg", 
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
      "herbs", 
      "Flowers"
  ], 
  "plantClass" : [
      "Lavender", 
      "Perennials"
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
  "commonName" : "LAVENDERS", 
  "variety" : "Lavender, English", 
  "plantAttrURL" : "https://www.burpee.com/herbs/lavender/lavender-english-prod000476.html", 
  "zone" : "5-12", 
  "photoURL" : "https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2018/2/13/0/shutterstock_pilialoha_656862607-english-lavender.jpg.rend.hgtvcom.616.411.suffix/1518557007055.jpeg", 
  "plantAttributes" : {
      "Sun" : "Full Sun", 
      "DaysToMaturity" : "90-200 days", 
      "LifeCycle" : "Perennial", 
      "Height" : "30 inches", 
      "Spread" : "12-18 inches", 
      "AdditionalUses" : "Fragrant", 
      "SowMethod" : "Indoor Sow", 
      "PlantingTime" : "Spring, Summer", 
      "Thin" : "18 inches"
  }
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
  "photoURL" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Allium_schoenoprasum_in_NH_01.jpg/1280px-Allium_schoenoprasum_in_NH_01.jpg", 
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
