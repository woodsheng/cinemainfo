<template>
    <div class="jz-loading">加载中 . . .</div>
</template>

<script>
export default {
    name: "Loading"
}
</script>

<style scoped>
    .jz-loading{
        color: blue;
        font-weight: bold;
        position: absolute;
        top: 50%;
        transform: translateY(100px);
    }
</style>
