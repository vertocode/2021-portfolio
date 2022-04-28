<template>
  <div class="row form">
    <v-spacer />
    <div class="col-6 mt-3" :class="isCardDark">
      <v-form
        ref="form"
        lazy-validation
      >
        <h1 class="text-center title mt-5">
          Contact me
        </h1>
        <v-text-field
          label="Name"
          required
        ></v-text-field>
        <v-textarea  outlined label="Message"/>
        <v-row align="center" justify="space-around" class="mb-8 mt-3">
          <v-btn
            :disabled="true"
            :loading="false"
            elevation="2"
            depressed
            color="primary"
          >Send</v-btn>
        </v-row>
        <v-alert class="warning">
          Back end is still not working! ☹ <br>
          Meanwhile it is not enabled you can contact me
          by email:
          <strong><a href="mailto:evertonvanoni1@gmail.com">
            evertonvanoni1@gmail.com</a></strong>
        </v-alert>
      </v-form>
    </div>
    <v-spacer />
  </div>
</template>

<script>
export default {
  computed: {
    isCardDark() {
      return this.$vuetify.theme.dark ? 'form__dark' : 'form__light';
    },
  },
};
</script>

<style lang="scss">
.form {
  margin: 3rem auto;
  border-radius: 12px !important;
  height: max-content;
  &__dark:hover {
    background-color: $color-dark-hover-transparent !important;
  }
  &__dark {
    background-color: $color-dark-transparent !important;
  }
  &__light:hover {
    background-color: $color-light-hover-transparent !important;
  }
  &__light {
    background-color: $color-light-transparent !important;
  }
  .warning {
    color: black;
    padding: 1em;
  }
}
</style>
