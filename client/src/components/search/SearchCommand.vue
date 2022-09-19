<template>
  <h1>Команды сервера</h1>
  <SearchCommandInputTags v-model:propTags="tags"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchCommandInputTags from '@/components/search/SearchCommandInputTags.vue'

export default defineComponent({
  name: 'SearchCommand',
  data () {
    return {
      tags: new Set<string>(),
      command: String()
    }
  },
  components: {
    SearchCommandInputTags
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
