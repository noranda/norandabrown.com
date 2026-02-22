import {Document, Page, Text, View} from '@react-pdf/renderer';

import {RESUME} from '@/data/resume';
import {PDF_META} from '@/data/resumePdf';

import {PdfExperience} from './PdfExperience';
import {PdfSidebar} from './PdfSidebar';
import {GradientBar} from './PdfSvgElements';
import {PdfTldr} from './PdfTldr';
import {s} from './pdfStyles';

export const ResumePdf = () => (
  <Document author={PDF_META.author} title={PDF_META.title}>
    <Page size="LETTER" style={s.page}>
      <PdfSidebar />

      <View style={s.main}>
        <GradientBar />
        <Text style={s.summary}>{RESUME.summary}</Text>

        <View style={s.divider} />

        <Text style={s.sectionTitle}>Experience</Text>
        {RESUME.experience.map((exp) => (
          <PdfExperience experience={exp} key={exp.id} />
        ))}

        <PdfTldr />
      </View>
    </Page>
  </Document>
);
