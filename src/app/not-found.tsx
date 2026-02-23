import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
      <h1>404</h1>
      <p>La página que buscas no existe o fue movida.</p>

      <Link href="/">
        Volver al inicio
      </Link>
    </main>
  );
}
