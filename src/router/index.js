import { createRouter, createWebHistory } from "vue-router";
import EditJobView from "@/views/EditJobView.vue";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFound from "@/views/NotFound.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "Jobs",
      component: JobsView,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobView,
    },
    { path: "/jobs/edit/:id", name: "EditJob", component: EditJobView },
    {
      path: "/jobs/add",
      name: "AddJob",
      component: AddJobView,
    },
  ],
});

export default router;
