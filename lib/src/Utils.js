"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    numberWithCommas(x) {
        return x.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
}
exports.default = new Utils();
//# sourceMappingURL=Utils.js.map