<template>
  <div class="psal">
    <!-- 头部 -->
    <div class="heard">
      <div class="heard-top">
        <div class="user"></div>
        <div>
          <span>{{Username}}</span>
          <em>{{Rank}}</em>
        </div>
        <div class="set">{{Sets}}</div>
      </div>
      <ul>
        <li v-for="val in Heard">
          <i :class="val.ico"></i>
          <span>
            {{val.span}}(
            <em>{{val.em}}</em>)
          </span>
        </li>
      </ul>
    </div>
    <!-- 积分 -->
    <div class="integral">
      <div>
        {{integral[0]}}
        <span>{{integral[1]}}</span>
      </div>
      <div>{{integral[2]}}</div>
    </div>
    <!-- 内容cent -->
    <div class="cent">
      <ul>
        <li v-for="val in cent">
          <div :style="{background:val.bg}">
            <i :class="val.ico"></i>
          </div>
          <p>{{val.name}}</p>
        </li>
      </ul>
    </div>
    <div class="bgs"></div>
    <!-- 门店查询 store -->
    <div class="store">
      <span>{{store[0]}}</span>
      <span>{{store[1]}}</span>
      <span>{{store[2]}}</span>
    </div>
    <!-- 尾部 tail -->
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

<script>
export default {
  data() {
    return {
      Username: "王麻子",
      Rank: "(钻石会员)",
      Sets: "设置",
      Heard: [
        {
          span: "我的收藏",
          ico: "fa fa-heart-o",
          em: 13
        },
        {
          span: "我的订单",
          ico: "fa fa-handshake-o",
          em: 9
        },
        {
          span: "我的评价",
          ico: "fa fa-comment-o",
          em: 5
        }
      ],
      integral: ["我的积分:", "11800", "积分兑换>"],
      cent: [
        { name: "地址管理", ico: "fa fa-map-marker ", bg: "#8d45e7" },
        { name: "退货/售后", ico: "fa fa-caret-square-o-left", bg: "#de8a46" },
        { name: "我的留言", ico: "fa fa-pencil-square-o", bg: "#23dca6" }
      ],
      store: ["剁手党的春天", "|", "门店查询"],
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
  }
};
</script>

<style scoped lang="scss">
.psal {
  color: #a49f9e;
}
//头部
.heard {
  overflow: hidden;
  width: 100%;
  background: #4aa3e7;
  .heard-top {
    display: flex;
    padding: 0 1rem;
    position: relative;
    margin-top: 1.15625rem;
    height: 4.53125rem;
    .user {
      width: 4.53125rem;
      height: 4.53125rem;
      border: 0.21875rem #fff solid;
      border-radius: 50%;
      overflow: hidden;
    }
    div {
      margin-left: 0.9375rem;
      font-size: 0.75rem;
      span {
        display: block;
        margin-top: 0.9375rem;
        color: #fff;
      }
      em {
        display: block;
        margin-top: 0.25rem;
        color: #ece35a;
      }
    }
    .set {
      position: absolute;
      right: 1rem;
      top: 0.78125rem;
      width: 2.65625rem;
      height: 1.5625rem;
      border-radius: 35% 35%;
      border: 0.09375rem solid #59b6f8;
      font-size: 0.75rem;
      color: #59b6f8;
      text-align: center;
      line-height: 1.5625rem;
    }
  }
  ul {
    display: flex;
    height: 3.90625rem;
    justify-content: space-between;
    padding: 1.15625rem 1rem 0;
    li {
      text-align: center;
      font-size: 0.875rem;
      color: #fff;
      span {
        display: block;
        font-size: 0.75rem;
        margin-top: 0.46875rem;
      }
    }
  }
}
//积分
.integral {
  border: 0.375rem solid #eff2f3;
  border-left: none;
  border-right: none;
  padding: 0.625rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #a1a29a;
  span {
    font-size: 0.9375rem;
    color: #27828f;
  }
}
// 内容cent
.cent {
  padding: 0 1.875rem;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 1.40625rem 0 1.71875rem;
    li {
      text-align: center;
      div {
        width: 2.4375rem;
        height: 2.4375rem;
        border-radius: 50%;
        margin: 0 auto;
        line-height: 2.4375rem;
        color: #fff;
      }
      p {
        margin-top: 0.46875rem;
        font-size: 0.75rem;
        color: #827577;
      }
    }
  }
}
.bgs {
  background: #f1f1f1;
  height: 0.625rem;
  width: 100%;
}
//store
.store {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 5rem;
  font-size: 0.75rem;
  border-bottom: 0.09375rem solid #e4e4e4;
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


