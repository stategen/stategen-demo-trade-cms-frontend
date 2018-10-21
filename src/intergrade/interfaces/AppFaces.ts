/**
 *  Do not remove this unless you get business authorization.
 *  App
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {Effect, Effects, Reducers, IModel, BaseState, modelPathsProxy, BaseProps, Reducer, AreaState, Subscription, Subscriptions, RouterReduxPushPros} from '@utils/DvaUtil';
import {appCustomState,AppCustomSubscriptions , AppCustomEffects, AppCustomReducers} from '@pages/app/AppCustomFaces'
import Menu from "../beans/Menu";
import SimpleResponse from "../beans/SimpleResponse";
import User from "../beans/User";
import {routerRedux} from 'dva/router';
import queryString from 'query-string';

export interface AppInitState extends BaseState {
  menuArea?: AreaState<Menu>;
  userArea?: AreaState<User>;
}

export type AppState = AppInitState & typeof appCustomState;

export interface AppInitSubscriptions extends Subscriptions{
  setup?: Subscription;
}

export type AppSubscriptions = AppInitSubscriptions & AppCustomSubscriptions;

export interface AppInitEffects extends Effects {
  setup?: Effect;
  /** 获所所有菜单 */
  getAllMenus?: Effect,
  /**  */
  getCookieUser?: Effect,
  /**  */
  logout?: Effect,
}

export type AppEffects = AppInitEffects & AppCustomEffects;

interface AppInitReducers<S extends AppState> extends Reducers<S> {
  setup_success?: Reducer<AppState>,
  /** 获所所有菜单  成功后 更新状态*/
  getAllMenus_success?: Reducer<AppState>,
  /**   成功后 更新状态*/
  getCookieUser_success?: Reducer<AppState>,
  /**   成功后 更新状态*/
  logout_success?: Reducer<AppState>,
}

export type AppReducers = AppInitReducers<AppState> & AppCustomReducers;

export interface AppModel extends IModel<AppState, AppReducers, AppEffects> {
  /** app */
  namespace?: string;
  /** /app */
  pathname?: string;
  state?: AppState;
  reducers?: AppReducers;
  effects?: AppEffects;
  subscriptions?: AppSubscriptions;
}

export interface AppProps extends BaseProps {
  appState?: AppState,
}

export const appInitModel: AppModel = <AppModel>{
  namespace: 'app',
  pathname: '/app',
  state: {},
  subscriptions: {},
  reducers: <AppReducers>{},
  effects: <AppEffects>{},
};

appInitModel.state.menuArea = {
  areaName: 'menuArea',
  item: null,
  list: [],
  pagination: null,
  selectedRowKeys: [],
  doEdit: false,
  doQuery: false,
  type: null,
};
appInitModel.state.userArea = {
  areaName: 'userArea',
  item: null,
  list: [],
  pagination: null,
  selectedRowKeys: [],
  doEdit: false,
  doQuery: false,
  type: null,
};

/***把 namespace 带过来，以便生成路径*/
export const appEffects = modelPathsProxy<AppEffects>(appInitModel);

/***把 namespace 带过来，以便生成路径*/
export const appReducers = modelPathsProxy<AppReducers>(appInitModel);

export class AppDispatch {
  static route(search?: any) {
    const pushRoute: RouterReduxPushPros = {
      pathname: appInitModel.pathname,
    };
    if (search != null) {
      pushRoute.search = queryString.stringify(search);
    }
    return routerRedux.push(pushRoute);
  }
  static setup_effect(
    getAllMenusParams?: {params?: {}, areaExtraProps__?: AreaState<any>, stateExtraProps__?: AppState},
    getCookieUserParams?: {params?: {}, areaExtraProps__?: AreaState<any>, stateExtraProps__?: AppState},
    params?: {},
  ) {
    return {
      type: appInitModel.namespace + '/setup',
      payload: {
        ...params,
        getAllMenusParams,
        getCookieUserParams,
      }
    }
  }

  /** 获所所有菜单 */
  static getAllMenus_effect(params?: {}, areaExtraProps__?: AreaState<any>, stateExtraProps__?: AppState) {
    return {
      type: appInitModel.namespace + '/getAllMenus',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };

  /**  */
  static getCookieUser_effect(params?: {}, areaExtraProps__?: AreaState<any>, stateExtraProps__?: AppState) {
    return {
      type: appInitModel.namespace + '/getCookieUser',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };

  /**  */
  static logout_effect(params?: {}, areaExtraProps__?: AreaState<any>, stateExtraProps__?: AppState) {
    return {
      type: appInitModel.namespace + '/logout',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };

  static updateState_reducer(appState: AppState) {
    return {
      type: appInitModel.namespace + '/updateState',
      payload: {
        ...appState,
      }
    }
  }
}