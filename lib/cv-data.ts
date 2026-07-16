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
}

export interface InviteeLecture {
  id: number
  topic: string
  event: string
  organizer: string
  date: string
}

export interface FdpWorkshop {
  id: number
  course: string
  organizer: string
  sponsor?: string
  from: string
  to: string
}

export interface CommitteeRole {
  id: number
  name: string
  role: string
  year: string
}

export interface AdminResponsibility {
  id: number
  responsibility: string
  date: string
}

export interface CoCurricularActivity {
  id: number
  description: string
  from: string
  to: string
}

export const personalInfo: PersonalInfo = {
  name: 'Dr. Vimal Singh',
  qualifications: 'MPA, M.Ed., Ph.D.',
  title: 'Assistant Professor',
  department: 'School of Teacher Education',
  departmentName: 'Department Of Advanced Educational Research And Teaching Of Educational Foundations',
  institution: 'Chhatrapati Shahu Ji Maharaj University, Kanpur',
  contact: ['+91-7905184427', '+91-9795168526', '+91-6387549445'],
  whatsapp: '+91-9452913556',
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

export const academicAchievements: string[] = [
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
    { name: 'Ms. Mahima Tripathi', regNo: 'PHD202500001327', session: '2024 - 2025 (IGNOU)' },
    { name: 'Mr. Suraj Gupta', regNo: 'PHD202500000536', session: '2024 - 2025 (IGNOU)' }
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
    id: 0,
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
    chapterTitle: 'OSHO',
    bookTitle: 'आधुनिक भारत के महान विचारक',
    publisher: 'Rachnakar Publishing House, New Delhi',
    year: 2025,
    isbn: '978-93-49-755-13-0',
    role: 'Co-Author',
    link: '/read/nep-locality-gender',
  },
  {
    id: 2,
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
    id: 1, topic: 'AI Tools for Data Analysis', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '10 February 2026',
    link: '/read/nep-locality-gender',
  },
  {
    id: 2, topic: 'Role of AI in Modern Research, AI Powered Academic Search Engines', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '09 February 2026',
    link: '/read/cognitive-load-ai',
  },
  {
    id: 3, topic: 'Constraints on Social Change In India', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '15 January 2026',
    link: '/read/e-resource-satisfaction',
  },
  {
    id: 4, topic: 'Blended Learning in Education', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '07 January 2026',
    link: '/read/game-based-learning',
  },
  {
    id: 5, topic: 'Precision and Proof: Advancing through Experimental Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Atal Bihari Bajpai School of Legal Studies', date: '23 December 2025',
    link: '/read/chatbot-assisted-learning',
  },
  {
    id: 6, topic: 'Capturing Reality: Mastering the Art of Descriptive Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Atal Bihari Bajpai School of Legal Studies', date: '22 December 2025',
    link: '/read/spiritual-intelligence-anxiety',
  },
  {
    id: 7, topic: 'Quality Management in Education', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '17 December 2025',
    link: '/read/anxiety-undergraduates-review',
  },
  {
    id: 8, topic: "The Researcher's Spectrum: Decoding Diverse Types of Research", event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Atal Bihari Bajpai School of Legal Studies', date: '16 December 2025',
    link: '/read/cbcs-higher-education',
  },
  {
    id: 9, topic: 'Foundation of Enquiry: Navigating the Basics of Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Atal Bihari Bajpai School of Legal Studies', date: '15 December 2025',
    link: '/read/vocational-interest-study',
  },
  {
    id: 10, topic: 'Blooms Taxonomy of Instructional Objectives', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '20 November 2025',
    link: '/read/neuroeducation-landscape',
  },
  {
    id: 11, topic: 'Foundation of Knowing: The Epistemic root of Research', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '18 November 2025',
    link: '/read/news-framing-student-perceptions',
  },
  {
    id: 12, topic: 'Code of Conduct', event: 'Workshop on Value Education', organizer: 'IQAC and Value Education Cell, Christ Church Post Graduate College, Kanpur, UP', date: '24 September 2025',
    link: '/read/educational-systematic-research',
  },
  {
    id: 13, topic: 'Database Literacy', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, University of Lucknow, Lucknow UP', date: '29 May 2025',
    link: '/read/challenges-implementing-chatgpt',
  },
  {
    id: 14, topic: 'Tools for Ethical and Efficient Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, University of Lucknow, Lucknow UP', date: '29 May 2025',
    link: '/read/spiritual-intelligence-review',
  },
  {
    id: 15, topic: 'Understanding & Formulating Hypothesis', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Atal Bihari Bajpai School of Legal Studies', date: '19 May 2025',
    link: '/read/environmental-concerns-education',
  },
  {
    id: 16, topic: 'Experimental Designs: Types and Validation', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, CSJM University, Kanpur', date: '06 May 2025',
    link: '/read/low-self-esteem-holistic-education',
  },
  {
    id: 17, topic: 'Experimental Research: Conceptual Understanding', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, CSJM University, Kanpur', date: '05 May 2025',
    link: '/read/diabetic-wound-healing-nanomembrane',
  },
  {
    id: 18, topic: 'Co-Chair for Technical Session', event: 'International Conference on "A Multidisciplinary Approach to Sustainability: A Holistic View towards the Future"', organizer: 'School of Arts, Humanities and Social Sciences & School of Teacher Education, CSJM University Kanpur UP', date: '29 April 2025',
    link: '/read/women-studies-trends',
  },
  {
    id: 19, topic: 'Empowering Educators: The State of Teacher Education & Competencies in India', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Teacher Education, Dayanand Womens Training (DWT) PG College Kanpur UP', date: '25 April 2025',
    link: '/read/value-education-trends',
  },
  {
    id: 20, topic: 'Teacher Education: Theory & Practice', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Teacher Education, Dayanand Womens Training (DWT) PG College Kanpur UP', date: '24 April 2025',
    link: '/read/tracing-cbcs-challenges',
  },
  {
    id: 21, topic: 'The Roadmap to Success: Mastering PO-CO Mapping & Outcomes', event: 'Workshop on "CO-PO and its Mapping"', organizer: 'Maharana Pratap Group of Institutions, Kanpur UP', date: '05 April 2025',
    link: '/read/happiness-quotient-study',
  },
  {
    id: 22, topic: 'From Theory to Clarity: Understanding PO-CO Inside Out', event: 'Workshop on "CO-PO and its Mapping"', organizer: 'Maharana Pratap Group of Institutions, Kanpur UP', date: '05 April 2025',
    link: '/read/youth-voice-journal-2023',
  },
  {
    id: 23, topic: 'Chair for Technical Session', event: 'International Conference on "A Multidisciplinary Approach to Sustainability: A Holistic View towards the Future"', organizer: 'School of Arts, Humanities and Social Sciences & School of Teacher Education, CSJM University Kanpur UP', date: '02 March 2024',
    link: '/read/krishnamurti-philosophy-fear-hindi',
  },
  {
    id: 24, topic: 'Types of Research: Experimental Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, CSJM University, Kanpur', date: '24 February 2025',
    link: '/read/facing-fears-krishnamurti',
  },
  {
    id: 25, topic: 'Branches of Research: Basic Research (Pure research), Applied Research, Action Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, CSJM University, Kanpur', date: '18 February 2025',
    link: '/read/dealing-slow-fast-learners',
  },
  {
    id: 26, topic: 'Research: Meaning, Nature, Scope, Characteristics', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, CSJM University, Kanpur', date: '17 February 2025',
    link: '/read/tagore-ideological-insight-hindi',
  },
  {
    id: 27, topic: 'Artificial Intelligence and Pedagogical Innovations', event: 'Lecture Series on "Artificial Intelligence Integration in Pedagogical Practices"', organizer: 'Balram Krishan Academy, Atrauli, Mohanlalganj Lucknow – 226301 UP', date: '26 October 2024',
    link: '/read/industry-academia-collaboration',
  },
  {
    id: 28, topic: 'Use of Artificial Intelligence in the Process of Research', event: 'Lecture Series on "Artificial Intelligence Integration in Pedagogical Practices"', organizer: 'Balram Krishan Academy, Atrauli, Mohanlalganj Lucknow – 226301 UP', date: '25 October 2024',
    link: '/read/reflective-practices-krishnamurti',
  },
  {
    id: 29, topic: 'Artificial Intelligence Tools and Educational Canvas', event: 'Lecture Series on "Artificial Intelligence Integration in Pedagogical Practices"', organizer: 'Balram Krishan Academy, Atrauli, Mohanlalganj Lucknow – 226301 UP', date: '24 October 2024',
    link: '/read/aurobindo-ideological-implications',
  },
  {
    id: 30, topic: 'Programme Outcomes and Course Outcomes: Formulation & Mapping', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'Maharana Pratap Group of Institutions, Kanpur UP', date: '15 July 2024',
    link: '/read/swami-vivekananda-reflections',
  },
  {
    id: 31, topic: 'ICT Mediated Teaching Methods', event: 'Faculty Development Programme on "Effective teaching through Modern Technologies"', organizer: 'Academic and Administrative Development Centre (AIU-IU-AADC) Integral University Lucknow', date: '07 March 2024',
    link: '/read/global-trends-learning-styles',
  },
  {
    id: 32, topic: 'Co-chair for Technical Session', event: 'ICSSR Sponsored National Seminar on "Reconditioning Indian Tradition and Culture through NEP 2020: Multilingual, Multicultural and Multidisciplinary"', organizer: 'Department of Lifelong Learning and Extension, CSJM University Kanpur UP', date: '02 March 2024',
    link: '/read/emotional-intelligence-teacher-education',
  },
  {
    id: 33, topic: 'Skills of Measurement; Concept and Levels', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '09 February 2024',
    link: '/read/environmental-moral-reasoning',
  },
  {
    id: 34, topic: 'Hypothesis; Concept Types & Formulation', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '09 February 2024',
    link: '/read/emotional-intelligence-academic-achievement-hindi',
  },
  {
    id: 35, topic: 'Planning of Research; Identification, Selection & Formulation', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '07 February 2024',
    link: '/read/focus-group-discussion-qualitative',
  },
  {
    id: 36, topic: 'Nature and Limitations of Research Process', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '02 February 2024',
    link: '/read/academic-achievement-adjustment-study-hindi',
  },
  {
    id: 37, topic: 'Foundations of Research: Meaning, Concept, Purpose, Scope & Characteristics', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '31 January 2024',
    link: '/read/adjustment-emotional-intelligence-study-hindi',
  },
  { id: 38, topic: 'An Orientation Programme on Pre-Ph.D. Course Work', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '31 January 2024' },
  { id: 39, topic: 'Teaching-Learning Pedagogy', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'School of Health Sciences and School of Hotel Management & IQAC CSJM University Kanpur UP', date: '04 July 2023' },
  { id: 40, topic: 'Teaching-Learning Pedagogy', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'School of Life Sciences and Biotechnology & IQAC CSJM University Kanpur UP', date: '03 July 2023' },
  { id: 41, topic: 'Teaching-Learning Pedagogy', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'School of Teacher Education, School of Languages and School of Advanced Agriculture, Science and Technology & IQAC, CSJM University Kanpur UP', date: '02 July 2023' },
  { id: 42, topic: 'Teaching-Learning Pedagogy', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'School of Pharmaceutical Sciences and School of Creative and Performing Arts & IQAC, CSJM University Kanpur UP', date: '30 June 2023' },
  { id: 43, topic: 'Teaching-Learning Pedagogy', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'School of Arts, Humanities & Social Sciences & IQAC CSJM University Kanpur UP', date: '28 June 2023' },
  { id: 44, topic: 'Teaching-Learning Pedagogy', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'School of Engineering & Technology and School of Basic Sciences & IQAC CSJM University Kanpur UP', date: '27 June 2023' },
  { id: 45, topic: 'Teaching-Learning Pedagogy', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'School of Business Management and Atal Bihari Bajpai School of Legal Studies & IQAC CSJM University Kanpur UP', date: '26 June 2023' },
  { id: 46, topic: 'Nature and Limitations of Research Process', event: 'Pre-Ph.D. Course Work 2022-23', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '08 September 2022' },
  { id: 47, topic: 'Foundations of Research: Meaning, Concept, Purpose, Scope & Characteristics', event: 'Pre-Ph.D. Course Work 2022-23', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '03 September 2022' },
  { id: 48, topic: 'An Orientation Programme on Pre-Ph.D. Course Work', event: 'Pre-Ph.D. Course Work 2022-23', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '02 September 2022' },
  { id: 49, topic: 'Preparation of Project Report', event: 'Two Days Webinar on "Fundamentals of Project Report Writing"', organizer: 'Cult the Cultural Society, Lucknow', date: '13 June 2021' },
  { id: 50, topic: 'Basics of Project Report Writing', event: 'Two Days Webinar on "Fundamentals of Project Report Writing"', organizer: 'Cult the Cultural Society, Lucknow', date: '09 June 2021' },
  { id: 51, topic: 'Covid-19 Vaccine – A Ray of Hope', event: 'One-Day Seminar on "Covid – 19 Vaccination Drive"', organizer: 'Balram Krishan Academy, Lucknow', date: '14 April 2021' },
  { id: 52, topic: 'Sri Aurobindo International Centre of Education – An Example of Sri Aurobindo’s Ideology', event: 'One Day Seminar on "श्री माँ श्री अरविन्द की शिक्षा के विविध आयाम"', organizer: 'Bharatiya Shiksha Shodh Sansthan, Lucknow', date: '13 March 2021' },
  { id: 53, topic: 'Basics of Project Report Writing (Online)', event: 'Two-Day Webinar on "Fundamentals of Project Report Writing"', organizer: 'Cult the Cultural Society (CTCS), Lucknow', date: '09 June 2021' },
  { id: 54, topic: 'Preparation of Project Report (Online)', event: 'Two Days Webinar on "Fundamentals of Project Report Writing"', organizer: 'Cult the Cultural Society (CTCS), Lucknow', date: '13 June 2021' },
  { id: 55, topic: 'B.Ed. Internship Programme', event: 'Special Lecture', organizer: 'Charak Institute of Education (Affiliated with University of Lucknow), Lucknow', date: '27 April 2019' },
  { id: 56, topic: 'Formulation of Hypothesis & Operational Definition of Variables', event: 'Workshop on "Development of Research Proposal"', organizer: 'Department of Education, University of Lucknow, Lucknow', date: '08 to 15 February 2019' },
  { id: 57, topic: 'Development of Writing Instructional Objectives, Creating Set and Introducing the Lesson', event: 'Workshop on "Development of Micro Teaching Skills"', organizer: 'Department of Education, University of Lucknow, Lucknow', date: '24 to 29 December 2018' }
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
    id: 1,
    title: 'Philosophizing Research: Understanding the Philosophical Foundations of Research',
    desc: 'A comprehensive visual guide exploring the connection between philosophy and research, detailing branches of philosophy (Metaphysics, Epistemology, Axiology, Logic, Ethics, Aesthetics) and philosophical paradigms (Positivism, Interpretivism, Pragmatism, Critical Theory).',
    courseCode: 'MED104',
    type: 'Infographic',
    link: '/philosophizing-research-infographic.jpg',
    fileSize: '673 KB',
    date: '16 July 2026',
    thumbnail: '/philosophizing-research-infographic.jpg'
  },
  {
    id: 2,
    title: 'Philosophical Foundation of Research: Etymological Meaning of Philosophy',
    desc: 'Handwritten lecture notes explaining the etymological meaning of philosophy (Philos + Sophia = Love for Wisdom), comparing knowledge, intelligence, and wisdom, and demonstrating how philosophy guides search for research truth.',
    courseCode: 'MED104',
    type: 'Infographic',
    link: '/philosophical-foundation-notes.jpg',
    fileSize: '93 KB',
    date: '14 July 2026',
    thumbnail: '/philosophical-foundation-notes.jpg'
  },
  {
    id: 3,
    title: 'Constructing Educational Inquiry: Research Methods in Education (Lecture 1)',
    desc: 'Lecture slides detailing course orientation program in Research in Education for M.A., M.Ed., Ph.D., and NET/JRF candidates. Explores the master plan, syllabus roadmap, and four phases of construction (Foundation, Scaffolding, Materials, Assembly).',
    courseCode: 'MED104',
    type: 'PDF',
    link: '/research-methods-lecture1.pdf',
    fileSize: '267 KB',
    date: '10 July 2026'
  },
  {
    id: 4,
    title: 'Philosophizing Research: Course Orientation Program',
    desc: 'Orientation program presentation on research methodology, detailing the philosophical foundations of research, dominant research paradigms (Positivism, Interpretivism, Pragmatism, Critical Theory), and the destination of meaningful knowledge.',
    courseCode: 'MED104',
    type: 'PDF',
    link: '/philosophizing-research-lecture.pdf',
    fileSize: '265 KB',
    date: '10 July 2026'
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
    title: 'Integrating Generative Artificial Intelligence and Outcome-Based Education (OBE)',
    subtitle: 'Transforming Teaching, Learning, Assessment and Educational Innovation in the Age of Artificial Intelligence',
    editor: 'Dr. Vimal Singh',
    editorTitle: 'Chief Editor / Assistant Professor, Department of Education',
    editorAffiliation: 'Chhatrapati Shahu Ji Maharaj University, Kanpur',
    coEditor: 'Saumya Tripathi',
    coEditorTitle: 'Co-Editor / Post Graduate Scholar',
    coEditorAffiliation: 'Department of Education, Chhatrapati Shahu Ji Maharaj University, Kanpur',
    email: 'genai.obe.editedbook@gmail.com',
    submissionPeriod: '15th July 2026 to 15th August 2026',
    deadline: '15 August 2026',
    whatsappQrUrl: '/flyers/image5.jpg',
    whatsappGroupUrl: 'https://chat.whatsapp.com/GenAIOutcomeBasedEducation2026',
    flyerPath: '/flyers/genai-obe.pdf',
    isPdf: true,
    introduction: 'Artificial Intelligence is rapidly reshaping the global education landscape by personalizing learning, enhancing instructional design, automating assessment, and enabling data-driven decision making. Outcome-Based Education (OBE) ensures that learning is aligned with clearly defined outcomes, promoting learner-centricity, accountability and measurable success. This edited book brings together researchers, educators, practitioners and policy makers to explore how Generative AI can strengthen OBE practices across school, higher and technical education.',
    highlights: [
      'International Edited Book with ISBN and DOI for each chapter',
      'Double Blind Peer Review with an international editorial board',
      'No publication fee (all services provided free of charge)',
      'Provides wide academic visibility and networking opportunities'
    ],
    features: [
      'Explore cutting-edge GenAI applications for educational transformation',
      'Rigorous peer review and high publishing standards',
      'Enhance academic citations and dissemination',
      'Contribute to inclusive, ethical, and learner-centered educational environments'
    ],
    themes: [
      {
        title: '01 Generative AI and the Implementation of NEP 2020',
        subthemes: [
          'AI-driven policies, curricular reforms, and institutional readiness under NEP 2020'
        ]
      },
      {
        title: '02 Generative AI for Achieving SDG 4: Quality Education',
        subthemes: [
          'Roles of GenAI in promoting inclusive, equitable, and lifelong learning opportunities'
        ]
      },
      {
        title: '03 Ethical, Responsible and Inclusive Use of AI in Education',
        subthemes: [
          'Addressing bias, privacy, equity, and access in AI-integrated learning systems'
        ]
      },
      {
        title: '04 AI-Driven Learning Analytics and Educational Data Intelligence',
        subthemes: [
          'Predictive modeling, performance tracking, and diagnostics for personalized interventions'
        ]
      },
      {
        title: '05 AI-Assisted Lesson Planning, Content Development and Instructional Design',
        subthemes: [
          'Automating resources creation, multi-modal content curation, and custom learning pathways'
        ]
      },
      {
        title: '06 Academic Integrity, Assessment Security and Responsible AI Use',
        subthemes: [
          'Rethinking plagiarism, cheating prevention, and novel assessment frameworks for AI age'
        ]
      },
      {
        title: '07 AI in Teacher Education and Professional Development',
        subthemes: [
          'Empowering educators with AI competencies, digital tutoring, and reflective teaching practices'
        ]
      },
      {
        title: '08 AI-Supported Research, Academic Writing and Scholarly Communication',
        subthemes: [
          'Leveraging AI as a writing co-pilot, data analyzer, and literature reviewer responsibly'
        ]
      },
      {
        title: '09 AI for Inclusive, Accessible and Equitable Education',
        subthemes: [
          'Assisting diverse learners, including students with special education needs (SEN)'
        ]
      },
      {
        title: '10 Future Classrooms: Smart Learning Environments and Educational Innovation',
        subthemes: [
          'Integrating VR/AR, voice assistants, adaptive learning systems, and IoT in future schools'
        ]
      },
      {
        title: '11 AI Applications in School, Higher and Technical Education',
        subthemes: [
          'Domain-specific implementations, engineering and medical training innovations'
        ]
      },
      {
        title: '12 Policy, Governance and Leadership for AI-Integrated Education',
        subthemes: [
          'Guidelines, risk management, and administrative strategies for educational leaders'
        ]
      },
      {
        title: '13 Case Studies, Best Practices and Innovative Models of AI-Integrated OBE',
        subthemes: [
          'Real-world institutional deployments, evaluation metrics, and lessons learned'
        ]
      }
    ],
    guidelines: {
      font: 'Times New Roman',
      bodySize: '12 pt',
      lineSpacing: '1.5',
      margins: '1-inch margin on all sides',
      alignment: 'Justified',
      citation: 'APA 7th Edition',
      wordLimit: '4,000 to 7,000 words',
      originality: 'Maximum 10% AI-generated content (must be properly edited and verified). Plagiarism/similarity index must be below 10%.',
      fileFormat: 'MS Word (.doc/.docx) format only',
      peerReview: 'Double Blind',
      figures: '300 dpi editable'
    }
  }
]


