'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, BookOpen, Search, ChevronDown, Printer } from 'lucide-react'
import Link from 'next/link'

interface SyllabusUnit {
  number: number
  title: string
  topics: {
    letter: string
    content: string
  }[]
}

const syllabusData: SyllabusUnit[] = [
  {
    number: 1,
    title: 'Educational Studies',
    topics: [
      {
        letter: 'a',
        content: 'Contribution of Indian Schools of philosophy (Sankhya Yoga, Vedanta, Buddhism, Jainism) with special reference to Vidya, Dayanand Darshan; and Islamic traditions towards educational aims and methods of acquiring valid knowledge'
      },
      {
        letter: 'b',
        content: 'Contribution of Western schools of thoughts (Idealism, Realism, Naturalism, Pragmatism, Marxism, Existentialism) and their contribution to Education with special reference to information, knowledge and wisdom'
      },
      {
        letter: 'c',
        content: 'Approaches to Sociology of Education (symbolic Interaction, Structural Functionalism and Conflict Theory). Concept and types of social Institutions and their functions (family, school and society), Concept of Social Movements, Theories of Social Movements (Relative Deprivation, Resource Mobilization, Political Process Theory and New Social Movement Theory)'
      },
      {
        letter: 'd',
        content: 'Socialization and education- education and culture; Contribution of thinkers (Swami Vivekananda, Rabindranath Tagore, Mahatma Gandhi, Aurobindo, J.Krishnamurthy, Paulo Freire, Wollstonecraft, Nel Noddings and Savitribai Phule) to the development of educational thought for social change, National Values as enshrined in the Indian Constitution - Socialism, Secularism, justice, liberty, democracy, equality, freedom with special reference to education'
      }
    ]
  },
  {
    number: 2,
    title: 'History, Politics and Economics of Education',
    topics: [
      {
        letter: 'a',
        content: 'Committees and Commissions’ Contribution to Teacher Education Secondary Education Commission (1953), Kothari Education Commission (1964-66), National Policy of Education (1986,1992), National Commission on Teachers (1999), National Curriculum Framework 2005, National Knowledge Commission (2007), Yashpal Committee Report (2009), National Curriculum Framework for Teacher Education (2009), Justice Verma Committee Report (2012)'
      },
      {
        letter: 'b',
        content: 'Relationship between Policies and Education, Linkage between Educational Policy and National Development, Determinants of Educational Policy and Process of Policy formulation: Analysis of the existing situation, generation of policy options, evaluation of policy options, making the policy decision, planning of policy implementation, policy impact assessment and subsequent policy cycles.'
      },
      {
        letter: 'c',
        content: 'Concept of Economics of Education: Cost Benefit Analysis Vs Cost Effective Analysis in Education, Economic returns to Higher Education Signaling Theory Vs Human Capital Theory, Concept of Educational Finance; Educational finance at Micro and Macro Levels, Concept of Budgeting'
      },
      {
        letter: 'd',
        content: 'Relationship Between Politics and Education, Perspectives of Politics of Education Liberal, Conservative and Critical, Approaches to understanding Politics (Behaviouralism, Theory of Systems Analysis and Theory of Rational Choice), Education for Political Development and Political Socialization'
      }
    ]
  },
  {
    number: 3,
    title: 'Learner and Learning Process',
    topics: [
      {
        letter: 'a',
        content: 'Growth and Development: Concept and principles, Cognitive Processes and stages of Cognitive Development, Personality: Definitions and theories (Freud, Carl Rogers, Gordon Allport, Max Wertheimer, Kurt Koffka), Mental health and Mental hygiene'
      },
      {
        letter: 'b',
        content: 'Approaches to Intelligence from Unitary to Multiple: Concepts of Social intelligence, multiple intelligence, emotional intelligence Theories of Intelligence by Sternberg, Gardner, Assessment of Intelligence, Concepts of Problem Solving, Critical thinking, Metacognition and Creativity'
      },
      {
        letter: 'c',
        content: 'Principles and Theories of learning: Behaviouristic, Cognitive and Social theories of learning, Factors affecting social learning, social competence, Concept of social cognition, understanding social relationship and socialization goals'
      },
      {
        letter: 'd',
        content: 'Guidance and Counselling: Nature, Principles and Need, Types of guidance (educational, vocational, personal, health and social & Directive, Non-directive and Eclectic), Approaches to counselling – Cognitive-Behavioural (Albert Ellis – REBT) & Humanistic, Person-centred Counselling (Carl Rogers) - Theories of Counselling (Behaviouristic, Rational, Emotive and Reality)'
      }
    ]
  },
  {
    number: 4,
    title: 'Teacher Education',
    topics: [
      {
        letter: 'a',
        content: 'Meaning, Nature and Scope of Teacher Education; Types of Teacher Education Programs, The Structure of Teacher Education Curriculum and its Vision in Curriculum Documents of NCERT and NCTE at Elementary, Secondary and Higher Secondary Levels, Organization of Components of Pre-service Teacher Education Transactional Approaches (for foundation courses) Expository, Collaborative and Experiential learning'
      },
      {
        letter: 'b',
        content: 'Understanding Knowledge base of Teacher Education from the view point of Schulman, Deng and Luke & Habermas, Meaning of Reflective Teaching and Strategies for Promoting Reflective Teaching, Models of Teacher Education - Behaviouristic, Competency-based and Inquiry Oriented Teacher Education Models'
      },
      {
        letter: 'c',
        content: 'Concept, Need, Purpose and Scope of In-service Teacher Education, Organization and Modes of In-service Teacher Education, Agencies and Institutions of In-service Teacher Education at District, State and National Levels (SSA, RMSA, SCERT, NCERT, NCTE and UGC), Preliminary Consideration in Planning in-service teacher education programme (Purpose, Duration, Resources and Budget)'
      },
      {
        letter: 'd',
        content: 'Concept of Profession and Professionalism, Teaching as a Profession, Professional Ethics of Teachers, Personal and Contextual factors affecting Teacher Development, ICT Integration, Quality Enhancement for Professionalization of Teacher Education, Innovation in Teacher Education'
      }
    ]
  },
  {
    number: 5,
    title: 'Curriculum Studies',
    topics: [
      {
        letter: 'a',
        content: 'Concept and Principles of Curriculum, Strategies of Curriculum Development, Stages in the Process of Curriculum development, Foundations of Curriculum Planning - Philosophical Bases (National, democratic), Sociological basis (socio cultural reconstruction), Psychological Bases (learner’s needs and interests), Bench marking and Role of National level Statutory Bodies - UGC, NCTE and University in Curriculum Development'
      },
      {
        letter: 'b',
        content: 'Models of Curriculum Design: Traditional and Contemporary Models (Academic / Discipline Based Model, Competency Based Model, Social Functions / Activities Model [social reconstruction], Individual Needs & Interests Model, Outcome Based Integrative Model, Intervention Model, C I P P Model (Context, Input, Process, Product Model)'
      },
      {
        letter: 'c',
        content: 'Instructional System, Instructional Media, Instructional Techniques and Material in enhancing curriculum Transaction, Approaches to Evaluation of Curriculum: Approaches to Curriculum and Instruction (Academic and Competency Based Approaches), Models of Curriculum Evaluation: Tyler’s Model, Stakes’ Model, Scriven’s Model, Kirkpatrick’s Model'
      },
      {
        letter: 'd',
        content: 'Meaning and types of Curriculum change, Factors affecting curriculum change, Approaches to curriculum change, Role of students, teachers and educational administrators in curriculum change and improvement, Scope of curriculum research and Types of Research in Curriculum Studies'
      }
    ]
  },
  {
    number: 6,
    title: 'Research in Education',
    topics: [
      {
        letter: 'a',
        content: 'Meaning and Scope of Educational Research, Meaning and steps of Scientific Method, Characteristics of Scientific Method (Replicability, Precision, Falsifiability and Parsimony), Types of Scientific Method (Exploratory, Explanatory and Descriptive), Aims of research as a scientific activity: Problem-solving, Theory Building and Prediction, Types of research (Fundamental, Applied and Action), Approaches to educational research (Quantitative and Qualitative), Designs in educational research (Descriptive, Experimental and Historical)'
      },
      {
        letter: 'b',
        content: 'Variables: Meaning of Concepts, Constructs and Variables, Types of Variables (Independent, Dependent, Extraneous, Intervening and Moderator), Hypotheses - Concept, Sources, Types (Research, Directional, Non-directional, Null), Formulating Hypothesis, Characteristics of a good hypothesis, Steps of Writing a Research Proposal, Concept of Universe and Sample, Characteristics of a good Sample, Techniques of Sampling (Probability and Non-probability Sampling), Tools of Research - Validity, Reliability and Standardisation of a Tool, Types of Tools (Rating scale, Attitude scale, Questionnaire, Aptitude test and Achievement Test, Inventory), Techniques of Research (Observation, Interview and Projective Techniques)'
      },
      {
        letter: 'c',
        content: 'Types of Measurement Scale (Nominal, Ordinal, Interval and Ratio), Quantitative Data Analysis - Descriptive data analysis (Measures of central tendency, variability, fiduciary limits and graphical presentation of data), Testing of Hypothesis (Type I and Type II Errors), Levels of Significance, Power of a statistical test and effect size, Parametric Techniques, Non- Parametric Techniques, Conditions to be satisfied for using parametric techniques, Inferential data analysis, Use and Interpretation of statistical techniques: Correlation, t-test, z-test, ANOVA, chi-square (Equal Probability and Normal Probability Hypothesis). Qualitative Data Analysis - Data Reduction and Classification, Analytical Induction and Constant Comparison, Concept of Triangulation'
      },
      {
        letter: 'd',
        content: 'Qualitative Research Designs: Grounded Theory Designs (Types, characteristics, designs, Steps in conducting a GT research, Strengths and Weakness of GT) - Narrative Research Designs (Meaning and key Characteristics, Steps in conducting NR design), Case Study (Meaning, Characteristics, Components of a CS design, Types of CS design, Steps of conducting a CS research, Strengths and weaknesses), Ethnography (Meaning, Characteristics, Underlying assumptions, Steps of conducting ethnographic research, Writing ethnographic account, Strengths and weaknesses), Mixed Method Designs: Characteristics, Types of MM designs (Triangulation, explanatory and exploratory designs), Steps in conducting a MM designs, Strengths and weakness of MM research.'
      }
    ]
  },
  {
    number: 7,
    title: 'Pedagogy, Andragogy and Assessment',
    topics: [
      {
        letter: 'a',
        content: 'Pedagogy, Pedagogical Analysis - Concept and Stages, Critical Pedagogy- Meaning, Need and its implications in Teacher Education, Organizing Teaching: Memory Level (Herbartian Model), Understanding Level (Morrison teaching Model), Reflective Level (Bigge and Hunt teaching Model), Concept of Andragogy in Education: Meaning, Principles, Competencies of Self-directed Learning, Theory of Andragogy (Malcolm Knowles), The Dynamic Model of Learner Autonomy'
      },
      {
        letter: 'b',
        content: 'Assessment – Meaning, nature, perspectives (assessment for Learning, assessment of learning and Assessment of Learning) - Types of Assessment (Placement, formative, diagnostic, summative) Relations between objectives and outcomes, Assessment of Cognitive (Anderson and Krathwohl), Affective (Krathwohl) and psychomotor domains (R.H. Dave) of learning'
      },
      {
        letter: 'c',
        content: 'Assessment in Pedagogy of Education: Feedback Devices: Meaning, Types, Criteria, Guidance as a Feedback Devices: Assessment of Portfolios, Reflective Journal, Field Engagement using Rubrics, Competency Based Evaluation, Assessment of Teacher Prepared ICT Resources'
      },
      {
        letter: 'd',
        content: 'Assessment in Andragogy of Education - Interaction Analysis: Flanders’ Interaction analysis, Galloway’s system of interaction analysis (Recording of Classroom Events, Construction and Interpretation of Interaction Matrix), Criteria for teacher evaluation (Product, Process and Presage criteria, Rubrics for Self and Peer evaluation (Meaning, steps of construction).'
      }
    ]
  },
  {
    number: 8,
    title: 'Technology in/ for Education',
    topics: [
      {
        letter: 'a',
        content: 'Concept of Educational Technology (ET) as a Discipline: (Information Technology, Communication Technology & Information and Communication Technology (ICT) and Instructional Technology, Applications of Educational Technology in formal, non formal (Open and Distance Learning), informal and inclusive education systems, Overview of Behaviourist, Cognitive and Constructivist Theories and their implications to Instructional Design (Skinner, Piaget, Ausubel, Bruner, Vygotsky), Relationship between Learning Theories and Instructional Strategies (for large and small groups, formal and non formal groups )'
      },
      {
        letter: 'b',
        content: 'Systems Approach to Instructional Design, Models of Development of Instructional Design (ADDIE, ASSURE, Dick and Carey Model Mason’s), Gagne’s Nine Events of Instruction and Five E’s of Constructivism, Nine Elements of Constructivist Instructional Design, Application of Computers in Education: CAI, CAL, CBT, CML, Concept, Process of preparing ODLM, Concept of e learning, Approaches to e learning (Offline, Online, Synchronous, Asynchronous, Blended learning, mobile learning)'
      },
      {
        letter: 'c',
        content: 'Emerging Trends in e learning: Social learning (concept, use of web 2.0 tools for learning, social networking sites, blogs, chats, video conferencing, discussion forum), Open Education Resources (Creative Common, Massive Open Online Courses; Concept and application), E Inclusion - Concept of E Inclusion, Application of Assistive technology in E learning, Quality of E Learning – Measuring quality of system: Information, System, Service, User Satisfaction and Net Benefits (D&M IS Success Model, 2003), Ethical Issues for E Learner and E Teacher - Teaching, Learning and Research'
      },
      {
        letter: 'd',
        content: 'Use of ICT in Evaluation, Administration and Research: E portfolios, ICT for Research - Online Repositories and Online Libraries, Online and Offline assessment tools (Online survey tools or test generators) – Concept and Development.'
      }
    ]
  },
  {
    number: 9,
    title: 'Educational Management, Administration and Leadership',
    topics: [
      {
        letter: 'a',
        content: 'Educational Management and Administration – Meaning, Principles, Functions and importance, Institutional building, POSDCORB, CPM, PERT, Management as a system, SWOT analysis, Taylorism, Administration as a process, Administration as a bureaucracy, Human relations approach to Administration, Organisational compliance, Organisational development, Organisational climate'
      },
      {
        letter: 'b',
        content: 'Leadership in Educational Administration: Meaning and Nature, Approaches to leadership: Trait, Transformational, Transactional, Value based, Cultural, Psychodynamic and Charismatic, Models of Leadership (Blake and Mouton’s Managerial Grid, Fiedler’s Contingency Model, Tri-dimensional Model, Hersey and Blanchard’s Model, Leader-Member Exchange Theory)'
      },
      {
        letter: 'c',
        content: 'Concept of Quality and Quality in Education: Indian and International perspective, Evolution of Quality: Inspection, Quality Control, Quality Assurance, Total Quality Management (TQM), Six sigma, Quality Gurus: Walter Shewart, Edward Deming, C.K Pralhad'
      },
      {
        letter: 'd',
        content: 'Change Management: Meaning, Need for Planned change, Three Step-Model of Change (Unfreezing, Moving, Refreezing), The Japanese Models of Change: Just-in-Time, Poka yoke, Cost of Quality: Appraisal Costs, Failure costs and Preventable costs, Cost Benefit Analysis, Cost Effective Analysis, Indian and International Quality Assurance Agencies: Objectives, Functions, Roles and Initiatives (National Assessment Accreditation Council [NAAC], Performance Indicators, Quality Council of India [QCI], International Network for Quality Assurance Agencies in Higher Education [INQAAHE].'
      }
    ]
  },
  {
    number: 10,
    title: 'Inclusive Education',
    topics: [
      {
        letter: 'a',
        content: 'Inclusive Education: Concept, Principles, Scope and Target Groups (Diverse learners; Including Marginalized group and Learners with Disabilities), Evolution of the Philosophy of Inclusive Education: Special, Integrated, Inclusive Education, Legal Provisions: Policies and Legislations (National Policy of Education (1986), Programme of Action of Action (1992), Persons with Disabilities Act (1995), National Policy of Disabilities (2006), National Curriculum Framework (2005), Concession and Facilities to Diverse Learners (Academic and Financial), Rehabilitation Council of India Act (1992), Inclusive Education under Sarva Shiksha Abhiyan (SSA), Features of UNCRPD (United Nations Convention on the Rights of Persons with Disabilities) and its Implication'
      },
      {
        letter: 'b',
        content: 'Concept of Impairment, Disability and Handicap, Classification of Disabilities based on ICF Model, Readiness of School and Models of Inclusion, Prevalence, Types, Characteristics and Educational Needs of Diverse learners’ Intellectual, Physical and Multiple Disabilities, Causes and prevention of disabilities, Identification of Diverse Learners for Inclusion, Educational Evaluation Methods, Techniques and Tools'
      },
      {
        letter: 'c',
        content: 'Planning and Management of Inclusive Classrooms: Infrastructure, Human Resource and Instructional Practices, Curriculum and Curricular Adaptations for Diverse Learners, Assistive and Adaptive Technology for Diverse learners: Product (Aids and Appliances) and Process (Individualized Education Plan, Remedial Teaching), Parent Professional Partnership: Role of Parents, Peers, Professionals, Teachers, School'
      },
      {
        letter: 'd',
        content: 'Barriers and Facilitators in Inclusive Education: Attitude, Social and Educational, Current Status and Ethical Issues of inclusive education in India, Research Trends of Inclusive Education in India'
      }
    ]
  }
]

export default function SyllabusPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedUnits, setExpandedUnits] = useState<number[]>([1]) // First unit expanded by default

  const toggleUnit = (num: number) => {
    if (expandedUnits.includes(num)) {
      setExpandedUnits(expandedUnits.filter(n => n !== num))
    } else {
      setExpandedUnits([...expandedUnits, num])
    }
  }

  const expandAll = () => setExpandedUnits(syllabusData.map(u => u.number))
  const collapseAll = () => setExpandedUnits([])

  // Filter topics based on search query
  const filteredSyllabus = syllabusData.map(unit => {
    const matchingTopics = unit.topics.filter(topic =>
      topic.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
    return {
      ...unit,
      matchingTopics
    }
  }).filter(unit => 
    unit.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    unit.matchingTopics.length > 0
  )

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 print:p-0">
      {/* Breadcrumb */}
      <nav className="mb-6 flex print:hidden" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 text-sm font-semibold">
          <li className="inline-flex items-center">
            <Link href="/" className="text-muted-foreground hover:text-royal transition-colors flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-muted-foreground">/</span>
              <Link href="/e-resources" className="text-muted-foreground hover:text-royal transition-colors">
                E-Resources
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-navy dark:text-white">UGC NET Syllabus</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Header card */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10 shadow-lg mb-8">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-royal/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-royal/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-royal">
                <BookOpen className="h-3.5 w-3.5" /> Paper II Syllabus
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
                Subject Code: 09
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-navy dark:text-white">
              UGC NET Education Syllabus
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
              Official curriculum issued by University Grants Commission (UGC) Net Bureau. Complete Unit 1 to Unit 10 contents structured for learning, revision, and preparation tracking.
            </p>
          </div>

          <div className="flex gap-2.5 print:hidden">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-bold text-navy dark:text-white hover:border-royal/50 transition-colors shadow-sm cursor-pointer"
            >
              <Printer className="h-4 w-4" /> Print Syllabus
            </button>
          </div>
        </div>
      </div>

      {/* Control bar */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between print:hidden">
        {/* Search */}
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search topics, keywords, units..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all focus:border-royal focus:ring-1 focus:ring-royal"
          />
        </div>

        {/* Action button toggles */}
        <div className="flex gap-2">
          <button
            onClick={expandAll}
            className="rounded-xl bg-royal/5 hover:bg-royal/10 text-royal px-3.5 py-2 text-xs font-bold transition-colors cursor-pointer"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="rounded-xl border border-border hover:bg-muted text-muted-foreground px-3.5 py-2 text-xs font-bold transition-colors cursor-pointer"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Units list */}
      <div className="space-y-4">
        {filteredSyllabus.map((unit) => {
          const isExpanded = expandedUnits.includes(unit.number)
          const topicsToShow = searchQuery ? unit.matchingTopics : unit.topics

          return (
            <motion.div
              key={unit.number}
              layout="position"
              className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:border-royal/30 transition-all print:border-none print:shadow-none"
            >
              {/* Unit header */}
              <button
                onClick={() => toggleUnit(unit.number)}
                className="w-full flex items-center justify-between p-5 text-left font-heading hover:bg-muted/30 transition-colors print:pointer-events-none cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal font-bold text-sm">
                    {unit.number}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-navy dark:text-white leading-snug">
                      Unit {unit.number}: {unit.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      Contains {topicsToShow.length} key sections
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-300 print:hidden ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Unit body contents */}
              <AnimatePresence initial={false}>
                {(isExpanded || searchQuery) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="border-t border-border/60 bg-muted/10"
                  >
                    <div className="p-6 space-y-5">
                      {topicsToShow.map((topic, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-xl border border-border/30 bg-card/50 shadow-sm"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold font-bold text-xs uppercase">
                            {topic.letter}
                          </span>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {topic.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}

        {filteredSyllabus.length === 0 && (
          <div className="py-24 text-center text-muted-foreground text-sm flex flex-col items-center justify-center gap-2">
            <BookOpen className="h-10 w-10 text-muted-foreground/60 mb-2" />
            No topics matched your search parameters.
          </div>
        )}
      </div>
    </div>
  )
}
