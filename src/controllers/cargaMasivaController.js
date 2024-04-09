const express = require('express');
const cors = require('cors')
const app = express()
const multer = require('multer')


 const storage = multer.diskStorage(
    {
        filename: function(res, file, cb){
            const ext = file.originalname.split('.').pop()
            const filename = Date.now()
            cb(null,`${filename}.${ext}`)
        },
        destination: function(res, file, cb){
            
        }
    }
 )
