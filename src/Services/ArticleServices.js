import { createAlova } from "@alova/core";
import AxiosAdapter from "@alova/axios-adapter";

const alova = createAlova({
  baseURL: "https://api.jsonbin.io/v3", 
  statesHook: React.useState,
  requestAdapter: AxiosAdapter()
});

export const fetchArticles = () => {
  return alova.Get("/qs/673cfb18acd3cb34a8ab4fcc").send();
};
