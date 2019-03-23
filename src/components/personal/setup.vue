<template>
  <div>
    <router-view />
    <div class="header">
     <i @click="Backoff" class="fa fa-angle-left"></i><span>设置</span>
    </div>



  </div>
</template>

<script>
export default {
    methods:{
    Backoff(){
        this.$router.go(-1);
    },
},
}
</script>
<style scoped lang="scss">
.header{text-align: center;font-size:.9375rem;height: 3.4375rem;background:#f5f5f5;color:#424a47;line-height: 3.4375rem;
border-bottom: .125rem solid #e2e2e2;
i{float: left;margin-top: 1.25rem;margin-left: .6875rem;}
}

</style>