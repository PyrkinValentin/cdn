"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const upload_1 = require("./middlewares/upload");
const remove_1 = require("./utils/remove");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/picture", express_1.default.static("upload"));
app.post("/api/upload", upload_1.upload, (req, res) => {
    res.status(200).json({ status: "UPLOADED", file: req.file });
});
app.delete("/api/upload/:path", async (req, res) => {
    try {
        await (0, remove_1.remove)("upload/" + req.params.path);
        res.status(200).json({ status: "DELETED" });
    }
    catch (err) {
        res.status(500).json({ status: "ERROR", message: err.message });
    }
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
