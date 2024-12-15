export const authConfig = {
    pages: {
        signIn: '/login'
    },
    callbacks: {
        authorized({ auth, request }) {
            const isLoggedIn = !!auth?.user;
        }
    },
    providers: []
}