'use client';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  const handleGeneratePdf = () => {
		router.push(`/pdfgenerate/?info=${JSON.stringify(['info'])}`);
	};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleGeneratePdf} className="bg-blue-500 text-white p-1">
        Download
      </button>
    </main>
  )
}

export default Home;
