<template>
  <section>
    <navbar />
    <div class="card">
      <form id="form" class="form" @submit="submitForm">
        <p class="heading">Enter the Numbers</p>
        <p>
          <input
            type="number"
            name="name"
            id="name"
            placeholder="First Number"
            required
            v-model="form.firstNumber"
          />
        </p>
        <p>
          <input
            type="number"
            name="name"
            id="name"
            placeholder="Second Number"
            required
            v-model="form.secondNumber"
          />
        </p>
        <p>
          <input type="submit" value="Sum" />
        </p>
      </form>
      <hr />
      <div class="results">
        <p class="heading">Results</p>
        <p>
          <input
            type="number"
            name="name"
            id="name"
            placeholder="Result"
            readonly
            :value="sumResult"
          />
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import navbar from "../components/navbar.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { navbar },
  data() {
    return {
      form: {
        firstNumber: null,
        secondNumber: null,
      },
    };
  },
  computed: {
    ...mapGetters({
      sumResult: "getSumResult",
    }),
  },
  methods: {
    ...mapActions({
      calculateSum: "calculateSum",
    }),
    submitForm(e) {
      e.preventDefault();
      this.calculateSum(this.form);
    },
  },
};
</script>

<style scoped>
.card {
  width: 40%;
  height: 60vh;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 2px 6px 10px #00000029;
  border: 0.5px solid #a4a4a4;
  border-radius: 4px;
  opacity: 1;
  margin: auto;
  margin-top: 10vh;
}
.form {
  padding: 4vh 5vw;
  margin-bottom: 5vh;
  text-align: center;
}
.heading {
  font: normal normal normal 16px/16px Varela Round;
  letter-spacing: 0px;
  color: #a4a4a4;
  opacity: 1;
}
input {
  width: 227px;
  height: 36px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #a4a4a4;
  border-radius: 2px;
  opacity: 1;
  padding: 4px;
  margin-top: 2vh;
}
input[type="submit"] {
  background: #c10708 0% 0% no-repeat padding-box;
  text-align: center;
  font: normal normal normal 16px/18px Varela Round;
  letter-spacing: 0.16px;
  color: #ffffff;
}

hr {
  width: 50%;
  margin: auto;
  border-top: 1px solid #c10708;
}
.results {
  padding: 5vh 5vw;
  text-align: center;
}

@media screen and (max-width: 820px) {
  .card {
    width: 80%;
    height: 60vh;
  }
}
@media screen and (max-width: 380px) {
  input {
    width: 90%;
  }
}
</style>