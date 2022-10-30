import { useFetch } from "@vueuse/core";
import { API_ENDPOINT } from ".";

// Not doing cookies or jwt auth because its out of scope and takes time to setup
const COLLECTIONS_ENDPOINT = `${API_ENDPOINT}/collections`;

/**
 * 
 * @param name - collection name 
 * @param userId - userId 
 * @returns - array of recipes
 */
export const addCollections = async (name: string, userId: string) => {
  return await useFetch(
    `${COLLECTIONS_ENDPOINT}/add?name=${name}&userId=${userId}`,
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
    `${COLLECTIONS_ENDPOINT}/random?limitLicense=${limitLicense}&tags=${tags}&number=${number}`,
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
    `${COLLECTIONS_ENDPOINT}/${id}/information?includeNutrition=${includeNutrition}`,
  ).get().json();
}