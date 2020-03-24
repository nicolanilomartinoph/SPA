<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">REGISTER</div>

          <div class="card-body">
            <form @submit.prevent="submitForm">
              <!-- *********************** USERNAME *********************** -->
              <div class="form-group row">
                <label class="col-md-4 col-form-label text-md-right" for="username">Username</label>

                <div class="col-md-6">
                  <input
                    v-model="$v.form.username.$model"
                    id="username"
                    type="text"
                    class="form-control"
                    :class="{
                      'is-invalid': $v.form.username.$error, //$v.form.username.$dirty && $v.form.username.$invalid,
                      'is-valid': !$v.form.username.$invalid
                    }"
                    name="username"
                    value
                    required
                    autocomplete="username"
                    autofocus
                  />
                  <div>
                    <ul
                      class="list-group-item list-group-item-warning"
                      v-if="$v.form.username.$dirty && $v.form.username.$invalid"
                    >
                      <li v-if="!$v.form.username.required">Username is required.</li>
                      <li
                        v-if="!$v.form.username.minLength"
                      >Username must be minimum of 4 characters.</li>
                      <li
                        v-if="!$v.form.username.alphaNum"
                      >Username must be alphanumeric. Symbols are not allowed (e.g. space,!,%,$,#,[,],{,}, etc.)</li>
                      <li v-if="!$v.form.username.maxLength">Username cannot exceed 255 characters.</li>
                      <li
                        v-if="$v.form.username.$invalid && $v.form.username.$pending"
                      >Checking availability...</li>
                      <li v-if="!$v.form.username.isUnique">This username is already taken.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- *********************** FULLNAME *********************** -->
              <div class="form-group row">
                <label for="fullname" class="col-md-4 col-form-label text-md-right">Fullname</label>

                <div class="col-md-6">
                  <input
                    v-model="$v.form.fullname.$model"
                    id="fullname"
                    type="text"
                    class="form-control"
                    :class="{
                      'is-invalid': $v.form.fullname.$error,
                      'is-valid': !$v.form.fullname.$invalid
                    }"
                    name="fullname"
                    value
                    required
                    autocomplete="fullname"
                    autofocus
                  />
                  <div>
                    <ul
                      class="list-group-item list-group-item-warning"
                      v-if="$v.form.fullname.$dirty && $v.form.fullname.$invalid"
                    >
                      <li v-if="!$v.form.fullname.required">fullname is required.</li>
                      <li
                        v-if="!$v.form.fullname.minLength"
                      >fullname must be minimum of 4 characters.</li>
                      <li
                        v-if="!$v.form.fullname.alphaNum"
                      >fullname must be alphanumeric. Symbols are not allowed (e.g. space,!,%,$,#,[,],{,}, etc.)</li>
                      <li v-if="!$v.form.fullname.maxLength">fullname cannot exceed 255 characters.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- *********************** EMAIL *********************** -->
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                <div class="col-md-6">
                  <input
                    v-model="$v.form.email.$model"
                    id="email"
                    type="email"
                    class="form-control"
                    :class="{
                      'is-invalid': $v.form.email.$error,
                      'is-valid': !$v.form.email.$invalid
                    }"
                    name="email"
                    value
                    required
                    autocomplete="email"
                  />
                  <div>
                    <ul
                      class="list-group-item list-group-item-warning"
                      v-if="$v.form.email.$dirty && $v.form.email.$invalid"
                    >
                      <li v-if="!$v.form.email.required">Email is required.</li>
                      <li v-if="!$v.form.email.minLength">Email must be minimum of 4 characters.</li>
                      <li v-if="!$v.form.email.email">Email must be a valid e-mail format.</li>
                      <li v-if="!$v.form.email.maxLength">Email cannot exceed 255 characters.</li>
                      <li v-if="!$v.form.email.isUnique">This email is already registered.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- *********************** PASSWORD *********************** -->
              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    v-model="$v.form.password.$model"
                    id="password"
                    type="password"
                    class="form-control"
                    :class="{
                      'is-invalid': $v.form.password.$error,
                      'is-valid': !$v.form.password.$invalid
                    }"
                    name="password"
                    required
                    autocomplete="new-password"
                  />
                  <div>
                    <ul
                      class="list-group-item list-group-item-warning"
                      v-if="$v.form.password.$dirty && $v.form.password.$invalid"
                    >
                      <li v-if="!$v.form.password.required">Password is required.</li>
                      <li
                        v-if="!$v.form.password.minLength"
                      >Password must be minimum of 8 characters.</li>
                      <li v-if="!$v.form.password.maxLength">Password cannot exceed 255 characters.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- *********************** CONFIRM PASSWORD  *********************** -->
              <div class="form-group row">
                <label
                  for="password-confirm"
                  class="col-md-4 col-form-label text-md-right"
                >Confirm Password</label>

                <div class="col-md-6">
                  <input
                    v-model="$v.form.confirm_password.$model"
                    id="password-confirm"
                    type="password"
                    class="form-control"
                    :class="{
                      'is-invalid': $v.form.confirm_password.$error,
                      'is-valid': !$v.form.confirm_password.$invalid
                    }"
                    name="confirm_password"
                    required
                    autocomplete="new-password"
                  />
                  <div>
                    <ul
                      class="list-group-item list-group-item-warning"
                      v-if="$v.form.confirm_password.$dirty && $v.form.confirm_password.$invalid"
                    >
                      <li v-if="!$v.form.confirm_password.sameAs">Password does not match.</li>
                      <li
                        v-if="!$v.form.confirm_password.required"
                      >Password confirmation is required.</li>
                      <li
                        v-if="!$v.form.confirm_password.minLength"
                      >Password must be minimum of 8 characters.</li>
                      <li
                        v-if="!$v.form.confirm_password.maxLength"
                      >Password cannot exceed 255 characters.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button
                    :disabled="$v.form.$invalid"
                    type="submit"
                    class="btn btn-primary"
                  >Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import _ from "lodash";
import {
  required,
  minLength,
  maxLength,
  alphaNum,
  email,
  sameAs
} from "vuelidate/lib/validators";

export default {
  data: function() {
    return {
      form: {
        username: "",
        fullname: "",
        email: "",
        password: "",
        confirm_password: ""
      }
    };
  },
  methods: {
    submitForm: function() {
      const register = axios.post("/api/register", {
        username: this.form.username,
        fullname: this.form.fullname,
        email: this.form.email,
        password: this.form.password,
        password_confirmation: this.form.confirm_password
      });

      register
        .then(response => {
          this.$router.push("/dashboard");
        })
        .catch(error => {
          console.log("in error submit FORM");
          this.$router.push("/register");
        });
    },
    isUnique: _.throttle((value, key, resolve, reject) => {
      axios
        .get("api/isUnique", {
          params: {
            [`${key}`]: value
          }
        })
        .then(response => {
          if (response.data) {
            console.log(`${value} is unique.`);
            resolve(true);
          } else {
            console.log(`${value} is not unique.`);
            resolve(false);
          }
        })
        .catch(error => {
          console.log("Error in checking uniqueness");
          reject(false);
        });
    }, 1500)
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(4),
        alphaNum,
        maxLength: maxLength(255),
        isUnique(value) {
          const req = this.$v.form.username.required;
          const min = this.$v.form.username.minLength;
          const max = this.$v.form.username.maxLength;
          const alphaNum = this.$v.form.username.alphaNum;

          if (req && min && max && alphaNum) {
            return new Promise((resolve, reject) => {
              this.isUnique(value, "username", resolve, reject);
            });
          } else {
            return true;
          }
        }
      },
      fullname: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255)
      },
      email: {
        required,
        email,
        minLength: minLength(4),
        maxLength: maxLength(255),
        isUnique(value) {
          const req = this.$v.form.email.required;
          const min = this.$v.form.email.minLength;
          const max = this.$v.form.email.maxLength;
          const email = this.$v.form.email.email;

          if (req && min && max && email) {
            return new Promise((resolve, reject) => {
              this.isUnique(value, "email", resolve, reject);
            });
          } else {
            return false;
          }
        },
        maxLength: maxLength(255)
      },
      password: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(255)
      },
      confirm_password: {
        required,
        sameAs: sameAs("password"),
        minLength: minLength(8),
        maxLength: maxLength(255)
      }
    }
  }
};
</script>
