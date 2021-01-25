<template>
    <div class="box" style="padding-top: 3px;">
        <vui-switch v-model="checked" />
        <p>checked: {{checked}}</p>
        <vui-switch
            :disabled="true"
            v-model="checked"
            bg-color="red"
        ></vui-switch>
    </div>
</template>

<script>

export default {
    data() {
        return {
            checked: false,
            Switch
        }
    }
}
</script>