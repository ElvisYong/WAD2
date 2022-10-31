<script setup>
import { getRecipeById } from '../apis/recipes';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'

useHead({
    title: "Recipe info",
});

const route = useRoute();
const recipe = ref({
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 4,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 6,
    "healthScore": 22,
    "creditsText": "foodista.com",
    "sourceName": "foodista.com",
    "pricePerServing": 131.1,
    "extendedIngredients": [
        {
            "id": 1012034,
            "aisle": "Spices and Seasonings",
            "image": "seasoning.png",
            "consistency": "SOLID",
            "name": "Spice Rub",
            "nameClean": "dry seasoning rub",
            "original": "2 Tbsp. Moroccan spice mixture (1/2 tsp. cayenne, 1/2 tsp. turmeric, 2 1/2 tsp cumin, 1 tsp. allspice, 1 tsp. cinnamon, 1/2 tsp. coriander)",
            "originalName": "Moroccan spice mixture (1/2 tsp. cayenne, 1/2 tsp. turmeric, 2 1/2 tsp cumin, 1 tsp. allspice, 1 tsp. cinnamon, 1/2 tsp. coriander)",
            "amount": 2,
            "unit": "Tbsp",
            "meta": [
                "()"
            ],
            "measures": {
                "us": {
                    "amount": 2,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                },
                "metric": {
                    "amount": 2,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                }
            }
        },
        {
            "id": 12061,
            "aisle": "Nuts",
            "image": "almonds.jpg",
            "consistency": "SOLID",
            "name": "almond",
            "nameClean": "almonds",
            "original": "1/8 c. almond slivers",
            "originalName": "almond slivers",
            "amount": 0.125,
            "unit": "c",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 0.125,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 29.573,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 9021,
            "aisle": "Produce",
            "image": "apricot.jpg",
            "consistency": "SOLID",
            "name": "apricot",
            "nameClean": "apricot",
            "original": "1/2 c. dried apricot halves, roughly chopped",
            "originalName": "dried apricot halves, roughly chopped",
            "amount": 0.5,
            "unit": "c",
            "meta": [
                "dried",
                "roughly chopped"
            ],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 118.294,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 16058,
            "aisle": "Canned and Jarred",
            "image": "chickpeas.png",
            "consistency": "SOLID",
            "name": "canned chick peas",
            "nameClean": "canned chickpeas",
            "original": "1 14-oz. can chick peas, drained",
            "originalName": "chick peas, drained",
            "amount": 14,
            "unit": "oz",
            "meta": [
                "drained",
                "canned"
            ],
            "measures": {
                "us": {
                    "amount": 14,
                    "unitShort": "oz",
                    "unitLong": "ounces"
                },
                "metric": {
                    "amount": 396.893,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 10011693,
            "aisle": "Canned and Jarred",
            "image": "tomatoes-canned.png",
            "consistency": "SOLID",
            "name": "canned tomatoes",
            "nameClean": "canned tomatoes",
            "original": "1 28-oz. can whole peeled tomatoes",
            "originalName": "whole peeled tomatoes",
            "amount": 28,
            "unit": "oz",
            "meta": [
                "whole",
                "peeled",
                "canned"
            ],
            "measures": {
                "us": {
                    "amount": 28,
                    "unitShort": "oz",
                    "unitLong": "ounces"
                },
                "metric": {
                    "amount": 793.787,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 11165,
            "aisle": "Produce;Spices and Seasonings",
            "image": "cilantro.png",
            "consistency": "SOLID",
            "name": "cilantro",
            "nameClean": "cilantro",
            "original": "1/2 cup Finely Chopped Cilantro",
            "originalName": "Finely Chopped Cilantro",
            "amount": 0.5,
            "unit": "cup",
            "meta": [
                "finely chopped"
            ],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 118.294,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 1034053,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "olive-oil.jpg",
            "consistency": "LIQUID",
            "name": "extra virgin olive oil",
            "nameClean": "extra virgin olive oil",
            "original": "1 Tbsp. extra virgin olive oil",
            "originalName": "extra virgin olive oil",
            "amount": 1,
            "unit": "Tbsp",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                },
                "metric": {
                    "amount": 1,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                }
            }
        },
        {
            "id": 6984,
            "aisle": "Canned and Jarred",
            "image": "chicken-broth.png",
            "consistency": "LIQUID",
            "name": "fat free chicken broth",
            "nameClean": "fat free chicken broth",
            "original": "2 c. fat free chicken broth",
            "originalName": "fat free chicken broth",
            "amount": 2,
            "unit": "c",
            "meta": [
                "fat free"
            ],
            "measures": {
                "us": {
                    "amount": 2,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 473.176,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 20081,
            "aisle": "Baking",
            "image": "flour.png",
            "consistency": "SOLID",
            "name": "flour",
            "nameClean": "wheat flour",
            "original": "1 Tbsp. flour",
            "originalName": "flour",
            "amount": 1,
            "unit": "Tbsp",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                },
                "metric": {
                    "amount": 1,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                }
            }
        },
        {
            "id": 11216,
            "aisle": "Produce;Ethnic Foods;Spices and Seasonings",
            "image": "ginger.png",
            "consistency": "SOLID",
            "name": "fresh ginger root",
            "nameClean": "ginger",
            "original": "1 tsp. fresh ginger root, minced",
            "originalName": "fresh ginger root, minced",
            "amount": 1,
            "unit": "tsp",
            "meta": [
                "fresh",
                "minced"
            ],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                },
                "metric": {
                    "amount": 1,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                }
            }
        },
        {
            "id": 11215,
            "aisle": "Produce",
            "image": "garlic.png",
            "consistency": "SOLID",
            "name": "garlic clove",
            "nameClean": "garlic",
            "original": "1 garlic clove, minced",
            "originalName": "garlic clove, minced",
            "amount": 1,
            "unit": "",
            "meta": [
                "minced"
            ],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 1,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 1002030,
            "aisle": "Spices and Seasonings",
            "image": "pepper.jpg",
            "consistency": "SOLID",
            "name": "ground pepper",
            "nameClean": "black pepper",
            "original": "Salt and ground black pepper",
            "originalName": "Salt and ground black pepper",
            "amount": 6,
            "unit": "servings",
            "meta": [
                "black"
            ],
            "measures": {
                "us": {
                    "amount": 6,
                    "unitShort": "servings",
                    "unitLong": "servings"
                },
                "metric": {
                    "amount": 6,
                    "unitShort": "servings",
                    "unitLong": "servings"
                }
            }
        },
        {
            "id": 19296,
            "aisle": "Nut butters, Jams, and Honey",
            "image": "honey.png",
            "consistency": "LIQUID",
            "name": "honey",
            "nameClean": "honey",
            "original": "1 Tbsp. honey",
            "originalName": "honey",
            "amount": 1,
            "unit": "Tbsp",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                },
                "metric": {
                    "amount": 1,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                }
            }
        },
        {
            "id": 11282,
            "aisle": "Produce",
            "image": "brown-onion.png",
            "consistency": "SOLID",
            "name": "onion",
            "nameClean": "onion",
            "original": "1 onion, finely chopped",
            "originalName": "onion, finely chopped",
            "amount": 1,
            "unit": "",
            "meta": [
                "finely chopped"
            ],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 1,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 1055062,
            "aisle": "Meat",
            "image": "chicken-breasts.png",
            "consistency": "SOLID",
            "name": "skinless boneless chicken breasts",
            "nameClean": "boneless skinless chicken breast",
            "original": "2 large boneless skinless chicken breasts, cut into 1-inch cubes",
            "originalName": "boneless skinless chicken breasts, cut into 1-inch cubes",
            "amount": 2,
            "unit": "large",
            "meta": [
                "boneless",
                "skinless",
                "cut into 1-inch cubes"
            ],
            "measures": {
                "us": {
                    "amount": 2,
                    "unitShort": "large",
                    "unitLong": "larges"
                },
                "metric": {
                    "amount": 2,
                    "unitShort": "large",
                    "unitLong": "larges"
                }
            }
        }
    ],
    "id": 652421,
    "title": "Moroccan Chicken Tagine",
    "readyInMinutes": 45,
    "servings": 6,
    "sourceUrl": "http://www.foodista.com/recipe/V36XNVKB/moroccan-chicken-tagine",
    "image": "https://spoonacular.com/recipeImages/652421-556x370.jpg",
    "imageType": "jpg",
    "nutrition": {
        "nutrients": [
            {
                "name": "Calories",
                "amount": 218.78,
                "unit": "kcal",
                "percentOfDailyNeeds": 10.94
            },
            {
                "name": "Fat",
                "amount": 6.78,
                "unit": "g",
                "percentOfDailyNeeds": 10.43
            },
            {
                "name": "Saturated Fat",
                "amount": 0.9,
                "unit": "g",
                "percentOfDailyNeeds": 5.6
            },
            {
                "name": "Carbohydrates",
                "amount": 27.51,
                "unit": "g",
                "percentOfDailyNeeds": 9.17
            },
            {
                "name": "Net Carbohydrates",
                "amount": 20.88,
                "unit": "g",
                "percentOfDailyNeeds": 7.59
            },
            {
                "name": "Sugar",
                "amount": 10.98,
                "unit": "g",
                "percentOfDailyNeeds": 12.2
            },
            {
                "name": "Cholesterol",
                "amount": 24.11,
                "unit": "mg",
                "percentOfDailyNeeds": 8.04
            },
            {
                "name": "Sodium",
                "amount": 713.92,
                "unit": "mg",
                "percentOfDailyNeeds": 31.04
            },
            {
                "name": "Protein",
                "amount": 15.19,
                "unit": "g",
                "percentOfDailyNeeds": 30.38
            },
            {
                "name": "Manganese",
                "amount": 1.03,
                "unit": "mg",
                "percentOfDailyNeeds": 51.46
            },
            {
                "name": "Vitamin B6",
                "amount": 0.87,
                "unit": "mg",
                "percentOfDailyNeeds": 43.26
            },
            {
                "name": "Vitamin B3",
                "amount": 6.4,
                "unit": "mg",
                "percentOfDailyNeeds": 32
            },
            {
                "name": "Fiber",
                "amount": 6.64,
                "unit": "g",
                "percentOfDailyNeeds": 26.55
            },
            {
                "name": "Selenium",
                "amount": 16.7,
                "unit": "µg",
                "percentOfDailyNeeds": 23.86
            },
            {
                "name": "Vitamin K",
                "amount": 24.04,
                "unit": "µg",
                "percentOfDailyNeeds": 22.89
            },
            {
                "name": "Copper",
                "amount": 0.44,
                "unit": "mg",
                "percentOfDailyNeeds": 21.83
            },
            {
                "name": "Potassium",
                "amount": 750.98,
                "unit": "mg",
                "percentOfDailyNeeds": 21.46
            },
            {
                "name": "Phosphorus",
                "amount": 210.74,
                "unit": "mg",
                "percentOfDailyNeeds": 21.07
            },
            {
                "name": "Vitamin E",
                "amount": 3,
                "unit": "mg",
                "percentOfDailyNeeds": 19.98
            },
            {
                "name": "Iron",
                "amount": 3.58,
                "unit": "mg",
                "percentOfDailyNeeds": 19.88
            },
            {
                "name": "Vitamin C",
                "amount": 16.05,
                "unit": "mg",
                "percentOfDailyNeeds": 19.45
            },
            {
                "name": "Magnesium",
                "amount": 70.16,
                "unit": "mg",
                "percentOfDailyNeeds": 17.54
            },
            {
                "name": "Vitamin A",
                "amount": 680.49,
                "unit": "IU",
                "percentOfDailyNeeds": 13.61
            },
            {
                "name": "Vitamin B5",
                "amount": 1.28,
                "unit": "mg",
                "percentOfDailyNeeds": 12.81
            },
            {
                "name": "Vitamin B1",
                "amount": 0.18,
                "unit": "mg",
                "percentOfDailyNeeds": 12.24
            },
            {
                "name": "Folate",
                "amount": 47.05,
                "unit": "µg",
                "percentOfDailyNeeds": 11.76
            },
            {
                "name": "Vitamin B2",
                "amount": 0.19,
                "unit": "mg",
                "percentOfDailyNeeds": 11.14
            },
            {
                "name": "Calcium",
                "amount": 102.95,
                "unit": "mg",
                "percentOfDailyNeeds": 10.29
            },
            {
                "name": "Zinc",
                "amount": 1.27,
                "unit": "mg",
                "percentOfDailyNeeds": 8.47
            },
            {
                "name": "Vitamin B12",
                "amount": 0.23,
                "unit": "µg",
                "percentOfDailyNeeds": 3.78
            }
        ],
        "properties": [
            {
                "name": "Glycemic Index",
                "amount": 65.55,
                "unit": ""
            },
            {
                "name": "Glycemic Load",
                "amount": 8.29,
                "unit": ""
            },
            {
                "name": "Nutrition Score",
                "amount": 18.503478260869567,
                "unit": "%"
            }
        ],
        "flavonoids": [
            {
                "name": "Cyanidin",
                "amount": 0.07,
                "unit": "mg"
            },
            {
                "name": "Petunidin",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Delphinidin",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Malvidin",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Pelargonidin",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Peonidin",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Catechin",
                "amount": 0.51,
                "unit": "mg"
            },
            {
                "name": "Epigallocatechin",
                "amount": 0.08,
                "unit": "mg"
            },
            {
                "name": "Epicatechin",
                "amount": 0.63,
                "unit": "mg"
            },
            {
                "name": "Epicatechin 3-gallate",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Epigallocatechin 3-gallate",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Theaflavin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Thearubigins",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Eriodictyol",
                "amount": 0.01,
                "unit": "mg"
            },
            {
                "name": "Hesperetin",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Naringenin",
                "amount": 0.01,
                "unit": "mg"
            },
            {
                "name": "Apigenin",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Luteolin",
                "amount": 0.01,
                "unit": "mg"
            },
            {
                "name": "Isorhamnetin",
                "amount": 1,
                "unit": "mg"
            },
            {
                "name": "Kaempferol",
                "amount": 0.21,
                "unit": "mg"
            },
            {
                "name": "Myricetin",
                "amount": 0.01,
                "unit": "mg"
            },
            {
                "name": "Quercetin",
                "amount": 4.66,
                "unit": "mg"
            },
            {
                "name": "Theaflavin-3,3'-digallate",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Theaflavin-3'-gallate",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Theaflavin-3-gallate",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Gallocatechin",
                "amount": 0,
                "unit": "mg"
            }
        ],
        "ingredients": [
            {
                "id": 1012034,
                "name": "Spice Rub",
                "amount": 0.33,
                "unit": "Tbsp",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.16,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.45
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.47,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.88
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.03,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.15,
                        "unit": "g",
                        "percentOfDailyNeeds": 26.55
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.87,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.17
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.04,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.6
                    },
                    {
                        "name": "Folate",
                        "amount": 1.84,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.76
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.1,
                        "unit": "µg",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 10.74,
                        "unit": "µg",
                        "percentOfDailyNeeds": 22.89
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.02,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 32
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.04,
                        "unit": "g",
                        "percentOfDailyNeeds": 12.2
                    },
                    {
                        "name": "Magnesium",
                        "amount": 2.99,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.54
                    },
                    {
                        "name": "Calories",
                        "amount": 4.09,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 10.94
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 2.28,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.83
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.09,
                        "unit": "mg",
                        "percentOfDailyNeeds": 51.46
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0.03,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 9.12,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.46
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.14
                    },
                    {
                        "name": "Choline",
                        "amount": 0.4,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 13.28,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.29
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 3.78
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.47
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 35.09,
                        "unit": "IU",
                        "percentOfDailyNeeds": 13.61
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.25
                    },
                    {
                        "name": "Fat",
                        "amount": 0.1,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.43
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.72,
                        "unit": "g",
                        "percentOfDailyNeeds": 7.59
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.98
                    },
                    {
                        "name": "Protein",
                        "amount": 0.13,
                        "unit": "g",
                        "percentOfDailyNeeds": 30.38
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.36,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.04
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.26
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.24
                    }
                ]
            },
            {
                "id": 12061,
                "name": "almond",
                "amount": 0.02,
                "unit": "c",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.45
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.88
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.11,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.6
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.37,
                        "unit": "g",
                        "percentOfDailyNeeds": 26.55
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.64,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.17
                    },
                    {
                        "name": "Folate",
                        "amount": 1.31,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.76
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.81
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.12,
                        "unit": "µg",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 22.89
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.94,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 32
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.13,
                        "unit": "g",
                        "percentOfDailyNeeds": 12.2
                    },
                    {
                        "name": "Magnesium",
                        "amount": 8.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.54
                    },
                    {
                        "name": "Calories",
                        "amount": 17.25,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 10.94
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 14.33,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.83
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.07,
                        "unit": "mg",
                        "percentOfDailyNeeds": 51.46
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 21.84,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.46
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.14
                    },
                    {
                        "name": "Choline",
                        "amount": 1.55,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Trans Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 50.26
                    },
                    {
                        "name": "Calcium",
                        "amount": 8.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.29
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 3.78
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.09,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.47
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.03,
                        "unit": "IU",
                        "percentOfDailyNeeds": 13.61
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.25
                    },
                    {
                        "name": "Fat",
                        "amount": 1.49,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.43
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.27,
                        "unit": "g",
                        "percentOfDailyNeeds": 7.59
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.76,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.98
                    },
                    {
                        "name": "Protein",
                        "amount": 0.63,
                        "unit": "g",
                        "percentOfDailyNeeds": 30.38
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.04
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.37,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.26
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.24
                    }
                ]
            },
            {
                "id": 9021,
                "name": "apricot",
                "amount": 0.08,
                "unit": "c",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 1.29,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.45
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.88
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.6
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.26,
                        "unit": "g",
                        "percentOfDailyNeeds": 26.55
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 1.43,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.17
                    },
                    {
                        "name": "Folate",
                        "amount": 1.16,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.76
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.81
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.01,
                        "unit": "µg",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.43,
                        "unit": "µg",
                        "percentOfDailyNeeds": 22.89
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.02,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.08,
                        "unit": "mg",
                        "percentOfDailyNeeds": 32
                    },
                    {
                        "name": "Sugar",
                        "amount": 1.19,
                        "unit": "g",
                        "percentOfDailyNeeds": 12.2
                    },
                    {
                        "name": "Magnesium",
                        "amount": 1.29,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.54
                    },
                    {
                        "name": "Calories",
                        "amount": 6.2,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 10.94
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 2.97,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.83
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 51.46
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 33.45,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.46
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.14
                    },
                    {
                        "name": "Choline",
                        "amount": 0.36,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 1.68,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.29
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 3.78
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.47
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 248.78,
                        "unit": "IU",
                        "percentOfDailyNeeds": 13.61
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.25
                    },
                    {
                        "name": "Fat",
                        "amount": 0.05,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.43
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 1.18,
                        "unit": "g",
                        "percentOfDailyNeeds": 7.59
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.98
                    },
                    {
                        "name": "Protein",
                        "amount": 0.18,
                        "unit": "g",
                        "percentOfDailyNeeds": 30.38
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.13,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.04
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.26
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.24
                    }
                ]
            },
            {
                "id": 16058,
                "name": "canned chick peas",
                "amount": 2.33,
                "unit": "oz",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.07,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.45
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.81,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.88
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.13,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.6
                    },
                    {
                        "name": "Fiber",
                        "amount": 2.91,
                        "unit": "g",
                        "percentOfDailyNeeds": 26.55
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 8.92,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.17
                    },
                    {
                        "name": "Folate",
                        "amount": 16.54,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.76
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.2,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.81
                    },
                    {
                        "name": "Selenium",
                        "amount": 1.32,
                        "unit": "µg",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.29,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.09,
                        "unit": "mg",
                        "percentOfDailyNeeds": 32
                    },
                    {
                        "name": "Magnesium",
                        "amount": 17.86,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.54
                    },
                    {
                        "name": "Calories",
                        "amount": 58.21,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 10.94
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 52.92,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.83
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.54,
                        "unit": "mg",
                        "percentOfDailyNeeds": 51.46
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 95.25,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.46
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.14
                    },
                    {
                        "name": "Choline",
                        "amount": 21.56,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 23.15,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.29
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 3.78
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.46,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.47
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 9.92,
                        "unit": "IU",
                        "percentOfDailyNeeds": 13.61
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.25
                    },
                    {
                        "name": "Fat",
                        "amount": 1.29,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.43
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 6.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 7.59
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Protein",
                        "amount": 3.25,
                        "unit": "g",
                        "percentOfDailyNeeds": 30.38
                    },
                    {
                        "name": "Sodium",
                        "amount": 183.89,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.04
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.58,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.31,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.26
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.24
                    }
                ]
            },
            {
                "id": 10011693,
                "name": "canned tomatoes",
                "amount": 4.67,
                "unit": "oz",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 12.17,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.45
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 1.72,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.88
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.05,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.6
                    },
                    {
                        "name": "Fiber",
                        "amount": 2.51,
                        "unit": "g",
                        "percentOfDailyNeeds": 26.55
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 9.64,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.17
                    },
                    {
                        "name": "Folate",
                        "amount": 17.2,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.76
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.37,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.81
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.79,
                        "unit": "µg",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 7.01,
                        "unit": "µg",
                        "percentOfDailyNeeds": 22.89
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.06,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 1.62,
                        "unit": "mg",
                        "percentOfDailyNeeds": 32
                    },
                    {
                        "name": "Sugar",
                        "amount": 5.82,
                        "unit": "g",
                        "percentOfDailyNeeds": 12.2
                    },
                    {
                        "name": "Magnesium",
                        "amount": 26.46,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.54
                    },
                    {
                        "name": "Calories",
                        "amount": 42.34,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 10.94
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 42.34,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0.24,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.83
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.24,
                        "unit": "mg",
                        "percentOfDailyNeeds": 51.46
                    },
                    {
                        "name": "Lycopene",
                        "amount": 6755.12,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 387.63,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.46
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.07,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.14
                    },
                    {
                        "name": "Choline",
                        "amount": 17.07,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 44.98,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.29
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 3.78
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.36,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.47
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 284.44,
                        "unit": "IU",
                        "percentOfDailyNeeds": 13.61
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.25
                    },
                    {
                        "name": "Fat",
                        "amount": 0.37,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.43
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 7.13,
                        "unit": "g",
                        "percentOfDailyNeeds": 7.59
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 1.65,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.98
                    },
                    {
                        "name": "Protein",
                        "amount": 2.17,
                        "unit": "g",
                        "percentOfDailyNeeds": 30.38
                    },
                    {
                        "name": "Sodium",
                        "amount": 174.63,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.04
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.15,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.2,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.26
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.24
                    }
                ]
            },
            {
                "id": 11165,
                "name": "cilantro",
                "amount": 0.08,
                "unit": "cup",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.36,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.45
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.88
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.6
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.04,
                        "unit": "g",
                        "percentOfDailyNeeds": 26.55
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.05,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.17
                    },
                    {
                        "name": "Folate",
                        "amount": 0.83,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.76
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.81
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.01,
                        "unit": "µg",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 4.13,
                        "unit": "µg",
                        "percentOfDailyNeeds": 22.89
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 32
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 12.2
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.35,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.54
                    },
                    {
                        "name": "Calories",
                        "amount": 0.31,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 10.94
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0.64,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.83
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 51.46
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 6.95,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.46
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.14
                    },
                    {
                        "name": "Choline",
                        "amount": 0.17,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.89,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.29
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 3.78
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.47
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 89.97,
                        "unit": "IU",
                        "percentOfDailyNeeds": 13.61
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.25
                    },
                    {
                        "name": "Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.43
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 7.59
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.98
                    },
                    {
                        "name": "Protein",
                        "amount": 0.03,
                        "unit": "g",
                        "percentOfDailyNeeds": 30.38
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.61,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.04
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.26
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.24
                    }
                ]
            },
            {
                "id": 1034053,
                "name": "extra virgin olive oil",
                "amount": 0.17,
                "unit": "Tbsp",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.45
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.88
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.32,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.6
                    },
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 26.55
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.17
                    },
                    {
                        "name": "Folate",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.76
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.81
                    },
                    {
                        "name": "Selenium",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 1.4,
                        "unit": "µg",
                        "percentOfDailyNeeds": 22.89
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 1.7,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 32
                    },
                    {
                        "name": "Sugar",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 12.2
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.54
                    },
                    {
                        "name": "Calories",
                        "amount": 20.63,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 10.94
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.83
                    },
                    {
                        "name": "Manganese",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 51.46
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.46
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.14
                    },
                    {
                        "name": "Choline",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.29
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 3.78
                    },
                    {
                        "name": "Zinc",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.47
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0,
                        "unit": "IU",
                        "percentOfDailyNeeds": 13.61
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.25
                    },
                    {
                        "name": "Fat",
                        "amount": 2.33,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.43
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 7.59
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.34,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.98
                    },
                    {
                        "name": "Protein",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 30.38
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.04
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.25,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.26
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.24
                    }
                ]
            },
            {
                "id": 6984,
                "name": "fat free chicken broth",
                "amount": 0.33,
                "unit": "c",
                "nutrients": [
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.45
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.88
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.6
                    },
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 26.55
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.11,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.17
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.09,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.81
                    },
                    {
                        "name": "Folate",
                        "amount": 0.76,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.76
                    },
                    {
                        "name": "Selenium",
                        "amount": 1.66,
                        "unit": "µg",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 22.89
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.42,
                        "unit": "mg",
                        "percentOfDailyNeeds": 32
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.76,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.54
                    },
                    {
                        "name": "Calories",
                        "amount": 3.03,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 10.94
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.11,
                        "unit": "g",
                        "percentOfDailyNeeds": 12.2
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 8.32,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.83
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 51.46
                    },
                    {
                        "name": "Potassium",
                        "amount": 22.7,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.46
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.14
                    },
                    {
                        "name": "Calcium",
                        "amount": 3.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.29
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.15,
                        "unit": "µg",
                        "percentOfDailyNeeds": 3.78
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.47
                    },
                    {
                        "name": "Fat",
                        "amount": 0.13,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.43
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.11,
                        "unit": "g",
                        "percentOfDailyNeeds": 7.59
                    },
                    {
                        "name": "Protein",
                        "amount": 0.41,
                        "unit": "g",
                        "percentOfDailyNeeds": 30.38
                    },
                    {
                        "name": "Sodium",
                        "amount": 309.48,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.04
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.24
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.26
                    }
                ]
            },
            {
                "id": 20081,
                "name": "flour",
                "amount": 0.17,
                "unit": "Tbsp",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 1.93,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.45
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.88
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.6
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.03,
                        "unit": "g",
                        "percentOfDailyNeeds": 26.55
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.95,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.17
                    },
                    {
                        "name": "Folate",
                        "amount": 2.29,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.76
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.81
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.42,
                        "unit": "µg",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 22.89
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.07,
                        "unit": "mg",
                        "percentOfDailyNeeds": 32
                    },
                    {
                        "name": "Sugar",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 12.2
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.28,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.54
                    },
                    {
                        "name": "Calories",
                        "amount": 4.55,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 10.94
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 1.35,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.83
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 51.46
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 1.34,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.46
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.14
                    },
                    {
                        "name": "Choline",
                        "amount": 0.13,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.19,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.29
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 3.78
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.47
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0,
                        "unit": "IU",
                        "percentOfDailyNeeds": 13.61
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.25
                    },
                    {
                        "name": "Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.43
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.92,
                        "unit": "g",
                        "percentOfDailyNeeds": 7.59
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.98
                    },
                    {
                        "name": "Protein",
                        "amount": 0.13,
                        "unit": "g",
                        "percentOfDailyNeeds": 30.38
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.04
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.26
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.24
                    }
                ]
            },
            {
                "id": 11216,
                "name": "fresh ginger root",
                "amount": 0.17,
                "unit": "tsp",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.45
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.88
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.6
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 26.55
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.06,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.17
                    },
                    {
                        "name": "Folate",
                        "amount": 0.04,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.76
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.81
                    },
                    {
                        "name": "Selenium",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 22.89
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 32
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 12.2
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.14,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.54
                    },
                    {
                        "name": "Calories",
                        "amount": 0.27,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 10.94
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.83
                    },
                    {
                        "name": "Manganese",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 51.46
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 1.38,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.46
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.14
                    },
                    {
                        "name": "Choline",
                        "amount": 0.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.29
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 3.78
                    },
                    {
                        "name": "Zinc",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.47
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0,
                        "unit": "IU",
                        "percentOfDailyNeeds": 13.61
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.25
                    },
                    {
                        "name": "Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.43
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.05,
                        "unit": "g",
                        "percentOfDailyNeeds": 7.59
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.98
                    },
                    {
                        "name": "Protein",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 30.38
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.04
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.26
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.24
                    }
                ]
            },
            {
                "id": 11215,
                "name": "garlic clove",
                "amount": 0.17,
                "unit": "",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.16,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.45
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.88
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.6
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 26.55
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.17,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.17
                    },
                    {
                        "name": "Folate",
                        "amount": 0.02,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.76
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.81
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.07,
                        "unit": "µg",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.01,
                        "unit": "µg",
                        "percentOfDailyNeeds": 22.89
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 32
                    },
                    {
                        "name": "Sugar",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 12.2
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.13,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.54
                    },
                    {
                        "name": "Calories",
                        "amount": 0.74,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 10.94
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0.77,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.83
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 51.46
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 2,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.46
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.14
                    },
                    {
                        "name": "Choline",
                        "amount": 0.12,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.9,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.29
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 3.78
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.47
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.05,
                        "unit": "IU",
                        "percentOfDailyNeeds": 13.61
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.25
                    },
                    {
                        "name": "Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.43
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.16,
                        "unit": "g",
                        "percentOfDailyNeeds": 7.59
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.98
                    },
                    {
                        "name": "Protein",
                        "amount": 0.03,
                        "unit": "g",
                        "percentOfDailyNeeds": 30.38
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.09,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.04
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.26
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.24
                    }
                ]
            },
            {
                "id": 1002030,
                "name": "ground pepper",
                "amount": 1,
                "unit": "servings",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.45
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.88
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.6
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.03,
                        "unit": "g",
                        "percentOfDailyNeeds": 26.55
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.06,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.17
                    },
                    {
                        "name": "Folate",
                        "amount": 0.02,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.76
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.81
                    },
                    {
                        "name": "Selenium",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.16,
                        "unit": "µg",
                        "percentOfDailyNeeds": 22.89
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 32
                    },
                    {
                        "name": "Sugar",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 12.2
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.17,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.54
                    },
                    {
                        "name": "Calories",
                        "amount": 0.25,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 10.94
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0.16,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.83
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 51.46
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0.02,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 1.33,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.46
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.14
                    },
                    {
                        "name": "Choline",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Trans Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 50.26
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.44,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.29
                    },
                    {
                        "name": "Fluoride",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 3.78
                    },
                    {
                        "name": "Zinc",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.47
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.55,
                        "unit": "IU",
                        "percentOfDailyNeeds": 13.61
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.25
                    },
                    {
                        "name": "Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.43
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.04,
                        "unit": "g",
                        "percentOfDailyNeeds": 7.59
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.98
                    },
                    {
                        "name": "Protein",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 30.38
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.04
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.26
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.24
                    }
                ]
            },
            {
                "id": 19296,
                "name": "honey",
                "amount": 0.17,
                "unit": "Tbsp",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.45
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.88
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.6
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 26.55
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 2.88,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.17
                    },
                    {
                        "name": "Folate",
                        "amount": 0.07,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.76
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.81
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.03,
                        "unit": "µg",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 22.89
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 32
                    },
                    {
                        "name": "Sugar",
                        "amount": 2.87,
                        "unit": "g",
                        "percentOfDailyNeeds": 12.2
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.07,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.54
                    },
                    {
                        "name": "Calories",
                        "amount": 10.64,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 10.94
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0.14,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.83
                    },
                    {
                        "name": "Manganese",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 51.46
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 1.82,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.46
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.14
                    },
                    {
                        "name": "Choline",
                        "amount": 0.08,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.21,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.29
                    },
                    {
                        "name": "Fluoride",
                        "amount": 0.25,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 3.78
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.47
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0,
                        "unit": "IU",
                        "percentOfDailyNeeds": 13.61
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.25
                    },
                    {
                        "name": "Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.43
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 2.88,
                        "unit": "g",
                        "percentOfDailyNeeds": 7.59
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.98
                    },
                    {
                        "name": "Protein",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 30.38
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.14,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.04
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.26
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.24
                    }
                ]
            },
            {
                "id": 11282,
                "name": "onion",
                "amount": 0.17,
                "unit": "",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 1.36,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.45
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.88
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.6
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.31,
                        "unit": "g",
                        "percentOfDailyNeeds": 26.55
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 1.71,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.17
                    },
                    {
                        "name": "Folate",
                        "amount": 3.48,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.76
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.81
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.09,
                        "unit": "µg",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.07,
                        "unit": "µg",
                        "percentOfDailyNeeds": 22.89
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 32
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.78,
                        "unit": "g",
                        "percentOfDailyNeeds": 12.2
                    },
                    {
                        "name": "Magnesium",
                        "amount": 1.83,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.54
                    },
                    {
                        "name": "Calories",
                        "amount": 7.33,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 10.94
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 5.32,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.83
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 51.46
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 26.77,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.46
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.14
                    },
                    {
                        "name": "Choline",
                        "amount": 1.12,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 4.22,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.29
                    },
                    {
                        "name": "Fluoride",
                        "amount": 0.2,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 3.78
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.47
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.37,
                        "unit": "IU",
                        "percentOfDailyNeeds": 13.61
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.25
                    },
                    {
                        "name": "Fat",
                        "amount": 0.02,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.43
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 1.4,
                        "unit": "g",
                        "percentOfDailyNeeds": 7.59
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.98
                    },
                    {
                        "name": "Protein",
                        "amount": 0.2,
                        "unit": "g",
                        "percentOfDailyNeeds": 30.38
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.73,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.04
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.26
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.24
                    }
                ]
            },
            {
                "id": 1055062,
                "name": "skinless boneless chicken breasts",
                "amount": 0.33,
                "unit": "large",
                "nutrients": [
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.45,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.45
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 24.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.14,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.88
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.21,
                        "unit": "g",
                        "percentOfDailyNeeds": 5.6
                    },
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 26.55
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.17
                    },
                    {
                        "name": "Folate",
                        "amount": 1.51,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.76
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.54,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.81
                    },
                    {
                        "name": "Selenium",
                        "amount": 12.05,
                        "unit": "µg",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.08,
                        "unit": "µg",
                        "percentOfDailyNeeds": 22.89
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.29,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 3.93,
                        "unit": "mg",
                        "percentOfDailyNeeds": 32
                    },
                    {
                        "name": "Sugar",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 12.2
                    },
                    {
                        "name": "Magnesium",
                        "amount": 9.79,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.54
                    },
                    {
                        "name": "Calories",
                        "amount": 42.94,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 10.94
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 79.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.83
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 51.46
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 139.37,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.46
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.14
                    },
                    {
                        "name": "Choline",
                        "amount": 27.65,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Trans Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 50.26
                    },
                    {
                        "name": "Calcium",
                        "amount": 1.88,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.29
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.08,
                        "unit": "µg",
                        "percentOfDailyNeeds": 3.78
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.22,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.47
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 11.3,
                        "unit": "IU",
                        "percentOfDailyNeeds": 13.61
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0.04,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0.25
                    },
                    {
                        "name": "Fat",
                        "amount": 0.98,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.43
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 7.59
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.07,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.98
                    },
                    {
                        "name": "Protein",
                        "amount": 8,
                        "unit": "g",
                        "percentOfDailyNeeds": 30.38
                    },
                    {
                        "name": "Sodium",
                        "amount": 43.69,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.04
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.15,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.28,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.26
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 12.24
                    }
                ]
            }
        ],
        "caloricBreakdown": {
            "percentProtein": 26.2,
            "percentFat": 26.32,
            "percentCarbs": 47.48
        },
        "weightPerServing": {
            "amount": 357,
            "unit": "g"
        }
    },
    "summary": "Need a <b>dairy free main course</b>? Moroccan Chicken Tagine could be an excellent recipe to try. This recipe serves 6 and costs $1.27 per serving. One serving contains <b>228 calories</b>, <b>16g of protein</b>, and <b>7g of fat</b>. 6 people have made this recipe and would make it again. Head to the store and pick up salt and ground pepper, honey, flour, and a few other things to make it today. To use up the almond you could follow this main course with the <a href=\"https://spoonacular.com/recipes/almond-cake-599638\">Almond Cake</a> as a dessert. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 81%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/moroccan-chicken-tagine-100347\">Moroccan Chicken Tagine</a>, <a href=\"https://spoonacular.com/recipes/moroccan-chicken-tagine-124767\">Moroccan Chicken Tagine</a>, and <a href=\"https://spoonacular.com/recipes/moroccan-chicken-tagine-264133\">Moroccan Chicken Tagine</a> for similar recipes.",
    "cuisines": [],
    "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    "diets": [
        "dairy free"
    ],
    "occasions": [],
    "winePairing": {},
    "instructions": "<ol><li>In a pie plate, combine the flour and Moroccan spice mixture. Add chicken pieces and toss to coat.</li><li>Heat oil in your pressure cooker over medium-high heat. Once hot, add the chicken pieces and allow to brown for one minute per side. Remove chicken from pressure cooker and set aside.</li><li>Reduce heat to medium and add ginger and onions. Saute for three minutes, until onions are semi-translucent. Add garlic and cook for another minute.</li><li>Add the apricots, whole tomatoes, chicken broth or stock, and browned chicken pieces to the pot.</li><li>Cover, and bring to low pressure over medium-high heat. Once you have reached pressure, cook for eight minutes then remove from heat and release the pressure using the quick release method (open the steam valve).</li><li>Stir in the chick peas, almonds, and honey and let them warm for a few minutes.</li><li>Check your chicken for done-ness and taste the tagine. Adjust salt and pepper as needed. Serve over couscous and garnish with cilantro leaves.</li><li>*If using a Dutch Oven instead, follow steps 1-4 as described, then bring the mixture to a boil, reduce to a simmer, and cook for 20-25 minutes or until apricots are tender. Continue with step 6.</li></ol>",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "In a pie plate, combine the flour and Moroccan spice mixture.",
                    "ingredients": [
                        {
                            "id": 20081,
                            "name": "all purpose flour",
                            "localizedName": "all purpose flour",
                            "image": "flour.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 2,
                    "step": "Add chicken pieces and toss to coat.",
                    "ingredients": [
                        {
                            "id": 1005006,
                            "name": "chicken pieces",
                            "localizedName": "chicken pieces",
                            "image": "chicken-parts.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 3,
                    "step": "Heat oil in your pressure cooker over medium-high heat. Once hot, add the chicken pieces and allow to brown for one minute per side.",
                    "ingredients": [
                        {
                            "id": 1005006,
                            "name": "chicken pieces",
                            "localizedName": "chicken pieces",
                            "image": "chicken-parts.jpg"
                        },
                        {
                            "id": 4582,
                            "name": "cooking oil",
                            "localizedName": "cooking oil",
                            "image": "vegetable-oil.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404658,
                            "name": "pressure cooker",
                            "localizedName": "pressure cooker",
                            "image": "pressure-cooker.jpg"
                        }
                    ],
                    "length": {
                        "number": 1,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 4,
                    "step": "Remove chicken from pressure cooker and set aside.Reduce heat to medium and add ginger and onions.",
                    "ingredients": [
                        {
                            "id": 5006,
                            "name": "whole chicken",
                            "localizedName": "whole chicken",
                            "image": "whole-chicken.jpg"
                        },
                        {
                            "id": 11216,
                            "name": "ginger",
                            "localizedName": "ginger",
                            "image": "ginger.png"
                        },
                        {
                            "id": 11282,
                            "name": "onion",
                            "localizedName": "onion",
                            "image": "brown-onion.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404658,
                            "name": "pressure cooker",
                            "localizedName": "pressure cooker",
                            "image": "pressure-cooker.jpg"
                        }
                    ]
                },
                {
                    "number": 5,
                    "step": "Saute for three minutes, until onions are semi-translucent.",
                    "ingredients": [
                        {
                            "id": 11282,
                            "name": "onion",
                            "localizedName": "onion",
                            "image": "brown-onion.png"
                        }
                    ],
                    "equipment": [],
                    "length": {
                        "number": 3,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 6,
                    "step": "Add garlic and cook for another minute.",
                    "ingredients": [
                        {
                            "id": 11215,
                            "name": "garlic",
                            "localizedName": "garlic",
                            "image": "garlic.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 7,
                    "step": "Add the apricots, whole tomatoes, chicken broth or stock, and browned chicken pieces to the pot.Cover, and bring to low pressure over medium-high heat. Once you have reached pressure, cook for eight minutes then remove from heat and release the pressure using the quick release method (open the steam valve).Stir in the chick peas, almonds, and honey and let them warm for a few minutes.Check your chicken for done-ness and taste the tagine. Adjust salt and pepper as needed.",
                    "ingredients": [
                        {
                            "id": 1102047,
                            "name": "salt and pepper",
                            "localizedName": "salt and pepper",
                            "image": "salt-and-pepper.jpg"
                        },
                        {
                            "id": 1005006,
                            "name": "chicken pieces",
                            "localizedName": "chicken pieces",
                            "image": "chicken-parts.jpg"
                        },
                        {
                            "id": 10711529,
                            "name": "whole tomato",
                            "localizedName": "whole tomato",
                            "image": "tomato.png"
                        },
                        {
                            "id": 6194,
                            "name": "chicken broth",
                            "localizedName": "chicken broth",
                            "image": "chicken-broth.png"
                        },
                        {
                            "id": 16057,
                            "name": "chickpeas",
                            "localizedName": "chickpeas",
                            "image": "chickpeas.png"
                        },
                        {
                            "id": 9021,
                            "name": "apricot",
                            "localizedName": "apricot",
                            "image": "apricot.jpg"
                        },
                        {
                            "id": 12061,
                            "name": "almonds",
                            "localizedName": "almonds",
                            "image": "almonds.jpg"
                        },
                        {
                            "id": 5006,
                            "name": "whole chicken",
                            "localizedName": "whole chicken",
                            "image": "whole-chicken.jpg"
                        },
                        {
                            "id": 19296,
                            "name": "honey",
                            "localizedName": "honey",
                            "image": "honey.png"
                        },
                        {
                            "id": 1006615,
                            "name": "stock",
                            "localizedName": "stock",
                            "image": "chicken-broth.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404774,
                            "name": "tajine pot",
                            "localizedName": "tajine pot",
                            "image": "tajine.jpg"
                        },
                        {
                            "id": 404752,
                            "name": "pot",
                            "localizedName": "pot",
                            "image": "stock-pot.jpg"
                        }
                    ],
                    "length": {
                        "number": 8,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 8,
                    "step": "Serve over couscous and garnish with cilantro leaves.*If using a Dutch Oven instead, follow steps 1-4 as described, then bring the mixture to a boil, reduce to a simmer, and cook for 20-25 minutes or until apricots are tender. Continue with step 6.",
                    "ingredients": [
                        {
                            "id": 11165,
                            "name": "fresh cilantro",
                            "localizedName": "fresh cilantro",
                            "image": "cilantro.png"
                        },
                        {
                            "id": 9021,
                            "name": "apricot",
                            "localizedName": "apricot",
                            "image": "apricot.jpg"
                        },
                        {
                            "id": 20028,
                            "name": "couscous",
                            "localizedName": "couscous",
                            "image": "couscous-cooked.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404667,
                            "name": "dutch oven",
                            "localizedName": "dutch oven",
                            "image": "dutch-oven.jpg"
                        }
                    ],
                    "length": {
                        "number": 25,
                        "unit": "minutes"
                    }
                }
            ]
        }
    ],
    "originalId": null,
    "spoonacularSourceUrl": "https://spoonacular.com/moroccan-chicken-tagine-652421"
})

onMounted(async () => {
    const recipeId = route.params.id
    try {
        const response = await getRecipeById(recipeId, true);
        recipe.value = response.data.value;
    } catch (error) {
        console.log(error);
    }
})

</script>

<route lang="json">
{
    "meta": {
        "title": "RecipeInfo"
    }
}
</route>

<!-- ORIGINAL
    <template>
    <div class="mx-auto">
        <div v-if="recipe === null" class="mt-10">
            <Loader />
        </div>

        <div v-else class="lg:mt-24 mb-10">
            // Summary Wrapper
            <Summary :recipe="recipe" />

            // Instructions 
            <div class="mt-16">
                <Instructions :recipe="recipe" />
            </div>
        </div>
    </div>
</template> -->

<template>
    <div>
        <div v-if="recipe === null" class="mt-10">
            <Loader />
        </div>

        <div v-else class="lg:mt-24 mb-10">
            <!-- Summary Wrapper -->
            <div class="container grid grid-cols-12">
                <div class=""></div>
                <div>
                    <Summary :recipe="recipe" />
                </div>
                <div class=""></div>
            </div>
            <!-- Instructions -->
            <div class="container grid grid-cols-7 mt-10">
                <div class=""></div>
                <div class="col-span-5">
                    <Instructions :recipe="recipe" />
                </div>
                <div class=""></div>
            </div>
        </div>
    </div>
</template>
