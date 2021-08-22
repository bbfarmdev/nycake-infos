"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Wallet_1 = __importDefault(require("../bsc/Wallet"));
const NYCakeContract_1 = __importDefault(require("../contracts/NYCakeContract"));
class Controller extends react_1.Component {
    constructor() {
        super(...arguments);
        this.claim = () => {
            NYCakeContract_1.default.claim();
        };
        this.connect = () => {
            Wallet_1.default.connect();
        };
    }
    render() {
        return jsx_runtime_1.jsxs("main", { children: [jsx_runtime_1.jsx("a", Object.assign({ onClick: this.claim }, { children: "CLAIM" }), void 0), jsx_runtime_1.jsx("a", Object.assign({ onClick: this.connect }, { children: "CONNECT" }), void 0)] }, void 0);
    }
}
exports.default = Controller;
//# sourceMappingURL=Controller.js.map