import { useFetch } from "@vueuse/core";
import { API_ENDPOINT } from ".";

const RECIPE_ENDPOINT = `${API_ENDPOINT}/recipes`;

/**
 * 
 * @param search - search term 
 * @returns - array of recipes
 */
export const getAutocompleteSearch = async (search: string) => {
  return await useFetch(
    `${RECIPE_ENDPOINT}/autocomplete?query=${search}`,
  ).get().json();
}

/**
 * 
 * @param limitLicense  - Whether the recipes should have an open license that allows display with proper attribution.
 * @param tags  - Comma separated tags. e.g vegetarian,dessert
 * @param number - The number of random recipes to be returned (between 1 and 100)
 * @returns 
 */
export const getRandomRecommendations = async (limitLicense: boolean, tags: string, number: number) => {
  return await useFetch(
    `${RECIPE_ENDPOINT}/random?limitLicense=${limitLicense}&tags=${tags}&number=${number}`,
  ).get().json();
}

/**
 * 
 * @param id 
 * @param includeNutrition 
 * @returns 
 */
export const getRecipeById = async (id: number, includeNutrition: boolean) => {
  return await useFetch(
    `${RECIPE_ENDPOINT}/${id}/information?includeNutrition=${includeNutrition}`,
  ).get().json();
}