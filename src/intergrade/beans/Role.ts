/**
 *  Do not remove this unless you get business authorization.
 *  Role
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import RoleType from "../enums/RoleType";
import {Bean} from "@utils/DvaUtil";

/** roleId */
export const Role_ID: string = 'roleId';
export enum RoleFields {
  /** roleId */
  roleId = 'roleId',
  /** roleName */
  roleName = 'roleName',
  /** description */
  description = 'description',
  /** createTime */
  createTime = 'createTime',
  /** updateTime */
  updateTime = 'updateTime',
  /** deleteFlag */
  deleteFlag = 'deleteFlag',
  /** roleType */
  roleType = 'roleType',
}

export default interface Role extends Bean {

  /** 角色ID */
  roleId?: string;

  /** 角色名称 */
  roleName?: string;

  /** 描述 */
  description?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 更新时间 */
  updateTime?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** roleType */
  roleType?: RoleType;

}

