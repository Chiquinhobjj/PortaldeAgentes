import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Agents Portal - Portal de Agentes de IA',
  description: 'O maior portal de agentes de IA para empresas. Monte seu time de funcionários de IA.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-navy-dark text-white">
        {children}
      </body>
    </html>
  );
}
