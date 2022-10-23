<script setup>
import { ref, onBeforeMount } from 'vue'
import { getRandomRecommendations } from '../../apis/recipes'

const randomRecipes = ref([
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 19,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 86,
        "healthScore": 14,
        "creditsText": "afrolems.com",
        "sourceName": "afrolems.com",
        "pricePerServing": 115.06,
        "extendedIngredients": [
            {
                "id": 20081,
                "aisle": "Baking",
                "image": "flour.png",
                "consistency": "SOLID",
                "name": "all purpose flour",
                "nameClean": "wheat flour",
                "original": "2 cups of All purpose Flour",
                "originalName": "All purpose Flour",
                "amount": 2,
                "unit": "cups",
                "meta": [],
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
                "id": 18079,
                "aisle": "Pasta and Rice",
                "image": "breadcrumbs.jpg",
                "consistency": "SOLID",
                "name": "breadcrumbs",
                "nameClean": "breadcrumbs",
                "original": "2 cups of Dried Breadcrumbs",
                "originalName": "Dried Breadcrumbs",
                "amount": 2,
                "unit": "cups",
                "meta": [
                    "dried"
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
                "id": 1123,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "egg.png",
                "consistency": "SOLID",
                "name": "egg",
                "nameClean": "egg",
                "original": "1 egg for coating (not boiled)",
                "originalName": "egg for coating (not boiled)",
                "amount": 1,
                "unit": "",
                "meta": [
                    "boiled",
                    "for coating (not )"
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
                "id": 7063,
                "aisle": "Meat",
                "image": "meat-ground.jpg",
                "consistency": "SOLID",
                "name": "ground sausage",
                "nameClean": "ground pork sausage",
                "original": "300g ground sausage",
                "originalName": "ground sausage",
                "amount": 300,
                "unit": "g",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 10.582,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 300,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 1129,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "hard-boiled-egg.png",
                "consistency": "SOLID",
                "name": "hard-boiled eggs",
                "nameClean": "hard boiled egg",
                "original": "5 Hard-boiled Eggs",
                "originalName": "Hard-boiled Eggs",
                "amount": 5,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 5,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 5,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 4582,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "vegetable-oil.jpg",
                "consistency": "LIQUID",
                "name": "oil",
                "nameClean": "cooking oil",
                "original": "Oil for deep frying",
                "originalName": "Oil for deep frying",
                "amount": 5,
                "unit": "servings",
                "meta": [
                    "for deep frying"
                ],
                "measures": {
                    "us": {
                        "amount": 5,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 5,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 1002030,
                "aisle": "Spices and Seasonings",
                "image": "pepper.jpg",
                "consistency": "SOLID",
                "name": "pepper",
                "nameClean": "black pepper",
                "original": "A pinch of dry Pepper",
                "originalName": "A of dry Pepper",
                "amount": 1,
                "unit": "pinch",
                "meta": [
                    "dry"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "pinch",
                        "unitLong": "pinch"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "pinch",
                        "unitLong": "pinch"
                    }
                }
            },
            {
                "id": 2047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "salt",
                "nameClean": "table salt",
                "original": "½ teaspoon of Salt",
                "originalName": "Salt",
                "amount": 0.5,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 1026076,
                "aisle": "Canned and Jarred",
                "image": "no.jpg",
                "consistency": "SOLID",
                "name": "stock cube",
                "nameClean": "bouillon cube",
                "original": "1 stock cube",
                "originalName": "stock cube",
                "amount": 1,
                "unit": "",
                "meta": [],
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
                "id": 14412,
                "aisle": "Beverages",
                "image": "water.png",
                "consistency": "LIQUID",
                "name": "water",
                "nameClean": "water",
                "original": "3 cups of water",
                "originalName": "water",
                "amount": 3,
                "unit": "cups",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 3,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 709.764,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            }
        ],
        "id": 716363,
        "title": "Scotch Egg",
        "readyInMinutes": 45,
        "servings": 5,
        "sourceUrl": "http://www.afrolems.com/2012/11/29/scotch-egg-recipe-nigerian-snacks/",
        "image": "https://spoonacular.com/recipeImages/716363-556x370.jpg",
        "imageType": "jpg",
        "summary": "Need a <b>dairy free beverage</b>? Scotch Egg could be an amazing recipe to try. One serving contains <b>639 calories</b>, <b>28g of protein</b>, and <b>26g of fat</b>. For <b>$1.15 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. 86 people have made this recipe and would make it again. If you have stock cube, salt, egg, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 76%</b>. This score is pretty good. Try <a href=\"https://spoonacular.com/recipes/breakfast-egg-muffins-924745\">Breakfast Egg Muffins</a>, <a href=\"https://spoonacular.com/recipes/mexican-egg-casserole-922845\">Mexican Egg Casserole</a>, and <a href=\"https://spoonacular.com/recipes/scotch-egg-151282\">Scotch Egg</a> for similar recipes.",
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
        "instructions": "",
        "analyzedInstructions": [],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/scotch-egg-716363"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 32,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 124,
        "healthScore": 100,
        "creditsText": "afrolems.com",
        "sourceName": "afrolems.com",
        "pricePerServing": 355.78,
        "extendedIngredients": [
            {
                "id": 10211821,
                "aisle": "Produce",
                "image": "bell-pepper-orange.png",
                "consistency": "SOLID",
                "name": "bell peppers",
                "nameClean": "bell pepper",
                "original": "Bell Peppers for garnishing",
                "originalName": "Bell Peppers for garnishing",
                "amount": 1,
                "unit": "serving",
                "meta": [
                    "for garnishing"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 5006,
                "aisle": "Meat",
                "image": "whole-chicken.jpg",
                "consistency": "SOLID",
                "name": "chicken",
                "nameClean": "whole chicken",
                "original": "1.5 cups of Chopped Chicken",
                "originalName": "Chopped Chicken",
                "amount": 1.5,
                "unit": "cups",
                "meta": [
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 1.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 354.882,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 4582,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "vegetable-oil.jpg",
                "consistency": "LIQUID",
                "name": "cooking oil",
                "nameClean": "cooking oil",
                "original": "2.5 Cooking spoons of oil",
                "originalName": "Cooking spoons of oil",
                "amount": 2.5,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2.5,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 2.5,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 93605,
                "aisle": "Ethnic Foods",
                "image": "chili-paste.png",
                "consistency": "SOLID",
                "name": "curry paste",
                "nameClean": "red curry paste",
                "original": "1 teaspoon of Curry",
                "originalName": "Curry",
                "amount": 1,
                "unit": "teaspoon",
                "meta": [],
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
                "name": "garlic cloves",
                "nameClean": "garlic",
                "original": "2 garlic cloves",
                "originalName": "garlic cloves",
                "amount": 2,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11216,
                "aisle": "Produce;Ethnic Foods;Spices and Seasonings",
                "image": "ginger.png",
                "consistency": "SOLID",
                "name": "ginger",
                "nameClean": "ginger",
                "original": "Small piece of Chopped ginger",
                "originalName": "Small of Chopped ginger",
                "amount": 1,
                "unit": "piece",
                "meta": [
                    "chopped"
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
                "id": 16091,
                "aisle": "Nuts;Savory Snacks",
                "image": "peanuts.png",
                "consistency": "SOLID",
                "name": "groundnut",
                "nameClean": "peanuts",
                "original": "1 cup of groundnut (Blended) or 1 Cooking spoon of peanut Butter",
                "originalName": "groundnut (Blended) or 1 Cooking spoon of peanut Butter",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "(Blended)"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 11282,
                "aisle": "Produce",
                "image": "brown-onion.png",
                "consistency": "SOLID",
                "name": "onions",
                "nameClean": "onion",
                "original": "2 handfuls of Chopped onions",
                "originalName": "Chopped onions",
                "amount": 2,
                "unit": "handfuls",
                "meta": [
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "handfuls",
                        "unitLong": "handfuls"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "handfuls",
                        "unitLong": "handfuls"
                    }
                }
            },
            {
                "id": 10211821,
                "aisle": "Produce",
                "image": "bell-pepper-orange.png",
                "consistency": "SOLID",
                "name": "bell pepper",
                "nameClean": "bell pepper",
                "original": "Pepper",
                "originalName": "Pepper",
                "amount": 1,
                "unit": "serving",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 2047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "salt",
                "nameClean": "table salt",
                "original": "Salt",
                "originalName": "Salt",
                "amount": 1,
                "unit": "serving",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 1042027,
                "aisle": null,
                "image": "seasoning.png",
                "consistency": "SOLID",
                "name": "seasoning",
                "nameClean": "seasoning",
                "original": "Seasoning",
                "originalName": "Seasoning",
                "amount": 1,
                "unit": "serving",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 11507,
                "aisle": "Produce",
                "image": "sweet-potato.png",
                "consistency": "SOLID",
                "name": "sweet potato",
                "nameClean": "sweet potato",
                "original": "1/2 small sweet potato (Chopped)",
                "originalName": "sweet potato (Chopped)",
                "amount": 0.5,
                "unit": "small",
                "meta": [
                    "chopped",
                    "()"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "small",
                        "unitLong": "smalls"
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "small",
                        "unitLong": "smalls"
                    }
                }
            },
            {
                "id": 2049,
                "aisle": "Produce;Spices and Seasonings",
                "image": "thyme.jpg",
                "consistency": "SOLID",
                "name": "thyme",
                "nameClean": "thyme",
                "original": "Pinch of thyme",
                "originalName": "Pinch of thyme",
                "amount": 1,
                "unit": "pinch",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "pinch",
                        "unitLong": "pinch"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "pinch",
                        "unitLong": "pinch"
                    }
                }
            },
            {
                "id": 11529,
                "aisle": "Produce",
                "image": "tomato.png",
                "consistency": "SOLID",
                "name": "tomato",
                "nameClean": "tomato",
                "original": "1 Chopped small tomato",
                "originalName": "Chopped small tomato",
                "amount": 1,
                "unit": "small",
                "meta": [
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "small",
                        "unitLong": "small"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "small",
                        "unitLong": "small"
                    }
                }
            },
            {
                "id": 11529,
                "aisle": "Produce",
                "image": "tomato.png",
                "consistency": "SOLID",
                "name": "tomato",
                "nameClean": "tomato",
                "original": "1.5 Cooking spoons of Blended tomato",
                "originalName": "Cooking spoons of Blended tomato",
                "amount": 1.5,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.5,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1.5,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            }
        ],
        "id": 716268,
        "title": "African Chicken Peanut Stew",
        "readyInMinutes": 45,
        "servings": 1,
        "sourceUrl": "http://www.afrolems.com/2014/03/18/african-chicken-peanut-stew-recipe/",
        "image": "https://spoonacular.com/recipeImages/716268-556x370.jpg",
        "imageType": "jpg",
        "summary": "Need a <b>gluten free and dairy free main course</b>? African Chicken Peanut Stew could be a tremendous recipe to try. This recipe makes 1 servings with <b>1377 calories</b>, <b>75g of protein</b>, and <b>102g of fat</b> each. For <b>$3.87 per serving</b>, this recipe <b>covers 62%</b> of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. 124 people have tried and liked this recipe. Head to the store and pick up bell peppers, tomato, pepper, and a few other things to make it today. To use up the tomato you could follow this main course with the <a href=\"https://spoonacular.com/recipes/pink-peony-popcorn-balls-129348\">Pink Peony Popcorn Balls</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. Try <a href=\"https://spoonacular.com/recipes/african-chicken-peanut-stew-245461\">African Chicken Peanut Stew</a>, <a href=\"https://spoonacular.com/recipes/west-african-peanut-chicken-stew-163315\">West African Peanut-Chicken Stew</a>, and <a href=\"https://spoonacular.com/recipes/one-pot-african-peanut-stew-854978\">One-Pot African Peanut Stew</a> for similar recipes.",
        "cuisines": [
            "African"
        ],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "dairy free"
        ],
        "occasions": [
            "fall",
            "winter"
        ],
        "instructions": "Season and Boil the Chicken for 10 minutes with salt, pepper, seasoning, a handful of onions.Once the chicken is ready, in the same stock, Boil the chopped sweet potatoes till its almost cooked. Save the stock in a separate Bowl and the chicken and potatoes in a separate Bowl as well.In a pot, heat up one cooking spoon of oil and fry the chicken till it Browns. Take it out and heat up the other 1.5 cooking spoons of oil and fry the onions, tomatoes Both chopped and Blended, ginger and garlic.Add your seasoning, curry, thyme, parsley, salt and pepper to the pot.Pour in your stock, chicken and potatoes to cook further.Stir in your peanut Butter and allow to cook for 10 minutes on low heat.If your sauce gets too thick, add a little water to it. Serve with white rice or more sweet potatoes.You could also garnish the dish with Bell peppers.   ",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Season and Boil the Chicken for 10 minutes with salt, pepper, seasoning, a handful of onions.Once the chicken is ready, in the same stock, Boil the chopped sweet potatoes till its almost cooked. Save the stock in a separate Bowl and the chicken and potatoes in a separate Bowl as well.In a pot, heat up one cooking spoon of oil and fry the chicken till it Browns. Take it out and heat up the other 1.5 cooking spoons of oil and fry the onions, tomatoes Both chopped and Blended, ginger and garlic.",
                        "ingredients": [
                            {
                                "id": 11507,
                                "name": "sweet potato",
                                "localizedName": "sweet potato",
                                "image": "sweet-potato.png"
                            },
                            {
                                "id": 1042027,
                                "name": "seasoning",
                                "localizedName": "seasoning",
                                "image": "seasoning.png"
                            },
                            {
                                "id": 11352,
                                "name": "potato",
                                "localizedName": "potato",
                                "image": "potatoes-yukon-gold.png"
                            },
                            {
                                "id": 11529,
                                "name": "tomato",
                                "localizedName": "tomato",
                                "image": "tomato.png"
                            },
                            {
                                "id": 5006,
                                "name": "whole chicken",
                                "localizedName": "whole chicken",
                                "image": "whole-chicken.jpg"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
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
                            },
                            {
                                "id": 1002030,
                                "name": "pepper",
                                "localizedName": "pepper",
                                "image": "pepper.jpg"
                            },
                            {
                                "id": 1006615,
                                "name": "stock",
                                "localizedName": "stock",
                                "image": "chicken-broth.png"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
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
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            },
                            {
                                "id": 404752,
                                "name": "pot",
                                "localizedName": "pot",
                                "image": "stock-pot.jpg"
                            }
                        ],
                        "length": {
                            "number": 10,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 2,
                        "step": "Add your seasoning, curry, thyme, parsley, salt and pepper to the pot.",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 1042027,
                                "name": "seasoning",
                                "localizedName": "seasoning",
                                "image": "seasoning.png"
                            },
                            {
                                "id": 11297,
                                "name": "parsley",
                                "localizedName": "parsley",
                                "image": "parsley.jpg"
                            },
                            {
                                "id": 2015,
                                "name": "curry powder",
                                "localizedName": "curry powder",
                                "image": "curry-powder.jpg"
                            },
                            {
                                "id": 2049,
                                "name": "thyme",
                                "localizedName": "thyme",
                                "image": "thyme.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404752,
                                "name": "pot",
                                "localizedName": "pot",
                                "image": "stock-pot.jpg"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Pour in your stock, chicken and potatoes to cook further.Stir in your peanut Butter and allow to cook for 10 minutes on low heat.If your sauce gets too thick, add a little water to it.",
                        "ingredients": [
                            {
                                "id": 16098,
                                "name": "peanut butter",
                                "localizedName": "peanut butter",
                                "image": "peanut-butter.png"
                            },
                            {
                                "id": 11352,
                                "name": "potato",
                                "localizedName": "potato",
                                "image": "potatoes-yukon-gold.png"
                            },
                            {
                                "id": 5006,
                                "name": "whole chicken",
                                "localizedName": "whole chicken",
                                "image": "whole-chicken.jpg"
                            },
                            {
                                "id": 0,
                                "name": "sauce",
                                "localizedName": "sauce",
                                "image": ""
                            },
                            {
                                "id": 1006615,
                                "name": "stock",
                                "localizedName": "stock",
                                "image": "chicken-broth.png"
                            },
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 10,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 4,
                        "step": "Serve with white rice or more sweet potatoes.You could also garnish the dish with Bell peppers.   ",
                        "ingredients": [
                            {
                                "id": 11507,
                                "name": "sweet potato",
                                "localizedName": "sweet potato",
                                "image": "sweet-potato.png"
                            },
                            {
                                "id": 10211821,
                                "name": "bell pepper",
                                "localizedName": "bell pepper",
                                "image": "bell-pepper-orange.png"
                            },
                            {
                                "id": 10220444,
                                "name": "white rice",
                                "localizedName": "white rice",
                                "image": "uncooked-white-rice.png"
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/african-chicken-peanut-stew-716268"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": true,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 56,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 7,
        "healthScore": 66,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 765.82,
        "extendedIngredients": [
            {
                "id": 11457,
                "aisle": "Produce",
                "image": "spinach.jpg",
                "consistency": "SOLID",
                "name": "baby spinach",
                "nameClean": "baby spinach",
                "original": "3 cups fresh baby spinach",
                "originalName": "fresh baby spinach",
                "amount": 3,
                "unit": "cups",
                "meta": [
                    "fresh"
                ],
                "measures": {
                    "us": {
                        "amount": 3,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 709.764,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 11043,
                "aisle": "Produce;Ethnic Foods",
                "image": "bean-sprouts.jpg",
                "consistency": "SOLID",
                "name": "bean sprouts",
                "nameClean": "bean sprouts",
                "original": "1 1/2 cups bean sprouts",
                "originalName": "bean sprouts",
                "amount": 1.5,
                "unit": "cups",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 354.882,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 23572,
                "aisle": "Frozen;Meat",
                "image": "beef-cubes-raw.png",
                "consistency": "SOLID",
                "name": "beef",
                "nameClean": "beef",
                "original": "3/4 pound thin strips sirloin, rib eye or bulgogi beef",
                "originalName": "thin strips sirloin, rib eye or bulgogi beef",
                "amount": 0.75,
                "unit": "pound",
                "meta": [
                    "thin"
                ],
                "measures": {
                    "us": {
                        "amount": 0.75,
                        "unitShort": "lb",
                        "unitLong": "pounds"
                    },
                    "metric": {
                        "amount": 340.194,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 99169,
                "aisle": "Bread",
                "image": "bread-bowl.png",
                "consistency": "SOLID",
                "name": "bread bowls",
                "nameClean": "bread bowls",
                "original": "4 dolsot stone bowls (available at Asian markets)",
                "originalName": "dolsot stone bowls (available at Asian markets)",
                "amount": 4,
                "unit": "",
                "meta": [
                    "(available at Asian markets)"
                ],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11109,
                "aisle": "Produce",
                "image": "cabbage.jpg",
                "consistency": "SOLID",
                "name": "cabbage",
                "nameClean": "cabbage",
                "original": "10 ounces cabbage kimchi",
                "originalName": "cabbage kimchi",
                "amount": 10,
                "unit": "ounces",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 10,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 283.495,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 11124,
                "aisle": "Produce",
                "image": "sliced-carrot.png",
                "consistency": "SOLID",
                "name": "carrots",
                "nameClean": "carrot",
                "original": "1 cup carrots, julienned",
                "originalName": "carrots, julienned",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "julienned"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1125,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "egg-yolk.jpg",
                "consistency": "SOLID",
                "name": "egg yolks",
                "nameClean": "egg yolk",
                "original": "4 egg yolks",
                "originalName": "egg yolks",
                "amount": 4,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11238,
                "aisle": "Produce",
                "image": "shiitake-mushrooms.png",
                "consistency": "SOLID",
                "name": "fresh shiitake mushrooms",
                "nameClean": "shiitake mushrooms",
                "original": "1 cup fresh shiitake mushrooms, thinly sliced",
                "originalName": "fresh shiitake mushrooms, thinly sliced",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "fresh",
                    "thinly sliced"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
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
                "id": 11291,
                "aisle": "Produce",
                "image": "spring-onions.jpg",
                "consistency": "SOLID",
                "name": "green onions",
                "nameClean": "spring onions",
                "original": "1 cup green onions, chopped",
                "originalName": "green onions, chopped",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 99000,
                "aisle": "Ethnic Foods",
                "image": "dark-sauce.jpg",
                "consistency": "SOLID",
                "name": "korean barbecue marinade",
                "nameClean": "korean bbq marinade",
                "original": "1 cup Korean barbecue bulgogi marinade",
                "originalName": "Korean barbecue bulgogi marinade",
                "amount": 1,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1016973,
                "aisle": "Ethnic Foods",
                "image": "chili-paste.png",
                "consistency": "LIQUID",
                "name": "red pepper paste",
                "nameClean": "gochujang",
                "original": "1/4 cup kochujang vinegared hot pepper paste",
                "originalName": "kochujang vinegared hot pepper paste",
                "amount": 0.25,
                "unit": "cup",
                "meta": [
                    "hot"
                ],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 59.147,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "salt",
                "nameClean": "table salt",
                "original": "Pinch of salt",
                "originalName": "Pinch of salt",
                "amount": 1,
                "unit": "pinch",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "pinch",
                        "unitLong": "pinch"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "pinch",
                        "unitLong": "pinch"
                    }
                }
            },
            {
                "id": 4058,
                "aisle": "Ethnic Foods",
                "image": "sesame-oil.png",
                "consistency": "LIQUID",
                "name": "sesame oil",
                "nameClean": "sesame oil",
                "original": "1/4 cup sesame oil",
                "originalName": "sesame oil",
                "amount": 0.25,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 59.147,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 12023,
                "aisle": "Ethnic Foods;Spices and Seasonings",
                "image": "sesame-seeds.png",
                "consistency": "SOLID",
                "name": "sesame seeds",
                "nameClean": "sesame seeds",
                "original": "2 teaspoons toasted sesame seeds",
                "originalName": "toasted sesame seeds",
                "amount": 2,
                "unit": "teaspoons",
                "meta": [
                    "toasted"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 10120052,
                "aisle": "Pasta and Rice",
                "image": "uncooked-white-rice.png",
                "consistency": "SOLID",
                "name": "short grain rice",
                "nameClean": "short grain rice",
                "original": "4 cups short grain white rice, cooked",
                "originalName": "short grain white rice, cooked",
                "amount": 4,
                "unit": "cups",
                "meta": [
                    "white",
                    "cooked"
                ],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 946.352,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 19335,
                "aisle": "Baking",
                "image": "sugar-in-bowl.png",
                "consistency": "SOLID",
                "name": "sugar",
                "nameClean": "sugar",
                "original": "Pinch of sugar",
                "originalName": "Pinch of sugar",
                "amount": 1,
                "unit": "pinch",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "pinch",
                        "unitLong": "pinch"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "pinch",
                        "unitLong": "pinch"
                    }
                }
            },
            {
                "id": 10220054,
                "aisle": "Pasta and Rice",
                "image": "uncooked-white-rice.png",
                "consistency": "SOLID",
                "name": "sushi rice",
                "nameClean": "sushi rice",
                "original": "3 cups high grade Korean sushi rice",
                "originalName": "high grade Korean sushi rice",
                "amount": 3,
                "unit": "cups",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 3,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 709.764,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 16213,
                "aisle": "Refrigerated;Produce;Ethnic Foods",
                "image": "tofu.png",
                "consistency": "SOLID",
                "name": "tofu",
                "nameClean": "tofu",
                "original": "3/4 cup firm tofu, rinsed and cut into 1-inch cubes",
                "originalName": "firm tofu, rinsed and cut into 1-inch cubes",
                "amount": 0.75,
                "unit": "cup",
                "meta": [
                    "firm",
                    "rinsed",
                    "cut into 1-inch cubes"
                ],
                "measures": {
                    "us": {
                        "amount": 0.75,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 177.441,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 11477,
                "aisle": "Produce",
                "image": "zucchini.jpg",
                "consistency": "SOLID",
                "name": "zucchini",
                "nameClean": "zucchini",
                "original": "1 cup zucchini, julienned",
                "originalName": "zucchini, julienned",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "julienned"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            }
        ],
        "id": 641559,
        "title": "Dolsot Bibimbap",
        "readyInMinutes": 45,
        "servings": 4,
        "sourceUrl": "http://www.foodista.com/recipe/2522ZFCV/dolsot-bibimbap",
        "image": "https://spoonacular.com/recipeImages/641559-556x370.jpg",
        "imageType": "jpg",
        "summary": "Dolsot Bibimbap might be just the <b>Korean</b> recipe you are searching for. For <b>$7.66 per serving</b>, this recipe <b>covers 61%</b> of your daily requirements of vitamins and minerals. This main course has <b>1860 calories</b>, <b>52g of protein</b>, and <b>40g of fat</b> per serving. Only a few people made this recipe, and 7 would say it hit the spot. From preparation to the plate, this recipe takes about <b>45 minutes</b>. A mixture of salt, kochujang vinegared pepper paste, short grain rice, and a handful of other ingredients are all it takes to make this recipe so tasty. To use up the bread bowls you could follow this main course with the <a href=\"https://spoonacular.com/recipes/six-banana-banana-bread-519932\">Six-Banana Banana Bread</a> as a dessert. It is a good option if you're following a <b>dairy free</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 93%</b>. This score is tremendous. Try <a href=\"https://spoonacular.com/recipes/bibimbap-191073\">Bibimbap</a>, <a href=\"https://spoonacular.com/recipes/bibimbap-564930\">Bibimbap</a>, and <a href=\"https://spoonacular.com/recipes/bibimbap-37433\">Bibimbap</a> for similar recipes.",
        "cuisines": [
            "Korean",
            "Asian"
        ],
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
        "instructions": "<ol><li>Marinate beef and tofu overnight in Korean barbecue marinade.</li><li>Cook rice and keep warm.</li><li>In sesame oil and a pinch of salt, saut carrots and zucchini until almost tender. If necessary add a bit more sesame oil and toss in the remaining vegetables, garlic and a pinch of sugar and continue to saut approximately 2 minutes, or until the vegetables are almost done (they will continue to cook in the dolsot or stone bowl)</li><li>Broil or barbecue the beef.</li><li>Pour a 1/2 - 1 teaspoon of sesame oil in the base of each stone bowl. Divide rice between the 4 stone bowls. Arrange all ingredients on top of the rice side by side around the bowl. Put a teaspoon (or more depending on taste) of the Korean chilli paste on top of the vegetables and in the middle of the bowl place an egg yolk. Pour a tablespoon of sesame seed oil around the edge of the bowl.</li><li>Place stone bowl on top of stove and on high heat leave for approx 5 minutes or until you can hear the rice popping and crackling.</li><li>Remove from heat and serve. Be very careful as the stone bowl will be extremely hot.</li></ol>",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Marinate beef and tofu overnight in Korean barbecue marinade.Cook rice and keep warm.In sesame oil and a pinch of salt, saut carrots and zucchini until almost tender. If necessary add a bit more sesame oil and toss in the remaining vegetables, garlic and a pinch of sugar and continue to saut approximately 2 minutes, or until the vegetables are almost done (they will continue to cook in the dolsot or stone bowl)Broil or barbecue the beef.",
                        "ingredients": [
                            {
                                "id": 99000,
                                "name": "korean bbq marinade",
                                "localizedName": "korean bbq marinade",
                                "image": "dark-sauce.jpg"
                            },
                            {
                                "id": 4058,
                                "name": "sesame oil",
                                "localizedName": "sesame oil",
                                "image": "sesame-oil.png"
                            },
                            {
                                "id": 11583,
                                "name": "vegetable",
                                "localizedName": "vegetable",
                                "image": "mixed-vegetables.png"
                            },
                            {
                                "id": 11477,
                                "name": "zucchini",
                                "localizedName": "zucchini",
                                "image": "zucchini.jpg"
                            },
                            {
                                "id": 11124,
                                "name": "carrot",
                                "localizedName": "carrot",
                                "image": "sliced-carrot.png"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            },
                            {
                                "id": 19335,
                                "name": "sugar",
                                "localizedName": "sugar",
                                "image": "sugar-in-bowl.png"
                            },
                            {
                                "id": 23572,
                                "name": "beef",
                                "localizedName": "beef",
                                "image": "beef-cubes-raw.png"
                            },
                            {
                                "id": 20444,
                                "name": "rice",
                                "localizedName": "rice",
                                "image": "uncooked-white-rice.png"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
                            },
                            {
                                "id": 16213,
                                "name": "tofu",
                                "localizedName": "tofu",
                                "image": "tofu.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ],
                        "length": {
                            "number": 2,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 2,
                        "step": "Pour a 1/2 - 1 teaspoon of sesame oil in the base of each stone bowl. Divide rice between the 4 stone bowls. Arrange all ingredients on top of the rice side by side around the bowl. Put a teaspoon (or more depending on taste) of the Korean chilli paste on top of the vegetables and in the middle of the bowl place an egg yolk.",
                        "ingredients": [
                            {
                                "id": 4058,
                                "name": "sesame oil",
                                "localizedName": "sesame oil",
                                "image": "sesame-oil.png"
                            },
                            {
                                "id": 11583,
                                "name": "vegetable",
                                "localizedName": "vegetable",
                                "image": "mixed-vegetables.png"
                            },
                            {
                                "id": 1125,
                                "name": "egg yolk",
                                "localizedName": "egg yolk",
                                "image": "egg-yolk.jpg"
                            },
                            {
                                "id": 11819,
                                "name": "chili pepper",
                                "localizedName": "chili pepper",
                                "image": "red-chili.jpg"
                            },
                            {
                                "id": 0,
                                "name": "base",
                                "localizedName": "base",
                                "image": ""
                            },
                            {
                                "id": 20444,
                                "name": "rice",
                                "localizedName": "rice",
                                "image": "uncooked-white-rice.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Pour a tablespoon of sesame seed oil around the edge of the bowl.",
                        "ingredients": [
                            {
                                "id": 4058,
                                "name": "sesame oil",
                                "localizedName": "sesame oil",
                                "image": "sesame-oil.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 4,
                        "step": "Place stone bowl on top of stove and on high heat leave for approx 5 minutes or until you can hear the rice popping and crackling.",
                        "ingredients": [
                            {
                                "id": 20444,
                                "name": "rice",
                                "localizedName": "rice",
                                "image": "uncooked-white-rice.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404794,
                                "name": "stove",
                                "localizedName": "stove",
                                "image": "oven.jpg"
                            },
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ],
                        "length": {
                            "number": 5,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 5,
                        "step": "Remove from heat and serve. Be very careful as the stone bowl will be extremely hot.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/dolsot-bibimbap-641559"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": true,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 14,
        "gaps": "no",
        "preparationMinutes": 30,
        "cookingMinutes": 30,
        "aggregateLikes": 1416,
        "healthScore": 8,
        "creditsText": "pinkwhen.com",
        "sourceName": "pinkwhen.com",
        "pricePerServing": 175.64,
        "extendedIngredients": [
            {
                "id": 5062,
                "aisle": "Meat",
                "image": "chicken-breasts.png",
                "consistency": "SOLID",
                "name": "chicken breasts",
                "nameClean": "chicken breast",
                "original": "2 grilled chicken breasts",
                "originalName": "grilled chicken breasts",
                "amount": 2,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 10220445,
                "aisle": "Pasta and Rice",
                "image": "rice-white-long-grain-or-basmatii-cooked.jpg",
                "consistency": "SOLID",
                "name": "cooked rice",
                "nameClean": "cooked rice",
                "original": "2 cups rice (cooked)",
                "originalName": "rice (cooked)",
                "amount": 2,
                "unit": "cups",
                "meta": [
                    "cooked",
                    "()"
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
                "id": 1017,
                "aisle": "Cheese",
                "image": "cream-cheese.jpg",
                "consistency": "SOLID",
                "name": "cream cheese",
                "nameClean": "cream cheese",
                "original": "1 8oz package cream cheese",
                "originalName": "package cream cheese",
                "amount": 8,
                "unit": "oz",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 8,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 226.796,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 6147,
                "aisle": "Canned and Jarred",
                "image": "cream-of-mushroom-soup.png",
                "consistency": "LIQUID",
                "name": "cream of mushroom soup",
                "nameClean": "condensed cream of mushroom soup",
                "original": "1 10oz. can cream of mushroom soup",
                "originalName": "cream of mushroom soup",
                "amount": 10,
                "unit": "oz",
                "meta": [
                    "canned"
                ],
                "measures": {
                    "us": {
                        "amount": 10,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 283.495,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 11333,
                "aisle": "Produce",
                "image": "green-pepper.jpg",
                "consistency": "SOLID",
                "name": "green bell pepper",
                "nameClean": "green pepper",
                "original": "1 medium green pepper",
                "originalName": "green pepper",
                "amount": 1,
                "unit": "medium",
                "meta": [
                    "green"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "medium",
                        "unitLong": "medium"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "medium",
                        "unitLong": "medium"
                    }
                }
            },
            {
                "id": 1001025,
                "aisle": "Cheese",
                "image": "shredded-cheese-white.jpg",
                "consistency": "SOLID",
                "name": "jack cheese",
                "nameClean": "monterey jack cheese",
                "original": "1½ cup shredded Monterrey Jack cheese",
                "originalName": "shredded Monterrey Jack cheese",
                "amount": 1.5,
                "unit": "cup",
                "meta": [
                    "shredded"
                ],
                "measures": {
                    "us": {
                        "amount": 1.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 354.882,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 10011282,
                "aisle": "Produce",
                "image": "red-onion.png",
                "consistency": "SOLID",
                "name": "red onion",
                "nameClean": "red onion",
                "original": "½ red onion",
                "originalName": "red onion",
                "amount": 0.5,
                "unit": "",
                "meta": [
                    "red"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 1102047,
                "aisle": "Spices and Seasonings",
                "image": "salt-and-pepper.jpg",
                "consistency": "SOLID",
                "name": "salt and pepper",
                "nameClean": "salt and pepper",
                "original": "Salt and pepper to taste",
                "originalName": "Salt and pepper to taste",
                "amount": 6,
                "unit": "servings",
                "meta": [
                    "to taste"
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
                "id": 4673,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "light-buttery-spread.png",
                "consistency": "SOLID",
                "name": "soy buttery spread",
                "nameClean": "soy buttery spread",
                "original": "2 Tbsp Country crock buttery spread",
                "originalName": "Country crock buttery spread",
                "amount": 2,
                "unit": "Tbsp",
                "meta": [],
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
            }
        ],
        "id": 715397,
        "title": "Cheesy Chicken and Rice Casserole",
        "readyInMinutes": 60,
        "servings": 6,
        "sourceUrl": "http://www.pinkwhen.com/cheesy-chicken-and-rice-casserole-bake/",
        "image": "https://spoonacular.com/recipeImages/715397-556x370.jpg",
        "imageType": "jpg",
        "summary": "Cheesy Chicken and Rice Casserole might be just the main course you are searching for. One serving contains <b>410 calories</b>, <b>21g of protein</b>, and <b>27g of fat</b>. This gluten free recipe serves 6 and costs <b>$1.42 per serving</b>. From preparation to the plate, this recipe takes approximately <b>1 hour</b>. 1411 person have made this recipe and would make it again. If you have monterrey jack cheese, rice, country crock buttery spread, and a few other ingredients on hand, you can make it. To use up the salt and pepper you could follow this main course with the <a href=\"https://spoonacular.com/recipes/dr-pepper-cake-with-flour-cooked-frosting-539165\">Dr. Pepper Cake with Flour Cooked Frosting</a> as a dessert. It will be a hit at your <b>Autumn</b> event. All things considered, we decided this recipe <b>deserves a spoonacular score of 58%</b>. This score is solid. Try <a href=\"https://spoonacular.com/recipes/cheesy-chicken-and-rice-casserole-170797\">Cheesy Chicken and Rice Casserole</a>, <a href=\"https://spoonacular.com/recipes/cheesy-chicken-and-rice-casserole-114311\">Cheesy Chicken and Rice Casserole</a>, and <a href=\"https://spoonacular.com/recipes/cheesy-chicken-and-wild-rice-casserole-12092\">Cheesy Chicken And Wild Rice Casserole</a> for similar recipes.",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free"
        ],
        "occasions": [
            "fall",
            "winter"
        ],
        "instructions": "<p>Heat your oven to 350.Take your 2 grilled chicken breasts and allow them to slightly cool. Shred chicken breasts and place to the side in a mixing bowl.Finely chop your pepper and onion and saut in 2 Tbsp Country Crock for 5 minutes until soft.Add cream cheese into the onion and pepper and mix well.Pour into the large bowl with chicken. Mix in rice, hot sauce, cream of mushroom soup,  cup Monterrey Jack cheese, and salt and pepper. Mix well.Pour mixture in a 9 x 13 dish, and cover with remaining cheese and add salt and pepper to taste. Bake for 30 minutes. Allow to cool for 5 minutes before serving.</p>",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Heat your oven to 350.Take your 2 grilled chicken breasts and allow them to slightly cool. Shred chicken breasts and place to the side in a mixing bowl.Finely chop your pepper and onion and saut in 2 Tbsp Country Crock for 5 minutes until soft.",
                        "ingredients": [
                            {
                                "id": 5064,
                                "name": "cooked chicken breast",
                                "localizedName": "cooked chicken breast",
                                "image": "cooked-chicken-breast.png"
                            },
                            {
                                "id": 5062,
                                "name": "chicken breast",
                                "localizedName": "chicken breast",
                                "image": "chicken-breasts.png"
                            },
                            {
                                "id": 1002030,
                                "name": "pepper",
                                "localizedName": "pepper",
                                "image": "pepper.jpg"
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
                                "id": 405907,
                                "name": "mixing bowl",
                                "localizedName": "mixing bowl",
                                "image": "mixing-bowl.jpg"
                            },
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ],
                        "length": {
                            "number": 5,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 2,
                        "step": "Add cream cheese into the onion and pepper and mix well.",
                        "ingredients": [
                            {
                                "id": 1017,
                                "name": "cream cheese",
                                "localizedName": "cream cheese",
                                "image": "cream-cheese.jpg"
                            },
                            {
                                "id": 1002030,
                                "name": "pepper",
                                "localizedName": "pepper",
                                "image": "pepper.jpg"
                            },
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 3,
                        "step": "Pour into the large bowl with chicken.",
                        "ingredients": [
                            {
                                "id": 5006,
                                "name": "whole chicken",
                                "localizedName": "whole chicken",
                                "image": "whole-chicken.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 4,
                        "step": "Mix in rice, hot sauce, cream of mushroom soup,  cup Monterrey Jack cheese, and salt and pepper.",
                        "ingredients": [
                            {
                                "id": 6147,
                                "name": "cream of mushroom soup",
                                "localizedName": "cream of mushroom soup",
                                "image": "cream-of-mushroom-soup.png"
                            },
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 1001025,
                                "name": "monterey jack cheese",
                                "localizedName": "monterey jack cheese",
                                "image": "shredded-cheese-white.jpg"
                            },
                            {
                                "id": 6168,
                                "name": "hot sauce",
                                "localizedName": "hot sauce",
                                "image": "hot-sauce-or-tabasco.png"
                            },
                            {
                                "id": 20444,
                                "name": "rice",
                                "localizedName": "rice",
                                "image": "uncooked-white-rice.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 5,
                        "step": "Mix well.",
                        "ingredients": [],
                        "equipment": []
                    },
                    {
                        "number": 6,
                        "step": "Pour mixture in a 9 x 13 dish, and cover with remaining cheese and add salt and pepper to taste.",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 1041009,
                                "name": "cheese",
                                "localizedName": "cheese",
                                "image": "cheddar-cheese.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 7,
                        "step": "Bake for 30 minutes. Allow to cool for 5 minutes before serving.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ],
                        "length": {
                            "number": 35,
                            "unit": "minutes"
                        }
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/cheesy-chicken-and-rice-casserole-715397"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 10,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 39,
        "healthScore": 25,
        "creditsText": "afrolems.com",
        "sourceName": "afrolems.com",
        "pricePerServing": 263.46,
        "extendedIngredients": [
            {
                "id": 1022030,
                "aisle": "Spices and Seasonings",
                "image": "black-pepper.png",
                "consistency": "SOLID",
                "name": "black peppercorns",
                "nameClean": "black peppercorns",
                "original": "4 whole black peppercorns",
                "originalName": "whole black peppercorns",
                "amount": 4,
                "unit": "",
                "meta": [
                    "whole",
                    "black"
                ],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 1002006,
                "aisle": "Spices and Seasonings",
                "image": "cardamom.jpg",
                "consistency": "SOLID",
                "name": "cardamom pods",
                "nameClean": "cardamom pods",
                "original": "4 cardamom pods",
                "originalName": "cardamom pods",
                "amount": 4,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 1002010,
                "aisle": "Spices and Seasonings",
                "image": "cinnamon.jpg",
                "consistency": "SOLID",
                "name": "cinnamon sticks",
                "nameClean": "cinnamon stick",
                "original": "4 cinnamon sticks",
                "originalName": "cinnamon sticks",
                "amount": 4,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 2014,
                "aisle": "Spices and Seasonings",
                "image": "ground-cumin.jpg",
                "consistency": "SOLID",
                "name": "cumin seed",
                "nameClean": "cumin seeds",
                "original": "4 teaspoons of cumin seed powder",
                "originalName": "cumin seed powder",
                "amount": 4,
                "unit": "teaspoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 11215,
                "aisle": "Produce",
                "image": "garlic.png",
                "consistency": "SOLID",
                "name": "garlic",
                "nameClean": "garlic",
                "original": "2 cloves of garlic",
                "originalName": "garlic",
                "amount": 2,
                "unit": "cloves",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "cloves",
                        "unitLong": "cloves"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "cloves",
                        "unitLong": "cloves"
                    }
                }
            },
            {
                "id": 11216,
                "aisle": "Produce;Ethnic Foods;Spices and Seasonings",
                "image": "ginger.png",
                "consistency": "SOLID",
                "name": "ginger",
                "nameClean": "ginger",
                "original": "1/2 teaspoon of ginger",
                "originalName": "ginger",
                "amount": 0.5,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 1065062,
                "aisle": null,
                "image": "whole-chicken.jpg",
                "consistency": "SOLID",
                "name": "meat",
                "nameClean": "meat",
                "original": "1 pound of goat meat",
                "originalName": "goat meat",
                "amount": 1,
                "unit": "pound",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "lb",
                        "unitLong": "pound"
                    },
                    "metric": {
                        "amount": 453.592,
                        "unitShort": "g",
                        "unitLong": "grams"
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
                "original": "1 small onion",
                "originalName": "onion",
                "amount": 1,
                "unit": "small",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "small",
                        "unitLong": "small"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "small",
                        "unitLong": "small"
                    }
                }
            },
            {
                "id": 20444,
                "aisle": "Pasta and Rice",
                "image": "uncooked-white-rice.png",
                "consistency": "SOLID",
                "name": "rice",
                "nameClean": "rice",
                "original": "1.5 cups of Rice ( you can use basmati rice)",
                "originalName": "Rice ( you can use basmati rice)",
                "amount": 1.5,
                "unit": "cups",
                "meta": [
                    "canned",
                    "( you can use basmati rice)"
                ],
                "measures": {
                    "us": {
                        "amount": 1.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 354.882,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "salt",
                "nameClean": "table salt",
                "original": "Salt to taste",
                "originalName": "Salt to taste",
                "amount": 4,
                "unit": "servings",
                "meta": [
                    "to taste"
                ],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 15270,
                "aisle": "Seafood",
                "image": "shrimp.png",
                "consistency": "SOLID",
                "name": "shrimp",
                "nameClean": "shrimp",
                "original": "1 cup of dressed shrimp",
                "originalName": "dressed shrimp",
                "amount": 1,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 11529,
                "aisle": "Produce",
                "image": "tomato.png",
                "consistency": "SOLID",
                "name": "tomatoes",
                "nameClean": "tomato",
                "original": "2 small tomatoes",
                "originalName": "tomatoes",
                "amount": 2,
                "unit": "small",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "small",
                        "unitLong": "smalls"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "small",
                        "unitLong": "smalls"
                    }
                }
            },
            {
                "id": 4513,
                "aisle": null,
                "image": null,
                "consistency": "SOLID",
                "name": "vegetable cooking oil",
                "nameClean": null,
                "original": "1 cooking spoon of vegetable oil",
                "originalName": "cooking spoon of vegetable oil",
                "amount": 1,
                "unit": "",
                "meta": [],
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
            }
        ],
        "id": 716344,
        "title": "Kenyan Pilau",
        "readyInMinutes": 45,
        "servings": 4,
        "sourceUrl": "http://www.afrolems.com/2014/08/19/kenyan-pilau-recipe/",
        "image": "https://spoonacular.com/recipeImages/716344-556x370.jpg",
        "imageType": "jpg",
        "summary": "Kenyan Pilau is a <b>gluten free and dairy free</b> main course. This recipe makes 4 servings with <b>464 calories</b>, <b>37g of protein</b>, and <b>5g of fat</b> each. For <b>$2.7 per serving</b>, this recipe <b>covers 27%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes about <b>45 minutes</b>. Head to the store and pick up tomatoes, cumin seed powder, goat meat, and a few other things to make it today. To use up the rice you could follow this main course with the <a href=\"https://spoonacular.com/recipes/rice-pudding-245761\">Rice Pudding</a> as a dessert. A couple people made this recipe, and 39 would say it hit the spot. All things considered, we decided this recipe <b>deserves a spoonacular score of 78%</b>. This score is pretty good. Try <a href=\"https://spoonacular.com/recipes/kenyan-curried-cabbage-11200\">Kenyan Curried Cabbage</a>, <a href=\"https://spoonacular.com/recipes/kenyan-chicken-curry-21155\">Kenyan Chicken Curry</a>, and <a href=\"https://spoonacular.com/recipes/a-taste-of-africa-kenyan-chicken-curry-101836\">A Taste of Africa - Kenyan Chicken Curry</a> for similar recipes.",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "dairy free"
        ],
        "occasions": [],
        "instructions": "Season and boil the meat and set aside.Chop and crush all the spices and set aside.Heat up the oil and sauté the onions till its golden brown. Add the meat and allow to brown a little then add the spices, and the rice and the chopped tomatoes.Add the shrimps and add 2 cups of water and reduce the heat and allow to steam.Consistently check it to make sure the water has dried and the rice is soft. Once the rice is soft, increase the heat and stir it to let all the spices be absorbed in the rice.Serve with Kachumbari or any other salad.",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Season and boil the meat and set aside.Chop and crush all the spices and set aside.",
                        "ingredients": [
                            {
                                "id": 2035,
                                "name": "spices",
                                "localizedName": "spices",
                                "image": "spices.png"
                            },
                            {
                                "id": 1065062,
                                "name": "meat",
                                "localizedName": "meat",
                                "image": "whole-chicken.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 2,
                        "step": "Heat up the oil and sauté the onions till its golden brown.",
                        "ingredients": [
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            },
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 3,
                        "step": "Add the meat and allow to brown a little then add the spices, and the rice and the chopped tomatoes.",
                        "ingredients": [
                            {
                                "id": 11529,
                                "name": "tomato",
                                "localizedName": "tomato",
                                "image": "tomato.png"
                            },
                            {
                                "id": 2035,
                                "name": "spices",
                                "localizedName": "spices",
                                "image": "spices.png"
                            },
                            {
                                "id": 1065062,
                                "name": "meat",
                                "localizedName": "meat",
                                "image": "whole-chicken.jpg"
                            },
                            {
                                "id": 20444,
                                "name": "rice",
                                "localizedName": "rice",
                                "image": "uncooked-white-rice.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 4,
                        "step": "Add the shrimps and add 2 cups of water and reduce the heat and allow to steam.Consistently check it to make sure the water has dried and the rice is soft. Once the rice is soft, increase the heat and stir it to let all the spices be absorbed in the rice.",
                        "ingredients": [
                            {
                                "id": 15270,
                                "name": "shrimp",
                                "localizedName": "shrimp",
                                "image": "shrimp.png"
                            },
                            {
                                "id": 2035,
                                "name": "spices",
                                "localizedName": "spices",
                                "image": "spices.png"
                            },
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            },
                            {
                                "id": 20444,
                                "name": "rice",
                                "localizedName": "rice",
                                "image": "uncooked-white-rice.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 5,
                        "step": "Serve with Kachumbari or any other salad.",
                        "ingredients": [],
                        "equipment": []
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/kenyan-pilau-716344"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 7,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 11,
        "healthScore": 40,
        "creditsText": "foodista.com",
        "sourceName": "foodista.com",
        "pricePerServing": 265.76,
        "extendedIngredients": [
            {
                "id": 11165,
                "aisle": "Produce;Spices and Seasonings",
                "image": "cilantro.png",
                "consistency": "SOLID",
                "name": "cilantro",
                "nameClean": "cilantro",
                "original": "1 cup cilantro, finely chopped",
                "originalName": "cilantro, finely chopped",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "finely chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
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
                "original": "Extra virgin olive oil",
                "originalName": "Extra virgin olive oil",
                "amount": 4,
                "unit": "servings",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 23657,
                "aisle": "Meat",
                "image": "flank-steak.jpg",
                "consistency": "SOLID",
                "name": "flank steak",
                "nameClean": "flank steak",
                "original": "1 1 pound flank steak",
                "originalName": "flank steak",
                "amount": 1,
                "unit": "pound",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "lb",
                        "unitLong": "pound"
                    },
                    "metric": {
                        "amount": 453.592,
                        "unitShort": "g",
                        "unitLong": "grams"
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
                "original": "3 garlic clove, minced",
                "originalName": "garlic clove, minced",
                "amount": 3,
                "unit": "",
                "meta": [
                    "minced"
                ],
                "measures": {
                    "us": {
                        "amount": 3,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 3,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11979,
                "aisle": "Canned and Jarred;Produce;Ethnic Foods",
                "image": "jalapeno-pepper.png",
                "consistency": "SOLID",
                "name": "jalapeno",
                "nameClean": "jalapeno pepper",
                "original": "½ large jalapeno, seeded and minced ( whole 1 if brave)",
                "originalName": "jalapeno, seeded and minced ( whole 1 if brave)",
                "amount": 0.5,
                "unit": "large",
                "meta": [
                    "whole",
                    "minced",
                    "seeded",
                    "( 1 if brave)"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "large",
                        "unitLong": "larges"
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "large",
                        "unitLong": "larges"
                    }
                }
            },
            {
                "id": 9152,
                "aisle": "Produce",
                "image": "lemon-juice.jpg",
                "consistency": "LIQUID",
                "name": "juice of lemon",
                "nameClean": "lemon juice",
                "original": "1/2 Lemon, juice of",
                "originalName": "Lemon, juice of",
                "amount": 0.5,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 9160,
                "aisle": "Produce",
                "image": "lime-juice.png",
                "consistency": "LIQUID",
                "name": "juice of lime",
                "nameClean": "lime juice",
                "original": "Juice of large ½ lime",
                "originalName": "Juice of ½ lime",
                "amount": 1,
                "unit": "null",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "null",
                        "unitLong": "null"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "null",
                        "unitLong": "null"
                    }
                }
            },
            {
                "id": 1102047,
                "aisle": "Spices and Seasonings",
                "image": "salt-and-pepper.jpg",
                "consistency": "SOLID",
                "name": "salt and pepper",
                "nameClean": "salt and pepper",
                "original": "Salt and pepper",
                "originalName": "Salt and pepper",
                "amount": 4,
                "unit": "servings",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 11291,
                "aisle": "Produce",
                "image": "spring-onions.jpg",
                "consistency": "SOLID",
                "name": "scallions",
                "nameClean": "spring onions",
                "original": "4 scallions, white only finely chopped",
                "originalName": "scallions, white only finely chopped",
                "amount": 4,
                "unit": "",
                "meta": [
                    "white",
                    "finely chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11529,
                "aisle": "Produce",
                "image": "tomato.png",
                "consistency": "SOLID",
                "name": "tomatoes",
                "nameClean": "tomato",
                "original": "2 medium tomatoes, finely chopped",
                "originalName": "tomatoes, finely chopped",
                "amount": 2,
                "unit": "medium",
                "meta": [
                    "finely chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "medium",
                        "unitLong": "mediums"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "medium",
                        "unitLong": "mediums"
                    }
                }
            }
        ],
        "id": 643061,
        "title": "Flank Steak with Herbed Salsa",
        "readyInMinutes": 45,
        "servings": 4,
        "sourceUrl": "http://www.foodista.com/recipe/GJV558KY/flank-steak-with-herbed-salsa",
        "image": "https://spoonacular.com/recipeImages/643061-556x370.jpg",
        "imageType": "jpg",
        "summary": "Flank Steak with Herbed Salsa might be just the main course you are searching for. This caveman, gluten free, dairy free, and primal recipe serves 4 and costs <b>$2.69 per serving</b>. One serving contains <b>301 calories</b>, <b>25g of protein</b>, and <b>20g of fat</b>. It can be enjoyed any time, but it is especially good for <b>valentin day</b>. A few people made this recipe, and 11 would say it hit the spot. A mixture of tomatoes, extra virgin olive oil, scallions, and a handful of other ingredients are all it takes to make this recipe so delicious. To use up the juice of lemon you could follow this main course with the <a href=\"https://spoonacular.com/recipes/fruit-juice-pops-433326\">Fruit Juice Pops</a> as a dessert. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. This recipe is typical of Mexican cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 89%</b>. This score is amazing. Similar recipes include <a href=\"https://spoonacular.com/recipes/herbed-flank-steak-with-tomatoes-81327\">Herbed Flank Steak With Tomatoes</a>, <a href=\"https://spoonacular.com/recipes/southwest-flank-steak-with-salsa-81463\">Southwest Flank Steak with Salsa</a>, and <a href=\"https://spoonacular.com/recipes/flank-steak-with-radish-salsa-44422\">Flank Steak With Radish Salsa</a>.",
        "cuisines": [
            "Mexican"
        ],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "dairy free",
            "paleolithic",
            "primal",
            "whole 30",
            "ketogenic"
        ],
        "occasions": [
            "valentine's day",
            "father's day"
        ],
        "instructions": "<ol><li>Preheat a grill pan or light a grill.</li><li>In a medium bowl, combine the tomatoes with the scallions, cilantro, Jalapeno, garlic and lemon  lime juice. Season the salsa with salt and freshly ground pepper.</li><li>Season with salt and pepper the flank steak.</li><li>Using a grill pan brush a shadow of oil on the bottom of it. Place the pan over high heat and when hot add the flank steak. Cook until nicely charred outside and medium rare inside. About 3 minutes per side.</li><li>Transfer the steak to a carving board and let rest for 5 minutes.</li><li>Thinly slice the steak across the grain and serve with the herbed salsa.</li></ol>",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Preheat a grill pan or light a grill.In a medium bowl, combine the tomatoes with the scallions, cilantro, Jalapeno, garlic and lemon  lime juice. Season the salsa with salt and freshly ground pepper.Season with salt and pepper the flank steak.Using a grill pan brush a shadow of oil on the bottom of it.",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 1002030,
                                "name": "ground black pepper",
                                "localizedName": "ground black pepper",
                                "image": "pepper.jpg"
                            },
                            {
                                "id": 23657,
                                "name": "flank steak",
                                "localizedName": "flank steak",
                                "image": "flank-steak.jpg"
                            },
                            {
                                "id": 9160,
                                "name": "lime juice",
                                "localizedName": "lime juice",
                                "image": "lime-juice.png"
                            },
                            {
                                "id": 11291,
                                "name": "green onions",
                                "localizedName": "green onions",
                                "image": "spring-onions.jpg"
                            },
                            {
                                "id": 11165,
                                "name": "cilantro",
                                "localizedName": "cilantro",
                                "image": "cilantro.png"
                            },
                            {
                                "id": 11979,
                                "name": "jalapeno pepper",
                                "localizedName": "jalapeno pepper",
                                "image": "jalapeno-pepper.png"
                            },
                            {
                                "id": 11529,
                                "name": "tomato",
                                "localizedName": "tomato",
                                "image": "tomato.png"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            },
                            {
                                "id": 9150,
                                "name": "lemon",
                                "localizedName": "lemon",
                                "image": "lemon.png"
                            },
                            {
                                "id": 6164,
                                "name": "salsa",
                                "localizedName": "salsa",
                                "image": "salsa.png"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
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
                                "id": 404648,
                                "name": "grill pan",
                                "localizedName": "grill pan",
                                "image": "grill-pan.jpg"
                            },
                            {
                                "id": 404706,
                                "name": "grill",
                                "localizedName": "grill",
                                "image": "grill.jpg"
                            },
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Place the pan over high heat and when hot add the flank steak. Cook until nicely charred outside and medium rare inside. About 3 minutes per side.",
                        "ingredients": [
                            {
                                "id": 23657,
                                "name": "flank steak",
                                "localizedName": "flank steak",
                                "image": "flank-steak.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ],
                        "length": {
                            "number": 3,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 3,
                        "step": "Transfer the steak to a carving board and let rest for 5 minutes.Thinly slice the steak across the grain and serve with the herbed salsa.",
                        "ingredients": [
                            {
                                "id": 0,
                                "name": "grains",
                                "localizedName": "grains",
                                "image": ""
                            },
                            {
                                "id": 6164,
                                "name": "salsa",
                                "localizedName": "salsa",
                                "image": "salsa.png"
                            },
                            {
                                "id": 23232,
                                "name": "steak",
                                "localizedName": "steak",
                                "image": "ribeye-raw.jpg"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 5,
                            "unit": "minutes"
                        }
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/flank-steak-with-herbed-salsa-643061"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 13,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 7,
        "healthScore": 12,
        "creditsText": "foodista.com",
        "sourceName": "foodista.com",
        "pricePerServing": 235.4,
        "extendedIngredients": [
            {
                "id": 1002046,
                "aisle": "Condiments",
                "image": "dijon-mustard.jpg",
                "consistency": "LIQUID",
                "name": "dijon mustard",
                "nameClean": "creole mustard",
                "original": "2 tablespoons Dijon mustard",
                "originalName": "Dijon mustard",
                "amount": 2,
                "unit": "tablespoons",
                "meta": [],
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
                "id": 1023,
                "aisle": "Cheese",
                "image": "gruyere.jpg",
                "consistency": "SOLID",
                "name": "gruyere cheese",
                "nameClean": "gruyere",
                "original": "½ cup gruyere cheese, shredded",
                "originalName": "gruyere cheese, shredded",
                "amount": 0.5,
                "unit": "cup",
                "meta": [
                    "shredded"
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
                "id": 1053,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "fluid-cream.jpg",
                "consistency": "LIQUID",
                "name": "heavy cream",
                "nameClean": "cream",
                "original": "½ cup heavy cream",
                "originalName": "heavy cream",
                "amount": 0.5,
                "unit": "cup",
                "meta": [],
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
                "id": 4053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "olive oil",
                "nameClean": "olive oil",
                "original": "1 teaspoon Olive oil",
                "originalName": "Olive oil",
                "amount": 1,
                "unit": "teaspoon",
                "meta": [],
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
                "id": 10010062,
                "aisle": "Meat",
                "image": "pork-chops.jpg",
                "consistency": "SOLID",
                "name": "pork chops",
                "nameClean": "pork chops",
                "original": "4 pork chops",
                "originalName": "pork chops",
                "amount": 4,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 1102047,
                "aisle": "Spices and Seasonings",
                "image": "salt-and-pepper.jpg",
                "consistency": "SOLID",
                "name": "salt and pepper",
                "nameClean": "salt and pepper",
                "original": "Salt and pepper",
                "originalName": "Salt and pepper",
                "amount": 4,
                "unit": "servings",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 1145,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "butter-sliced.jpg",
                "consistency": "SOLID",
                "name": "unsalted butter",
                "nameClean": "unsalted butter",
                "original": "1 tablespoon unsalted butter",
                "originalName": "unsalted butter",
                "amount": 1,
                "unit": "tablespoon",
                "meta": [
                    "unsalted"
                ],
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
            }
        ],
        "id": 637569,
        "title": "Cheese Pork Chops",
        "readyInMinutes": 30,
        "servings": 4,
        "sourceUrl": "http://www.foodista.com/recipe/B8SJ2DD4/cheese-pork-chops",
        "image": "https://spoonacular.com/recipeImages/637569-556x370.jpg",
        "imageType": "jpg",
        "summary": "Cheese Pork Chops is a <b>gluten free and primal</b> main course. This recipe serves 4 and costs $2.35 per serving. One serving contains <b>417 calories</b>, <b>35g of protein</b>, and <b>30g of fat</b>. This recipe from Foodista has 7 fans. A mixture of dijon mustard, gruyere cheese, salt and pepper, and a handful of other ingredients are all it takes to make this recipe so scrumptious. To use up the salt and pepper you could follow this main course with the <a href=\"https://spoonacular.com/recipes/dr-pepper-cake-with-flour-cooked-frosting-539165\">Dr. Pepper Cake with Flour Cooked Frosting</a> as a dessert. From preparation to the plate, this recipe takes about <b>30 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 60%</b>. This score is solid. Try <a href=\"https://spoonacular.com/recipes/cream-cheese-pork-chops-397985\">Cream Cheese Pork Chops</a>, <a href=\"https://spoonacular.com/recipes/cheese-onion-pork-chops-222073\">Cheese & onion pork chops</a>, and <a href=\"https://spoonacular.com/recipes/pork-chops-and-cheese-potatoes-121722\">Pork Chops and Cheese Potatoes</a> for similar recipes.",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "primal"
        ],
        "occasions": [],
        "instructions": "<ol><li>In a heavy bottom skillet melt the butter with the olive oil. Saut` the pork chops over medium high 3 minutes on each sided. Lower the heat to medium and cook for another 5 to 6 minutes for side.</li><li>Salt and pepper to taste.</li><li>Meanwhile turn on the broil. Mix together in a bowl the heavy cream, mustard and the cheese. Remove the chops from the stove and place them in a oven proof dish. Spread the cheese-cream mixture over the chops and broil for about 5 minutes.</li></ol>",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "In a heavy bottom skillet melt the butter with the olive oil. Saut` the pork chops over medium high 3 minutes on each sided. Lower the heat to medium and cook for another 5 to 6 minutes for side.Salt and pepper to taste.Meanwhile turn on the broil.",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 10010062,
                                "name": "pork chops",
                                "localizedName": "pork chops",
                                "image": "pork-chops.jpg"
                            },
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "localizedName": "olive oil",
                                "image": "olive-oil.jpg"
                            },
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ],
                        "length": {
                            "number": 8,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 2,
                        "step": "Mix together in a bowl the heavy cream, mustard and the cheese.",
                        "ingredients": [
                            {
                                "id": 1053,
                                "name": "heavy cream",
                                "localizedName": "heavy cream",
                                "image": "fluid-cream.jpg"
                            },
                            {
                                "id": 2046,
                                "name": "mustard",
                                "localizedName": "mustard",
                                "image": "regular-mustard.jpg"
                            },
                            {
                                "id": 1041009,
                                "name": "cheese",
                                "localizedName": "cheese",
                                "image": "cheddar-cheese.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Remove the chops from the stove and place them in a oven proof dish.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404794,
                                "name": "stove",
                                "localizedName": "stove",
                                "image": "oven.jpg"
                            },
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ]
                    },
                    {
                        "number": 4,
                        "step": "Spread the cheese-cream mixture over the chops and broil for about 5 minutes.",
                        "ingredients": [
                            {
                                "id": 1041009,
                                "name": "cheese",
                                "localizedName": "cheese",
                                "image": "cheddar-cheese.png"
                            },
                            {
                                "id": 0,
                                "name": "spread",
                                "localizedName": "spread",
                                "image": ""
                            },
                            {
                                "id": 1053,
                                "name": "cream",
                                "localizedName": "cream",
                                "image": "fluid-cream.jpg"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 5,
                            "unit": "minutes"
                        }
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/cheese-pork-chops-637569"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 8,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 53,
        "healthScore": 3,
        "creditsText": "foodista.com",
        "sourceName": "foodista.com",
        "pricePerServing": 62.27,
        "extendedIngredients": [
            {
                "id": 5006,
                "aisle": "Meat",
                "image": "whole-chicken.jpg",
                "consistency": "SOLID",
                "name": "chicken",
                "nameClean": "whole chicken",
                "original": "2 pounds chicken",
                "originalName": "chicken",
                "amount": 2,
                "unit": "pounds",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "lb",
                        "unitLong": "pounds"
                    },
                    "metric": {
                        "amount": 907.185,
                        "unitShort": "g",
                        "unitLong": "grams"
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
                "original": "3/4 cup flour",
                "originalName": "flour",
                "amount": 0.75,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.75,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 177.441,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "salt",
                "nameClean": "table salt",
                "original": "2 teaspoons salt",
                "originalName": "salt",
                "amount": 2,
                "unit": "teaspoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 2028,
                "aisle": "Spices and Seasonings",
                "image": "paprika.jpg",
                "consistency": "SOLID",
                "name": "paprika",
                "nameClean": "paprika",
                "original": "1 teaspoon paprika",
                "originalName": "paprika",
                "amount": 1,
                "unit": "teaspoon",
                "meta": [],
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
                "id": 1002030,
                "aisle": "Spices and Seasonings",
                "image": "pepper.jpg",
                "consistency": "SOLID",
                "name": "pepper",
                "nameClean": "black pepper",
                "original": "1 teaspoon pepper",
                "originalName": "pepper",
                "amount": 1,
                "unit": "teaspoon",
                "meta": [],
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
                "id": 1230,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "buttermilk.jpg",
                "consistency": "SOLID",
                "name": "buttermilk",
                "nameClean": "buttermilk",
                "original": "1 cup buttermilk",
                "originalName": "buttermilk",
                "amount": 1,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 4513,
                "aisle": null,
                "image": null,
                "consistency": "SOLID",
                "name": "vegetable oil",
                "nameClean": null,
                "original": "Vegetable oil (enough to cover chicken), about 1 quart",
                "originalName": "Vegetable oil (enough to cover chicken), about 1 quart",
                "amount": 1,
                "unit": "serving",
                "meta": [
                    "to cover chicken), 1 quart"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            }
        ],
        "id": 640803,
        "title": "Crispy Buttermilk Fried Chicken",
        "readyInMinutes": 45,
        "servings": 6,
        "sourceUrl": "https://www.foodista.com/recipe/G2QDD6GF/crispy-buttermilk-fried-chicken",
        "image": "https://spoonacular.com/recipeImages/640803-556x370.jpg",
        "imageType": "jpg",
        "summary": "Forget going out to eat or ordering takeout every time you crave Southern food. Try making Crispy Buttermilk Fried Chicken at home. One portion of this dish contains roughly <b>16g of protein</b>, <b>15g of fat</b>, and a total of <b>260 calories</b>. For <b>62 cents per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. 53 people found this recipe to be delicious and satisfying. This recipe from Foodista requires vegetable oil, buttermilk, salt, and paprika. It works best as a main course, and is done in roughly <b>around 45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 38%</b>, which is rather bad. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/crispy-buttermilk-fried-chicken-912357\">Crispy Buttermilk Fried Chicken</a>, <a href=\"https://spoonacular.com/recipes/crispy-buttermilk-fried-chicken-32074\">Crispy Buttermilk Fried Chicken</a>, and <a href=\"https://spoonacular.com/recipes/crispy-oven-fried-buttermilk-chicken-244810\">Crispy Oven Fried Buttermilk Chicken</a>.",
        "cuisines": [
            "Southern"
        ],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [],
        "occasions": [],
        "instructions": "Mix flour, salt, paprika and pepper. Dip chicken in buttermilk and then into flour mixture. Cook chicken in oil, starting on medium-high heat, then, when chicken is browned, reduce heat to medium and cook an additional 30 to 35 minutes until chicken is done (approx 150-155 degrees F internal), turning occasionally.",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Mix flour, salt, paprika and pepper. Dip chicken in buttermilk and then into flour mixture. Cook chicken in oil, starting on medium-high heat, then, when chicken is browned, reduce heat to medium and cook an additional 30 to 35 minutes until chicken is done (approx 150-155 degrees F internal), turning occasionally.",
                        "ingredients": [
                            {
                                "id": 1230,
                                "name": "buttermilk",
                                "localizedName": "buttermilk",
                                "image": "buttermilk.jpg"
                            },
                            {
                                "id": 5006,
                                "name": "whole chicken",
                                "localizedName": "whole chicken",
                                "image": "whole-chicken.jpg"
                            },
                            {
                                "id": 2028,
                                "name": "paprika",
                                "localizedName": "paprika",
                                "image": "paprika.jpg"
                            },
                            {
                                "id": 1002030,
                                "name": "pepper",
                                "localizedName": "pepper",
                                "image": "pepper.jpg"
                            },
                            {
                                "id": 20081,
                                "name": "all purpose flour",
                                "localizedName": "all purpose flour",
                                "image": "flour.png"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
                            },
                            {
                                "id": 0,
                                "name": "dip",
                                "localizedName": "dip",
                                "image": ""
                            },
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 30,
                            "unit": "minutes"
                        }
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/crispy-buttermilk-fried-chicken-640803"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 118,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 7,
        "healthScore": 59,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 1899.87,
        "extendedIngredients": [
            {
                "id": 10123,
                "aisle": "Meat",
                "image": "raw-bacon.png",
                "consistency": "SOLID",
                "name": "bacon",
                "nameClean": "applewood smoked bacon",
                "original": "1/2 pound bacon, chopped",
                "originalName": "bacon, chopped",
                "amount": 0.5,
                "unit": "pound",
                "meta": [
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "lb",
                        "unitLong": "pounds"
                    },
                    "metric": {
                        "amount": 226.796,
                        "unitShort": "g",
                        "unitLong": "grams"
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
                "original": "1 medium onion, chopped",
                "originalName": "onion, chopped",
                "amount": 1,
                "unit": "medium",
                "meta": [
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "medium",
                        "unitLong": "medium"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "medium",
                        "unitLong": "medium"
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
                "id": 11266,
                "aisle": "Produce",
                "image": "mushrooms.png",
                "consistency": "SOLID",
                "name": "crimini mushrooms",
                "nameClean": "crimini mushrooms",
                "original": "1 pack sliced crimini mushrooms",
                "originalName": "pack sliced crimini mushrooms",
                "amount": 1,
                "unit": "",
                "meta": [
                    "sliced"
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
                "id": 14106,
                "aisle": "Alcoholic Beverages",
                "image": "white-wine.jpg",
                "consistency": "LIQUID",
                "name": "white wine",
                "nameClean": "dry white wine",
                "original": "1 cup white wine",
                "originalName": "white wine",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "white"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 10020052,
                "aisle": "Pasta and Rice",
                "image": "uncooked-white-rice.png",
                "consistency": "SOLID",
                "name": "arborio rice",
                "nameClean": "risotto rice",
                "original": "1 3/4 cups Arborio rice",
                "originalName": "Arborio rice",
                "amount": 1.75,
                "unit": "cups",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.75,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 414.029,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 14106,
                "aisle": "Alcoholic Beverages",
                "image": "white-wine.jpg",
                "consistency": "LIQUID",
                "name": "white wine",
                "nameClean": "dry white wine",
                "original": "1 cup of white wine",
                "originalName": "white wine",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "white"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 6194,
                "aisle": "Canned and Jarred",
                "image": "chicken-broth.png",
                "consistency": "LIQUID",
                "name": "chicken broth",
                "nameClean": "chicken broth",
                "original": "5 cups chicken broth",
                "originalName": "chicken broth",
                "amount": 5,
                "unit": "cups",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 1.183,
                        "unitShort": "l",
                        "unitLong": "liters"
                    }
                }
            },
            {
                "id": 1053,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "fluid-cream.jpg",
                "consistency": "LIQUID",
                "name": "heavy cream",
                "nameClean": "cream",
                "original": "1/2 cup heavy cream",
                "originalName": "heavy cream",
                "amount": 0.5,
                "unit": "cup",
                "meta": [],
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
                "id": 1033,
                "aisle": "Cheese",
                "image": "parmesan.jpg",
                "consistency": "SOLID",
                "name": "parmesan",
                "nameClean": "parmesan",
                "original": "1 cup grated parmesan",
                "originalName": "grated parmesan",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "grated"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1102047,
                "aisle": "Spices and Seasonings",
                "image": "salt-and-pepper.jpg",
                "consistency": "SOLID",
                "name": "salt and pepper",
                "nameClean": "salt and pepper",
                "original": "Pinch of salt and pepper",
                "originalName": "Pinch of salt and pepper",
                "amount": 1,
                "unit": "pinch",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "pinch",
                        "unitLong": "pinch"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "pinch",
                        "unitLong": "pinch"
                    }
                }
            }
        ],
        "id": 633258,
        "title": "Bacon & Crimini Mushroom Risotto",
        "readyInMinutes": 45,
        "servings": 1,
        "sourceUrl": "https://www.foodista.com/recipe/HXMHG7JV/bacon-cremini-risotto",
        "image": "https://spoonacular.com/recipeImages/633258-556x370.jpg",
        "imageType": "jpg",
        "summary": "Bacon & Crimini Mushroom Risotto is a <b>gluten free</b> main course. This recipe serves 1 and costs $19.0 per serving. One portion of this dish contains roughly <b>97g of protein</b>, <b>164g of fat</b>, and a total of <b>3507 calories</b>. This recipe from Foodista has 7 fans. Not a lot of people really liked this Mediterranean dish. If you have pack crimini mushrooms, arborio rice, chicken broth, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly <b>roughly 45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 79%</b>. This score is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/hearty-crimini-mushroom-and-barley-soup-530222\">Hearty Crimini Mushroom and Barley Soup</a>, <a href=\"https://spoonacular.com/recipes/bacon-mushroom-risotto-222690\">Bacon & mushroom risotto</a>, and <a href=\"https://spoonacular.com/recipes/bacon-mushroom-risotto-36384\">Bacon & Mushroom Risotto</a>.",
        "cuisines": [
            "Mediterranean",
            "Italian",
            "European"
        ],
        "dishTypes": [
            "side dish",
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free"
        ],
        "occasions": [],
        "instructions": "Add 5 cups of chicken broth to a large pot.  Heat until almost boiling.  In another large pot, add bacon and onions and saut until bacon is crispy and onions are tender.  Add the entire pack of mushrooms and stir until mushrooms are browned and juicy, about 5-7 minutes.  Add 1 large clove of garlic, minced.  Stir for about one minute.  Dump in your rice.  Stir about 2 minutes.  Add in your wine. Stir until mostly absorbed.  Begin ladling in broth a cup at a time.  After you ladle in one, stir until just until absorbed, then add another one.  Continue until all broth is used.  Stir in cream and cheese and stir until cream absorbs ju",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Add 5 cups of chicken broth to a large pot.",
                        "ingredients": [
                            {
                                "id": 6194,
                                "name": "chicken broth",
                                "localizedName": "chicken broth",
                                "image": "chicken-broth.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404752,
                                "name": "pot",
                                "localizedName": "pot",
                                "image": "stock-pot.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Heat until almost boiling.  In another large pot, add bacon and onions and saut until bacon is crispy and onions are tender.",
                        "ingredients": [
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            },
                            {
                                "id": 10123,
                                "name": "bacon",
                                "localizedName": "bacon",
                                "image": "raw-bacon.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404752,
                                "name": "pot",
                                "localizedName": "pot",
                                "image": "stock-pot.jpg"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Add the entire pack of mushrooms and stir until mushrooms are browned and juicy, about 5-7 minutes.",
                        "ingredients": [
                            {
                                "id": 11260,
                                "name": "mushrooms",
                                "localizedName": "mushrooms",
                                "image": "mushrooms.png"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 7,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 4,
                        "step": "Add 1 large clove of garlic, minced.  Stir for about one minute.  Dump in your rice.  Stir about 2 minutes.",
                        "ingredients": [
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            },
                            {
                                "id": 1002011,
                                "name": "clove",
                                "localizedName": "clove",
                                "image": "cloves.jpg"
                            },
                            {
                                "id": 20444,
                                "name": "rice",
                                "localizedName": "rice",
                                "image": "uncooked-white-rice.png"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 3,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 5,
                        "step": "Add in your wine. Stir until mostly absorbed.  Begin ladling in broth a cup at a time.  After you ladle in one, stir until just until absorbed, then add another one.  Continue until all broth is used.  Stir in cream and cheese and stir until cream absorbs ju",
                        "ingredients": [
                            {
                                "id": 1041009,
                                "name": "cheese",
                                "localizedName": "cheese",
                                "image": "cheddar-cheese.png"
                            },
                            {
                                "id": 1006615,
                                "name": "broth",
                                "localizedName": "broth",
                                "image": "chicken-broth.png"
                            },
                            {
                                "id": 1053,
                                "name": "cream",
                                "localizedName": "cream",
                                "image": "fluid-cream.jpg"
                            },
                            {
                                "id": 14084,
                                "name": "wine",
                                "localizedName": "wine",
                                "image": "red-wine.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404630,
                                "name": "ladle",
                                "localizedName": "ladle",
                                "image": "ladle.jpg"
                            }
                        ]
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/bacon-crimini-mushroom-risotto-633258"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 15,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 13,
        "healthScore": 22,
        "creditsText": "foodista.com",
        "sourceName": "foodista.com",
        "pricePerServing": 444.74,
        "extendedIngredients": [
            {
                "id": 10311529,
                "aisle": "Produce",
                "image": "cherry-tomatoes.png",
                "consistency": "SOLID",
                "name": "cherry tomatoes",
                "nameClean": "cherry tomato",
                "original": "12 cherry tomatoes, halved",
                "originalName": "cherry tomatoes, halved",
                "amount": 12,
                "unit": "",
                "meta": [
                    "halved"
                ],
                "measures": {
                    "us": {
                        "amount": 12,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 12,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 1019,
                "aisle": "Cheese",
                "image": "feta.png",
                "consistency": "SOLID",
                "name": "feta cheese",
                "nameClean": "feta cheese",
                "original": "180 g feta cheese, crumbled",
                "originalName": "feta cheese, crumbled",
                "amount": 180,
                "unit": "g",
                "meta": [
                    "crumbled"
                ],
                "measures": {
                    "us": {
                        "amount": 6.349,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 180,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 2054,
                "aisle": "Canned and Jarred",
                "image": "capers.jpg",
                "consistency": "SOLID",
                "name": "capers",
                "nameClean": "capers",
                "original": "2 Tbs capers",
                "originalName": "capers",
                "amount": 2,
                "unit": "Tbs",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    }
                }
            },
            {
                "id": 11215,
                "aisle": "Produce",
                "image": "garlic.png",
                "consistency": "SOLID",
                "name": "whole garlic cloves",
                "nameClean": "garlic",
                "original": "6 whole garlic cloves, skin on",
                "originalName": "whole garlic cloves, skin on",
                "amount": 6,
                "unit": "",
                "meta": [
                    "whole"
                ],
                "measures": {
                    "us": {
                        "amount": 6,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 6,
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
                "name": "pepper",
                "nameClean": "black pepper",
                "original": "Cracked black pepper",
                "originalName": "Cracked black pepper",
                "amount": 1,
                "unit": "serving",
                "meta": [
                    "black"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 4053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "olive oil",
                "nameClean": "olive oil",
                "original": "2 -3 Tbs olive oil for sprinkling",
                "originalName": "olive oil for sprinkling",
                "amount": 2,
                "unit": "Tbs",
                "meta": [
                    "for sprinkling"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    }
                }
            },
            {
                "id": 2044,
                "aisle": "Produce",
                "image": "fresh-basil.jpg",
                "consistency": "SOLID",
                "name": "fresh basil",
                "nameClean": "fresh basil",
                "original": "¼ cup fresh basil, chopped",
                "originalName": "fresh basil, chopped",
                "amount": 0.25,
                "unit": "cup",
                "meta": [
                    "fresh",
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 59.147,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 10062,
                "aisle": "Meat",
                "image": "pork-loin-chops.png",
                "consistency": "SOLID",
                "name": "pork loin steaks",
                "nameClean": "pork loin chops",
                "original": "4 pork steaks, trimmed",
                "originalName": "pork steaks, trimmed",
                "amount": 4,
                "unit": "",
                "meta": [
                    "trimmed"
                ],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 93698,
                "aisle": "Pasta and Rice",
                "image": "basil-pesto.png",
                "consistency": "SOLID",
                "name": "pesto",
                "nameClean": "basil pesto",
                "original": "2 Tbs pesto rosso (red pesto)",
                "originalName": "pesto rosso (red pesto)",
                "amount": 2,
                "unit": "Tbs",
                "meta": [
                    "red",
                    "( pesto)"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    }
                }
            },
            {
                "id": 20027,
                "aisle": "Baking",
                "image": "white-powder.jpg",
                "consistency": "SOLID",
                "name": "cornflour",
                "nameClean": "corn starch",
                "original": "4 Tbs cornflour",
                "originalName": "cornflour",
                "amount": 4,
                "unit": "Tbs",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    }
                }
            },
            {
                "id": 2003,
                "aisle": "Spices and Seasonings",
                "image": "basil.jpg",
                "consistency": "SOLID",
                "name": "dried basil",
                "nameClean": "dried basil",
                "original": "2 Tbs dried basil",
                "originalName": "dried basil",
                "amount": 2,
                "unit": "Tbs",
                "meta": [
                    "dried"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    }
                }
            },
            {
                "id": 1012047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "sea salt",
                "nameClean": "coarse sea salt",
                "original": "¼ tsp sea salt",
                "originalName": "sea salt",
                "amount": 0.25,
                "unit": "tsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 1002030,
                "aisle": "Spices and Seasonings",
                "image": "pepper.jpg",
                "consistency": "SOLID",
                "name": "black pepper",
                "nameClean": "black pepper",
                "original": "¼ tsp black pepper",
                "originalName": "black pepper",
                "amount": 0.25,
                "unit": "tsp",
                "meta": [
                    "black"
                ],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 4053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "olive oil",
                "nameClean": "olive oil",
                "original": "2 Tbs olive oil",
                "originalName": "olive oil",
                "amount": 2,
                "unit": "Tbs",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    }
                }
            }
        ],
        "id": 661533,
        "title": "Steaks with pesto, tomatoes and feta cheese",
        "readyInMinutes": 45,
        "servings": 4,
        "sourceUrl": "https://www.foodista.com/recipe/WPNJB6D6/steaks-with-pesto-tomatoes-and-feta-cheese",
        "image": "https://spoonacular.com/recipeImages/661533-556x370.jpg",
        "imageType": "jpg",
        "summary": "Need a <b>gluten free main course</b>? Steaks with pesto, tomatoes and feta cheese could be an awesome recipe to try. One portion of this dish contains about <b>37g of protein</b>, <b>36g of fat</b>, and a total of <b>530 calories</b>. This recipe serves 4 and costs $4.45 per serving. 13 people have tried and liked this recipe. It is perfect for <b>valentin day</b>. It is brought to you by Foodista. A mixture of cherry tomatoes, feta cheese, pesto rosso, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes about <b>about 45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 71%</b>. This score is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/cook-the-book-polenta-steaks-with-asparagus-pesto-cherry-tomatoes-and-burrata-204055\">Cook the Book: Polenta Steaks with Asparagus Pesto, Cherry Tomatoes, and Burrata</a>, <a href=\"https://spoonacular.com/recipes/pesto-bowties-with-feta-and-tomatoes-569132\">Pesto Bowties with Fetan and Tomatoes</a>, and <a href=\"https://spoonacular.com/recipes/zucchini-and-grape-tomatoes-in-pesto-with-feta-105269\">Zucchini and Grape Tomatoes in Pesto With Feta</a>.",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "ketogenic"
        ],
        "occasions": [
            "valentine's day",
            "father's day"
        ],
        "instructions": "Place the tomatoes on a baking tray lined with baking paper, scatter over capers, garlic cloves and crumbled fetta.\nSprinkle with olive oil and cracked pepper. Cook in oven at 200C for 30 minutes or until tomatoes are soft. Remove and set aside.\nSprinkle with fresh basil.\nMeanwhile, flaten the steaks with a meat mallet.\nSmear one side of each steak with  tablespoon of red pesto, make a roll (pesto side inside) and secure it with a wooden or metal toothpick.\nMix cornflour, dry basil, salt and pepper in a plate. Dredge the rolls through the flour mixture, shake off excess flour.\nIn a large skillet heat olive oil over medium-high heat, then brown the rolls for 5 -6, constantly turning them until golden all around.\nBefore serving, take out toothpick and serve with tomatoes, capers, garlic and fetta bake.",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Place the tomatoes on a baking tray lined with baking paper, scatter over capers, garlic cloves and crumbled fetta.",
                        "ingredients": [
                            {
                                "id": 10211215,
                                "name": "whole garlic cloves",
                                "localizedName": "whole garlic cloves",
                                "image": "garlic.jpg"
                            },
                            {
                                "id": 11529,
                                "name": "tomato",
                                "localizedName": "tomato",
                                "image": "tomato.png"
                            },
                            {
                                "id": 2054,
                                "name": "capers",
                                "localizedName": "capers",
                                "image": "capers.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404770,
                                "name": "baking paper",
                                "localizedName": "baking paper",
                                "image": "baking-paper.jpg"
                            },
                            {
                                "id": 404646,
                                "name": "baking pan",
                                "localizedName": "baking pan",
                                "image": "roasting-pan.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Sprinkle with olive oil and cracked pepper. Cook in oven at 200C for 30 minutes or until tomatoes are soft.",
                        "ingredients": [
                            {
                                "id": 0,
                                "name": "cracked pepper",
                                "localizedName": "cracked pepper",
                                "image": "pepper.jpg"
                            },
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "localizedName": "olive oil",
                                "image": "olive-oil.jpg"
                            },
                            {
                                "id": 11529,
                                "name": "tomato",
                                "localizedName": "tomato",
                                "image": "tomato.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg",
                                "temperature": {
                                    "number": 200,
                                    "unit": "Celsius"
                                }
                            }
                        ],
                        "length": {
                            "number": 30,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 3,
                        "step": "Remove and set aside.",
                        "ingredients": [],
                        "equipment": []
                    },
                    {
                        "number": 4,
                        "step": "Sprinkle with fresh basil.",
                        "ingredients": [
                            {
                                "id": 2044,
                                "name": "fresh basil",
                                "localizedName": "fresh basil",
                                "image": "fresh-basil.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 5,
                        "step": "Meanwhile, flaten the steaks with a meat mallet.",
                        "ingredients": [
                            {
                                "id": 23232,
                                "name": "steak",
                                "localizedName": "steak",
                                "image": "ribeye-raw.jpg"
                            },
                            {
                                "id": 1065062,
                                "name": "meat",
                                "localizedName": "meat",
                                "image": "whole-chicken.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 3846,
                                "name": "meat tenderizer",
                                "localizedName": "meat tenderizer",
                                "image": "meat-mallet.jpg"
                            }
                        ]
                    },
                    {
                        "number": 6,
                        "step": "Smear one side of each steak with  tablespoon of red pesto, make a roll (pesto side inside) and secure it with a wooden or metal toothpick.",
                        "ingredients": [
                            {
                                "id": 93697,
                                "name": "red pesto",
                                "localizedName": "red pesto",
                                "image": "sundried-tomato-pesto.png"
                            },
                            {
                                "id": 93698,
                                "name": "pesto",
                                "localizedName": "pesto",
                                "image": "basil-pesto.png"
                            },
                            {
                                "id": 23232,
                                "name": "steak",
                                "localizedName": "steak",
                                "image": "ribeye-raw.jpg"
                            },
                            {
                                "id": 0,
                                "name": "roll",
                                "localizedName": "roll",
                                "image": "dinner-yeast-rolls.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404644,
                                "name": "toothpicks",
                                "localizedName": "toothpicks",
                                "image": "toothpicks.jpg"
                            }
                        ]
                    },
                    {
                        "number": 7,
                        "step": "Mix cornflour, dry basil, salt and pepper in a plate. Dredge the rolls through the flour mixture, shake off excess flour.",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 20027,
                                "name": "corn starch",
                                "localizedName": "corn starch",
                                "image": "white-powder.jpg"
                            },
                            {
                                "id": 2044,
                                "name": "basil",
                                "localizedName": "basil",
                                "image": "basil.jpg"
                            },
                            {
                                "id": 20081,
                                "name": "all purpose flour",
                                "localizedName": "all purpose flour",
                                "image": "flour.png"
                            },
                            {
                                "id": 0,
                                "name": "roll",
                                "localizedName": "roll",
                                "image": "dinner-yeast-rolls.jpg"
                            },
                            {
                                "id": 0,
                                "name": "shake",
                                "localizedName": "shake",
                                "image": ""
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 8,
                        "step": "In a large skillet heat olive oil over medium-high heat, then brown the rolls for 5 -6, constantly turning them until golden all around.",
                        "ingredients": [
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "localizedName": "olive oil",
                                "image": "olive-oil.jpg"
                            },
                            {
                                "id": 0,
                                "name": "roll",
                                "localizedName": "roll",
                                "image": "dinner-yeast-rolls.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    },
                    {
                        "number": 9,
                        "step": "Before serving, take out toothpick and serve with tomatoes, capers, garlic and fetta bake.",
                        "ingredients": [
                            {
                                "id": 11529,
                                "name": "tomato",
                                "localizedName": "tomato",
                                "image": "tomato.png"
                            },
                            {
                                "id": 2054,
                                "name": "capers",
                                "localizedName": "capers",
                                "image": "capers.jpg"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404644,
                                "name": "toothpicks",
                                "localizedName": "toothpicks",
                                "image": "toothpicks.jpg"
                            },
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ]
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/steaks-with-pesto-tomatoes-and-feta-cheese-661533"
    }
])

// onBeforeMount(async () => {
//   try {
//     const response = await getRandomRecommendations(false, "meat,lunch", 10)
//     randomRecipes.value = response.data.value.recipes
//     console.log(randomRecipes.value)

//   } catch (error) {
//     console.log(error)
//   }
// })


</script>

<!-- TODO: Finish gallery view -->
<template>
  <div class="mt-6">
    <div v-if="!randomRecipes">
      <Loader />
    </div>
    <div v-else>
      <h1 class="font-bold text-xl">Recipes!</h1>
      <div class="mt-3 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div v-for="recipe in randomRecipes">
          <CardItem :recipe="recipe" />
        </div>
      </div>
    </div>
  </div>
</template>
