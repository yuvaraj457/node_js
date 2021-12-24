const express = require('express')
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.fieldname + path.extname(file.originalname));
    }
})

const upload = multer({ storage });

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World' +" "+ req.time)
})

router.post('/products', upload.single('product'), (req, res) => {
    try {
      res.send(req.file);
    }catch(err) {
      res.send(400);
    }
  });


module.exports = router