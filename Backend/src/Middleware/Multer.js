import multer from 'multer'

// Create a new Date object to get current date and time for file name
const now = new Date()
const DD_MM_YYYY = `${now.getDate().toString().padStart(2, '0')}_${(now.getMonth() + 1).toString().padStart(2, '0')}_${now.getFullYear()}`

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
        cb(null,`${DD_MM_YYYY}-${file.originalname}`)
    }
})

export const uploader = multer({ storage: storage })