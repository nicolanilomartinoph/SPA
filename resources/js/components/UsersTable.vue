<template>
  <div class="col-12 bg-danger">
    <h1 class="col-12 text-center">USERS</h1>
    <div class="col-12">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Fullname</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <User />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import User from "./User";

export default {
  components: { User },
  created() {
    axios.get("api/userList");
  }
};
</script>