<template>
  <div class="row">
    <v-spacer />
    <v-form
      class="col-4 mt-3"
      col-6
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
    </v-form>
    <v-spacer />
  </div>
</template>
