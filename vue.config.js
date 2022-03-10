module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @use '@/colors/variables' as *;
          @use '@/colors/global';
        `,
      },
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
};
