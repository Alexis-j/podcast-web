// utils/getImageUrl.js
import { supabase } from '../config/Supabase';

export const getImageUrl = (filename) => {
  const cleanFilename = filename.trim(); // elimina espacios, saltos de línea, etc.
  const path = `${cleanFilename}`;
  const { data } = supabase.storage.from('integrantes').getPublicUrl(path);
  console.log("📸 URL Final:", data?.publicUrl); // para verificar
  return data?.publicUrl || '';
};
