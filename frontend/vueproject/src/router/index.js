import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '../components/WelcomePage.vue';
import ProloguePage from '../components/ProloguePage.vue';
import ConfigurationForm from '../components/ConfigurationForm.vue';
import ChapterPage from '../components/ChapterPage.vue';

const routes = [
  {
    path: '/',
    name: 'WelcomePage',
    component: ProloguePage,
  },
  {
    path: '/prologue',
    name: 'ProloguePage',
    component: ProloguePage,
  },
  {
    path: '/chapter',
    name: 'ChapterPage',
    component: ChapterPage,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
