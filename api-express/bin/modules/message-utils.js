"use strict";
var MessageUtils = (function () {
    function MessageUtils() {
    }
    MessageUtils.SuccessMsg = function (msg, code) {
        code = code || 200;
        return {
            code: code,
            msg: msg
        };
    };
    return MessageUtils;
}());
exports.__esModule = true;
exports["default"] = MessageUtils;
