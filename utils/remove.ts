import { promisify } from "util"
import fs from "fs"

export const remove = promisify(fs.unlink)