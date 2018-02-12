/**
 * Created by jimmy on 18/2/8.
 */
class SuperBase{
    constructor(){
        "use strict";
        //默认时间格式化
        this._prototypeExtent();
    }

    copyDeepth(config, myConfig) {
        //浅copy
        var newobj = config.constructor === Array ? [] : {};
        for (var i in config) {
            newobj[i] = config[i];
        }

        var val;
        for (var key in myConfig) {
            val = myConfig[key];
            if (val != null) {
                newobj[key] = val;
            }
        }
        return newobj;
    }

    _prototypeExtent() {
        Date.prototype.format = function (format) {
            var o = {
                "M+": this.getMonth() + 1, //month
                "d+": this.getDate(), //day
                "h+": this.getHours(), //hour
                "m+": this.getMinutes(), //minute
                "s+": this.getSeconds(), //second
                "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
                "S": this.getMilliseconds() //millisecond
            }
            if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
                (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o) if (new RegExp("(" + k + ")").test(format))
                format = format.replace(RegExp.$1,
                    RegExp.$1.length == 1 ? o[k] :
                        ("00" + o[k]).substr(("" + o[k]).length));
            return format;
        };

        //拓展string的方法，去除两端空格
        String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
        };

        //长度截取
        String.prototype.substrLongStr = function (len) {
        if (!len) {
            len = 20;
        }
        var str = this;
        if (this.length > len) {
            str = str.substr(0, parseInt(len - 1));
        }
        return str;
    };
    }

};

export  {SuperBase};