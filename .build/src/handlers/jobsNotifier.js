"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var RSSParser = require("rss-parser");
var UPWORK_FEED_URL = "https://www.upwork.com/ab/feed/jobs/rss?category2_uid=531770282580668418&ontology_skill_uid=1031626773660942336&paging=NaN-undefined&payment_verified=1&proposals=10-14&q=react&sort=recency&api_params=1&securityToken=feacf55f8ed768ce83bbde9280f997dd628211cb16eca0bddf4a78883cb696202bf0148c0ea6bac2e41e23428e423131a8926d2174b6a858ad60ebd692d287e2&userUid=424150074540802048&orgUid=424150074544996353";
var jobsNotifier = function (event, context) { return __awaiter(void 0, void 0, void 0, function () {
    var rssParser, response, items;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                rssParser = new RSSParser();
                return [4 /*yield*/, axios_1.default.get(UPWORK_FEED_URL)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, rssParser.parseString(response.data)];
            case 2:
                items = (_a.sent()).items;
                console.log({ result: items });
                return [2 /*return*/];
        }
    });
}); };
exports.default = jobsNotifier;
//# sourceMappingURL=jobsNotifier.js.map