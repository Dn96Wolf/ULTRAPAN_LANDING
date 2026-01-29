import messages from './messages/es.json';

/**
 * Tipo que representa todas las llaves disponibles en el archivo de traducciones.
 * Esto te da autocompletado y evita typos.
 */
export type TranslationKey = keyof typeof messages;

/**
 * Función de traducción básica.
 * - Recibe una key (ej. "hero.title")
 * - Devuelve el texto en español
 * - Si no existe la key, devuelve la misma key (fail visible)
 */
export function t(key: TranslationKey): string {
  return messages[key] ?? key;
}

/**
 * Exportamos también los mensajes completos por si se requieren
 * en casos especiales (SEO dinámico, loops, etc.)
 */
export const i18nMessages = messages;
