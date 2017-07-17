"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PortValidator = (function () {
    function PortValidator() {
    }
    PortValidator.validate = function (port, alternative) {
        var result = alternative ? alternative : -1;
        port = parseInt(port, 10);
        if (port > 1024 && port <= 65535) {
            result = port;
        }
        return result;
    };
    return PortValidator;
}());
exports.default = PortValidator;
