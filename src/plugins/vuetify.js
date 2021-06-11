import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: "#0059a7",
                blueDark: "#003c71",
                blue: "#0088ff",
                secondary: "#cee5ff",
                dark: "#2c2c2c",
                light: "#f0efef",
            },
            dark: {
                accent: "#424242",
                secondary: "#ff8f00",
                info: "#26a69a",
                warning: "#ffc107",
                error: "#dd2c00",
                success: "#00e676"
            },
        },
    },
});
