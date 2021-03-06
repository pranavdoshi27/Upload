const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());
app.use('', express.static('uploads'));

// Upload Endpoint
app.post('/upload', (req, res) => {
  // if (req.files === null) {
  //   return res.status(400).json({ msg: 'No file uploaded' });
  // }

  const file = req.file;
  // const fileName = file.name+req.useriD?req.useriD:"";
  file.mv(`${__dirname}/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `${__dirname}/uploads/${file.name}` });
  });
});

app.listen(5000, () => console.log('Backend Server Started...'));
