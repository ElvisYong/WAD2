import { useFetch } from "@vueuse/core";
import { API_ENDPOINT } from ".";

const PLACES_ENDPOINT = `${API_ENDPOINT}/gmaps`;

/**
 * 
 * @param input - The search query
 * @param radius - The radius in meters
 * @param lat  - The latitude
 * @param lng  - The longitude
 * @returns 
 */
export const findPlaceInRadius = async (input: string, radius: number, lat: number, lng: number) => {
  return await useFetch(
    `${PLACES_ENDPOINT}/findPlaceInRadius?input=${input}&locationbias=circle:${radius}@${lat},${lng}`,
  ).get().json()
}

/**
 * 
 * @param keyword - The search query
 * @param radius - The radius in meters
 * @param lat - The latitude
 * @param lng - The longitude
 * @param type - The type of place
 * @returns 
 */
export const nearbySearch = async (keyword: string, radius: number, lat: number, lng: number, type: string) => {
  return await useFetch(
    `${PLACES_ENDPOINT}/nearbySearch?keyword=${keyword}&radius=${radius}&location=${lat},${lng}&type=${type}}`,
  ).get().json()
}