<template>
  <input
    type="text"
    placeholder="Команда или последовательность команд"
    v-model="commandInput"
    @keypress.enter="searchSubmit"
    @input="pattern"
  >
  <div v-if="!isPattern">
    <p>Разрешены только буквы английского алфавита в любом регистре и пробел</p>
  </div>
  <button @click="searchSubmit" :disabled="!isPattern">Найти</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'SearchCommandInput',
  props: {
    propCommand: {
      type: Array as PropType<Array<string>>,
      required: true
    }
  },
  emits: ['searchRequest', 'update:propCommand'],
  data () {
    return {
      commandInput: String(),
      command: new Array<string>(),
      isPattern: true
    }
  },
  methods: {
    searchSubmit () {
      this.$emit('searchRequest')
    },
    pattern () {
      if (this.commandInput.search(/^(([a-z])*(\s+|))*$/gi) !== -1) {
        this.isPattern = true
        this.command = this.commandInput.match(/[a-z]+/gi) || []
        this.$emit('update:propCommand', this.command)
      } else {
        this.isPattern = false
      }
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
