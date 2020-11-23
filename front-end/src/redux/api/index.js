import axios from 'axios';

export const METHOD_GET = 'GET';
export const METHOD_POST = 'POST';

const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'auth-token': localStorage.getItem('auth-token'),
  };
};

export const callApi = async (method, url, body = {}, params = {}) => {
  const { data } = await axios.request({
    method,
    headers: getHeaders(),
    url,
    data: JSON.stringify(body),
    params,
  });
  return data;
};
