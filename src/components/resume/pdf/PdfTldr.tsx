import {Text, View} from '@react-pdf/renderer';

import {TLDR_ITEMS} from '@/data/resumePdf';

import {s} from './pdfStyles';

export const PdfTldr = () => (
  <View style={s.tldr}>
    <View style={s.tldrBar} />
    <View style={s.tldrContent}>
      <Text style={s.tldrTitle}>TL;DR for busy recruiters</Text>
      {TLDR_ITEMS.map((item) => (
        <View key={item} style={s.tldrRow}>
          <Text style={s.tldrBullet}>{'\u203A'}</Text>
          <Text style={s.tldrItem}>{item}</Text>
        </View>
      ))}
    </View>
  </View>
);
