import { ServiceDetail } from '../types.ts';

export const servicesData: ServiceDetail[] = [
  // --- CYBERSECURITY ---
  {
    id: 'vulnerability-assessment',
    category: 'cybersecurity',
    title: 'Vulnerability Assessment',
    shortDesc: 'Systematically identify known and potential security weaknesses across systems, configurations, and applications.',
    iconName: 'Crosshair',
    details: [
      'Comprehensive scanning across network hosts, operating systems, and web services',
      'Prioritization based on Common Vulnerability Scoring System (CVSS) and business context',
      'Rigorous false-positive validation to eliminate noise',
      'Actionable remediation guidance tailored to infrastructure architectures',
      'Executive summary alongside granular technical remediation roadmaps'
    ],
    scope: 'Conducted under written authorization across defined IP blocks and host ranges.',
    deliverables: [
      'Executive Risk Assessment Summary',
      'Detailed Technical Vulnerability Registry',
      'Prioritized Remediation Action Matrix',
      'Post-Remediation Verification Scan'
    ]
  },
  {
    id: 'penetration-testing',
    category: 'cybersecurity',
    title: 'Penetration Testing (VAPT)',
    shortDesc: 'Rigorous ethical hacking and security validation across web apps, APIs, networks, and internal infrastructure.',
    iconName: 'ShieldAlert',
    details: [
      'Web application testing adhering to OWASP Top 10 and WSTG standards',
      'REST, GraphQL, and microservice API vulnerability testing',
      'External and internal network infrastructure penetration testing',
      'Controlled proof-of-concept exploitation within safe operating parameters',
      'Assessment of authentication, authorization, cryptographic storage, and logic flaws'
    ],
    scope: 'Conducted under strict Rules of Engagement (RoE) with defined testing windows and safe operational limits.',
    deliverables: [
      'Comprehensive VAPT Technical Report',
      'Proof-of-Concept Evidence & Reproduction Steps',
      'Remediation Playbook for Engineering Teams',
      'Formal Re-Testing & Attestation Letter'
    ]
  },
  {
    id: 'offensive-security',
    category: 'cybersecurity',
    title: 'Offensive Security & Red Teaming',
    shortDesc: 'Simulate sophisticated real-world adversary tactics to stress-test organizational defenses and detection capabilities.',
    iconName: 'Target',
    details: [
      'Adversary simulation modeled on relevant threat actor profiles',
      'Comprehensive attack-surface discovery and reconnaissance',
      'Security control validation (EDR, SIEM, firewalls, and detection telemetry)',
      'Attack-path mapping and lateral movement evaluation in sandboxed environments',
      'Joint debriefing with defensive teams to enhance incident detection'
    ],
    scope: 'Strictly authorized adversary simulations with designated safety controllers and emergency abort protocols.',
    deliverables: [
      'Adversary Simulation Timeline & Log Correlation',
      'Detection Blind-Spot Analysis',
      'Attack Path Visualizations',
      'Collaborative Purple Team Remediation Workshop'
    ]
  },
  {
    id: 'defensive-security',
    category: 'cybersecurity',
    title: 'Defensive Security & Blue Team',
    shortDesc: 'Architect and reinforce proactive defenses through continuous telemetry, threat detection, and incident readiness.',
    iconName: 'ShieldCheck',
    details: [
      'Security architecture review and defense-in-depth engineering',
      'Continuous telemetry capture and multi-source log correlation',
      'Custom detection engineering mapped to MITRE ATT&CK tactics',
      'Incident response playbook development and readiness drills',
      'Endpoint and server operating system hardening benchmarks (CIS benchmarks)'
    ],
    scope: 'Enterprise and cloud infrastructure defense planning and configuration hardening.',
    deliverables: [
      'Security Baseline & Hardening Documentation',
      'Custom Detection Rules (Sigma / YARA / SIEM queries)',
      'Incident Response Action Playbooks',
      'Threat Matrix & Attack Surface Assessment'
    ]
  },
  {
    id: 'soc-support',
    category: 'cybersecurity',
    title: 'SOC Support & Threat Analysis',
    shortDesc: 'Operational security event triage, SIEM architecture, detection rule tuning, and proactive threat intelligence.',
    iconName: 'Activity',
    details: [
      'Tier 1 to Tier 3 security event triage and escalation workflows',
      'SIEM architecture design and implementation (Wazuh, Elastic, Sentinel)',
      'Tuning alerts to decrease alert fatigue and minimize false positives',
      'Threat intelligence ingestion and indicator of compromise (IoC) correlation',
      'Shift handover documentation, SLA management, and continuous metric tracking'
    ],
    scope: 'Security operations enhancement and defensive telemetry monitoring design.',
    deliverables: [
      'SOC Workflow Standard Operating Procedures (SOPs)',
      'Alert Triage Prioritization Framework',
      'SIEM Telemetry Ingestion Architecture',
      'Quarterly Threat Analysis & Efficacy Review'
    ]
  },
  {
    id: 'security-consulting',
    category: 'cybersecurity',
    title: 'Security Consulting & Governance',
    shortDesc: 'Strategic guidance on security architecture, risk management, regulatory readiness, and secure development lifecycles.',
    iconName: 'FileCheck2',
    details: [
      'Zero-trust architecture design and infrastructure threat modeling',
      'Risk assessment methodologies aligned with ISO 27001 and NIST frameworks',
      'Security policy formulation, access control, and credential lifecycle planning',
      'DevSecOps pipeline integration and automated code scanning guidance',
      'Third-party vendor risk assessment and security posture reviews'
    ],
    scope: 'Advisory and strategic governance customized to business and organizational scale.',
    deliverables: [
      'Security Architecture Blueprint',
      'Enterprise Risk Assessment Register',
      'Information Security Policy Suite',
      'DevSecOps Integration Roadmap'
    ]
  },

  // --- DEVELOPMENT ---
  {
    id: 'custom-web-apps',
    category: 'development',
    title: 'Custom Web & Software Development',
    shortDesc: 'High-performance web applications built with security-conscious engineering and clean modern architectures.',
    iconName: 'Terminal',
    details: [
      'Robust full-stack applications with React, TypeScript, and modern frameworks',
      'Modular architecture engineered for scale, reliability, and maintainability',
      'Implementation of principle of least privilege in application state and databases',
      'Automated testing suites and continuous integration pipelines',
      'Responsive, accessible, and fast web experiences across all screen sizes'
    ],
    scope: 'Full lifecycle software development from system design through production deployment.',
    deliverables: [
      'Production-Ready Source Codebase',
      'System Architecture Specification',
      'Automated CI/CD Pipeline Configuration',
      'Deployment & Maintenance Manual'
    ]
  },
  {
    id: 'secure-apis',
    category: 'development',
    title: 'Secure API & Backend Systems',
    shortDesc: 'Scalable backend architectures, REST/GraphQL APIs, and resilient data layers with hardened authentication.',
    iconName: 'Cpu',
    details: [
      'JWT/OAuth 2.0 based token authentication and granular role-based access control (RBAC)',
      'Strict input validation, rate limiting, and request schema enforcement',
      'Database design with encrypted storage at rest and in transit',
      'Resilient webhook systems and third-party service integrations',
      'Comprehensive API documentation with OpenAPI / Swagger specifications'
    ],
    scope: 'Backend engineering, cloud-native services, and enterprise API gateways.',
    deliverables: [
      'Hardened Backend API Service',
      'Database Schemas & Migration Scripts',
      'OpenAPI 3.0 Documentation',
      'Security Audit Log & Penetration Verification'
    ]
  },
  {
    id: 'secure-dev-lifecycle',
    category: 'development',
    title: 'Application Hardening & Maintenance',
    shortDesc: 'Code audits, dependency vulnerability mitigation, performance optimization, and ongoing platform reliability.',
    iconName: 'Lock',
    details: [
      'Static and dynamic application security testing (SAST/DAST) integration',
      'Software composition analysis (SCA) to remediate vulnerable dependencies',
      'Security header implementation (CSP, HSTS, X-Frame-Options, Referrer-Policy)',
      'Performance profiling, bundle optimization, and database query tuning',
      'Scheduled security patching and technical support SLAs'
    ],
    scope: 'Audit, hardening, and SLA-backed ongoing maintenance for critical web assets.',
    deliverables: [
      'Application Security Hardening Audit',
      'Automated Dependency Security Watchdog',
      'Optimized Production Bundle',
      'Maintenance & Patching Plan'
    ]
  },

  // --- DESIGN ---
  {
    id: 'ui-ux-design',
    category: 'design',
    title: 'UI/UX Interface & Product Design',
    shortDesc: 'Minimalist, intuitive user interfaces and complex workflows designed with ergonomic clarity and visual sophistication.',
    iconName: 'Layout',
    details: [
      'User journey mapping, wireframing, and interactive prototyping',
      'Dark-mode and high-contrast specialized visual environments',
      'Complex dashboard and data-dense interface ergonomics',
      'WCAG AA accessible design systems and component libraries',
      'Design tokens and seamless handoff to frontend engineering teams'
    ],
    scope: 'Complete product and interface design from user discovery to production handoff.',
    deliverables: [
      'Interactive Figma / Component Prototypes',
      'Design System with Reusable UI Tokens',
      'Production Asset Library & Icons',
      'Developer Handoff Specification'
    ]
  },
  {
    id: 'design-systems',
    category: 'design',
    title: 'Design Systems & Brand Communication',
    shortDesc: 'Unified visual languages, typographic hierarchies, and digital assets that convey technical authority and trust.',
    iconName: 'Palette',
    details: [
      'Comprehensive component architecture documentation',
      'Color palettes calibrated for contrast, legibility, and technical focus',
      'Custom iconography and technical diagrams tailored to security workflows',
      'Multi-platform responsive guidelines (desktop, tablet, mobile)',
      'Digital communication templates and product collateral assets'
    ],
    scope: 'Brand identity assets, component design systems, and digital communication tools.',
    deliverables: [
      'Core Design System Guidelines',
      'Custom Icon & Diagram Library',
      'Typography & Color Token Registry',
      'Multi-Format Digital Brand Assets'
    ]
  }
];
