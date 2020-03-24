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
  created() {
    //let token = response.data.data.token;
    //console.log(token);

    axios({
      method: "get",
      url: "/api/user",
      data: {
        test: "test"
      },
      headers: {
        Authorization: "Bearer "
      }
    }).then(response => {
      console.log(response.data);
    });
  },
  methods: {
    logout: function() {
      axios.post("api/logout").then(this.$router.push("/"));
    }
  }
};
</script>
