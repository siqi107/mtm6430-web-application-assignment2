<template>
  <div class="home">
    <h2>Sign Up</h2>

    <!-- form -->
    <el-form label-position="top" label-width="50px">
      <!-- name -->
      <el-form-item label="Name" type="text">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <!-- email -->
      <el-form-item label="Email">
        <el-input v-model="user.email"></el-input>
      </el-form-item>
      <!-- password -->
      <el-form-item label="Password">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <!-- button -->
      <el-form-item>
        <el-button type="primary" @click="sendUser(user)">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
.el-form {
  border: 1px solid black;
  border-radius: 20px;
  margin-bottom: 30px;
  padding: 30px;
}
</style>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null
      }
    };
  },

  // computed: {
  //   ...mapState(["user"])
  // },

  methods: {
    ...mapActions(["updateUser"]),

    sendUser(user) {
      this.updateUser({
        name: this.user.name,
        email: this.user.email,
        password: this.user.password
      });
    }
  }
};
</script>