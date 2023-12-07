'use client';
import { useEffect, useState } from 'react';
import { styles } from './utils/syles';
import jsPDF from 'jspdf';
import { useRouter, useSearchParams } from 'next/navigation';

const ReportTemplate = () => {
  const [hidden, setHidden] = useState(true);
  const [info, setInfo] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function downloadPdf() {
      const parmInfo = searchParams.get('info');
      if (hidden && parmInfo) {
        const newInfo = JSON.parse(parmInfo);
        await setInfo(newInfo);
        await setHidden(false);
        router.push('/');
      }
    }
    downloadPdf();
  }, [router, hidden, searchParams])

  useEffect(() => {
    if (!hidden) {
      const doc = new jsPDF({
        format: 'a4',
        unit: 'px',
      });
  
      const pdf = document.getElementById("pdf");
  
      if (pdf) {
        doc.setFont('Inter-Regular', 'normal');
        doc.html(pdf, {
          async callback(doc) {
            await doc.save('document');
          },
        });
      }
    }
  }, [hidden]);
	
	return (
		<>
			<div hidden={hidden} id="pdf" style={styles.page}>
        <p>{info[0]}</p>
			</div>
		</>
	);
};

export default ReportTemplate;
