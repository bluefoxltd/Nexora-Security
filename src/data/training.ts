import { TrainingProgram } from '../types.ts';

export const trainingProgramsData: TrainingProgram[] = [
  // --- PYTHON, DATA SCIENCE & AI/ML (FEATURED) ---
  {
    id: 'python-mastery',
    title: 'Python: Basic to Advance',
    level: 'Beginner',
    track: 'Python & AI',
    shortDesc: 'Complete Python mastery from syntax and object-oriented programming to advanced concurrency, metaprogramming, and security automation.',
    iconName: 'Code',
    durationNotice: 'Contact us for details',
    prerequisites: 'No prior programming experience required. Absolute beginners welcome.',
    topics: [
      'Python syntax, dynamic typing, variables, operators, and memory model',
      'Control flow, loops, comprehension expressions (list, dict, set), and pattern matching',
      'Functions, scoping, lambda expressions, closures, and first-class functions',
      'Object-Oriented Programming (OOP): classes, inheritance, dunder methods, polymorphism',
      'Exception handling, custom exceptions, context managers (`with` statements)',
      'Advanced Python: decorators, generators, iterators, and itertools/functools',
      'File I/O, serialization (JSON, YAML, Pickle), and regular expressions (Regex)',
      'Concurrency & parallelism: threading, multiprocessing, and AsyncIO event loops',
      'Packaging, virtual environments (venv, uv, poetry), and pip dependency management',
      'Web frameworks & APIs: building RESTful endpoints with FastAPI and Flask',
      'Python for Security Automation: socket programming, packet crafting, port scanners, and automation scripts'
    ],
    practicalLabs: [
      'Build a multi-threaded port scanner and banner grabbing utility from scratch',
      'Develop a full-featured asynchronous REST API service using FastAPI and SQLite',
      'Construct a customized log parsing and anomaly detection script for Apache/Nginx logs',
      'Design an object-oriented automated backup and encrypted file distribution system'
    ],
    skillsGained: [
      'Core & Advanced Python 3.12+',
      'Object-Oriented & Functional Design',
      'AsyncIO & Concurrent Programming',
      'Security & Network Scripting',
      'FastAPI & API Development'
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science & Predictive Analytics',
    level: 'Intermediate',
    track: 'Python & AI',
    shortDesc: 'Statistical computing, exploratory data analysis, data manipulation with NumPy & Pandas, visualization, and predictive modeling.',
    iconName: 'Activity',
    durationNotice: 'Contact us for details',
    prerequisites: 'Foundational knowledge of Python programming and high-school mathematics/statistics.',
    topics: [
      'Scientific Python stack: vectorization, broadcasting, and multi-dimensional arrays with NumPy',
      'Data manipulation & wrangling with Pandas & Polars: DataFrames, indexing, merging, grouping',
      'Exploratory Data Analysis (EDA): missing value imputation, outlier detection, data distribution analysis',
      'Statistical foundation: descriptive stats, probability distributions, hypothesis testing, p-values',
      'Data visualization: interactive dashboards and publication-grade plotting (Matplotlib, Seaborn, Plotly)',
      'Relational databases & SQL querying for data analysts, SQLAlchemy integration',
      'Feature engineering: scaling, normalization, one-hot encoding, target encoding, dimensionality reduction (PCA)',
      'Time series analysis: trend decomposition, seasonality, stationarity, ARIMA models',
      'Data cleaning pipelines and automated workflow orchestration'
    ],
    practicalLabs: [
      'Clean and normalize a noisy real-world multi-gigabyte dataset using Pandas and Polars',
      'Conduct end-to-end exploratory data analysis and build an interactive visual dashboard',
      'Perform statistical hypothesis testing to validate customer conversion and performance metrics',
      'Engineer a predictive regression model to forecast trends and evaluate confidence intervals'
    ],
    skillsGained: [
      'NumPy & Pandas / Polars Data Wrangling',
      'Exploratory Data Analysis (EDA)',
      'Statistical Modeling & Hypothesis Testing',
      'Feature Engineering & Pipelines',
      'Interactive Data Visualization'
    ]
  },
  {
    id: 'ai-machine-learning',
    title: 'Artificial Intelligence & Machine Learning (AI/ML)',
    level: 'Advanced',
    track: 'Python & AI',
    shortDesc: 'Deep dive into machine learning algorithms, deep learning neural networks, PyTorch, Transformers, LLMs, and real-world deployment.',
    iconName: 'Cpu',
    durationNotice: 'Contact us for details',
    prerequisites: 'Proficiency in Python and basic linear algebra, calculus, and probability.',
    topics: [
      'Machine Learning fundamentals: Supervised, Unsupervised, and Reinforcement learning paradigms',
      'Classical ML algorithms: Linear/Logistic Regression, Decision Trees, Random Forests, XGBoost, SVMs, KNN, K-Means',
      'Model evaluation & validation: cross-validation, confusion matrices, ROC-AUC, precision-recall trade-offs',
      'Deep Learning foundations: artificial neurons, activation functions, backpropagation, gradient descent optimizers (Adam, SGD)',
      'Deep Learning frameworks: PyTorch tensor mechanics, autograd, and neural network module architecture',
      'Computer Vision: Convolutional Neural Networks (CNNs), transfer learning, ResNet, image classification',
      'Natural Language Processing (NLP): tokenization, embeddings (Word2Vec), RNNs, LSTMs',
      'Modern Generative AI & Transformers: self-attention mechanisms, encoder-decoder architectures, BERT & GPT concepts',
      'Large Language Models (LLMs): prompt engineering, parameter-efficient fine-tuning (LoRA), and retrieval-augmented generation (RAG)',
      'Vector databases (Chroma, Pinecone, FAISS) for semantic search and AI grounding',
      'MLOps & Deployment: model serialization (ONNX), containerization with Docker, and serving via FastAPI'
    ],
    practicalLabs: [
      'Train, tune, and evaluate an ensemble gradient boosting classifier (XGBoost) for anomaly detection',
      'Construct and train a custom deep neural network in PyTorch with GPU acceleration',
      'Build a complete Retrieval-Augmented Generation (RAG) system with vector embeddings and an LLM',
      'Deploy an end-to-end Machine Learning inference API containerized with Docker and FastAPI'
    ],
    skillsGained: [
      'Scikit-Learn & XGBoost Modeling',
      'PyTorch Deep Neural Networks',
      'Transformer Architectures & LLMs',
      'RAG & Vector Database Systems',
      'MLOps & Production Model Serving'
    ]
  },

  // --- CYBERSECURITY CURRICULUM ---
  {
    id: 'cybersecurity-fundamentals',
    title: 'Cybersecurity Fundamentals',
    level: 'Beginner',
    track: 'Engineering',
    shortDesc: 'Core principles of information security, common cyber threat vectors, cryptographic basics, and identity management.',
    iconName: 'BookOpen',
    durationNotice: 'Contact us for details',
    prerequisites: 'Basic familiarity with computer operations and internet concepts. No programming background required.',
    topics: [
      'Information security principles (CIA Triad: Confidentiality, Integrity, Availability)',
      'Common cyber threats, malware classifications, and modern attack vectors',
      'Security policies, risk assessment fundamentals, and compliance baselines',
      'Identity and Access Management (IAM), principle of least privilege',
      'Authentication, Authorization, Multi-Factor Authentication (MFA) mechanisms',
      'Encryption fundamentals: symmetric, asymmetric, hashing, and TLS',
      'Security hygiene, password governance, and social engineering awareness',
      'Incident reporting protocols and initial triage foundations'
    ],
    practicalLabs: [
      'Analyze sample security event logs in simulated enterprise environments',
      'Identify phishing indicators in safe synthetic sample messages',
      'Review and audit access-control configurations on multi-user systems',
      'Implement multi-factor authentication and credential hardening exercises'
    ],
    skillsGained: [
      'Threat identification',
      'Basic security auditing',
      'Access control policy review',
      'Incident reporting fundamentals'
    ]
  },
  {
    id: 'networking-system-security',
    title: 'Networking & System Security',
    level: 'Beginner',
    track: 'Engineering',
    shortDesc: 'Deep dive into TCP/IP protocol suites, network traffic analysis, OS hardening, firewall rules, and perimeter defense.',
    iconName: 'Network',
    durationNotice: 'Contact us for details',
    prerequisites: 'Basic understanding of computer systems and command line basics.',
    topics: [
      'TCP/IP suite architecture and the OSI 7-layer networking model',
      'IPv4/IPv6 addressing, CIDR subnetting, and routing protocols',
      'Core protocols: DNS, DHCP, HTTP, HTTPS, TLS, ARP, and ICMP',
      'Routing, switching, and VLAN-based network segmentation architectures',
      'Linux command-line security administration and file permissions',
      'Windows operating system security architectures and Active Directory basics',
      'Firewall rule configurations, Access Control Lists (ACLs), and NAT',
      'Network packet capture, Wireshark filtering, and protocol dissection',
      'System hardening benchmarks (CIS baselines) and automated patch management'
    ],
    practicalLabs: [
      'Dissect live network protocol captures in Wireshark within isolated practice networks',
      'Configure iptables and nftables stateful firewall rules on Linux hosts',
      'Apply CIS benchmark hardening scripts to Windows and Linux test servers',
      'Design segmented subnets with ACL restrictions in isolated virtual testbeds'
    ],
    skillsGained: [
      'Packet capture analysis',
      'Firewall & ACL configuration',
      'OS hardening (Linux & Windows)',
      'Network segmentation'
    ]
  },
  {
    id: 'offensive-security-ethical-hacking',
    title: 'Offensive Security & Ethical Hacking',
    level: 'Intermediate',
    track: 'Offensive',
    shortDesc: 'Structured ethical hacking methodology, reconnaissance, authorized enumeration, and vulnerability verification.',
    iconName: 'Terminal',
    durationNotice: 'Contact us for details',
    prerequisites: 'Solid foundation in networking protocols and Linux command line operations.',
    topics: [
      'Ethical hacking methodologies, legal standards, and code of ethics',
      'Rules of Engagement (RoE), authorization letters, and scope boundaries',
      'Passive and active reconnaissance, OSINT, and attack-surface mapping',
      'Network port scanning and service enumeration (Nmap, masscan)',
      'Vulnerability scanning and manual verification to eliminate false positives',
      'Web and network application security testing techniques',
      'Controlled proof-of-concept validation in sandboxed environments',
      'Evidence collection, sanitized screen captures, and audit trails',
      'Technical vulnerability documentation and CVSS scoring',
      'Writing actionable, executive-ready penetration testing reports'
    ],
    practicalLabs: [
      'Perform structured reconnaissance and asset discovery on target sandbox networks',
      'Conduct network enumeration and service profiling using Nmap scripts',
      'Identify and safely demonstrate vulnerabilities in intentionally flawed web applications',
      'Author a comprehensive, professional penetration testing report with remediation steps'
    ],
    skillsGained: [
      'Authorized reconnaissance',
      'Port & service enumeration',
      'Vulnerability validation',
      'Professional security reporting'
    ]
  },
  {
    id: 'defensive-security-operations',
    title: 'Defensive Security',
    level: 'Intermediate',
    track: 'Defensive',
    shortDesc: 'Defense-in-depth architecture, endpoint telemetry, intrusion detection, security log analysis, and incident containment.',
    iconName: 'Shield',
    durationNotice: 'Contact us for details',
    prerequisites: 'Networking fundamentals and foundational operating systems knowledge.',
    topics: [
      'Defense-in-depth principles and zero-trust architectural design',
      'Endpoint and server security hardening across enterprise fleets',
      'Centralized security logging, log aggregation, and Syslog normalization',
      'Intrusion Detection & Prevention Systems (IDS/IPS: Suricata, Snort concepts)',
      'Threat intelligence fundamentals and Indicators of Compromise (IoCs)',
      'Safe malware analysis concepts and behavioral inspection in isolated VMs',
      'Security event investigation and alert correlation techniques',
      'Incident containment, eradication, and system restoration processes',
      'Backup verification, disaster recovery, and organizational cyber resilience'
    ],
    practicalLabs: [
      'Correlate disparate Windows Event Logs and Syslog streams during simulated attacks',
      'Investigate sample indicators of compromise (hashes, suspicious IP addresses, domains)',
      'Deploy and tune host-based intrusion detection agents in lab virtual machines',
      'Draft an end-to-end incident containment action report for a simulated breach'
    ],
    skillsGained: [
      'Security telemetry correlation',
      'IoC investigation',
      'Host-based detection configuration',
      'Incident containment execution'
    ]
  },
  {
    id: 'red-team-operations',
    title: 'Red Team Operations',
    level: 'Advanced',
    track: 'Offensive',
    shortDesc: 'Advanced adversary emulation, attack-path modeling, defensive evasion concepts, and purple-team collaboration.',
    iconName: 'Target',
    durationNotice: 'Contact us for details',
    prerequisites: 'Completion of Offensive Security / Ethical Hacking or equivalent real-world security experience.',
    topics: [
      'Red teaming vs. traditional penetration testing: goals and methodology',
      'Adversary emulation frameworks mapped to MITRE ATT&CK',
      'Strict operational security (OpSec) and deconfliction protocols',
      'Initial access concepts and realistic adversary simulation planning',
      'Attack-path analysis and Active Directory relationship mapping (BloodHound concepts)',
      'Privilege escalation concepts in controlled, sandboxed lab environments',
      'Lateral movement concepts and credential hygiene testing',
      'Command-and-Control (C2) architecture concepts from a detection perspective',
      'Defensive evasion analysis: understanding how detection telemetry triggers',
      'Post-exercise debriefing, purple teaming, and remediation prioritization'
    ],
    practicalLabs: [
      'Simulate an authorized adversary campaign across an isolated domain testbed',
      'Evaluate defensive telemetry coverage during multi-stage attack scenarios',
      'Map observed activities directly to defensive detection opportunities',
      'Produce an authorized Red Team technical debrief and defensive hardening report'
    ],
    skillsGained: [
      'Adversary emulation planning',
      'Attack path modeling',
      'Detection telemetry evaluation',
      'Purple team debriefing'
    ]
  },
  {
    id: 'blue-team-operations',
    title: 'Blue Team Operations',
    level: 'Advanced',
    track: 'Defensive',
    shortDesc: 'Detection engineering, threat hunting methodologies, forensic evidence collection, and incident response playbooks.',
    iconName: 'ShieldAlert',
    durationNotice: 'Contact us for details',
    prerequisites: 'Defensive security or system administration background with log analysis experience.',
    topics: [
      'Defensive security architecture and enterprise telemetry pipelines',
      'Multi-source log correlation: endpoints, firewalls, DNS, and cloud proxies',
      'Detection engineering: writing custom Sigma and YARA rules',
      'Proactive threat hunting methodologies (hypothesis-driven investigations)',
      'Endpoint Detection and Response (EDR) telemetry analysis',
      'Network traffic behavioral inspection and anomalous flow detection',
      'Forensic evidence preservation, hash validation, and chain of custody',
      'Incident response playbooks for ransomware, unauthorized access, and credential compromise',
      'Lessons learned processes and defensive control validation'
    ],
    practicalLabs: [
      'Investigate complex simulated intrusion alerts across multiple telemetry sources',
      'Write, test, and tune Sigma detection rules against simulated attack artifacts',
      'Reconstruct an attack timeline using digital forensic timeline utilities',
      'Author an actionable Incident Response playbook for organizational resilience'
    ],
    skillsGained: [
      'Detection rule engineering (Sigma/YARA)',
      'Hypothesis-driven threat hunting',
      'Evidence chain of custody preservation',
      'IR playbook development'
    ]
  },
  {
    id: 'soc-analyst',
    title: 'Security Operations Center (SOC) Analyst',
    level: 'Intermediate',
    track: 'Operations',
    shortDesc: 'Hands-on SIEM operations, alert triage workflows, investigation playbooks, false-positive tuning, and shift handovers.',
    iconName: 'Activity',
    durationNotice: 'Contact us for details',
    prerequisites: 'Basic knowledge of networking protocols, operating systems, and security concepts.',
    topics: [
      'SOC organizational structure: Tier 1, Tier 2, and Tier 3 analyst responsibilities',
      'SIEM architecture: log ingestion, parsing, normalization, and indexing',
      'Alert triage methodologies and false-positive reduction strategies',
      'Threat intelligence integration (MISP, AlienVault OTX, VirusTotal lookups)',
      'Phishing email analysis: headers, attachments, and synthetic payload inspection',
      'Suspicious authentication investigation (brute force, impossible travel)',
      'Incident ticket escalation, severity scoring, and SLA adherence',
      'Case management, evidence documentation, and shift handover procedures',
      'Key SOC operational metrics: MTTD (Mean Time to Detect) and MTTR (Mean Time to Respond)'
    ],
    practicalLabs: [
      'Triage a realistic queue of simulated SIEM alerts in a hands-on lab interface',
      'Investigate sample phishing communications and safely extract domain/header IoCs',
      'Trace suspicious lateral authentication spikes through Windows security event logs',
      'Author an executive incident summary ticket with mitigation recommendations'
    ],
    skillsGained: [
      'SIEM navigation & search syntax',
      'Alert prioritization & triage',
      'Phishing investigation',
      'Incident ticket documentation'
    ]
  },
  {
    id: 'vapt-methodology',
    title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
    level: 'Advanced',
    track: 'Offensive',
    shortDesc: 'Full lifecycle vulnerability scanning, manual flaw validation, API & web application testing, and remediation reporting.',
    iconName: 'Crosshair',
    durationNotice: 'Contact us for details',
    prerequisites: 'Ethical Hacking or intermediate offensive security fundamentals.',
    topics: [
      'VAPT lifecycle: scoping, discovery, scanning, analysis, reporting, and retesting',
      'CVE and CVSS v3.1/v4 scoring frameworks and business impact calculation',
      'Automated scanning tool orchestration and manual verification procedures',
      'Web application testing according to the OWASP Web Security Testing Guide (WSTG)',
      'REST & GraphQL API testing according to the OWASP API Security Top 10',
      'Authentication, session management, and authorization testing (IDOR, BOLA)',
      'Input validation vulnerabilities (SQL injection, XSS, SSRF, command injection)',
      'Component vulnerability analysis and supply chain dependency checks',
      'Remediation verification testing and defensive patch confirmation'
    ],
    practicalLabs: [
      'Execute a comprehensive VAPT assessment against intentionally vulnerable lab applications',
      'Validate complex authorization flaws (IDOR/BOLA) with intercepting proxies',
      'Calculate precise CVSS vectors and draft mitigation guidance for each finding',
      'Produce an enterprise-grade VAPT audit report and executive summary'
    ],
    skillsGained: [
      'End-to-end VAPT execution',
      'OWASP WSTG testing methodology',
      'CVSS scoring calibration',
      'Remediation verification auditing'
    ]
  },
  {
    id: 'web-api-security',
    title: 'Web Application & API Security',
    level: 'Intermediate',
    track: 'Offensive',
    shortDesc: 'In-depth analysis of HTTP mechanisms, OWASP Top 10 web vulnerabilities, API token security, and secure coding practices.',
    iconName: 'Code',
    durationNotice: 'Contact us for details',
    prerequisites: 'Basic web development knowledge (HTML/JS/HTTP) and familiarity with web browsers.',
    topics: [
      'HTTP/HTTPS protocol deep-dive: headers, cookies, state, and CORS policies',
      'Session management: tokens, JWT structures, secure cookies, and lifetime policies',
      'Broken Access Control: vertical and horizontal privilege escalations',
      'Injection attacks: SQLi, NoSQLi, command injection, and template injection',
      'Cross-Site Scripting (XSS): Stored, Reflected, DOM-based, and CSP mitigations',
      'Cross-Site Request Forgery (CSRF) and modern SameSite cookie protections',
      'Server-Side Request Forgery (SSRF) mechanisms and cloud metadata exposure',
      'API Security: Broken Object Level Authorization (BOLA), mass assignment, rate limiting',
      'Secure file upload handling, content-type verification, and sandboxed storage'
    ],
    practicalLabs: [
      'Intercept and modify HTTP traffic using Burp Suite Community Edition in sandbox labs',
      'Identify and remediate SQL injection flaws in vulnerable test web applications',
      'Test API endpoints for broken object level authorization and missing rate limits',
      'Configure Content Security Policy (CSP) headers to prevent client-side script execution'
    ],
    skillsGained: [
      'Proxy interception (Burp Suite)',
      'OWASP Top 10 exploitation & defense',
      'API security assessment',
      'Secure coding mitigation'
    ]
  },
  {
    id: 'digital-forensics-ir',
    title: 'Digital Forensics & Incident Response (DFIR)',
    level: 'Advanced',
    track: 'Operations',
    shortDesc: 'Evidence preservation, chain of custody, timeline reconstruction, disk and memory forensics, and post-incident reviews.',
    iconName: 'Cpu',
    durationNotice: 'Contact us for details',
    prerequisites: 'Operating systems fundamentals, storage basics, and defensive security familiarity.',
    topics: [
      'Incident response lifecycle aligned with NIST SP 800-61 frameworks',
      'Digital evidence acquisition, hashing algorithms, and strict chain of custody',
      'File system forensics (NTFS, ext4): metadata, MFT, inodes, and deleted file recovery',
      'Windows artifact analysis: Registry, Prefetch, Shimcache, Amcache, Event Logs',
      'Linux forensic artifacts: auth logs, history files, cron jobs, and proc filesystem',
      'Memory forensics fundamentals: inspecting process trees and active network connections',
      'Timeline analysis and chronological reconstruction of breach events',
      'Containment strategies, evidence preservation, and eradication procedures',
      'Post-incident reporting, root-cause identification, and continuous improvement'
    ],
    practicalLabs: [
      'Verify digital image integrity using SHA-256 hashes on sample forensic captures',
      'Extract and analyze Windows execution artifacts from synthetic lab forensic images',
      'Construct a comprehensive chronological timeline of a simulated intrusion event',
      'Produce a formal Forensic Investigation and Root Cause Analysis report'
    ],
    skillsGained: [
      'Forensic image integrity verification',
      'Artifact extraction & analysis',
      'Attack timeline reconstruction',
      'Post-incident root cause documentation'
    ]
  },
  {
    id: 'cloud-infrastructure-security',
    title: 'Cloud & Infrastructure Security',
    level: 'Intermediate',
    track: 'Engineering',
    shortDesc: 'Cloud shared responsibility models, IAM least privilege, container security, cloud logging, and infrastructure posture.',
    iconName: 'Cloud',
    durationNotice: 'Contact us for details',
    prerequisites: 'Basic networking and foundational understanding of cloud concepts.',
    topics: [
      'Cloud computing security architectures and Shared Responsibility models',
      'Cloud Identity and Access Management (IAM), roles, and least-privilege enforcement',
      'Secure Virtual Private Cloud (VPC) network design, security groups, and routing',
      'Storage permissions, bucket access controls, and data encryption at rest/transit',
      'Container and Kubernetes security fundamentals: image scanning, runtime isolation',
      'Cloud logging and monitoring: audit logs, flow logs, and centralized alerting',
      'Secrets management: KMS, vault architectures, and credential rotation',
      'Infrastructure as Code (IaC) security scanning and misconfiguration detection',
      'Cloud incident response basics and snapshot preservation techniques'
    ],
    practicalLabs: [
      'Audit sample cloud IAM policies for overprivileged permissions in sandbox accounts',
      'Configure private subnets, security groups, and egress filtering rules',
      'Scan container images for known vulnerabilities using open-source scanners',
      'Analyze simulated cloud audit logs to detect unauthorized configuration modifications'
    ],
    skillsGained: [
      'Cloud IAM privilege auditing',
      'VPC security architecture',
      'Container vulnerability scanning',
      'Cloud audit log investigation'
    ]
  },
  {
    id: 'secure-software-development',
    title: 'Secure Software Development (DevSecOps)',
    level: 'Advanced',
    track: 'Engineering',
    shortDesc: 'Secure SDLC practices, threat modeling, SAST/DAST automation, dependency security, and CI/CD security controls.',
    iconName: 'FileCheck',
    durationNotice: 'Contact us for details',
    prerequisites: 'Experience with software programming (Python, JavaScript/TypeScript, or Go).',
    topics: [
      'Secure Software Development Lifecycle (SSDLC) frameworks and maturity models',
      'Threat modeling techniques (STRIDE methodology) during architectural design',
      'Secure coding fundamentals: input validation, contextual output encoding, parameterization',
      'Static Application Security Testing (SAST) tools and automated code review',
      'Dynamic Application Security Testing (DAST) pipeline integration',
      'Software Composition Analysis (SCA) and Software Bill of Materials (SBOM) tracking',
      'Secrets detection in Git repositories and prevention of hardcoded credentials',
      'Secure API design, authentication tokens, and granular access enforcement',
      'Embedding automated security gates into modern CI/CD deployment pipelines'
    ],
    practicalLabs: [
      'Conduct a STRIDE threat modeling exercise for a web application architecture',
      'Run SAST scans on intentionally vulnerable code and remediate identified flaws',
      'Integrate automated security checks into a simulated continuous integration pipeline',
      'Implement secure input validation and parameterized queries in sample backend services'
    ],
    skillsGained: [
      'STRIDE threat modeling',
      'Automated SAST/DAST integration',
      'Software dependency auditing (SCA)',
      'CI/CD security gate configuration'
    ]
  }
];

export const trainingFaqs = [
  {
    q: 'How are the training sessions conducted?',
    a: 'All training programs at Nexora Security combine theoretical foundations with hands-on laboratory exercises in controlled, isolated environments. Training is delivered by experienced cybersecurity engineers and practitioners.'
  },
  {
    q: 'Are Python, Data Science, and AI/ML included in the curriculum?',
    a: 'Yes! We offer in-depth tracks in Python: Basic to Advance, Data Science & Analytics, and AI & Machine Learning (AI/ML). Each curriculum includes real-world projects, data pipelines, model building, and security applications.'
  },
  {
    q: 'Are the offensive security exercises conducted safely?',
    a: 'Absolutely. All ethical hacking and offensive security labs use intentionally vulnerable virtual applications, dedicated isolated sandbox networks, and explicitly authorized testbeds. We strictly adhere to ethical hacking standards and rules of engagement.'
  },
  {
    q: 'What are the technical prerequisites for enrolling?',
    a: 'Prerequisites vary depending on the course level. Beginner courses (like Python Basic to Advance and Cybersecurity Fundamentals) require basic computer literacy. Intermediate and Advanced courses require fundamental networking knowledge, command-line skills, or prior programming experience as outlined in each syllabus.'
  },
  {
    q: 'Do you offer customized training for corporate teams and organizations?',
    a: 'Yes. We provide tailored training programs for engineering, IT, and security teams looking to upskill in areas such as secure software development, Python automation, data analytics, SOC operations, defensive monitoring, or red teaming.'
  },
  {
    q: 'How can I enquire about enrollment, duration, and schedules?',
    a: 'You can submit an enquiry directly through our website contact form or email execute@nexorasecurity.org. Our team will provide detailed schedules, curriculum specifics, and upcoming cohort availability.'
  }
];
