const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('i ❤️ maxim')
})

const port = process.env.PORT || 19999;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});
