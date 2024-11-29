export default [
    {
        path: "/counter",
        name: "counter",
        component: () => import("./demo0/DemoCounter.vue"),
    },
    {
        path: "/counter1",
        name: "counter1",
        component: () => import("./demo1/DemoCounter.vue"),
    },
];