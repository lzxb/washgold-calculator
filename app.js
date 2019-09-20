const express = require('express');

const app = express();

app.use(express.static('build/web'))

app.listen(3000, () => {
    console.log('打开地址: http://192.168.20.87:3000');
});