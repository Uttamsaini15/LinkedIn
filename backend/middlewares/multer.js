import multer from "multer"
import os from "os"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, os.tmpdir())
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

const upload = multer({
    storage,
    limits: { fileSize: 4 * 1024 * 1024 } // 4 MB
})

export default upload
