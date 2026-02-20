export function createSlug(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD") // elimina acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\+/g, "plus")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}