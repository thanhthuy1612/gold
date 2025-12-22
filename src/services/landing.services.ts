import type { PriceType } from 'src/types/landing';

import { endpoints, axiosInstance } from 'src/lib/axios';

export const homeService = {
  async silver() {
    const { data } = await axiosInstance.get(endpoints.landing.silver);

    return data;
  },
  async gold() {
    const { data } = await axiosInstance.get(endpoints.landing.gold);

    return data;
  },
  async price(body: PriceType) {
    const { data } = await axiosInstance.post(endpoints.landing.price, body);

    return data;
  },
  async products() {
    const { data } = await axiosInstance.get(endpoints.landing.products);

    return data;
  },
};
