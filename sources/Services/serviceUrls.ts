export default {
  url: {
    HOST: 'https://backend-z225.onrender.com/',
    login: 'api/auth/login',
  },
  statusCode: {
    success: [200, 201, 204],
    auth: [401],
    notFound: [404],
    error: [500, 400],
  },
};
