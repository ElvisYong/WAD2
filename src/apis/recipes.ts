import { useFetch } from "@vueuse/core";
import { API_ENDPOINT } from ".";

export const getAutocompleteSearch = async (search: String) => {
  return await useFetch(
    `${API_ENDPOINT}/recipes/autocomplete?query=${search}`,
  ).get();
}