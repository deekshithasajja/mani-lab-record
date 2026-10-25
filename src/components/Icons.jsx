// Small inline SVG icons (no icon library needed).
const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

export const UserIcon = () => (<svg {...base}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>)
export const IdIcon = () => (<svg {...base}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 10h4M7 14h6M16 10h1" /></svg>)
export const BranchIcon = () => (<svg {...base}><path d="M12 3 2 8l10 5 10-5-10-5Z" /><path d="M6 10.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.5" /></svg>)
export const SectionIcon = () => (<svg {...base}><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>)
export const CodeIcon = () => (<svg {...base}><path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" /></svg>)
export const FileIcon = () => (<svg {...base}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></svg>)
export const CheckIcon = () => (<svg {...base} width="14" height="14"><path d="m5 12 5 5 9-10" /></svg>)
export const ClockIcon = () => (<svg {...base} width="14" height="14"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>)
export const MinusIcon = () => (<svg {...base} width="14" height="14"><circle cx="12" cy="12" r="9" /><path d="M8 12h8" /></svg>)
