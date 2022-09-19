<template>
  <SearchCommand/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchCommand from '@/components/search/SearchCommand.vue' // @ is an alias to /src

export default defineComponent({
  name: 'SearchView',
  components: {
    SearchCommand
  }
})
</script>
