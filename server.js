const express = require("express");
const http = require("http");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();
const app = express();
const server = http.createServer(app);
const PATH_PREFIX = "/api";
const BASE_API = process.env.NEXT_PUBLIC_APP_PORT;

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
const proxyOptions = {
  target: BASE_API,
  pathRewrite: {
    [`^${PATH_PREFIX}`]: "",
  },
  secure: false,
  changeOrigin: true,
  onProxyReq: fixRequestBody,
  logRequest,
  onProxyRes: (proxyRes, req, res) => {
    const ORIGIN = req.headers.origin || "*";
    proxyRes.headers["access-control-allow-origin"] = ORIGIN;
  },
};

app.use(createProxyMiddleware(PATH_PREFIX, proxyOptions));
function fixRequestBody(proxyReq, req) {
  if (req.body) {
    const contentType = proxyReq.getHeader("Content-Type");
    const bodyData = JSON.stringify(req.body);
    if (contentType && contentType.includes("application/json")) {
      proxyReq.setHeader("Content-Type", "application/json");
    }
    proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
    proxyReq.write(bodyData);
  }
}

function logRequest(req, res) {
  const isSuccess = res.statusCode < 400;
  const message = {
    TIMESTAMP: dayjs().format("YYYY-MM-DD HH:mm:ss.SSS"),
    REQUEST_ID: req.requestId,
    REQUEST_METHOD: req.method.toUpperCase(),
    REQUEST_URI: req.originalUrl || req.url || "-",
    REQUEST_HEADERS: req.headers,
    REQUEST_PARAMS: this.manageParams(req),
    REQUEST_BODY: req.body || {},
    RESPONSE_STATUS: res.statusCode || "None",
    RESPONSE_TIME: new Date().getTime() - req.startTime,
    RESPONSE_DESCRIPTION: isSuccess
      ? `SUCCESS_WEBHOOK_FE`
      : `FAILED_WEBHOOK_FE`,
  };
  console.log(message);
}

const port = process.env.NEXT_PUBLIC_APP_PORT;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
