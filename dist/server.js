"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const _1 = __importDefault(require("."));
const config_1 = __importDefault(require("./app/config"));
async function main() {
    try {
        await mongoose_1.default.connect(config_1.default.db_url);
        _1.default.listen(config_1.default.port, () => {
            console.log(`Server running on port ${config_1.default.port} and was successfully connected to MongoDB.`);
        });
    }
    catch (err) {
        console.log("Error trying to connect to MongoDB: ", err);
    }
}
main();
//# sourceMappingURL=server.js.map