import { strapiUrl, STRAPI_API } from '../constants';
import ServiceStrapi from '../ServiceStrapi';

export const GetRecipeApi = async () => {
    try {
      const res = await ServiceStrapi.get(strapiUrl+STRAPI_API.RECIPE_FORUMS);
      return res;
    } catch (e) {
        return e;
    }
  }
  export const GetRecipeId = async (values) => {
    try {
      const res = await ServiceStrapi.get(strapiUrl+STRAPI_API.RECIPE_FORUMS+"/"+values);
      return res;
    } catch (e) {
      return e;
    }
  };
