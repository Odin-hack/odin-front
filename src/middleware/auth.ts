import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export const authMiddleware = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const userData = localStorage.getItem('user')
  const isAuthenticated = !!userData
  
  console.log('Auth middleware:', {
    isAuthenticated,
    to: to.path,
    from: from.path,
    userData
  })
  
  if (!isAuthenticated && to.path !== '/auth') {
    next('/auth')
  } else if (isAuthenticated && to.path === '/auth') {
    next('/campaigns')
  } else {
    next()
  }
} 