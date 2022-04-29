<template>
  <div class="container" :class="isCardDark">
    <form>
      <label>Name</label>
      <input
        type="text"
        v-model="name"
        name="name"
        placeholder="Your Name"
      >
      <label>Email</label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Your Email"
      >
      <label>Message <span style="color:#f15b5b">*</span></label>
      <textarea
        name="message"
        v-model="message"
        cols="30" rows="5"
        placeholder="Message"
        aria-required="true"
      >
          </textarea>

      <input class="submit" type="submit.prevent" @click="sendEmail" value="Send">
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  computed: {
    isCardDark() {
      return this.$vuetify.theme.dark ? 'form__dark' : 'form__light';
    },
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    sendEmail() {
      const fromName = this.name === '' ? 'User Anonymous' : this.name;
      const userEmail = this.email === '' ? 'Email is not defined' : this.email;
      const date = new Date().toLocaleString();
      if (this.message === '') {
        alert('Write the message to send.');
        return;
      }
      emailjs.send('service_vertocode', 'template_62qx10b', {
        toName: 'Everton',
        fromName,
        userEmail,
        message: this.message,
        date,
      }, 'AlZVLc15ewgXt3K3p')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
          console.log('FAILED...', error);
        });
      // Reset form field
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  margin: 3rem auto;
  border-radius: 12px !important;
  height: max-content;

  &__dark:hover {
    background-color: $color-dark-hover-transparent !important;
  }

  &__dark {
    background-color: $color-dark-transparent !important;
    box-shadow: 1px 10px 5px rgba(105, 95, 95, 0.55);
  }

  &__light:hover {
    background-color: $color-light-hover-transparent !important;
  }

  &__light {
    box-shadow: 1px 10px 5px rgba(0, 0, 0, 0.55);
    background-color: $color-light-transparent !important;
  }
}
* {box-sizing: border-box;}

.container {
  padding: 30px;
  margin: 2em auto;
  text-align: center;
  border-radius: 12px;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input.submit {
  text-align: center;
  background-color: #4CAF50;
  margin: 1em 0em;
  color: white;
  font-size: 1em;
  padding: 12px 0px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #000000;
}
</style>
