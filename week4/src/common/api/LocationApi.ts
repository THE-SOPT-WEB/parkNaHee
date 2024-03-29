import axios from 'axios';
import { AbstractApi, CommonResponse, metaType } from './AbstractApi';
const BASE_URL = 'https://dapi.kakao.com/v2/local';
const HEADER = {
  Authorization: process.env.AUTHORIZATION_TOKEN as string,
};

export interface LocationType {
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

interface CurrentLocationType {
  region_type: string;
  code: string;
  address_name: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  region_4depth_name: string;
  x: number;
  y: number;
}
export interface AllLocationListDataType {
  meta?: metaType;
  documents: LocationType[];
}

export interface AllAddressListDataType {
  meta?: metaType;
  documents: AddressAllType[];
}

export interface CurrentLocationDataType {
  meta?: metaType;
  documents: CurrentLocationType[];
}
export interface AllLocationListResponce extends CommonResponse {
  data: AllLocationListDataType;
}
export interface AllAddressListResponse extends CommonResponse {
  data: AllAddressListDataType;
}
export interface CurrentLocationResponse extends CommonResponse {
  data: CurrentLocationDataType;
}

export interface getAddressByKeywordProps {
  query: string;
  page: number;
  size: number;
}

export interface getAddressByCoordinteProps {
  x: number;
  y: number;
}

export interface getLocationByKeywordProps extends getAddressByKeywordProps {
  radius?: number;
  x?: number;
  y?: number;
}
export class LocationApi extends AbstractApi {
  public static async getLocationByKeyword({
    query,
    page,
    size,
    radius = 1000,
    x,
    y,
  }: getLocationByKeywordProps): Promise<AllLocationListResponce> {
    let URL;
    if (x && y) {
      URL =
        BASE_URL +
        this.buildPath('search', 'keyword') +
        this.buildQuery({ query: '맥주', page, size, x, y, radius });
    } else {
      URL =
        BASE_URL +
        this.buildPath('search', 'keyword') +
        this.buildQuery({ query: `${query} 맥주`, page, size, radius });
    }
    const response = await axios.get(URL, {
      headers: HEADER,
    });
    return response as AllLocationListResponce;
  }

  public static async getAddressByKeyword({
    query,
    page,
    size,
  }: getAddressByKeywordProps): Promise<AllAddressListResponse> {
    const URL =
      BASE_URL + this.buildPath('search', 'address') + this.buildQuery({ query, page, size });
    const response = await axios.get(URL, { headers: HEADER });
    return response as AllAddressListResponse;
  }

  public static async getAddressByCoordinte({
    x,
    y,
  }: getAddressByCoordinteProps): Promise<CurrentLocationResponse> {
    const URL = BASE_URL + this.buildPath('geo', 'coord2regioncode') + this.buildQuery({ x, y });
    const response = await axios.get(URL, { headers: HEADER });
    return response as CurrentLocationResponse;
  }
}
