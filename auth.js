import { supabase } from "./supabase.js";

export async function registerUser(email, password) {
    return await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${window.location.origin}/verify.html`
        }
    });
}

export async function loginUser(email, password) {
    return await supabase.auth.signInWithPassword({
        email,
        password
    });
}

export async function logoutUser() {
    return await supabase.auth.signOut();
}

export async function getUser() {
    const { data } = await supabase.auth.getUser();
    return data?.user || null;
}