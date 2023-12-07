'use client';
import { useEffect, useState } from 'react';
import { styles } from './utils/syles';
import jsPDF from 'jspdf';
import { useRouter, useSearchParams } from 'next/navigation';

const ReportTemplate = () => {
  const [hidden, setHidden] = useState(true);
  const [_info, setInfo] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function downloadPdf() {
      const parmInfo = searchParams.get('info');
      if (hidden && parmInfo) {
        const newInfo = JSON.parse(parmInfo);
        await setInfo(newInfo);
        await setHidden(false);
        // router.push('/');
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
			<div hidden={hidden} id="pdf" className="flex flex-col items-center justify-center m-2 w-[50%] border">
        <div className="flex items-center justify-center">
          <h1 className="text-sm">CONTRATO DE LOCAÇÃO DE VEÍCULO N. 2023/101</h1>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p>
            FLEX MOTOS, pessoa juridica de direito privado, inscrita no CNPJ nº 47.463.143/0001- 01, estabelecida na rua Eduardo Magalhães, nº 200, Bairro Centro, no municipio de São João del Rei/MG, CEP 36307-340, neste ato representado por seu sócio- administrador, nos termos do contrato social da, doravante designado LOCADORA; e,
          </p>
          <p>
            Rafael Oliveira Santos, brasileiro, solteiro, representante comercial, CPF 101.565.766- 43, RG MG16292265, residente e domiciliado à Rua BN, nº 120 B, Bairro Bomfim, CEP 36307-476 São João Del Rei/MG, telefone com WhatsApp п.(32) 99934-9993 e e-mail doravante designado LOCATÁRIO.
          </p>
          <p>
            As PARTES têm entre si, justo e contratado, o presente contrato de locação de veículo, ficando desde já pactuado o aceite dos termos e condições descritos abaixo, nos moldes do artigo 104 e 425 do código civil brasileiro.
          </p>
          <h3>Cláusula primeira - DO OBJETO</h3>
          <p>
            1.1 O objeto do presente contrato consiste na locação do veículo Honda/CG 160 FAN, fabricado no ano de 2023, chassi 9C2KC2200PR600670, cor PRETA, placa SIS1136, categoria PARTICULAR avaliado no valor de mercado, aproximadamente, em R$24.500,00 devidamente registrado e licenciado no município de São João del Rei, em nome da LOCADOR.
          </p>
          <p>
            1.2- Acompanha o presente instrumento contratual, um laudo completo de vistoria do automóvel, com a descrição do seu estado de conservação datado do dia em que foi entregue ao LOCATÁRIO. O presente laudo deverá estar assinado, também, pelo LOCATÁRIO, a fim de garantir que o mesmo tenha ciência das condições do automóvel quando da entrega.
          </p>
          <p>
            1.3- LOCATÁRIO permanecerá na posse do objeto presente por 7 (sete) dias.
          </p>
          <p>
            1.4-Somente o LOCATÁRIO poderá conduzir a motocicleta.
          </p>
          <h3>Cláusula segunda- DO VALOR E DAS CONDIÇÕES DE PAGAMENTO</h3>
          <p>
            2.1 O valor do aluguel do veículo, calculado com base no valor de mercado e de acordo com o livre ajusto entre as partes, é de R$ 470,00 (Quatrocentos e setenta reais)
          </p>
        </div>
			</div>
		</>
	);
};

export default ReportTemplate;
