import type { ContentDictionary } from './types'

/**
 * English content. See `src/content/id.ts` for the Indonesian translation —
 * both must satisfy `ContentDictionary`.
 *
 * `identity` and the footer strings are intentionally the same in both files:
 * the header and footer stay in English regardless of the selected language.
 */
export const en: ContentDictionary = {
  siteName: 'Irza Zakaria',
  identity: 'IRZA ZAKARIA / SYSTEMS ENGINEERING',
  hero: {
    headline: 'I work on the systems behind the software.',
    lede: 'Platform engineering, reliability, Linux, networking, and tools built to understand how systems behave when things go wrong.',
  },
  focusAreas: [
    'Platform Engineering',
    'Site Reliability Engineering',
    'Linux & Networking',
    'Kubernetes',
    'Go',
    'Incident Response',
  ],
  sections: [
    {
      id: 'core-ops',
      label: 'CORE OPS',
      title: 'SRE & Incident Response',
      items: [
        { text: 'Incident response & alert investigation' },
        { text: 'Troubleshooting reliability & operational issues' },
        { text: 'Observability with Grafana' },
        { text: 'Blameless postmortem & docs' },
        { text: 'Failure modes: timeout, retry, dependency failure' },
      ],
    },
    {
      id: 'platform-lab',
      label: 'PLATFORM LAB',
      title: 'Kubernetes & Platform Engineering',
      items: [
        { text: 'Operating Vesper Lab (homelab K3s)' },
        { text: 'Kubernetes RBAC & access control' },
        { text: 'CKAD — In Progress', pill: true },
        { text: 'Considering CKA next' },
      ],
    },
    {
      id: 'infra',
      label: 'INFRA',
      title: 'Networking & API Infrastructure',
      items: [
        { text: 'API Gateway for backend incl AI/ML' },
        { text: 'Auth token & middleware' },
        { text: 'Mutual TLS (mTLS)' },
        { text: 'Retry, timeout, latency tuning' },
      ],
    },
  ],
  ui: {
    skipToContent: 'Skip to content',
    languageGroupLabel: 'Language',
    focusAreas: 'Focus areas',
    contactEyebrow: 'CONTACT',
    contactTitle: 'Get in touch',
    contactFallback:
      'Public contact links are configured at build time and are not set for this deployment.',
    currentlyExploring: 'Currently exploring: eBPF, Rust, Advanced K8s networking',
    notFound: {
      code: 'exit status 1 / 404',
      title: 'Path not found',
      body: 'There is nothing at this address. It may have moved, or never existed.',
      link: 'Return home',
    },
  },
}
