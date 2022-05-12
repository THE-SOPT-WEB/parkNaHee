import axios from 'axios';
import { AbstractApi, CommonResponse } from './AbstractApi';
const BASE_URL = 'https://dapi.kakao.com/v2/local/search';
const HEADER = {
  Authorization: process.env.AUTHORIZATION_TOKEN as string,
};

interface LocationType {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

interface AddressSpecificType {
  address_name: string;
  b_code: string;
  h_code: string;
  main_address_no: string;
  mountain_yn: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_h_name: string;
  region_3depth_name: string;
  sub_address_no: string;
  x: string;
  y: string;
}

interface AddressAllType {
  address: AddressSpecificType;
  address_name: string;
  address_type: string;
  road_address: string;
  x: string;
  y: string;
}
export interface AllLocationListResponce extends CommonResponse {
  documents?: LocationType[];
}
export interface AllAddressListResponse extends CommonResponse {
  documents?: AddressAllType[];
}

export class LocationApi extends AbstractApi {
  public static async getLocationByKeyword(
    query: string,
    page: number,
    size: number,
  ): Promise<AllLocationListResponce> {
    const URL = BASE_URL + this.buildPath('keyword') + this.buildQuery({ query, page, size });
    const response = await axios.get<AllLocationListResponce>(URL, {
      headers: HEADER,
    });
    return response.data;
  }

  public static async getAddressByKeyword(
    query: string,
    page: number,
    size: number,
  ): Promise<AllAddressListResponse> {
    const URL = BASE_URL + this.buildPath('address') + this.buildQuery({ query, page, size });
    const response = await axios.get<AllAddressListResponse>(URL, { headers: HEADER });
    return response.data;
  }
}
