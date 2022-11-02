import { useFetch } from "@vueuse/core";
import { API_ENDPOINT } from ".";

// Not doing cookies or jwt auth because its out of scope and takes time to setup
const COLLECTIONS_ENDPOINT = `${API_ENDPOINT}/collections`;

/**
 * 
 * @param name - collection name 
 * @param userId - user sub details from auth0 
 * @returns - array of recipes
 */
export const addCollections = async (name: string, userId: string) => {
  return await useFetch(
    `${COLLECTIONS_ENDPOINT}/add?name=${name}&userId=${userId}`,
  ).post().json();
}

/**
 * 
 * @param userId  - user sub details from auth0
 * @returns 
 */
export const getUserCollections = async (userId: string) => {
  return await useFetch(
    `${COLLECTIONS_ENDPOINT}?userId=${userId}`,
  ).get().json();
}

/**
 * 
 * @param userId - user sub details from auth0
 * @param name - collection name
 * @returns 
 */
export const getUserCollectionByName = async (userId: string, name: string) => {
  return await useFetch(
    `${COLLECTIONS_ENDPOINT}/${userId}/${name}`,
  ).get().json();
}