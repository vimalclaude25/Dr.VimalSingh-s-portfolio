'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams, useRouter } from 'next/navigation'
import {
  Lock,
  Unlock,
  FileText,
  UploadCloud,
  Layers,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowLeft,
  Settings,
  CloudLightning,
  Trash2,
  ExternalLink,
  BookOpen
} from 'lucide-react'
import Link from 'next/link'

interface StatusStep {
  label: string
  status: 'idle' | 'running' | 'success' | 'error'
}

// --- Helper functions for robust bracket parsing ---
function getArrayContent(content: string, searchKey: string): string | null {
  const startIndex = content.indexOf(searchKey)
  if (startIndex === -1) return null
  // Find the equals sign first to skip type annotation brackets (e.g. ProposalDoc[])
  const equalsIndex = content.indexOf('=', startIndex)
  if (equalsIndex === -1) return null
  const braceStartIndex = content.indexOf('[', equalsIndex)
  if (braceStartIndex === -1) return null
  
  let depth = 1
  let index = braceStartIndex + 1
  while (depth > 0 && index < content.length) {
    if (content[index] === '[') {
      depth++
    } else if (content[index] === ']') {
      depth--
    }
    index++
  }
  if (depth === 0) {
    return content.substring(braceStartIndex + 1, index - 1)
  }
  return null
}

function removeResourceById(content: string, id: number): string {
  const idStr = `id: ${id}`
  const idIndex = content.indexOf(idStr)
  if (idIndex === -1) return content
  
  let braceDepth = 0
  let startIndex = -1
  for (let i = idIndex; i >= 0; i--) {
    if (content[i] === '}') braceDepth++
    if (content[i] === '{') {
      if (braceDepth === 0) {
        startIndex = i
        break
      } else {
        braceDepth--
      }
    }
  }
  
  if (startIndex === -1) return content
  
  let depth = 1
  let endIndex = -1
  for (let i = startIndex + 1; i < content.length; i++) {
    if (content[i] === '{') depth++
    if (content[i] === '}') {
      depth--
      if (depth === 0) {
        endIndex = i
        break
      }
    }
  }
  
  if (endIndex === -1) return content
  
  let sliceStart = startIndex
  let sliceEnd = endIndex + 1
  
  while (sliceEnd < content.length && (content[sliceEnd] === ' ' || content[sliceEnd] === '\r' || content[sliceEnd] === '\n')) {
    sliceEnd++
  }
  if (sliceEnd < content.length && content[sliceEnd] === ',') {
    sliceEnd++
  }
  
  const before = content.substring(0, sliceStart)
  const after = content.substring(sliceEnd)
  return before + after
}

function AdminContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  // --- Auth States ---
  const [gitPat, setGitPat] = useState('')
  const [gitOwner, setGitOwner] = useState('vimalclaude25')
  const [gitRepo, setGitRepo] = useState('Dr.VimalSingh-s-portfolio')
  const [googleClientId, setGoogleClientId] = useState('')
  const [adminPin, setAdminPin] = useState('')
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [showConfig, setShowConfig] = useState(false)

  // --- API Access Tokens ---
  const [googleToken, setGoogleToken] = useState<string | null>(null)

  // --- Form States ---
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [supervisor, setSupervisor] = useState('Dr. Vimal Singh (Supervisor)')
  const [type, setType] = useState<'phd' | 'med'>('med')
  const [status, setStatus] = useState('Proposal Approved')
  const [year, setYear] = useState<number>(2025)
  const [institution, setInstitution] = useState('Department of Education, School of Teacher Education, CSJMU Kanpur')
  const [abstract, setAbstract] = useState('')
  const [externalUrl, setExternalUrl] = useState('')
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  // --- UI Operations State ---
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [steps, setSteps] = useState<StatusStep[]>([])

  // --- Fetching existing items to display delete list ---
  const [existingItems, setExistingItems] = useState<any[]>([])
  const [isLoadingItems, setIsLoadingItems] = useState(false)
  const [isDeletingId, setIsDeletingId] = useState<number | null>(null)

  // --- Initialize Credentials from LocalStorage ---
  useEffect(() => {
    const savedPat = localStorage.getItem('vs_git_pat') || ''
    const savedOwner = localStorage.getItem('vs_git_owner') || 'vimalclaude25'
    const savedRepo = localStorage.getItem('vs_git_repo') || 'Dr.VimalSingh-s-portfolio'
    const savedGClientId = localStorage.getItem('vs_google_client_id') || ''
    const savedPin = localStorage.getItem('vs_admin_pin') || ''

    if (savedPat) setGitPat(savedPat)
    if (savedOwner) setGitOwner(savedOwner)
    if (savedRepo) setGitRepo(savedRepo)
    if (savedGClientId) setGoogleClientId(savedGClientId)
    if (savedPin) setAdminPin(savedPin)

    // Check if credentials are ready
    if (savedPat && savedPin === 'drvimal2026') {
      setIsAuthorized(true)
    }
  }, [])

  // --- Parse Google OAuth Hash Token ---
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const params = new URLSearchParams(hash.replace('#', '?'))
      const accessToken = params.get('access_token')
      if (accessToken) {
        sessionStorage.setItem('google_access_token', accessToken)
        setGoogleToken(accessToken)
        // Clean URL hash without reloading
        window.history.replaceState(null, '', window.location.pathname + window.location.search)
      }
    } else {
      const savedGToken = sessionStorage.getItem('google_access_token')
      if (savedGToken) setGoogleToken(savedGToken)
    }
  }, [])

  // --- Fetch Items from GitHub to enable Delete ---
  useEffect(() => {
    if (isAuthorized && gitPat) {
      fetchItemsList()
    }
  }, [isAuthorized, gitPat])

  const fetchItemsList = async () => {
    setIsLoadingItems(true)
    setErrorMessage('')
    try {
      const res = await fetch(`https://api.github.com/repos/${gitOwner}/${gitRepo}/contents/components/research-repository-section.tsx`, {
        headers: {
          'Authorization': `Bearer ${gitPat}`,
          'Accept': 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      if (!res.ok) {
        let errMessage = `HTTP ${res.status}: ${res.statusText}`
        try {
          const errData = await res.json()
          if (errData && errData.message) errMessage += ` (${errData.message})`
        } catch (_) {}
        throw new Error(`Failed to fetch research-repository-section.tsx. Details: ${errMessage}.`)
      }
      const data = await res.json()
      const rawContent = decodeURIComponent(escape(atob(data.content)))
      
      const arrayContent = getArrayContent(rawContent, 'const repositoryData: ProposalDoc[] =')
      if (arrayContent) {
        try {
          const parsed = new Function(`return [${arrayContent}]`)()
          setExistingItems(parsed)
        } catch (e) {
          console.error("Failed parsing array string", e)
          setExistingItems([])
        }
      } else {
        setExistingItems([])
      }
    } catch (err: any) {
      console.error(err)
      setErrorMessage(err.message || 'Failed to fetch existing repository items.')
    } finally {
      setIsLoadingItems(false)
    }
  }

  // --- Handles credential save & login ---
  const handleAuthorize = (e: React.FormEvent) => {
    e.preventDefault()
    if (adminPin !== 'drvimal2026') {
      setErrorMessage('Invalid Secret PIN. Access Denied.')
      return
    }
    if (!gitPat) {
      setErrorMessage('GitHub Personal Access Token is required.')
      return
    }

    localStorage.setItem('vs_git_pat', gitPat)
    localStorage.setItem('vs_git_owner', gitOwner)
    localStorage.setItem('vs_git_repo', gitRepo)
    localStorage.setItem('vs_google_client_id', googleClientId)
    localStorage.setItem('vs_admin_pin', adminPin)

    setErrorMessage('')
    setIsAuthorized(true)
  }

  // --- Trigger Google OAuth redirect via relay ---
  const handleGoogleConnect = () => {
    if (!googleClientId) {
      alert('Please configure your Google OAuth Client ID first under the Config Settings.')
      setShowConfig(true)
      return
    }
    // Use the authorized /course-resources/admin path as the redirect URI
    const redirectUri = window.location.origin + '/course-resources/admin'
    const scope = 'https://www.googleapis.com/auth/drive.file'
    const state = 'research-repository-admin'
    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=token&scope=${encodeURIComponent(scope)}&state=${state}`
    
    router.push(oauthUrl)
  }

  // --- Submit Upload Flow ---
  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const hasFileUpload = selectedFiles.length > 0
    if (hasFileUpload && !googleToken) {
      setErrorMessage('Please connect your Google Drive first to upload the selected PDF file.')
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')
    setSuccessMessage('')

    // Initialize tracking steps
    const newSteps: StatusStep[] = []
    if (hasFileUpload) {
      newSteps.push({ label: `Uploading PDF: ${selectedFiles[0].name}`, status: 'idle' })
      newSteps.push({ label: `Setting public sharing permissions on Google Drive`, status: 'idle' })
    } else {
      newSteps.push({ label: 'Preparing synopsis details', status: 'idle' })
    }
    newSteps.push({ label: 'Fetching research-repository-section.tsx from GitHub', status: 'idle' })
    newSteps.push({ label: 'Splicing proposal metadata into repositoryData array', status: 'idle' })
    newSteps.push({ label: 'Pushing changes back to GitHub', status: 'idle' })
    setSteps(newSteps)

    let finalPdfPath = externalUrl
    let stepOffset = 0

    try {
      if (hasFileUpload) {
        const file = selectedFiles[0]
        
        setSteps(prev => {
          const next = [...prev]
          next[0].status = 'running'
          return next
        })

        // Google Drive Multipart Upload API
        const metadata = {
          name: `synopsis_${type}_${Date.now()}_${file.name}`,
          mimeType: file.type
        }
        
        const formData = new FormData()
        formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }))
        formData.append('file', file)

        const uploadRes = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${googleToken}`
          },
          body: formData
        })

        if (!uploadRes.ok) throw new Error(`Google Drive upload failed. Please reconnect Google Drive.`)
        const uploadData = await uploadRes.json()
        const fileId = uploadData.id

        setSteps(prev => {
          const next = [...prev]
          next[0].status = 'success'
          next[1].status = 'running'
          return next
        })

        // 2. Set Public Sharing
        const permRes = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${googleToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            role: 'reader',
            type: 'anyone'
          })
        })

        if (!permRes.ok) throw new Error(`Failed to set public view permissions on Google Drive for PDF.`)
        
        finalPdfPath = `https://drive.google.com/file/d/${fileId}/preview`

        setSteps(prev => {
          const next = [...prev]
          next[1].status = 'success'
          return next
        })
        stepOffset = 2
      } else {
        setSteps(prev => {
          const next = [...prev]
          next[0].status = 'success'
          return next
        })
        stepOffset = 1
      }

      const gitFetchStepIndex = stepOffset
      const gitSpliceStepIndex = gitFetchStepIndex + 1
      const gitCommitStepIndex = gitFetchStepIndex + 2

      setSteps(prev => {
        const next = [...prev]
        next[gitFetchStepIndex].status = 'running'
        return next
      })

      // 3. Fetch current file
      const dbUrl = `https://api.github.com/repos/${gitOwner}/${gitRepo}/contents/components/research-repository-section.tsx`
      const gitGetRes = await fetch(dbUrl, {
        headers: {
          'Authorization': `Bearer ${gitPat}`,
          'Accept': 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })

      if (!gitGetRes.ok) throw new Error('Failed to read research-repository-section.tsx from GitHub.')
      const gitData = await gitGetRes.json()
      const decodedContent = decodeURIComponent(escape(atob(gitData.content)))
      const fileSha = gitData.sha

      setSteps(prev => {
        const next = [...prev]
        next[gitFetchStepIndex].status = 'success'
        next[gitSpliceStepIndex].status = 'running'
        return next
      })

      // 4. Splice new proposal metadata
      let updatedContent = decodedContent
      const arrayStart = 'const repositoryData: ProposalDoc[] = ['
      const emptyArray = 'const repositoryData: ProposalDoc[] = []'

      const newItemString = `  {
    id: ${Date.now()},
    title: ${JSON.stringify(title)},
    author: ${JSON.stringify(author)},
    supervisor: ${JSON.stringify(supervisor)},
    type: ${JSON.stringify(type)},
    status: ${JSON.stringify(status)},
    year: ${year},
    institution: ${JSON.stringify(institution)},
    abstract: ${JSON.stringify(abstract)},
    ${finalPdfPath ? `pdfPath: ${JSON.stringify(finalPdfPath)},` : ''}
    pages: [
      {
        title: "Synopsis Details",
        content: [
          ${JSON.stringify("Author: " + author + " | Supervisor: " + supervisor)},
          ${JSON.stringify(abstract)}
        ]
      }
    ]
  }`

      if (updatedContent.includes(emptyArray)) {
        updatedContent = updatedContent.replace(emptyArray, `const repositoryData: ProposalDoc[] = [\n${newItemString}\n]`)
      } else if (updatedContent.includes(arrayStart)) {
        updatedContent = updatedContent.replace(arrayStart, `const repositoryData: ProposalDoc[] = [\n${newItemString},\n`)
      } else {
        throw new Error('repositoryData array signature not found in components/research-repository-section.tsx')
      }

      setSteps(prev => {
        const next = [...prev]
        next[gitSpliceStepIndex].status = 'success'
        next[gitCommitStepIndex].status = 'running'
        return next
      })

      // 5. Push commit back to GitHub
      const encodedNewContent = btoa(unescape(encodeURIComponent(updatedContent)))
      const gitPutRes = await fetch(dbUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${gitPat}`,
          'Accept': 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: `feat(repository): upload new research proposal for ${author}`,
          content: encodedNewContent,
          sha: fileSha
        })
      })

      if (!gitPutRes.ok) throw new Error('Failed to commit changes to GitHub.')

      setSteps(prev => {
        const next = [...prev]
        next[gitCommitStepIndex].status = 'success'
        return next
      })

      setSuccessMessage(`Successfully registered research proposal for ${author}! Rebuild pipeline triggered. Please wait 1-2 minutes for Vercel/GitHub Pages to build and deploy.`)
      
      // Reset Form fields
      setTitle('')
      setAuthor('')
      setAbstract('')
      setSelectedFiles([])
      setExternalUrl('')
      
      setTimeout(() => fetchItemsList(), 3000)

    } catch (err: any) {
      setErrorMessage(err.message || 'Operation failed.')
      setSteps(prev => {
        return prev.map(s => s.status === 'running' ? { ...s, status: 'error' } : s)
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // --- Delete Proposal Flow ---
  const handleDeleteItem = async (id: number, authorVal: string) => {
    if (!confirm(`Are you sure you want to delete the research card for "${authorVal}"? This will delete the entry from the website.`)) return

    setIsDeletingId(id)
    setErrorMessage('')
    setSuccessMessage('')

    try {
      const dbUrl = `https://api.github.com/repos/${gitOwner}/${gitRepo}/contents/components/research-repository-section.tsx`
      const gitGetRes = await fetch(dbUrl, {
        headers: {
          Authorization: `token ${gitPat}`
        }
      })

      if (!gitGetRes.ok) throw new Error('Failed to read research-repository-section.tsx from GitHub.')
      const gitData = await gitGetRes.json()
      const decodedContent = decodeURIComponent(escape(atob(gitData.content)))
      const fileSha = gitData.sha

      const content = removeResourceById(decodedContent, id)

      const encodedNewContent = btoa(unescape(encodeURIComponent(content)))
      const gitPutRes = await fetch(dbUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${gitPat}`,
          'Accept': 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: `feat(repository): delete research proposal of ${authorVal}`,
          content: encodedNewContent,
          sha: fileSha
        })
      })

      if (!gitPutRes.ok) throw new Error('Failed to commit deletion to GitHub.')

      setSuccessMessage(`Successfully deleted research proposal of ${authorVal} and triggered site rebuild.`)
      fetchItemsList()
    } catch (err: any) {
      setErrorMessage(err.message || 'Deletion failed.')
    } finally {
      setIsDeletingId(null)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Title */}
      <div className="flex items-center justify-between">
        <Link
          href="/research-repository"
          className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-royal transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Repository
        </Link>
        <button
          onClick={() => setShowConfig(!showConfig)}
          className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold hover:border-royal hover:text-royal transition-colors cursor-pointer"
        >
          <Settings className="h-4 w-4" /> Credentials Configuration
        </button>
      </div>

      {/* Config Panel */}
      {!isAuthorized || showConfig ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm space-y-6"
        >
          <div className="flex items-center gap-3 border-b border-border pb-4">
            <Lock className="h-6 w-6 text-royal shrink-0" />
            <div>
              <h2 className="font-heading text-lg font-bold text-navy dark:text-white">
                Credentials Configuration
              </h2>
              <p className="text-xs text-muted-foreground">
                Set up your Git keys and Google Client ID. Tokens are saved securely only in your browser storage.
              </p>
            </div>
          </div>

          <form onSubmit={handleAuthorize} className="space-y-4">
            {/* PIN */}
            <div>
              <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                Secret Admin PIN
              </label>
              <input
                type="password"
                placeholder="Enter admin access PIN"
                value={adminPin}
                onChange={(e) => setAdminPin(e.target.value)}
                className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-semibold outline-none focus:border-royal focus:bg-card"
              />
            </div>

            {/* GitHub PAT */}
            <div>
              <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                GitHub Personal Access Token (PAT)
              </label>
              <input
                type="password"
                placeholder="ghp_..."
                value={gitPat}
                onChange={(e) => setGitPat(e.target.value)}
                className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-semibold outline-none focus:border-royal focus:bg-card"
              />
            </div>

            {/* Repos details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                  GitHub Username
                </label>
                <input
                  type="text"
                  placeholder="vimalclaude25"
                  value={gitOwner}
                  onChange={(e) => setGitOwner(e.target.value)}
                  className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-semibold outline-none focus:border-royal focus:bg-card"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                  GitHub Repository Name
                </label>
                <input
                  type="text"
                  placeholder="Dr.VimalSingh-s-portfolio"
                  value={gitRepo}
                  onChange={(e) => setGitRepo(e.target.value)}
                  className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-semibold outline-none focus:border-royal focus:bg-card"
                />
              </div>
            </div>

            {/* Google OAuth Client ID */}
            <div>
              <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                Google OAuth Client ID
              </label>
              <input
                type="text"
                placeholder="Enter client ID from Google API Console"
                value={googleClientId}
                onChange={(e) => setGoogleClientId(e.target.value)}
                className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-semibold outline-none focus:border-royal focus:bg-card"
              />
              <p className="mt-1.5 text-[10px] leading-relaxed text-muted-foreground">
                Set Authorized JavaScript Origins to: <code className="bg-muted px-1.5 py-0.5 rounded font-bold">{window.location.origin}</code>
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">
                <strong>Authentication Relay:</strong> Uses the approved redirect URI <code className="bg-muted px-1.5 py-0.5 rounded font-bold">/course-resources/admin</code> to automatically forward the access token here, meaning you do not need to register a new redirect URI in Google Cloud Console.
              </p>
            </div>

            <div className="flex gap-4 pt-4 border-t border-border/60">
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-xl bg-royal text-white px-5 py-2.5 text-xs font-bold hover:bg-royal/95 transition-colors cursor-pointer"
              >
                <Unlock className="h-4 w-4" /> Save &amp; Authorize
              </button>
              {isAuthorized && (
                <button
                  type="button"
                  onClick={() => setShowConfig(false)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card text-muted-foreground px-5 py-2.5 text-xs font-bold hover:border-royal hover:text-royal transition-colors cursor-pointer"
                >
                  Close Settings
                </button>
              )}
            </div>
          </form>
        </motion.div>
      ) : null}

      {/* Main Upload Dashboard */}
      {isAuthorized && !showConfig && (
        <div className="space-y-8">
          {/* Status logs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Google Drive Lock Status */}
            <div className="bg-card border border-border rounded-2xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-heading text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Google Drive Status
                </h4>
                <div className="mt-3 flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${googleToken ? 'bg-emerald-500' : 'bg-gold animate-pulse'}`} />
                  <span className="text-xs font-bold text-navy dark:text-white">
                    {googleToken ? 'Connected' : 'Action Required'}
                  </span>
                </div>
              </div>
              <button
                onClick={handleGoogleConnect}
                className="mt-5 w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-border hover:border-royal/50 hover:bg-royal/5 px-4 py-2.5 text-xs font-bold text-royal transition-all cursor-pointer"
              >
                <CloudLightning className="h-4 w-4" /> {googleToken ? 'Reconnect Drive' : 'Connect Google Drive'}
              </button>
            </div>

            {/* GitHub Target Repo */}
            <div className="bg-card border border-border rounded-2xl p-5 shadow-sm flex flex-col justify-between md:col-span-2">
              <div>
                <h4 className="font-heading text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Active GitHub Target Repository
                </h4>
                <div className="mt-3 text-xs leading-relaxed">
                  <p className="font-semibold text-navy dark:text-white">
                    Repository: <code className="bg-muted px-1.5 py-0.5 rounded font-mono">{gitOwner}/{gitRepo}</code>
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Path to modify: <code className="bg-muted px-1.5 py-0.5 rounded font-mono">components/research-repository-section.tsx</code>
                  </p>
                </div>
              </div>
              <div className="mt-5 text-[10px] text-muted-foreground flex items-center gap-1.5 border-t border-border/40 pt-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> Local Key Authed. Commit uploads directly.
              </div>
            </div>
          </div>

          {/* Form and Preview Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form */}
            <div className="lg:col-span-12 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="font-heading text-lg font-bold text-navy dark:text-white border-b border-border pb-3">
                Upload New Synopsis / Thesis Proposal
              </h3>

              <form onSubmit={handleUploadSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Proposal Type Selection */}
                  <div>
                    <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                      Document Type
                    </label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value as any)}
                      className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-bold outline-none focus:border-royal focus:bg-card"
                    >
                      <option value="phd">Ph.D. Synopsis</option>
                      <option value="med">M.Ed. Thesis Proposal</option>
                    </select>
                  </div>

                  {/* Status Selection */}
                  <div>
                    <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                      Project Status
                    </label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-bold outline-none focus:border-royal focus:bg-card"
                    >
                      <option value="Proposal Approved">Proposal Approved</option>
                      <option value="Completed / Awarded">Completed / Awarded</option>
                    </select>
                  </div>

                  {/* Year */}
                  <div>
                    <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                      Academic Session / Year
                    </label>
                    <input
                      type="number"
                      required
                      value={year}
                      onChange={(e) => setYear(parseInt(e.target.value) || 2025)}
                      className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-semibold outline-none focus:border-royal focus:bg-card"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Author Name */}
                  <div>
                    <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                      Scholar / Author Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suraj Gupta"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-semibold outline-none focus:border-royal focus:bg-card"
                    />
                  </div>

                  {/* Supervisor Name */}
                  <div>
                    <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                      Supervisor / Guide
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Vimal Singh (Supervisor)"
                      value={supervisor}
                      onChange={(e) => setSupervisor(e.target.value)}
                      className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-semibold outline-none focus:border-royal focus:bg-card"
                    />
                  </div>
                </div>

                {/* Research Title */}
                <div>
                  <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                    Research Topic / Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Effectiveness of Chatbot-Assisted Learning on Cognitive Load..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-semibold outline-none focus:border-royal focus:bg-card"
                  />
                </div>

                {/* Institution */}
                <div>
                  <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                    Department &amp; Institution
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Department of Education, CSJM University, Kanpur"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-semibold outline-none focus:border-royal focus:bg-card"
                  />
                </div>

                {/* Abstract */}
                <div>
                  <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                    Detailed Abstract (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide a comprehensive summary of the research study, design, and objectives..."
                    value={abstract}
                    onChange={(e) => setAbstract(e.target.value)}
                    className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-semibold outline-none focus:border-royal focus:bg-card"
                  />
                </div>

                {/* File Upload to Google Drive */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                        Upload Synopsis PDF Option
                      </label>
                      <div className="relative border-2 border-dashed border-border/80 hover:border-royal/50 rounded-2xl p-5 text-center transition-all bg-muted/20">
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={(e) => {
                            const files = Array.from(e.target.files || [])
                            setSelectedFiles(files)
                            if (files.length > 0) setExternalUrl('')
                          }}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <UploadCloud className="h-7 w-7 mx-auto text-muted-foreground mb-1.5" />
                        <p className="text-[11px] font-bold text-navy dark:text-white truncate">
                          {selectedFiles.length > 0
                            ? `Selected PDF: ${selectedFiles[0].name}`
                            : 'Click to select Synopsis PDF file'}
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                        OR External PDF URL Link (Optional)
                      </label>
                      <input
                        type="url"
                        placeholder="https://example.com/synopsis.pdf"
                        value={externalUrl}
                        onChange={(e) => {
                          setExternalUrl(e.target.value)
                          if (e.target.value) setSelectedFiles([])
                        }}
                        className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-semibold outline-none focus:border-royal focus:bg-card h-[78px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Status Message boxes */}
                {errorMessage && (
                  <div className="flex gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-500 font-semibold">
                    <AlertCircle className="h-4 w-4 shrink-0" /> {errorMessage}
                  </div>
                )}

                {successMessage && (
                  <div className="flex gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-500 leading-relaxed font-semibold">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" /> {successMessage}
                  </div>
                )}

                {/* Progress Console */}
                {isSubmitting && (
                  <div className="p-4 bg-muted/30 border border-border/60 rounded-2xl space-y-2">
                    <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1.5">
                      <Loader2 className="h-3.5 w-3.5 animate-spin text-royal" /> Operations Live Console
                    </h5>
                    <div className="space-y-1.5 text-xs">
                      {steps.map((step, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className={step.status === 'running' ? 'text-royal font-bold' : step.status === 'success' ? 'text-emerald-500' : 'text-muted-foreground'}>
                            • {step.label}
                          </span>
                          <span className="text-[10px] font-bold uppercase">
                            {step.status === 'idle' && 'Waiting'}
                            {step.status === 'running' && 'In Progress...'}
                            {step.status === 'success' && 'Done ✓'}
                            {step.status === 'error' && 'Failed ✗'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-border/60">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center gap-2 rounded-xl bg-royal text-white px-6 py-3 text-xs font-bold hover:bg-royal/95 transition-colors cursor-pointer ${
                      isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Uploading & Splicing...' : 'Upload Proposal & Push'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Delete section list */}
          <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="font-heading text-lg font-bold text-navy dark:text-white border-b border-border pb-3">
              Manage Existing Repository Cards
            </h3>

            {isLoadingItems ? (
              <div className="py-12 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
                <Loader2 className="h-4.5 w-4.5 animate-spin text-royal" /> Fetching active repository data...
              </div>
            ) : existingItems.length > 0 ? (
              <div className="divide-y divide-border max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border">
                {existingItems.map((res) => (
                  <div key={res.id} className="py-4 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-flex rounded-full px-2 py-0.5 text-[9px] font-bold uppercase ${
                          res.type === 'phd' ? 'bg-royal/10 text-royal' : 'bg-emerald-500/10 text-emerald-600'
                        }`}>
                          {res.type === 'phd' ? 'Ph.D.' : 'M.Ed.'}
                        </span>
                        <span className="inline-flex rounded bg-muted px-1.5 py-0.5 text-[9px] font-bold text-muted-foreground uppercase">
                          Session {res.year}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-navy dark:text-white truncate">
                        {res.title}
                      </h4>
                      <p className="text-[10px] text-muted-foreground truncate">
                        Scholar: {res.author} | Supervisor: {res.supervisor}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {res.pdfPath && (
                        <a
                          href={res.pdfPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-border p-2 text-muted-foreground hover:border-royal hover:text-royal transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                      <button
                        onClick={() => handleDeleteItem(res.id, res.author)}
                        disabled={isDeletingId === res.id}
                        className="rounded-lg border border-border p-2 text-red-500 hover:border-red-500/50 hover:bg-red-500/5 transition-colors cursor-pointer disabled:opacity-50"
                      >
                        {isDeletingId === res.id ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        ) : (
                          <Trash2 className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-xs text-muted-foreground">
                No active research proposals found in repository. Dashboard is empty.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="mb-12 text-center">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-navy dark:text-white sm:text-5xl">
          Research Repository Admin Portal
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Manage Ph.D. Synopses and M.Ed. Thesis Proposals. Upload files to Google Drive, register details, and push metadata automatically back to GitHub.
        </p>
      </div>

      <Suspense fallback={<div className="py-12 text-center text-muted-foreground">Loading portal settings...</div>}>
        <AdminContent />
      </Suspense>
    </div>
  )
}
