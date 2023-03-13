var multer  = require('multer');
var storage = multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
      cb(null, './public/images');
    },
    filename: (req: any, file: any, cb: any) => {
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});

var upload = multer({storage: storage});

module.exports = upload;