import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import { upload } from "./middlewares/upload"
import { remove } from "./utils/remove"

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use("/picture", express.static("upload"))

app.post("/api/upload", upload, (req, res) => {
	res.status(200).json({ status: "UPLOADED", file: req.file })
})

app.delete("/api/upload/:path", async (req, res) => {
	try {
		await remove("upload/" + req.params.path)
		res.status(200).json({ status: "DELETED" })
	} catch (err: any) {
		res.status(500).json({ status: "ERROR", message: err.message })
	}
})

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`)
})