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
  },
]

export const academicAchievements: string[] = [
  'Qualified UGC-NET JRF in Education in Dec.2013, June 2014, and NET for Lectureship in Dec 2014.',
  'Qualified UGC-NET in Public Administration for Lectureship in June 2012.',
  'Qualified CTET for Junior Level in July 2013.',
  'Qualified UPTET for Junior Level in August 2013.',
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
  },
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
  },
]

export const specializations: string[] = [
  'Artificial Intelligence in Education',
  'Machine Learning',
  'Mixed Method',
  'Curriculum Development',
  'Policy Research',
  'Educational Administration and Management',
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
    { year: '2020 – 2022', count: 3, status: 'Awarded' },
  ],
  phdScholars: [
    { name: 'Ms. Mahima Tripathi', regNo: 'PHD202500001327', session: '2024 - 2025 (IGNOU)' },
    { name: 'Mr. Suraj Gupta', regNo: 'PHD202500000536', session: '2024 - 2025 (IGNOU)' },
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
  },
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
  },
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
  },
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
  },
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
  },
  {
    id: 2,
    year: 2026,
    title: 'Cognitive Load in the Age of Artificial Intelligence: A Bibliometric Analysis (2021–2025)',
    journal: 'Annals of Neurosciences, An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Annals of Neurosciences. 2026;0(0), ISSN: 0976-3260, Impact Factor 2.6, Page 01-20.',
    doi: '10.1177/09727531261443089',
  },
  {
    id: 3,
    year: 2026,
    title: 'Are Digital Resources Meeting Student Needs? A Study Of E-Resource Satisfaction at CSJM University',
    journal: 'International Journal of Scientific Research Studies, An International Peer-Reviewed Journal',
    type: 'Peer-Reviewed',
    details: 'Volume 03 Issue 05, May 2026, ISSN (print): 3050-6905, ISSN (online): 3050-6913, Page No: 264-273.',
    doi: '10.58806/ijsrs.2026.v3i5n09',
  },
  {
    id: 4,
    year: 2026,
    title: 'From Play to Proficiency: Game-Based Learning for Foundational Literacy and Numeracy',
    journal: 'International Journal of Scientific Research Studies, An International Peer-Reviewed Journal',
    type: 'Peer-Reviewed',
    details: 'Volume 03 Issue 04, April 2026, ISSN (print): 3050-6905, ISSN (online): 3050-6913, Page: 73-86.',
    doi: '10.58806/ijsrs.2026.v3i4n01',
    link: 'https://www.ijsrs.org/v3i4/1.php',
  },
  {
    id: 5,
    year: 2025,
    title: 'Unveiling the Global Rise of Chatbot-Assisted Learning: A 2020–2025 Bibliometric Study',
    journal: 'Scientific Culture, An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Vol. 11, No. 4, ISSN: 2407-9529, Page: 3042-3060.',
    doi: '10.5281/zenodo.11425125',
  },
  {
    id: 6,
    year: 2025,
    title: 'Spiritual Intelligence and Anxiety among Undergraduate Students: A Correlation Study',
    journal: 'International Journal of Indian Psychology: An International Peer-Reviewed Journal',
    type: 'Peer-Reviewed',
    details: '13(4), ISSN 2348-5396 (Online), DIP:18.01.279.20251304, Page: 3064-3078.',
    doi: '10.25215/1304.279',
  },
  {
    id: 7,
    year: 2025,
    title: 'A Systematic Literature Review on Anxiety Among Undergraduate Students: Causes and Coping Strategies',
    journal: 'Annals of Neurosciences, An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Annals of Neurosciences. 2025;0(0), ISSN 0976-3260, Impact Factor 2.6, Page 01-16.',
    doi: '10.1177/09727531251366078',
  },
  {
    id: 8,
    year: 2025,
    title: 'CBCS in Higher Education: An Impact Analysis',
    journal: 'Omniscient; An International Multidisciplinary Peer-Reviewed Journal',
    type: 'Peer-Reviewed',
    details: 'Vol 3 Issue 1, Jan-Mar 2025 EISSN: 2583-7575, Page: 43-54.',
  },
  {
    id: 9,
    year: 2025,
    title: 'विविन्न व्यावसायिक पाठ्यक्रमों में अध्ययनरत विद्यार्थियों की व्यावसायिक रुचि का तुलनात्मक अध्ययन',
    journal: 'Shiksha Shodh Manthan : A Half Yearly Bilingual Peer Reviewed Journal of Education',
    type: 'Peer-Reviewed',
    details: 'Vol 11, No. 1, April 2025, ISSN No: 2395-728X, Page: 346-353.',
  },
  {
    id: 10,
    year: 2025,
    title: 'Mapping the Neuroeducation Landscape: A Bibliometric Analysis (2020–2025)',
    journal: 'Annals of Neurosciences, An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Annals of Neurosciences. Vol 32, Issue 3, ISSN 0976-3260, Impact Factor 2.6, Page 01-19.',
    doi: '10.1177/09727531251355822',
  },
  {
    id: 11,
    year: 2025,
    title: 'NEWS FRAMING AND STUDENT PERCEPTIONS: A BIBLIOMETRIC ANALYSIS OF GLOBAL RESEARCH TRENDS',
    journal: 'The International Journal of Interdisciplinary Cultural Studies, An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Volume-20, No-2, Year-2025, E-ISSN No: 2327-2554, Impact Factor 7.418, Page: 66-88.',
    doi: '10.18848/p2qy7b42',
    link: 'https://cgscopus.com/index.php/journals/article/view/444',
  },
  {
    id: 12,
    year: 2025,
    title: 'AN EDUCATIONAL SYSTEMATIC RESEARCH REVIEW: TREND ANALYSIS',
    journal: 'Academe Journal of Education & Psychology, An International Refereed and Peer Reviewed Journal',
    type: 'Peer-Reviewed',
    details: 'Volume-15, Issue-1, Year 2025 (January-June), ISSN No: 2249-040X, Impact Factor 6.25, Page: 146-153.',
    doi: '10.5281/zenodo.15754113',
  },
  {
    id: 13,
    year: 2025,
    title: 'Challenges of Implementing ChatGPT in Education: A Systematic Review (2021–2025)',
    journal: 'International Journal of All Research Education and Scientific Methods (IJARESM), An International Refereed and Peer Reviewed Journal',
    type: 'Peer-Reviewed',
    details: 'Vol 13, Issue 7, 11 July 2025, ISSN: 2455-5211, Page 876-887.',
    doi: '10.56025/IJARESM.2025.1307250876',
  },
  {
    id: 14,
    year: 2025,
    title: 'Spiritual Intelligence: A Systematic Review',
    journal: 'International Journal of Arts and Humanities, An International Refereed and Peer Reviewed Journal',
    type: 'Peer-Reviewed',
    details: 'Vol 3, Issue 1, 28 June 2025, ISSN: 3005-3455, Page 35-52.',
    doi: '10.61424/ijah.v3i1.297',
  },
  {
    id: 15,
    year: 2025,
    title: 'Environmental Concerns in the Present Scenario and Future Works of Education',
    journal: 'International Journal of Environmental Sciences, An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Vol 7(s), Issue 11, 02 June 2025, ISSN 2229-7359, Page 697-709.',
    doi: '10.64252/53yg9z85',
  },
  {
    id: 16,
    year: 2025,
    title: 'A Journey from Low Self-esteem to High Selfworth: Importance of Holistic Education for Children from Marginalised Sections',
    journal: 'Annals of Neurosciences, An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Annals of Neurosciences. 2025;0(0), ISSN 0976-3260, Impact Factor 2.6, Page 01-05.',
    doi: '10.1177/09727531251343771',
  },
  {
    id: 17,
    year: 2025,
    title: 'Accelerated diabetic wound healing using a chitosan-based nanomembrane incorporating nanovesicles from Aloe barbadensis, Azadirachta indica, and Zingiber officinale',
    journal: 'International Journal of Biological Macromolecules (Elsevier ScienceDirect): An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Vol. 310 Part 2, May 2025, 143169, ISSN 0141-8130, Impact Factor 7.8, Page 01-09.',
    doi: '10.1016/j.ijbiomac.2025.143169',
  },
  {
    id: 18,
    year: 2024,
    title: 'Trends of Research on Women Studies from 2001 to 2020 in Faculty of Education in Central University',
    journal: 'Mukt Shabd Journal: An International UGC-CARE Listed Refereed and Peer Reviewed Journal',
    type: 'UGC-CARE Listed',
    details: 'Volume XIII, Issue XI, November, ISSN NO : 2347-3150, Page: 136 – 164.',
    doi: '10.0014.MSJ.2024.V13I11.0086781',
    link: 'https://drive.google.com/file/d/1JpUqJ4mp4RzTw1RjcMtEZVh9g6QB7J6M/view?usp=sharing',
  },
  {
    id: 19,
    year: 2024,
    title: 'Research trends on value education in a decade with special reference in Faculty of Education: Indian University',
    journal: 'Library Progress International: An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Vol. 44 No.3, Jul-Dec 2024, ISSN 2320 317X, Page 10700-10705.',
    link: 'https://bpasjournals.com/library-science/index.php/journal/article/view/2317',
  },
  {
    id: 20,
    year: 2024,
    title: 'Tracing challenges in the pathway of CBCS: A status study',
    journal: 'Library Progress International: An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Vol.44 No.3, Jul-Dec 2024, SSN 2320 317X, Page 10300-10309.',
    link: 'https://bpasjournals.com/library-science/index.php/journal/article/view/2317',
  },
  {
    id: 21,
    year: 2024,
    title: 'A Comparative Study of Happiness Quotient of Graduate Level Students Studying in NAAC A++ Accredited University and Non-Accredited State University',
    journal: 'Educational Administration: Theory and Practice: An International Scopus Indexed Refereed and Peer Reviewed Journal',
    type: 'Scopus Indexed',
    details: 'Vol 30, No 04, ISSN (Online): 2148 – 2403, Page 4333-4339.',
    link: 'https://kuey.net',
  },
  {
    id: 22,
    year: 2023,
    title: 'Multicultural Education: A Reflection of Indian Classrooms',
    journal: 'Youth Voice Journal, The RJ4 All Rotherhithe Community Centre, London, UK',
    type: 'Scopus Indexed',
    details: 'ISSN (Online): 2056 – 2969, Page 1-22.',
  },
  {
    id: 23,
    year: 2023,
    title: 'विद्दू कृष्णमवूति का दर्िन: िय से मवुि',
    journal: 'Bharatiya Shiksha Shodh Patrika: Refereed Peer Reviewed Journal, A UGC-CARE List Journal',
    type: 'UGC-CARE Listed',
    details: 'ISSN 0970-7603, Vol. 42, No-1 (iii), January-June 2023, Page: 10-13.',
  },
  {
    id: 24,
    year: 2023,
    title: 'Facing Fears, Challenges, and Realities: Understanding Krishnamurti’s Philosophy',
    journal: 'National Journal of Education Published Biannually by Banaras Hindu University, Varanasi India',
    type: 'UGC-CARE Listed',
    details: 'A UGC-CARE List Group 1 Journal, ISSN 0972-9569, Vol XIX, No 2, May 2023, Page 20-26.',
  },
  {
    id: 25,
    year: 2022,
    title: 'Developing Mechanism for Dealing with Slow and Fast Learner',
    journal: 'Education and Society (शिक्षण आणि समाज), A UGC-CARE List Group 1 Journal',
    type: 'UGC-CARE Listed',
    details: 'Vol. 45, No.4 October - December 2022, ISSN: 2278-6864, Page: 292-301.',
  },
  {
    id: 26,
    year: 2021,
    title: 'Institutional Profile of Patha-Bhavan depicting Ideological Insight of Rabindranath Tagore',
    journal: 'Bharatiya Shiksha Shodh Patrika: Peer Reviewed Journal, A UGC-CARE List Journal',
    type: 'UGC-CARE Listed',
    details: 'ISSN 0970-7603, Vol. 40, No-2, July-December 2021, Page: 87-94.',
  },
  {
    id: 27,
    year: 2021,
    title: 'Industry-Academia Collaboration in Global World: Indian Perspective',
    journal: 'Education India Journal: A Quarterly Refereed Journal of Dialogues on Education, A UGC-CARE List Journal',
    type: 'UGC-CARE Listed',
    details: 'ISSN 2278-2435, Vol. 10, Issue-2 May-2021, Page: 306-319.',
  },
  {
    id: 28,
    year: 2021,
    title: 'An Investigation into Reflective Practices of J. Krishnamurti’s Ideology',
    journal: 'Shodh Sanchar Bulletin, An International Bilingual Peer Reviewed Refereed Research Journal',
    type: 'UGC-CARE Listed',
    details: 'Vol. 11, Issue 41, January to March 2021, ISSN No: 2229-3620, UGC-CARE Listed Journal, Page: 282-286.',
  },
  {
    id: 29,
    year: 2020,
    title: 'An Empirical Inquiry of Sri Aurobindo’s Ideological Implications in Sri Aurobindo International Centre of Education (SAICE)',
    journal: 'International Journal of Research and Analytical Review, A Peer Review & Refereed Journal',
    type: 'Peer-Reviewed',
    details: 'Vol. 07, Issue 03, September 2020, ISSN No: 2348-1269, Impact Factor: 5.75 Page: 589-594.',
  },
  {
    id: 30,
    year: 2019,
    title: 'Ideological Reflections of Swami Vivekananda in Ramkrishna Mission Vidyalaya: An Exploratory Study',
    journal: 'Research Discourse: An International Refereed Research Journal',
    type: 'UGC-CARE Listed',
    details: 'Year IX, No. IV, October-December 2019, ISSN No: 2277-2014, UGC-CARE Listed Journal No. 63580, Impact Factor: 4.850 Page: 09-12.',
  },
  {
    id: 31,
    year: 2017,
    title: 'Global Trends and Learning Styles in Indian Higher Education',
    journal: 'Shiksha Shodh Manthan : A Half Yearly International Refereed Journal of Education',
    type: 'Peer-Reviewed',
    details: 'Vol. 3, No. 1, April 2017, ISSN No: 2395-728X, Page: 26-33.',
  },
  {
    id: 32,
    year: 2017,
    title: 'Emotional Intelligence in Teacher Education Curriculum for Enhancing Professionalism',
    journal: 'Education India Journal: A Quarterly Refereed Journal of Dialogues on Education',
    type: 'Peer-Reviewed',
    details: 'Vol. 6, Issue 3, August 2017, ISSN No.-2278-2435, Page: 79-92.',
  },
  {
    id: 33,
    year: 2017,
    title: 'A Study of Environmental Moral Reasoning of Prospective Teachers',
    journal: 'Research Discourse: An International Refereed Research Journal',
    type: 'UGC-CARE Listed',
    details: 'Year VII, No. XXIV, Part-II, July-September 2017, ISSN No: 2277-2014, UGC-CARE Listed Journal No. 63580, Page: 48-51.',
  },
  {
    id: 34,
    year: 2017,
    title: 'स्नातक स्तर के विद्यार्थियों के शैक्षिक उपलब्धि एवं संवेगात्मक बुद्धि के मध्य सहसम्बन्ध का अध्ययन',
    journal: 'Shiksha Shodh Manthan : A Half Yearly Bilingual Peer Reviewed Journal of Education',
    type: 'UGC-CARE Listed',
    details: 'Vol 3, No. 2, Oct 2017, ISSN No: 2395-728X, UGC-CARE Listed Journal No. 62814, Page: 113-119.',
  },
  {
    id: 35,
    year: 2017,
    title: 'Focus Group Discussion: An Approach of Qualitative Research',
    journal: 'Sodha Mimamsa, An International Refereed Research Journal',
    type: 'UGC-CARE Listed',
    details: 'Year IV, Part-II, No.: XVI, Oct-Dec 2017, UGC-CARE Journal No. 48923, ISSN No. – 2348-4624, Impact Factor: 2.695, Page: 40-41.',
  },
  {
    id: 36,
    year: 2015,
    title: 'स्नातक स्तर के विद्यार्थियों के शैक्षिक उपलब्धि एवं समायोजन के मध्य सहसम्बन्ध का अध्ययन',
    journal: 'Research Journey in Education : Annual Refereed Journal of Education, Allahabad',
    type: 'Peer-Reviewed',
    details: 'Year-2, Vol.2, No.1, Jan - Dec 2015, ISSN No: 2321-256X, Page: 64-73.',
  },
  {
    id: 37,
    year: 2015,
    title: 'स्नातक स्तर के विद्यार्थियों के समायोजन एवं संवेगात्मक बुद्धि के मध्य सहसम्बन्ध का अध्ययन',
    journal: 'Shiksha Shodh Manthan : A Half Yearly Bilingual Peer Reviewed Journal of Education',
    type: 'Peer-Reviewed',
    details: 'Year 1, Vol 1, No. 2, Oct 2015, ISSN No: 2395-728X, Page: 197-206.',
  },
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
  },
  {
    id: 3,
    chapterTitle: 'The Emotional Lives of Living Beings: Understanding Human Feeling',
    bookTitle: 'Feel to Heal: The Transformative Power of Emotions',
    publisher: 'Book River Publishers, New Delhi (National)',
    year: 2024,
    isbn: '978-9368847878',
    role: 'Co-Author',
  },
  {
    id: 4,
    chapterTitle: 'Examine the NEP’s Initiatives for Improving the Quality of Education India',
    bookTitle: 'Navigating NEP 2020 Strategic Implementation and Future Challenges',
    publisher: 'Luit & Pine Publications, Noida, UP (National)',
    year: 2024,
    isbn: '978-81-97420-99-8',
    role: 'Co-Author',
  },
  {
    id: 5,
    chapterTitle: 'Future Proofing Education: The Critical Role of ICT in Bridging the Global Educational Gap',
    bookTitle: 'Role of ICT & Educational Technology in Higher Education',
    publisher: 'Surya Multidisciplinary Publications, Gonda UP (National)',
    year: 2024,
    isbn: '978-81-972279-7-4',
    role: 'Co-Author',
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
  },
]

export const inviteeLectures: InviteeLecture[] = [
  { id: 1, topic: 'AI Tools for Data Analysis', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '10 February 2026' },
  { id: 2, topic: 'Role of AI in Modern Research, AI Powered Academic Search Engines', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '09 February 2026' },
  { id: 3, topic: 'Constraints on Social Change In India', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '15 January 2026' },
  { id: 4, topic: 'Blended Learning in Education', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '07 January 2026' },
  { id: 5, topic: 'Precision and Proof: Advancing through Experimental Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Atal Bihari Bajpai School of Legal Studies', date: '23 December 2025' },
  { id: 6, topic: 'Capturing Reality: Mastering the Art of Descriptive Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Atal Bihari Bajpai School of Legal Studies', date: '22 December 2025' },
  { id: 7, topic: 'Quality Management in Education', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '17 December 2025' },
  { id: 8, topic: "The Researcher's Spectrum: Decoding Diverse Types of Research", event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Atal Bihari Bajpai School of Legal Studies', date: '16 December 2025' },
  { id: 9, topic: 'Foundation of Enquiry: Navigating the Basics of Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Atal Bihari Bajpai School of Legal Studies', date: '15 December 2025' },
  { id: 10, topic: 'Blooms Taxonomy of Instructional Objectives', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '20 November 2025' },
  { id: 11, topic: 'Foundation of Knowing: The Epistemic root of Research', event: 'Pre-Ph.D. Course Work 2025-26', organizer: 'Department of Education, CSJM University, Kanpur', date: '18 November 2025' },
  { id: 12, topic: 'Code of Conduct', event: 'Workshop on Value Education', organizer: 'IQAC and Value Education Cell, Christ Church Post Graduate College, Kanpur, UP', date: '24 September 2025' },
  { id: 13, topic: 'Database Literacy', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, University of Lucknow, Lucknow UP', date: '29 May 2025' },
  { id: 14, topic: 'Tools for Ethical and Efficient Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, University of Lucknow, Lucknow UP', date: '29 May 2025' },
  { id: 15, topic: 'Understanding & Formulating Hypothesis', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Atal Bihari Bajpai School of Legal Studies', date: '19 May 2025' },
  { id: 16, topic: 'Experimental Designs: Types and Validation', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, CSJM University, Kanpur', date: '06 May 2025' },
  { id: 17, topic: 'Experimental Research: Conceptual Understanding', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, CSJM University, Kanpur', date: '05 May 2025' },
  { id: 18, topic: 'Co-Chair for Technical Session', event: 'International Conference on "A Multidisciplinary Approach to Sustainability: A Holistic View towards the Future"', organizer: 'School of Arts, Humanities and Social Sciences & School of Teacher Education, CSJM University Kanpur UP', date: '29 April 2025' },
  { id: 19, topic: 'Empowering Educators: The State of Teacher Education & Competencies in India', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Teacher Education, Dayanand Womens Training (DWT) PG College Kanpur UP', date: '25 April 2025' },
  { id: 20, topic: 'Teacher Education: Theory & Practice', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Teacher Education, Dayanand Womens Training (DWT) PG College Kanpur UP', date: '24 April 2025' },
  { id: 21, topic: 'The Roadmap to Success: Mastering PO-CO Mapping & Outcomes', event: 'Workshop on "CO-PO and its Mapping"', organizer: 'Maharana Pratap Group of Institutions, Kanpur UP', date: '05 April 2025' },
  { id: 22, topic: 'From Theory to Clarity: Understanding PO-CO Inside Out', event: 'Workshop on "CO-PO and its Mapping"', organizer: 'Maharana Pratap Group of Institutions, Kanpur UP', date: '05 April 2025' },
  { id: 23, topic: 'Chair for Technical Session', event: 'International Conference on "A Multidisciplinary Approach to Sustainability: A Holistic View towards the Future"', organizer: 'School of Arts, Humanities and Social Sciences & School of Teacher Education, CSJM University Kanpur UP', date: '02 March 2024' },
  { id: 24, topic: 'Types of Research: Experimental Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, CSJM University, Kanpur', date: '24 February 2025' },
  { id: 25, topic: 'Branches of Research: Basic Research (Pure research), Applied Research, Action Research', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, CSJM University, Kanpur', date: '18 February 2025' },
  { id: 26, topic: 'Research: Meaning, Nature, Scope, Characteristics', event: 'Pre-Ph.D. Course Work 2024-25', organizer: 'Department of Education, CSJM University, Kanpur', date: '17 February 2025' },
  { id: 27, topic: 'Artificial Intelligence and Pedagogical Innovations', event: 'Lecture Series on "Artificial Intelligence Integration in Pedagogical Practices"', organizer: 'Balram Krishan Academy, Atrauli, Mohanlalganj Lucknow – 226301 UP', date: '26 October 2024' },
  { id: 28, topic: 'Use of Artificial Intelligence in the Process of Research', event: 'Lecture Series on "Artificial Intelligence Integration in Pedagogical Practices"', organizer: 'Balram Krishan Academy, Atrauli, Mohanlalganj Lucknow – 226301 UP', date: '25 October 2024' },
  { id: 29, topic: 'Artificial Intelligence Tools and Educational Canvas', event: 'Lecture Series on "Artificial Intelligence Integration in Pedagogical Practices"', organizer: 'Balram Krishan Academy, Atrauli, Mohanlalganj Lucknow – 226301 UP', date: '24 October 2024' },
  { id: 30, topic: 'Programme Outcomes and Course Outcomes: Formulation & Mapping', event: 'Training Session on "NAAC Preparation and Process"', organizer: 'Maharana Pratap Group of Institutions, Kanpur UP', date: '15 July 2024' },
  { id: 31, topic: 'ICT Mediated Teaching Methods', event: 'Faculty Development Programme on "Effective teaching through Modern Technologies"', organizer: 'Academic and Administrative Development Centre (AIU-IU-AADC) Integral University Lucknow', date: '07 March 2024' },
  { id: 32, topic: 'Co-chair for Technical Session', event: 'ICSSR Sponsored National Seminar on "Reconditioning Indian Tradition and Culture through NEP 2020: Multilingual, Multicultural and Multidisciplinary"', organizer: 'Department of Lifelong Learning and Extension, CSJM University Kanpur UP', date: '02 March 2024' },
  { id: 33, topic: 'Skills of Measurement; Concept and Levels', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '09 February 2024' },
  { id: 34, topic: 'Hypothesis; Concept Types & Formulation', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '09 February 2024' },
  { id: 35, topic: 'Planning of Research; Identification, Selection & Formulation', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '07 February 2024' },
  { id: 36, topic: 'Nature and Limitations of Research Process', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '02 February 2024' },
  { id: 37, topic: 'Foundations of Research: Meaning, Concept, Purpose, Scope & Characteristics', event: 'Pre-Ph.D. Course Work 2023-24', organizer: 'Research & Development Cell, CSJM University, Kanpur', date: '31 January 2024' },
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
  { id: 57, topic: 'Development of Writing Instructional Objectives, Creating Set and Introducing the Lesson', event: 'Workshop on "Development of Micro Teaching Skills"', organizer: 'Department of Education, University of Lucknow, Lucknow', date: '24 to 29 December 2018' },
]

export const fdpsAndWorkshops: FdpWorkshop[] = [
  { id: 1, course: 'Applications of Artificial Intelligence in Research & Education', organizer: 'Institute of Advance Studies in Education (Deemed to be University) Rajasthan', from: '07 April 2026', to: '13 April 2026' },
  { id: 2, course: 'AI Innovation Workshop', organizer: 'AcadLearn and Department of Education, CSJM University Kanpur UP', from: '09 March 2026', to: '15 March 2026' },
  { id: 3, course: 'Pedagogy 5.0: Advancing Teaching & Research with AI and Technology', organizer: 'Department of Education, CSJM University Kanpur UP', from: '01 September 2025', to: '05 September 2025' },
  { id: 4, course: 'Two Week FDP on Fostering Expertise AI Agent Mastery', organizer: 'Chhatrapati Shahu Ji Maharaj University Kanpur UP & Gignaati, AI Academy', from: '16 June 2025', to: '12 July 2025' },
  { id: 5, course: 'One Week FDP on Empowering Higher Education Institutions in Technology-enabled Learning and Blended Learning', organizer: 'Association of Indian University (AIU), Integral University, Aryabhatta Knowledge University & C.O.L. CEMCA', sponsor: 'Academic and Administrative Development Centre (AIU-IU AADC)', from: '07 April 2025', to: '12 April 2025' },
  { id: 6, course: 'One Week Capacity Development Programme on Innovation, Incubation and Entrepreneurship', organizer: 't-Hub Government of Telangana', from: '10 March 2025', to: '13 March 2025' },
  { id: 7, course: 'One Week FDP on Statistical Analysis for Research: Techniques & Software', organizer: 'Association of Indian University (AIU) & Integral University', sponsor: 'Academic and Administrative Development Centre (AIU-IU AADC)', from: '21 November 2024', to: '26 November 2024' },
  { id: 8, course: 'One Week FDP on Artificial Intelligence in Teaching and Research Paper Writing', organizer: 'Association of Indian University (AIU) & Integral University', sponsor: 'Academic and Administrative Development Centre (AIU-IU AADC)', from: '26 June 2024', to: '30 June 2024' },
  { id: 9, course: 'Two Weeks Refresher Course in Education', organizer: 'Teaching Learning Centre, Ramanujan College, University of Delhi, India', sponsor: 'Ministry of Education, Government of India', from: '31 January 2024', to: '06 February 2024' },
  { id: 10, course: 'One Week FDP on ICT for Teaching and Learning', organizer: 'Teaching Learning Centre, Ramanujan College, University of Delhi, India', sponsor: 'Ministry of Education, Government of India', from: '17 October 2023', to: '23 October 2023' },
  { id: 11, course: '4 Week Faculty Induction/Orientation Programme', organizer: 'Teaching Learning Centre, Ramanujan College, University of Delhi, India', sponsor: 'Ministry of Education, Government of India', from: '20 January 2023', to: '18 February 2023' },
  { id: 12, course: 'One Week Online Faculty Development Programme on Research Paper Writing for High Index Journal', organizer: 'Institute of Advanced Studies in Education (Deemed to be University), Sardarshahr, Rajasthan', from: '24 May 2021', to: '30 May 2021' },
  { id: 13, course: 'Online Workshop on Teaching-Learning Through Moodle', organizer: 'Mahatma Gandhi Central University, Bihar & Babasaheb Bhimrao Ambedkar University, Lucknow UP', from: '23 May 2020', to: '23 May 2020' },
  { id: 14, course: 'National Workshop on Anti-Plagiarism in Research', organizer: 'Integral University, Lucknow', sponsor: 'Human Resource Development Centre (HRDC)', from: '03 August 2019', to: '03 August 2019' },
  { id: 15, course: 'National Workshop on How to Prepare Research Proposal', organizer: 'International Researchers Journal', sponsor: 'S.R.S. Publications and Distributions', from: '10 December 2017', to: '10 December 2017' },
  { id: 16, course: 'Orientation Programme on Qualitative Methods in Educational Research', organizer: 'Bhartiya Shiksha Shodh Sansthan, Lucknow', from: '24 April 2017', to: '01 May 2017' },
  { id: 17, course: 'Orientation Programme on Application of R Software in Statistical Analysis of Data', organizer: 'Bhartiya Shiksha Shodh Sansthan, Lucknow', from: '02 February 2017', to: '08 February 2017' },
  { id: 18, course: 'National Workshop on Research Methodology', organizer: 'Babasaheb Bhimrao Ambedkar University, Lucknow', from: '11 January 2017', to: '25 January 2017' },
  { id: 19, course: 'Research Methodology Programme', organizer: 'Human Resource Development Centre, University of Lucknow', sponsor: 'UGC', from: '28 November 2016', to: '30 November 2016' },
  { id: 20, course: 'Workshop on Swami Vivekananda and Human Excellence', organizer: 'Department of Education, University of Lucknow', sponsor: 'MHRD & ICPR', from: '01 May 2014', to: '07 May 2014' },
]

export const committees: CommitteeRole[] = [
  { id: 1, name: 'State Level: Regional Quality Assurance Cell (RQAC)', role: 'Member', year: '2024' },
  { id: 2, name: 'Student Welfare Schemes Committee', role: 'Member', year: '2024' },
  { id: 3, name: 'Ph.D. Entrance Exam Committee', role: 'Member', year: '2024' },
  { id: 4, name: 'Confidential Correction Committee', role: 'Member', year: '2024' },
  { id: 5, name: 'Anti Ragging Squad', role: 'Member', year: '2024' },
  { id: 6, name: 'IQAC Scrutiny Committee', role: 'Member', year: '2024' },
  { id: 7, name: 'Non-Teaching Scrutiny Committee', role: 'Member', year: '2024' },
  { id: 8, name: 'Institute Innovation Committee', role: 'Member', year: '2024' },
  { id: 9, name: 'Constituent College Screening Committee', role: 'Coordinator', year: '2023' },
  { id: 10, name: 'Affiliation/ Inspection Committee', role: 'Member', year: '2023' },
  { id: 11, name: 'Answer Key Jumbling Committee', role: 'Member', year: '2023' },
  { id: 12, name: 'NAAC Steering Committee', role: 'Member', year: '2022' },
  { id: 13, name: 'NAAC Core Committee', role: 'Member', year: '2022' },
  { id: 14, name: 'Answer Key Jumbling Committee (Second Term)', role: 'Member', year: '2022' },
  { id: 15, name: 'Answer Book Tender Committee', role: 'Member', year: '2022' },
  { id: 16, name: 'Board of Studies, Department of Education CSJMU', role: 'Member', year: '2022' },
  { id: 17, name: 'Government Degree College, Lotna Purwa Unnao, Handover Committee', role: 'Co-coordinator', year: '2022' },
  { id: 18, name: 'Digital Marketing Committee', role: 'Member', year: '2022' },
  { id: 19, name: 'Curriculum Revision Committee (M.Ed.)', role: 'Member', year: '2024 (Dept Level)' },
  { id: 20, name: 'Internal Academic Monitoring Committee', role: 'Coordinator', year: '2022 (Dept Level)' },
  { id: 21, name: 'Orientation and Admission Committee', role: 'Member', year: '2022 (Dept Level)' },
  { id: 22, name: 'Internship Management Committee', role: 'Member', year: '2022 (Dept Level)' },
  { id: 23, name: 'Departmental Quality Assurance Cell', role: 'Member', year: '2022 (Dept Level)' },
]

export const administrativeResponsibilities: AdminResponsibility[] = [
  { id: 1, responsibility: 'Deputy Director (Technical), Dronacharya Centre for Online and Distance Education (D-CODE), Centre for Distance and Online Education, CSJM University Kanpur UP', date: '06.08.2025 to present' },
  { id: 2, responsibility: 'Observer, B.Ed. JEE 2025', date: '30.05.2025' },
  { id: 3, responsibility: 'Associate Chief Proctor, CSJM University Kanpur UP', date: '03.03.2025 to till date' },
  { id: 4, responsibility: 'Co-coordinator, Ph.D. Entrance Examination', date: '2024 – 2025' },
  { id: 5, responsibility: 'Observer, B.Ed. JEE 2024', date: '06.06.2024' },
  { id: 6, responsibility: 'Officiating Principal, Government Degree College Lotna Purwa Unnao', date: '01.06.2024 to 27.06.2024' },
  { id: 7, responsibility: 'Programme Coordinator, Dronacharya Centre for Online and Distance Education (D-CODE), CSJM University Kanpur', date: '2024' },
  { id: 8, responsibility: 'Nodal Officer, Pre-Ph.D. Course Work', date: '2023 – 2024' },
  { id: 9, responsibility: 'Member, Institute Innovation Council (IIC 6.0)', date: '15.03.2024' },
  { id: 10, responsibility: 'Assistant Dean, Research & Development Cell, CSJM University Kanpur UP', date: '28.04.2023 to 28.02.2025' },
  { id: 11, responsibility: 'Nodal Officer, Scholarship, Government Degree College Lotna Purwa Unnao', date: 'Since 2023' },
  { id: 12, responsibility: 'Observer B.Ed. JEE 2023', date: '10.06.2023' },
  { id: 13, responsibility: 'Coordinator, RM-B2 Group, Pre-Ph.D. Course Work', date: '2022 - 2023' },
  { id: 14, responsibility: 'Member, Board of Studies, Department of Education CSJMU', date: 'Since 2022' },
  { id: 15, responsibility: 'In-charge, Departmental Website', date: 'Since 2022' },
  { id: 16, responsibility: 'In-charge, Department Alumni Association', date: 'Since 2022' },
  { id: 17, responsibility: 'Coordinator, Government Degree College Lotna Purwa Unnao', date: '07.06.2022 to 18.04.2026' },
  { id: 18, responsibility: 'Observer, B.Ed. JEE 2022', date: '02.07.2022' },
]

export const coCurricularActivities: CoCurricularActivity[] = [
  { id: 1, description: 'Pedagogy 5.0: Advancing Teaching & Research with AI and Technology', from: '01 September 2025', to: '05 September 2025' },
  { id: 2, description: 'Student Entrepreneurship Training (SET) Bootcamp 2025', from: '26 May 2025', to: '31 May 2025' },
  { id: 3, description: 'One Day Orientation Programme on Startup Shiksha with the Collaboration of CSJM Innovation Foundation (CSJMIF)', from: '11 April 2025', to: '11 April 2025' },
  { id: 4, description: 'One Day Orientation Programme on NTA-NET Preparation Under the State Government Scheme "Mukhyamantri Abhyuday Yojna"', from: '07 April 2025', to: '07 April 2025' },
  { id: 5, description: 'Two Day Lecture Series on Ethics in Writing Dissertation', from: '20 February 2025', to: '21 February 2025' },
  { id: 6, description: 'One Day Orientation Ph.D. Orientation Programme', from: '08 February 2025', to: '08 February 2025' },
  { id: 7, description: 'Organization of Debate and Speech Contest on 148th Birth Anniversary of Sardar Vallabh Bhai Patel and National Unity Day', from: '14 November 2024', to: '14 November 2024' },
  { id: 8, description: 'Two Week Workshop on "Understanding of Research Methodology; Paradigms, Practices and Processes"', from: '14 October 2024', to: '27 October 2025' },
  { id: 9, description: 'Ten Days Workshop on "Understanding of Research Methodology; Paradigms, Practices and Processes"', from: '24 November 2023', to: '03 December 2023' },
  { id: 10, description: 'One Day National Conference on Understanding Learning Disability: Strategical Review, Practices & Processes', from: '28 October 2023', to: '28 October 2023' },
]

export const memberships: string[] = [
  'Lifetime Membership of the Indian Association of Teacher Educators (IATE) w.e.f. September 29/2025, Membership ID: V2504334',
  'Lifetime Membership of the Indian Academic Researchers Association (IARA) w.e.f. October 07/2025, Membership No – 1588/2025',
  'Chief Editor, NOUS:- A Half-yearly Journal of Education, Arts, Humanities and Social Sciences',
  'Bhartiya Shiksha Shodh Sansthan – Receipt No.-035, Date-02/02/2017',
  'In Editorial Board of Research Journey in Education- A Bilingual Annual Journal of Education (ISSN-2321-256X, Reg. No: 165213/2011)',
  'In Editorial Board of Educational Metamorphosis: A Half-yearly Refereed & Peer-reviewed International Journal of Education, ISSN: 2583-4754',
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
}

export interface NtaNetResource {
  id: number
  title: string
  desc: string
  category: 'preparation' | 'materials' | 'mcqs' | 'videos' | 'success'
  subcategory: string
  type: 'PDF' | 'Link' | 'Video' | 'Quiz' | 'Mind Map' | 'PPT' | 'Text'
  fileSize?: string
  duration?: string
  link?: string
}

export const researchNewsData: ResearchNewsItem[] = [
  {
    id: 1,
    title: 'Dr. Vimal Singh’s Empirical Study on Tagore’s Vision Featured in National News',
    source: 'Dainik Jagran',
    date: '15 June 2026',
    desc: 'A detailed feature covering Dr. Singh’s latest research on Tagore’s educational philosophy and its modern relevance in shaping learner values.',
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    mediaType: 'Newspaper',
    link: '#',
  },
  {
    id: 2,
    title: 'CSJM University Bulletin Highlights New AI-Driven Education Patents',
    source: 'University Press',
    date: '20 May 2025',
    desc: 'Official newsletter spotlight on the two recently published patents designed to assist language teachers through automated cognitive load monitoring.',
    category: 'media-coverage',
    subcategory: 'University News',
    mediaType: 'University',
    link: '#',
  },
  {
    id: 3,
    title: 'Press Release: National Seminar on NEP 2020 Implementation Roadmaps',
    source: 'CSJMU Media Cell',
    date: '04 March 2024',
    desc: 'Official press release outlining Dr. Vimal Singh’s co-chairing and execution of the ICSSR-sponsored national seminar on tradition and multidisciplinary culture.',
    category: 'media-coverage',
    subcategory: 'Press Releases',
    mediaType: 'Press Release',
    link: '#',
  },
  {
    id: 4,
    title: 'Television Coverage: AI Tools in Higher Education Panel Discussion',
    source: 'DD Gyan Darshan',
    date: '10 November 2024',
    desc: 'A recorded live panel featuring Dr. Vimal Singh discussing the future of AI pedagogical integrations and ethical guidelines for research in India.',
    category: 'digital-media',
    subcategory: 'Television Coverage',
    mediaType: 'TV',
    link: '#',
  },
  {
    id: 5,
    title: 'Exclusive Interview: Re-conditioning Teacher Competencies under NEP 2020',
    source: 'Academic Insights India',
    date: '25 April 2025',
    desc: 'Dr. Vimal Singh discusses in-depth challenges, strategies, and course outcomes for B.Ed. and M.Ed. curriculum mapping in modern teacher training.',
    category: 'digital-media',
    subcategory: 'Interviews',
    mediaType: 'Interview',
    link: '#',
  },
  {
    id: 6,
    title: 'Podcast: The Cognitive Classroom & AI Search Engines',
    source: 'EduTech Bytes Podcast',
    date: '09 February 2026',
    desc: 'Episode 42: An engaging conversation with Dr. Vimal Singh on AI-powered academic search tools and reducing learner cognitive overload.',
    category: 'digital-media',
    subcategory: 'Podcasts',
    mediaType: 'Podcast',
    link: '#',
  },
]

export const ntaNetResourcesData: NtaNetResource[] = [
  // NET Preparation
  { id: 1, title: 'About NTA UGC NET - Comprehensive Guide', desc: 'Understanding the exam structure, qualifications, and core differences between NET and JRF.', category: 'preparation', subcategory: 'About UGC NET', type: 'PDF', fileSize: '1.2 MB', link: '#' },
  { id: 2, title: 'UGC NET Paper I & II Exam Pattern Breakdown', desc: 'Detailed scheme of marks, question counts, duration, and marking systems.', category: 'preparation', subcategory: 'Exam Pattern', type: 'Link', link: '#' },
  { id: 3, title: 'Latest UGC NET Education (Paper II) Syllabus', desc: 'Download official syllabus including Unit 1 to Unit 10 for Education aspirants.', category: 'preparation', subcategory: 'Latest Syllabus', type: 'PDF', fileSize: '850 KB', link: '#' },
  { id: 4, title: 'UGC NET Eligibility Criteria & Age Limit rules', desc: 'Official guidelines on academic percentage thresholds, age relaxations for JRF/Assistant Professor.', category: 'preparation', subcategory: 'Eligibility', type: 'Link', link: '#' },
  { id: 5, title: 'Important Exam Dates & Notification Center', desc: 'Keep track of application portals, admit card releases, and scheduling dates.', category: 'preparation', subcategory: 'Important Dates', type: 'Text', link: '#' },
  { id: 6, title: 'UGC NET Previous Year Cutoff Trends (2020-2025)', desc: 'Analyzed list of category-wise cutoff trends for JRF and Assistant Professorship in Education.', category: 'preparation', subcategory: 'Previous Year Trends', type: 'PDF', fileSize: '1.5 MB', link: '#' },

  // Study Materials
  { id: 7, title: 'Unit 1: Educational Studies - Core Notes', desc: 'Complete conceptual summaries on Indian & Western schools of philosophy.', category: 'materials', subcategory: 'Notes', type: 'PDF', fileSize: '2.4 MB', link: '#' },
  { id: 8, title: 'Teaching Aptitude (Paper I) Quick Reference Guide', desc: 'Key methods of teaching, learner characteristics, and evaluation systems.', category: 'materials', subcategory: 'PDF Resources', type: 'PDF', fileSize: '3.1 MB', link: '#' },
  { id: 9, title: 'Research Methodology PPT Slides Deck', desc: 'Slide repository on descriptive, experimental, and qualitative research designs.', category: 'materials', subcategory: 'PPT Repository', type: 'PPT', fileSize: '5.2 MB', link: '#' },
  { id: 10, title: 'UGC NET Paper I - Higher Education System Short Notes', desc: 'Handwritten bullet notes on commissions, committees, and policy developments.', category: 'materials', subcategory: 'Short Notes', type: 'PDF', fileSize: '950 KB', link: '#' },
  { id: 11, title: 'Mind Map: Cognitive & Development Theories', desc: 'Visual connection map for Piaget, Vygotsky, and Erikson models.', category: 'materials', subcategory: 'Mind Maps', type: 'Mind Map', link: '#' },
  { id: 12, title: 'Educational Research Vocabulary Flash Cards', desc: 'Study cards for terms like validity, reliability, variables, and hypothesis types.', category: 'materials', subcategory: 'Flash Cards', type: 'Link', link: '#' },
  { id: 13, title: 'NEP 2020 High-Yield Key Points Infographic', desc: 'Interactive poster highlighting structural recommendations and bodies.', category: 'materials', subcategory: 'Infographics', type: 'PDF', fileSize: '4.8 MB', link: '#' },

  // MCQ Practice
  { id: 14, title: 'Topic-wise MCQs: Philosophical Foundations', desc: '50 practice questions covering Sankhya, Yoga, Vedanta, Pragmatism.', category: 'mcqs', subcategory: 'Topic-wise MCQs', type: 'Quiz', link: '#' },
  { id: 15, title: 'Education (Paper II) 2025 Solved PYQs', desc: 'Complete solved paper with answers and analytical explanations.', category: 'mcqs', subcategory: 'PYQs', type: 'PDF', fileSize: '2.1 MB', link: '#' },
  { id: 16, title: 'Daily Quiz: Research Aptitude Essentials', desc: 'Take a quick 10-question quiz to test your daily learning progress.', category: 'mcqs', subcategory: 'Daily Quiz', type: 'Quiz', link: '#' },
  { id: 17, title: 'Weekly Test: Full Paper I Evaluation', desc: '50 questions simulating Paper I timing and curriculum distribution.', category: 'mcqs', subcategory: 'Weekly Test', type: 'Quiz', link: '#' },
  { id: 18, title: 'Education Subject Free Mock Test 1', desc: '100 question mock test designed on latest UGC NET syllabus.', category: 'mcqs', subcategory: 'Mock Tests', type: 'Quiz', link: '#' },

  // Video Library
  { id: 19, title: 'Understanding Bloom’s Taxonomy (Recorded Class)', desc: '1-hour lecture explaining levels of learning objectives with examples.', category: 'videos', subcategory: 'Recorded Classes', type: 'Video', duration: '45 mins', link: '#' },
  { id: 20, title: 'Research Bytes: What is a Type I and Type II Error?', desc: 'Short high-yield video summarizing hypothesis testing errors.', category: 'videos', subcategory: 'Research Bytes', type: 'Video', duration: '5 mins', link: '#' },
  { id: 21, title: 'Qualitative vs Quantitative Research Methods', desc: 'Core concept breakdown under 10 minutes.', category: 'videos', subcategory: 'Short Concept Videos', type: 'Video', duration: '8 mins', link: '#' },
  { id: 22, title: 'Live Q&A: UGC NET Education Prep Strategy', desc: 'Recorded live Q&A session answering student doubts.', category: 'videos', subcategory: 'Live Sessions', type: 'Video', duration: '60 mins', link: '#' },

  // Success Stories
  { id: 23, title: 'Aakash Sharma (NET Qualified - 2025)', desc: '"Dr. Singh’s guidance on educational research and research aptitude was crucial for my Paper I score."', category: 'success', subcategory: 'NET Qualified Students', type: 'Text', link: '#' },
  { id: 24, title: 'Priyanka Patel (JRF Awardee - 2024)', desc: '"The unit-wise test series and detailed mind maps helped me secure a JRF in Education in my second attempt."', category: 'success', subcategory: 'JRF Awardees', type: 'Text', link: '#' },
]
