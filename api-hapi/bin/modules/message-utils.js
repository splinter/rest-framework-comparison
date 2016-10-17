"use strict";
var MessageUtils = (function () {
    function MessageUtils() {
    }
    MessageUtils.successMsg = function (msg, code) {
        code = code || 200;
        return {
            code: code,
            message: message
        };
    };
    return MessageUtils;
}());
exports.MessageUtils = MessageUtils;
