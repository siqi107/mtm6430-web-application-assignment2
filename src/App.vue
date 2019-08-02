<template>
  <div id="app">
    <header class="bg-purple">
      <el-row type="flex" justify="center">
        <el-col :span="8">
          <div>
            <h1>State Manager</h1>
          </div>
        </el-col>

        <el-col :span="8" class="nav">
          <div>
            <router-link to="/" class="nav-item">Sign Up</router-link>
            <router-link to="/dashboard" class="nav-item">Dashboard</router-link>
          </div>
        </el-col>
      </el-row>
    </header>

    <el-row>
      <el-col :span="12" :offset="6">
        <div class="grid-content">
          <router-view />
        </div>
      </el-col>
    </el-row>

    <footer class="bg-purple">
      <el-row type="flex" justify="center">
        <el-col :span="16">Copyright@</el-col>
      </el-row>
    </footer>
  </div>
</template>

<style>
.bg-purple {
  background: #d3dce6;
}

.nav {
  line-height: 97px;
  text-align: right;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: 97px;
  text-align: right;
}

.nav-item {
  padding-right: 10px;
  text-decoration: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
