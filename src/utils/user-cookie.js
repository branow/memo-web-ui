import { Cookies } from "react-cookie";

class UserCookies {
  constructor() {
    this.authorizationJwt = new UserCookie("AuthorizationJwt");
  }
}

class UserCookie {
  constructor(name) {
    this.config = { path: "/" };
    this.cookies = new Cookies(null, this.config);
    this.get = () => {
      return this.cookies.get(name);
    };
    this.set = (value) => {
      this.cookies.set(name, value);
    };
    this.remove = () => {
      this.cookies.remove(name, this.config);
    };
  }
}

export { UserCookie, UserCookies };
