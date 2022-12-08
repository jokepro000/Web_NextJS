import { strapiUrl, STRAPI_API } from '../constants';
import ServiceStrapi from '../ServiceStrapi';

export const GetAllColMenu = async () => {
  try {
    const res = await ServiceStrapi.get(strapiUrl+STRAPI_API.COL_MENU_WEBS);
    return res;
  } catch (e) {
    return e;
  }
}

export const GetPageColMenu = async (pageNumber) => {
  const pageUrl = `?pagination[page]=${pageNumber}&pagination[pageSize]=5`
  try {
    const res = await ServiceStrapi.get(strapiUrl+STRAPI_API.COL_MENU_WEBS+"/"+pageUrl);
    return res;
  } catch (e) {
    return e;
  }
};

export const GetColMenu = async (values) => {
    try {
      const res = await ServiceStrapi.get(strapiUrl+STRAPI_API.COL_MENU_WEBS+"/"+values);
      return res;
    } catch (e) {
      return e;
    }
  };
