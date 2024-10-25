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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var url = 'http://localhost:3000/';
function getAbilities() {
    return __awaiter(this, void 0, void 0, function () {
        var str, abilities;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    str = "";
                    return [4 /*yield*/, fetch(url + 'abilities')
                            .then(function (response) {
                            if (response.ok == false)
                                throw Error(response.statusText);
                            return response.json();
                        })
                            .then(function (data) {
                            console.log(data);
                            return data;
                        })];
                case 1:
                    abilities = _a.sent();
                    abilities.forEach(function (e) {
                        str +=
                            "\n            <div class=\"ability m-3\">\n                <div class=\"header\">\n                <img src=\"".concat(e.imgPath, "\" alt=\"ability\">\n                <h3>").concat(e.name, "</h3>\n                </div>\n                <p>").concat(e.des, "</p>\n            </div>\n        ");
                    });
                    return [2 /*return*/, str];
            }
        });
    });
}
var warframes = [];
var skip = 0;
var take = 18;
function getWarframes() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url + 'warframes')
                        .then(function (response) {
                        if (response.ok == false)
                            throw Error(response.statusText);
                        return response.json();
                    })
                        .then(function (data) {
                        console.log(data);
                        return data;
                    })];
                case 1:
                    warframes = _a.sent();
                    return [2 /*return*/, LoadWarframes()];
            }
        });
    });
}
function LoadWarframes() {
    var str = "";
    warframes.slice(skip, skip + take).forEach(function (e) {
        str += "\n        <div class=\"col-md-6 col-lg-2\">\n            <div class=\"card warframe\" data-bs-toggle=\"modal\" data-bs-target=\"#videoModal\" onclick=\"GetVideo('".concat(e.video, "')\">\n            <div class=\"card-body text-center\">\n                <img src=\"/assets/imgs/warframes/").concat(e.imgPath, "\" alt=\"warframe\">\n                <h5>").concat(e.name, "</h5>\n                <p>").concat(e.des, "</p>\n            </div>\n            </div>\n        </div>\n        ");
    });
    return str;
}
function Next(classname, numberPage) {
    var value = 18 * numberPage;
    console.log("value: " + value);
    skip = value;
    document.getElementsByClassName(classname)[0].innerHTML = LoadWarframes();
}
function Prev(classname, numberPage) {
    var value = numberPage * 18;
    console.log("value: " + value);
    skip = value;
    document.getElementsByClassName(classname)[0].innerHTML = LoadWarframes();
}
function Change(event, classname) {
    var _a, _b, _c;
    if (event == 0) {
        var pagination = (_a = document.querySelector('.pagination')) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.page-item');
        if (pagination != null || pagination != '' || pagination != undefined) {
            for (var i = 0; i < pagination.length; i++) {
                if (pagination[i].classList.contains('active')) {
                    if (i >= 2) {
                        pos = i;
                        pagination[i].classList.remove('active');
                        pagination[i - 1].classList.add('active');
                        Prev(classname, i - 2);
                        break;
                    }
                }
            }
        }
    }
    else if (event == null) {
        var pagination = (_b = document.querySelector('.pagination')) === null || _b === void 0 ? void 0 : _b.querySelectorAll('.page-item');
        if (pagination != null || pagination != '' || pagination != undefined) {
            for (var i = 0; i < pagination.length; i++) {
                if (pagination[i].classList.contains('active')) {
                    if (i + 2 < pagination.length) {
                        pos = i;
                        pagination[i].classList.remove('active');
                        pagination[i + 1].classList.add('active');
                        Next(classname, i);
                        break;
                    }
                }
            }
        }
    }
    else {
        var value = parseInt(event.target.innerHTML);
        var pos = 0;
        if (skip / value - 1 != 18) {
            var pagination = (_c = document.querySelector('.pagination')) === null || _c === void 0 ? void 0 : _c.querySelectorAll('.page-item');
            if (pagination != null || pagination != '' || pagination != undefined) {
                for (var i = 0; i < pagination.length; i++) {
                    if (pagination[i].classList.contains('active')) {
                        pos = i;
                        pagination[i].classList.remove('active');
                        break;
                    }
                }
            }
            pagination[value].classList.add('active');
            if (pos < value) {
                Next(classname, value - 1);
            }
            else if (pos > value) {
                Prev(classname, value - 1);
            }
        }
    }
}
function GetPaginaButton() {
    var str = "";
    str += "<li class=\"page-item\">\n              <a class=\"page-link\" aria-label=\"Previous\" onclick=\"Change(0, 'list-warframe')\">\n                <span aria-hidden=\"true\">&laquo;</span>\n              </a>\n            </li>";
    var pagiNum = warframes.length / 18;
    if (warframes.length % 18 != 0) {
        pagiNum += 1;
    }
    for (var i = 1; i <= pagiNum; i++) {
        if (i == 1) {
            str += "<li class=\"page-item active\"><a class=\"page-link\" onclick=\"Change(event, 'list-warframe')\">".concat(i, "</a></li>");
        }
        else {
            str += "<li class=\"page-item\"><a class=\"page-link\" onclick=\"Change(event, 'list-warframe')\">".concat(i, "</a></li>");
        }
    }
    str += "<li class=\"page-item\">\n              <a class=\"page-link\" aria-label=\"Next\" onclick=\"Change(null, 'list-warframe')\">\n                <span aria-hidden=\"true\">&raquo;</span>\n              </a>\n            </li>";
    return str;
}
