import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import HomeApis from "@i/apis/HomeApis"
import {abstractModel} from "@utils/DvaUtil";
import {homeInitModel} from "@i/interfaces/HomeFaces";
/**
 *  Do not remove this unless you get business authorization.
 *  Home
 *  init by [stategen.progen] ,can be edit manually ,keep when "keep this"
 *  由 [stategen.progen]代码生成器初始化，可以手工修改,但如果遇到 keep this ,请保留导出设置以备外部自动化调用
 */
import {homeDefaultModel} from "@i/models/HomeDefaultModel";
import {HomeModel} from "@i/interfaces/HomeFaces";

const homeModel: HomeModel = homeDefaultModel;

export default homeModel;

