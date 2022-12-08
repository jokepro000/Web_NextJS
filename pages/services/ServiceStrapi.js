import axios from "axios";
import {
  strapiUrl,
  NOT_CONNECT_NETWORK,
  NETWORK_CONNECTION_MESSAGE,
  NOT_FOUND,
  NOT_FOUND_MESSAGE,
} from './constants';

import join from "url-join";

const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use(async (config) => {
  if (!isAbsoluteURLRegex.test(config.url)) {
    config.url = join(strapiUrl, config.url);
  }

  const StrapiToken = "644e3b2d3a91bf021c60649ce95fd3ac89c347664c2eb593f6ef98e0d15f188b415d39e99c93a31226bc7e331f1244cd9cf3fb2d1251c04916962d30309c286c17f1f7e54d4ff47abba9bac0c6479409e71775dd4704da6fc79075d45f0d924f68f043498b2b09581ddccf695d66710895ecfb69725879f7bf38ccf0ea0f4859";
  if (StrapiToken) {
    config.headers = { Authorization: `Bearer ${StrapiToken}` };
  }
  config.timeout = 10000; // 10 Second
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      return Promise.reject({
        code: NOT_CONNECT_NETWORK,
        status: 500,
        message: NETWORK_CONNECTION_MESSAGE,
      });
    } else {
      return Promise.reject({
        code: NOT_FOUND,
        status: error.response.status,
        message: NOT_FOUND_MESSAGE,
      });
    }
  }
);

export default axios;