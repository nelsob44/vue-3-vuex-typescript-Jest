<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ebf1f7;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
