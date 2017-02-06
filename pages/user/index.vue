<template>
  <section>
    <h1 class="title">
      user title {{name}} - {{counterA}} - {{counterB}}
    </h1>
    <nuxt-link class="button" to="/">
      home
    </nuxt-link>
    <my-test/>
    <h1>{{ 'My nice title' | translate }}</h1>
    <p>{{ $t('content', {'type': 'nice'}) }}
    <select v-model="lang" @change="chgLang()">
      <option v-for="lang in langs" :value="lang">{{lang}}</option>
    </select>
  </section>
</template>

<script>
import MyTest from '../../components/Test'
import { mapState } from 'vuex'

export default {
  layout: 'dark',
  data ({ req }) {
    return {
      name: 'test',
      lang: ''
    }
  },
  methods: {
    chgLang () {
      this.$i18n.set(this.lang)
    }
  },
  components: {
    'my-test': MyTest
  },
  computed: mapState({
    langs: state => state.langs,
    counterA: state => state.a.counter,
    counterB: state => state.b.counter
  }),
  mounted () {
    this.lang = this.$i18n.locale()
  }
}
</script>