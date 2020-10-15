<template>
  <div id="app">
    <div class="container">
      <h1 class="title">
        Simon The Game
      </h1>
      <div class="game">
        <field-component />
        <settings-component ref="settings"/>
      </div>
    </div>
  </div>
</template>

<script>
import FieldComponent from './components/field-component'
import SettingsComponent from './components/settings-component'

export default {
  name: 'App',
  components: {
    SettingsComponent,
    FieldComponent
  }
}
</script>

<style lang="sass">
  @import 'styles/main'
</style>
