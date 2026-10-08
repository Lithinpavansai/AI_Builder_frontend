'use client'

interface Props {
  jobId: string
  error: string
  onRetry: () => void
}

function getErrorHeadline(error: string): string {
  const errLower = error.toLowerCase()
  if (errLower.includes('daily token limit') || errLower.includes('tokens per day') || errLower.includes('tpd')) {
    return 'Groq Daily Token Limit Reached'
  }
  if (errLower.includes('rate limit') || errLower.includes('429') || errLower.includes('tpm') || errLower.includes('rpm')) {
    return 'Groq Rate Limit Exceeded'
  }
  if (errLower.includes('json') || errLower.includes('decode') || errLower.includes('parse')) {
    return 'JSON Parsing Failed'
  }
  if (errLower.includes('timeout') || errLower.includes('timed out')) {
    return 'Pipeline Request Timed Out'
  }
  if (errLower.includes('payload too large') || errLower.includes('413')) {
    return 'Prompt Payload Too Large'
  }
  if (errLower.includes('validation')) {
    return 'Schema Validation Failed'
  }
  return 'Pipeline Failed'
}

export default function ErrorPanel({ jobId, error, onRetry }: Props) {
  const headline = getErrorHeadline(error)

  return (
    <div className="bg-red-950 border border-red-800 rounded-xl p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-red-400 font-semibold text-sm">{headline}</h3>
          <p className="text-zinc-500 text-xs mt-1">Job: {jobId}</p>
        </div>
        <span className="text-red-500 text-lg">✗</span>
      </div>

      {/* Full Error message in scrollable area */}
      <div className="bg-red-900/30 border border-red-800/40 rounded-lg p-3 mb-4 max-h-56 overflow-y-auto">
        <p className="text-red-300 text-xs font-mono leading-relaxed break-words whitespace-pre-wrap select-text">
          {error}
        </p>
      </div>

      {/* Common causes */}
      <div className="mb-4">
        <p className="text-zinc-500 text-xs mb-2">Common causes & solutions:</p>
        <ul className="space-y-1 text-zinc-600 text-xs">
          <li>• Groq API daily token limit (TPD) reached — wait for reset or switch model in .env</li>
          <li>• Groq rate limit (TPM/RPM) — wait a few seconds and retry</li>
          <li>• Complex prompt requiring multiple iterations</li>
        </ul>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onRetry}
          className="flex-1 bg-white text-black text-sm font-medium py-2 rounded-lg hover:bg-zinc-200 transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="flex-1 bg-zinc-800 text-zinc-300 text-sm font-medium py-2 rounded-lg hover:bg-zinc-700 transition-colors"
        >
          New Prompt
        </button>
      </div>
    </div>
  )
}

