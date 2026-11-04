import { useState } from 'react'
import { Terminal as TerminalIcon, Check, Copy } from 'lucide-react'
import styles from './Terminal.module.css'

export function TerminalSnippet() {
  const [copied, setCopied] = useState(false)
  const command = 'ssh irza@vesper.is-a.dev'

  const handleCopy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <div className={styles.dots}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <div className={styles.title}>
          <TerminalIcon className={styles.icon} />
          <span>zsh — vesper@systems</span>
        </div>
        <button onClick={handleCopy} className={styles.copyBtn} aria-label="Copy command">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <div className={styles.body}>
        <span className={styles.prompt}>$</span>
        <span className={styles.command}>{command}</span>
      </div>
    </div>
  )
}
