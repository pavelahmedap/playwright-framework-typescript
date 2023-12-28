// import httpsProxyAgent from "https-proxy-agent";
// import fs from "fs";
// import path from "path";
import dotenv from "dotenv";
// import { endPoints } from "../resources/endpoints/endpoints";

dotenv.config();
// Load environment variables from app.env
// dotenv.config({ path: path.resolve(__dirname, '..', 'env', 'app.env') });

const endPoints = require("../resources/endpoints/endpoints"); // Assuming `endPoints` is correctly exported from the endpoints configuration file
// import endPoints from "../resources/endpoints/endpoints"; // Assuming `endPoints` is correctly exported from the endpoints configuration file
// const sourceRoot = "src";

// Retrieve the environment from the ENV environment variable or default to 'TEST'
const env = process.env.ENV ?? "TEST";

type urlPointDataObj = {
  name: string;
  url: string;
};

/**
 * This method is responsible for getting the URL based on the provided name and environment.
 *
 * @param name - The name of the URL to retrieve.
 * @returns The retrieved URL as a string.
 * @throws Error if the URL is not found or the environment is not supported.
 */
export async function getUrl(name: string): Promise<string> {
  const username = process.env.USERNAME;
  console.log(username);
  console.log(process.env.PASSWORD);
  const envUpper = env.toUpperCase();
  console.log(`Test started in "${envUpper}" ENV`);

  // Define the URLs based on the environment
  const urls: { [key: string]: urlPointDataObj[] } = {
    TEST: endPoints.endpoints.TEST,
    STAGE: endPoints.endpoints.STAGE,
  };

  // Check if the environment is supported
  if (!(envUpper in urls)) {
    throw new Error(`Unsupported environment: ${env}`);
  }

  // Get the array of URLs for the environment
  const environmentUrls: urlPointDataObj[] = urls[envUpper];

  // Find the URL object with a matching name
  const foundUrl = environmentUrls.find(
    (item: urlPointDataObj) => item.name === name
  );
  console.log(`ENV: ${envUpper} === URL is ${foundUrl?.url}`);

  // Throw an error if the URL is not found
  if (!foundUrl) {
    throw new Error(`URL not found for name: ${name}`);
  }

  return foundUrl.url;
}

/**
 * This method is responsible for replaces all occurrences of a search value in a string with a replace value.
 *
 * @param input - The original string.
 * @param searchValue - The value to search for.
 * @param replaceValue - The value to replace the search value with.
 * @returns The resulting string after replacing all occurrences of the search value.
 * @throws TypeError if any of the input parameters are not of type string.
 */
export function replaceAll(
  input: string,
  searchValue: string,
  replaceValue: string
): string {
  if (
    typeof input !== "string" ||
    typeof searchValue !== "string" ||
    typeof replaceValue !== "string"
  ) {
    throw new TypeError("All parameters must be of type string.");
  }

  try {
    return input.split(searchValue).join(replaceValue);
  } catch (error) {
    // Handle any specific error thrown by split() or join() methods
    throw new Error(
      "An error occurred while replacing values: " + error.message
    );
  }
}

/**
 * This method is responsible for retrieves the first alphanumeric character from each word in a sentence and returns them as a concatenated string.
 *
 * @param sentence - The input sentence.
 * @returns A string containing the first alphanumeric character from each word.
 * @throws TypeError if the input parameter is not of type string.
 */
export function getFirstCharacters(sentence: string): string {
  if (typeof sentence !== "string") {
    throw new TypeError("The input parameter must be of type string.");
  }

  try {
    const words = sentence.split(" ");
    const firstCharacters = words.map((word) => {
      const alphanumericChar = word.match(/[a-zA-Z0-9]/)?.[0] || "";
      return alphanumericChar;
    });
    return firstCharacters.join("");
  } catch (error) {
    // Handle any specific error thrown by split(), map(), or join() methods
    throw new Error(
      "An error occurred while retrieving first characters: " + error.message
    );
  }
}
