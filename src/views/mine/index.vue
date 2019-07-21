<template>
    <div id="main">
        <Header title="观影助手"></Header>
        <div id="content">
            <Login />
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import Login  from '@/components/login'
export default {
    name: "Mine",
    components: {
        Header, Footer, Login
    }
}
</script>

<style scoped>

</style>
