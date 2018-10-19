/**
 *  Do not remove this unless you get business authorization.
 *  AntdPageList
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {PaginationProps} from "antd/lib/pagination";
import {Bean} from "@utils/DvaUtil";

export enum AntdPageListFields {
  /** pagination */
  pagination = 'pagination',
  /** list */
  list = 'list',
}

export default interface AntdPageList<E> extends Bean {

  /** pagination */
  pagination?: PaginationProps;

  /** list */
  list?: E[];

}

