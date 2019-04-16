import { isNullOrUndefined } from 'util';
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.convertToString = function (value) {
        if ('string' === typeof value) {
            return value;
        }
        return !isNullOrUndefined(value) ? value.toString() : null;
    };
    return StringUtils;
}());
export { StringUtils };
//# sourceMappingURL=string-utils.js.map