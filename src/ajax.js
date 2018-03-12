import fetchJsonp from 'fetch-jsonp';
import buildUrl from 'build-url';
import moment from 'moment';

const base = "https://www.giantbomb.com/api";
const token = process.env.REACT_APP_API_KEY;

const read = (path, qs={}) => () => {
  const url = buildUrl(base, {
    path, queryParams: { api_key: token, format: 'jsonp', limit: 10, ...qs }
  });

  return fetchJsonp(url, { timeout: 60000, jsonpCallback: 'json_callback' });
};

export const games = () => read('games/', {
  field_list: 'guid,deck,image,name,platforms',
  sort: 'original_release_date:desc',
  filter: `original_release_date:${moment().subtract(14, 'days').format("YYYY-M-D")}|${moment().format("YYYY-M-D")}`
})();

export const game = guid => read(`game/${guid}/`)
export const object = guid => read(`object/${guid}/`)
