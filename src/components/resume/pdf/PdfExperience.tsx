import {Text, View} from '@react-pdf/renderer';

import {type ResumeExperience} from '@/data/resume';

import {HighlightBullet} from './PdfSvgElements';
import {s} from './pdfStyles';

type PdfExperienceProps = {
  experience: ResumeExperience;
};

export const PdfExperience = ({experience}: PdfExperienceProps) => (
  <View style={s.jobEntry}>
    <View style={s.jobHeader}>
      <View>
        <View style={s.jobRoleRow}>
          <Text style={s.jobRoleText}>{experience.role}</Text>
          {experience.endDate === 'Present' && <Text style={s.currentPill}>Current</Text>}
        </View>
        <Text style={s.jobCompany}>{experience.company}</Text>
      </View>
      <Text style={s.jobDates}>
        {experience.startDate} - {experience.endDate}
      </Text>
    </View>
    <Text style={s.description}>{experience.description}</Text>
    {experience.highlights.map((h) => (
      <View key={h} style={s.highlightRow}>
        <HighlightBullet />
        <Text style={s.highlight}>{h}</Text>
      </View>
    ))}
    <View style={s.badgeRow}>
      {experience.techStack.map((tech) => (
        <Text key={tech} style={s.badge}>
          {tech}
        </Text>
      ))}
    </View>
  </View>
);
