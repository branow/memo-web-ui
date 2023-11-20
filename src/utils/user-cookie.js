import { Cookies } from "react-cookie";

class UserCookies {
  constructor() {
    this.authorizationJwt = new UserCookie("AuthorizationJwt");
  }
}

class UserCookie {
  constructor(name) {
    this.cookies = new Cookies();
    this.get = () => {
      return this.cookies.get(name);
    };
    this.set = (value) => {
      this.cookies.set(name, value);
    };
    this.remove = () => {
      this.cookies.remove(name);
    }
  }
}

export { UserCookie, UserCookies };
