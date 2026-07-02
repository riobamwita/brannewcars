import { supabase } from "./supabase.js";

export async function registerUser(email, password) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error) {
        console.error(error.message);
        return { success: false, error };
    }

    return { success: true, data };
}

export async function loginUser(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        console.error(error.message);
        return { success: false, error };
    }

    return { success: true, data };
}

export async function logoutUser() {
    await supabase.auth.signOut();
}

export async function getUser() {
    const { data } = await supabase.auth.getUser();
    return data?.user;
}