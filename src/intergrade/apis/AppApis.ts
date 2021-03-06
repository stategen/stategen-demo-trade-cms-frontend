/**
 *  Do not remove this unless you get business authorization.
 *  App
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Net, Method, MediaType, RequestInitEx} from "@utils/Net";

import City from "../beans/City";
import Hoppy from "../beans/Hoppy";
import Menu from "../beans/Menu";
import Province from "../beans/Province";
import Region from "../beans/Region";
import SimpleResponse from "../beans/SimpleResponse";
import User from "../beans/User";
import {tradeCmsBaseUrlKey} from "../configs/tradeCms-config";

export default class AppApis {
  /**
   * GET /api/app/getAllMenus
   * 获所所有菜单
   */
  static getAllMenus(params?: {}): Menu[] {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeCmsBaseUrlKey;
    requestInit.url = '/api/app/getAllMenus';
    requestInit.data = params;
    requestInit.method = Method.GET;
    return Net.fetch(requestInit);
  }

  /**
   * POST /api/app/getCityOptions
   * 城市
   */
  static getCityOptions(params: { provinceId?: string } | string): City[] {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeCmsBaseUrlKey;
    requestInit.url = '/api/app/getCityOptions';
    requestInit.mediaType = MediaType.FORM;
    requestInit.data = (params instanceof Object && !Array.isArray(params)) ? params : {provinceId: params};
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

  /**
   * POST /api/app/getCookieUser
   * 
   */
  static getCookieUser(params?: {}): User {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeCmsBaseUrlKey;
    requestInit.url = '/api/app/getCookieUser';
    requestInit.mediaType = MediaType.FORM;
    requestInit.data = params;
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

  /**
   * GET /api/app/getHoppyOptions
   * 爱好
   */
  static getHoppyOptions(params?: {}): Hoppy[] {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeCmsBaseUrlKey;
    requestInit.url = '/api/app/getHoppyOptions';
    requestInit.data = params;
    requestInit.method = Method.GET;
    return Net.fetch(requestInit);
  }

  /**
   * POST /api/app/getProvinceOptions
   * 省份
   */
  static getProvinceOptions(params?: {}): Province[] {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeCmsBaseUrlKey;
    requestInit.url = '/api/app/getProvinceOptions';
    requestInit.mediaType = MediaType.FORM;
    requestInit.data = params;
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

  /**
   * POST /api/app/getRegionOptions
   * 获取地区
   */
  static getRegionOptions(params: { parentRegionIds?: number[] } | number[]): Region[] {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeCmsBaseUrlKey;
    requestInit.url = '/api/app/getRegionOptions';
    requestInit.mediaType = MediaType.FORM;
    requestInit.data = (params instanceof Object && !Array.isArray(params)) ? params : {parentRegionIds: params};
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

  /**
   * POST /api/app/getUserOptions
   * 获取用户
   */
  static getUserOptions(params: { userIds?: string[] } | string[]): User[] {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeCmsBaseUrlKey;
    requestInit.url = '/api/app/getUserOptions';
    requestInit.mediaType = MediaType.FORM;
    requestInit.data = (params instanceof Object && !Array.isArray(params)) ? params : {userIds: params};
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

  /**
   * POST /api/app/login
   * 
   */
  static login(params: { username: string, password: string }): SimpleResponse {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeCmsBaseUrlKey;
    requestInit.url = '/api/app/login';
    requestInit.mediaType = MediaType.FORM;
    requestInit.data = params;
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

  /**
   * POST /api/app/logout
   * 
   */
  static logout(params?: {}): SimpleResponse {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeCmsBaseUrlKey;
    requestInit.url = '/api/app/logout';
    requestInit.mediaType = MediaType.FORM;
    requestInit.data = params;
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

  /**
   * GET /api/app/test
   * 
   */
  static test(params?: {}): string {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeCmsBaseUrlKey;
    requestInit.url = '/api/app/test';
    requestInit.data = params;
    requestInit.method = Method.GET;
    return Net.fetch(requestInit, false);
  }

  /**
   * GET /api/app/testSeata
   * 
   */
  static testSeata(params?: {}): User {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeCmsBaseUrlKey;
    requestInit.url = '/api/app/testSeata';
    requestInit.data = params;
    requestInit.method = Method.GET;
    return Net.fetch(requestInit);
  }

  /**
   * GET /api/app/testSentinel
   * 
   */
  static testSentinel(params?: {}): User {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeCmsBaseUrlKey;
    requestInit.url = '/api/app/testSentinel';
    requestInit.data = params;
    requestInit.method = Method.GET;
    return Net.fetch(requestInit);
  }

  /**
   * GET /api/app/testUid
   * 
   */
  static testUid(params?: {}): string {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeCmsBaseUrlKey;
    requestInit.url = '/api/app/testUid';
    requestInit.data = params;
    requestInit.method = Method.GET;
    return Net.fetch(requestInit);
  }

}