<template>
  <div class="register">
    <div class="logo-wrap">
      <div class="logo-bg"></div>
      <img class="logo-img" src="@/assets/graphics/logo.svg" alt />
    </div>
    <h1 class="title">{{ bigText }}</h1>
    <p class="text">{{ smallText }}</p>
    <div class="form">
      <label for="name" class="label text">Namn</label>
      <input type="text" class="input input-name" v-model="name" />
      <label for="epost" class="label-epost text">Epost</label>
      <input type="text" class="input input-epost" v-model="epost" />

      <div class="checkbox-wrap">
        <div class="ckeckbox">
          <input
            id="checkbox1"
            name="checkbox"
            type="checkbox"
            value="value"
            v-on:click="addConsent"
          />
          <label for="checkbox1" class="gdpr-text text"></label>
        </div>
        <p class="text" v-on:click="addConsent">GDPR Ok!</p>
      </div>

      <button class="button button-black" v-on:click="submit">
        Brew me a cup!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    bigText: "Vällkommen till AirBean-familjen!",
    smallText:
      "Genom att skapa ett konto nedan kan du spara och se din orderhistorik.",
    name: "",
    epost: "",
    consent: false
  }),
  methods: {
    async submit() {
      if (this.name !== "" && this.epost !== "" && this.consent == true) {
        let user = {
          name: this.name,
          epost: this.epost
        };
        await this.$store.dispatch("submitForm", user);
        this.$router.go();
      }
    },
    addConsent() {
      if (this.consent == true) {
        this.consent == false;
      } else {
        this.consent = true;
      }
    }
  },
  computed: {
    order() {
      return this.$store.state.order;
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main";
.register {
  position: absolute;
  width: 90%;
  height: 85%;
  background: $pink;
  bottom: 20px;
  text-align: center;
  border-radius: 5px;
  padding: 0 20px;
  .title {
    line-height: 1.3;
    font-size: 30px;
  }
  .text {
    margin: 10px 0;
  }
  .logo-wrap {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 40px 0 12px;
    .logo-bg {
      position: absolute;
      width: 30px;
      height: 30px;
      background: $lightbrown;
      opacity: 0.2;
      border-radius: 50%;
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    label {
      margin: 0;
      margin-top: 15px;
      font-size: 12px;
    }
    .input {
      width: 100%;
      height: 42px;
      background-color: transparent;
      border: black solid 1px;
      border-radius: 7px;
      padding: 20px;
      font-size: 18px;
    }
    input[type="checkbox"] {
      appearance: none;
    }
    .checkbox-wrap {
      margin: 26px 0 0 0;
      position: relative;
      display: flex;
      align-items: center;
      label {
        margin-top: 0;
        cursor: pointer;
        position: absolute;
        width: 20px;
        height: 20px;
        left: 0px;
        border-radius: 50px;
        border: 1px solid rgb(0, 0, 0);
      }
      input[type="checkbox"]:checked + label:after {
        filter: alpha(opacity=0);
        opacity: 0;
        content: "";
        position: absolute;
        left: 2px;
        top: 2px;
        right: 2px;
        bottom: 2px;
        background: #0e927d;
        border-radius: 50px;
      }
      input[type="checkbox"]:checked + label:hover::after {
        filter: alpha(opacity=30);
        opacity: 1;
      }
      p {
        margin: 0 0 5px 32px;
      }
    }
  }
}
</style>