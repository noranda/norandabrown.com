import {
  faBriefcase,
  faDownload,
  faGraduationCap,
  faLightbulb,
  faStar,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion';
import {useState} from 'react';

import {SectionDivider} from '@/components/common/SectionDivider';
import {ResumeSectionHeading, SkillsSection, TimelineCard} from '@/components/resume';
import {Button} from '@/components/ui/button';
import {RESUME} from '@/data/resume';
import {useDownloadResumePdf} from '@/hooks/useDownloadResumePdf';
import {fadeUp} from '@/utils/animations';

export const Resume = () => {
  const {download, downloading} = useDownloadResumePdf();
  const [showReality, setShowReality] = useState(false);

  return (
    <div
      className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_rgba(147,51,234,0.06),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.04),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,_rgba(147,51,234,0.15),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.1),_transparent_50%)]"
      data-easter-egg="📄 You found the resume - where bullet points get the designer treatment"
    >
      <div className="mx-auto max-w-3xl px-6 py-12">
        {/* Hero */}
        <motion.div
          animate="visible"
          className="mb-12 space-y-4"
          custom={0}
          initial="hidden"
          variants={fadeUp}
        >
          <h1 className="font-display text-4xl sm:text-5xl">Resume</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">{RESUME.summary}</p>

          <div className="flex flex-wrap items-center gap-3">
            <Button disabled={downloading} onClick={download} size="sm" variant="gradient">
              <FontAwesomeIcon icon={faDownload} />
              {downloading ? 'Generating...' : 'Download PDF'}
            </Button>

            <button
              aria-pressed={showReality}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-brand/30 hover:text-foreground"
              onClick={() => setShowReality(!showReality)}
              type="button"
            >
              <FontAwesomeIcon
                className={showReality ? 'text-pink-500' : ''}
                icon={faWandMagicSparkles}
              />
              {showReality ? 'Reality Mode: On' : 'Reality Mode: Off'}
            </button>
          </div>

          {showReality && (
            <div
              className="flex items-start gap-2 rounded-lg border border-brand/20 bg-brand/5 px-4 py-3 text-base text-muted-foreground"
              role="note"
            >
              <FontAwesomeIcon className="mt-0.5 shrink-0 text-brand" icon={faLightbulb} />
              <p className="italic">
                Reality Mode shows what actually happened. The professional version is technically
                accurate. This version is emotionally accurate.
              </p>
            </div>
          )}
        </motion.div>

        {/* Experience */}
        <motion.div
          animate="visible"
          className="mb-12"
          custom={1}
          initial="hidden"
          variants={fadeUp}
        >
          <ResumeSectionHeading icon={faBriefcase} title="Experience" />

          <div>
            {RESUME.experience.map((exp, i) => (
              <TimelineCard
                experience={exp}
                isFirst={i === 0}
                isLast={i === RESUME.experience.length - 1}
                key={exp.id}
                showReality={showReality}
              />
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <SectionDivider label="Skills & Tools" />
        <motion.div
          animate="visible"
          className="mb-12 mt-8"
          custom={2}
          initial="hidden"
          variants={fadeUp}
        >
          <ResumeSectionHeading icon={faStar} title="Skills" />

          <SkillsSection skills={RESUME.skills} />
        </motion.div>

        {/* Education */}
        <SectionDivider label="Education" />
        <motion.div
          animate="visible"
          className="mt-8"
          custom={3}
          initial="hidden"
          variants={fadeUp}
        >
          <ResumeSectionHeading icon={faGraduationCap} title="Education" />

          <div className="space-y-4">
            {RESUME.education.map((edu) => (
              <div
                className="rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5"
                key={edu.id}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg">{edu.school}</h3>
                    <p className="text-base text-muted-foreground">{edu.degree}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {edu.startYear} - {edu.endYear}
                  </span>
                </div>
                {showReality && edu.reality && (
                  <p className="mt-2 text-base italic text-pink-500">
                    <FontAwesomeIcon className="mr-1.5" icon={faWandMagicSparkles} />
                    {edu.reality}
                  </p>
                )}
                {(edu.gpa || edu.honors) && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {edu.gpa && (
                      <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                        GPA: {edu.gpa}
                      </span>
                    )}
                    {edu.honors && (
                      <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                        {edu.honors}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
