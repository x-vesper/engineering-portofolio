import type { ContentDictionary } from './types'

/**
 * Indonesian content. Must mirror the shape of `src/content/en.ts`.
 *
 * `identity` and the footer strings are intentionally identical to the English
 * file: the header and footer stay in English regardless of the language.
 */
export const id: ContentDictionary = {
  siteName: 'Irza Zakaria',
  identity: 'IRZA ZAKARIA / SYSTEMS ENGINEERING',
  hero: {
    headline: 'Saya mengerjakan sistem di balik perangkat lunak.',
    lede: 'Platform engineering, reliabilitas, Linux, jaringan, dan alat untuk memahami bagaimana sistem berperilaku saat ada masalah.',
  },
  focusAreas: [
    'Platform Engineering',
    'Site Reliability Engineering',
    'Linux & Jaringan',
    'Kubernetes',
    'Go',
    'Respon Insiden',
  ],
  sections: [
    {
      id: 'core-ops',
      label: 'CORE OPS',
      title: 'SRE & Respon Insiden',
      items: [
        { text: 'Respon insiden & investigasi alert' },
        { text: 'Troubleshooting reliabilitas & masalah operasional' },
        { text: 'Observability dengan Grafana' },
        { text: 'Postmortem tanpa menyalahkan & dokumentasi' },
        { text: 'Mode kegagalan: timeout, retry, kegagalan dependensi' },
      ],
    },
    {
      id: 'platform-lab',
      label: 'PLATFORM LAB',
      title: 'Kubernetes & Rekayasa Platform',
      items: [
        { text: 'Mengoperasikan Vesper Lab (homelab K3s)' },
        { text: 'RBAC & kontrol akses Kubernetes' },
        { text: 'CKAD — Sedang Dikerjakan', pill: true },
        { text: 'Mempertimbangkan CKA berikutnya' },
      ],
    },
    {
      id: 'infra',
      label: 'INFRA',
      title: 'Jaringan & Infrastruktur API',
      items: [
        { text: 'API Gateway untuk backend termasuk AI/ML' },
        { text: 'Token auth & middleware' },
        { text: 'Mutual TLS (mTLS)' },
        { text: 'Penyetelan retry, timeout, latensi' },
      ],
    },
  ],
  ui: {
    skipToContent: 'Lewati ke konten',
    languageGroupLabel: 'Bahasa',
    focusAreas: 'Bidang fokus',
    contactEyebrow: 'KONTAK',
    contactTitle: 'Hubungi saya',
    contactFallback:
      'Tautan kontak publik dikonfigurasi saat build dan belum diatur untuk deployment ini.',
    currentlyExploring: 'Currently exploring: eBPF, Rust, Advanced K8s networking',
    notFound: {
      code: 'exit status 1 / 404',
      title: 'Path tidak ditemukan',
      body: 'Tidak ada apa pun di alamat ini. Mungkin sudah dipindahkan, atau memang tidak pernah ada.',
      link: 'Kembali ke beranda',
    },
  },
}
