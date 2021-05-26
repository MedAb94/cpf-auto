<template>
    <v-app>
        <navbar/>
        <v-main>
            <router-view/>
        </v-main>
        <app-footer/>
    </v-app>
</template>
<script>
    import Navbar from './components/Navbar';
    import AppFooter from "./components/Footer";
    export default {
        name: 'App',
        components: {
            Navbar,
            AppFooter
        },
    };
</script>
<style>
    /* custom scroll bar */
    ::-webkit-scrollbar {
        width: 8px;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: #0077fb;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #0077fb;
    }

</style>