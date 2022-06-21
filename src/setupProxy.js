const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "^/abc/",
    createProxyMiddleware({
      target: "https://proxy-react-back.herokuapp.com",
      // target: "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/abc/posdfir@3!!": "/api/login", // rewrite path
        "^/abc/ks!djf!!ksdf": "/api/users", // rewrite path
        "^/abc/uidij!23&dd": "/api/create", // rewrite path
        "^/abc/ji@213sd@": "/api/logout" // rewrite path
      }
    })
  );
};
