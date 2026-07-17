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
  Video,
  Presentation,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowLeft,
  Settings,
  CloudLightning,
  Trash2,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'

interface StatusStep {
  label: string
  status: 'idle' | 'running' | 'success' | 'error'
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
  const [desc, setDesc] = useState('')
  const [courseCode, setCourseCode] = useState<'MED104' | 'MED305' | 'General'>('MED104')
  const [resType, setResType] = useState<'PDF' | 'PPT' | 'Infographic' | 'Video'>('PDF')
  const [videoUrl, setVideoUrl] = useState('')
  const [externalUrl, setExternalUrl] = useState('')
  const [thumbnailUrl, setThumbnailUrl] = useState('')
  const [isResolvingThumbnail, setIsResolvingThumbnail] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  // --- UI Operations State ---
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [steps, setSteps] = useState<StatusStep[]>([])

  // --- Fetching existing resources to display delete list ---
  const [existingResources, setExistingResources] = useState<any[]>([])
  const [isLoadingResources, setIsLoadingResources] = useState(false)
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

  // --- Thumbnail Helper Functions ---
  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const getGoogleDriveId = (url: string) => {
    const match1 = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
    if (match1) return match1[1]
    const match2 = url.match(/id=([a-zA-Z0-9_-]+)/)
    if (match2) return match2[1]
    return null
  }

  // --- Thumbnail Resolution Effect ---
  useEffect(() => {
    const targetUrl = resType === 'Video' ? videoUrl : externalUrl
    if (!targetUrl) {
      setThumbnailUrl('')
      return
    }

    // 1. Check if Google Drive link
    const driveId = getGoogleDriveId(targetUrl)
    if (driveId) {
      setThumbnailUrl(`https://drive.google.com/thumbnail?id=${driveId}&sz=w600`)
      return
    }

    // 2. Check if YouTube link
    const ytId = getYoutubeId(targetUrl)
    if (ytId) {
      setThumbnailUrl(`https://img.youtube.com/vi/${ytId}/mqdefault.jpg`)
      return
    }

    // 3. Otherwise, fetch from Microlink API (only if it looks like a valid http link)
    if (targetUrl.startsWith('http://') || targetUrl.startsWith('https://')) {
      const delayDebounceFn = setTimeout(() => {
        setIsResolvingThumbnail(true)
        fetch(`https://api.microlink.io?url=${encodeURIComponent(targetUrl)}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.status === 'success' && data.data.image?.url) {
              setThumbnailUrl(data.data.image.url)
            } else if (data.status === 'success' && data.data.screenshot?.url) {
              setThumbnailUrl(data.data.screenshot.url)
            } else {
              setThumbnailUrl('')
            }
          })
          .catch(() => setThumbnailUrl(''))
          .finally(() => setIsResolvingThumbnail(false))
      }, 800) // Debounce API calls by 800ms
      return () => clearTimeout(delayDebounceFn)
    } else {
      setThumbnailUrl('')
    }
  }, [videoUrl, externalUrl, resType])

  // --- Fetch Resources from GitHub to enable Delete ---
  useEffect(() => {
    if (isAuthorized && gitPat) {
      fetchResourcesList()
    }
  }, [isAuthorized, gitPat])

  const fetchResourcesList = async () => {
    setIsLoadingResources(true)
    setErrorMessage('')
    try {
      const res = await fetch(`https://api.github.com/repos/${gitOwner}/${gitRepo}/contents/lib/cv-data.ts`, {
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
        throw new Error(`Failed to fetch cv-data.ts from GitHub. Details: ${errMessage}. Please check repository settings and verify that your GitHub Token has 'repo' permission.`)
      }
      const data = await res.json()
      const rawContent = decodeURIComponent(escape(atob(data.content)))
      
      // Extract the studyResourcesData array content using regex
      const match = rawContent.match(/export const studyResourcesData: StudyResource\[\] = \[\s*([\s\S]*?)\s*\]/)
      if (match && match[1]) {
        // Parse resources manually by converting array content back to an object array
        // We use dynamic Function evaluation inside safe bounds to parse the raw JS array syntax safely
        try {
          const parsed = new Function(`return [${match[1]}]`)()
          setExistingResources(parsed)
        } catch (e) {
          console.error("Failed parsing array string", e)
        }
      } else {
        setExistingResources([])
      }
    } catch (err: any) {
      console.error(err)
      setErrorMessage(err.message || 'Failed to fetch existing resources.')
    } finally {
      setIsLoadingResources(false)
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

  // --- Trigger Google OAuth redirect ---
  const handleGoogleConnect = () => {
    if (!googleClientId) {
      alert('Please configure your Google OAuth Client ID first under the Config Settings.')
      setShowConfig(true)
      return
    }
    const redirectUri = window.location.origin + window.location.pathname
    const scope = 'https://www.googleapis.com/auth/drive.file'
    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=token&scope=${encodeURIComponent(scope)}`
    
    router.push(oauthUrl)
  }

  // --- Submit Upload Flow ---
  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check if Google Drive access is needed (only if files are selected for upload)
    const hasFilesUpload = resType !== 'Video' && selectedFiles.length > 0
    if (hasFilesUpload && !googleToken) {
      setErrorMessage('Please connect your Google Drive first to upload the selected files.')
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')
    setSuccessMessage('')

    // Initialize tracking steps
    const newSteps: StatusStep[] = []
    if (hasFilesUpload) {
      selectedFiles.forEach((file, idx) => {
        newSteps.push({ label: `Uploading file ${idx + 1}/${selectedFiles.length}: ${file.name}`, status: 'idle' })
        newSteps.push({ label: `Setting sharing permissions for ${file.name}`, status: 'idle' })
      })
    } else {
      newSteps.push({ label: 'Preparing non-file resource details', status: 'idle' })
    }
    newSteps.push({ label: 'Fetching cv-data.ts from GitHub', status: 'idle' })
    newSteps.push({ label: 'Splicing resource entries into code', status: 'idle' })
    newSteps.push({ label: 'Committing updates back to GitHub', status: 'idle' })
    setSteps(newSteps)

    const uploadedResources: { title: string; link: string; fileSizeStr: string; thumbnail: string }[] = []
    let stepOffset = 0

    try {
      if (hasFilesUpload) {
        for (let i = 0; i < selectedFiles.length; i++) {
          const file = selectedFiles[i]
          
          setSteps(prev => {
            const next = [...prev]
            next[i * 2].status = 'running'
            return next
          })

          // Calculate readable file size
          const sizeInMb = file.size / (1024 * 1024)
          const fileSizeStr = sizeInMb < 1 
            ? `${Math.round(file.size / 1024)} KB` 
            : `${sizeInMb.toFixed(1)} MB`

          // Google Drive Multipart Upload API
          const metadata = {
            name: `${courseCode}_${Date.now()}_${file.name}`,
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

          if (!uploadRes.ok) throw new Error(`Google Drive upload failed for file: ${file.name}. Please reconnect OAuth.`)
          const uploadData = await uploadRes.json()
          const fileId = uploadData.id

          setSteps(prev => {
            const next = [...prev]
            next[i * 2].status = 'success'
            next[i * 2 + 1].status = 'running'
            return next
          })

          // 2. Set Public Sharing on Google Drive File
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

          if (!permRes.ok) throw new Error(`Failed to set public view permissions on Google Drive for: ${file.name}`)
          
          const finalLink = `https://drive.google.com/file/d/${fileId}/view`
          const finalThumbnail = `https://drive.google.com/thumbnail?id=${fileId}&sz=w600`

          setSteps(prev => {
            const next = [...prev]
            next[i * 2 + 1].status = 'success'
            return next
          })

          const fileTitle = selectedFiles.length > 1
            ? `${title} - ${file.name.replace(/\.[^/.]+$/, "")}`
            : title

          uploadedResources.push({
            title: fileTitle,
            link: finalLink,
            fileSizeStr,
            thumbnail: finalThumbnail
          })
        }
        stepOffset = selectedFiles.length * 2
      } else {
        // Non-file step initialization logic
        setSteps(prev => {
          const next = [...prev]
          next[0].status = 'running'
          return next
        })

        let finalLink = resType === 'Video' ? videoUrl : externalUrl
        
        setSteps(prev => {
          const next = [...prev]
          next[0].status = 'success'
          return next
        })

        uploadedResources.push({
          title,
          link: finalLink,
          fileSizeStr: '',
          thumbnail: thumbnailUrl
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

      // 3. Fetch current cv-data.ts from GitHub
      const dbUrl = `https://api.github.com/repos/${gitOwner}/${gitRepo}/contents/lib/cv-data.ts`
      const gitGetRes = await fetch(dbUrl, {
        headers: {
          'Authorization': `Bearer ${gitPat}`,
          'Accept': 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })

      if (!gitGetRes.ok) {
        let errMessage = `HTTP ${gitGetRes.status}: ${gitGetRes.statusText}`
        try {
          const errData = await gitGetRes.json()
          if (errData && errData.message) errMessage += ` (${errData.message})`
        } catch (_) {}
        throw new Error(`Failed to read cv-data.ts from your GitHub repository. Details: ${errMessage}. Please verify repository config settings.`)
      }
      const gitData = await gitGetRes.json()
      const decodedContent = decodeURIComponent(escape(atob(gitData.content)))
      const fileSha = gitData.sha

      setSteps(prev => {
        const next = [...prev]
        next[gitFetchStepIndex].status = 'success'
        next[gitSpliceStepIndex].status = 'running'
        return next
      })

      // 4. Splice new resource entries in content string
      let updatedContent = decodedContent
      const arrayStart = 'export const studyResourcesData: StudyResource[] = ['
      const emptyArray = 'export const studyResourcesData: StudyResource[] = []'

      const dateStr = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })

      const newItemsString = uploadedResources.map((res, index) => {
        return `  {
    id: ${Date.now() + index},
    title: ${JSON.stringify(res.title)},
    desc: ${JSON.stringify(desc)},
    courseCode: ${JSON.stringify(courseCode)},
    type: ${JSON.stringify(resType)},
    link: ${JSON.stringify(res.link)},
    ${res.fileSizeStr ? `fileSize: ${JSON.stringify(res.fileSizeStr)},` : ''}
    ${resType === 'Video' ? `duration: "Video class",` : ''}
    ${res.thumbnail ? `thumbnail: ${JSON.stringify(res.thumbnail)},` : ''}
    date: ${JSON.stringify(dateStr)}
  }`
      }).join(',\n')

      if (updatedContent.includes(emptyArray)) {
        updatedContent = updatedContent.replace(emptyArray, `${arrayStart}\n${newItemsString}\n]`)
      } else if (updatedContent.includes(arrayStart)) {
        updatedContent = updatedContent.replace(arrayStart, `${arrayStart}\n${newItemsString},\n`)
      } else {
        throw new Error('Syllabus data array anchor signature not found in cv-data.ts')
      }

      setSteps(prev => {
        const next = [...prev]
        next[gitSpliceStepIndex].status = 'success'
        next[gitCommitStepIndex].status = 'running'
        return next
      })

      // 5. Commit changes back to GitHub
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
          message: `feat(resources): add new study materials (${uploadedResources.length} files)`,
          content: encodedNewContent,
          sha: fileSha
        })
      })

      if (!gitPutRes.ok) {
        let errMessage = `HTTP ${gitPutRes.status}: ${gitPutRes.statusText}`
        try {
          const errData = await gitPutRes.json()
          if (errData && errData.message) errMessage += ` (${errData.message})`
        } catch (_) {}
        throw new Error(`Failed to push updates to GitHub repository. Details: ${errMessage}`)
      }

      setSteps(prev => {
        const next = [...prev]
        next[gitCommitStepIndex].status = 'success'
        return next
      })

      setSuccessMessage(`Successfully uploaded ${uploadedResources.length} file(s) to Google Drive and registered metadata in cv-data.ts! The build pipeline has been triggered. Please wait 1-2 minutes for Vercel/GitHub Pages to deploy the update.`)
      
      // Reset Form fields
      setTitle('')
      setDesc('')
      setSelectedFiles([])
      setVideoUrl('')
      setExternalUrl('')
      setThumbnailUrl('')
      
      // Reload resource list
      setTimeout(() => fetchResourcesList(), 3000)
      
      // Reload resource list
      setTimeout(() => fetchResourcesList(), 3000)

    } catch (err: any) {
      setErrorMessage(err.message || 'Operation failed.')
      setSteps(prev => {
        return prev.map(s => s.status === 'running' ? { ...s, status: 'error' } : s)
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // --- Delete Resource Flow ---
  const handleDeleteResource = async (id: number, titleVal: string) => {
    if (!confirm(`Are you sure you want to delete "${titleVal}"? This will delete the entry from the website.`)) return

    setIsDeletingId(id)
    setErrorMessage('')
    setSuccessMessage('')

    try {
      // 1. Fetch current file
      const dbUrl = `https://api.github.com/repos/${gitOwner}/${gitRepo}/contents/lib/cv-data.ts`
      const gitGetRes = await fetch(dbUrl, {
        headers: {
          Authorization: `token ${gitPat}`
        }
      })

      if (!gitGetRes.ok) throw new Error('Failed to read cv-data.ts from GitHub.')
      const gitData = await gitGetRes.json()
      const decodedContent = decodeURIComponent(escape(atob(gitData.content)))
      const fileSha = gitData.sha

      // 2. Remove matching ID block
      let content = decodedContent
      // Regex matches object inside array by finding object containing `id: id,`
      const regex = new RegExp(`\\s*\\{\\s*id:\\s*${id},[\\s\\S]*?\\},?`, 'g')
      content = content.replace(regex, '')

      // Fix any double commas or commas before closing array bracket
      content = content.replace(/,\s*\]/g, '\n]')

      // 3. Push commit back to GitHub
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
          message: `feat(resources): delete study resource "${titleVal}"`,
          content: encodedNewContent,
          sha: fileSha
        })
      })

      if (!gitPutRes.ok) {
        let errMessage = `HTTP ${gitPutRes.status}: ${gitPutRes.statusText}`
        try {
          const errData = await gitPutRes.json()
          if (errData && errData.message) errMessage += ` (${errData.message})`
        } catch (_) {}
        throw new Error(`Failed to push deletion commit to GitHub. Details: ${errMessage}`)
      }

      setSuccessMessage(`Successfully deleted "${titleVal}" and triggered site rebuild.`)
      fetchResourcesList()
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
          href="/course-resources"
          className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-royal transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Resources
        </Link>
        <button
          onClick={() => setShowConfig(!showConfig)}
          className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold hover:border-royal hover:text-royal transition-colors cursor-pointer"
        >
          <Settings className="h-4 w-4" /> Credentials Configuration
        </button>
      </div>

      {/* Lock state or Auth form */}
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

            {/* GitHub Commits connection info */}
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
                    Path to modify: <code className="bg-muted px-1.5 py-0.5 rounded font-mono">lib/cv-data.ts</code>
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
            <div className="lg:col-span-8 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="font-heading text-lg font-bold text-navy dark:text-white border-b border-border pb-3">
                Upload New Study Resource
              </h3>

              <form onSubmit={handleUploadSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Course Selection */}
                  <div>
                    <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                      Associate Course
                    </label>
                    <select
                      value={courseCode}
                      onChange={(e) => setCourseCode(e.target.value as any)}
                      className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-bold outline-none focus:border-royal focus:bg-card"
                    >
                      <option value="MED104">MED104 Research in Education</option>
                      <option value="MED305">MED305 Educational Administration &amp; Planning</option>
                      <option value="General">General / All Courses</option>
                    </select>
                  </div>

                  {/* Resource Type */}
                  <div>
                    <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                      Resource Category Type
                    </label>
                    <select
                      value={resType}
                      onChange={(e) => setResType(e.target.value as any)}
                      className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-bold outline-none focus:border-royal focus:bg-card"
                    >
                      <option value="PDF">PDF Handout</option>
                      <option value="PPT">PPT Slide Deck</option>
                      <option value="Infographic">Infographic Poster</option>
                      <option value="Video">Video Lecture URL</option>
                    </select>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                    Resource Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sampling Errors and Standard Distributions Guide"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-semibold outline-none focus:border-royal focus:bg-card"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                    Brief Description (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Explain what study notes or slides are covered inside this resource..."
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-semibold outline-none focus:border-royal focus:bg-card"
                  />
                </div>

                {/* File upload or link */}
                {resType === 'Video' ? (
                  <div>
                    <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                      Video URL Link (YouTube/Vimeo/Drive) (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://www.youtube.com/watch?v=..."
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-semibold outline-none focus:border-royal focus:bg-card"
                    />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                          Upload File Option
                        </label>
                        <div className="relative border-2 border-dashed border-border/80 hover:border-royal/50 rounded-2xl p-5 text-center transition-all bg-muted/20">
                           <input
                            type="file"
                            multiple
                            onChange={(e) => {
                              const files = Array.from(e.target.files || [])
                              setSelectedFiles(files)
                              if (files.length > 0) setExternalUrl('') // Clear external url if files chosen
                            }}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                          <UploadCloud className="h-7 w-7 mx-auto text-muted-foreground mb-1.5" />
                          <p className="text-[11px] font-bold text-navy dark:text-white truncate">
                            {selectedFiles.length > 0
                              ? `${selectedFiles.length} file(s) selected: ${selectedFiles.map(f => f.name).join(', ')}`
                              : 'Click to select files'}
                          </p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy dark:text-white uppercase mb-2">
                          OR External Web Link (Optional)
                        </label>
                        <input
                          type="url"
                          placeholder="https://example.com/handout.pdf"
                          value={externalUrl}
                          onChange={(e) => {
                            setExternalUrl(e.target.value)
                            if (e.target.value) setSelectedFiles([]) // Clear files if link entered
                          }}
                          className="w-full rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-xs font-semibold outline-none focus:border-royal focus:bg-card h-[78px]"
                        />
                      </div>
                    </div>
                  </div>
                )}

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
                    {isSubmitting ? 'Uploading & Splicing...' : 'Upload Resource & Push'}
                  </button>
                </div>
              </form>
            </div>

            {/* Live Preview Card Panel */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-4 sticky top-24">
                <h4 className="font-heading text-xs font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2 flex items-center gap-1.5">
                  <CloudLightning className="h-4.5 w-4.5 text-royal animate-pulse" /> Live Card Preview
                </h4>
                
                <div className="border border-border bg-card rounded-2xl p-5 shadow-sm overflow-hidden flex flex-col justify-between min-h-[220px] hover:border-royal/30 hover:shadow-lg transition-all">
                  <div>
                    {/* Image Preview Box */}
                    <div className="aspect-video w-full rounded-xl bg-muted overflow-hidden relative mb-4 border border-border/40">
                      {isResolvingThumbnail ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-muted/60">
                          <Loader2 className="h-5 w-5 animate-spin text-royal" />
                        </div>
                      ) : thumbnailUrl ? (
                        <img
                          src={thumbnailUrl}
                          alt="Link preview"
                          className="h-full w-full object-cover"
                          onError={() => setThumbnailUrl('')}
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground text-[10px] gap-1 p-4 bg-muted/40">
                          <Layers className="h-5 w-5 opacity-40 text-royal" />
                          <span className="font-bold">Auto Link Preview</span>
                        </div>
                      )}
                    </div>

                    {/* Metadata Badges */}
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="inline-flex rounded-full bg-royal/10 px-2 py-0.5 text-[9px] font-bold text-royal uppercase">
                        {courseCode}
                      </span>
                      <span className="inline-flex rounded bg-muted px-1.5 py-0.5 text-[9px] font-bold text-muted-foreground uppercase">
                        {resType}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-navy dark:text-white truncate">
                      {title || 'Resource Title'}
                    </h4>
                    <p className="text-[10px] text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
                      {desc || 'Provide resource details above to see preview here...'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delete section list */}
          <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="font-heading text-lg font-bold text-navy dark:text-white border-b border-border pb-3">
              Manage Existing Resources
            </h3>

            {isLoadingResources ? (
              <div className="py-12 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
                <Loader2 className="h-4.5 w-4.5 animate-spin text-royal" /> Fetching active resources...
              </div>
            ) : existingResources.length > 0 ? (
              <div className="divide-y divide-border max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border">
                {existingResources.map((res) => (
                  <div key={res.id} className="py-4 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="inline-flex rounded-full bg-royal/10 px-2 py-0.5 text-[9px] font-bold text-royal">
                          {res.courseCode}
                        </span>
                        <span className="inline-flex rounded bg-muted px-1.5 py-0.5 text-[9px] font-bold text-muted-foreground uppercase">
                          {res.type}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-navy dark:text-white truncate">
                        {res.title}
                      </h4>
                      <p className="text-[10px] text-muted-foreground truncate">
                        {res.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={res.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-border p-2 text-muted-foreground hover:border-royal hover:text-royal transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <button
                        onClick={() => handleDeleteResource(res.id, res.title)}
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
                No active resources found in cv-data.ts. Repository is empty.
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
          Resource Upload Portal
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Manage your course materials database. Upload files to Google Drive, specify links, and automatically commit metadata back to GitHub.
        </p>
      </div>

      <Suspense fallback={<div className="py-12 text-center text-muted-foreground">Loading portal settings...</div>}>
        <AdminContent />
      </Suspense>
    </div>
  )
}
