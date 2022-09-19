<template>
  <h1>Команды сервера</h1>
  <SearchCommandInput v-model:prop-command="command" @searchRequest="searchRequest"/>
  <SearchCommandInputTags v-model:propTags="tags"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchCommandInputTags from '@/components/search/SearchCommandInputTags.vue'
import SearchCommandInput from '@/components/search/SearchCommandInput.vue'

export default defineComponent({
  name: 'SearchCommand',
  data () {
    return {
      tags: new Set<string>(),
      command: new Array<string>()
    }
  },
  components: {
    SearchCommandInput,
    SearchCommandInputTags
  },
  methods: {
    searchRequest () {
      console.log(this.$options.name)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
