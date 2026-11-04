import { useState, useRef, useEffect } from 'react'
import { Terminal as TerminalIcon, Check, Copy } from 'lucide-react'
import styles from './Terminal.module.css'

interface HistoryItem {
  command: string
  output?: string | React.ReactNode
}

export function TerminalSnippet() {
  const [copied, setCopied] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'neofetch',
      output: (
        <div className={styles.neofetch}>
          <span className={styles.nfAccent}>   /\\   </span> irza@vesper-systems<br/>
          <span className={styles.nfAccent}>  /  \\  </span> -------------------<br/>
          <span className={styles.nfAccent}> /\\ /\\ \\ </span> OS: Linux x86_64<br/>
          <span className={styles.nfAccent}>/      \\ </span> Host: Platform Engineering<br/>
          <span className={styles.nfAccent}>        </span> Uptime: 99.99% uptime<br/>
          <span className={styles.nfAccent}>        </span> Shell: zsh
        </div>
      )
    },
    {
      command: 'whoami',
      output: 'irza (Platform & Systems Engineer)'
    },
    {
      command: 'help',
      output: 'Available commands: neofetch, whoami, skills, clear, help'
    }
  ])

  const bottomRef = useRef<HTMLDivElement>(null)

  const handleCopy = () => {
    navigator.clipboard.writeText('ssh irza@vesper.is-a.dev')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const trimmed = input.trim().toLowerCase()
      if (!trimmed) return

      if (trimmed === 'clear') {
        setHistory([])
        setInput('')
        return
      }

      let output: string | React.ReactNode = `zsh: command not found: ${trimmed}. Type 'help' for available commands.`

      if (trimmed === 'neofetch') {
        output = (
          <div className={styles.neofetch}>
            <span className={styles.nfAccent}>   /\\   </span> irza@vesper-systems<br/>
            <span className={styles.nfAccent}>  /  \\  </span> -------------------<br/>
            <span className={styles.nfAccent}> /\\ /\\ \\ </span> OS: Linux x86_64<br/>
            <span className={styles.nfAccent}>/      \\ </span> Host: Platform Engineering<br/>
            <span className={styles.nfAccent}>        </span> Uptime: 99.99% uptime<br/>
            <span className={styles.nfAccent}>        </span> Shell: zsh
          </div>
        )
      } else if (trimmed === 'whoami') {
        output = 'irza (Platform & Systems Engineer)'
      } else if (trimmed === 'skills') {
        output = 'Linux, Systems, Kubernetes, Go, Docker, Terraform, CI/CD, Observability'
      } else if (trimmed === 'help') {
        output = "Available commands: neofetch, whoami, skills, clear, help"
      }

      setHistory((prev) => [...prev, { command: input, output }])
      setInput('')
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

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
          <span>zsh — vesper@systems (interactive)</span>
        </div>
        <button onClick={handleCopy} className={styles.copyBtn} aria-label="Copy ssh command">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <div className={styles.body}>
        <div className={styles.historyList}>
          {history.map((item, index) => (
            <div key={index} className={styles.historyItem}>
              <div className={styles.line}>
                <span className={styles.prompt}>$</span>
                <span className={styles.command}>{item.command}</span>
              </div>
              {item.output && <div className={styles.output}>{item.output}</div>}
            </div>
          ))}
        </div>
        <div className={styles.inputRow}>
          <span className={styles.prompt}>$</span>
          <input
            type="text"
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help', 'neofetch'..."
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
