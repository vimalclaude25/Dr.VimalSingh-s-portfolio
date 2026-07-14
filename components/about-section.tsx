'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  Briefcase,
  Award,
  User,
  CheckCircle2,
  Calendar,
  MapPin,
  BookOpen,
} from 'lucide-react'
import {
  teachingExperience,
  professionalQualifications,
  academicQualifications,
  academicAchievements,
  specializations,
  personalInfo,
} from '@/lib/cv-data'

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'achievements' | 'bio'>('experience')

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  }

  return (
    <section id="about" className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-navy dark:text-white sm:text-4xl">
          About &amp; Academic Background
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-base text-muted-foreground">
          A dedicated educator and researcher with 12+ years of experience in higher education, focusing on Educational Technology, Artificial Intelligence in Education, and Curriculum Development.
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2 border-b border-border pb-px">
        {[
          { id: 'experience', label: 'Teaching Experience', icon: Briefcase },
          { id: 'education', label: 'Education & Qualifications', icon: GraduationCap },
          { id: 'achievements', label: 'Achievements & Specialization', icon: Award },
          { id: 'bio', label: 'Biographical Info', icon: User },
        ].map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 border-b-2 px-5 py-3 text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'border-royal text-royal'
                  : 'border-transparent text-muted-foreground hover:text-royal'
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Tab Contents */}
      <div className="min-h-[400px]">
        {activeTab === 'experience' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative border-l border-border pl-6 space-y-8 ml-4"
          >
            {teachingExperience.map((exp, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative">
                <span className="absolute -left-[35px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-royal bg-background">
                  <span className="h-1.5 w-1.5 rounded-full bg-royal" />
                </span>
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-royal/30 hover:shadow-md">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-royal/10 px-3 py-1 text-xs font-semibold text-royal">
                    <Calendar className="h-3 w-3" /> {exp.duration}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold text-navy dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="mt-1 flex items-start gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                    {exp.organization}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'education' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-6 md:grid-cols-2"
          >
            {/* Professional Qualifications */}
            <motion.div
              variants={itemVariants}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-4 flex items-center gap-2 font-heading text-xl font-bold text-navy dark:text-white">
                <GraduationCap className="h-5 w-5 text-royal" /> Professional Qualifications
              </h3>
              <div className="space-y-5">
                {professionalQualifications.map((qual, idx) => (
                  <div key={idx} className="border-l-2 border-royal/20 pl-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading text-sm font-bold text-navy dark:text-white">
                        {qual.degree}
                      </h4>
                      <span className="text-xs font-semibold text-royal">{qual.year}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">{qual.institution}</p>
                    {qual.details && (
                      <p className="mt-1.5 text-xs text-royal font-medium">{qual.details}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Academic Qualifications */}
            <motion.div
              variants={itemVariants}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-4 flex items-center gap-2 font-heading text-xl font-bold text-navy dark:text-white">
                <BookOpen className="h-5 w-5 text-royal" /> Academic Qualifications
              </h3>
              <div className="space-y-5">
                {academicQualifications.map((qual, idx) => (
                  <div key={idx} className="border-l-2 border-emerald-500/20 pl-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading text-sm font-bold text-navy dark:text-white">
                        {qual.degree}
                      </h4>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        {qual.year}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">{qual.institution}</p>
                    {qual.details && (
                      <p className="mt-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                        {qual.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'achievements' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-6 md:grid-cols-2"
          >
            {/* Achievements */}
            <motion.div
              variants={itemVariants}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-4 flex items-center gap-2 font-heading text-xl font-bold text-navy dark:text-white">
                <Award className="h-5 w-5 text-royal" /> Academic Achievements
              </h3>
              <ul className="space-y-4">
                {academicAchievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-royal" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{ach}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Specialization Areas */}
            <motion.div
              variants={itemVariants}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-4 flex items-center gap-2 font-heading text-xl font-bold text-navy dark:text-white">
                <CheckCircle2 className="h-5 w-5 text-royal" /> Specialization Areas
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Expertise in curriculum design and emerging pedagogical frameworks integration:
              </p>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec) => (
                  <span
                    key={spec}
                    className="rounded-xl border border-royal/15 bg-royal/5 px-3 py-1.5 text-xs font-semibold text-royal hover:bg-royal/10"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'bio' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-6 md:grid-cols-[1fr_2fr]"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center rounded-3xl border border-border bg-navy p-6 text-center text-white"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 font-heading text-2xl font-bold text-gold">
                VS
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold">{personalInfo.name}</h3>
              <p className="text-sm text-white/70">{personalInfo.title}</p>
              <p className="text-xs text-white/50 mt-1 max-w-[220px] mx-auto leading-relaxed">
                {personalInfo.departmentName && (
                  <>
                    {personalInfo.departmentName}
                    <br />
                  </>
                )}
                {personalInfo.department}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-4 font-heading text-lg font-bold text-navy dark:text-white">
                Biographical Information
              </h3>
              <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {[
                  { label: "Father's Name", value: personalInfo.biographical.fatherName },
                  { label: "Mother's Name", value: personalInfo.biographical.motherName },
                  { label: 'Date of Birth', value: personalInfo.biographical.dob },
                  { label: 'Gender', value: personalInfo.biographical.sex },
                  { label: 'Marital Status', value: personalInfo.biographical.maritalStatus },
                  { label: 'Office Address', value: personalInfo.biographical.address, span: true },
                ].map((item, idx) => (
                  <div key={idx} className={item.span ? 'sm:col-span-2' : ''}>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-sm font-medium text-navy dark:text-white">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

