import { Cookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';
const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name,value, {...option})
}

export const getCookie = (name) => {
  if (typeof cookies !== 'undefined') {
    return cookies.get(name);
  } else {
    return null
  }
}

export const removeCookie = (name, option) => {
  return cookies.remove(name, {...option})
}