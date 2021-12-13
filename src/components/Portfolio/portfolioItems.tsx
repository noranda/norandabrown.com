import { ReactElement } from 'react';

import Highlight from '../elements/Highlight';
import Camino1Image from '@/assets/images/portfolio/Camino-1.png';
import Camino2Image from '@/assets/images/portfolio/Camino-2.png';
import CDSConnect1Image from '@/assets/images/portfolio/CDS-Connect-1.png';
import CDSConnect2Image from '@/assets/images/portfolio/CDS-Connect-2.png';
import ClinicalTrialFinder1Image from '@/assets/images/portfolio/Clinical-Trial-Finder-1.png';
import ClinicalTrialFinder2Image from '@/assets/images/portfolio/Clinical-Trial-Finder-2.png';
import CMSRoadmap1Image from '@/assets/images/portfolio/CMS-roadmap-1.png';
import CMSRoadmap2Image from '@/assets/images/portfolio/CMS-roadmap-2.png';
import ConnectedHealthcare1Image from '@/assets/images/portfolio/Connected-Healthcare-1.png';
import CovidPUI1Image from '@/assets/images/portfolio/COVID-PUI-1.png';
import CovidPUI2Image from '@/assets/images/portfolio/COVID-PUI-2.png';
import FFXIVEurekaTracker1Image from '@/assets/images/portfolio/FFXIV-Eureka-Tracker-1.png';
import FFXIVEurekaTracker2Image from '@/assets/images/portfolio/FFXIV-Eureka-Tracker-2.png';
import FSH1Image from '@/assets/images/portfolio/FSH-1.png';
import FSH2Image from '@/assets/images/portfolio/FSH-2.png';
import HealthITConferences1Image from '@/assets/images/portfolio/Health-IT-Conferences-1.png';
import InterventionEngine1Image from '@/assets/images/portfolio/Intervention-Engine-1.png';
import InterventionEngine2Image from '@/assets/images/portfolio/Intervention-Engine-2.png';
import Medmorph1Image from '@/assets/images/portfolio/Medmorph-1.png';
import Medmorph2Image from '@/assets/images/portfolio/Medmorph-2.png';
import Memdart1Image from '@/assets/images/portfolio/Memdart-1.png';
import Memdart2Image from '@/assets/images/portfolio/Memdart-2.png';
import NilitoCarlino1Image from '@/assets/images/portfolio/Nilito-Carlino-1.png';
import NilitoCarlino2Image from '@/assets/images/portfolio/Nilito-Carlino-2.png';
import OpioidWorkshop1Image from '@/assets/images/portfolio/Opioid-Workshop-1.png';
import OpioidWorkshop2Image from '@/assets/images/portfolio/Opioid-Workshop-2.png';
import PatientCancerJourney1Image from '@/assets/images/portfolio/Patient-Cancer-Journey-1.png';
import PatientCancerJourney2Image from '@/assets/images/portfolio/Patient-Cancer-Journey-2.png';
import PCOR1Image from '@/assets/images/portfolio/PCOR-1.png';
import PCOR2Image from '@/assets/images/portfolio/PCOR-2.png';
import PCOR3Image from '@/assets/images/portfolio/PCOR-3.png';
import Rosie1Image from '@/assets/images/portfolio/Rosie-1.png';
import Rosie2Image from '@/assets/images/portfolio/Rosie-2.png';
import SaraSense1Image from '@/assets/images/portfolio/SaraSense-1.png';
import SaraSense2Image from '@/assets/images/portfolio/SaraSense-2.png';
import TechNavigator1Image from '@/assets/images/portfolio/Tech-Navigator-1.png';
import TechNavigator2Image from '@/assets/images/portfolio/Tech-Navigator-2.png';
import TransformingHealth1Image from '@/assets/images/portfolio/Transforming-Health-1.png';
import TransformingHealth2Image from '@/assets/images/portfolio/Transforming-Health-2.png';
import VCI1Image from '@/assets/images/portfolio/VCI-1.png';
import VCI2Image from '@/assets/images/portfolio/VCI-2.png';
import XIVComplete1Image from '@/assets/images/portfolio/XIV-Complete-1.png';
import XIVComplete2Image from '@/assets/images/portfolio/XIV-Complete-2.png';

export const getAllTags = () => {
  let allTags = new Set<string>();
  portfolioItems.forEach(({ tags }) => tags.forEach((tag) => allTags.add(tag)));
  return Array.from(allTags);
};

export type PortfolioItemProps = {
  title: string;
  description: ReactElement;
  images: StaticImageData[];
  role: string;
  subtitle?: string;
  tags: string[];
  tools: string[];
  url?: string;
};

export const portfolioItems: PortfolioItemProps[] = [
  // ----------------------- VCI ------------------------------------------- //
  {
    title: 'Verifiable Clinical Information (VCI)',
    description: (
      <>
        <Highlight>Interactive prototype</Highlight> created using InvisionApp for verifying{' '}
        <Highlight>COVID-19 vaccination status</Highlight> via FHIR. This work is part of the{' '}
        <Highlight>SMART Health Card Framework</Highlight>, an effort to develop and implement open-source verifiable
        digital vaccination credentials. Solely responsible for creating mockups for mobile and desktop.
      </>
    ),
    images: [VCI1Image, VCI2Image],
    role: 'UI Designer',
    subtitle: 'SMART Health Card Verification',
    tags: ['covid-19', 'healthcare', 'ui-design'],
    tools: ['Sketch', 'InvisionApp'],
    url: 'https://invis.io/5M11EMPTJH7N',
  },
  // ----------------------- SaraSense ------------------------------------- //
  {
    title: 'SaraSense',
    description: (
      <>
        Created an <Highlight>interactive prototype</Highlight> for a working <Highlight>dashboard</Highlight> to
        analyze cimate survey data across US Army bases for a{' '}
        <Highlight>Diversity, Equity, and Inclusion (DEI)</Highlight> effort. Presented work to key players to pursue
        funding to build a working prototype in the near future.
      </>
    ),
    images: [SaraSense1Image, SaraSense2Image],
    role: 'UI Designer',
    subtitle: 'Survey Climate Dashboard',
    tags: ['ui-design'],
    tools: ['Sketch', 'InvisionApp'],
    url: 'https://invis.io/RU11WGG5YXA7',
  },
  // ----------------------- COVID19 PUI ----------------------------------- //
  {
    title: 'CDC Person Under Investigation (PUI) Form',
    description: (
      <>
        In early 2020, myself and a small team of developers were tasked with creating a working CDC PUI Reporting app
        to replace the paper app that was being used at the time. In one week, I{' '}
        <Highlight>designed and lead the development team</Highlight> to create a working React form.
      </>
    ),
    images: [CovidPUI1Image, CovidPUI2Image],
    role: 'UI Designer, Frontend Developer',
    subtitle: 'Case Report Form',
    tags: ['covid-19', 'development', 'healthcare', 'ui-design'],
    tools: ['Sketch', 'InvisionApp', 'React'],
    url: 'https://github.com/covid19-pui/covid-19-pui',
  },
  // ----------------------- CMS Roadmap ----------------------------------- //
  {
    title: 'CMS Roadmap',
    description: (
      <>
        In 2018, I created a <Highlight>print design</Highlight> for the Centers for Medicare &amp; Medicaid Services
        (CMS) for a health <Highlight>interoperability roadmap</Highlight> through 2022.
      </>
    ),
    images: [CMSRoadmap1Image, CMSRoadmap2Image],
    role: 'UI Designer',
    tags: ['healthcare', 'print-design'],
    tools: ['Sketch'],
  },
  // ----------------------- Transforming Health --------------------------- //
  {
    title: 'Transforming Health',
    description: (
      <>
        In 2021, I created a <Highlight>print design</Highlight> to showcase the{' '}
        <Highlight>transformation of healthcare</Highlight> from a reactive, institution-centered, medical model, to a
        proactive &amp; predictive, community-centered, whole-person care model.
      </>
    ),
    images: [TransformingHealth1Image, TransformingHealth2Image],
    role: 'UI Designer',
    subtitle: 'Transforming Health & Well-being through Community-Centered Care',
    tags: ['healthcare', 'print-design'],
    tools: ['Sketch'],
  },
  // ----------------------- Rosie ----------------------------------------- //
  {
    title: 'Rosie',
    description: (
      <>
        In 2018, I designed and developed a health data manager <Highlight>working prototype</Highlight> with a small
        team, called Rosie, to demonstrate the benefits of being able to view all health data in one longitudinal
        record. This project spurred other related projects and continues to be an inspiration for what standardized
        health data can make possible.
      </>
    ),
    images: [Rosie1Image, Rosie2Image],
    role: 'UI Designer, Frontend Developer',
    subtitle: 'The Health Data Manager',
    tags: ['development', 'healthcare', 'ui-design'],
    tools: ['Sketch', 'React'],
    url: 'https://github.com/patient-data-manager/pdm-ui',
  },
  // ----------------------- Clinical Trial Finder ------------------------- //
  {
    title: 'Clinical Trial Finder',
    description: (
      <>
        In 2021, designed and developed a clinical trial finder <Highlight>working prototype</Highlight> using{' '}
        <Highlight>React Hooks</Highlight>, <Highlight>Material UI</Highlight>, and <Highlight>Next.js</Highlight>.
        Mentored a small team, all new to React, on coding best-practices and testing in React.
      </>
    ),
    images: [ClinicalTrialFinder1Image, ClinicalTrialFinder2Image],
    role: 'UI Designer, Frontend Developer',
    tags: ['development', 'healthcare', 'ui-design'],
    tools: ['Sketch', 'React'],
    url: 'https://github.com/mcode/clinical-trial-matching-app',
  },
  // ----------------------- Patient Cancer Journey ------------------------- //
  {
    title: 'Patient Cancer Journey',
    description: (
      <>
        Designed a number of patient cancer journey <Highlight>workflows</Highlight> to document the different
        healthcare institutions and processes involved, including the role of social determinants of health (SDOH).
      </>
    ),
    images: [PatientCancerJourney1Image, PatientCancerJourney2Image],
    role: 'Designer',
    subtitle: 'Workflow Diagrams',
    tags: ['healthcare', 'digital-design'],
    tools: ['Sketch'],
  },
  // ----------------------- Medmorph -------------------------------------- //
  {
    title: 'Medmorph',
    description: (
      <>
        Designed a UI interface for an <Highlight>admin console</Highlight> to manage server logs, endpoints,
        subscriptions, and other admin processes. Worked with development team to{' '}
        <Highlight>refine and iterate</Highlight> designs.
      </>
    ),
    images: [Medmorph1Image, Medmorph2Image],
    role: 'UI Designer',
    subtitle: 'Admin Console',
    tags: ['healthcare', 'ui-design'],
    tools: ['Sketch'],
  },
  // ----------------------- Camino ---------------------------------------- //
  {
    title: 'Camino',
    description: (
      <>
        In 2020, I completed a <Highlight>UI design review</Highlight> and made recommendations for updates. I then
        worked on the development team to <Highlight>rebuild the app</Highlight> following these recommendations, and
        eventually built the app out completely.
      </>
    ),
    images: [Camino1Image, Camino2Image],
    role: 'UI Designer, Frontend Developer',
    subtitle: 'Clinical Pathways Builder',
    tags: ['development', 'healthcare', 'ui-design'],
    tools: ['Sketch', 'React'],
    url: 'https://github.com/mcode/pathway-builder',
  },
  // ----------------------- FSH ------------------------------------------- //
  {
    title: 'FHIR Shorthand (FSH)',
    description: (
      <>
        In 2021, I redesigned the <Highlight>home screen image</Highlight> for FSH School and helped add it to the site.
        I also created a <Highlight>new logo, favicons, and other design elements</Highlight> for use on the project. I
        also redesigned the UI for FSH School after a UI review to improve user experience.
      </>
    ),
    images: [FSH1Image, FSH2Image],
    role: 'UI Designer',
    subtitle: 'FSH School & FSH Online',
    tags: ['healthcare', 'ui-design'],
    tools: ['Sketch'],
    url: 'https://fshschool.org/',
  },
  // ----------------------- Intervention Engine --------------------------- //
  {
    title: 'Intervention Engine',
    description: (
      <>
        In 2017, I <Highlight>designed from scratch</Highlight> and <Highlight>developed</Highlight> a fully-fledged
        mobile and web app to help clinicians better track clinical interventions with their patients. The project began
        in <Highlight>Ember.js</Highlight> and later moved to <Highlight>React</Highlight>. I presented a poster and
        gave a talk for this work at the 2017 Medstar Patient Symposium in Baltimore, MD.
      </>
    ),
    images: [InterventionEngine1Image, InterventionEngine2Image],
    role: 'UI Designer, Frontend Developer',
    subtitle: 'Tool for Data-driven Team Huddles',
    tags: ['development', 'healthcare', 'ui-design'],
    tools: ['Sketch', 'Ember', 'React'],
    url: 'https://github.com/intervention-engine/frontend-react',
  },
  // ----------------------- Memdart --------------------------------------- //
  {
    title: 'Memdart',
    description: (
      <>
        In 2016, I designed a <Highlight>mobile/tablet video-focused app</Highlight> for clinicians to perform
        sight-based PTSD therapy with their patients using a vision tool embedded in the app.
      </>
    ),
    images: [Memdart1Image, Memdart2Image],
    role: 'UI Designer',
    subtitle: 'PTSD Therapy Tool',
    tags: ['healthcare', 'ui-design'],
    tools: ['Sketch'],
  },
  // ----------------------- PCOR ------------------------------------------ //
  {
    title: 'PCOR Patient Matcher',
    description: (
      <>
        In 2016, I created <Highlight>user stories</Highlight> and UI Designs for a tool that allows patient matching
        and merging to curate EHR patient lists. I was also a <Highlight>frontend developer</Highlight> on the team,
        helping to implement the designs.
      </>
    ),
    images: [PCOR1Image, PCOR2Image, PCOR3Image],
    role: 'UI Designer, Frontend Developer',
    subtitle: 'Patient Matching and Merging Tool',
    tags: ['development', 'healthcare', 'ui-design'],
    tools: ['Sketch', 'React'],
    url: 'https://github.com/mitre/ptmatch-frontend',
  },
  // ----------------------- Tech Navigator -------------------------------- //
  {
    title: 'Tech Navigator',
    description: (
      <>
        In 2016, I <Highlight>created UI designs</Highlight> for an app to help explore patents, grants, and companies
        creating innovative technologies.
      </>
    ),
    images: [TechNavigator1Image, TechNavigator2Image],
    role: 'UI Designer',
    subtitle: 'Patient Matching and Merging Tool',
    tags: ['healthcare', 'ui-design'],
    tools: ['Sketch'],
  },
  // ----------------------- Health IT Conferences ------------------------- //
  {
    title: 'Health IT Conferences',
    description: (
      <>
        In 2015, I designed and built from scratch a GitHub Pages site, using <Highlight>Jekyll</Highlight>, to
        aggregate and display Health IT Conferences. This was a <Highlight>solo project</Highlight> I completed on my
        free time to <Highlight>help others in my department</Highlight>. I curated this list for a few years, sending
        out monthly updates. The list could be filtered by locations and topics.
      </>
    ),
    images: [HealthITConferences1Image],
    role: 'UI Designer, Developer',
    subtitle: 'Online Collection of Health Conferences',
    tags: ['development', 'healthcare', 'ui-design'],
    tools: ['Sketch', 'Jekyll'],
    url: 'https://noranda.github.io/health-it-conferences/',
  },
  // ----------------------- Opioid Solutions Workshop --------------------- //
  {
    title: 'Opioid Solutions Workshop',
    description: (
      <>
        In 2017, I created <Highlight>print designs</Highlight> for a MITRE-sponsored workshop on the opioid crisis. I
        designed the <Highlight>logo</Highlight>, a <Highlight>booklet</Highlight>, and designed and developed a{' '}
        <Highlight>registration site</Highlight>.
      </>
    ),
    images: [OpioidWorkshop1Image, OpioidWorkshop2Image],
    role: 'UI Designer, Frontend Developer',
    subtitle: '2017 MITRE Workshop',
    tags: ['development', 'healthcare', 'ui-design', 'print-design'],
    tools: ['Sketch', 'Jekyll'],
    url: 'https://github.com/noranda/opioid-crisis-workshop-2017',
  },
  // ----------------------- Connected Healthcare -------------------------- //
  {
    title: 'Connected Healthcare Ecosystem',
    description: (
      <>
        In 2017, I created a <Highlight>workflow diagram</Highlight> to show how the Health Data Manager places the
        patient at the center of the connected health ecosystem.
      </>
    ),
    images: [ConnectedHealthcare1Image],
    role: 'Designer',
    subtitle: 'Health Data Manager Workflow',
    tags: ['healthcare', 'digital-design'],
    tools: ['Sketch'],
  },
  // ----------------------- CDS Connect ----------------------------------- //
  {
    title: 'CDS Connect',
    description: (
      <>
        From 2016-2021, I have been the UI Designer and Lead Frontend Developer on the Clinical Decision Support (CDS)
        Connect team, designing and implementing features for the Authoring Tool, Repository, and Pain Management
        Summary. In 2021, I spearheaded an effort to refactor the code-base to{' '}
        <Highlight>current React standards</Highlight>, including adding <Highlight>Material UI</Highlight> and
        implementing <Highlight>React Hooks</Highlight>.
      </>
    ),
    images: [CDSConnect1Image, CDSConnect2Image],
    role: 'UI Designer, Frontend Developer',
    subtitle: 'Authoring Tool and Pain Management Summary',
    tags: ['development', 'healthcare', 'ui-design'],
    tools: ['Sketch', 'React'],
    url: 'https://cds.ahrq.gov/authoring/',
  },
  // ----------------------- FFXIV Eureka Tracker -------------------------- //
  {
    title: 'FFXIV Eureka Tracker',
    description: (
      <>
        A <Highlight>2-person personal project</Highlight> for tracking cooldown times for notorious monsters in
        FFXIV&apos;s Eureka maps. I designed the UI and implemented the frontend in <Highlight>Ember</Highlight>. This
        tool is still used today in various parts of the world.
      </>
    ),
    images: [FFXIVEurekaTracker1Image, FFXIVEurekaTracker2Image],
    role: 'UI Designer, Frontend Developer',
    subtitle: 'Final Fantasy XIV Video Game Tracker',
    tags: ['development', 'ui-design', 'video-games'],
    tools: ['Sketch', 'Ember'],
    url: 'https://ffxiv-eureka.com/',
  },
  // ----------------------- XIV-Complete ---------------------------------- //
  {
    title: 'XIV-Complete',
    description: (
      <>
        A <Highlight>2-person personal project</Highlight> for tracking various collections in FFXIV. I designed the UI
        and helped implement the frontend in <Highlight>React</Highlight>. This tool is a work in progress, but is
        active today.
      </>
    ),
    images: [XIVComplete1Image, XIVComplete2Image],
    role: 'UI Designer, Frontend Developer',
    subtitle: 'Final Fantasy XIV Video Game Collection Tracker',
    tags: ['development', 'ui-design', 'video-games'],
    tools: ['Sketch', 'React'],
    url: 'https://xiv-complete.com/',
  },
  // ----------------------- Nilito Carlino Foundation --------------------- //
  {
    title: 'Nilito Carlino Foundation',
    description: (
      <>
        Volunteer UI design work for a local <Highlight>memorial foundation</Highlight>. I designed the UI and logo,
        used for marketing purposes. I also <Highlight>mentor</Highlight> the developer of the project from time to time
        when they have questions about React.
      </>
    ),
    images: [NilitoCarlino1Image, NilitoCarlino2Image],
    role: 'UI Designer',
    subtitle: 'Memorial Foundation Site',
    tags: ['ui-design', 'digital-design'],
    tools: ['Sketch'],
    url: 'https://www.nilitocarlinofoundation.org/#/',
  },
];
