import {Defs, Image, LinearGradient, Link, Rect, Stop, Svg, Text, View} from '@react-pdf/renderer';

import norandaIllustration from '@/assets/noranda-brown-illustration.png';
import {RESUME} from '@/data/resume';
import {CONTACT_LINKS} from '@/data/resumePdf';

import {ContactBullet} from './PdfSvgElements';
import {PAGE_H, s, SIDEBAR_W} from './pdfStyles';

export const PdfSidebar = () => (
  <View style={s.sidebar}>
    <Svg style={s.sidebarBg} viewBox={`0 0 ${SIDEBAR_W} ${PAGE_H}`}>
      <Defs>
        <LinearGradient id="sidebar" x1="0%" x2="0%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#7c3aed" />
          <Stop offset="100%" stopColor="#e45a2e" />
        </LinearGradient>
      </Defs>
      <Rect fill="url(#sidebar)" height={PAGE_H} width={SIDEBAR_W} x={0} y={0} />
    </Svg>

    <View style={s.sidebarContent}>
      {/* Illustration */}
      <Image src={norandaIllustration} style={s.photo} />

      <Text style={s.sidebarName}>Noranda Brown</Text>
      <Text style={s.sidebarTitle}>Senior Frontend Engineer</Text>

      <View style={s.sidebarDivider} />

      {/* Contact */}
      <View style={{marginBottom: 8}}>
        {CONTACT_LINKS.map((link) => (
          <View key={link.label} style={s.contactItem}>
            <ContactBullet />
            <Link src={link.src} style={s.contactLink}>
              {link.label}
            </Link>
          </View>
        ))}
      </View>

      <View style={s.sidebarDivider} />

      {/* Skills */}
      <Text style={s.sidebarSectionTitle}>Skills</Text>
      {RESUME.skills.map((cat) => (
        <View key={cat.name} style={{marginBottom: 4}}>
          <Text style={s.skillCategory}>{cat.name}</Text>
          <View style={s.skillPillRow}>
            {cat.skills
              .filter((skill) => cat.highlighted?.includes(skill))
              .map((skill) => (
                <Text key={skill} style={s.skillPill}>
                  {skill}
                </Text>
              ))}
          </View>
          <Text style={s.skillText}>
            {cat.skills.filter((sk) => !cat.highlighted?.includes(sk)).join(', ')}
          </Text>
        </View>
      ))}

      <View style={s.sidebarDivider} />

      {/* Education */}
      <Text style={s.sidebarSectionTitle}>Education</Text>
      {RESUME.education.map((edu) => (
        <View key={edu.id} style={{marginBottom: 3}}>
          <Text style={s.eduSchool}>{edu.school}</Text>
          <Text style={s.eduDegree}>
            {edu.degree}
            {(edu.gpa || edu.honors) &&
              ` - ${[edu.gpa && `GPA: ${edu.gpa}`, edu.honors].filter(Boolean).join(', ')}`}
          </Text>
          <Text style={s.eduYears}>
            {edu.startYear} - {edu.endYear}
          </Text>
        </View>
      ))}

      {/* Easter egg */}
      <Text style={s.easterEgg}>v4.2.0 // Built with @react-pdf/renderer</Text>
    </View>
  </View>
);
