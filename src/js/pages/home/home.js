/**
 * Created by jimmy on 18/2/8.
 */
import {Base} from './../../common/base.js'

class Home extends Base{
    constructor(){
        super();
        "use strict";
    }

    getData(options,callback){

        var optionsGoodsData = {
            url: '/test/goods/'+options.goodsPageInfo.index+'/'+options.goodsPageInfo.size,
        };
        var pmsGoodsData = this.sendAjax(optionsGoodsData);


        var optionsNewsData = {
            url: '/test/news/1/3',
        };
        var pmsNewsData = this.sendAjax(optionsNewsData);

        Promise.all([pmsGoodsData,pmsNewsData]).then((data)=>{
            callback && callback(data)
        });
    }

    getBannerData(pageInfo,callback){
        var optionsShoppingData = {
            url: '/test/goods/'+pageInfo.index+'/'+pageInfo.size,
        };
        var pmsShoppingData = this.sendAjax(optionsShoppingData);
        pmsShoppingData.then((data)=>{
            callback && callback(true,data)
        },(data)=>{
            callback && callback(false,data)
        });
    }
};

export {Home};