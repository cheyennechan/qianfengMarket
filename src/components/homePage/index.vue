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
  </div>
</template>

<style lang="scss">
   
.indexBanner {
   .swiper-pagination-bullet-active{
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
.iconNav {
  background: #fff;
  .swiper-pagination-bullet-active {
    background: #007aff !important;
  }
  .swiper-pagination-bullet{
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
</style>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
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
  }
};
</script>


