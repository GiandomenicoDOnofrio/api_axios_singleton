import axios from "axios";

const API_URL = process.env.backend_url;

axios.defaults.baseURL = API_URL;

export default class Api {
  static async Request(method, path, payload, authentication) {
    let data = {};
    let params = {};
    let headers = {};
    let url = path;

    headers = { "content-type": "application/json" };

    if (authentication !== null) {
      const authorization = authentication;
      if (authorization == null) return null;
      headers = {
        ...headers,
        ...{
          Authorization: `${authorization}`,
        },
      };
    }

    if (method === "GET") params = payload;
    else data = payload;

    return axios({ url, method, headers, params, data });
  }
  static get    = (path, payload, authentication) => Api.Request("GET", path, payload, authentication)
  static delete = (path, payload, authentication) => Api.Request("DELETE", path, payload, authentication)
  static post   = (path, payload, authentication) => Api.Request("POST", path, payload, authentication)
  static patch  = (path, payload, authentication) => Api.Request("PATCH", path, payload, authentication)

  /* REQUESTS */

}
