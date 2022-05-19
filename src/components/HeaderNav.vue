<template>
  <header>
    <div id="logo">
      <router-link to="/">
        <img src="../assets/img/logo_happyhouse_white.png" alt="" />
      </router-link>
    </div>
    <div id="navbar">
      <router-link to="/about">아파트</router-link>
      <router-link to="/about">관심매물</router-link>
      <router-link to="/about">게시판</router-link>
    </div>
    <div v-if="true" id="guest">
      <router-link to="/login">login</router-link>
      <router-link to="/about">join</router-link>
    </div>
    <div v-else id="user">
      <div class="user-img"></div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scope>
header {
  width: 100%;
  background-color: transparent;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  position: fixed;
  top: 0;
}

header a {
  color: white;
}
header a:hover {
  color: white;
}
header a {
  font-weight: 600;
}

header #logo,
header #guest {
  padding: 0 20px;
}
#logo img {
  width: 100px;
}

#navbar {
  flex-grow: 1;
  padding: 0 10px;
  text-align: left;
}
#navbar a {
  display: inline-block;
  padding: 0 10px;
}
#guest a {
  display: inline-block;
  padding: 0 10px;
}

@media screen and (max-width: 768px) {
  header {
    background-color: #996a54;
  }
  #navbar,
  #guest,
  #user {
    display: none;
  }

  #logo img {
  }
}
</style>
