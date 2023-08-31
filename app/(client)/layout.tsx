export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="text-center py-5 text-xl font-bold bg-lime-600">
        Client Header
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
      <footer className="text-center py-5 text-xl font-bold bg-lime-600">
        Client Footer
      </footer>
    </>
  );
}
