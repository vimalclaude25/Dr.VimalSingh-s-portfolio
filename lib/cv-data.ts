export interface PersonalInfo {
  name: string
  qualifications: string
  title: string
  department: string
  departmentName?: string
  institution: string
  contact: string[]
  whatsapp: string
  email: string
  contactFormUrl: "https://script.google.com/macros/s/AKfycbxgI4c93brtR0JnKR4JCDaM5JCmNMIXyrxC_LlFoiq77Ly0WA4d6sUL2UsaBM73a0fm5A/exec"
  links: {
    vidwan: string
    scopus: string
    researchgate: string
    scholar: string
    orcid: string
    facultyPage: string
  }
  summary: string
  biographical: {
    fatherName: string
    motherName: string
    dob: string
    sex: string
    maritalStatus: string
    address: string
  }
}

export interface Experience {
  role: string
  organization: string
  duration: string
}

export interface Qualification {
  degree: string
  institution: string
  year: string
  details?: string
}

export interface GuidedScholar {
  level: string
  awarded: number
  pursuing: number
  details: { year: string; count: number; status: 'Awarded' | 'Pursuing' }[]
  phdScholars?: { name: string; regNo: string; session: string }[]
}

export interface Patent {
  title: string
  level: string
  stream: string
  role: string
  designNo: string
  dateGrant: string
  dateIssue?: string
}

export interface Project {
  title: string
  agency: string
  type: string
  stream: string
  role: string
  amount: string
  duration?: string
  dateSanction: string
}

export interface Consultancy {
  agency: string
  date: string
  workNature: string
  role: string
  amount: string
}

export interface Book {
  title: string
  role: 'Co-Author' | 'Chief Editor' | 'Co-Editor'
  publisher: string
  location: string
  date: string
  isbn: string
  referred: boolean
}

export interface Scale {
  title: string
  authors: string
  isbn: string
  publisher: string
  year: string
}

export interface JournalPublication {
  id: number
  year: number
  title: string
  journal: string
  type: 'Scopus Indexed' | 'UGC-CARE Listed' | 'Peer-Reviewed'
  details: string
  doi?: string
  link?: string
}

export interface BookChapter {
  id: number
  chapterTitle: string
  bookTitle: string
  publisher: string
  year: number
  isbn: string
  role: string
  pages?: string
  link?: string
}

export interface InviteeLecture {
  id: number
  topic: string
  event: string
  organizer: string
  date: string
  link?: string
}

export interface FdpWorkshop {
  id: number
  course: string
  organizer: string
  sponsor?: string
  from: string
  to: string
  link?: string
}

export interface CommitteeRole {
  id: number
  name: string
  role: string
  year: string
  link?: string
}

export interface AdminResponsibility {
  id: number
  responsibility: string
  date: string
  link?: string
}

export interface CoCurricularActivity {
  id: number
  description: string
  from: string
  to: string
  link?: string
}

export const personalInfo: PersonalInfo = {
  name: 'Dr. Vimal Singh',
  qualifications: 'MPA, M.Ed., Ph.D.',
  title: 'Assistant Professor',
  department: 'School of Teacher Education',
  departmentName: 'Department Of Advanced Educational Research And Teaching Of Educational Foundations',
  institution: 'Chhatrapati Shahu Ji Maharaj University, Kanpur',
  contact: ['+91-7905184427', '+91-9795168526', '+91-6387549445'],
  whatsapp: '+91-7905184427',
  email: 'drvimalsingh@csjmu.ac.in',
  contactFormUrl: 'https://script.google.com/macros/s/AKfycbxgI4c93brtR0JnKR4JCDaM5JCmNMIXyrxC_LlFoiq77Ly0WA4d6sUL2UsaBM73a0fm5A/exec',
  links: {
    vidwan: 'https://vidwan.inflibnet.ac.in/profile/346396',
    scopus: 'https://www.scopus.com/authid/detail.uri?authorId=58797837900',
    researchgate: 'https://www.researchgate.net/profile/Vimal-Singh-23',
    scholar: 'https://scholar.google.com/citations?user=eq1y6iYAAAAJ&hl=en',
    orcid: 'https://orcid.org/my-orcid?orcid=0000-0002-3209-6057',
    facultyPage: 'https://csjmu.ac.in/all-faculty/dr-vimal-singh/',
  },
  summary: 'Presently working as Assistant Professor in the Department Of Advanced Educational Research And Teaching Of Educational Foundations, School of Teacher Education, C.S.J.M. University, Kanpur UP with sincerity, perseverance, hard work & commitment, having a good academic and research background.',
  biographical: {
    fatherName: 'Late Surendra Pratap Singh',
    motherName: 'Meena Singh',
    dob: '05.05.1989',
    sex: 'Male',
    maritalStatus: 'Unmarried',
    address: 'Flat No - 04, Block - A, Type - III, New Teachers Building, CSJM University Campus Kanpur UP - 208024',
  }
}

export const teachingExperience: Experience[] = [
  {
    role: 'Assistant Professor',
    organization: 'Department Of Advanced Educational Research And Teaching Of Educational Foundations, School of Teacher Education, C.S.J.M. University, Kanpur, UP',
    duration: '23 April 2022 to the present',
  },
  {
    role: 'Assistant Professor',
    organization: 'Balram Krishan Academy, (A College of Higher Education), University of Lucknow, Lucknow',
    duration: '18 January 2021 to 22 April 2022',
  },
  {
    role: 'Verified Educator',
    organization: 'Unacademy',
    duration: '2019 - 2020',
  },
  {
    role: 'Junior & Senior Research Fellow (JRF/SRF)',
    organization: 'Department of Education, University of Lucknow',
    duration: '18 January 2016 to 17 January 2021',
  },
  {
    role: 'Assistant Professor',
    organization: 'Balram Krishan Academy (A College of Higher Education), University of Lucknow, Lucknow',
    duration: '1 July 2014 to 17 Jan 2016',
  }
]

export interface AwardItem {
  id: number
  title: string
  organization: string
  location?: string
  date: string
  category: 'National' | 'State' | 'Institutional' | 'International'
}

export const awardsAndHonors: AwardItem[] = [
  {
    id: 1,
    title: "Prof. H. N. Mishra Outstanding Teacher’s Award",
    organization: "The International Society",
    location: "McRobertganj Kanpur - 208002",
    date: "05.10.2023",
    category: "National"
  },
  {
    id: 2,
    title: "Young Researcher & Academic Excellence Award",
    organization: "Academic Research Association & CSJM University",
    location: "Kanpur UP",
    date: "2024",
    category: "National"
  }
]

export const academicAchievements: string[] = [
  'Recipients of National Award: Prof. H. N. Mishra Outstanding Teacher’s Award by The International Society, Kanpur (05.10.2023).',
  'Qualified UGC-NET JRF in Education in Dec.2013, June 2014, and NET for Lectureship in Dec 2014.',
  'Qualified UGC-NET in Public Administration for Lectureship in June 2012.',
  'Qualified CTET for Junior Level in July 2013.',
  'Qualified UPTET for Junior Level in August 2013.'
]

export const professionalQualifications: Qualification[] = [
  {
    degree: 'Ph.D. in Education',
    institution: 'Institute of Advance Studies in Education, University of Lucknow, Lucknow U.P.',
    year: '2021',
    details: "Topic: 'A Study of Personality and Values of Students Studying in Institutions based on Different Ideologies'",
  },
  {
    degree: "Master's in Education (M.Ed.)",
    institution: 'Institute of Advance Studies in Education, University of Lucknow, Lucknow U.P.',
    year: '2014',
    details: '1st Division (68.80%)',
  },
  {
    degree: 'Bachelor of Education (B.Ed.)',
    institution: 'Institute of Advance Studies in Education, University of Lucknow, Lucknow U.P.',
    year: '2013',
    details: '1st Division (Theory-63.38%, Teaching Practice-83.00%)',
  },
  {
    degree: 'Diploma in Computer Programming, System and Management',
    institution: 'Bright Computer Education, Registered by UP Government',
    year: '2005 - 2006',
  }
]

export const academicQualifications: Qualification[] = [
  {
    degree: 'Master of Public Administration (MPA)',
    institution: 'University of Lucknow, Lucknow',
    year: '2011',
    details: '1st Division (66.29%)',
  },
  {
    degree: 'Bachelor of Arts (BA)',
    institution: 'University of Lucknow, Lucknow U.P.',
    year: '2009',
    details: '1st Division (62.00%)',
  },
  {
    degree: 'Intermediate',
    institution: 'U.P. Board, Allahabad',
    year: '2005',
    details: '1st Division (61.00%)',
  },
  {
    degree: 'High School',
    institution: 'U.P. Board, Allahabad',
    year: '2003',
    details: '2nd Division (52.50%)',
  }
]

export const specializations: string[] = [
  'Artificial Intelligence in Education',
  'Machine Learning',
  'Mixed Method',
  'Curriculum Development',
  'Policy Research',
  'Educational Administration and Management'
]

export const researchGuidance: GuidedScholar = {
  level: 'M.Ed. Level',
  awarded: 34,
  pursuing: 16,
  details: [
    { year: '2026 – 2028', count: 8, status: 'Pursuing' },
    { year: '2025 – 2027', count: 8, status: 'Pursuing' },
    { year: '2024 – 2026', count: 8, status: 'Awarded' },
    { year: '2023 – 2025', count: 7, status: 'Awarded' },
    { year: '2022 – 2024', count: 7, status: 'Awarded' },
    { year: '2021 – 2023', count: 8, status: 'Awarded' }, // 07+1* represented as 8
    { year: '2020 – 2022', count: 3, status: 'Awarded' }
  ],
  phdScholars: [
    { name: 'Ms. Mahima Tripathi', regNo: 'PHD202500001327', session: '2024 - 2025' },
    { name: 'Mr. Suraj Gupta', regNo: 'PHD202500000536', session: '2024 - 2025' }
  ],
}

export const patents: Patent[] = [
  {
    title: 'Augmented Reality System for Educational Simulations',
    level: 'Indian National',
    stream: 'Education',
    role: 'Principal Inventor',
    designNo: '429777-001',
    dateGrant: '09 September 2024',
    dateIssue: '07 November 2024',
  },
  {
    title: 'Method for Enhancing Study Habits Via Digital Device Reduction',
    level: 'Indian National',
    stream: 'Education',
    role: 'Principal Inventor',
    designNo: '202411071925',
    dateGrant: '11 October 2024',
  }
]

export const researchProjects: Project[] = [
  {
    title: 'Construction and Standardization of Global Research Oriented Utility Platform (GROUP) Scale',
    agency: 'CSJM University Kanpur UP',
    type: 'Minor Research Project',
    stream: 'Social Sciences',
    role: 'Principal Investigator',
    amount: '1 Lac',
    duration: '1 Year',
    dateSanction: '07 March 2024',
  },
  {
    title: 'Effectiveness of Augmented Reality on Creative Thinking: An Expectation of National Educational Policy 2020',
    agency: 'Department of Higher Education Govt. of UP',
    type: 'Centre of Excellence',
    stream: 'Education',
    role: 'Principal Investigator',
    amount: '2 Lac 46 Thousand',
    dateSanction: '31 March 2026',
  }
]

export const consultancy: Consultancy = {
  agency: 'TCS iON',
  date: '02.03.2026',
  workNature: 'Project Based / SoW',
  role: 'Content Design Expert',
  amount: '<5 Lac / Year',
}

export const books: Book[] = [
  {
    title: 'Teaching with Heart: Mastering Soft Skills for Transformative Education',
    role: 'Chief Editor',
    publisher: 'Book Rivers Publications',
    location: 'New Delhi, India',
    date: '2025',
    isbn: '978-93-6884-377-1',
    referred: true,
  },
  {
    title: 'New Trends and Innovative Practices in Educational Process: Indian and Global Perspectives',
    role: 'Chief Editor',
    publisher: 'World Book Publications',
    location: 'Kanpur UP',
    date: '2023',
    isbn: '978-81-962747-9-5',
    referred: true,
  },
  {
    title: 'Educational Thoughts and Issues',
    role: 'Co-Editor',
    publisher: 'Homage Publications',
    location: 'New Delhi',
    date: '2022',
    isbn: '978-93-8498-4-78-6',
    referred: true,
  },
  {
    title: 'Knowledge Generation through Practicum',
    role: 'Co-Author',
    publisher: 'SRS Publications & Distributions (International)',
    location: 'Lucknow, India',
    date: 'November 2015',
    isbn: '978-81-926826-2-4',
    referred: false,
  }
]

export const scales: Scale[] = [
  {
    title: 'General Anxiety Scale (GAS)',
    authors: 'Dr. Vimal Singh, Mrs. Shubhi Rastogi, Mr. Deshdeepak & Dr. Divya R. Panjwani',
    isbn: '978-93-94903-86-9 (Product Code: PC: 16-3509-KT)',
    publisher: 'PRASAD PSYCHO PRIVATE LIMITED, Noida, U.P. [INDIA]',
    year: '2026',
  },
  {
    title: 'Global Research Oriented Utility Platforms: An Awareness Scale (GROUP)',
    authors: 'Dr. Vimal Singh',
    isbn: 'N/A',
    publisher: 'Manas Psycho Home, Uttam Nagar, New Delhi [INDIA]',
    year: '2026',
  }
]

export const journalPublications: JournalPublication[] = [
  {
    id: 1,
    year: 2026,
    title: 'Effectiveness of Animated Games on Study Habits of Secondary School Students',
    journal: 'Journal of Research in Education (A Peer Reviewed and Refereed Bi-annual Journal)',
    type: 'Peer-Reviewed',
    details: 'St. Xavier’s College of Education (Autonomous), Patna, Vol. 14 No. 01, June 2026, ISSN (P): 2347-5676, ISSN (O): 2582-2357, Impact Factor: 6.295, Page No: 105-117.',
    link: '/papers/animated-games-study-habits.pdf',
  },
  {
    id: 0,
    year: 2026,
    title: 'Vivekananda’s Educational Philosophy and Its Reflections on Student Values: An Empirical Inquiry',
    journal: 'International Social Sciences and Education Journal (ISSEJ)',
    type: 'Peer-Reviewed',
    details: 'Vol. 4 No. 3, August 11, 2026, ISSN: 3005-3463 (Online), Page No: 52-61.',
    doi: '10.61424/issej.v4i3.923',
    link: 'https://doi.org/10.61424/issej.v4i3.923',
  },
  {
    id: 1,
    year: 2026,
    title: 'From Gurukul to Generative AI: Philosophical Foundations for AI-Enabled Multicultural Education',
    journal: 'Journal of Computer Science and Information Technology (JCSIT)',
    type: 'Peer-Reviewed',
    details: 'Vol. 3 No. 2, August 2026, ISSN: 3080-3586, Page No: 01-10.',
    doi: '10.61424/jcsit.v3i2.916',
    link: '/read/gurukul-to-generative-ai',
  },
  {
    id: 1,
    year: 2026,
    title: 'From Philosophy to Practice: Reflected Values in Learners Shaped by Tagore’s Educational Vision',
    journal: 'RESEARCH REVIEW International Journal of Multidisciplinary, Double-blind peer-reviewed and refereed online Journal',
    type: 'Peer-Reviewed',
    details: 'Volume 11 Issue 6, June 2026, e-ISSN: 2455-3085, Page No: 144-152.',
    doi: '10.31305/rrijm.2026.v11.n06.016',
    link: '/read/tagore-educational-vision',
  },
  {
    id: 1,
    year: 2026,
    title: 'DO LOCALITY AND GENDER MATTER? A COMPARATIVE ANALYSIS OF NEP 2020 AWARENESS AMONG PRIMARY SCHOOL TEACHERS',
    journal: 'Socio-Economic Perspectives, An International Quarterly Refereed Peer-Reviewed Journal',
    type: 'Peer-Reviewed',
    details: 'Volume 14 No 02, April-June 2026, ISSN: 2321-5607, Page No: 01-10.',
    link: '/read/nep-locality-gender',
  },
  {
    id: 2,
    year: 2026,
    title: 'Cognitive Load in the Age of Artificial Intelligence: A Bibliometric Analysis (2021–2025)',
    journal: 'Annals of Neurosciences, An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Annals of Neurosciences. 2026;0(0), ISSN: 0976-3260, Impact Factor 2.6, Page 01-20.',
    doi: '10.1177/09727531261443089',
    link: '/read/cognitive-load-ai',
  },
  {
    id: 3,
    year: 2026,
    title: 'Are Digital Resources Meeting Student Needs? A Study Of E-Resource Satisfaction at CSJM University',
    journal: 'International Journal of Scientific Research Studies, An International Peer-Reviewed Journal',
    type: 'Peer-Reviewed',
    details: 'Volume 03 Issue 05, May 2026, ISSN (print): 3050-6905, ISSN (online): 3050-6913, Page No: 264-273.',
    doi: '10.58806/ijsrs.2026.v3i5n09',
    link: '/read/e-resource-satisfaction',
  },
  {
    id: 4,
    year: 2026,
    title: 'From Play to Proficiency: Game-Based Learning for Foundational Literacy and Numeracy',
    journal: 'International Journal of Scientific Research Studies, An International Peer-Reviewed Journal',
    type: 'Peer-Reviewed',
    details: 'Volume 03 Issue 04, April 2026, ISSN (print): 3050-6905, ISSN (online): 3050-6913, Page: 73-86.',
    doi: '10.58806/ijsrs.2026.v3i4n01',
    link: '/read/game-based-learning',
  },
  {
    id: 5,
    year: 2025,
    title: 'Unveiling the Global Rise of Chatbot-Assisted Learning: A 2020–2025 Bibliometric Study',
    journal: 'Scientific Culture, An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Vol. 11, No. 4, ISSN: 2407-9529, Page: 3042-3060.',
    doi: '10.5281/zenodo.11425125',
    link: '/read/chatbot-assisted-learning',
  },
  {
    id: 6,
    year: 2025,
    title: 'Spiritual Intelligence and Anxiety among Undergraduate Students: A Correlation Study',
    journal: 'International Journal of Indian Psychology: An International Peer-Reviewed Journal',
    type: 'Peer-Reviewed',
    details: '13(4), ISSN 2348-5396 (Online), DIP:18.01.279.20251304, Page: 3064-3078.',
    doi: '10.25215/1304.279',
    link: '/read/spiritual-intelligence-anxiety',
  },
  {
    id: 7,
    year: 2025,
    title: 'A Systematic Literature Review on Anxiety Among Undergraduate Students: Causes and Coping Strategies',
    journal: 'Annals of Neurosciences, An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Annals of Neurosciences. 2025;0(0), ISSN 0976-3260, Impact Factor 2.6, Page 01-16.',
    doi: '10.1177/09727531251366078',
    link: '/read/anxiety-undergraduates-review',
  },
  {
    id: 8,
    year: 2025,
    title: 'CBCS in Higher Education: An Impact Analysis',
    journal: 'Omniscient; An International Multidisciplinary Peer-Reviewed Journal',
    type: 'Peer-Reviewed',
    details: 'Vol 3 Issue 1, Jan-Mar 2025 EISSN: 2583-7575, Page: 43-54.',
    link: '/read/cbcs-higher-education',
  },
  {
    id: 9,
    year: 2025,
    title: 'विविन्न व्यावसायिक पाठ्यक्रमों में अध्ययनरत विद्यार्थियों की व्यावसायिक रुचि का तुलनात्मक अध्ययन',
    journal: 'Shiksha Shodh Manthan : A Half Yearly Bilingual Peer Reviewed Journal of Education',
    type: 'Peer-Reviewed',
    details: 'Vol 11, No. 1, April 2025, ISSN No: 2395-728X, Page: 346-353.',
    link: '/read/vocational-interest-study',
  },
  {
    id: 10,
    year: 2025,
    title: 'Mapping the Neuroeducation Landscape: A Bibliometric Analysis (2020–2025)',
    journal: 'Annals of Neurosciences, An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Annals of Neurosciences. Vol 32, Issue 3, ISSN 0976-3260, Impact Factor 2.6, Page 01-19.',
    doi: '10.1177/09727531251355822',
    link: '/read/neuroeducation-landscape',
  },
  {
    id: 11,
    year: 2025,
    title: 'NEWS FRAMING AND STUDENT PERCEPTIONS: A BIBLIOMETRIC ANALYSIS OF GLOBAL RESEARCH TRENDS',
    journal: 'The International Journal of Interdisciplinary Cultural Studies, An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Volume-20, No-2, Year-2025, E-ISSN No: 2327-2554, Impact Factor 7.418, Page: 66-88.',
    doi: '10.18848/p2qy7b42',
    link: '/read/news-framing-student-perceptions',
  },
  {
    id: 12,
    year: 2025,
    title: 'AN EDUCATIONAL SYSTEMATIC RESEARCH REVIEW: TREND ANALYSIS',
    journal: 'Academe Journal of Education & Psychology, An International Refereed and Peer Reviewed Journal',
    type: 'Peer-Reviewed',
    details: 'Volume-15, Issue-1, Year 2025 (January-June), ISSN No: 2249-040X, Impact Factor 6.25, Page: 146-153.',
    doi: '10.5281/zenodo.15754113',
    link: '/read/educational-systematic-research',
  },
  {
    id: 13,
    year: 2025,
    title: 'Challenges of Implementing ChatGPT in Education: A Systematic Review (2021–2025)',
    journal: 'International Journal of All Research Education and Scientific Methods (IJARESM), An International Refereed and Peer Reviewed Journal',
    type: 'Peer-Reviewed',
    details: 'Vol 13, Issue 7, 11 July 2025, ISSN: 2455-5211, Page 876-887.',
    doi: '10.56025/IJARESM.2025.1307250876',
    link: '/read/challenges-implementing-chatgpt',
  },
  {
    id: 14,
    year: 2025,
    title: 'Spiritual Intelligence: A Systematic Review',
    journal: 'International Journal of Arts and Humanities, An International Refereed and Peer Reviewed Journal',
    type: 'Peer-Reviewed',
    details: 'Vol 3, Issue 1, 28 June 2025, ISSN: 3005-3455, Page 35-52.',
    doi: '10.61424/ijah.v3i1.297',
    link: '/read/spiritual-intelligence-review',
  },
  {
    id: 15,
    year: 2025,
    title: 'Environmental Concerns in the Present Scenario and Future Works of Education',
    journal: 'International Journal of Environmental Sciences, An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Vol 7(s), Issue 11, 02 June 2025, ISSN 2229-7359, Page 697-709.',
    doi: '10.64252/53yg9z85',
    link: '/read/environmental-concerns-education',
  },
  {
    id: 16,
    year: 2025,
    title: 'A Journey from Low Self-esteem to High Selfworth: Importance of Holistic Education for Children from Marginalised Sections',
    journal: 'Annals of Neurosciences, An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Annals of Neurosciences. 2025;0(0), ISSN 0976-3260, Impact Factor 2.6, Page 01-05.',
    doi: '10.1177/09727531251343771',
    link: '/read/low-self-esteem-holistic-education',
  },
  {
    id: 17,
    year: 2025,
    title: 'Accelerated diabetic wound healing using a chitosan-based nanomembrane incorporating nanovesicles from Aloe barbadensis, Azadirachta indica, and Zingiber officinale',
    journal: 'International Journal of Biological Macromolecules (Elsevier ScienceDirect): An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Vol. 310 Part 2, May 2025, 143169, ISSN 0141-8130, Impact Factor 7.8, Page 01-09.',
    doi: '10.1016/j.ijbiomac.2025.143169',
    link: '/read/diabetic-wound-healing-nanomembrane',
  },
  {
    id: 18,
    year: 2024,
    title: 'Trends of Research on Women Studies from 2001 to 2020 in Faculty of Education in Central University',
    journal: 'Mukt Shabd Journal: An International UGC-CARE Listed Refereed and Peer Reviewed Journal',
    type: 'UGC-CARE Listed',
    details: 'Volume XIII, Issue XI, November, ISSN NO : 2347-3150, Page: 136 – 164.',
    doi: '10.0014.MSJ.2024.V13I11.0086781',
    link: '/read/women-studies-trends',
  },
  {
    id: 19,
    year: 2024,
    title: 'Research trends on value education in a decade with special reference in Faculty of Education: Indian University',
    journal: 'Library Progress International: An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Vol. 44 No.3, Jul-Dec 2024, ISSN 2320 317X, Page 10700-10705.',
    link: '/read/value-education-trends',
  },
  {
    id: 20,
    year: 2024,
    title: 'Tracing challenges in the pathway of CBCS: A status study',
    journal: 'Library Progress International: An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Vol.44 No.3, Jul-Dec 2024, SSN 2320 317X, Page 10300-10309.',
    link: '/read/tracing-cbcs-challenges',
  },
  {
    id: 21,
    year: 2024,
    title: 'A Comparative Study of Happiness Quotient of Graduate Level Students Studying in NAAC A++ Accredited University and Non-Accredited State University',
    journal: 'Educational Administration: Theory and Practice: An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Vol 30, No 04, ISSN (Online): 2148 – 2403, Page 4333-4339.',
    link: '/read/happiness-quotient-study',
  },
  {
    id: 22,
    year: 2023,
    title: 'Multicultural Education: A Reflection of Indian Classrooms',
    journal: 'Youth Voice Journal, The RJ4 All Rotherhithe Community Centre, London, UK',
    type: 'Scopus Indexed',
    details: 'ISSN (Online): 2056 – 2969, Page 1-22.',
    link: '/read/youth-voice-journal-2023',
  },
  {
    id: 23,
    year: 2023,
    title: 'विद्दू कृष्णमवूति का दर्िन: िय से मवुि',
    journal: 'Bharatiya Shiksha Shodh Patrika: Refereed Peer Reviewed Journal, A UGC-CARE List Journal',
    type: 'UGC-CARE Listed',
    details: 'ISSN 0970-7603, Vol. 42, No-1 (iii), January-June 2023, Page: 10-13.',
    link: '/read/krishnamurti-philosophy-fear-hindi',
  },
  {
    id: 24,
    year: 2023,
    title: 'Facing Fears, Challenges, and Realities: Understanding Krishnamurti’s Philosophy',
    journal: 'National Journal of Education Published Biannually by Banaras Hindu University, Varanasi India',
    type: 'UGC-CARE Listed',
    details: 'A UGC-CARE List Group 1 Journal, ISSN 0972-9569, Vol XIX, No 2, May 2023, Page 20-26.',
    link: '/read/facing-fears-krishnamurti',
  },
  {
    id: 25,
    year: 2022,
    title: 'Developing Mechanism for Dealing with Slow and Fast Learner',
    journal: 'Education and Society (शिक्षण आणि समाज), A UGC-CARE List Group 1 Journal',
    type: 'UGC-CARE Listed',
    details: 'Vol. 45, No.4 October - December 2022, ISSN: 2278-6864, Page: 292-301.',
    link: '/read/dealing-slow-fast-learners',
  },
  {
    id: 26,
    year: 2021,
    title: 'Institutional Profile of Patha-Bhavan depicting Ideological Insight of Rabindranath Tagore',
    journal: 'Bharatiya Shiksha Shodh Patrika: Peer Reviewed Journal, A UGC-CARE List Journal',
    type: 'UGC-CARE Listed',
    details: 'ISSN 0970-7603, Vol. 40, No-2, July-December 2021, Page: 87-94.',
    link: '/read/tagore-ideological-insight-hindi',
  },
  {
    id: 27,
    year: 2021,
    title: 'Industry-Academia Collaboration in Global World: Indian Perspective',
    journal: 'Education India Journal: A Quarterly Refereed Journal of Dialogues on Education, A UGC-CARE List Journal',
    type: 'UGC-CARE Listed',
    details: 'ISSN 2278-2435, Vol. 10, Issue-2 May-2021, Page: 306-319.',
    link: '/read/industry-academia-collaboration',
  },
  {
    id: 28,
    year: 2021,
    title: 'An Investigation into Reflective Practices of J. Krishnamurti’s Ideology',
    journal: 'Shodh Sanchar Bulletin, An International Bilingual Peer Reviewed Refereed Research Journal',
    type: 'UGC-CARE Listed',
    details: 'Vol. 11, Issue 41, January to March 2021, ISSN No: 2229-3620, UGC-CARE Listed Journal, Page: 282-286.',
    link: '/read/reflective-practices-krishnamurti',
  },
  {
    id: 29,
    year: 2020,
    title: 'An Empirical Inquiry of Sri Aurobindo’s Ideological Implications in Sri Aurobindo International Centre of Education (SAICE)',
    journal: 'International Journal of Research and Analytical Review, A Peer Review & Refereed Journal',
    type: 'Peer-Reviewed',
    details: 'Vol. 07, Issue 03, September 2020, ISSN No: 2348-1269, Impact Factor: 5.75 Page: 589-594.',
    link: '/read/aurobindo-ideological-implications',
  },
  {
    id: 30,
    year: 2019,
    title: 'Ideological Reflections of Swami Vivekananda in Ramkrishna Mission Vidyalaya: An Exploratory Study',
    journal: 'Research Discourse: An International Refereed Research Journal',
    type: 'UGC-CARE Listed',
    details: 'Year IX, No. IV, October-December 2019, ISSN No: 2277-2014, UGC-CARE Listed Journal No. 63580, Impact Factor: 4.850 Page: 09-12.',
    link: '/read/swami-vivekananda-reflections',
  },
  {
    id: 31,
    year: 2017,
    title: 'Global Trends and Learning Styles in Indian Higher Education',
    journal: 'Shiksha Shodh Manthan : A Half Yearly International Refereed Journal of Education',
    type: 'Peer-Reviewed',
    details: 'Vol. 3, No. 1, April 2017, ISSN No: 2395-728X, Page: 26-33.',
    link: '/read/global-trends-learning-styles',
  },
  {
    id: 32,
    year: 2017,
    title: 'Emotional Intelligence in Teacher Education Curriculum for Enhancing Professionalism',
    journal: 'Education India Journal: A Quarterly Refereed Journal of Dialogues on Education',
    type: 'Peer-Reviewed',
    details: 'Vol. 6, Issue 3, August 2017, ISSN No.-2278-2435, Page: 79-92.',
    link: '/read/emotional-intelligence-teacher-education',
  },
  {
    id: 33,
    year: 2017,
    title: 'A Study of Environmental Moral Reasoning of Prospective Teachers',
    journal: 'Research Discourse: An International Refereed Research Journal',
    type: 'UGC-CARE Listed',
    details: 'Year VII, No. XXIV, Part-II, July-September 2017, ISSN No: 2277-2014, UGC-CARE Listed Journal No. 63580, Page: 48-51.',
    link: '/read/environmental-moral-reasoning',
  },
  {
    id: 34,
    year: 2017,
    title: 'स्नातक स्तर के विद्यार्थियों के शैक्षिक उपलब्धि एवं संवेगात्मक बुद्धि के मध्य सहसम्बन्ध का अध्ययन',
    journal: 'Shiksha Shodh Manthan : A Half Yearly Bilingual Peer Reviewed Journal of Education',
    type: 'UGC-CARE Listed',
    details: 'Vol 3, No. 2, Oct 2017, ISSN No: 2395-728X, UGC-CARE Listed Journal No. 62814, Page: 113-119.',
    link: '/read/emotional-intelligence-academic-achievement-hindi',
  },
  {
    id: 35,
    year: 2017,
    title: 'Focus Group Discussion: An Approach of Qualitative Research',
    journal: 'Sodha Mimamsa, An International Refereed Research Journal',
    type: 'UGC-CARE Listed',
    details: 'Year IV, Part-II, No.: XVI, Oct-Dec 2017, UGC-CARE Journal No. 48923, ISSN No. – 2348-4624, Impact Factor: 2.695, Page: 40-41.',
    link: '/read/focus-group-discussion-qualitative',
  },
  {
    id: 36,
    year: 2015,
    title: 'स्नातक स्तर के विद्यार्थियों के शैक्षिक उपलब्धि एवं समायोजन के मध्य सहसम्बन्ध का अध्ययन',
    journal: 'Research Journey in Education : Annual Refereed Journal of Education, Allahabad',
    type: 'Peer-Reviewed',
    details: 'Year-2, Vol.2, No.1, Jan - Dec 2015, ISSN No: 2321-256X, Page: 64-73.',
    link: '/read/academic-achievement-adjustment-study-hindi',
  },
  {
    id: 37,
    year: 2015,
    title: 'स्नातक स्तर के विद्यार्थियों के समायोजन एवं संवेगात्मक बुद्धि के मध्य सहसम्बन्ध का अध्ययन',
    journal: 'Shiksha Shodh Manthan : A Half Yearly Bilingual Peer Reviewed Journal of Education',
    type: 'Peer-Reviewed',
    details: 'Year 1, Vol 1, No. 2, Oct 2015, ISSN No: 2395-728X, Page: 197-206.',
    link: '/read/adjustment-emotional-intelligence-study-hindi',
  }
]

export const bookChapters: BookChapter[] = [
  {
    id: 1,
    chapterTitle: 'Encouraging Entrepreneurial Mindsets: Entrepreneurship Education Through Creative Frameworks',
    bookTitle: 'Entrepreneurial Solutions for Global Challenges (Web of Science)',
    publisher: 'Cambridge Scholar Publishing Lady Stephenson Library, Newcastle upon Tyne NE6 2PA, United Kingdom (International)',
    year: 2026,
    isbn: '978-1-0364-7406-5',
    role: 'Corresponding Author',
  },
  {
    id: 2,
    chapterTitle: 'OSHO',
    bookTitle: 'आधुनिक भारत के महान विचारक',
    publisher: 'Rachnakar Publishing House, New Delhi',
    year: 2025,
    isbn: '978-93-49-755-13-0',
    role: 'Co-Author',
    link: '/read/nep-locality-gender',
  },
  {
    id: 3,
    chapterTitle: 'साम्ययोगी आचार्य विनोबा भावे',
    bookTitle: 'भारतीय शिक्षा एवं आचार्य परम्परा',
    publisher: 'कालिंदी प्रकाशन, आजमगढ़ उ०प्र०',
    year: 2025,
    isbn: '978-81-979932-6-8',
    role: 'Co-Author',
    pages: '119 - 128',
    link: '/read/cognitive-load-ai',
  },
  {
    id: 3,
    chapterTitle: 'The Emotional Lives of Living Beings: Understanding Human Feeling',
    bookTitle: 'Feel to Heal: The Transformative Power of Emotions',
    publisher: 'Book River Publishers, New Delhi (National)',
    year: 2024,
    isbn: '978-9368847878',
    role: 'Co-Author',
    link: '/read/e-resource-satisfaction',
  },
  {
    id: 4,
    chapterTitle: 'Examine the NEP’s Initiatives for Improving the Quality of Education India',
    bookTitle: 'Navigating NEP 2020 Strategic Implementation and Future Challenges',
    publisher: 'Luit & Pine Publications, Noida, UP (National)',
    year: 2024,
    isbn: '978-81-97420-99-8',
    role: 'Co-Author',
    link: '/read/game-based-learning',
  },
  {
    id: 5,
    chapterTitle: 'Future Proofing Education: The Critical Role of ICT in Bridging the Global Educational Gap',
    bookTitle: 'Role of ICT & Educational Technology in Higher Education',
    publisher: 'Surya Multidisciplinary Publications, Gonda UP (National)',
    year: 2024,
    isbn: '978-81-972279-7-4',
    role: 'Co-Author',
    link: '/read/chatbot-assisted-learning',
  },
  {
    id: 6,
    chapterTitle: 'Trajectories of Collective Intelligence',
    bookTitle: 'Collective Intelligence: A Resource of Teacher, Parents and Policy Makers',
    publisher: 'BlueRose One Publication, New Delhi & London (International)',
    year: 2024,
    isbn: '978-93-6452-971-6',
    role: 'Co-Author',
    pages: '109 – 118',
    link: '/read/spiritual-intelligence-anxiety',
  },
  {
    id: 7,
    chapterTitle: 'Margin to Mainstream; Connecting the Unconnected',
    bookTitle: 'Diversity, Equity & Inclusion',
    publisher: 'BlueRose One Publication, New Delhi & London (International)',
    year: 2024,
    isbn: '978-93-6452-061-4',
    role: 'Co-Author',
    pages: '115 – 125',
    link: '/read/anxiety-undergraduates-review',
  },
  {
    id: 8,
    chapterTitle: 'Hybrid Education: Opportunities & Challenges',
    bookTitle: 'शिक्षा के विविध आयाम: अमृत काल के विशेष सन्दर्भ में',
    publisher: 'Rachanakar Publishing House, Shahdara, New Delhi (National)',
    year: 2023,
    isbn: '978-93-87932-49-4',
    role: 'First & Corresponding Author',
    pages: '27 – 35',
    link: '/read/cbcs-higher-education',
  },
  {
    id: 9,
    chapterTitle: 'हिंदी भाषी शोधार्थियों की भाषाई अभिव्यक्तसमस्याएँ एवं संभावित समाधान : कानपुर विश्वविद्यालय के विशेष संदर्भ में (सन्दर्भ में)',
    bookTitle: 'Education through Indian Languages: Challenges & Opportunities',
    publisher: 'Blue Duck Publication, Sri Nagar, Jammu & Kashmir (National)',
    year: 2023,
    isbn: '978-81-19463-68-8',
    role: 'Author',
    pages: '180 – 193',
    link: '/read/vocational-interest-study',
  },
  {
    id: 10,
    chapterTitle: 'Untying the Mental Knots with Non-Directive Counselling',
    bookTitle: 'Educational Thoughts and Issues',
    publisher: 'Homage Publication, New Delhi (National)',
    year: 2022,
    isbn: '978-93-84984-78-6',
    role: 'Author',
    pages: '32 – 40',
    link: '/read/neuroeducation-landscape',
  },
  {
    id: 11,
    chapterTitle: 'The Framework of Global Research-Oriented Utility Platforms GROUP: An Awareness Scale',
    bookTitle: 'Educational Thoughts and Issues',
    publisher: 'Homage Publication, New Delhi (National)',
    year: 2022,
    isbn: '978-93-84984-78-6',
    role: 'Author',
    pages: '68 – 76',
    link: '/read/news-framing-student-perceptions',
  }
]

export const inviteeLectures: InviteeLecture[] = [
  {
    id: 1, topic: 'AI as a Force Multiplier: Practical Applications of Artificial Intelligence for Military Leadership and Administrative Excellence', event: 'Specialized Interactive Session conducted for Senior Army Officers', organizer: 'Sikh Light Infantry Regimental Centre Fatehgarh UP, at Conference Hall', date: '08 August 2026'
  },
  {
    id: 2, topic: 'Empowering Army Families through Online and Distance Education: Building Futures beyond Uniform', event: 'Awareness and Orientation Programme', organizer: 'Army Wives Welfare Association (AWWA), Sikh Light Infantry Regimental Centre Fatehgarh UP', date: '06 August 2026'
  },
  {
    id: 3, topic: 'Mission Education: Leveraging Online and Distance Learning for Career Progression and Life Long Professional Development', event: 'Professional interaction session for Junior Commissioned Officers (JCOs) and Other Ranks', organizer: 'Sikh Light Infantry Regimental Centre Fatehgarh UP at KSI Auditorium', date: '06 August 2026'
  },
  {
    id: 4, topic: 'Outcome-Based Education (OBE): Designing Effective Course Outcomes (COs) and Program Outcomes (POs) for Quality Assurance', event: 'Workshop on "CO-PO and its Mapping"', organizer: 'Maharana Pratap Group of Institutions, Kanpur UP', date: '26 May 2026'
  },
  {
    id: 5, topic: 'CO-PO Mapping, Attainment Calculation and NBA Documentation: Practical Strategies for Outcome Assessment', event: 'Workshop on "CO-PO and its Mapping"', organizer: 'Maharana Pratap Group of Institutions, Kanpur UP', date: '26 May 2026'
  },
  {
    id: 6, topic: 'Statistical Inference and Hypothesis Testing for Public Health Research: Foundations of Evidence-Based Decision Making', event: 'MPH (Master of Public Health) programme', organizer: 'Department of Public Health, School of Arts, Humanities and Social Sciences CSJM University, Kanpur', date: '27 April 2026'
  },
  {
    id: 7, topic: 'Hypothesis Testing and Statistical Analysis in Public Health: Parametric and Non-Parametric Approaches', event: 'MPH (Master of Public Health) programme', organizer: 'Department of Public Health, School of Arts, Humanities and Social Sciences CSJM University, Kanpur', date: '29 April 2026'
  },
  {
    id: 8, topic: 'Applied Biostatistics for Public Health Research: Correlation Analysis, Interpretation and Research Applications', event: 'MPH (Master of Public Health) programme', organizer: 'Department of Public Health, School of Arts, Humanities and Social Sciences CSJM University, Kanpur', date: '30 April 2026'
  },
  {
    id: 6, topic: 'AI Tools for Data Analysis', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '10 February 2026', link: '/read/nep-locality-gender'
  },
  {
    id: 7, topic: 'Role of AI in Modern Research, AI Powered Academic Search Engines', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '09 February 2026', link: '/read/cognitive-load-ai'
  },
  {
    id: 8, topic: 'Constraints on Social Change In India', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '15 January 2026', link: '/read/e-resource-satisfaction'
  },
  {
    id: 9, topic: 'Blended Learning in Education', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '07 January 2026', link: '/read/game-based-learning'
  },
  {
    id: 10, topic: 'Precision and Proof: Advancing through Experimental Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Atal Bihari Bajpai School of Legal Studies', date: '23 December 2025', link: '/read/chatbot-assisted-learning'
  },
  {
    id: 11, topic: 'Capturing Reality: Mastering the Art of Descriptive Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Atal Bihari Bajpai School of Legal Studies', date: '22 December 2025', link: '/read/spiritual-intelligence-anxiety'
  },
  {
    id: 12, topic: 'Quality Management in Education', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '17 December 2025', link: '/read/anxiety-undergraduates-review'
  },
  {
    id: 13, topic: 'The Researcher\'s Spectrum: Decoding Diverse Types of Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Atal Bihari Bajpai School of Legal Studies', date: '16 December 2025', link: '/read/cbcs-higher-education'
  },
  {
    id: 14, topic: 'Foundation of Enquiry: Navigating the Basics of Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Atal Bihari Bajpai School of Legal Studies', date: '15 December 2025', link: '/read/vocational-interest-study'
  },
  {
    id: 15, topic: 'Blooms Taxonomy of Instructional Objectives', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '20 November 2025', link: '/read/neuroeducation-landscape'
  },
  {
    id: 16, topic: 'Foundation of Knowing: The Epistemic root of Research', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '18 November 2025', link: '/read/news-framing-student-perceptions'
  },
  {
    id: 17, topic: 'Statistics in Behavioural Sciences: Transforming Psychological Data into Meaningful Evidence', event: 'M.A. Clinical Psychology programme', organizer: 'Department of Clinical Psychology, School of Arts, Humanities and Social Sciences CSJM University, Kanpur', date: '18 November 2025'
  },
  {
    id: 18, topic: 'Beyond Correlation: Mastering Multiple Regression for Behavioural and Clinical Research', event: 'M.A. Clinical Psychology programme', organizer: 'Department of Clinical Psychology, School of Arts, Humanities and Social Sciences CSJM University, Kanpur', date: '14 October 2025'
  },
  {
    id: 19, topic: 'Code of Conduct', event: 'Workshop on Value Education', organizer: 'IQAC and Value Education Cell, Christ Church Post Graduate College, Kanpur, UP', date: '24 September 2025', link: '/read/educational-systematic-research'
  },
  {
    id: 20, topic: 'Database Literacy', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, University of Lucknow, Lucknow UP', date: '29 May 2025', link: '/read/challenges-implementing-chatgpt'
  },
  {
    id: 21, topic: 'Tools for Ethical and Efficient Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, University of Lucknow, Lucknow UP', date: '29 May 2025', link: '/read/spiritual-intelligence-review'
  },
  {
    id: 22, topic: 'Understanding & Formulating Hypothesis', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Atal Bihari Bajpai School of Legal Studies', date: '19 May 2025', link: '/read/environmental-concerns-education'
  },
  {
    id: 23, topic: 'Experimental Designs: Types and Validation', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, CSJM University, Kanpur', date: '06 May 2025', link: '/read/low-self-esteem-holistic-education'
  },
  {
    id: 24, topic: 'Experimental Research: Conceptual Understanding', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, CSJM University, Kanpur', date: '05 May 2025', link: '/read/diabetic-wound-healing-nanomembrane'
  },
  {
    id: 25, topic: 'Co-Chair for Technical Session', event: 'International Conference on "A Multidisciplinary Approach to Sustainability: A Holistic View towards the Future"', organizer: 'School of Arts, Humanities and Social Sciences & School of Teacher Education, CSJM University Kanpur UP', date: '29 April 2025', link: '/read/women-studies-trends'
  },
  {
    id: 26, topic: 'Empowering Educators: The State of Teacher Education & Competencies in India', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Teacher Education, Dayanand Womens Training (DWT) PG College Kanpur UP', date: '25 April 2025', link: '/read/value-education-trends'
  },
  {
    id: 27, topic: 'Teacher Education: Theory & Practice', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Teacher Education, Dayanand Womens Training (DWT) PG College Kanpur UP', date: '24 April 2025', link: '/read/tracing-cbcs-challenges'
  },
  {
    id: 28, topic: 'The Roadmap to Success: Mastering PO-CO Mapping & Outcomes', event: 'Workshop on "CO-PO and its Mapping"', organizer: 'Maharana Pratap Group of Institutions, Kanpur UP', date: '05 April 2025', link: '/read/happiness-quotient-study'
  },
  {
    id: 29, topic: 'From Theory to Clarity: Understanding PO-CO Inside Out', event: 'Workshop on "CO-PO and its Mapping"', organizer: 'Maharana Pratap Group of Institutions, Kanpur UP', date: '05 April 2025', link: '/read/youth-voice-journal-2023'
  },
  {
    id: 30, topic: 'Chair for Technical Session', event: 'International Conference on "A Multidisciplinary Approach to Sustainability: A Holistic View towards the Future"', organizer: 'School of Arts, Humanities and Social Sciences & School of Teacher Education, CSJM University Kanpur UP', date: '02 March 2024', link: '/read/krishnamurti-philosophy-fear-hindi'
  },
  {
    id: 31, topic: 'Types of Research: Experimental Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, CSJM University, Kanpur', date: '24 February 2025', link: '/read/facing-fears-krishnamurti'
  },
  {
    id: 32, topic: 'Branches of Research: Basic Research (Pure research), Applied Research, Action Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, CSJM University, Kanpur', date: '18 February 2025', link: '/read/dealing-slow-fast-learners'
  },
  {
    id: 33, topic: 'Research: Meaning, Nature, Scope, Characteristics', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, CSJM University, Kanpur', date: '17 February 2025', link: '/read/tagore-ideological-insight-hindi'
  },
  {
    id: 34, topic: 'Artificial Intelligence and Pedagogical Innovations', event: 'Lecture Series on "Artificial Intelligence Integration in Pedagogical Practices"', organizer: 'Balram Krishan Academy, Atrauli, Mohanlalganj Lucknow – 226301 UP', date: '26 October 2024', link: '/read/industry-academia-collaboration'
  },
  {
    id: 35, topic: 'Use of Artificial Intelligence in the Process of Research', event: 'Lecture Series on "Artificial Intelligence Integration in Pedagogical Practices"', organizer: 'Balram Krishan Academy, Atrauli, Mohanlalganj Lucknow – 226301 UP', date: '25 October 2024', link: '/read/reflective-practices-krishnamurti'
  },
  {
    id: 36, topic: 'Artificial Intelligence Tools and Educational Canvas', event: 'Lecture Series on "Artificial Intelligence Integration in Pedagogical Practices"', organizer: 'Balram Krishan Academy, Atrauli, Mohanlalganj Lucknow – 226301 UP', date: '24 October 2024', link: '/read/aurobindo-ideological-implications'
  },
  {
    id: 37, topic: 'Programme Outcomes and Course Outcomes: Formulation & Mapping', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'Maharana Pratap Group of Institutions, Kanpur UP', date: '15 July 2024', link: '/read/swami-vivekananda-reflections'
  },
  {
    id: 38, topic: 'ICT Mediated Teaching Methods', event: 'Faculty Development Programme on "Effective teaching through Modern Technologies"', organizer: 'Academic and Administrative Development Centre (AIU-IU-AADC) Integral University Lucknow', date: '07 March 2024', link: '/read/global-trends-learning-styles'
  },
  {
    id: 39, topic: 'Co-chair for Technical Session', event: 'ICSSR Sponsored National Seminar on "Reconditioning Indian Tradition and Culture through NEP 2020: Multilingual, Multicultural and Multidisciplinary"', organizer: 'Department of Lifelong Learning and Extension, CSJM University Kanpur UP', date: '02 March 2024', link: '/read/emotional-intelligence-teacher-education'
  },
  {
    id: 40, topic: 'Skills of Measurement; Concept and Levels', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '09 February 2024', link: '/read/environmental-moral-reasoning'
  },
  {
    id: 41, topic: 'Hypothesis; Concept Types & Formulation', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '09 February 2024', link: '/read/emotional-intelligence-academic-achievement-hindi'
  },
  {
    id: 42, topic: 'Planning of Research; Identification, Selection & Formulation', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '07 February 2024', link: '/read/focus-group-discussion-qualitative'
  },
  {
    id: 43, topic: 'Nature and Limitations of Research Process', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '02 February 2024', link: '/read/academic-achievement-adjustment-study-hindi'
  },
  {
    id: 44, topic: 'Foundations of Research: Meaning, Concept, Purpose, Scope & Characteristics', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '31 January 2024', link: '/read/adjustment-emotional-intelligence-study-hindi'
  },
  {
    id: 45, topic: 'An Orientation Programme on Pre-Ph.D. Course Work', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '31 January 2024'
  },
  {
    id: 46, topic: 'Teaching-Learning Pedagogy', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'School of Health Sciences and School of Hotel Management & IQAC CSJM University Kanpur UP', date: '04 July 2023'
  },
  {
    id: 47, topic: 'Teaching-Learning Pedagogy', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'School of Life Sciences and Biotechnology & IQAC CSJM University Kanpur UP', date: '03 July 2023'
  },
  {
    id: 48, topic: 'Teaching-Learning Pedagogy', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'School of Teacher Education, School of Languages and School of Advanced Agriculture, Science and Technology & IQAC, CSJM University Kanpur UP', date: '02 July 2023'
  },
  {
    id: 49, topic: 'Teaching-Learning Pedagogy', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'School of Pharmaceutical Sciences and School of Creative and Performing Arts & IQAC, CSJM University Kanpur UP', date: '30 June 2023'
  },
  {
    id: 50, topic: 'Teaching-Learning Pedagogy', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'School of Arts, Humanities & Social Sciences & IQAC CSJM University Kanpur UP', date: '28 June 2023'
  },
  {
    id: 51, topic: 'Teaching-Learning Pedagogy', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'School of Engineering & Technology and School of Basic Sciences & IQAC CSJM University Kanpur UP', date: '27 June 2023'
  },
  {
    id: 52, topic: 'Teaching-Learning Pedagogy', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'School of Business Management and Atal Bihari Bajpai School of Legal Studies & IQAC CSJM University Kanpur UP', date: '26 June 2023'
  },
  {
    id: 53, topic: 'Nature and Limitations of Research Process', event: 'Pre-Ph.D. Course Work 2022-23', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '08 September 2022'
  },
  {
    id: 54, topic: 'Foundations of Research: Meaning, Concept, Purpose, Scope & Characteristics', event: 'Pre-Ph.D. Course Work 2022-23', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '03 September 2022'
  },
  {
    id: 55, topic: 'An Orientation Programme on Pre-Ph.D. Course Work', event: 'Pre-Ph.D. Course Work 2022-23', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '02 September 2022'
  },
  {
    id: 56, topic: 'Preparation of Project Report', event: 'Two Days Webinar on "Fundamentals of Project Report Writing"', organizer: 'Cult the Cultural Society, Lucknow', date: '13 June 2021'
  },
  {
    id: 57, topic: 'Basics of Project Report Writing', event: 'Two Days Webinar on "Fundamentals of Project Report Writing"', organizer: 'Cult the Cultural Society, Lucknow', date: '09 June 2021'
  },
  {
    id: 58, topic: 'Covid-19 Vaccine – A Ray of Hope', event: 'One-Day Seminar on "Covid – 19 Vaccination Drive"', organizer: 'Balram Krishan Academy, Lucknow', date: '14 April 2021'
  },
  {
    id: 59, topic: 'Sri Aurobindo International Centre of Education – An Example of Sri Aurobindo’s Ideology', event: 'One Day Seminar on "श्री माँ श्री अरविन्द की शिक्षा के विविध आयाम"', organizer: 'Bharatiya Shiksha Shodh Sansthan, Lucknow', date: '13 March 2021'
  },
  {
    id: 60, topic: 'Basics of Project Report Writing (Online)', event: 'Two-Day Webinar on "Fundamentals of Project Report Writing"', organizer: 'Cult the Cultural Society (CTCS), Lucknow', date: '09 June 2021'
  },
  {
    id: 61, topic: 'Preparation of Project Report (Online)', event: 'Two Days Webinar on "Fundamentals of Project Report Writing"', organizer: 'Cult the Cultural Society (CTCS), Lucknow', date: '13 June 2021'
  },
  {
    id: 62, topic: 'B.Ed. Internship Programme', event: 'Special Lecture', organizer: 'Charak Institute of Education (Affiliated with University of Lucknow), Lucknow', date: '27 April 2019'
  },
  {
    id: 63, topic: 'Formulation of Hypothesis & Operational Definition of Variables', event: 'Workshop on "Development of Research Proposal"', organizer: 'Department of Education, University of Lucknow, Lucknow', date: '08 to 15 February 2019'
  },
  {
    id: 64, topic: 'Development of Writing Instructional Objectives, Creating Set and Introducing the Lesson', event: 'Workshop on "Development of Micro Teaching Skills"', organizer: 'Department of Education, University of Lucknow, Lucknow', date: '24 to 29 December 2018'
  },
  {
    id: 65, topic: 'Development of Stimulus Variation Skill in Prospective Teachers', event: 'Seven Day Workshop titled "Development of Teaching Skills in Prospective Teachers" for B.Ed. Students', organizer: 'Department of Education, University of Lucknow, Lucknow', date: '11th to 18th January 2018'
  },
  {
    id: 66, topic: 'Construction of A Tool: Plan and Procedure', event: 'Seven Day Workshop titled "Developing A Good Research Tool" for M.A. & M.Ed. Students', organizer: 'Department of Education, University of Lucknow, Lucknow', date: '11th to 18th January 2018'
  },
  {
    id: 67, topic: 'Action Research', event: 'Special Lecture', organizer: 'Basudev Degree College, Affiliated with the University of Lucknow', date: '17 February 2017'
  },
  {
    id: 68, topic: 'Facing Realities and Improve Teaching through Action Research', event: 'Special Lecture for Teacher Trainees', organizer: 'Block Resource Center, Block Chittaura (Deeha), District Bahraich UP', date: '14/06/2016'
  },
  {
    id: 69, topic: 'Measurement and Evaluation in Education', event: 'Special Lecture', organizer: 'Department of Education, University of Lucknow, Lucknow', date: '05 May 2016'
  },
  {
    id: 70, topic: 'Statistical Applications in Education', event: 'Special Lecture', organizer: 'Department of Education, University of Lucknow, Lucknow', date: '21 April 2016'
  },
  {
    id: 71, topic: 'Research Methods in Education', event: 'Special Lecture', organizer: 'Department of Education, University of Lucknow, Lucknow', date: '09 April 2016'
  },
  {
    id: 72, topic: 'Three Days Orientation Programme for UGC-NET/JRF in Education', event: 'Orientation Programme', organizer: 'Department of Education, University of Lucknow, Lucknow', date: '05/04/2016 to 07/04/2016'
  },
  {
    id: 73, topic: 'Certificate Programme for the Professional Development of Primary Teachers (CPPDPT) KVS', event: 'Workshop', organizer: 'IGNOU at Kendriya Vidyalaya AMC, Lucknow', date: '23 Nov. To 07 Dec 2014'
  },
  {
    id: 74, topic: 'Workshop of B. Ed. Course', event: 'Workshop for the sessions 2013-14, 2014-15 & 2015 -16', organizer: 'Department of Education, University of Lucknow, Lucknow conducted by IGNOU', date: '2013-2016'
  }
]

export const fdpsAndWorkshops: FdpWorkshop[] = [
  {
    id: 1, course: 'Applications of Artificial Intelligence in Research & Education', organizer: 'Institute of Advance Studies in Education (Deemed to be University) Rajasthan', from: '07 April 2026', to: '13 April 2026',
    link: '/read/nep-locality-gender',
  },
  {
    id: 2, course: 'AI Innovation Workshop', organizer: 'AcadLearn and Department of Education, CSJM University Kanpur UP', from: '09 March 2026', to: '15 March 2026',
    link: '/read/cognitive-load-ai',
  },
  {
    id: 3, course: 'Pedagogy 5.0: Advancing Teaching & Research with AI and Technology', organizer: 'Department of Education, CSJM University Kanpur UP', from: '01 September 2025', to: '05 September 2025',
    link: '/read/e-resource-satisfaction',
  },
  {
    id: 4, course: 'Two Week FDP on Fostering Expertise AI Agent Mastery', organizer: 'Chhatrapati Shahu Ji Maharaj University Kanpur UP & Gignaati, AI Academy', from: '16 June 2025', to: '12 July 2025',
    link: '/read/game-based-learning',
  },
  {
    id: 5, course: 'One Week FDP on Empowering Higher Education Institutions in Technology-enabled Learning and Blended Learning', organizer: 'Association of Indian University (AIU), Integral University, Aryabhatta Knowledge University & C.O.L. CEMCA', sponsor: 'Academic and Administrative Development Centre (AIU-IU AADC)', from: '07 April 2025', to: '12 April 2025',
    link: '/read/chatbot-assisted-learning',
  },
  {
    id: 6, course: 'One Week Capacity Development Programme on Innovation, Incubation and Entrepreneurship', organizer: 't-Hub Government of Telangana', from: '10 March 2025', to: '13 March 2025',
    link: '/read/spiritual-intelligence-anxiety',
  },
  {
    id: 7, course: 'One Week FDP on Statistical Analysis for Research: Techniques & Software', organizer: 'Association of Indian University (AIU) & Integral University', sponsor: 'Academic and Administrative Development Centre (AIU-IU AADC)', from: '21 November 2024', to: '26 November 2024',
    link: '/read/anxiety-undergraduates-review',
  },
  {
    id: 8, course: 'One Week FDP on Artificial Intelligence in Teaching and Research Paper Writing', organizer: 'Association of Indian University (AIU) & Integral University', sponsor: 'Academic and Administrative Development Centre (AIU-IU AADC)', from: '26 June 2024', to: '30 June 2024',
    link: '/read/cbcs-higher-education',
  },
  {
    id: 9, course: 'Two Weeks Refresher Course in Education', organizer: 'Teaching Learning Centre, Ramanujan College, University of Delhi, India', sponsor: 'Ministry of Education, Government of India', from: '31 January 2024', to: '06 February 2024',
    link: '/read/vocational-interest-study',
  },
  {
    id: 10, course: 'One Week FDP on ICT for Teaching and Learning', organizer: 'Teaching Learning Centre, Ramanujan College, University of Delhi, India', sponsor: 'Ministry of Education, Government of India', from: '17 October 2023', to: '23 October 2023',
    link: '/read/neuroeducation-landscape',
  },
  {
    id: 11, course: '4 Week Faculty Induction/Orientation Programme', organizer: 'Teaching Learning Centre, Ramanujan College, University of Delhi, India', sponsor: 'Ministry of Education, Government of India', from: '20 January 2023', to: '18 February 2023',
    link: '/read/news-framing-student-perceptions',
  },
  {
    id: 12, course: 'One Week Online Faculty Development Programme on Research Paper Writing for High Index Journal', organizer: 'Institute of Advanced Studies in Education (Deemed to be University), Sardarshahr, Rajasthan', from: '24 May 2021', to: '30 May 2021',
    link: '/read/educational-systematic-research',
  },
  {
    id: 13, course: 'Online Workshop on Teaching-Learning Through Moodle', organizer: 'Mahatma Gandhi Central University, Bihar & Babasaheb Bhimrao Ambedkar University, Lucknow UP', from: '23 May 2020', to: '23 May 2020',
    link: '/read/challenges-implementing-chatgpt',
  },
  {
    id: 14, course: 'National Workshop on Anti-Plagiarism in Research', organizer: 'Integral University, Lucknow', sponsor: 'Human Resource Development Centre (HRDC)', from: '03 August 2019', to: '03 August 2019',
    link: '/read/spiritual-intelligence-review',
  },
  {
    id: 15, course: 'National Workshop on How to Prepare Research Proposal', organizer: 'International Researchers Journal', sponsor: 'S.R.S. Publications and Distributions', from: '10 December 2017', to: '10 December 2017',
    link: '/read/environmental-concerns-education',
  },
  {
    id: 16, course: 'Orientation Programme on Qualitative Methods in Educational Research', organizer: 'Bhartiya Shiksha Shodh Sansthan, Lucknow', from: '24 April 2017', to: '01 May 2017',
    link: '/read/low-self-esteem-holistic-education',
  },
  {
    id: 17, course: 'Orientation Programme on Application of R Software in Statistical Analysis of Data', organizer: 'Bhartiya Shiksha Shodh Sansthan, Lucknow', from: '02 February 2017', to: '08 February 2017',
    link: '/read/diabetic-wound-healing-nanomembrane',
  },
  {
    id: 18, course: 'National Workshop on Research Methodology', organizer: 'Babasaheb Bhimrao Ambedkar University, Lucknow', from: '11 January 2017', to: '25 January 2017',
    link: '/read/women-studies-trends',
  },
  {
    id: 19, course: 'Research Methodology Programme', organizer: 'Human Resource Development Centre, University of Lucknow', sponsor: 'UGC', from: '28 November 2016', to: '30 November 2016',
    link: '/read/value-education-trends',
  },
  {
    id: 20, course: 'Workshop on Swami Vivekananda and Human Excellence', organizer: 'Department of Education, University of Lucknow', sponsor: 'MHRD & ICPR', from: '01 May 2014', to: '07 May 2014',
    link: '/read/tracing-cbcs-challenges',
  }
]

export const committees: CommitteeRole[] = [
  {
    id: 1, name: 'State Level: Regional Quality Assurance Cell (RQAC)', role: 'Member', year: '2024',
    link: '/read/nep-locality-gender',
  },
  {
    id: 2, name: 'Student Welfare Schemes Committee', role: 'Member', year: '2024',
    link: '/read/cognitive-load-ai',
  },
  {
    id: 3, name: 'Ph.D. Entrance Exam Committee', role: 'Member', year: '2024',
    link: '/read/e-resource-satisfaction',
  },
  {
    id: 4, name: 'Confidential Correction Committee', role: 'Member', year: '2024',
    link: '/read/game-based-learning',
  },
  {
    id: 5, name: 'Anti Ragging Squad', role: 'Member', year: '2024',
    link: '/read/chatbot-assisted-learning',
  },
  {
    id: 6, name: 'IQAC Scrutiny Committee', role: 'Member', year: '2024',
    link: '/read/spiritual-intelligence-anxiety',
  },
  {
    id: 7, name: 'Non-Teaching Scrutiny Committee', role: 'Member', year: '2024',
    link: '/read/anxiety-undergraduates-review',
  },
  {
    id: 8, name: 'Institute Innovation Committee', role: 'Member', year: '2024',
    link: '/read/cbcs-higher-education',
  },
  {
    id: 9, name: 'Constituent College Screening Committee', role: 'Coordinator', year: '2023',
    link: '/read/vocational-interest-study',
  },
  {
    id: 10, name: 'Affiliation/ Inspection Committee', role: 'Member', year: '2023',
    link: '/read/neuroeducation-landscape',
  },
  {
    id: 11, name: 'Answer Key Jumbling Committee', role: 'Member', year: '2023',
    link: '/read/news-framing-student-perceptions',
  },
  {
    id: 12, name: 'NAAC Steering Committee', role: 'Member', year: '2022',
    link: '/read/educational-systematic-research',
  },
  {
    id: 13, name: 'NAAC Core Committee', role: 'Member', year: '2022',
    link: '/read/challenges-implementing-chatgpt',
  },
  {
    id: 14, name: 'Answer Key Jumbling Committee (Second Term)', role: 'Member', year: '2022',
    link: '/read/spiritual-intelligence-review',
  },
  {
    id: 15, name: 'Answer Book Tender Committee', role: 'Member', year: '2022',
    link: '/read/environmental-concerns-education',
  },
  {
    id: 16, name: 'Board of Studies, Department of Education CSJMU', role: 'Member', year: '2022',
    link: '/read/low-self-esteem-holistic-education',
  },
  {
    id: 17, name: 'Government Degree College, Lotna Purwa Unnao, Handover Committee', role: 'Co-coordinator', year: '2022',
    link: '/read/diabetic-wound-healing-nanomembrane',
  },
  {
    id: 18, name: 'Digital Marketing Committee', role: 'Member', year: '2022',
    link: '/read/women-studies-trends',
  },
  {
    id: 19, name: 'Curriculum Revision Committee (M.Ed.)', role: 'Member', year: '2024 (Dept Level)',
    link: '/read/value-education-trends',
  },
  {
    id: 20, name: 'Internal Academic Monitoring Committee', role: 'Coordinator', year: '2022 (Dept Level)',
    link: '/read/tracing-cbcs-challenges',
  },
  {
    id: 21, name: 'Orientation and Admission Committee', role: 'Member', year: '2022 (Dept Level)',
    link: '/read/happiness-quotient-study',
  },
  {
    id: 22, name: 'Internship Management Committee', role: 'Member', year: '2022 (Dept Level)',
    link: '/read/youth-voice-journal-2023',
  },
  {
    id: 23, name: 'Departmental Quality Assurance Cell', role: 'Member', year: '2022 (Dept Level)',
    link: '/read/krishnamurti-philosophy-fear-hindi',
  }
]

export const administrativeResponsibilities: AdminResponsibility[] = [
  {
    id: 1, responsibility: 'Deputy Director (Technical), Dronacharya Centre for Online and Distance Education (D-CODE), Centre for Distance and Online Education, CSJM University Kanpur UP', date: '06.08.2025 to present',
    link: '/read/nep-locality-gender',
  },
  {
    id: 2, responsibility: 'Observer, B.Ed. JEE 2025', date: '30.05.2025',
    link: '/read/cognitive-load-ai',
  },
  {
    id: 3, responsibility: 'Associate Chief Proctor, CSJM University Kanpur UP', date: '03.03.2025 to till date',
    link: '/read/e-resource-satisfaction',
  },
  {
    id: 4, responsibility: 'Co-coordinator, Ph.D. Entrance Examination', date: '2024 – 2025',
    link: '/read/game-based-learning',
  },
  {
    id: 5, responsibility: 'Observer, B.Ed. JEE 2024', date: '06.06.2024',
    link: '/read/chatbot-assisted-learning',
  },
  {
    id: 6, responsibility: 'Officiating Principal, Government Degree College Lotna Purwa Unnao', date: '01.06.2024 to 27.06.2024',
    link: '/read/spiritual-intelligence-anxiety',
  },
  {
    id: 7, responsibility: 'Programme Coordinator, Dronacharya Centre for Online and Distance Education (D-CODE), CSJM University Kanpur', date: '2024',
    link: '/read/anxiety-undergraduates-review',
  },
  {
    id: 8, responsibility: 'Nodal Officer, Pre-Ph.D. Course Work', date: '2023 – 2024',
    link: '/read/cbcs-higher-education',
  },
  {
    id: 9, responsibility: 'Member, Institute Innovation Council (IIC 6.0)', date: '15.03.2024',
    link: '/read/vocational-interest-study',
  },
  {
    id: 10, responsibility: 'Assistant Dean, Research & Development Cell, CSJM University Kanpur UP', date: '28.04.2023 to 28.02.2025',
    link: '/read/neuroeducation-landscape',
  },
  {
    id: 11, responsibility: 'Nodal Officer, Scholarship, Government Degree College Lotna Purwa Unnao', date: 'Since 2023',
    link: '/read/news-framing-student-perceptions',
  },
  {
    id: 12, responsibility: 'Observer B.Ed. JEE 2023', date: '10.06.2023',
    link: '/read/educational-systematic-research',
  },
  {
    id: 13, responsibility: 'Coordinator, RM-B2 Group, Pre-Ph.D. Course Work', date: '2022 - 2023',
    link: '/read/challenges-implementing-chatgpt',
  },
  {
    id: 14, responsibility: 'Member, Board of Studies, Department of Education CSJMU', date: 'Since 2022',
    link: '/read/spiritual-intelligence-review',
  },
  {
    id: 15, responsibility: 'In-charge, Departmental Website', date: 'Since 2022',
    link: '/read/environmental-concerns-education',
  },
  {
    id: 16, responsibility: 'In-charge, Department Alumni Association', date: 'Since 2022',
    link: '/read/low-self-esteem-holistic-education',
  },
  {
    id: 17, responsibility: 'Coordinator, Government Degree College Lotna Purwa Unnao', date: '07.06.2022 to 18.04.2026',
    link: '/read/diabetic-wound-healing-nanomembrane',
  },
  {
    id: 18, responsibility: 'Observer, B.Ed. JEE 2022', date: '02.07.2022',
    link: '/read/women-studies-trends',
  }
]

export const coCurricularActivities: CoCurricularActivity[] = [
  {
    id: 1, description: 'Pedagogy 5.0: Advancing Teaching & Research with AI and Technology', from: '01 September 2025', to: '05 September 2025',
    link: '/read/nep-locality-gender',
  },
  {
    id: 2, description: 'Student Entrepreneurship Training (SET) Bootcamp 2025', from: '26 May 2025', to: '31 May 2025',
    link: '/read/cognitive-load-ai',
  },
  {
    id: 3, description: 'One Day Orientation Programme on Startup Shiksha with the Collaboration of CSJM Innovation Foundation (CSJMIF)', from: '11 April 2025', to: '11 April 2025',
    link: '/read/e-resource-satisfaction',
  },
  {
    id: 4, description: 'One Day Orientation Programme on NTA-NET Preparation Under the State Government Scheme "Mukhyamantri Abhyuday Yojna"', from: '07 April 2025', to: '07 April 2025',
    link: '/read/game-based-learning',
  },
  {
    id: 5, description: 'Two Day Lecture Series on Ethics in Writing Dissertation', from: '20 February 2025', to: '21 February 2025',
    link: '/read/chatbot-assisted-learning',
  },
  {
    id: 6, description: 'One Day Orientation Ph.D. Orientation Programme', from: '08 February 2025', to: '08 February 2025',
    link: '/read/spiritual-intelligence-anxiety',
  },
  {
    id: 7, description: 'Organization of Debate and Speech Contest on 148th Birth Anniversary of Sardar Vallabh Bhai Patel and National Unity Day', from: '14 November 2024', to: '14 November 2024',
    link: '/read/anxiety-undergraduates-review',
  },
  {
    id: 8, description: 'Two Week Workshop on "Understanding of Research Methodology; Paradigms, Practices and Processes"', from: '14 October 2024', to: '27 October 2025',
    link: '/read/cbcs-higher-education',
  },
  {
    id: 9, description: 'Ten Days Workshop on "Understanding of Research Methodology; Paradigms, Practices and Processes"', from: '24 November 2023', to: '03 December 2023',
    link: '/read/vocational-interest-study',
  },
  {
    id: 10, description: 'One Day National Conference on Understanding Learning Disability: Strategical Review, Practices & Processes', from: '28 October 2023', to: '28 October 2023',
    link: '/read/neuroeducation-landscape',
  }
]

export const memberships: string[] = [
  'Lifetime Membership of the Indian Association of Teacher Educators (IATE) w.e.f. September 29/2025, Membership ID: V2504334',
  'Lifetime Membership of the Indian Academic Researchers Association (IARA) w.e.f. October 07/2025, Membership No – 1588/2025',
  'Chief Editor, NOUS:- A Half-yearly Journal of Education, Arts, Humanities and Social Sciences',
  'Bhartiya Shiksha Shodh Sansthan – Receipt No.-035, Date-02/02/2017',
  'In Editorial Board of Research Journey in Education- A Bilingual Annual Journal of Education (ISSN-2321-256X, Reg. No: 165213/2011)',
  'In Editorial Board of Educational Metamorphosis: A Half-yearly Refereed & Peer-reviewed International Journal of Education, ISSN: 2583-4754'
]

export interface ResearchNewsItem {
  id: number
  title: string
  source: string
  date: string
  desc: string
  category: 'media-coverage' | 'digital-media'
  subcategory: string
  link?: string
  mediaType: 'Newspaper' | 'University' | 'Press Release' | 'TV' | 'Interview' | 'Podcast'
  image?: string
  images?: string[]
  imageOnly?: boolean
}


export const researchNewsData: ResearchNewsItem[] = [
  {
    id: 22,
    title: 'एआई से पढ़ाई के साथ शिक्षक भी जरूरी',
    source: 'My City Reporter (Kanpur)',
    date: '28 August 2026',
    desc: 'सीएसजेएमयू ने कई छात्रों पर कराया अध्ययन, पढ़ाई का फॉर्मूला किया गया तैयार। शिक्षा विभाग के डॉ. विमल सिंह, अशोक कुमार यादव, अभिषेक कुमार मिश्रा व सूरज गुप्ता ने 2020-2025 तक कई अंतरराष्ट्रीय जर्नल का अध्ययन किया है। इससे निकले निष्कर्ष में पाया गया कि भविष्य की शिक्षा का रास्ता न पुरानी परंपराओं से होकर जाता है और न ही केवल आधुनिक तकनीक से। असली रास्ता दोनों के बेहतर तालमेल में है। जनरेटिव एआई विद्यार्थियों को उनकी जरूरत के अनुसार पढ़ने में मदद कर सकता है, परंतु तकनीक की अपनी सीमाएं हैं। मानवीय संवेदना, नैतिक मार्गदर्शन, वास्तविक शिक्षक-विद्यार्थी संबंध और जीवन मूल्यों का विकास केवल तकनीक के भरोसे नहीं छोड़ा जा सकता।',
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    mediaType: 'Newspaper',
    image: '/ai-padhai-shikshak-newspaper.jpg',
    imageOnly: false,
  },
  {
    id: 23,
    title: 'शिक्षक के साथ एआई से पढ़ाई का सफर होगा पूरा - The Journey Of Learning With Ai Alongside The Teacher Will Be Complete',
    source: 'Kanpur News',
    date: '28 August 2026',
    desc: 'छत्रपति शाहू जी महाराज विश्वविद्यालय (CSJMU), कानपुर के शिक्षा विभाग के डॉ. विमल सिंह एवं साथी शोधकर्ताओं द्वारा किया गया अध्ययन: शिक्षक के मार्गदर्शन और आर्टिफिशियल इंटेलिजेंस (Generative AI) के तालमेल से विद्यार्थियों के ज्ञानार्जन एवं व्यक्तित्व विकास का सफर सफलतापूर्वक पूरा होगा।',
    category: 'media-coverage',
    subcategory: 'Television Coverage',
    mediaType: 'TV',
    image: '/ai-padhai-shikshak-newspaper.jpg',
    link: 'https://share.google/nkicWYZQvvL4i9ORV',
    imageOnly: false,
  },
  {
    id: 20,
    title: 'रिसर्च, टीचिंग, इनोवेशन से जुड़ी उपलब्धियां एक ही प्लेटफॉर्म पर: सीएसजेएमयू ने एआई की मदद से बनाया पोर्टफोलियो, वीसी ने किया लांच',
    source: 'Inext (Kanpur)',
    date: '3 August 2026',
    desc: 'छत्रपति शाहू जी महाराज विश्वविद्यालय (CSJMU), कानपुर के डी-कोड (D-CODE) डिपार्टमेंट के डिप्टी डायरेक्टर डॉ. विमल सिंह ने अपना पर्सनल पोर्टफोलियो (www.drvimalsingh.in) विकसित किया है, जिसे एआई (आर्टिफिशियल इंटेलिजेंस) की मदद से तैयार किया गया है। इसे विश्वविद्यालय के कुलपति प्रो. विनय कुमार पाठक द्वारा लांच किया गया। इस वेबसाइट पर डॉ. सिंह के रिसर्च पेपर, पेटेंट, कॉपीराइट, ई-कंटेंट, वीडियो और शैक्षणिक उपलब्धियां एक ही स्थान पर उपलब्ध हैं। कुलपति ने इस पहल की सराहना करते हुए इसे शोधकर्ताओं और विद्यार्थियों के लिए प्रेरणास्रोत बताया।',
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    mediaType: 'Newspaper',
    image: '/portfolio-launch-newspaper.jpg',
    imageOnly: false,
  },
  {
    id: 21,
    title: 'जेन जी का मिजाज बताएगा डिजिटल इन्फ्लुएंस स्केल: सीएसजेएमयू के शिक्षा विभाग ने जेन जी पर शोधों का अध्ययन किया',
    source: 'My City Reporter (Kanpur)',
    date: '6 August 2026',
    desc: "छत्रपति शाहू जी महाराज विश्वविद्यालय (CSJMU), कानपुर के शिक्षा विभाग के असिस्टेंट प्रोफेसर डॉ. विमल सिंह और शोधकर्ताओं द्वारा जेन जी (Gen Z) के विचारों, व्यवहार, निर्णय क्षमता और सामाजिक दृष्टिकोण पर डिजिटल मीडिया के प्रभाव को मापने के लिए एक 'डिजिटल इन्फ्लुएंस स्केल' तैयार किया गया है। यह 38 प्रश्नों का एक वैज्ञानिक साइकोमेट्रिक उपकरण है जो युवाओं पर डिजिटल मीडिया के निर्भरता, इको चैंबर प्रवृत्ति, ऑनलाइन साथियों के प्रभाव और मानसिक लचीलेपन जैसे 10 प्रमुख आयामों का आकलन करेगा।",
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    mediaType: 'Newspaper',
    image: '/digital-influence-scale-newspaper.jpg',
    imageOnly: false,
  },
  {
    id: 1,
    title: "CSJMU's 'Digital Diet Model' Shows Landmark Success in Improving Student Concentration & Study Habits",
    source: 'Dainik Jagran / Dinar Times / Amrit Vichar',
    date: '25 May 2026',
    desc: "A landmark study on 'Efficacy Testing of Digital Diet Model on Study Habits of Adolescent Children' conducted by researcher Mahima Tripathi under the supervision of Assistant Professor Dr. Vimal Singh (School of Teacher Education, CSJMU Kanpur) was featured by prominent newspapers. The study investigated the impact of controlled digital device usage and screen time reduction on adolescents aged 10-18, demonstrating significant improvements in concentration levels, study discipline, and time management.",
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    mediaType: 'Newspaper',
    link: '/read/nep-locality-gender',
    images: [
      '/digital-diet-1.jpg',
      '/digital-diet-2.jpg',
      '/digital-diet-3.jpg'
    ],
  },
  {
    id: 2,
    title: "AI Now Shapes Students' Thinking & Confidence — Research by Dr. Vimal Singh's Scholar Mansi Singh",
    source: 'Dainik Jagran / Dainik Bhaskar / Amrit Vichar',
    date: '27 May 2026',
    desc: "Multiple newspapers covered a landmark research study by PhD scholar Mansi Singh under the supervision of Assistant Professor Dr. Vimal Singh (CSJMU). The study — A Study of Algorithmic Bias on Intersectional Identities: A Socio-Educational Study Among Postgraduate Students of Kanpur City — surveyed 211 PG students and IT experts, revealing how urban students identify AI bias faster than rural peers, and recommending Critical AI Literacy programmes in universities.",
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    mediaType: 'Newspaper',
    link: '/read/cognitive-load-ai',
    images: [
      '/ai-mansi-1.jpg',
      '/ai-mansi-2.jpg',
      '/ai-mansi-3.jpg',
      '/ai-mansi-4.jpg'
    ],
  },
  {
    id: 3,
    title: 'गांव हो या शहर, शिक्षक नई शिक्षा नीति को समझने के लिए पूरी तरह तैयार',
    source: 'Socio-Economic Perspectives',
    date: '14 July 2026',
    desc: "छत्रपति शाहू जी महाराज विश्वविद्यालय (CSJMU), कानपुर के शिक्षा विभाग की शोधार्थी रचना यादव द्वारा डॉ. विमल सिंह के निर्देशन में किया गया एक महत्वपूर्ण शोध अंतरराष्ट्रीय शोध पत्रिका 'Socio-Economic Perspectives' में प्रकाशित हुआ है। यह शोध नई शिक्षा नीति (NEP 2020) को लेकर शिक्षकों की जागरूकता पर आधारित है। 1741 प्राथमिक विद्यालय के शिक्षकों पर किए गए इस विस्तृत अध्ययन से पता चला है कि ग्रामीण और शहरी दोनों क्षेत्रों के महिला व पुरुष शिक्षकों में नई शिक्षा नीति के प्रति समान और उच्च स्तर की जागरूकता है। DIKSHA पोर्टल, NIPUN Bharat अभियान और विभिन्न प्रशिक्षण कार्यक्रमों ने इसमें महत्वपूर्ण भूमिका निभाई है, जिससे ग्रामीण और शहरी क्षेत्रों के बीच का जागरूकता अंतर समाप्त हो गया है।",
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    mediaType: 'Newspaper',
    image: '/nep-awareness-newspaper.jpg'
  },
  {
    id: 4,
    title: 'एआई ने बगैर डांटे पढ़ाया, छात्रों को खूब समझ आया',
    source: 'Newspaper (Kanpur)',
    date: '14 July 2026',
    desc: '',
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    mediaType: 'Newspaper',
    image: '/ai-guru-2.jpg',
    imageOnly: true,
  },
  {
    id: 5,
    title: 'उत्पादक एआई बनेगा विद्यार्थियों का स्मार्ट गुरु',
    source: 'Newspaper (Kanpur)',
    date: '14 July 2026',
    desc: '',
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    mediaType: 'Newspaper',
    image: '/ai-guru-1.jpg',
    imageOnly: true,
  },
  {
    id: 6,
    title: 'अध्यात्म की ओर रुझान तो चिंता अंतर्ध्यान',
    source: 'Newspaper (Kanpur)',
    date: '14 July 2026',
    desc: '',
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    mediaType: 'Newspaper',
    image: '/spiritual-anxiety-1.jpg',
    imageOnly: true,
  },
  {
    id: 7,
    title: 'मानसिक तनाव से जूझ रहे युवाओं के लिए सीएसजेएमयू का बड़ा शोध',
    source: 'Newspaper (Kanpur)',
    date: '14 July 2026',
    desc: '',
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    mediaType: 'Newspaper',
    image: '/spiritual-anxiety-2.jpg',
    imageOnly: true,
  },
  {
    id: 8,
    title: 'डिजिटल शिक्षा पर अध्ययन ने खोले नई संभावनाओं के द्वार',
    source: 'Newspaper (Kanpur)',
    date: '14 July 2026',
    desc: '',
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    mediaType: 'Newspaper',
    image: '/digital-education-study.jpg',
    imageOnly: true,
  },
  {
    id: 9,
    title: 'युवाओं के मन का तनाव नापेगा सीएसजेएमयू का थर्मामीटर',
    source: 'Dainik Jagran / Hindustan / Amrit Vichar',
    date: '14 July 2026',
    desc: '',
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    mediaType: 'Newspaper',
    images: [
      '/anxiety-scale-1.jpg',
      '/anxiety-scale-2.jpg',
      '/anxiety-scale-3.jpg',
      '/anxiety-scale-4.jpg'
    ],
    imageOnly: true,
  },
  {
    id: 10,
    title: 'रिसर्चर्स की ऑनलाइन पहचान को बनाया प्लेटफॉर्म / वैश्विक शोध पैमाना',
    source: 'Dainik Jagran / Hindustan / Amrit Vichar',
    date: '14 July 2026',
    desc: '',
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    mediaType: 'Newspaper',
    images: [
      '/grup-scale-1.jpg',
      '/grup-scale-2.jpg',
      '/grup-scale-3.jpg',
      '/grup-scale-4.jpg',
      '/grup-scale-5.jpg'
    ],
    imageOnly: true,
  },
  {
    id: 11,
    title: 'दुनिया भर के 1600 शोध खंगाले तो मिला बेहतर पढ़ाई का फॉर्मूला',
    source: 'Amrit Vichar',
    date: '15 July 2026',
    desc: '',
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    mediaType: 'Newspaper',
    image: '/global-research-formula.jpg',
    imageOnly: true,
  },
  {
    id: 12,
    title: 'शोध: शिक्षा को डिजिटल के साथ सरल बनाना जरूरी',
    source: 'Newspaper (Kanpur)',
    date: '15 July 2026',
    desc: '',
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    mediaType: 'Newspaper',
    image: '/digital-education-simplicity.jpg',
    imageOnly: true,
  },
  {
    id: 13,
    title: 'AI बनेगा विद्यार्थियों का स्मार्ट गुरु: CSJMU के नए शोध ने दिखाया भविष्य का क्लासरूम',
    source: 'Janmanas',
    date: '16 June 2026',
    desc: 'छत्रपति शाहू जी महाराज विश्वविद्यालय (CSJMU) के शिक्षा विभाग के असिस्टेंट प्रोफेसर डॉ. विमल सिंह और शोधार्थी सौम्या त्रिपाठी का एक महत्वपूर्ण शोध पत्र \'Annals of Neurosciences\' जर्नल में प्रकाशित हुआ है। इस शोध के अनुसार, जेनरेटिव एआई (Generative AI) विद्यार्थियों के लिए एक \'स्मार्ट गुरु\' की भूमिका निभा सकता है, जो प्रत्येक छात्र की मानसिक क्षमता और गति के अनुसार पाठ्य सामग्री तैयार कर सकता है। यह तकनीक विशेष रूप से शिक्षा को अधिक छात्र-केंद्रित, सुलभ और व्यक्तिगत बनाने में मददगार सिद्ध होगी।',
    category: 'media-coverage',
    subcategory: 'Television Coverage',
    mediaType: 'TV',
    image: '/janmanas-ai-guru.jpg',
    link: 'https://janmanas.in/2026/06/16/csjmu-ai-somya/',
    imageOnly: false,
  },
  {
    id: 14,
    title: 'CSJMU Generative AI Research: Future of Classroom and Mastery Learning',
    source: 'Sabse Aage News',
    date: '16 June 2026',
    desc: 'छत्रपति शाहू जी महाराज विश्वविद्यालय (CSJMU) के शिक्षा विभाग द्वारा किया गया यह शोध दर्शाता है कि कैसे जेनरेटिव एआई (Generative AI) भविष्य के क्लासरूम को बदल सकता है। यह तकनीक विद्यार्थियों के सीखने की गति को दोगुना करने तथा व्यक्तिगत मार्गदर्शन प्रदान करने में सक्षम है, जिससे पारंपरिक अध्यापन अधिक प्रभावी बनता है।',
    category: 'media-coverage',
    subcategory: 'Television Coverage',
    mediaType: 'TV',
    image: '/sabseaagenews-ai-mentor.jpg',
    link: 'https://www.sabseaagenews.com/ai-to-become-students-smart-mentor-csjmus-new-research-offers-a-glimpse-of-the-future-classroom-18209-9347614',
    imageOnly: false,
  },
  {
    id: 15,
    title: 'CSJM विश्वविद्यालय की उपलब्धि: महिला-पुरुष शिक्षकों में NEP जागरूकता बराबर, शोध हुआ अंतरराष्ट्रीय पत्रिका में प्रकाशित',
    source: 'Janmanas',
    date: '8 June 2026',
    desc: 'छत्रपति शाहू जी महाराज विश्वविद्यालय के शिक्षा विभाग के शोधकर्ताओं द्वारा किए गए एक अध्ययन में पाया गया है कि महिला व पुरुष दोनों श्रेणियों के शिक्षकों में नई शिक्षा नीति (NEP 2020) के प्रति जागरूकता का स्तर समान रूप से उच्च है। यह महत्वपूर्ण शोध एक प्रतिष्ठित अंतरराष्ट्रीय पत्रिका में प्रकाशित हुआ है।',
    category: 'media-coverage',
    subcategory: 'Television Coverage',
    mediaType: 'TV',
    image: '/janmanas-nep-awareness.jpg',
    link: 'https://janmanas.in/2026/06/08/csjm-international-journal/',
    imageOnly: false,
  },
  {
    id: 16,
    title: 'सीएसजेएमयू के शोध में बड़ा निष्कर्ष: टैगोर की शिक्षा पद्धति में \'मानवता\' सबसे बड़ा जीवन-मूल्य',
    source: 'Janmanas',
    date: '14 July 2026',
    desc: 'सीएसजेएमयू के शिक्षा विभाग द्वारा रवींद्रनाथ टैगोर के शैक्षणिक दर्शन पर किए गए एक अध्ययन में यह निष्कर्ष निकला है कि आधुनिक डिजिटल युग में भी मानवीय मूल्यों (Humanity) का विकास ही शिक्षा का मुख्य लक्ष्य होना चाहिए। टैगोर की मानवतावादी शिक्षा पद्धति आज के समय में भी उतनी ही प्रासंगिक है।',
    category: 'media-coverage',
    subcategory: 'Television Coverage',
    mediaType: 'TV',
    image: '/janmanas-tagore-humanity.jpeg',
    link: 'https://janmanas.in/2026/07/14/csjmu-research-taigore/',
    imageOnly: false,
  },
  {
    id: 17,
    title: 'CSJMU, कानपुर द्वारा बना \'जागरूकता पैमाना\' शोध की वैश्विक पहचान को देगा नई दिशा',
    source: 'Janmanas',
    date: '28 June 2026',
    desc: 'सीएसजेएमयू कानपुर के शिक्षा विभाग के सहायक प्रोफेसर डॉ. विमल सिंह द्वारा विकसित किया गया \'जागरूकता पैमाना\' (Awareness Scale) शोध कार्यों और अकादमिक जगत में शोधकर्ताओं की ऑनलाइन दृश्यता तथा प्रभाव को सही ढंग से मापने में वैश्विक स्तर पर एक नया आयाम स्थापित कर रहा है।',
    category: 'media-coverage',
    subcategory: 'Television Coverage',
    mediaType: 'TV',
    image: '/janmanas-awareness-scale.jpg',
    link: 'https://janmanas.in/2026/06/28/csjmu-education-research/',
    imageOnly: false,
  },
  {
    id: 18,
    title: '1600 शोधों को खंगालकर कानपुर ने दिया “बेहतर डिजिटल पढ़ाई” का फॉर्मूला',
    source: 'Janmanas',
    date: '16 July 2026',
    desc: 'छत्रपति शाहू जी महाराज विश्वविद्यालय (CSJMU), कानपुर के शोधकर्ताओं ने वर्ष 2021 से 2025 के बीच प्रकाशित 1600 से अधिक वैश्विक शोध पत्रों का विश्लेषण कर डिजिटल शिक्षा को अधिक प्रभावी बनाने का एक नया फॉर्मूला तैयार किया है। यह महत्वपूर्ण शोध प्रसिद्ध अंतरराष्ट्रीय जर्नल \'Annals of Neurosciences\' (SAGE Publications) में प्रकाशित हुआ है। शोध में डिजिटल पढ़ाई को बेहतर बनाने के लिए तीन मुख्य सिद्धांत—सरल बनाना, विद्यार्थी-केंद्रित दृष्टिकोण और याद रखने योग्य सामग्री तैयार करना—दिए गए हैं।',
    category: 'media-coverage',
    subcategory: 'Television Coverage',
    mediaType: 'TV',
    image: '/janmanas-digital-education.jpg',
    link: 'https://janmanas.in/2026/07/16/research-csjmu-kanpur-digital-education/',
    imageOnly: false,
  },
  {
    id: 19,
    title: "UGC-NET Preparation Strategy & Success Formula - 'Campus Adda' Podcast",
    source: 'Chhatrapati Shahu Ji Maharaj University, Kanpur',
    date: '18 July 2026',
    desc: "An educational guidance talk on UGC-NET preparation strategy by Dr. Vimal Singh, broadcasted on the 'Campus Adda' show of Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur. The session covers study schedules, resource selection, paper analysis, and key success factors for aspiring candidates.",
    category: 'digital-media',
    subcategory: 'Podcasts',
    mediaType: 'Podcast',
    link: 'https://www.youtube.com/watch?v=3ol-3yVnn_0',
    image: 'https://img.youtube.com/vi/3ol-3yVnn_0/hqdefault.jpg',
    imageOnly: false,
  }
]

export interface Course {
  code: string
  title: string
  semester: string
  objectives: string[]
  outcomes: string[]
  units: {
    number: number
    title: string
    topics: string[]
  }[]
  practicum: string[]
  readings: string[]
}

export interface StudyResource {
  id: number
  title: string
  desc: string
  courseCode: 'MED104' | 'MED305' | 'General'
  type: 'PDF' | 'PPT' | 'Infographic' | 'Video'
  link: string
  fileSize?: string
  duration?: string
  date: string
  thumbnail?: string
  details?: { sectionTitle: string; points: string[] }[]
}

export const coursesData: Course[] = [
  {
    code: 'MED104',
    title: 'Research Methods in Education (General Perspectives)',
    semester: 'M.Ed. Semester I',
    objectives: [
      'Understand the meaning of Scientific Method, Scientific Inquiry, Paradigm, Theory and its Implications in Educational Research.',
      'Explain the Characteristics of Basic, Applied and Action Researches in Education.',
      'Understand the Different Methods of Educational Research.',
      'Develop the Research Proposal.',
      'Familiarize with Various Techniques of Sampling.'
    ],
    outcomes: [
      'Comprehend the concept and types of research.',
      'Distinguish characteristics and uses of various quantitative and qualitative research approaches.',
      'Apprehend the various sampling techniques that can be used for data collection.',
      'Get comprehensive knowledge about review of related literature.'
    ],
    units: [
      {
        number: 1,
        title: 'Research - Nature and Concept',
        topics: [
          'Research – Nature and its concept.',
          'Inquiry - Scientific method of inquiry, nature and sources of knowledge.',
          'Paradigm - Pre-positivist and positivist era, theory, models and approaches their implications for educational research.',
          'Educational Research: meaning, purpose, scope and areas.',
          'Types of Educational Research: Basic, Applied and Action research and their characteristics.'
        ]
      },
      {
        number: 2,
        title: 'Literature Review and Problem Identification',
        topics: [
          'Review of related literature - meaning, purpose and resources.',
          'References (APA style), selected Bibliography, annotated Bibliography, identification and sources of research problems.',
          'Conducting the literature search using databases and internet. Internet search tools and quality of internet resources.'
        ]
      },
      {
        number: 3,
        title: 'Population, Sampling, and Errors',
        topics: [
          'Population & sample and their characteristics.',
          'Sampling Techniques - Probability & Non-Probability.',
          'Sampling Errors and ways to reduce them.'
        ]
      },
      {
        number: 4,
        title: 'Developing a Research Proposal',
        topics: [
          'Problem and its sources, Selection of the problem.',
          'Variables and its types.',
          'Objectives – Primary, Secondary and Concomitant.',
          'Hypothesis - concept, nature, characteristics and types.',
          'Research Design.'
        ]
      }
    ],
    practicum: [
      'Preparation and presentation on given topic through PPT (10 Marks)',
      'Mid Term Exam (10 Marks)',
      'Attendance (05 Marks)'
    ],
    readings: [
      'Aggarwal, Y.P. (1998). The Science of Educational Research: A Source book. Nirmal Publication.',
      'Best, John W. and Kahn James V (1995). Research in Education. Prentice Hall.',
      'Bryman, A. (1988). Quantity and Quality in Social Science Research. Routledge.',
      'Burns, R.B. (1991). Introduction to Research in Education. Prentice Hall.',
      'Creswell, John W. (2015). Educational Research. Pearson.',
      'Garrett, H.E. (1973). Statistics in psychology and Education. Bombay: Vakils, Feffer and Simon.',
      'Kerlinger, F.N. (1973). Foundation of Behavioral Research. Holt, Rinehart and Winston.',
      'Kothari, C. R. (2019). Research Methodology. New Age Publication.',
      'Koul, Lokesh (1988). Methodology of Educational Research. Vikas, New Delhi.',
      'McMiliion, James H. and Schumarcher, S. (1989). Research in Education: A Conceptual Introduction. Harper and Collins.',
      'Mouly, A.J. (1963). The Science of Educational Research. Eurosia.',
      'Neuman, W.L. (1997). Social Research Methods: Qualitative and Quantitative Approaches. Allyn and Bacon.',
      'P. and Benjabin Fruchter (1973). Fundamental Statistics in psychology and Education. MacGrawHill.',
      'Sharma, R. A. (2003). Fundamentals of Educational Research. Loyal Book Depot.',
      'Travers, R.M.W. (1978). An Introduction to Educational Research. Macmillan.',
      'Van Delen, D.B. (1962). Understanding Educational Research. MacGraw Hil'
    ]
  },
  {
    code: 'MED305',
    title: 'Educational Administration and Planning',
    semester: 'M.Ed. Semester III',
    objectives: [
      'Acquire basic knowledge of educational administration essential for administration jobs and research in educational administration.',
      'Understand how an educational organization can be effectively managed.',
      'Comprehend the qualities of resource persons to develop educational administration as a science and an independent field of study.',
      'Know the trends of educational financing in India.',
      'Develop skills in managing educational institution, departments and other organizations more effectively.'
    ],
    outcomes: [
      'Understand the significance of educational administration and planning for jobs.',
      'Develop expertise about how can educational institution be efficiently managed.',
      'Get acquainted with trends and educational financing in India.',
      'Get cognizant with various abilities in managing different departments and educational institutions efficiently.'
    ],
    units: [
      {
        number: 1,
        title: 'Educational Administration Concepts',
        topics: [
          'Educational Administration: meaning, nature, definition, scope and functions.',
          'Educational administration in India: Concept of educational management and management of educational institution.',
          'Personnel administration: meaning, functions and importance.',
          'Conflict management.',
          'Organizational compliance and decision-making.'
        ]
      },
      {
        number: 2,
        title: 'Educational Planning and Approaches',
        topics: [
          'Educational Planning: meaning, nature and need.',
          'Educational Planning in India.',
          'Approaches of Educational Planning: Manpower approach, Demographic projection model, Social demand approach, Rate of return approach, Social justice approach.',
          'Educational Planning: Strategic planning, Short-term planning, Management planning, Grass roots level planning, Institutional planning, The Rolling plan concept.'
        ]
      },
      {
        number: 3,
        title: 'Educational Financing & Internationalization',
        topics: [
          'Factors influencing Educational Financing.',
          'Financing of higher Education in India: Role of UGC, RUSA.',
          'Private participation in higher Education: Advantages and Disadvantages.',
          'Internationalization of Higher Education.'
        ]
      },
      {
        number: 4,
        title: 'Educational Leadership and Styles',
        topics: [
          'Educational leader: Qualities and Duties.',
          'Theories of leadership styles.',
          'Grid concept of leadership styles.',
          'Measurement of leadership styles.'
        ]
      }
    ],
    practicum: [
      'Preparation and presentation on given topic through PPT (10 Marks)',
      'Mid Term Exam (10 Marks)',
      'Attendance (05 Marks)',
      'Internship (One Month): Observation/conduction of school activities (Classroom supervision, lesson planning correction, classroom teaching, guidance & counseling, etc.) in Secondary Teacher Education Institutions.',
      'Educational Excursion & Report Preparation: Compulsory tour of not less than a week to visit educational sites/institutions.',
      'Professional Development: sports, yoga, meditation, seminars, workshops, and felicitation of special days.'
    ],
    readings: [
      'Azad, J.L. (2008). Financing and Management of Higher Education in India, New Delhi: Gyan Publishing House.',
      'Amitai Etzioni (1964). Modern Organizations. Englewood Cliffs, Prentice-Hall, N.J.',
      'Daniel E. Griffiths (1959). Administrative Theory, New York: Appleton.',
      'R.P. Bhatnagar and Vidya Agarwal (2001). Educational Administration, Meerut: Surya Publication.',
      'R.B. Kimbrough and M.Y. Nunnery (1976). Educational Administration, New York: McMillan Publishing Co.'
    ]
  }
]

export const studyResourcesData: StudyResource[] = [
  {
    id: 1787315000001,
    title: 'Understanding Research: Meaning, Concept & Key Characteristics',
    desc: 'Comprehensive presentation slides covering the general & specific meaning of research, scientific methods, characteristics (objective, reliable, valid, verifiable), purposefulness, and relevant disciplines for M.Ed. Semester I (Paper IV: RM 104).',
    courseCode: 'MED104',
    type: 'PPT',
    link: '/course-materials/RM104-understanding-research.pdf',
    date: '22 August 2026',
    fileSize: '1.3 MB',
    details: [
      {
        sectionTitle: 'General Meaning and Concept of Research | अनुसंधान का सामान्य अर्थ एवं अवधारणा',
        points: [
          'Etymological Breakdown: Re (Repeated, Again & Again, Continuous Process) + Search (Exploration, Solution Of Problem). | शब्दोत्पत्ति: Re (पुनरावृत्ति, बार-बार, सतत प्रक्रिया) + Search (अन्वेषण, समस्या का समाधान)।',
          'Definition: Research refers to a continuous process, wherein activities are carried out systematically to find out solution of the problem. | परिभाषा: शोध एक सतत प्रक्रिया है जिसमें समस्या का समाधान खोजने के लिए गतिविधियों को व्यवस्थित रूप से संचालित किया जाता है।',
          'Core Standards: Must be Objective, Valid, Reliable, and Verifiable. | मुख्य मानक: वस्तुनिष्ठ, वैध, विश्वसनीय और सत्यापनीय होना अनिवार्य है।'
        ]
      },
      {
        sectionTitle: 'Specific Meaning & Scientific Method | विशिष्ट अर्थ एवं वैज्ञानिक पद्धति',
        points: [
          'Definition: Research involves application of scientific method. It is concerned with formulating a systematic, objective, and empirically verifiable answer to a meaningful question/problem drawn from a field of knowledge or discipline. | परिभाषा: अनुसंधान में वैज्ञानिक पद्धति का अनुप्रयोग शामिल है। यह ज्ञान के क्षेत्र या विषय से उत्पन्न सार्थक प्रश्न/समस्या का व्यवस्थित, वस्तुनिष्ठ और आनुभविक रूप से सत्यापनीय उत्तर तैयार करने से संबंधित है।',
          'Key Terms: Scientific Method, Solution/Answer of a Problem, Meaningful Question/Problem, Field of Knowledge or Discipline. | प्रमुख पद: वैज्ञानिक पद्धति, समस्या का समाधान/उत्तर, सार्थक प्रश्न/समस्या, ज्ञान का क्षेत्र या विषय।'
        ]
      },
      {
        sectionTitle: 'Key Characteristics & Disciplines | मुख्य विशेषताएं एवं विषय',
        points: [
          'Characteristics: Objective, Reliable, Valid, Verifiable. | विशेषताएं: वस्तुनिष्ठ, विश्वसनीय, वैध, सत्यापनीय।',
          'Purposefulness: Relevant, Purposeful, Useful. | प्रयोजनपरकता: प्रासंगिक, उद्देश्यपूर्ण, उपयोगी।',
          'Examples of Disciplines: Education, Sociology, Public Administration. | विषयों के उदाहरण: शिक्षा, समाजशास्त्र, लोक प्रशासन।'
        ]
      }
    ]
  },
  {
    id: 1787315000002,
    title: 'Purpose of Research: Knowledge Transmission, Conservation & Problem Solving',
    desc: 'Educational presentation slides detailing the core purposes of educational research: adventure of ideas, churning and filtration of knowledge, conservation in knowledge banks, transmission across generations, and scientific problem solving for M.Ed. Semester I (Paper IV: RM 104).',
    courseCode: 'MED104',
    type: 'PPT',
    link: '/course-materials/RM104-purpose-of-research.pdf',
    date: '22 August 2026',
    fileSize: '1.3 MB',
    details: [
      {
        sectionTitle: 'Philosophical Purpose of Research | शोध का दार्शनिक उद्देश्य',
        points: [
          'Adventure of Ideas: Ideas are the key of knowledge. | विचारों का दुस्साहसिक कार्य: विचार ज्ञान की कुंजी हैं।',
          'Churning of Various Forms of Knowledge: Synthesis and re-synthesis of knowledge. | ज्ञान के विभिन्न रूपों का मंथन: ज्ञान का संश्लेषण और पुनः संश्लेषण।',
          'Filtration of Knowledge: Critique of Knowledge. | ज्ञान का छानन (Filtration): ज्ञान की आलोचनात्मक परीक्षा।',
          'Conservation of Knowledge: Universities are known as Knowledge Banks. | ज्ञान का संरक्षण: विश्वविद्यालय ज्ञान बैंक के रूप में जाने जाते हैं।'
        ]
      },
      {
        sectionTitle: 'Four Primary Operational Purposes | शोध के चार प्राथमिक कार्यात्मक उद्देश्य',
        points: [
          '1. Transmission of Knowledge: Passes knowledge from one generation to another. | 1. ज्ञान का संचरण: ज्ञान को एक पीढ़ी से दूसरी पीढ़ी तक पहुँचाता है।',
          '2. Investigates Existing Situations or Problems: Identifies and examines real-life issues. | 2. मौजूदा स्थितियों या समस्याओं की जांच: वास्तविक जीवन की समस्याओं की पहचान और परीक्षा करता है।',
          '3. Exploration of Scientific Solution of Problem: Objectivity, Reliability, Validity, Verifiability. | 3. समस्या के वैज्ञानिक समाधान का अन्वेषण: वस्तुनिष्ठता, विश्वसनीयता, वैधता, सत्यापनीयता।',
          '4. Provides Solution of a Problem: Offers practical and effective solutions. | 4. समस्या का समाधान प्रदान करना: व्यावहारिक और प्रभावी समाधान प्रस्तुत करता है।'
        ]
      }
    ]
  },
  {
    id: 1787315000003,
    title: 'Types of Research: General Introduction & Classification Framework',
    desc: 'Comprehensive presentation slides classifying educational research by Nature of Problem (Fundamental, Applied, Action), Nature of Data (Quantitative vs Qualitative), and Time Horizon (Historical, Descriptive, Exploratory, Experimental, Case Study, Philosophical) for M.Ed. Semester I (Paper IV: RM 104).',
    courseCode: 'MED104',
    type: 'PPT',
    link: '/course-materials/RM104-types-of-research-introduction.pdf',
    date: '22 August 2026',
    fileSize: '1.3 MB',
    details: [
      {
        sectionTitle: 'Classification by Nature of Problem | समस्या की प्रकृति के आधार पर वर्गीकरण',
        points: [
          'Fundamental / Pure / Basic Research: If problem is abstract, reality context. | मौलिक / शुद्ध / मूलभूत अनुसंधान: यदि समस्या अमूर्त एवं सैद्धांतिक संदर्भ में हो।',
          'Applied Research: If the problem relates to examining applicability or use of certain concepts, ideas or strategy to a specific situation. | अनुप्रयुक्त अनुसंधान: यदि समस्या किसी विशिष्ट स्थिति में अवधारणाओं या रणनीतियों की प्रयोज्यता की जांच से संबंधित हो।',
          'Action Research: Immediate day to day problems in Teaching Learning Process i.e. Attention, Discipline, Interest etc. | क्रियात्मक अनुसंधान: शिक्षण-अधिगम प्रक्रिया की तात्कालिक दैनिक समस्याएं (जैसे ध्यान, अनुशासन, रुचि आदि)।'
        ]
      },
      {
        sectionTitle: 'Classification by Nature of Data / Information | डेटा/सूचना की प्रकृति के आधार पर वर्गीकरण',
        points: [
          'Quantitative Approach: If data is in the form of numbers (e.g., Measuring Intelligence, Aptitude, Achievement). | मात्रात्मक दृष्टिकोण: यदि डेटा संख्याओं के रूप में हो (जैसे बुद्धिमत्ता, अभिरुचि, उपलब्धि का मापन)।',
          'Qualitative Approach: If available data is in the form of Fact, Information, Content etc. | गुणात्मक दृष्टिकोण: यदि उपलब्ध डेटा तथ्य, सूचना, विषय-वस्तु के रूप में हो।'
        ]
      },
      {
        sectionTitle: 'Classification by Time Horizon & Special Approaches | समय-सीमा एवं विशिष्ट दृष्टिकोण के आधार पर वर्गीकरण',
        points: [
          'Past Horizon: Historical Research (Scientific Analysis and Explanation of Past Events). | अतीत: ऐतिहासिक अनुसंधान (अतीत की घटनाओं का वैज्ञानिक विश्लेषण एवं व्याख्या)।',
          'Present Horizon: Descriptive Research (Present Status Analysis), Exploratory Research (Exploration of Relationship), Correlational Survey (Relationship between Variables). | वर्तमान: विवरणात्मक अनुसंधान (वर्तमान स्थिति), अन्वेषणात्मक अनुसंधान (संबंधों का अन्वेषण), सह-संबंधात्मक सर्वेक्षण।',
          'Future Horizon: Experimental Research (Cause and Effect Causal Relationship, e.g., Study of Effectiveness of Intelligence on Achievement). | भविष्य: प्रायोगिक अनुसंधान (कारण एवं प्रभाव संबंध)।',
          'Vision & Special: Philosophical Research (Philosophizing an Educational Issue); Case Study (Study of Speciality, e.g., Case Study of Banasthali Vidyapeeth / Delinquent Child). | दृष्टि एवं विशिष्ट: दार्शनिक अनुसंधान (शैक्षिक मुद्दे का दार्शनिक विश्लेषण); केस स्टडी (विशिष्टता का अध्ययन)।'
        ]
      }
    ]
  },
  {
    id: 1787315000004,
    title: 'Nature of Research Process: Journey of Knowledge & Key Characteristics',
    desc: 'Presentation slides outlining the research process as a continuous journey from Awareness to Study to Research, key stages from Idea to Principle/Law, RMW Travers insights, and core characteristics for M.Ed. Semester I (Paper IV: RM 104).',
    courseCode: 'MED104',
    type: 'PPT',
    link: '/course-materials/RM104-nature-of-research-process.pdf',
    date: '22 August 2026',
    fileSize: '1.3 MB',
    details: [
      {
        sectionTitle: 'Nature of Research Process & Core Maxims | शोध प्रक्रिया की प्रकृति एवं मुख्य सिद्धांत',
        points: [
          'Researcher Knowledge: Nature of research process, sources of research problem, evaluative criteria. | शोधकर्ता की आवश्यकताएं: शोध प्रक्रिया की प्रकृति, शोध समस्या के स्रोत, मूल्यांकन मानदंड।',
          'Famous Maxim: "Much Research and less study leads to intellectual bankruptcy" - RMW Travers. | प्रसिद्ध उक्ति: "अधिक शोध और कम अध्ययन बौद्धिक दिवालियापन की ओर ले जाता है" - आर.एम.डब्ल्यू. ट्रैवर्स।',
          'Key Premises: Research is creation; Research is teamwork; Research is done in very limited/focused area; Not a magic solution for all life problems. | मुख्य सिद्धांत: शोध सृजन है; शोध सामूहिक कार्य (teamwork) है; शोध बहुत सीमित/केंद्रित क्षेत्र में किया जाता है।'
        ]
      },
      {
        sectionTitle: 'Awareness to Research - A Journey of Knowledge | जागरूकता से अनुसंधान तक - ज्ञान की यात्रा',
        points: [
          'Awareness: To know the things; Outcome = Success in general life, competitive exams. (Wide but shallow base). | जागरूकता: चीजों को जानना; परिणाम = सामान्य जीवन में सफलता। (व्यापक किन्तु उथला)।',
          'Study: Second step of ladder; Outcome = Provides wisdom. (Depth increases according to level). | अध्ययन: सीढ़ी का दूसरा चरण; परिणाम = ज्ञान-विवेक प्रदान करता है।',
          'Research: Top step of knowledge; Outcome = Super Specialization, New/Original Knowledge, Production of Knowledge. (Micro level, unlimited depth). | अनुसंधान: ज्ञान का उच्चतम चरण; परिणाम = अति-विशिष्टीकरण, नया/मूल ज्ञान, ज्ञान का उत्पादन।',
          'Core Synthesis: Awareness is the base, Study gives direction, Research gives depth, and both Open the doors to endless knowledge. | मुख्य संश्लेषण: जागरूकता आधार है, अध्ययन दिशा देता है, अनुसंधान गहराई प्रदान करता है, और दोनों अनंत ज्ञान के द्वार खोलते हैं।'
        ]
      },
      {
        sectionTitle: 'Journey from Idea to Principle/Law & Key Characteristics | विचार से नियम तक की यात्रा एवं मुख्य विशेषताएं',
        points: [
          'Continuous Journey: Idea -> Hypothesis -> Thesis / Antithesis -> Theory -> Principle/Law -> Discipline / Faculty. | सतत यात्रा: विचार -> परिकल्पना -> शोध-प्रबंध / प्रति-प्रबंध -> सिद्धांत -> नियम/कानून -> विषय/संकाय।',
          'Key Characteristic 1: Research Process is a slow, steady, and long process. | विशेषता 1: शोध प्रक्रिया एक धीमी, स्थिर और लंबी प्रक्रिया है।',
          'Key Characteristic 2: Research needs specialization and specific domain knowledge. | विशेषता 2: शोध के लिए विशिष्टीकरण और विशेष ज्ञान की आवश्यकता होती है।',
          'Key Characteristic 3: Research Process is time, money, and energy consuming. | विशेषता 3: शोध प्रक्रिया समय, धन और ऊर्जा की खपत करने वाली होती है।'
        ]
      }
    ]
  },
  {
    id: 1785478339906,
    title: 'The 6-Step Research Process: A Real Example in Education',
    desc: 'An educational infographic explaining the six-step research process with a real-life example in education, comparing weekly low-stakes quizzes against no quizzes.',
    courseCode: 'MED104',
    type: 'Infographic',
    link: '/infographics/the-6-step-research-process.jpg',
    thumbnail: '/infographics/the-6-step-research-process.jpg',
    date: '31 July 2026',
    fileSize: '263 KB',
    details: [
      {
        sectionTitle: 'Research Problem | शोध समस्या',
        points: [
          'Does giving weekly low-stakes quizzes improve final exam performance in 9th-grade Science compared to no quizzes? | क्या 9वीं कक्षा के विज्ञान में साप्ताहिक कम-जोखिम वाली प्रश्नोत्तरी देने से बिना प्रश्नोत्तरी की तुलना में अंतिम परीक्षा के प्रदर्शन में सुधार होता है?'
        ]
      },
      {
        sectionTitle: '1. Inquiry & Curiosity (The Spark) | पूछताछ और जिज्ञासा (चिनगारी)',
        points: [
          'Action: Identify the problem. | कार्य: समस्या की पहचान करना।',
          'Question: Do weekly quizzes actually help students retain Science content better, or do they just add stress? | प्रश्न: क्या साप्ताहिक प्रश्नोत्तरी वास्तव में छात्रों को विज्ञान की सामग्री को बेहतर ढंग से याद रखने में मदद करती है, या वे केवल तनाव बढ़ाती हैं?',
          'Gap: Many teachers give quizzes instinctively, but little classroom-level data proves their effectiveness in my school context. | अंतराल: कई शिक्षक स्वाभाविक रूप से प्रश्नोत्तरी देते हैं, लेकिन मेरे स्कूल के संदर्भ में उनकी प्रभावशीलता को साबित करने के लिए कक्षा-स्तरीय डेटा बहुत कम है।'
        ]
      },
      {
        sectionTitle: '2. Planning & Strategy (The Blueprint) | योजना और रणनीति (खाका)',
        points: [
          'Action: Develop a methodology. | कार्य: कार्यप्रणाली विकसित करना।',
          'Research Design: Quasi-experimental (Two similar sections): Group A (Experimental) - Weekly 10-min Quizzes (Fri) vs Group B (Control) - No Quizzes, Regular Homework. | अनुसंधान डिजाइन: अर्ध-प्रायोगिक (दो समान वर्ग): समूह ए (प्रायोगिक) - साप्ताहिक 10-मिनट की प्रश्नोत्तरी (शुक्रवार) बनाम समूह बी (नियंत्रण) - कोई प्रश्नोत्तरी नहीं, नियमित गृहकार्य।',
          'Sample: Two 9th-grade Science sections, 30 students each (similar previous term grades). | नमूना: दो 9वीं कक्षा के विज्ञान वर्ग, प्रत्येक में 30 छात्र (समान पिछले सत्र के ग्रेड)।',
          'Duration: 8 weeks (2 weeks planning + 8 weeks execution + 1 week analysis). | अवधि: 8 सप्ताह (2 सप्ताह योजना + 8 सप्ताह निष्पादन + 1 सप्ताह विश्लेषण)।',
          'Tools: Pre-test, Weekly quizzes, Final exam, Spreadsheet for data. | उपकरण: पूर्व-परीक्षण, साप्ताहिक प्रश्नोत्तरी, अंतिम परीक्षा, डेटा के लिए स्प्रेडशीट।',
          'Timeline: 2 weeks planning + 8 weeks execution + 1 week analysis. | समय-सीमा: 2 सप्ताह योजना + 8 सप्ताह निष्पादन + 1 सप्ताह विश्लेषण।'
        ]
      },
      {
        sectionTitle: '3. Data Collection (The Grind) | डेटा संग्रह (कठिन परिश्रम)',
        points: [
          'Action: Gather evidence. | कार्य: साक्ष्य एकत्र करना।',
          'Pre-test (Week 1): Give both groups the same 20-question Science test. | पूर्व-परीक्षण (सप्ताह 1): दोनों समूहों को एक ही 20-प्रश्नों का विज्ञान परीक्षण दें।',
          'Intervention (Weeks 1–8): Group A: 10-question quiz every Friday. Group B: No quiz, only regular homework. | हस्तक्षेप (सप्ताह 1-8): समूह ए: प्रत्येक शुक्रवार को 10-प्रश्नों की प्रश्नोत्तरी। समूह बी: कोई प्रश्नोत्तरी नहीं, केवल नियमित गृहकार्य।',
          'Post-test (End of Week 8): Give both groups the same final exam (50 questions, covering the same syllabus). | उत्तर-परीक्षण (सप्ताह 8 का अंत): दोनों समूहों को एक ही अंतिम परीक्षा दें (50 प्रश्न, समान पाठ्यक्रम को कवर करते हुए)।',
          'Raw Data: Total 60 students (30 per group). | कच्चा डेटा: कुल 60 छात्र (प्रति समूह 30)।'
        ]
      },
      {
        sectionTitle: '4. Analysis & Interpretation (The Sense-Making) | विश्लेषण और व्याख्या (अर्थ निकालना)',
        points: [
          'Action: Find patterns in the data. | कार्य: डेटा में पैटर्न खोजना।',
          'Calculate improvement score: Improvement = Final Exam % - Pre-test %. | सुधार स्कोर की गणना करें: सुधार = अंतिम परीक्षा % - पूर्व-परीक्षण %।',
          'Compare the means: Group A (Quiz) average improvement = +18%, Group B (No Quiz) average improvement = +7%. | साधनों की तुलना करें: समूह ए (प्रश्नोत्तरी) औसत सुधार = +18%, समूह बी (कोई प्रश्नोत्तरी नहीं) औसत सुधार = +7%।',
          'Statistical Test: Independent T-test: p-value = 0.02 -> Statistically significant (p < 0.05). | सांख्यिकीय परीक्षण: स्वतंत्र टी-परीक्षण: पी-मान = 0.02 -> सांख्यिकीय रूप से महत्वपूर्ण (पी < 0.05)।',
          'Interpretation: Students who received weekly quizzes showed significantly higher improvement (+18% vs +7%) than those who did not. | व्याख्या: साप्ताहिक प्रश्नोत्तरी प्राप्त करने वाले छात्रों ने उन छात्रों की तुलना में काफी अधिक सुधार (+18% बनाम +7%) दिखाया, जिन्होंने नहीं किया।'
        ]
      },
      {
        sectionTitle: '5. Evaluation & Revision (The Reality Check) | मूल्यांकन और संशोधन (वास्तविकता की जांच)',
        points: [
          'Action: Question your own findings. | कार्य: अपने स्वयं के निष्कर्षों पर सवाल उठाना।',
          'Possible Bias: Were the quiz students more motivated because they knew they were in the "special" group? | संभावित पूर्वाग्रह: क्या प्रश्नोत्तरी वाले छात्र अधिक प्रेरित थे क्योंकि वे जानते थे कि वे "विशेष" समूह में थे?',
          'Confounding Variable: Did the quiz group spend extra time reviewing because of the quizzes? (That extra time, not the quiz itself, might have caused the improvement). | संकर चर: क्या प्रश्नोत्तरी समूह ने प्रश्नोत्तरी के कारण समीक्षा करने में अतिरिक्त समय बिताया? (वह अतिरिक्त समय, न कि स्वयं प्रश्नोत्तरी, सुधार का कारण हो सकता है)।',
          'Check: Compare the total study time reported by both groups via a short survey. | जांच: एक संक्षिप्त सर्वेक्षण के माध्यम से दोनों समूहों द्वारा रिपोर्ट किए गए कुल अध्ययन समय की तुलना करें।',
          'Revision Idea: If extra time is the real factor, then the conclusion should be "Quizzes force more review time, which improves scores" rather than "Quizzes magically improve learning." | संशोधन विचार: यदि अतिरिक्त समय वास्तविक कारक है, तो निष्कर्ष "प्रश्नोत्तरी अधिक समीक्षा समय के लिए मजबूर करती है, जिससे स्कोर में सुधार होता है" होना चाहिए न कि "प्रश्नोत्तरी जादुई रूप से सीखने में सुधार करती है।"'
        ]
      },
      {
        sectionTitle: '6. Conclusion & Sharing (The Output) | निष्कर्ष और साझाकरण (परिणाम)',
        points: [
          'Conclusion: In this 8-week study with 60 9th-grade students, weekly low-stakes quizzes led to a statistically significant improvement (mean +18%) in final exam scores compared to the no-quiz group (+7%). However, this effect may be partly due to increased study time rather than the quiz format itself. | निष्कर्ष: 60 9वीं कक्षा के छात्रों के साथ इस 8-सप्ताह के अध्ययन में, साप्ताहिक कम-जोखिम वाली प्रश्नोत्तरी ने बिना प्रश्नोत्तरी समूह (+7%) की तुलना में अंतिम परीक्षा के अंकों में सांख्यिकीय रूप से महत्वपूर्ण सुधार (औसत +18%) किया। हालांकि, यह प्रभाव आंशिक रूप से प्रश्नोत्तरी प्रारूप के बजाय अध्ययन के बढ़े हुए समय के कारण हो सकता है।',
          'Temporary Answer: Quizzes are effective, but likely because they encourage regular revision, not because they are magical. | अस्थायी उत्तर: प्रश्नोत्तरी प्रभावी हैं, लेकिन संभवतः इसलिए क्योंकि वे नियमित संशोधन को प्रोत्साहित करती हैं, न कि इसलिए कि वे जादुई हैं।',
          'New Questions: Does the same effect happen in weaker students vs stronger students? What if we replace quizzes with short summary-writing tasks - is the effect the same? Will this work in Humanities subjects like History? | नए प्रश्न: क्या कमजोर छात्रों बनाम मजबूत छात्रों में भी यही प्रभाव होता है? क्या होगा यदि हम प्रश्नोत्तरी को छोटे सारांश-लेखन कार्यों से बदल दें - क्या प्रभाव समान है? क्या यह इतिहास जैसे मानविकी विषयों में काम करेगा?'
        ]
      }
    ]
  },
  {
    id: 1785478351479,
    title: 'The Living Cycle of Inquiry: Why Research is a Process (Not a Single Event)',
    desc: 'An educational study guide exploring why research is a continuous, interconnected loop rather than a linear, one-time task, detailing each of the six phases from Inquiry to Sharing.',
    courseCode: 'MED104',
    type: 'PDF',
    link: '/course-materials/the-living-cycle-of-inquiry.pdf',
    date: '31 July 2026',
    fileSize: '9.6 MB'
  },
  {
    id: 1784279800288,
    title: "UGC-NET Preparation Strategy - 'Campus Adda' Interview",
    desc: "A guidance session and interview on UGC-NET preparation strategy by Dr. Vimal Singh, broadcasted on the 'Campus Adda' show of Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur.",
    courseCode: "MED104",
    type: "Video",
    link: "https://www.youtube.com/watch?v=3ol-3yVnn_0",
    thumbnail: "https://img.youtube.com/vi/3ol-3yVnn_0/hqdefault.jpg",
    date: "25 July 2026"
  },
  {
    id: 1784959655227,
    title: 'Why Research is a Process (Not a Single Event)',
    desc: 'An educational blackboard-style infographic explaining the six key steps of the research cycle and why a structured process is essential.',
    courseCode: 'MED104',
    type: 'Infographic',
    link: '/infographics/why-research-is-a-process.jpg',
    thumbnail: '/infographics/why-research-is-a-process.jpg',
    date: '14 July 2026',
    fileSize: '520 KB',
    details: [
      {
        sectionTitle: 'Introduction: Myth vs Reality | प्रस्तावना: भ्रम बनाम वास्तविकता',
        points: [
          'MYTH: Research is finding a fact and writing it down. | भ्रम: शोध केवल किसी तथ्य को ढूंढना और उसे लिख देना है।',
          'REALITY: Research is a living cycle of inquiry. | वास्तविकता: शोध जिज्ञासा और जांच का एक जीवंत चक्र है।'
        ]
      },
      {
        sectionTitle: '1. Inquiry & Curiosity (The Spark) | पूछताछ और जिज्ञासा (चिनगारी)',
        points: [
          'Concept: Identify the Problem. You start with a question, not an answer. This stage involves defining the "gap" in your knowledge. | अवधारणा: समस्या की पहचान करना। आप एक प्रश्न से शुरू करते हैं, उत्तर से नहीं। इस चरण में आपके ज्ञान में मौजूद "अंतराल" को परिभाषित करना शामिल है।',
          'ACTION: "What am I trying to solve or understand?" | कार्य: "मैं क्या हल करने या समझने की कोशिश कर रहा हूँ?"'
        ]
      },
      {
        sectionTitle: '2. Planning & Strategy (The Blueprint) | योजना और रणनीति (खाका)',
        points: [
          'Concept: Develop a Methodology. How will you find the answer? You choose your tools (surveys, experiments, library databases). | अवधारणा: कार्यप्रणाली विकसित करना। आप उत्तर कैसे ढूंढेंगे? आप अपने उपकरण चुनते हैं (जैसे सर्वेक्षण, प्रयोग, पुस्तकालय डेटाबेस)।',
          'ACTION: "What sources are credible? What is my timeline?" | कार्य: "कौन से स्रोत विश्वसनीय हैं? मेरी समय-सीमा क्या है?"'
        ]
      },
      {
        sectionTitle: '3. Data Collection (The Grind) | डेटा संग्रह (कठिन परिश्रम)',
        points: [
          'Concept: Gathering Evidence. This is the execution phase. You read, interview, observe, or run tests. It is messy and takes time. | अवधारणा: साक्ष्य एकत्र करना। यह निष्पादन का चरण है। आप पढ़ते हैं, साक्षात्कार लेते हैं, अवलोकन करते हैं, या परीक्षण करते हैं। यह प्रक्रिया जटिल और समय लेने वाली होती है।',
          'ACTION: Reading, observing, and taking raw notes. | कार्य: पढ़ना, अवलोकन करना और कच्चे नोट्स (raw notes) तैयार करना।'
        ]
      },
      {
        sectionTitle: '4. Analysis & Interpretation (The Sense-Making) | विश्लेषण और व्याख्या (अर्थ निकालना)',
        points: [
          'Concept: Finding the Pattern. Raw data is useless until sorted. You look for trends, anomalies, and relationships in what you found. | अवधारणा: पैटर्न खोजना। कच्चा डेटा तब तक बेकार है जब तक उसे छांटा न जाए। आप अपने द्वारा खोजे गए डेटा में रुझान, विसंगतियां और संबंध तलाशते हैं।',
          'ACTION: "What does this data actually mean?" | कार्य: "इस डेटा का वास्तव में क्या अर्थ है?"'
        ]
      },
      {
        sectionTitle: '5. Evaluation & Revision (The Reality Check) | मूल्यांकन और संशोधन (वास्तविकता की जांच)',
        points: [
          'Concept: Questioning Your Findings. Did you miss a variable? Is your source biased? This is where the process loops backward. | अवधारणा: अपने निष्कर्षों पर सवाल उठाना। क्या आपने कोई चर (variable) छोड़ दिया? क्या आपका स्रोत पक्षपाती है? यही वह जगह है जहां प्रक्रिया वापस पीछे की ओर चक्रित (loop) होती है।',
          'ACTION: "If I change this variable, do I get the same result?" | कार्य: "अगर मैं इस चर को बदलूं, तो क्या मुझे वही परिणाम मिलेगा?"'
        ]
      },
      {
        sectionTitle: '6. Conclusion & Sharing (The Output) | निष्कर्ष और साझाकरण (परिणाम)',
        points: [
          'Concept: The "Temporary" Answer. You present your findings. But in research, an answer usually leads to more questions, starting the cycle over. | अवधारणा: "अस्थायी" उत्तर। आप अपने निष्कर्षों को प्रस्तुत करते हैं। लेकिन शोध में, एक उत्तर आमतौर पर अधिक प्रश्नों की ओर ले जाता है, जिससे चक्र फिर से शुरू हो जाता है।',
          'ACTION: Publishing, presenting, or writing the final paper. | कार्य: प्रकाशन, प्रस्तुतीकरण, या अंतिम शोध पत्र लिखना।'
        ]
      },
      {
        sectionTitle: 'Why Does This Process Matter? | यह प्रक्रिया क्यों महत्वपूर्ण है?',
        points: [
          'It ensures Accuracy: Rushing leads to false conclusions (bias). | यह सटीकता सुनिश्चित करता है: जल्दबाजी करने से गलत निष्कर्ष (पूर्वाग्रह) निकल सकते हैं।',
          'It builds Credibility: Peer review and revision separate "opinion" from "fact". | यह विश्वसनीयता बनाता है: सहकर्मी समीक्षा (peer review) और संशोधन "राय" को "तथ्य" से अलग करते हैं।',
          'It allows for Replication: A process allows others to check your work or build upon it. | यह पुनरावृत्ति की अनुमति देता है: एक सुव्यवस्थित प्रक्रिया दूसरों को आपके काम की जांच करने या उस पर आगे काम करने की अनुमति देती है।',
          'It embraces Failure: In research, finding a "dead end" is still progress because it tells you where not to look next. | यह विफलता को स्वीकार करता है: शोध में, किसी "बंद रास्ते" का मिलना भी प्रगति है क्योंकि यह आपको बताता है कि आगे कहाँ नहीं देखना है।'
        ]
      },
      {
        sectionTitle: 'Core Takeaway | मुख्य निष्कर्ष',
        points: [
          '"Research is never \'finished\'; it is simply \'ready for the next question.\'" | "शोध कभी \'समाप्त\' नहीं होता; यह केवल \'अगले प्रश्न के लिए तैयार\' होता है।"'
        ]
      }
    ]
  },
  {
    id: 1784957888319,
    title: 'The Relationship Between Knowledge, Education & Research',
    desc: 'An educational infographic detailing the continuous cycle between knowledge, education, and research for individual growth and societal progress.',
    courseCode: 'MED104',
    type: 'Infographic',
    link: '/infographics/relationship-knowledge-education-research.jpg',
    thumbnail: '/infographics/relationship-knowledge-education-research.jpg',
    date: '25 July 2026',
    fileSize: '204 KB',
    details: [
      {
        sectionTitle: 'What is Knowledge? | ज्ञान क्या है?',
        points: [
          'Awareness and understanding of reality. | वास्तविकता की जागरूकता और समझ।',
          'Derived from experience, thinking, reflection, and discovery. | अनुभव, चिंतन, विचार और खोज से प्राप्त।',
          'The foundation of all learning and inquiry. | सभी प्रकार के सीखने और जिज्ञासा की आधारशिला।',
          'Key elements: Understanding, Facts, Concepts, Truths & Insights. | प्रमुख तत्व: समझ, तथ्य, अवधारणाएँ, सत्य और अंतर्दृष्टि।'
        ]
      },
      {
        sectionTitle: 'Sources of Knowledge | ज्ञान के स्रोत',
        points: [
          'Experience: Gaining understanding through active participation. | अनुभव: सक्रिय भागीदारी के माध्यम से समझ प्राप्त करना।',
          'Observation: Watching and gathering information from the surrounding world. | अवलोकन: आस-पास की दुनिया को देखना और जानकारी जुटाना।',
          'Reason: Using logic and rational thinking to process facts. | तर्कशक्ति: तथ्यों को समझने के लिए तर्क और विवेकपूर्ण सोच का उपयोग करना।',
          'Authority: Learning from experts, teachers, and trusted figures. | प्राधिकार: विशेषज्ञों, शिक्षकों और विश्वसनीय व्यक्तियों से सीखना।',
          'Tradition & Culture: Time-tested wisdom passed down through generations. | परंपरा और संस्कृति: पीढ़ियों से चला आ रहा समय-परीक्षित ज्ञान।',
          'Scientific Inquiry: Systematic exploration, testing, and validation. | वैज्ञानिक जांच: व्यवस्थित अन्वेषण, परीक्षण और सत्यापन।'
        ]
      },
      {
        sectionTitle: 'Role of Education | शिक्षा की भूमिका',
        points: [
          'Transmits existing knowledge to new generations. | मौजूदा ज्ञान को नई पीढ़ियों तक प्रसारित करना।',
          'Develops skills, values, and positive attitudes. | कौशल, मूल्य और सकारात्मक दृष्टिकोण विकसित करना।',
          'Encourages critical thinking and reflection. | आलोचनात्मक सोच और चिंतन को प्रोत्साहित करना।',
          'Prepares individuals for practical life and professional work. | व्यक्तियों को व्यावहारिक जीवन और व्यावसायिक कार्यों के लिए तैयार करना।',
          'Focus areas: Teaching, Learning, Training, and Skill Development. | फोकस क्षेत्र: शिक्षण, अधिगम, प्रशिक्षण और कौशल विकास।'
        ]
      },
      {
        sectionTitle: 'Role of Research | शोध की भूमिका',
        points: [
          'Explores unknowns, tests ideas, and pushes boundaries. | अज्ञात की खोज करना, विचारों का परीक्षण करना और सीमाओं को आगे बढ़ाना।',
          'Generates brand new knowledge and concepts. | बिल्कुल नए ज्ञान और अवधारणाओं का निर्माण करना।',
          'Validates, refines, and updates existing knowledge. | मौजूदा ज्ञान को सत्यापित, परिष्कृत और अद्यतन करना।',
          'Drives innovation, societal development, and progress. | नवाचार, सामाजिक विकास और प्रगति को संचालित करना।',
          'Core activities: Systematic Inquiry, Discovery, Innovation & Problem Solving. | मुख्य गतिविधियाँ: व्यवस्थित जांच, खोज, नवाचार और समस्या समाधान।'
        ]
      },
      {
        sectionTitle: 'The Continuous Cycle | निरंतर चलने वाला चक्र',
        points: [
          'Knowledge is organized and transmitted through education. | ज्ञान को शिक्षा के माध्यम से व्यवस्थित और प्रसारित किया जाता है।',
          'Education inspires questions and prepares the mind for research. | शिक्षा प्रश्नों को प्रेरित करती है और मस्तिष्क को शोध के लिए तैयार करती।',
          'Research expands, refines, and creates new knowledge. | शोध ज्ञान का विस्तार, परिष्कृत और निर्माण करता है।',
          'Together, they create a dynamic cycle that builds wisdom, solves problems, and drives progress. | साथ मिलकर, वे एक गतिशील चक्र का निर्माण करते हैं जो ज्ञान का निर्माण करता है, समस्याओं को हल करता है और प्रगति को बढ़ावा देता है।'
        ]
      },
      {
        sectionTitle: 'How They Work Together & Impact | वे कैसे मिलकर काम करते हैं और प्रभाव डालते हैं',
        points: [
          'Knowledge is the foundation. | ज्ञान ही आधारशिला है।',
          'Education imparts and cultivates knowledge. | शिक्षा ज्ञान प्रदान करती है और उसका पोषण करती है।',
          'Research investigates and expands knowledge. | शोध ज्ञान की जांच और विस्तार करता है।',
          'New Knowledge is created to benefit society through better decisions, solutions, and innovation. | बेहतर निर्णयों, समाधानों और नवाचार के माध्यम से समाज को लाभ पहुंचाने के लिए नए ज्ञान का सृजन होता है।',
          'Impact areas: Personal Growth & Empowerment, Social Progress & Well-being, Economic Development & Innovation, and Sustainable Future for All. | प्रभाव के क्षेत्र: व्यक्तिगत विकास और सशक्तिकरण, सामाजिक प्रगति और कल्याण, आर्थिक विकास और नवाचार, और सभी के लिए एक स्थायी भविष्य।'
        ]
      }
    ]
  },
  {
    id: 1784957888331,
    title: 'A Day in My Life: How I Learn from Different Sources of Knowledge',
    desc: 'An illustrative infographic following graduate student Ananya to explain six primary sources of knowledge through daily life situations.',
    courseCode: 'MED104',
    type: 'Infographic',
    link: '/infographics/sources-of-knowledge.jpg',
    thumbnail: '/infographics/sources-of-knowledge.jpg',
    date: '25 July 2026',
    fileSize: '271 KB',
    details: [
      {
        sectionTitle: 'Introduction & Core Message | परिचय और मुख्य संदेश',
        points: [
          'Meet Ananya, a graduate student: "Every day, I learn something new. I may not always realize it, but I gain knowledge from many sources that shape my thinking, choices, and actions." | अनन्या से मिलें, जो एक परास्नातक छात्रा है: "हर दिन मैं कुछ नया सीखती हूँ। शायद मुझे हमेशा इसका अहसास न हो, लेकिन मैं कई स्रोतों से ज्ञान प्राप्त करती हूँ जो मेरी सोच, विकल्पों और कार्यों को आकार देते हैं।"',
          '"Knowledge is everywhere – We just need to be curious and open!" | "ज्ञान हर जगह है - हमें बस जिज्ञासु और खुले विचारों वाला होना चाहिए!"'
        ]
      },
      {
        sectionTitle: '1. Authority | प्राधिकार / सत्ता',
        points: [
          'Daily Situation: "My teacher explains a tough concept in class. I trust her knowledge and guidance because she has studied and experienced more than me." | दैनिक स्थिति: "मेरी शिक्षिका कक्षा में एक कठिन अवधारणा को समझाती हैं। मैं उनके ज्ञान और मार्गदर्शन पर भरोसा करती हूँ क्योंकि उन्होंने मुझसे अधिक अध्ययन और अनुभव किया है।"',
          'Slate Lesson: "Water boils at 100°C at standard pressure." | स्लेट का पाठ: "पानी मानक दबाव पर 100 डिग्री सेल्सियस पर उबलता है।"',
          'Summary: "I learn from people who are experts and trustworthy." | सारांश: "मैं उन लोगों से सीखती हूँ जो विशेषज्ञ और भरोसेमंद हैं।"'
        ]
      },
      {
        sectionTitle: '2. Tradition | परंपरा',
        points: [
          'Daily Situation: "During a festival, I follow rituals that have been practiced in my family for generations." | दैनिक स्थिति: "एक त्योहार के दौरान, मैं उन रीति-रिवाजों का पालन करती हूँ जो मेरे परिवार में पीढ़ियों से चले आ रहे हैं।"',
          'Summary: "Traditions give us time-tested wisdom and a sense of identity." | सारांश: "परंपराएं हमें समय-परीक्षित ज्ञान और पहचान की भावना देती हैं।"'
        ]
      },
      {
        sectionTitle: '3. Experiences | अनुभव',
        points: [
          'Daily Situation: "I learned to ride a bicycle by falling, trying again and practice. My own experiences teach me lessons that stay with me." | दैनिक स्थिति: "मैंने गिरकर, बार-बार कोशिश करके और अभ्यास करके साइकिल चलाना सीखा। मेरे अपने अनुभव मुझे ऐसे सबक सिखाते हैं जो मेरे साथ रहते हैं।"',
          'Summary: "Experience is a great teacher; it helps me learn by doing." | सारांश: "अनुभव एक महान शिक्षक है; यह मुझे काम करके सीखने में मदद करता है।"'
        ]
      },
      {
        sectionTitle: '4. Inductive Reasoning | आगमनात्मक तर्क',
        points: [
          'Daily Situation: "I notice that every day the sun rises in the east. From many observations, I conclude that the sun usually rises in the east." | दैनिक स्थिति: "मैं देखती हूँ कि हर दिन सूर्य पूर्व में उगता है। कई अवलोकनों से, मैं निष्कर्ष निकालती हूँ कि सूर्य सामान्यतः पूर्व में उगता है।"',
          'Summary: "From specific observations, I reach a general conclusion." | सारांश: "विशिष्ट अवलोकनों से, मैं एक सामान्य निष्कर्ष पर पहुँचती हूँ (विशेष से सामान्य की ओर)।"'
        ]
      },
      {
        sectionTitle: '5. Deductive Reasoning | निगमनात्मक तर्क',
        points: [
          'Daily Situation: "I know that all humans need food to live. I am a human. Therefore, I need food to live." | दैनिक स्थिति: "मुझे पता है कि सभी मनुष्यों को जीवित रहने के लिए भोजन की आवश्यकता होती है। मैं एक मनुष्य हूँ। इसलिए, मुझे जीवित रहने के लिए भोजन की आवश्यकता है।"',
          'Summary: "From a general rule, I reach a specific conclusion." | सारांश: "एक सामान्य नियम से, मैं एक विशिष्ट निष्कर्ष पर पहुँचती हूँ (सामान्य से विशेष की ओर)।"'
        ]
      },
      {
        sectionTitle: '6. Scientific Method | वैज्ञानिक विधि',
        points: [
          'Daily Situation: "When I noticed plants in my room grew towards the window, I formed a hypothesis, tested it by changing their position and observed the results." | दैनिक स्थिति: "जब मैंने देखा कि मेरे कमरे में पौधे खिड़की की ओर बढ़ रहे हैं, तो मैंने एक परिकल्पना बनाई, उनकी स्थिति बदलकर इसका परीक्षण किया और परिणामों का अवलोकन किया।"',
          'Summary: "Systematic steps of observation, hypothesis, experiment, and conclusion help me discover new knowledge." | सारांश: "अवलोकन, परिकल्पना, प्रयोग और निष्कर्ष के व्यवस्थित कदम मुझे नए ज्ञान की खोज करने में मदद करते हैं।"'
        ]
      }
    ]
  },
  {
    id: 1784279800286,
    title: "General Orientation on Methodology",
    desc: "General Orientation lecture on Research Methodology by Dr. Vimal Singh, delivered at Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur.",
    courseCode: "MED104",
    type: "Video",
    link: "https://www.youtube.com/watch?v=icvEOqrBcho&list=PL_CW-GSOrTifeJlc4oCHQhmgWr7UxLQB3",
    thumbnail: "https://img.youtube.com/vi/icvEOqrBcho/hqdefault.jpg",
    date: "25 July 2026"
  },
  {
    id: 1784279800284,
    title: "What is Knowledge - Knowlwdge 2",
    desc: "Let's understand the basics of philosophy and research through easy explanations, stories, and real-life examples. These notes will help you see how knowledge grows into intelligence and finally into wisdom.Let's understand the basics of philosophy and research through easy explanations, stories, and real-life examples. These notes will help you see how knowledge grows into intelligence and finally into wisdom.",
    courseCode: "MED104",
    type: "Infographic",
    link: "https://drive.google.com/file/d/1PNCCexWzP0HCtpdJdeg_-hWxSs12sugC/view",
    fileSize: "275 KB",
    
    thumbnail: "https://drive.google.com/thumbnail?id=1PNCCexWzP0HCtpdJdeg_-hWxSs12sugC&sz=w600",
    date: "17 July 2026"
  },
  {
    id: 1784279800285,
    title: "What is Knowledge - what is knowlwdge",
    desc: "Let's understand the basics of philosophy and research through easy explanations, stories, and real-life examples. These notes will help you see how knowledge grows into intelligence and finally into wisdom.Let's understand the basics of philosophy and research through easy explanations, stories, and real-life examples. These notes will help you see how knowledge grows into intelligence and finally into wisdom.",
    courseCode: "MED104",
    type: "Infographic",
    link: "https://drive.google.com/file/d/1d9Dr6OhuxUFmnhmlVpFvfibDShiedUdC/view",
    fileSize: "225 KB",
    
    thumbnail: "https://drive.google.com/thumbnail?id=1d9Dr6OhuxUFmnhmlVpFvfibDShiedUdC&sz=w600",
    date: "17 July 2026"
  },

  {
    id: 1784279733633,
    title: "What is Knowledge - Knowlwdge 2",
    desc: "Let's understand the basics of philosophy and research through easy explanations, stories, and real-life examples. These notes will help you see how knowledge grows into intelligence and finally into wisdom.",
    courseCode: "MED104",
    type: "Infographic",
    link: "https://drive.google.com/file/d/1Tmb0MvkE1mau39DWU5PjNdq6NSPjimH1/view",
    fileSize: "275 KB",
    
    thumbnail: "https://drive.google.com/thumbnail?id=1Tmb0MvkE1mau39DWU5PjNdq6NSPjimH1&sz=w600",
    date: "17 July 2026"
  },
  {
    id: 1784279733634,
    title: "What is Knowledge - what is knowlwdge",
    desc: "Let's understand the basics of philosophy and research through easy explanations, stories, and real-life examples. These notes will help you see how knowledge grows into intelligence and finally into wisdom.",
    courseCode: "MED104",
    type: "Infographic",
    link: "https://drive.google.com/file/d/1xffTpCMU0OhY_8GdFnkuBqu-a30Qk3x8/view",
    fileSize: "225 KB",
    
    thumbnail: "https://drive.google.com/thumbnail?id=1xffTpCMU0OhY_8GdFnkuBqu-a30Qk3x8&sz=w600",
    date: "17 July 2026"
  },

  {
    id: 3,
    title: 'Constructing Educational Inquiry (MED104 Course Orientation Slide Deck)',
    desc: 'Comprehensive course orientation slide deck for MED104: Research Methods in Education (General Perspectives), illustrating the four phases of educational research construction (Foundation, Scaffolding, Materials, and Assembly), scientific inquiry methods, paradigm shifts, sampling matrix, research proposals, and evaluation blueprint.',
    courseCode: 'MED104',
    type: 'PDF',
    link: '/course-materials/constructing-educational-inquiry-presentation.pdf',
    date: '10 July 2026',
    fileSize: '2.0 MB'
  },
  {
    id: 4,
    title: 'Philosophizing Research: Philosophical Foundations of Research (Lecture Slide Deck)',
    desc: 'Educational lecture slides detailing the philosophical foundations of research, explaining the philosophy of science, branches of philosophy (metaphysics, epistemology, logic, ethics, aesthetics), research paradigms (positivism, interpretivism, pragmatism, critical theory), and the mapping of the research journey.',
    courseCode: 'MED104',
    type: 'PDF',
    link: '/course-materials/philosophizing-research-presentation.pdf',
    date: '10 July 2026',
    fileSize: '1.3 MB'
  },
  {
    id: 1,
    title: 'Philosophizing Research: Understanding the Philosophical Foundations of Research',
    desc: 'An educational infographic detailing the philosophical foundations of research, including branches of philosophy (metaphysics, epistemology, axiology, logic, ethics, aesthetics), research connection, paradigms, and guides for research stages.',
    courseCode: 'MED104',
    type: 'Infographic',
    link: '/infographics/philosophizing-research.jpg',
    thumbnail: '/infographics/philosophizing-research.jpg',
    date: '14 July 2026',
    fileSize: '312 KB',
    details: [
      {
        sectionTitle: 'What is Philosophy? | दर्शन क्या है?',
        points: [
          '"Philosophy is the love of wisdom. It helps us understand reality, knowledge, values, reasoning, and human existence. Research without philosophy is like a journey without a compass."',
          '"दर्शन ज्ञान के प्रति प्रेम है। यह हमें वास्तविकता, ज्ञान, मूल्य, तर्क और मानव अस्तित्व को समझने में मदद करता है। दर्शन के बिना शोध, बिना दिशा वाला सफर है।"',
          'Research Connection (शोध से संबंध): Philosophy (दर्शन) -> Thinking (विचार) -> Research Questions (शोध प्रश्न) -> Methodology (पद्धति) -> Findings (निष्कर्ष) -> Knowledge (ज्ञान)'
        ]
      },
      {
        sectionTitle: 'Why Philosophy Matters in Research | शोध में दर्शन क्यों महत्वपूर्ण है?',
        points: [
          'Defines what reality is. | वास्तविकता को परिभाषित करता है।',
          'Explains how knowledge is created. | ज्ञान कैसे निर्मित होता है, यह समझाता है।',
          'Guides research methodology. | शोध पद्धति का मार्गदर्शन करता है।',
          'Shapes ethical decision making. | नैतिक निर्णय लेने को आकार देता है।',
          'Improves logical reasoning. | तार्किक तर्कशक्ति को बेहतर बनाता है।',
          'Gives meaning to research findings. | शोध निष्कर्षों को अर्थ देता है।'
        ]
      },
      {
        sectionTitle: 'Branches of Philosophy with Daily Life Examples | दर्शन की शाखाएँ और दैनिक जीवन के उदाहरण',
        points: [
          'METAPHYSICS (तत्त्वमीमांसा) - Question: क्या वास्तविकता क्या है? | Daily Example: "क्या सफलता भाग्य से तय होती है या मेहनत से?" | Research Example: "सीखने की वास्तविक प्रकृति क्या है?"',
          'EPISTEMOLOGY (ज्ञानमीमांसा) - Question: हम कैसे जानते हैं कि कोई बात सत्य है? | Daily Example: "मोबाइल फोन खरीदने से पहले ऑनलाइन समीक्षाएँ (Reviews) पढ़ना।" | Research Example: "सर्वे और प्रयोगों के माध्यम से डेटा एकत्र करना।"',
          'AXIOLOGY (मूल्यमीमांसा) - Question: क्या मूल्यवान है? (Includes: Ethics, Values, Morality) | Daily Example: "किसी का गुम हुआ बटुआ बिना कोई पैसे वापस करना।" | Research Example: "प्रतिभागियों की गोपनीयता (Confidentiality) बनाए रखना।"',
          'LOGIC (तर्कशास्त्र) - Question: क्या मेरा तर्क सही है? | Daily Example: "अगर ट्रैफिक ज्यादा है, तो मुझे जल्दी निकलना चाहिए।" | Research Example: "साक्ष्य (Evidence) के आधार पर निष्कर्ष निकालना।"',
          'ETHICS (नीतिशास्त्र) - Question: क्या सही कार्य करना चाहिए? | Daily Example: "किसी और के कार्य का श्रेय (Credit) देना।" | Research Example: "प्लेजिअरिज़्म (Plagiarism) से बचना और सूचित सहमति (Informed Consent) लेना।"',
          'AESTHETICS (सौंदर्यशास्त्र) - Question: सौंदर्य और रचनात्मकता क्या है? | Daily Example: "एक आकर्षक कक्षा (Classroom) डिजाइन करना।" | Research Example: "शोध को प्रभावी दृश्य (Visuals) और इन्फोग्राफिक्स के माध्यम से प्रस्तुत करना।"'
        ]
      },
      {
        sectionTitle: 'Philosophical Paradigms in Research | शोध में दार्शनिक प्रतिमान',
        points: [
          'Positivism (सकारात्मकवाद) - Reality: Objective (वस्तुनिष्ठ) | Method: Quantitative (परिमाणात्मक)',
          'Interpretivism (व्याख्यात्मकवाद) - Reality: Multiple Realities (अनेक वास्तविकताएँ) | Method: Qualitative (गुणात्मक)',
          'Pragmatism (प्रयोगवाद) - Reality: Practical Solutions (व्यावहारिक समाधान) | Method: Mixed Methods (मिश्रित पद्धतियाँ)',
          'Critical Theory (आलोचनात्मक सिद्धांत) - Reality: Social Change (सामाजिक परिवर्तन) | Method: Participatory (सहभागी)'
        ]
      },
      {
        sectionTitle: 'Philosophy Guides Every Stage of Research | दर्शन शोध की हर अवस्था का मार्गदर्शन करता है',
        points: [
          'Research Problem (शोध समस्या) -> Research Questions (शोध प्रश्न) -> Research Design (शोध रूपरेखा) -> Data Collection (डेटा संग्रह) -> Data Analysis (डेटा विश्लेषण) -> Interpretation (व्याख्या) -> Knowledge Creation (ज्ञान निर्माण)'
        ]
      },
      {
        sectionTitle: 'Remember | याद रखें',
        points: [
          '"A researcher does not merely collect data; a researcher first develops a philosophical lens to understand the world."',
          '"एक शोधकर्ता केवल डेटा एकत्र नहीं करता; एक शोधकर्ता पहले विश्व को समझने के लिए एक दार्शनिक दृष्टिकोण विकसित करता है।"'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Philosophical Foundation of Research - Etymological Meaning of Philosophy (Lecture Notes)',
    desc: 'Handwritten-style comprehensive notes explaining the etymological meaning of philosophy, the difference between knowledge, intelligence, and wisdom, and the philosophical framework for research.',
    courseCode: 'MED104',
    type: 'Infographic',
    link: '/infographics/philosophical-foundation-notes.jpg',
    thumbnail: '/infographics/philosophical-foundation-notes.jpg',
    date: '14 July 2026',
    fileSize: '245 KB',
    details: [
      {
        sectionTitle: 'Etymological Meaning of Philosophy',
        points: [
          'Philos = Love, Sophia = Wisdom. Philosophy = Love for Wisdom (ज्ञान के प्रति प्रेम).',
          'So, Philosophy means "Love for Wisdom".'
        ]
      },
      {
        sectionTitle: 'Why "Love for Wisdom" and not "Love for Intelligence" or "Love for Knowledge"?',
        points: [
          'Philosophy is not just about collecting knowledge; it is not only about being intelligent.',
          'Philosophy is a deep, lifelong love and search for the highest truth and goodness.',
          'It includes curiosity, reflection, questioning, thinking, and living a meaningful life.',
          'It goes beyond facts and skills to understand the real nature of life and existence.',
          'Love for Wisdom = A deep and sincere desire to understand the Truth, the Good and the Beautiful and to live accordingly.'
        ]
      },
      {
        sectionTitle: 'Difference Between Knowledge, Intelligence and Wisdom',
        points: [
          'Basis of Meaning: Knowledge is information/facts acquired. Intelligence is ability to understand/solve problems logically. Wisdom is right understanding/judgment about what is true, good and lasting.',
          'Basis of Focus: Knowledge: "What is". Intelligence: "How to do". Wisdom: "What is right and best".',
          'Basis of Nature: Knowledge: External. Intelligence: Mental. Wisdom: Deep and Reflective.',
          'Basis of Example: Knowledge: Knowing that smoking is harmful. Intelligence: Using logic to stop smoking. Wisdom: Choosing a healthy life for well-being of self and others.',
          'Basis of Level: Knowledge: Information. Intelligence: Ability. Wisdom: Judgement + Values.',
          'Summary: *Knowledge gives us facts, Intelligence uses them, but Wisdom chooses what is best and meaningful.*'
        ]
      },
      {
        sectionTitle: 'A Story to Understand (Kunal, Manav, and Vivek)',
        points: [
          'Once there were three friends - Kunal, Manav and Vivek.',
          'Kunal had a lot of knowledge. He read many books.',
          'Manav was intelligent. He could solve difficult problems quickly.',
          'Vivek was wise. He used his knowledge and intelligence to help others and made right decisions in life.',
          'Moral: Knowledge informs, Intelligence performs, but Wisdom transforms.'
        ]
      },
      {
        sectionTitle: 'Conclusion',
        points: [
          'Philosophy is the love and search for wisdom. It guides us to use knowledge and intelligence for a meaningful and better life.',
          'Path: Philosophy -> Search for Wisdom -> Better Life -> Better World',
          'Think Deep... Ask Why... Seek Truth... That is Research.'
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'What Epistemology Is?',
    desc: 'An educational infographic detailing the philosophical concept of Epistemology, exploring key questions, core points, its significance, and main branches/approaches like Empiricism, Rationalism, Constructivism, and Critical Theory.',
    courseCode: 'MED104',
    type: 'Infographic',
    link: '/infographics/what-is-epistemology.png',
    thumbnail: '/infographics/what-is-epistemology.png',
    date: '22 July 2026',
    fileSize: '2.3 MB',
    details: [
      {
        sectionTitle: 'What Epistemology Is?',
        points: [
          'Epistemology is the branch of philosophy that studies the nature, sources, methods, and limits of knowledge.',
          'In simple words, epistemology asks the question: "How do we know what we know?"'
        ]
      },
      {
        sectionTitle: 'It explores:',
        points: [
          'What is knowledge?',
          'How do we acquire knowledge?',
          'What is the meaning of knowledge?',
          'What are the criteria of true knowledge?',
          'What is the relationship between the knower and the known?'
        ]
      },
      {
        sectionTitle: 'Key Points',
        points: [
          '1. Nature of Knowledge - What knowledge is and what it is not.',
          '2. Sources of Knowledge - From where knowledge is obtained (e.g., perception, reason, testimony, experience).',
          '3. Methods of Knowledge - How we come to know (e.g., observation, inference, intuition, logic).',
          '4. Limits of Knowledge - What we can know and what is beyond our knowledge.',
          '5. Justification of Knowledge - How we determine that knowledge is true or valid.'
        ]
      },
      {
        sectionTitle: 'Importance of Epistemology',
        points: [
          'It helps us to distinguish between true and false beliefs.',
          'It provides the foundation for all sciences and disciplines.',
          'It develops critical thinking and logical reasoning.',
          'It guides research, inquiry and decision-making.'
        ]
      },
      {
        sectionTitle: 'Branches / Approaches in Epistemology',
        points: [
          'Empiricism - Knowledge comes from experience and observation.',
          'Rationalism - Knowledge comes from reason and logical thinking.',
          'Constructivism - Knowledge is constructed by the mind.',
          'Critical Theory - Knowledge is influenced by social and cultural factors.'
        ]
      }
    ]
  }
]

export interface EditedBook2026 {
  id: string
  title: string
  subtitle?: string
  editor: string
  editorTitle?: string
  editorAffiliation?: string
  coEditor: string
  coEditorTitle?: string
  coEditorAffiliation?: string
  email: string
  submissionPeriod?: string
  deadline: string
  whatsappQrUrl: string
  whatsappGroupUrl: string
  introduction: string
  highlights: string[]
  features: string[]
  flyerPath: string
  isPdf: boolean
  themes: {
    title: string
    subthemes: string[]
  }[]
  guidelines: {
    font?: string
    bodySize?: string
    lineSpacing?: string
    margins?: string
    alignment?: string
    citation?: string
    wordLimit?: string
    originality?: string
    fileFormat?: string
    peerReview?: string
    note?: string
    figures?: string
  }
}

export const editedBooks2026Data: EditedBook2026[] = [
  {
    id: 'behind-the-algorithms',
    title: 'Behind the Algorithms: AI, Ethics, and Society in the Global South',
    subtitle: 'An Empirical, Practitioner-Grounded, India-Centered Exploration of AI and Society',
    editor: 'Dr. Vimal Singh',
    editorTitle: 'Assistant Professor, Department of Education',
    editorAffiliation: 'Chhatrapati Shahu Ji Maharaj University, Kanpur',
    coEditor: 'Mansi Singh',
    coEditorTitle: 'Co-Editor',
    coEditorAffiliation: 'Department of Education, Chhatrapati Shahu Ji Maharaj University, Kanpur',
    email: 'behindthealgorithms.book@gmail.com',
    deadline: '15 August 2026',
    whatsappQrUrl: '/flyers/image2.jpg',
    whatsappGroupUrl: 'https://chat.whatsapp.com/BehindTheAlgorithms2026',
    flyerPath: '/flyers/behind-the-algorithms.pdf',
    isPdf: true,
    introduction: 'Behind the Algorithms examines AI not as a purely technical system but as a human institution shaped by the people who build it. Drawing on original mixed-methods field research with IT professionals across India, this book uncovers the gap between practitioners\' private recognition of bias and their public ethical resistance—revealing how organizational pressure, opaque data pipelines, and normative assumptions sustain inequity.',
    highlights: [
      'Original mixed-methods research with IT professionals in India',
      'Dual-purpose: textbook (UG/PG) + research monograph',
      'Bridges empirical data, practitioner voices and ethical theory',
      'Explores ethical responsibility vs. organizational pressure',
      'India-specific vulnerability framework (rural, linguistic, gendered, economic, disability)',
      'Case studies, practitioner reflections & policy insights',
      'Accessible language with academic rigor',
      'Global relevance from a Global South perspective'
    ],
    features: [
      'Peer-reviewed and edited chapters',
      'Empirical and practitioner-grounded',
      'Interdisciplinary and inclusive',
      'Case studies and real-world examples',
      'Pedagogical tools for classroom use',
      'Global conversations from the margins'
    ],
    themes: [
      {
        title: 'PART I: FOUNDATIONS: AI AND SOCIETY',
        subthemes: [
          'Introduction: Artificial Intelligence as a Social Institution',
          'A Brief History of AI, Bias, and the Question of Fairness',
          'Understanding Algorithmic Bias: Data, Design, and Deployment',
          'Key Theories in AI Ethics: Sociotechnical Systems and Justice'
        ]
      },
      {
        title: 'PART II: THE HUMAN IN THE LOOP',
        subthemes: [
          'Who Builds AI? The Role and Responsibility of IT Professionals',
          'Individual Conscience vs. Organizational Pressure',
          'Inside the Machine Room: Voices from India\'s IT Industry',
          'Trust, Skepticism, and the Limits of Machine "Understanding"'
        ]
      },
      {
        title: 'PART III: SOCIETY, VULNERABILITY AND POWER',
        subthemes: [
          'Data Colonialism and the Global South: Whose AI Is It?',
          'The India Story: Rural, Linguistic, Gendered, and Economic Bias',
          'Disability, Accessibility, and the Excluded User',
          'AI and Manipulation: Nudging the Vulnerable Citizen'
        ]
      },
      {
        title: 'PART IV: GOVERNANCE, EDUCATION AND THE ROAD AHEAD',
        subthemes: [
          'Regulating the Algorithm: Global and Indian Policy Landscapes',
          'Teaching Ethics to Engineers: AI Literacy in Higher Education',
          'Toward Responsible Design: Frameworks for Ethical Practice',
          'Conclusion: Reimagining AI and Society from the Margins'
        ]
      }
    ],
    guidelines: {
      font: 'Times New Roman',
      bodySize: '12 pt',
      lineSpacing: '1.16',
      margins: '1 Inch (2.54 cm) on all sides',
      alignment: 'Justified',
      citation: 'APA 7th Edition for in-text citations and references',
      originality: 'Similarity Index must be below 15%. All submissions must be original and unpublished.',
      fileFormat: 'Microsoft Word format only (.doc or .docx)',
      note: 'Include a title page with: Chapter Title, Author Name(s), Affiliation, Email ID. Submit your chapter proposal to the designated email.'
    }
  },
  {
    id: 'imt-literacy',
    title: 'Information, Media and Technology Literacy (IMT): Educational Tools, Digital Transformation, and NEP 2020',
    subtitle: 'An Edited Volume on Digital Education, IMT Literacy, and Educational Innovation',
    editor: 'Dr. Vimal Singh',
    editorTitle: 'Assistant Professor, Department of Education',
    editorAffiliation: 'Chhatrapati Shahu Ji Maharaj University, Kanpur',
    coEditor: 'Shivani Yaduvanshi',
    coEditorTitle: 'Co-Editor / Research Scholar',
    coEditorAffiliation: 'Department of Education, Chhatrapati Shahu Ji Maharaj University, Kanpur',
    email: 'imteditedbook2026@gmail.com',
    deadline: '15 August 2026',
    whatsappQrUrl: '/flyers/image3.jpg',
    whatsappGroupUrl: 'https://chat.whatsapp.com/IMTLiteracy2026',
    flyerPath: '/flyers/imt-literacy.pdf',
    isPdf: true,
    introduction: 'This edited volume explores the triad of Information, Media and Technology Literacy (IMT) and its transformative role in education through digital tools, innovative pedagogies, and the vision of NEP 2020. It brings together research-backed insights, best practices, emerging trends, and future-ready approaches to empower learners, educators, and institutions in a technology-driven world.',
    highlights: [
      'Covers Information, Media & Technology Literacy comprehensively',
      'Aligned with NEP 2020 and its digital vision',
      'Focus on educational tools and digital transformation',
      'Interdisciplinary, research-based and practice-oriented chapters',
      'Includes case studies, frameworks, and best practices',
      'National and international perspectives',
      'Useful for educators, researchers, practitioners and policy makers'
    ],
    features: [
      'Peer-reviewed and edited volume',
      'ISBN with reputed publisher',
      'Interdisciplinary and inclusive approach',
      'Research-based and evidence-informed',
      'Pedagogical tools for classroom use',
      'Case studies and real-world examples',
      'Global conversations from diverse contexts',
      'High academic and editorial standards'
    ],
    themes: [
      {
        title: 'Theme 1: Information Literacy',
        subthemes: [
          'Digital Information Evaluation',
          'Academic Information Retrieval',
          'Research Information Management',
          'Information Ethics',
          'Critical Information Analysis'
        ]
      },
      {
        title: 'Theme 2: Media Literacy',
        subthemes: [
          'Digital Media Awareness',
          'Social Media and Education',
          'Fake News Detection',
          'Responsible Media Consumption',
          'Media Ethics'
        ]
      },
      {
        title: 'Theme 3: Technology Literacy',
        subthemes: [
          'Artificial Intelligence in Education',
          'Educational Technologies',
          'Blended Learning Platforms',
          'ICT Integration in Teaching',
          'Emerging Educational Technologies'
        ]
      },
      {
        title: 'Theme 4: Teacher Education and Professional Development',
        subthemes: [
          'Innovative Teaching Practices',
          'Digital Pedagogy',
          'Teacher Competency Development',
          'Professional Learning Communities',
          'Educational Leadership'
        ]
      },
      {
        title: 'Theme 5: Educational Innovation and Research',
        subthemes: [
          'NEP 2020 Implementation',
          'Inclusive Education',
          'Assessment and Evaluation',
          'Educational Policy',
          'Quality Assurance in Education'
        ]
      },
      {
        title: 'Theme 6: Emerging Trends in Education',
        subthemes: [
          'Smart Classrooms',
          'Blended Learning',
          'Sustainable Education',
          'Future Skills',
          'Global Perspectives in Education'
        ]
      }
    ],
    guidelines: {
      font: 'Times New Roman',
      bodySize: '12 pt',
      lineSpacing: '1.15',
      margins: '1 Inch (2.54 cm) on all sides',
      alignment: 'Justified',
      citation: 'Follow APA 7th Edition style consistently throughout the manuscript',
      originality: 'Similarity index should preferably be below 10% (excluding references). Any form of plagiarism will result in immediate rejection.',
      fileFormat: 'Microsoft Word (.doc or .docx) format only'
    }
  },
  {
    id: 'research-indexing',
    title: 'Research Indexing and Scholarly Impact: A Comprehensive Guide to Visibility, Metrics and Impact in Academic Publishing',
    subtitle: 'A Comprehensive Guide to Visibility, Metrics and Impact in Academic Publishing',
    editor: 'Dr. Vimal Singh',
    editorTitle: 'Assistant Professor, Department of Education',
    editorAffiliation: 'Chhatrapati Shahu Ji Maharaj University, Kanpur',
    coEditor: 'Suraj Gupta',
    coEditorTitle: 'Co-Editor / Research Scholar',
    coEditorAffiliation: 'Department of Education, Chhatrapati Shahu Ji Maharaj University, Kanpur',
    email: '2026.editedbook@gmail.com',
    deadline: '31 August 2025',
    whatsappQrUrl: '/flyers/image4.jpg',
    whatsappGroupUrl: 'https://chat.whatsapp.com/ResearchIndexing2026',
    flyerPath: '/flyers/research-indexing.pdf',
    isPdf: true,
    introduction: 'This edited book aims to provide a comprehensive guide to research indexing, citation metrics, and scholarly impact strategies, bringing together perspectives from bibliometricians, academic editors, publishers, librarians, and experienced researchers to maximize visibility and career advancement in the digital age.',
    highlights: [
      'Comprehensive coverage of indexing databases and criteria',
      'In-depth understanding of metrics and research impact',
      'Practical strategies for publishing in indexed venues',
      'Special focus on books, edited volumes and chapters',
      'Ethical publishing and future trends in research evaluation',
      'Insights from global experts and real-world experiences'
    ],
    features: [
      'DOI (Digital Object Identifier) provided for accepted chapters',
      'Soft Copy (PDF) of the Published Book provided to all authors',
      'No publication fee - all services are provided free of charge',
      'Strengthen your academic profile with a peer-reviewed publication'
    ],
    themes: [
      {
        title: '01: Foundations of Research Indexing',
        subthemes: [
          'Definition and significance of research indexing',
          'Historical evolution of citation indexing',
          'Understanding indexing criteria',
          'Overview of BKCI and its features',
          'Indexing vs. abstracting services',
          'Relationship with university rankings'
        ]
      },
      {
        title: '02: Major Indexing Databases and Their Working',
        subthemes: [
          'Scopus: scope, coverage, selection criteria',
          'Web of Science & its indexes (SCI, SSCI, AHCI, ESCI)',
          'Google Scholar: strengths & weaknesses',
          'Regional & subject-specific databases',
          'Metadata & its role in discoverability',
          'Comparative analysis of indexing coverage'
        ]
      },
      {
        title: '03: Metrics, Evaluation and Scholarly Impact',
        subthemes: [
          'Citation metrics: h-index, i10-index, impact factor, etc.',
          'Book-level metrics and citation patterns',
          'Alternative metrics (altmetrics)',
          'Indexing status & citation counts',
          'Citation reports & analytics tools',
          'Metrics in promotion, tenure & funding',
          'Responsible use of metrics'
        ]
      },
      {
        title: '04: Practical Strategies for Publishing in Indexed Venues',
        subthemes: [
          'Choosing the right journal, series or publisher',
          'Manuscript preparation & metadata optimization',
          'Publisher policies regarding indexing',
          'Strategies to enhance citation impact',
          'Timing of publication for visibility',
          'Building a publication portfolio',
          'Preprints, repositories & discoverability',
          'Promoting research after publication'
        ]
      },
      {
        title: '05: Edited Volumes, Books and Special Considerations',
        subthemes: [
          'Unique aspects of book publishing',
          'Indexing of monographs, edited volumes and chapters',
          'Book proposal to indexing: the journey',
          'Peer review, ISBN, DOI & metadata',
          'Book series and indexing requirements',
          'Visibility and marketing of books'
        ]
      },
      {
        title: '06: Ethical, Regional and Future Perspectives',
        subthemes: [
          'Predatory publishing and quality assurance',
          'Ethical considerations in research evaluation',
          'Regional challenges & opportunities',
          'Open access and digital publishing',
          'Future of indexing and scholarly communication',
          'Future-implications for stakeholders'
        ]
      }
    ],
    guidelines: {
      font: 'Times New Roman',
      bodySize: '12 pt',
      lineSpacing: '1.15',
      margins: '1 Inch (2.54 cm) on all sides',
      alignment: 'Justified',
      citation: 'Follow APA 7th Edition style consistently. Every reference listed must be cited in the text.',
      wordLimit: '3,000 to 6,000 words inclusive of references, tables, and figures',
      originality: 'Only original and unpublished manuscripts will be considered. Similarity index should preferably be below 10% (excluding references).',
      fileFormat: 'Microsoft Word (.doc or .docx) format only',
      note: 'File name format: ThemeNo_Subtheme_YourName (Example: 2_1_IndexingCriteria_Singh.docx)'
    }
  },
  {
    id: 'genai-obe',
    title: 'Artificial Intelligence and Outcome-Based Education',
    subtitle: 'In the Context of NEP 2020',
    editor: 'Dr. Vimal Singh',
    editorTitle: 'Assistant Professor, Department of Education',
    editorAffiliation: 'Chhatrapati Shahu Ji Maharaj University, Kanpur',
    coEditor: 'Saumya Tripathi',
    coEditorTitle: 'Postgraduate Scholar, Department of Education',
    coEditorAffiliation: 'Department of Education, Chhatrapati Shahu Ji Maharaj University, Kanpur',
    email: 'genai.obe.editedbook@gmail.com',
    submissionPeriod: '15 July 2026 to 15 August 2026',
    deadline: '15 August 2026',
    whatsappQrUrl: '/flyers/image5.jpg',
    whatsappGroupUrl: 'https://chat.whatsapp.com/GenAIOutcomeBasedEducation2026',
    flyerPath: '/flyers/genai-obe.pdf',
    isPdf: true,
    introduction: 'This edited book aims to explore the transformative potential of Artificial Intelligence in strengthening Outcome-Based Education (OBE) within the framework of NEP 2020. It invites academicians, researchers, teachers, scholars, and practitioners to contribute original chapters that highlight innovative practices, research findings, frameworks, and models. The focus is on how AI can enhance curriculum design, pedagogy, assessment, learning analytics, personalization, and quality assurance in an outcome-driven educational ecosystem.',
    highlights: [
      'DOI (Digital Object Identifier) for the chapter',
      'Soft Copy (PDF) of the Published Book',
      'Certificate of Publication (if applicable)',
      'Wide Academic Visibility',
      'Opportunity to contribute to a high-impact edited volume',
      'Recognition as a contributor in the field of AI and OBE'
    ],
    features: [
      'Publish your research in an ISBN-edited volume',
      'Receive a DOI for your chapter',
      'Enhance your academic profile and research visibility',
      'Share innovative ideas and best practices with a global audience',
      'Support NEP 2020, Outcome-Based Education and SDG 4 (Quality Education)',
      'Create impact through research, practice and policy contributions',
      'Collaborate with academicians, researchers, and professionals across disciplines'
    ],
    themes: [
      {
        title: '01 AI for Outcome-Based Curriculum Design and Innovation',
        subthemes: [
          'AI-Assisted Curriculum Design',
          'PO, PSO and CO Mapping',
          'Competency-Based Curriculum',
          'Curriculum Review and Continuous Improvement',
          'Interdisciplinary Curriculum',
          'Industry-Aligned Curriculum',
          'NEP 2020 Curriculum Reforms',
          '21st-Century Skills Integration'
        ]
      },
      {
        title: '02 AI-Enabled Outcome-Based Pedagogy and Learning',
        subthemes: [
          'Outcome-Based Teaching and Learning',
          'AI-Powered Lesson Planning',
          'Personalized Learning',
          'Active and Collaborative Learning',
          'Blended and Flipped Learning',
          'Intelligent Tutoring Systems',
          'Project-Based and Experiential Learning',
          'Digital Learning Environments'
        ]
      },
      {
        title: '03 AI-Driven Outcome-Based Assessment, Evaluation and Learning Analytics',
        subthemes: [
          'Competency-Based Assessment',
          'Formative and Summative Assessment',
          'Authentic and Performance-Based Assessment',
          'AI-Generated Feedback',
          'Learning Analytics',
          'Rubric Design and Automated Evaluation',
          'Adaptive Assessment',
          'Outcome Attainment and Quality Assurance'
        ]
      },
      {
        title: '04 AI for Personalized, Competency-Based and Inclusive Learning',
        subthemes: [
          'Adaptive Learning',
          'Personalized Learning Pathways',
          'Mastery Learning',
          'Competency Development',
          'Differentiated Instruction',
          'Inclusive and Special Education',
          'Learner Support through AI',
          'Lifelong Learning'
        ]
      },
      {
        title: '05 AI in Teacher Education and Professional Development',
        subthemes: [
          'AI Literacy for Educators',
          'Teacher Education and Capacity Building',
          'AI-Supported Instructional Design',
          'Faculty Professional Development',
          'AI for Educational Research',
          'Academic Writing with AI',
          'Teaching Innovation',
          'Future-Ready Educators'
        ]
      },
      {
        title: '06 AI, Educational Leadership and Institutional Transformation',
        subthemes: [
          'Educational Leadership',
          'Academic Administration',
          'Institutional Governance',
          'Quality Assurance and Accreditation',
          'Educational Data Analytics',
          'Smart Campuses',
          'Institutional Innovation',
          'AI-Enabled Decision Making'
        ]
      },
      {
        title: '07 Ethical, Responsible and Sustainable AI in Outcome-Based Education',
        subthemes: [
          'Ethical AI in Education',
          'Responsible AI Practices',
          'Academic Integrity',
          'Data Privacy and Security',
          'AI Bias, Fairness and Transparency',
          'AI Policy and Governance',
          'Human-Centered AI',
          'SDG 4 and Sustainable Education'
        ]
      },
      {
        title: '08 AI, NEP 2020 and the Future of Outcome-Based Education',
        subthemes: [
          'AI for NEP 2020 Implementation',
          'Competency-Based Education',
          'Education 5.0',
          'Future Workforce Skills',
          'Generative AI and Large Language Models',
          'Emerging Educational Technologies',
          'Global Best Practices',
          'Future Trends in AI and OBE'
        ]
      }
    ],
    guidelines: {
      font: 'Times New Roman',
      bodySize: '12 pt',
      lineSpacing: '1.5',
      margins: '1 inch on all sides',
      alignment: 'Justified',
      citation: 'APA 7th Edition',
      wordLimit: '4,000 to 7,000 words (including references)',
      originality: 'Only original and unpublished work will be considered. Plagiarism tolerance: Maximum 15%.',
      fileFormat: 'MS Word (.doc/.docx) format only',
      peerReview: 'Double Blind Peer Review',
      figures: 'Maximum 5 tables/figures (if any)'
    }
  }
]

export interface PeerReviewJournal {
  id: number
  journalName: string
  publisher: string
  quartile: 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'Peer-Reviewed'
  sjr?: string
  hIndex?: string
  issn?: string
  role: string
  statusType: 'completed' | 'invitation'
  invitationBadge?: string
  year?: string
  topics?: string[]
  link?: string
}

export const peerReviewServiceData = {
  stats: [
    { value: '09+', label: 'Journals Reviewed' },
    { value: 'Q1–Q3', label: 'Journal Quartiles' },
    { value: 'International', label: 'Publishers (Springer, Elsevier, Wiley, SAGE)' },
    { value: 'Psychometrics • Education • Psychology • Research Methodology', label: 'Core Expertise Domains' }
  ],
  journals: [
    {
      id: 1,
      journalName: 'Depression and Anxiety',
      publisher: 'John Wiley and Sons Inc',
      quartile: 'Q1' as const,
      sjr: '1.135',
      hIndex: '180',
      issn: '10914269, 15206394',
      role: 'Peer Reviewer',
      statusType: 'completed' as const,
      year: '2025–2026',
      topics: ['Psychiatry & Mental Health', 'Clinical Psychology', 'Mood & Anxiety']
    },
    {
      id: 2,
      journalName: 'Acta Psychologica',
      publisher: 'Elsevier',
      quartile: 'Q1' as const,
      role: 'Peer Reviewer',
      statusType: 'completed' as const,
      year: '2025–2026',
      topics: ['Psychometrics', 'Cognitive Psychology', 'Research Methodology']
    },
    {
      id: 3,
      journalName: 'Chronic Stress',
      publisher: 'SAGE',
      quartile: 'Q1' as const,
      role: 'Reviewer Invitation — 2026',
      statusType: 'invitation' as const,
      invitationBadge: 'CURRENT REVIEW INVITATION · 2026',
      year: '2026',
      topics: ['Stress & Health', 'Psychometrics', 'Educational Psychology']
    },
    {
      id: 4,
      journalName: 'Current Psychology',
      publisher: 'Springer',
      quartile: 'Q1' as const,
      sjr: '0.960',
      hIndex: '83',
      link: 'https://link.springer.com/journal/12144',
      role: 'Peer Reviewer',
      statusType: 'completed' as const,
      year: '2025–2026',
      topics: ['Psychology', 'Behavioral Sciences', 'Educational Psychology']
    },
    {
      id: 5,
      journalName: 'Behavioral Psychology/ Psicologia Conductual',
      publisher: 'Fundacion VECA',
      quartile: 'Peer-Reviewed' as const,
      hIndex: '33',
      link: 'https://www.behavioralpsycho.com/',
      role: 'Peer Reviewer',
      statusType: 'completed' as const,
      year: '2024–2025',
      topics: ['Clinical Psychology', 'Experimental Psychology', 'Cognitive Psychology']
    },
    {
      id: 6,
      journalName: 'Global Health Dynamics',
      publisher: 'Cultech Publications',
      quartile: 'Peer-Reviewed' as const,
      link: 'https://ghd.cultechpub.com/index.php/ghd',
      role: 'Peer Reviewer',
      statusType: 'completed' as const,
      year: '2025–2026',
      topics: ['Global Health', 'Public Health', 'Healthcare Policy & Research']
    },
    {
      id: 7,
      journalName: 'Journal of Community Psychology',
      publisher: 'Wiley',
      quartile: 'Q1' as const,
      role: 'Peer Reviewer',
      statusType: 'completed' as const,
      year: '2025–2026',
      topics: ['Community Psychology', 'Behavioral Health', 'Educational Research']
    },
    {
      id: 8,
      journalName: 'Neuroscience Insights',
      publisher: 'SAGE',
      quartile: 'Q3' as const,
      role: 'Peer Reviewer',
      statusType: 'completed' as const,
      year: '2025',
      topics: ['Neuroeducation', 'Cognitive Neuroscience', 'Learning Processes']
    },
    {
      id: 9,
      journalName: 'Inquiry',
      publisher: 'SAGE',
      quartile: 'Q3' as const,
      role: 'Peer Reviewer',
      statusType: 'completed' as const,
      year: '2024–2025',
      topics: ['Educational Inquiry', 'Higher Education Policy', 'Pedagogy']
    }
  ],
  closingQuote: '“Peer review is not merely an academic responsibility; it is a contribution to the integrity, quality and advancement of scholarly knowledge.”'
}



