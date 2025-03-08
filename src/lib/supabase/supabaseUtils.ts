import { supabase } from './supabase';

// Authentication functions
export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

// Database functions
export const fetchData = async (table: string, query = {}) => {
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .match(query);
  return { data, error };
};

export const insertData = async (table: string, data: any) => {
  const { data: result, error } = await supabase
    .from(table)
    .insert(data)
    .select();
  return { data: result, error };
};

export const updateData = async (table: string, id: string, data: any) => {
  const { data: result, error } = await supabase
    .from(table)
    .update(data)
    .eq('id', id)
    .select();
  return { data: result, error };
};

export const deleteData = async (table: string, id: string) => {
  const { error } = await supabase
    .from(table)
    .delete()
    .eq('id', id);
  return { error };
};

// Storage functions
export const uploadFile = async (bucket: string, path: string, file: File) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file);
  return { data, error };
};

export const downloadFile = async (bucket: string, path: string) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .download(path);
  return { data, error };
};

export const deleteFile = async (bucket: string, path: string) => {
  const { error } = await supabase.storage
    .from(bucket)
    .remove([path]);
  return { error };
}; 