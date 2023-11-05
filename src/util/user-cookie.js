import {Cookies} from 'react-cookie';

function UserCookies() {
  this.authorizationJwt = new UserCookie('AuthorizationJwt');
}

function UserCookie(name) {
  this.cookies = new Cookies();
  this.get = () => {
    this.cookies.get(name);
  };
  this.set = (value) => {
    this.cookies.set(name, value);
  };
}

export {UserCookie, UserCookies};
