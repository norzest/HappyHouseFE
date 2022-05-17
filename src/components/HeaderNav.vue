<template>
  <header>
    <div id="logo">
      <router-link to="/">logo</router-link>
    </div>
    <div id="navbar">
      <router-link to="/about">About</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div id="user">
      <router-link to="/about">user</router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  width: 100%;
  background-color: #996a54;

  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
}
header a {
  padding: 10px;
}

#navbar {
  text-align: left;
}
</style>
