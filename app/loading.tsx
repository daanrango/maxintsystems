export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0a0b0d] text-white flex items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-6 h-14 w-14 rounded-full border-4 border-[#1e2228] border-t-[#e8a820] animate-spin" />

        <h1 className="text-2xl font-bold">MAXINTSYSTEMS</h1>

        <p className="text-gray-400 mt-2">
          Cargando soluciones de seguridad...
        </p>
      </div>
    </main>
  );
}
