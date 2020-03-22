<template>
  <div>
    <div class="row">
      <div class="col-12 d-flex justify-content-between">
        <div class="col-4">DASHBOARD</div>
        <div class="offset-4 col-4 text-right" @click="logout">LOGOUT</div>
      </div>
    </div>
    <UsersTable />
  </div>
</template>

<script>
import UsersTable from "./UsersTable";

export default {
  components: {
    UsersTable
  },
  methods: {
    logout: function() {
      axios.post("api/logout").then(this.$router.push("/"));
    }
  }
  // ,created() {
  //   axios
  //     .get("api/user", {
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: "Bearer ".$accessToken
  //       }
  //     })
  //     .then(response => console.log(response.data))
  //     .catch(error => console.log(error));
  // }
};
</script>