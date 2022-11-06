import { useFetch } from "@vueuse/core";
import { API_ENDPOINT } from ".";

const RECIPE_ENDPOINT = `${API_ENDPOINT}/ingredients`;

/**
 * 
 * @param search - The search query
 * @returns 
 */
export const getIngredientsAutocomplete = async (search: string) => {
  return await useFetch(
    `${RECIPE_ENDPOINT}/autocomplete?query=${search}`,
  ).get().json()
}