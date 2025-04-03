// netlify/functions/proxy.js
const axios = require('axios');

exports.handler = async function(event, context) {
  try {
    const response = await axios.get('https://cc01.plusai.io/');  // 目标网页
    return {
      statusCode: 200,
      body: response.data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Error fetching the page',
    };
  }
};
