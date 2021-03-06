/**
 *  Do not remove this unless you get business authorization.
 *  User
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import City from "../beans/City";
import FileSummary from "../beans/FileSummary";
import Hoppy from "../beans/Hoppy";
import Province from "../beans/Province";
import Region from "../beans/Region";
import RoleType from "../enums/RoleType";
import StatusEnum from "../enums/StatusEnum";
import {Bean} from "@utils/DvaUtil";

/** userId */
export const User_ID: string = 'userId';

export const UserFields = {
  email: 'email',
  userId: User_ID,
  username: 'username',
}

export default interface User extends Bean {

  /** 详细地址 */
  address?: string;

  /** 详细地址Like */
  addressLike?: string;

  /** 年龄 */
  age?: number;

  /** 年龄Max */
  ageMax?: number;

  /** 年龄Min */
  ageMin?: number;

  /** 头像 */
  avatarImg?: FileSummary;

  /** 头像 ID */
  avatarImgId?: string;

  /** 头像 s */
  avatarImgIds?: string[];

  /** 出生日期 */
  birthdayDate?: Date;

  /** 出生日期Max */
  birthdayDateMax?: Date;

  /** 出生日期Min */
  birthdayDateMin?: Date;

  /** 邮寄地址 */
  cascaderPostAddressIds?: number[];

  /** cascaderPostAddresss */
  cascaderPostAddresss?: Region[];

  /** city */
  city?: City;

  /** 城市 ID */
  cityId?: string;

  /** 城市 s */
  cityIds?: string[];

  /** 创建时间 */
  createTime?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 是否删除 (0:正常，1删除) */
  deleteFlag?: boolean;

  /** 邮箱 */
  email?: string;

  /** 邮箱Like */
  emailLike?: string;

  /** 级别 */
  grade?: number;

  /** 级别Max */
  gradeMax?: number;

  /** 级别Min */
  gradeMin?: number;

  /** 爱好 ids */
  hoppyIds?: number[];

  /** hoppys */
  hoppys?: Hoppy[];

  /** 国际区号 */
  interCode?: string;

  /** 国际区号Like */
  interCodeLike?: string;

  /** 手机号 */
  mobile?: string;

  /** 手机号Like */
  mobileLike?: string;

  /** 姓名 */
  name?: string;

  /** 用户名nameLike */
  nameLike?: string;

  /** 别名 */
  nickName?: string;

  /** 别名Like */
  nickNameLike?: string;

  /** 密码Like */
  passwordLike?: string;

  /** 邮寄地址 ID */
  postAddressId?: number;

  /** 邮寄地址 s */
  postAddressIds?: number[];

  /** province */
  province?: Province;

  /** 省份 ID */
  provinceId?: string;

  /** 省份 s */
  provinceIds?: string[];

  /** remark */
  remark?: string;

  /** remarkLike */
  remarkLike?: string;

  /** 用户角色 ADMIN,DEFAULT,DEVELOPER */
  roleType?: RoleType;

  /** 用户角色 s */
  roleTypes?: RoleType[];

  /** 性别 */
  sex?: boolean;

  /** 状态 enum */
  status?: StatusEnum;

  /** 状态Like */
  statusLike?: StatusEnum;

  /** 状态 s */
  statuss?: StatusEnum[];

  /** 更新时间 */
  updateTime?: Date;

  /** 更新时间Max */
  updateTimeMax?: Date;

  /** 更新时间Min */
  updateTimeMin?: Date;

  /** 用户ID */
  userId?: string;

  /** 用户ID s */
  userIds?: string[];

  /** 用户名 */
  username?: string;

  /** 用户名Like */
  usernameLike?: string;

  /** 认证时间 */
  valiDatetime?: Date;

  /** 认证时间Max */
  valiDatetimeMax?: Date;

  /** 认证时间Min */
  valiDatetimeMin?: Date;

  /** 用户可访问的节点 */
  visitsIds?: number[];

  /** 工作时间 */
  workTime?: Date;

  /** 工作时间Max */
  workTimeMax?: Date;

  /** 工作时间Min */
  workTimeMin?: Date;

}

