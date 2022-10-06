import {getCookie, setCookie} from "cookies-next";

export enum CookieKey {
  Organisation="organisation",
  User="user"
}

const get = (key: CookieKey) => {
  return getCookie(key)
}

const set = (key: CookieKey, value: any) => {
  setCookie(key, value)
}

export const Cookie = {
  get,
  set,
}
