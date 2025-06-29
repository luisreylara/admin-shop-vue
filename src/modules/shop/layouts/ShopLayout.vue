<template>
    <!-- component -->
    <!-- Create By Joker Banny -->

    <!-- Header Navbar -->
    <TopMenu />

    <RouterView />
    <!-- Footer -->
    <CustomFooter />



</template>

<script setup lang="ts">
import TopMenu from '../components/TopMenu.vue';
import CustomFooter from '../components/CustomFooter.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped></style>