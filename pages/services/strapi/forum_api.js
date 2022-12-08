import { strapiUrl, STRAPI_API } from '../constants';
import ServiceStrapi from '../ServiceStrapi';

export const GetForumApi = async () => {
    try {
      const res = await ServiceStrapi.get(strapiUrl+STRAPI_API.FORUM_API);
      return res;
    } catch (e) {
        return e;
    }
  }
  export const GetForumId = async (values) => {
    try {
      const res = await ServiceStrapi.get(strapiUrl+STRAPI_API.FORUM_API+"/"+values);
      return res;
    } catch (e) {
      return e;
    }
  };