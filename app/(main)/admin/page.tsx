'use client'

import { useState, useEffect } from 'react'
import {
  Lock,
  Plus,
  Trash2,
  Edit3,
  LogOut,
  Calendar,
  Newspaper,
  Upload,
  Globe,
  Loader,
  ArrowLeft,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AdminPage() {
  const [passcode, setPasscode] = useState('')
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [news, setNews] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  
  // Form states
  const [editingItem, setEditingItem] = useState<any | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    source: '',
    date: '',
    category: 'media-coverage',
    subcategory: 'Newspaper Coverage',
    desc: '',
    link: '#',
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState<string>('')

  useEffect(() => {
    const auth = localStorage.getItem('vimal_admin_auth')
    if (auth === 'true') {
      setIsAuthorized(true)
      fetchNews()
    } else {
      setLoading(false)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Dr. Vimal Singh's secure default admin passcode
    if (passcode === 'vimaladmin2026') {
      setIsAuthorized(true)
      localStorage.setItem('vimal_admin_auth', 'true')
      fetchNews()
    } else {
      setErrorMsg('Incorrect passcode. Please try again.')
      setPasscode('')
    }
  }

  const handleLogout = () => {
    setIsAuthorized(false)
    localStorage.removeItem('vimal_admin_auth')
  }

  const fetchNews = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/news')
      const data = await res.json()
      setNews(data)
    } catch (err) {
      console.error('Failed to fetch news data', err)
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)
      setFilePreview(URL.createObjectURL(file))
    }
  }

  const startEdit = (item: any) => {
    setEditingItem(item)
    setFormData({
      title: item.title,
      source: item.source,
      date: item.date,
      category: item.category,
      subcategory: item.subcategory,
      desc: item.desc,
      link: item.link || '#',
    })
    setFilePreview(item.image || '')
    setSelectedFile(null)
    setShowForm(true)
  }

  const startAdd = () => {
    setEditingItem(null)
    setFormData({
      title: '',
      source: '',
      date: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      category: 'media-coverage',
      subcategory: 'Newspaper Coverage',
      desc: '',
      link: '#',
    })
    setFilePreview('')
    setSelectedFile(null)
    setShowForm(true)
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      const fData = new FormData()
      if (editingItem) {
        fData.append('id', editingItem.id.toString())
        fData.append('existingImage', editingItem.image || '')
      }
      fData.append('title', formData.title)
      fData.append('source', formData.source)
      fData.append('date', formData.date)
      fData.append('category', formData.category)
      fData.append('subcategory', formData.subcategory)
      fData.append('desc', formData.desc)
      fData.append('link', formData.link)
      
      if (selectedFile) {
        fData.append('image', selectedFile)
      }

      const res = await fetch('/api/admin/news', {
        method: 'POST',
        body: fData,
      })

      if (res.ok) {
        await fetchNews()
        setShowForm(false)
        setEditingItem(null)
      } else {
        alert('Failed to save article.')
      }
    } catch (err) {
      console.error(err)
      alert('An error occurred while saving.')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this news article?')) return
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/news?id=${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        await fetchNews()
      } else {
        alert('Failed to delete article.')
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthorized) {
    return (
      <div className="mx-auto max-w-md px-4 py-32 flex flex-col justify-center items-center">
        <div className="w-full rounded-3xl border border-border bg-card p-8 shadow-xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-royal/10 text-royal mb-6">
            <Lock className="h-6 w-6" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-navy dark:text-white mb-2">
            Admin Access Panel
          </h1>
          <p className="text-sm text-muted-foreground mb-6">
            Please enter your secure passcode to manage publications and news clippings.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value)
                  setErrorMsg('')
                }}
                className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-center text-sm text-foreground outline-none focus:border-royal transition-colors"
                placeholder="••••••••••••"
              />
            </div>
            {errorMsg && (
              <p className="text-xs text-rose-500 font-semibold">{errorMsg}</p>
            )}
            <button
              type="submit"
              className="w-full rounded-xl bg-royal text-white font-bold py-3 text-xs uppercase tracking-wider hover:bg-royal/95 transition-all shadow-md shadow-royal/15 cursor-pointer"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Dashboard Top Navigation */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border/50 pb-5">
        <div>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-navy dark:text-white">
            News &amp; Media CMS
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Update and manage your press coverages, digital articles, and interviews.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={startAdd}
            className="inline-flex items-center gap-1.5 rounded-xl bg-royal px-4 py-2.5 text-xs font-bold text-white hover:bg-royal/95 shadow-md shadow-royal/10 cursor-pointer"
          >
            <Plus className="h-4 w-4" /> Add News Clipping
          </button>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-xs font-bold hover:bg-muted transition-colors cursor-pointer"
          >
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </div>
      </div>

      {loading ? (
        <div className="py-24 text-center text-muted-foreground flex flex-col items-center justify-center gap-2">
          <Loader className="h-8 w-8 animate-spin text-royal" />
          <span>Synchronizing records...</span>
        </div>
      ) : showForm ? (
        /* Form Card */
        <div className="max-w-3xl mx-auto rounded-3xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-6 border-b border-border/50 pb-2">
            {editingItem ? 'Edit News Clipping' : 'Add New News Clipping'}
          </h2>

          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy dark:text-white uppercase tracking-wider mb-1">
                  News Title
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:border-royal transition-colors"
                  placeholder="MoU Signed with Regimental Centre"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy dark:text-white uppercase tracking-wider mb-1">
                  Publisher / Source
                </label>
                <input
                  type="text"
                  required
                  value={formData.source}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:border-royal transition-colors"
                  placeholder="Dainik Jagran / Pioneer News"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy dark:text-white uppercase tracking-wider mb-1">
                  Published Date
                </label>
                <input
                  type="text"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:border-royal transition-colors"
                  placeholder="27 May 2026"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy dark:text-white uppercase tracking-wider mb-1">
                  Media Type Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:border-royal transition-colors cursor-pointer"
                >
                  <option value="media-coverage">Media Coverage (Clipping)</option>
                  <option value="digital-media">Digital Media (Audio/Video)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy dark:text-white uppercase tracking-wider mb-1">
                  Subcategory
                </label>
                <select
                  value={formData.subcategory}
                  onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                  className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:border-royal transition-colors cursor-pointer"
                >
                  <option value="Newspaper Coverage">Newspaper Coverage</option>
                  <option value="University News">University News</option>
                  <option value="Press Releases">Press Releases</option>
                  <option value="Television Coverage">Television Coverage</option>
                  <option value="Interviews">Interviews</option>
                  <option value="Podcasts">Podcasts</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-navy dark:text-white uppercase tracking-wider mb-1">
                Description / News Summary
              </label>
              <textarea
                required
                rows={4}
                value={formData.desc}
                onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:border-royal transition-colors resize-none"
                placeholder="Write the summarized newspaper column details here..."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy dark:text-white uppercase tracking-wider mb-1">
                  Newspaper Source Link (Optional)
                </label>
                <input
                  type="text"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:border-royal transition-colors"
                  placeholder="https://dainikbhaskar.com/article"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy dark:text-white uppercase tracking-wider mb-1">
                  Upload News Image Clipping
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="w-full rounded-xl border border-dashed border-border bg-card px-4 py-2.5 text-sm text-muted-foreground flex items-center justify-center gap-2 hover:border-royal/50 transition-colors">
                    <Upload className="h-4 w-4 text-royal" />
                    <span>{selectedFile ? selectedFile.name : 'Choose news clipping image...'}</span>
                  </div>
                </div>
              </div>
            </div>

            {filePreview && (
              <div className="mt-4">
                <span className="block text-xs font-bold text-navy dark:text-white uppercase tracking-wider mb-2">
                  Image Preview
                </span>
                <div className="relative w-full h-44 overflow-hidden rounded-xl border border-border bg-muted/20">
                  <Image
                    src={filePreview}
                    alt="News preview"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}

            <div className="pt-4 flex gap-3 justify-end border-t border-border/40">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-xl border border-border px-5 py-2.5 text-xs font-bold hover:bg-muted transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-royal text-white px-5 py-2.5 text-xs font-bold hover:bg-royal/95 transition-all shadow-md shadow-royal/10 flex items-center gap-1.5 cursor-pointer"
              >
                {saving ? (
                  <>
                    <Loader className="h-3.5 w-3.5 animate-spin" /> Saving...
                  </>
                ) : (
                  'Save News Article'
                )}
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* News List Dashboard */
        <div className="space-y-4">
          {news.length === 0 ? (
            <div className="py-24 text-center text-muted-foreground border border-dashed border-border rounded-3xl bg-card">
              <Newspaper className="h-10 w-10 mx-auto text-muted-foreground/60 mb-2" />
              <span>No news articles uploaded yet. Click "Add News Clipping" to start.</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-border bg-card p-4 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    {item.image ? (
                      <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-border shrink-0 bg-muted/20">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-16 w-16 rounded-xl bg-royal/10 text-royal flex items-center justify-center shrink-0">
                        <Newspaper className="h-6 w-6" />
                      </div>
                    )}
                    <div>
                      <span className="inline-block rounded-full bg-royal/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-royal mb-1">
                        {item.subcategory}
                      </span>
                      <h3 className="font-heading text-sm font-bold text-navy dark:text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" /> {item.date}
                        </span>
                        <span>Source: <span className="font-semibold text-navy dark:text-white">{item.source}</span></span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 self-end sm:self-center shrink-0">
                    <button
                      onClick={() => startEdit(item)}
                      className="p-2 rounded-lg border border-border hover:border-royal hover:text-royal transition-colors cursor-pointer"
                      aria-label="Edit item"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 rounded-lg border border-border hover:border-rose-500 hover:text-rose-500 transition-colors cursor-pointer"
                      aria-label="Delete item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
