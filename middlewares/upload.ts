import multer from "multer"

export const upload = multer({
	storage: multer.diskStorage({
		destination: "upload/",
		filename: (req, file, cb) => {
			cb(null, file.originalname)
		}
	})
}).single("picture")