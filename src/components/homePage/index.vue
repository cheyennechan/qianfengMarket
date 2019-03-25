<template>
  <div>
    <!-- banner轮播 -->
    <div class="indexBanner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <router-link to>
              <img src="../../../static/img/banner.jpg">
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to>
              <img src="../../../static/img/banner01.jpg">
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to>
              <img src="../../../static/img/banner.jpg">
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to>
              <img src="../../../static/img/banner01.jpg">
            </router-link>
          </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 图标导航 -->
    <div class="iconNav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon01.png">
                </dt>
                <dd>饮料饮品</dd>
              </dl>
            </router-link>
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon02.png">
                </dt>
                <dd>休闲零食</dd>
              </dl>
            </router-link>
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon03.png">
                </dt>
                <dd>新鲜水果</dd>
              </dl>
            </router-link>
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon04.png">
                </dt>
                <dd>散称零食</dd>
              </dl>
            </router-link>
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon05.png">
                </dt>
                <dd>方便面</dd>
              </dl>
            </router-link>
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon06.png">
                </dt>
                <dd>酒水专区</dd>
              </dl>
            </router-link>
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon07.png">
                </dt>
                <dd>冲调食品</dd>
              </dl>
            </router-link>
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon08.png">
                </dt>
                <dd>牛奶</dd>
              </dl>
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon01.png">
                </dt>
                <dd>茗茶</dd>
              </dl>
            </router-link>
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon02.png">
                </dt>
                <dd>调味食品</dd>
              </dl>
            </router-link>
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon03.png">
                </dt>
                <dd>南北干货</dd>
              </dl>
            </router-link>
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon04.png">
                </dt>
                <dd>文体用品</dd>
              </dl>
            </router-link>
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon05.png">
                </dt>
                <dd>办公用品</dd>
              </dl>
            </router-link>
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon06.png">
                </dt>
                <dd>生活百货</dd>
              </dl>
            </router-link>
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon07.png">
                </dt>
                <dd>生活用纸</dd>
              </dl>
            </router-link>
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon08.png">
                </dt>
                <dd>女神用品</dd>
              </dl>
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to>
              <dl>
                <dt>
                  <img src="../../../static/img/nav_icon08.png">
                </dt>
                <dd>护肤洗涤</dd>
              </dl>
            </router-link>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 商城公告商家入驻 -->
    <div class="newsMerchant">
      <div class="roll">
        <span>
          <router-link to>
            <img src="../../../static/img/news_tit.png">
          </router-link>
        </span>

        <div class="swiper-container swiper-no-swiping">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in list">
              <router-link to>{{item}}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="merchant">
        <router-link to>
          <img src="../../../static/img/bg_sj.jpg">
        </router-link>
      </div>
    </div>
    <!-- 热销品类 -->
    <div class="hotSale">
      <div class="saleTitle">
        <p></p>
        <h2>热销品类</h2>
        <p></p>
      </div>
      <div class="hotBox">
        <aside>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <router-link to>
                  <dl>
                    <dt>
                      <img src="../../../static/img/pic01.jpg">
                    </dt>
                    <dd>
                      <p>10支纳米牙刷软毛成人家用竹炭抑菌款</p>
                      <div>
                        <i>￥</i>
                        <span>29.00</span>
                      </div>
                    </dd>
                  </dl>
                </router-link>
              </div>
              <div class="swiper-slide">
                <router-link to>
                  <dl>
                    <dt>
                      <img src="../../../static/img/pic03.jpg">
                    </dt>
                    <dd>
                      <p>新品】康师傅金汤虾球面，营养健康新体验.</p>
                      <div>
                        <i>￥</i>
                        <span>5.00</span>
                      </div>
                    </dd>
                  </dl>
                </router-link>
              </div>
              <div class="swiper-slide">
                <router-link to>
                  <dl>
                    <dt>
                      <img src="../../../static/img/pic08.jpg">
                    </dt>
                    <dd>
                      <p>RIO锐澳鸡尾酒套装预调酒果酒洋酒经典275ml*24瓶整箱正品1517104正品</p>
                      <div>
                        <i>￥</i>
                        <span>199.00</span>
                      </div>
                    </dd>
                  </dl>
                </router-link>
              </div>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </aside>
        <article>
          <div class="rTop">
            <router-link to="#">
              <img src="../../../static/img/index_ad_pic(2).jpg">
            </router-link>
          </div>
          <div class="rBotm">
            <div>
              <router-link to="#">
                <img src="../../../static/img/index_ad_pic(3).jpg">
              </router-link>
            </div>
            <div>
              <router-link to="#">
                <img src="../../../static/img/index_ad_pic(6).jpg">
              </router-link>
            </div>
          </div>
        </article>
      </div>
    </div>
    <!-- 广告条 -->
    <div class="ads">
      <div class="swiper-container swiper-no-swiping">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <router-link to>
              <img src="../../../static/img/ad_pic01.jpg">
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to>
              <img src="../../../static/img/ad_pic02.jpg">
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to>
              <img src="../../../static/img/ad_pic03.jpg">
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 新品推荐 -->
    <div class="newProducts">
      <div class="saleTitle">
        <p></p>
        <h2>新品推荐</h2>
        <p></p>
      </div>
      <div class="newProdCont">
        <dl>
          <router-link to>
            <dt>
              <img src="../../../static/img/pic01.jpg">
            </dt>
            <dd>
              <p>10支纳米牙刷软毛成人家用竹炭抑菌款</p>
              <div>
                <i>￥</i>
                <span>29.00</span>
              </div>
            </dd>
          </router-link>
        </dl>
        <dl>
          <router-link to>
            <dt>
              <img src="../../../static/img/pic.jpg">
            </dt>
            <dd>
              <p>日本进口食品丸京红豆铜锣烧310g蛋糕面包早餐网红零食品小吃动网球鞋</p>
              <div>
                <i>￥</i>
                <span>299.00</span>
              </div>
            </dd>
          </router-link>
        </dl>
        <dl>
          <router-link to>
            <dt>
              <img src="../../../static/img/pic03.jpg">
            </dt>
            <dd>
              <p>康师傅红烧牛肉面康师傅红烧牛肉面康师傅红烧牛肉面</p>
              <div>
                <i>￥</i>
                <span>49.00</span>
              </div>
            </dd>
          </router-link>
        </dl>
        <dl>
          <router-link to>
            <dt>
              <img src="../../../static/img/pic08.jpg">
            </dt>
            <dd>
              <p>RIO锐澳鸡尾酒套装预调酒果酒洋酒经典275ml*24瓶整箱正品1517104正品</p>
              <div>
                <i>￥</i>
                <span>399.00</span>
              </div>
            </dd>
          </router-link>
        </dl>
        <dl>
          <router-link to>
            <dt>
              <img src="../../../static/img/pic05.jpg">
            </dt>
            <dd>
              <p>innisfree/悦诗风吟绿茶精萃保湿洁面乳</p>
              <div>
                <i>￥</i>
                <span>299.00</span>
              </div>
            </dd>
          </router-link>
        </dl>
        <dl>
          <router-link to>
            <dt>
              <img src="../../../static/img/pic06.jpg">
            </dt>
            <dd>
              <p>化妆品收纳盒桌面抽屉式办公室文具文件架办公桌用品多功能置物架</p>
              <div>
                <i>￥</i>
                <span>199.00</span>
              </div>
            </dd>
          </router-link>
        </dl>
      </div>
      <div class="moreLink">
        <router-link to="">更多新品></router-link>
      </div>
    </div>
    <div class="loadMore">
      加载更多···
    </div>
 <div class="tail">
      <ul>
        <li v-for="val in tailul">
          <a href="#">{{val.name}}</a>
          <span>{{val.sp}}</span>
        </li>
      </ul>
      <p v-for="val in tailp">{{val.name}}</p>
    </div>
  </div>
</template>

<style lang="scss">
// banner轮播
.indexBanner {
  .swiper-pagination-bullet-active {
    background: #ffe037 !important;
  }
  .swiper-container {
    width: 100%;
    height: 11.25rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
// 图标导航
.iconNav {
  border-bottom: 0.38rem solid #f1f1f1;
  background: #fff;
  .swiper-pagination-bullet-active {
    background: #007aff !important;
  }
  .swiper-pagination-bullet {
    width: 12px;
    height: 2px;
    border-radius: 0;
    margin: 0 2px;
    background-color: #ffe037;
    opacity: 1;
  }
  .swiper-slide {
    padding: 0.94rem 0 1.25rem;
    display: flex;
    flex-wrap: wrap;
    dl {
      flex: 1;
      text-align: center;
      color: #888;
      margin-bottom: 0.38rem;
      img {
        width: 50%;
        height: 50%;
      }
    }
  }
}
// 商城公告商家入驻
.newsMerchant {
  border-bottom: 0.38rem solid #f1f1f1;
  .roll {
    height: 1.25rem;
    padding: 2%;
    span {
      margin-top: 0.6%;
      float: left;
      width: 20%;
      img {
        width: 100%;
        display: block;
      }
    }
    .swiper-container {
      width: 78%;
      height: 1.25rem;
      overflow: hidden;
      font-size: 0.38rem;
      float: right;
      .swiper-slide {
        height: 1.25rem;
        line-height: 1.25rem;
        a {
          color: #666;
        }
      }
    }
  }
  .merchant {
    img {
      display: block;
      width: 100%;
    }
  }
}
.saleTitle {
  width: 56%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  line-height: 1.88rem;
  display: flex;
  padding: 3% 0 5%;
  p {
    width: 2.7rem;
    height: 1px;
    background-color: #4aa3e6;
  }
  h2 {
    font-weight: 100;
    color: #4aa3e6;
    font-size: 1.13rem;
    background: url(../../../static/img/line_botm.jpg) no-repeat center bottom;
    background-size: 100% 3px;
  }
}
// 热销品类
.hotSale {
  border-bottom: 6px solid #f1f1f1;
  padding-bottom: 5%;

  .hotBox {
    border-top: #ddd solid 1px;
    border-bottom: #ddd solid 1px;
    display: flex;
    aside,
    article {
      width: 50%;
      img {
        width: 100%;
        display: block;
      }
    }
    aside {
      border-right: #ddd solid 1px;
      .swiper-container {
        margin: 4%;
        padding-bottom: 10%;
      }
      p {
        margin-top: 3%;
        color: #666;
        font-size: 0.69rem;
        line-height: 0.88rem;
      }
      div {
        color: #f00;
        font-size: 0.75rem;
      }
    }
    article {
      .rTop {
        padding: 2%;
        height: 6.56rem;
        border-bottom: #ddd solid 1px;
      }
      .rBotm {
        display: flex;
        div {
          width: 48%;
          padding: 3% 1%;
        }
        div:nth-of-type(1) {
          border-right: #ddd solid 1px;
        }
      }
    }
    .swiper-pagination-bullet-active {
      background: #007aff !important;
    }
    .swiper-pagination-bullet {
      width: 12px;
      height: 3px;
      border-radius: 0;
      margin: 0 2px;
      background-color: #ffe037;
      opacity: 1;
    }
  }
}
// 广告条
.ads {
  border-bottom: 6px solid #f1f1f1;
  img {
    width: 100%;
    display: block;
  }
}
// 新品推荐
.newProducts{
  .newProdCont {
    display: flex;
    flex-wrap: wrap;
    dl {
      width: 31.7333%;
      margin: 0 0.8%;
      margin-bottom: 1%;
      dd{
        p{
          color: #666;
          font-size: .69rem;
          line-height: .88rem;
          height: 1.68rem;
          margin-top: 4%;
          overflow: hidden;
        }
        div{
          color: #f00;
          font-size: .81rem;
          line-height: 160%;
          margin: 0 2% 4%;
        }
      }
      img {
        width: 100%;
      }
    }
  }
  .moreLink{
    padding: 3% 0 7%;
    a{
      display: block;
      width: 50%;
      background-color: #2691e1;
      border-radius: 50px;
      text-align: center;
      margin: 0 auto;
      height: 1.88rem;
      line-height: 1.88rem;
      font-size: .81rem;
      color: #fff;
    }
    
  }
}
.loadMore{
  background-color: #f0f0f0;
  text-align: center;
  color: #999;
  font-size: .69rem;
  padding: 2%
}
//尾部 tail
.tail {
  padding: 1.40625rem 0 1.5625rem;
  ul {
    display: flex;
    padding: 0 0.9375rem;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    li {
      font-size: 0.6875rem;
      a {
        padding-bottom: 0.125rem;
        border-bottom: 0.0625rem solid #a8a8a5;
        color: #a8a8a5;
      }
      span {
        font-size: 0.375rem;
        margin-left: 0.3125rem;
        color: #e4e443;
      }
    }
  }
  p {
    text-align: center;
    margin-bottom: 0.6875rem;
    font-size: 0.75rem;
  }
}
</style>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      list: [
        "定了！今年五一放假四天",
        "周末华南气温“触底”，北方暖意逐渐回归",
        "贾跃亭又有合伙人了?"
      ],
       tailul: [
        { name: "关于我们", sp: ">" },
        { name: "购物指南", sp: ">" },
        { name: "支付方式", sp: ">" },
        { name: "售后服务", sp: ">" }
      ],
      tailp: [
        { name: "© 2019 XX公司  ICP备XXXXXXXX号" },
        { name: "全国统一服务热线：400-888-8888" },
        { name: "技术支持：小晏(www.666.com)" }
      ]
    };
  },
  mounted() {
    var bannerSwiper = new Swiper(".indexBanner .swiper-container", {
      loop: true, // 循环模式
      // 分页器
      pagination: {
        el: ".swiper-pagination"
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    });
    var iconNacSwiper = new Swiper(".iconNav .swiper-container", {
      loop: false, // 循环模式
      // 分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
    var newsSwiper = new Swiper(".newsMerchant .swiper-container", {
      direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    });
    var hotSaleSwiper = new Swiper(".hotSale .swiper-container", {
      loop: true, // 循环模式
      // 分页器
      pagination: {
        el: ".swiper-pagination"
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    });
    var adsSwiper = new Swiper(".ads .swiper-container", {
      loop: true, // 循环模式
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    });
  }
};
</script>


