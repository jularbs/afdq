import axios from "axios";
import cookie from "js-cookie";

export const login = (credentials) => {
  return axios({
    method: "POST",
    url: `${process.env.MBC_API}/signin`,
    headers: {
      x_mbc_pk: `${process.env.MBC_PUBLICKEY}`,
      x_mbc_sk: `${process.env.MBC_SECRETKEY}`,
    },
    data: {
      email: credentials.email,
      password: credentials.password,
    },
  }).then((res) => {
    return res.data;
  });
};

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key) => {
  if (process.browser) {
    return cookie.get(key);
  }
};

//local storage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};

export const authenticate = (data, next) => {
  setCookie("sso-token", data.token);
  setLocalStorage("user", data.user);
  next();
};

export const isAuth = () => {
  if (process.browser) {
    const cookieChecked = getCookie("sso-token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

export const signout = (next) => {
  removeCookie("sso-token");
  removeLocalStorage("user");
  next();
  return fetch(`http://localhost:8080/api/signout`, {
    method: "GET",
  })
    .then((response) => {
      console.log("signout success.");
    })
    .catch((err) => console.log(err));
};

export const signup = (data) => {
  return axios({
    method: "POST",
    url: `${process.env.MBC_API}/signup`,
    headers: {
      x_mbc_pk: `${process.env.MBC_PUBLICKEY}`,
      x_mbc_sk: `${process.env.MBC_SECRETKEY}`,
    },
    data: {
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      mobileNumber: data.mobileNumber,
      gender: data.gender,
    },
  }).then((res) => {
    return res.data;
  });
};

export const requestChangePassword = (email) => {
  return axios({
    method: "POST",
    url: `${process.env.MBC_API}/account/request/forgotpassword`,
    headers: {
      x_mbc_pk: `${process.env.MBC_PUBLICKEY}`,
      x_mbc_sk: `${process.env.MBC_SECRETKEY}`,
    },
    data: {
      email: email,
    },
  }).then((res) => {
    return res.data;
  });
};

export const changePassword = (data) => {
  return axios({
    method: "POST",
    url: `${process.env.MBC_API}/account/request/changepassword`,
    headers: {
      x_mbc_pk: `${process.env.MBC_PUBLICKEY}`,
      x_mbc_sk: `${process.env.MBC_SECRETKEY}`,
    },
    data: {
      _id: data._id,
      password: data.password,
      token: data.token,
    },
  }).then((res) => {
    return res.data;
  });
};
