<template>
  <input
    type="text"
    placeholder="Теги (через пробел)"
    v-model="tagsInput"
    @keypress.enter="parseTags"
  />
  <button @click="parseTags">Применить теги</button>
  <ul>
    <li v-for="tag in tags" :key="tag">
      <p>{{ tag }}</p>
      <button @click="removeTag(tag)">
        <img src="/icons/vue/command/no.png" alt="Удалить"/>
      </button>
    </li>
  </ul>
  <button @click="removeAllTags">Удалить теги</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'SearchCommandInputTags',
  props: {
    propTags: {
      type: Set as PropType<Set<string>>,
      required: true
    }
  },
  emits: ['update:propTags'],
  data () {
    return {
      tagsInput: String(),
      tags: new Set<string>()
    }
  },
  methods: {
    /**
     * Разбивает строку разделителем Пробел. Преобразует каждый тег в нижний регистр. Делает Emit
     */
    parseTags () {
      (this.tagsInput.match(/\S+/g) || []).forEach(tag => this.tags.add(tag.toLowerCase()))
      this.$emit('update:propTags', this.tags)
    },
    removeAllTags () {
      this.tags.clear()
    },
    removeTag (tag: string) {
      this.tags.delete(tag)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
