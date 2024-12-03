export default [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
    meta: { layout: "AppLayoutMain" },
    children: [
      {
        path: "/:id",
        name: "TaskView",
        component: () => import("../views/TaskView.vue"),
        meta: { layout: "AppLayoutMain" },
      },
    ],
  },
];
