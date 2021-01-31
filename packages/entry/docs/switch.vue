<template>
    <div>
        <vui-switch
            :disabled="isDisabled"
            v-model="isChecked"
        />
        <vui-switch
            v-model="isDisabled"
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            isChecked: false,
            isDisabled: false
        }
    }
}
</script>