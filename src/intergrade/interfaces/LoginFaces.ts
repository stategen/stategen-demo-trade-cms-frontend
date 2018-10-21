/**
 *  Do not remove this unless you get business authorization.
 *  Login
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {Effect, Effects, Reducers, IModel, BaseState, modelPathsProxy, BaseProps, Reducer, AreaState, Subscription, Subscriptions, RouterReduxPushPros} from '@utils/DvaUtil';
import {loginCustomState,LoginCustomSubscriptions , LoginCustomEffects, LoginCustomReducers} from '@pages/login/LoginCustomFaces'
import SimpleResponse from "../beans/SimpleResponse";
import {routerRedux} from 'dva/router';
import queryString from 'query-string';

export interface LoginInitState extends BaseState {
}

export type LoginState = LoginInitState & typeof loginCustomState;

export interface LoginInitSubscriptions extends Subscriptions{
}

export type LoginSubscriptions = LoginInitSubscriptions & LoginCustomSubscriptions;

export interface LoginInitEffects extends Effects {
  /**  */
  login?: Effect,
}

export type LoginEffects = LoginInitEffects & LoginCustomEffects;

interface LoginInitReducers<S extends LoginState> extends Reducers<S> {
  /**   成功后 更新状态*/
  login_success?: Reducer<LoginState>,
}

export type LoginReducers = LoginInitReducers<LoginState> & LoginCustomReducers;

export interface LoginModel extends IModel<LoginState, LoginReducers, LoginEffects> {
  /** login */
  namespace?: string;
  /** /login */
  pathname?: string;
  state?: LoginState;
  reducers?: LoginReducers;
  effects?: LoginEffects;
  subscriptions?: LoginSubscriptions;
}

export interface LoginProps extends BaseProps {
  loginState?: LoginState,
}

export const loginInitModel: LoginModel = <LoginModel>{
  namespace: 'login',
  pathname: '/login',
  state: {},
  subscriptions: {},
  reducers: <LoginReducers>{},
  effects: <LoginEffects>{},
};


/***把 namespace 带过来，以便生成路径*/
export const loginEffects = modelPathsProxy<LoginEffects>(loginInitModel);

/***把 namespace 带过来，以便生成路径*/
export const loginReducers = modelPathsProxy<LoginReducers>(loginInitModel);

export class LoginDispatch {
  static route(search?: any) {
    const pushRoute: RouterReduxPushPros = {
      pathname: loginInitModel.pathname,
    };
    if (search != null) {
      pushRoute.search = queryString.stringify(search);
    }
    return routerRedux.push(pushRoute);
  }

  /**  */
  static login_effect(params: { username: string, password: string }, areaExtraProps__?: AreaState<any>, stateExtraProps__?: LoginState) {
    return {
      type: loginInitModel.namespace + '/login',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };

  static updateState_reducer(loginState: LoginState) {
    return {
      type: loginInitModel.namespace + '/updateState',
      payload: {
        ...loginState,
      }
    }
  }
}