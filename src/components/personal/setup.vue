<template>
  <div class="box">
    <router-view/>
    <div class="header">
      <i @click="Backoff" class="fa fa-angle-left"></i>
      <span>设置</span>
    </div>
    <div class="ysname">
      <div class="usleft">
        <div class="photo"></div>
        <div>
          <span>{{Usname[0]}}</span>
          <em>{{Usname[1]}}</em>
        </div>
      </div>
      <div class="usright rig">></div>
    </div>
    <div class="account">
      <div>账号安全</div>
      <div class="rig">></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Usname:["剁手就完事了","钻石会员"
      ]
    }
  },
  methods: {
    Backoff() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped lang="scss">
.box {
  background: #f5f5f5;padding-bottom: 21.875rem;
}
.header {
  text-align: center;
  font-size: 0.9375rem;
  height: 3.4375rem;
  color: #424a47;
  line-height: 3.4375rem;
  border-bottom: 0.125rem solid #e2e2e2;
  i {
    float: left;
    margin-top: 1.25rem;
    margin-left: 0.6875rem;
  }
}
.ysname {
  height: 4.3125rem;
  border-top: 0.125rem solid #e5e5e5;
  border-bottom: 0.09375rem solid #e5e5e5;
  background: #fff;
  display: flex;justify-content:space-between;
  padding:0 .625rem ;
  color: #7b7e74;
  .usleft{display: flex;justify-content: space-between;
    .photo{width:3.125rem;height: 3.125rem;border-radius: 50%;background: pink;margin-right:.375rem;margin-top:0.625rem;}
    span{font-size: .875rem;display:block;margin-top: 1.1875rem;color:#2587d9 }
    em{font-size: .6875rem;display: block;margin-top: .3125rem}
  }
  .usright{text-align: right;line-height: 4.3125rem}
}
.account {
  margin-top: 0.3125rem;
  height: 2.5rem;
  border-top: 0.09375rem solid #e5e5e5;
  border-bottom: 0.09375rem solid #e5e5e5;
  background: #fff;
  display: flex;justify-content: space-between;
  line-height: 2.5rem;
  font-size: .78125rem;
   padding:0 .625rem ;
   color: #7b7e74
}
.rig{color: #63b5ec}
</style>