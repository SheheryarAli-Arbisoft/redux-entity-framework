import axios from 'axios';

export const METHOD_GET = 'GET';
export const METHOD_POST = 'POST';

const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
  };
};

export const callApi = async (method, url, body = {}) => {
  const { data } = await axios.request({
    method,
    headers: getHeaders(),
    url,
    data: JSON.stringify(body),
  });
  return data;
};
