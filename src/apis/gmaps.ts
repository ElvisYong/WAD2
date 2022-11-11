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