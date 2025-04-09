import { defineStore } from 'pinia'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'



export const useUserStore = defineStore('user', {


    state: () => ({
        user: null,
        isAuthenticated: false,
    }),
    actions: {
        setUser(user) {
            this.user = user
            this.isAuthenticated = true
        },
        logout() {
            this.user = null
            this.isAuthenticated = false
            signOut(getAuth());
        },
        async login() {
            const result = await signInWithPopup(getAuth(), new GoogleAuthProvider())
            if(result){
                this.user = result.user;
                this.isAuthenticated = true
            }
        }
    },
    getters: {
        getUser() {
            return this.user
        },
        isLoggedIn() {
            return this.isAuthenticated
        },
    },
});