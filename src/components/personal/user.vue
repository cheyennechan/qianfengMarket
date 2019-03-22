<template>
  <div>
  	<div class="heard">
      <div class="heard-top">
        <div class="user"></div>
        <div>
          <span>王麻子</span>
          <em>(钻石会员)</em>
        </div>
        <div class="set">设置</div>
      </div>
      <ul>
        <li><i class="fa fa-heart-o"></i>
        <span>我的收藏(<em>13</em>)</span>        
        </li>
        <li><i class="fa fa-handshake-o"></i>
        <span>我的订单(<em>9</em>)</span>
        </li>
        <li><i class="fa fa-comment-o"></i>
        <span>我的评价(<em>5</em>)</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">

.heard{overflow: hidden;
width: 100%;
background: #4aa3e7;
.heard-top{display:flex;padding: 0 1rem;position: relative;margin-top: 1.15625rem;height: 4.53125rem;
.user{width: 4.53125rem;height: 4.53125rem;border: .21875rem #fff solid;
border-radius: 50%;
}
div{margin-left: .9375rem;font-size:.75rem;
span{display: block;margin-top: .9375rem;color: #fff}
em{display: block;margin-top:.25rem}
}
.set{position:absolute;right: 1rem;top: .78125rem;width: 2.65625rem;height:1.5625rem;border-radius: 35% 35%;
border: .09375rem solid #59b6f8;font-size: .75rem;color: #59b6f8;text-align: center;line-height:1.5625rem }
}
ul{display: flex;height: 3.90625rem;justify-content:space-between;padding: 1.15625rem 1rem 0;
li{text-align: center;font-size:.875rem;color:#fff;
  span{display: block;font-size: .75rem;margin-top: .46875rem}
}
}
}
</style>


