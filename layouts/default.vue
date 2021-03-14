<template>
  <div class="bg-primary min-h-screen">
    <Nuxt />
  </div>
</template>

<style>
@font-face {
  font-family: 'BeVietNam';
  src: local('BeVietNam'), url(../fonts/BeVietNam.ttf) format('truetype');
}
@font-face {
  font-family: 'MontserratBold';
  src: local('MontserratBold'), url(../fonts/MontserratBold.ttf) format('truetype');
}
@font-face {
  font-family: 'MontserratRegular';
  src: local('MontserratRegular'), url(../fonts/MontserratRegular.ttf) format('truetype');
}
html {
  font-family: MontserratRegular, serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
