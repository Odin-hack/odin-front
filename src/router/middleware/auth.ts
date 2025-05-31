import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

export const authMiddleware = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authStore = useAuthStore()
  
  console.log('middleware', {
    isAuthenticated: authStore.isAuthenticated,
    to: to.fullPath,
    from: from.fullPath
  })
  
  if (to.matched.some(record => record.meta.requiresAuth) && !authStore.isAuthenticated) {
    next({ name: 'Login' })
    return
  }

  if (to.name === 'Login' && authStore.isAuthenticated) {
    next({ name: 'Companies' })
    return
  }

  next()
} 