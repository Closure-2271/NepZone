const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

app.use(cors());

// 配置代理中间件
app.use('/proxy', createProxyMiddleware({
    target: 'https://corsproxy.io/?url=https://steamcommunity.com/id/Neptunew1314/',
    changeOrigin: true,
    onProxyReq: (proxyReq) => {
        proxyReq.removeHeader('X-Frame-Options');
    },
    onProxyRes: (proxyRes) => {
        delete proxyRes.headers['x-frame-options'];
        delete proxyRes.headers['content-security-policy'];
    },
}));

app.get('/', (req, res) => {
    res.send('Proxy Server Online!');
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Proxy Server using...:http://localhost:${PORT}`);
});
