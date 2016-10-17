"use strict";
var MessageUtils = (function () {
    function MessageUtils() {
    }
    MessageUtils.successMsg = function (msg, code) {
        code = code || 200;
        return {
            code: code,
            msg: msg
        };
    };
    return MessageUtils;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MessageUtils;
