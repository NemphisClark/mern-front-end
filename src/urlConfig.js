const baseUrl = 'https://mern-ecomm.herokuapp.com';

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
