import axios from "axios";

const apiFactory = baseUrl => {
  const service = axios.create({
    baseURL: baseUrl,
    transformResponse: [
      data => {
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch (e) {
            /* Ignore */
          }
        }
        return data;
      }
    ]
  });

  return service;
};

export const api = (baseUrl, header = {}, params = {}) => {
  const service = axios.create({
    baseURL: baseUrl,
    headers: buildHeader({...header,...{}}),
    params: params,
    validateStatus: (status) =>{
      if(status === 403){
        (async() =>{
        //   await Auth.signOut();
        })();
      }
      return true;
    },
    transformResponse: [
      data => {
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch (e) {
            /* Ignore */
          }
        }

        return data;
      }
    ]
  });

  return service;
};

const buildHeader = (obj = {}) => {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  Object.assign(header, obj);
  return header;
};

export default apiFactory;
