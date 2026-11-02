// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Jefferson Nguessi',
  fullName: 'NGUESSI NJANKOU JEFFERSON GORBATCHEV',
  email: 'nguessijefferson@gmail.com',
  phone: '+237 682 342 249',
  whatsapp: 'https://wa.me/237682342249',
  github: 'https://github.com/qwerty0306',
  cv: '/Jefferson_Nguessi_CV.pdf',
}

export const content = {
  en: {
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', credentials: 'Credentials', contact: 'Contact' },
    hero: {
      role: 'Network Administrator & Security',
      line: 'I design networks that stay up, stay segmented and stay secure. Switching, routing, FortiGate SD-WAN and Windows Server, built and tested end to end.',
      cta1: 'Download CV',
      cta2: 'Get in touch',
      place: 'Douala, Cameroon',
      hint: 'Select a device to see what I configure on it.',
    },
    topo: {
      isp: { label: 'Internet', sub: 'Dual ISP', text: 'Multi-ISP connectivity with SD-WAN policies and tested failover, so a dead link never means a dead site.' },
      fw: { label: 'FortiGate', sub: 'Firewall + VPN', text: 'Firewall policies, IPSec and SSL VPN, SD-WAN rules, network segmentation and access control.' },
      core: { label: 'Core switch', sub: 'Layer 3', text: 'Inter-VLAN routing, OSPF, STP and EtherChannel. Redundant paths verified before they are needed.' },
      srv: { label: 'Windows Server', sub: 'AD · DNS · DHCP', text: 'Active Directory Domain Services, DNS and DHCP roles, users, groups and Group Policy Objects.' },
      v10: { label: 'Access switch', sub: 'VLAN 10', text: 'VLAN segmentation per department, access control lists between segments, DHCP scopes per VLAN.' },
      v20: { label: 'Access switch', sub: 'VLAN 20', text: 'Port-level configuration and troubleshooting with Cisco IOS, plus performance monitoring.' },
      v30: { label: 'Access switch', sub: 'VLAN 30', text: 'Traffic analysis with Wireshark and scans with Nmap to find what should not be reachable.' },
    },
    about: {
      title: 'Secure, reliable, scalable.',
      body: [
        "I'm a recent graduate in Network Administration and Security with a Professional Bachelor's degree and an HND in Network and Security.",
        "Two internships in the Network and Telecommunications Department of a major utility company taught me what production networks demand: clear documentation, careful change, and fast troubleshooting.",
        'I want to keep designing infrastructures that are secure from the first line of configuration, and keep growing in cybersecurity.',
      ],
      facts: [
        ['Degrees', "Professional Bachelor's (2026) · HND (2025)"],
        ['Internships', 'Two, in network & telecom'],
        ['Certified', 'ISC² CC · Fortinet NSE 1–3'],
        ['Languages', 'English and French, professional'],
      ],
    },
    experience: {
      title: 'Experience',
      org: 'DISI / DASI · Network & Telecommunications Department, major utility company',
      jobs: [
        {
          role: 'Network & Telecommunications Intern',
          when: 'April – July 2026',
          points: [
            'Took part in enterprise network administration.',
            'Assisted with network security implementation.',
            'Worked on routing and switching infrastructure.',
            'Wrote network documentation.',
            'Assisted with system monitoring.',
            'Helped troubleshoot connectivity issues.',
          ],
        },
        {
          role: 'Network & Telecommunications Intern',
          when: 'July – August 2024',
          points: [
            'Designed Layer 2 and Layer 3 enterprise network topologies.',
            'Configured Cisco switches and routers.',
            'Implemented VLAN segmentation and inter-VLAN routing.',
            'Configured DHCP services.',
            'Troubleshot with Cisco IOS and monitored network performance.',
            'Took part in network maintenance operations.',
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      intro: 'Each one was designed, built in a lab and tested until it behaved under failure.',
      items: [
        {
          name: 'Secure SD-WAN Architecture',
          tags: ['FortiGate', 'IPSec VPN', 'SD-WAN', 'GNS3'],
          points: [
            'Designed an SD-WAN infrastructure on FortiGate with HQ and branch firewalls.',
            'Built IPSec VPN tunnels and SD-WAN policies across multiple ISPs.',
            'Applied firewall security policies.',
          ],
          result: 'Tested failover and redundancy. The encrypted tunnel works end to end.',
        },
        {
          name: 'Enterprise Network Design',
          tags: ['Cisco', 'VLAN', 'OSPF', 'ACL'],
          points: [
            'Designed a complete enterprise network with Cisco technologies.',
            'Implemented VLAN segmentation, OSPF routing and DHCP.',
            'Applied ACL security between segments.',
          ],
          result: 'Verified redundancy and connectivity across the whole topology.',
        },
        {
          name: 'Active Directory Infrastructure',
          tags: ['Windows Server', 'AD DS', 'DNS', 'GPO'],
          points: [
            'Installed Windows Server and configured Active Directory Domain Services.',
            'Implemented DNS and DHCP.',
            'Managed users, groups and Group Policy Objects.',
          ],
          result: 'A working domain with centralised identity and policy.',
        },
      ],
      more: 'Also built',
      side: [
        { name: 'MindaJ', text: 'Flutter and Node.js app to share mobile internet data between MTN and Orange SIM cards in Cameroon using USSD codes.' },
        { name: 'Local file server', text: 'Flask file server for Windows that serves files across a LAN.' },
      ],
    },
    skills: {
      title: 'Skills',
      groups: [
        { name: 'Networking', items: ['TCP/IP', 'IPv4 & IPv6', 'Subnetting', 'VLAN', 'Inter-VLAN Routing', 'STP', 'EtherChannel', 'OSPF', 'DHCP', 'DNS', 'NAT', 'ACL', 'VPN', 'MPLS fundamentals', 'SD-WAN fundamentals'] },
        { name: 'Network security', items: ['Firewall policies', 'FortiGate fundamentals', 'IPSec VPN', 'SSL VPN', 'Network segmentation', 'Access control', 'Security monitoring', 'Incident response', 'Vulnerability assessment', 'Wireshark analysis'] },
        { name: 'Systems', items: ['Windows Server', 'Active Directory', 'DNS Server', 'DHCP Server', 'Group Policy', 'File Server', 'Linux administration', 'VMware Workstation'] },
        { name: 'Tools', items: ['Cisco Packet Tracer', 'GNS3', 'Wireshark', 'Nmap', 'Kali Linux', 'Visual Studio Code', 'Microsoft Office'] },
      ],
      soft: 'Analytical thinking · Team collaboration · Problem solving · Communication · Technical documentation · Adaptability · Time management · Continuous learning',
    },
    credentials: {
      title: 'Credentials',
      certs: [
        { name: 'Certified in Cybersecurity (CC)', by: 'ISC²', detail: 'Security principles, incident response, business continuity and disaster recovery, access control concepts, network security, security operations.' },
        { name: 'Fortinet NSE 1', by: 'Fortinet', detail: 'Information Security Threat Landscape 3.0' },
        { name: 'Fortinet NSE 2', by: 'Fortinet', detail: 'Getting Started with Cybersecurity 3.0' },
        { name: 'Fortinet NSE 3', by: 'Fortinet', detail: 'FortiGate 7.6 Operator (self-paced)' },
      ],
      eduTitle: 'Education',
      edu: [
        { name: "Professional Bachelor's, Network Administrator and Security", where: 'Institut Universitaire du Golfe de Guinée (IUG)', when: '2025 – 2026' },
        { name: 'Higher National Diploma (HND), Network and Security', where: 'Institut Universitaire du Golfe de Guinée (IUG)', when: '2023 – 2025' },
        { name: 'GCE Advanced Level', where: 'GBHS Nkongsamba', when: '2022 – 2023' },
        { name: 'GCE Ordinary Level', where: 'GBHS Ekangté', when: '2020 – 2021' },
      ],
    },
    contact: {
      title: "Let's talk about your network.",
      body: 'Open to network administration, security and infrastructure roles, internships and freelance work.',
      email: 'Email',
      call: 'Call',
      wa: 'WhatsApp',
      copy: 'Copy email',
      copied: 'Copied',
      github: 'GitHub',
    },
    footer: 'Built with React. Hosted on GitHub Pages.',
  },

  fr: {
    nav: { about: 'À propos', experience: 'Expérience', projects: 'Projets', skills: 'Compétences', credentials: 'Parcours', contact: 'Contact' },
    hero: {
      role: 'Administrateur Réseaux & Sécurité',
      line: "Je conçois des réseaux qui restent disponibles, segmentés et sécurisés. Commutation, routage, SD-WAN FortiGate et Windows Server, construits et testés de bout en bout.",
      cta1: 'Télécharger le CV',
      cta2: 'Me contacter',
      place: 'Douala, Cameroun',
      hint: 'Sélectionnez un équipement pour voir ce que je configure dessus.',
    },
    topo: {
      isp: { label: 'Internet', sub: 'Double FAI', text: "Connectivité multi-FAI avec politiques SD-WAN et bascule testée : un lien coupé ne veut pas dire un site coupé." },
      fw: { label: 'FortiGate', sub: 'Pare-feu + VPN', text: "Politiques de pare-feu, VPN IPSec et SSL, règles SD-WAN, segmentation réseau et contrôle d'accès." },
      core: { label: 'Cœur de réseau', sub: 'Couche 3', text: 'Routage inter-VLAN, OSPF, STP et EtherChannel. Les chemins redondants sont vérifiés avant d’en avoir besoin.' },
      srv: { label: 'Windows Server', sub: 'AD · DNS · DHCP', text: "Active Directory Domain Services, rôles DNS et DHCP, utilisateurs, groupes et stratégies de groupe (GPO)." },
      v10: { label: 'Switch d’accès', sub: 'VLAN 10', text: 'Segmentation par VLAN et par service, listes de contrôle d’accès entre segments, étendues DHCP par VLAN.' },
      v20: { label: 'Switch d’accès', sub: 'VLAN 20', text: 'Configuration des ports et dépannage avec Cisco IOS, plus supervision des performances.' },
      v30: { label: 'Switch d’accès', sub: 'VLAN 30', text: "Analyse du trafic avec Wireshark et scans Nmap pour trouver ce qui ne devrait pas être joignable." },
    },
    about: {
      title: 'Sécurisé, fiable, évolutif.',
      body: [
        "Jeune diplômé en Administration Réseaux et Sécurité, titulaire d'une Licence Professionnelle et d'un HND en Network and Security.",
        "Deux stages au sein du département Réseaux et Télécommunications d'une grande entreprise de services publics m'ont appris ce qu'exigent les réseaux en production : une documentation claire, des changements maîtrisés et un dépannage rapide.",
        "Je veux continuer à concevoir des infrastructures sécurisées dès la première ligne de configuration et progresser en cybersécurité.",
      ],
      facts: [
        ['Diplômes', 'Licence Pro (2026) · HND (2025)'],
        ['Stages', 'Deux, en réseaux & télécoms'],
        ['Certifié', 'ISC² CC · Fortinet NSE 1–3'],
        ['Langues', 'Anglais et français, professionnel'],
      ],
    },
    experience: {
      title: 'Expérience',
      org: "DISI / DASI · Département Réseaux & Télécommunications, grande entreprise de services publics",
      jobs: [
        {
          role: 'Stagiaire Réseaux & Télécommunications',
          when: 'Avril – juillet 2026',
          points: [
            "Participation à l'administration du réseau d'entreprise.",
            "Assistance à la mise en place de la sécurité réseau.",
            "Travail sur l'infrastructure de routage et de commutation.",
            'Rédaction de la documentation réseau.',
            'Assistance à la supervision des systèmes.',
            'Contribution au dépannage des problèmes de connectivité.',
          ],
        },
        {
          role: 'Stagiaire Réseaux & Télécommunications',
          when: 'Juillet – août 2024',
          points: [
            "Conception de topologies réseau d'entreprise de couches 2 et 3.",
            'Configuration de switchs et routeurs Cisco.',
            'Mise en œuvre de la segmentation VLAN et du routage inter-VLAN.',
            'Configuration des services DHCP.',
            'Dépannage avec Cisco IOS et suivi des performances réseau.',
            'Participation aux opérations de maintenance du réseau.',
          ],
        },
      ],
    },
    projects: {
      title: 'Projets',
      intro: "Chacun a été conçu, monté en laboratoire et testé jusqu'à ce qu'il tienne en cas de panne.",
      items: [
        {
          name: 'Architecture SD-WAN sécurisée',
          tags: ['FortiGate', 'VPN IPSec', 'SD-WAN', 'GNS3'],
          points: [
            "Conception d'une infrastructure SD-WAN FortiGate avec pare-feu siège et agence.",
            'Tunnels VPN IPSec et politiques SD-WAN sur plusieurs FAI.',
            'Application de politiques de sécurité sur le pare-feu.',
          ],
          result: 'Bascule et redondance testées. Le tunnel chiffré fonctionne de bout en bout.',
        },
        {
          name: "Conception d'un réseau d'entreprise",
          tags: ['Cisco', 'VLAN', 'OSPF', 'ACL'],
          points: [
            "Conception d'un réseau d'entreprise complet avec les technologies Cisco.",
            'Segmentation VLAN, routage OSPF et DHCP.',
            'ACL de sécurité entre les segments.',
          ],
          result: "Redondance et connectivité vérifiées sur toute la topologie.",
        },
        {
          name: 'Infrastructure Active Directory',
          tags: ['Windows Server', 'AD DS', 'DNS', 'GPO'],
          points: [
            'Installation de Windows Server et configuration des services de domaine Active Directory.',
            'Mise en place de DNS et DHCP.',
            'Gestion des utilisateurs, groupes et stratégies de groupe.',
          ],
          result: 'Un domaine fonctionnel avec identité et stratégies centralisées.',
        },
      ],
      more: 'Aussi réalisés',
      side: [
        { name: 'MindaJ', text: "Application Flutter et Node.js pour partager des données mobiles entre cartes SIM MTN et Orange au Cameroun via des codes USSD." },
        { name: 'Serveur de fichiers local', text: 'Serveur de fichiers Flask pour Windows, accessible sur tout le réseau local.' },
      ],
    },
    skills: {
      title: 'Compétences',
      groups: [
        { name: 'Réseaux', items: ['TCP/IP', 'IPv4 & IPv6', 'Subnetting', 'VLAN', 'Routage inter-VLAN', 'STP', 'EtherChannel', 'OSPF', 'DHCP', 'DNS', 'NAT', 'ACL', 'VPN', 'Bases MPLS', 'Bases SD-WAN'] },
        { name: 'Sécurité réseau', items: ['Politiques de pare-feu', 'Bases FortiGate', 'VPN IPSec', 'VPN SSL', 'Segmentation réseau', "Contrôle d'accès", 'Supervision de sécurité', "Réponse aux incidents", 'Évaluation des vulnérabilités', 'Analyse Wireshark'] },
        { name: 'Systèmes', items: ['Windows Server', 'Active Directory', 'Serveur DNS', 'Serveur DHCP', 'Stratégies de groupe', 'Serveur de fichiers', 'Administration Linux', 'VMware Workstation'] },
        { name: 'Outils', items: ['Cisco Packet Tracer', 'GNS3', 'Wireshark', 'Nmap', 'Kali Linux', 'Visual Studio Code', 'Microsoft Office'] },
      ],
      soft: "Esprit d'analyse · Travail d'équipe · Résolution de problèmes · Communication · Documentation technique · Adaptabilité · Gestion du temps · Apprentissage continu",
    },
    credentials: {
      title: 'Parcours',
      certs: [
        { name: 'Certified in Cybersecurity (CC)', by: 'ISC²', detail: "Principes de sécurité, réponse aux incidents, continuité d'activité et reprise après sinistre, contrôle d'accès, sécurité réseau, opérations de sécurité." },
        { name: 'Fortinet NSE 1', by: 'Fortinet', detail: 'Information Security Threat Landscape 3.0' },
        { name: 'Fortinet NSE 2', by: 'Fortinet', detail: 'Getting Started with Cybersecurity 3.0' },
        { name: 'Fortinet NSE 3', by: 'Fortinet', detail: 'FortiGate 7.6 Operator (en autonomie)' },
      ],
      eduTitle: 'Formation',
      edu: [
        { name: 'Licence Professionnelle, Administrateur Réseaux et Sécurité', where: 'Institut Universitaire du Golfe de Guinée (IUG)', when: '2025 – 2026' },
        { name: 'Higher National Diploma (HND), Network and Security', where: 'Institut Universitaire du Golfe de Guinée (IUG)', when: '2023 – 2025' },
        { name: 'GCE Advanced Level', where: 'GBHS Nkongsamba', when: '2022 – 2023' },
        { name: 'GCE Ordinary Level', where: 'GBHS Ekangté', when: '2020 – 2021' },
      ],
    },
    contact: {
      title: 'Parlons de votre réseau.',
      body: "Disponible pour des postes en administration réseau, sécurité et infrastructure, des stages et des missions freelance.",
      email: 'E-mail',
      call: 'Appeler',
      wa: 'WhatsApp',
      copy: "Copier l'e-mail",
      copied: 'Copié',
      github: 'GitHub',
    },
    footer: 'Réalisé avec React. Hébergé sur GitHub Pages.',
  },
}
