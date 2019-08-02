<template>
  <div class="about">
    <h2>Dashboard</h2>

    <!-- form -->
    <el-form label-position="top" label-width="50px">
      <h2>Welcome {{ User1 }}!</h2>
      <p>Your sign up email is {{ Email1 }}</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <!-- button -->
      <el-form-item>
        <el-button type="primary" @click="sendUser(user)">Clear Data</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
h2,
p {
  text-align: center;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getName"]),
    ...mapGetters(["getEmail"]),

    User1: function() {
      return this.getName;
    },

    Email1: function() {
      return this.getEmail;
    }
  }
};
</script>
