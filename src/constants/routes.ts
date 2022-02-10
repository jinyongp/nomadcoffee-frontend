const routes = Object.freeze({
  abs: {
    home: '/',
    signUp: '/sign-up',
    shop: '/shop/',
  },
  rel: {
    create: 'add',
    id: ':id',
  },
  notFound: '*',
});

export default routes;
