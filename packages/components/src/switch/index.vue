<template>
    <div
        class="switch-wrapper"
        :class="{'is-checked': value, 'is-disabled': disabled}"
    >
        <!-- 用于控制数据变化的input -->
        <input
            type="checkbox"
            :checked="value"
            :disabled="disabled"
            @change="$emit('input', !value)"
        >
        <div
            class="switch-layer"
            :style="{'background-color': bgColor}"
        ></div>
        <div class="switch-layer-bg"></div>
        <div class="switch-btn"></div>
    </div>
</template>

<script>
export default {
    name: 'v-switch',
    props: {
        value: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        // 背景色
        bgColor: {
            type: String,
            default: '#4dd865'
        }
    }
}
</script>

<style
    lang="less"
    src="./style.less"
    scoped
/>