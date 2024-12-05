import { createApp } from "vue";
import { createPinia } from "pinia";
import { getToken, removeToken } from "@/services/token-manager";
import { useAuthStore } from "@/stores";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
const token = getToken()
if (token) {
    try {
        const authStore = useAuthStore()
        await authStore.getMe()
        await router.push('/')
    } catch (e) {
        removeToken()
        console.log(e)
    }
}
