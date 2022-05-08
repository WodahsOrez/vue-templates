import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { INDEX_VIEW_NAME, INDEX_VIEW_PATH } from './name';
import IndexView from '@pages/index-view/index-view.vue';

const routes: RouteRecordRaw[] = [{ path: INDEX_VIEW_PATH, component: IndexView, name: INDEX_VIEW_NAME }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export * from './name';
