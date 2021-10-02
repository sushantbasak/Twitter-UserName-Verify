const express = require('express');
require('dotenv').config();

const app = express();
const axios = require('axios');

const port = process.env.PORT || 3000;

const token = process.env.TOKEN;
const apiUrl = process.env.API_URL;
const apiUrl2 = process.env.API_URL2;

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

app.get('/twitter/rewards/:username', async (req, res) => {
  const userName = req.params.username;

  try {
    const userData = await axios.get(apiUrl, config);

    const finalData = userData.data.users;

    let result = false;

    finalData.forEach((data) => {
      if (data.screen_name === userName) result = true;
    });

    if (result)
      return res.send({
        status: 'success',
        message: 'Twitter Following Succcessful',
      });
    else
      return res.send({
        status: 'success',
        message: 'User has not Followed yet',
      });
  } catch (e) {
    console.log(e);
    res
      .status(400)
      .send({ status: 'error', message: 'Something wrong Happened' });
  }
});

app.get('/twitter/verifyuser/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const userData = await axios.get(apiUrl2, config);

    const finalData = userData.data.ids;

    let result = false;

    finalData.forEach((data) => {
      if (data == userId) result = true;
    });

    if (result)
      return res.send({
        status: 'success',
        message: 'Twitter Following Succcessful',
      });
    else
      return res.send({
        status: 'success',
        message: 'User has not Followed yet',
      });
  } catch (e) {
    console.log(e);
    res
      .status(400)
      .send({ status: 'error', message: 'Something wrong Happened' });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.listen(port, () => console.log('Server started at port ' + port));
