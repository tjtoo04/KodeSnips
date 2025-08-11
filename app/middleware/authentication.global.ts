export default defineNuxtRouteMiddleware((to) => {
    const { status } = useAuth()

    if (to.meta.auth === false) {
        return
    }

    // Return immediately if user is already authenticated
    if (status.value === 'authenticated') {
        return
    }

    return navigateTo("/unauthenticated")
})
