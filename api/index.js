const Prismic = require('prismic-javascript');

// Secret environment variables
const PRISMIC_API_ENDPOINT = process.env.PRISMIC_API_ENDPOINT;
const PRISMIC_API_TOKEN = process.env.PRISMIC_API_TOKEN;

/**
 * Get all the documents of the type work
 * from Prismic CMS
 *
 * @returns {array} The array of all documents of the type work
 */
export default async function getPrismicContent() {
  const api = await Prismic.getApi(PRISMIC_API_ENDPOINT, { accessToken: PRISMIC_API_TOKEN });
  const response = await api.query(Prismic.Predicates.at('document.type', 'work'));

  return response.results;
}
