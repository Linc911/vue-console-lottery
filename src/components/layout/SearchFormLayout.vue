<template lang="html">
  <div>
    <slot></slot>

    <div style="display: inline-block">
      <SearchIcon @click.native="$emit('on-search')" />
      <SearchReset @click.native="$emit('on-reset')" />
    </div>
  </div>
</template>

<script>
import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'

export default {
  name: 'SearchFormLayout',
  components: {
    SearchIcon,
    SearchReset
  }
}
</script>
