import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

export default function createPdf() {
  const docDefinitions = {
    defaultStyle: { font: 'Roboto' },
    content: [{ text: 'teste' }]
  };

  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  pdfMake.fonts = {
    'Roboto': {
      normal: 'Roboto-Regular.ttf',
      bold: 'Roboto-Medium.ttf',
      italics: 'Roboto-Italic.ttf',
      bolditalics: 'Roboto-Italic.ttf'
    }
  };

  pdfMake.createPdf(docDefinitions).open();
}
