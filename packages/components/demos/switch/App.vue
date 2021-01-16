<template>
    <div class="box" style="padding-top: 3px;">
        <v-switch v-model="checked" />
        <p>checked: {{checked}}</p>
        <v-switch
            :disabled="true"
            v-model="checked"
            bg-color="red"
        ></v-switch>
        <p>按钮禁用</p>
        <button
            v-debounce:click="show"
        >click</button>
    </div>
</template>

<script>
import VSwitch from '@vui/components/src/switch'
export default {
    data() {
        return {
            checked: false
        }
    },
    methods: {
        show() {
            console.log(this.checked)
        }
    },
    components: {
        VSwitch
    }
}
</script>