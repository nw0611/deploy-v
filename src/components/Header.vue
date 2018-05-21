<template>
  <div class="header cf">
    <div class="logo">
      <img src="https://bita.jp/common/images/logo.png" />
    </div>
    <div class="account">
      <img src="" class="account_img" />
      <span class="account_name"></span>
      <a href="#" class="acount_sign_in">SIGN IN</a>
      <a href="#" class="acount_sign_out">SIGN OUT</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
  }
}
</script>

<style scoped>
.header {
  padding-top: 20px;
}
  .logo {
    display: inline-block;
    vertical-align: middle;
  }
  .account {
    display: inline-block;
    text-align: right;
    vertical-align: middle;
    width: 500px;
  }
  .cf:before,
  .cf:after {
      content:"";
      display:table;
  }
  .cf:after {
      clear:both;
  }

</style>
