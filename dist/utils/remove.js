"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
const util_1 = require("util");
const fs_1 = __importDefault(require("fs"));
exports.remove = (0, util_1.promisify)(fs_1.default.unlink);
