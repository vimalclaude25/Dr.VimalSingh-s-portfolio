'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageSquare, Calendar, ShieldCheck, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { personalInfo } from '@/lib/cv-data'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject,
          Message: formData.message
        })
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' })
      } else {
        throw new Error(data.error || 'Failed to send message.')
      }
    } catch (err: any) {
      console.error(err)
      setStatus('idle')
      alert(`Submission Error: ${err.message || 'Unable to send message at this time. Please check your internet connection or try again later.'}`)
    }
  }

  return (
    <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 text-sm font-semibold">
          <li className="inline-flex items-center">
            <Link href="/" className="text-muted-foreground hover:text-royal transition-colors flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-navy dark:text-white">Contact</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <div className="mb-12 text-center">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-navy dark:text-white sm:text-5xl">
          Contact &amp; Inquiry Portal
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Submit consultation requests for research guidance, invite Dr. Singh for lectures, or collaborate on Artificial Intelligence in education projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Info & Office Card */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-6 border-b border-border/50 pb-2">
              Office Information
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-royal shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-navy dark:text-white block">Department Address:</span>
                  <p className="mt-0.5 leading-relaxed">
                    {personalInfo.departmentName}, School of Teacher Education, C.S.J.M. University, Kanpur UP - 208024
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-royal shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-navy dark:text-white block">Official Email:</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-royal hover:underline mt-0.5 block font-semibold">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-royal shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-navy dark:text-white block">Contact Channels:</span>
                  <p className="mt-0.5 font-semibold text-navy dark:text-white">
                    {personalInfo.contact.join(' | ')}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">WhatsApp: {personalInfo.whatsapp}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-navy dark:text-white mb-4">Office Hours</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li className="flex justify-between border-b border-border/30 pb-1.5">
                <span>Monday - Friday</span>
                <span className="font-bold text-navy dark:text-white">10:00 AM - 04:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span className="text-gold font-semibold">By Appointment Only</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-6 border-b border-border/50 pb-2">
              Send Message
            </h2>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-6 text-center text-emerald-600 dark:text-emerald-400"
              >
                <ShieldCheck className="h-10 w-10 mx-auto text-emerald-500 mb-3" />
                <h3 className="font-heading text-lg font-bold">Message Sent Successfully!</h3>
                <p className="text-sm mt-1">Thank you. Dr. Vimal Singh will respond to your inquiry shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy dark:text-white uppercase tracking-wider mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:border-royal transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-navy dark:text-white uppercase tracking-wider mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:border-royal transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy dark:text-white uppercase tracking-wider mb-1">Inquiry Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:border-royal transition-colors cursor-pointer"
                  >
                    <option>General Inquiry</option>
                    <option>Research Collaboration</option>
                    <option>M.Ed. / Ph.D. Guidance</option>
                    <option>Lecture / Seminar Invitation</option>
                    <option>AI Lab Projects</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy dark:text-white uppercase tracking-wider mb-1">Your Message</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:border-royal transition-colors resize-none"
                    placeholder="Write your details, objectives, or questions here..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full rounded-xl bg-royal text-white font-bold py-3 px-4 flex items-center justify-center gap-2 hover:bg-royal/95 transition-all shadow-md shadow-royal/10"
                  >
                    {status === 'sending' ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Send Inquiry Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

