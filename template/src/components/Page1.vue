<template>
<div class="PAGE1">
  {{componentName}}
</div>
</template>
<!-- ******************************************************************* -->
<script>
import {
  mapGetters
} from 'vuex'

export default {
  name: 'PAGE1',
  data() {
    return {
      componentName: 'PAGE1'
    }
  },
  props: [],
  methods: {
    add_stuff() {
      this.$store.dispatch('addStuff', Math.floor(Math.random() * 100))
    }
  },
  computed: {
    ...mapGetters([])
  },
  beforeCreate() {
    // Called synchronously after the instance has just been initialized, before data observation and event/watcher setup.;
  },
  created() {
    // Called synchronously after the instance is created. At this stage, the instance has finished processing the options which means the following have been set up: data observation, computed properties, methods, watch/event callbacks. However, the mounting phase has not been started, and the $el property will not be available yet.
  },
  beforeMounted() {
    // Called right before the mounting begins: the render function is about to be called for the first time.
  },
  mounted() {
    // Called after the instance has just been mounted where el is replaced by the newly created vm.$el. If the root instance is mounted to an in-document element, vm.$el will also be in-document when mounted is called.
    this.$nextTick(() => {
      console.log('<PAGE1> is ready and attached to the dom', this);
    })
  },
  beforeUpdate() {
    // Called when the data changes, before the virtual DOM is re-rendered and patched. You can perform further state changes in this hook and they will not trigger additional re-renders.;
  },
  updated() {
    // Called after a data change causes the virtual DOM to be re-rendered and patched. The component’s DOM will be in updated state when this hook is called, so you can perform DOM-dependent operations in this hook. However, in most cases you should avoid changing state in this hook, because it may lead to an infinite update loop.;
  },
  deactivated() {
    // Called when a kept-alive component is activated.
  },
  activated() {
    // Called when a kept-alive component is deactivated.
  },
  beforeDestroy() {
    // Called right before a Vue instance is destroyed. At this stage the instance is still fully functional.;
  },
  destroyed() {
    // Called after a Vue instance has been destroyed. When this hook is called, all directives of the Vue instance have been unbound, all event listeners have been removed, and all child Vue instances have also been destroyed.
  }
}
</script>
<!-- ******************************************************************* -->
<style scoped>

</style>
