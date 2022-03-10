<template>
  <div class="book-previewer">
    <v-container>
      <v-card elevation="0" class=" pa-2 my-4 text-center card-main__rounded" outlined>
        <v-tabs
          :vertical="!$vuetify.breakpoint.smAndDown"
          center-active
          show-arrows
        >
          <!-- Book labels -->
          <v-tab
            class="justify-start tab-name__max-size"
            :key="item.NAME"
            v-for="(item, index) in BOOK"
          >
            <v-icon left>
              mdi-numeric-{{ index+1 }}-box
            </v-icon>
            {{ maxLengthString(item.NAME) }}
          </v-tab>

          <!-- Book details -->
          <v-tab-item :key="item.NAME" v-for="item in BOOK">
            <v-card flat>
              <v-row class="d-flex" no-gutters>
                <v-col cols="auto" v-if="!$vuetify.breakpoint.smAndDown">
                  <v-img
                    class="mt-5"
                    max-width="100px"
                    :lazy-src="item.IMAGE_LOCATION"
                    :src="item.IMAGE_LOCATION"
                  />
                  </v-col>
                  <v-col class="justify-center">
                    <div class="d-flex justify-center" v-if="$vuetify.breakpoint.smAndDown">
                      <v-img
                        class="mt-5"
                        max-width="100px"
                        :lazy-src="item.IMAGE_LOCATION"
                        :src="item.IMAGE_LOCATION"
                      />
                    </div>
                    <h2 :class="isSmallScreenTitle" class="mt-5">{{ item.NAME }}</h2>
                    <v-card-text
                      class="py-3 paragraph-custom"
                      :key="paragraph.ID"
                      v-for="paragraph in item.RESUME"
                    >
                      {{ paragraph.PARAGRAPH }}
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
    </v-container>
  </div>
</template>

<script>
import { BOOK } from '@/data/books/recommendedBooks';
import maxLengthString from '@/helpers/general/string';

export default {
  name: 'BookPreviewer',
  created() {
    this.BOOK = BOOK;
  },
  computed: {
    isSmallScreenTitle() {
      return this.$vuetify.breakpoint.smAndDown
        ? 'text-center'
        : 'ml-4';
    },
  },
  methods: {
    maxLengthString,
  },
};
</script>

<style lang="scss" scoped>
.book-previewer {
  .v-image {
    border-radius: 8px;
  }

  .paragraph-custom {
    text-indent: 50px;
  }

  .tab-name__max-size {
    max-width: 300px;
  }

  .card-main__rounded {
    border-radius: $border-radius;
  }
}
</style>
