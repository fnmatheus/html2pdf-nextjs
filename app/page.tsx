'use client';
import createPdf from './utils/pdf';

const Home = () => {
  const handleGeneratePdf = () => {
    createPdf();
	};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleGeneratePdf} className="bg-blue-500 text-white p-1">
        Abrir
      </button>
    </main>
  )
}

export default Home;
