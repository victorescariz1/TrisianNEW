// Copy for the pages beyond Home.
// Same rule as home.ts: a block that states a fact carries `truth`; framing carries [].

export const safeWorkspace = {
  title: 'Safe Workspace on Azure Virtual Desktop · Trisian',
  description: 'Safe Workspace is a managed cloud desktop service. We build it for your organization, in your own cloud, and then run it.',
  lines: ['Built for you.'],
  ink: 'Run for you',
  lede: 'Safe Workspace is a managed cloud desktop service. We build it for your organization, in your own cloud, and then run it: the virtual desktop, Microsoft 365, endpoint security, monitoring, compliance controls and support, in a single managed relationship.',
  truth: ['BP §4.1', '01 §20'],
  parts: [
    { name: 'The desktop', body: 'A Windows desktop in the cloud, built from one standard image. Desktops are non-persistent: your files and settings follow you in a managed profile, and nothing else lives on the desktop.', byPlan: '', truth: ['BP §4.6'] },
    { name: 'Microsoft 365', body: 'The license that comes with your plan. Passthrough, no markup.', byPlan: 'Business Premium on Core, E3 on Advanced, E5 on Enterprise.', truth: ['BP §5.1', 'BP §8.5'] },
    { name: 'Security', body: 'Every access verified, data encrypted at rest and in transit, and a published baseline kept free of drift.', byPlan: 'CIS-hardened images from Advanced. Dedicated host pools and Zero Trust architecture on Enterprise.', truth: ['BP §1.4', 'BP §2.4', 'BP §4.4', 'BP §5.1'] },
    { name: 'Monitoring', body: 'Automated platform monitoring, 24x7. Patching and scaling run on schedule.', byPlan: '', truth: ['BP §4.4'] },
    { name: 'Compliance controls', body: 'Controls that support the frameworks your plan covers. We own the technical foundation; your program and your auditor stay yours.', byPlan: '', truth: ['BP §5.1', 'BP §10.3'] },
    { name: 'Support', body: 'One point of contact, one owner for every issue, a service desk from Level 1 to Level 3.', byPlan: 'A named Technical Account Manager from Trisian on Enterprise.', truth: ['BP §3.1', 'BP §3.3', 'BP §5.1'] },
  ],
  built: {
    lines: ['We build it'],
    ink: 'before we run it',
    truth: ['BP §6.4', 'BP §6.2', 'BP §3.2', 'BP §4.2', '01 §20'],
    steps: [
      { name: 'Assess', body: 'We look at where you stand on security, performance and compliance, and recommend the plan and the gaps to close.', truth: ['BP §6.4'] },
      { name: 'Build', body: 'We build your workspace on the curated foundation and shape it to you: your applications, your desktops, our security recommendations, the rules you answer to. Building is a project: scoped, quoted in writing, and finished.', truth: ['BP §6.2', '01 §20'] },
      { name: 'Run', body: 'From then on it is Safe Workspace: we support what we built, including what those projects put in place, inside a scope agreed in writing. When your environment needs to change, that is a project too, quoted before it begins.', truth: ['BP §3.2', 'BP §4.2', '01 §20.9'] },
    ],
    reach: 'Projects reach as far as the workspace does: moving you onto the platform, building it and its security, closing compliance gaps, and planning for the unexpected.',
    reachTruth: ['BP §6.2'],
  },
  where: {
    truth: ['BP §3.1', 'BP §4.3', 'BP §8.4', 'BP §11.2', '01 §20.7', '01 §20c'],
    items: [
      { question: 'Where does it run?', answer: 'In your own cloud.', body: 'We don’t host anything. Your workspace is built in your own Azure tenant, on your own subscription, and delivered on Azure Virtual Desktop.', truth: ['BP §3.1', 'BP §4.3', 'BP §8.4', '01 §20.7'] },
      { question: 'We have our own datacenter.', answer: 'Then we connect it.', body: 'Your workspace runs on Azure Virtual Desktop, joined to your datacenter by a private connection: one you already have, or one we help you put in place.', truth: ['01 §20c', 'BP §4.3'] },
      { question: 'Already on Citrix?', answer: 'We know it well.', body: 'We have run Citrix desktops since 2010. Safe Workspace can run on your Citrix environment.', truth: ['BP §1.3', 'BP §4.3'] },
      { question: 'Whose tenant is it?', answer: 'Yours.', body: 'It is separate from ours, and your data is hosted in the region its regulation requires. Access is tiered, and no named Trisian user holds standing global administrator rights in your tenant.', truth: ['BP §4.3', 'BP §11.2'] },
    ],
  },
  commitments: [
    { lead: 'We own the escalation.', body: 'If it starts inside the scope and we can’t resolve it alone, we carry the escalation and the communication.' },
    { lead: 'The boundary is set in writing.', body: 'If it starts outside (a third-party application, hardware, an internet provider), you knew that at onboarding.' },
    { lead: 'Scope doesn’t move mid-contract.', body: 'Additions go through a formal change order, documented and priced before work begins.' },
  ],
  commitmentsTruth: ['BP §4.2'],
  outside: 'Outside every plan: application-level support for business software, hardware, software development and telecommunications. We run the infrastructure and operating system your applications need.',
  outsideTruth: ['BP §7.1'],
  before: {
    heading: ['Before,'],
    ink: 'and with',
    truth: ['BP §4.7'],
    rows: [
      { task: 'Operating system and application patching', before: 'Manual scheduling, testing, deployment', withIt: 'Automated on schedule, no intervention' },
      { task: 'Password resets and lockouts', before: 'Handled ticket by ticket', withIt: 'Self-service at no cost; resets that need the team use support hours' },
      { task: 'Vendor coordination', before: 'Several providers, separate contracts', withIt: 'One accountability chain for the vendors inside the managed scope' },
      { task: 'Security monitoring', before: 'Reactive, found when users complain', withIt: '24x7 automated platform monitoring' },
      { task: 'Compliance evidence', before: 'Collected by hand before each audit', withIt: 'Continuous collection with the compliance automation platform, as an add-on' },
      { task: 'Desktop standardization', before: 'Each machine different', withIt: 'One standard image, centrally managed' },
    ],
  },
};

export const plansPage = {
  title: 'Plans · Core, Advanced and Enterprise · Trisian',
  description: 'Core, Advanced and Enterprise. Each has one price per user, per month, and every plan starts at 50 users.',
  lines: ['Three plans.'],
  ink: 'One price per user',
  lede: 'Core, Advanced and Enterprise. Each builds on the one before, and each has one price per user, per month. Every plan starts at 50 users.',
  truth: ['BP §5.1'],
  invoice: {
    question: 'What’s on the invoice?',
    answer: 'Four things.',
    truth: ['BP §8.1', 'BP §8.4', 'BP §8.5'],
    // The invoice figure, on Home and on Plans, is drawn from this one block.
    title: 'Your monthly invoice',
    oursLabel: 'What you pay us for',
    items: [
      { name: 'The platform fee', body: 'Per user, per month. Everything automated at your plan.', truth: ['BP §8.1'] },
      { name: 'Support hours', body: 'For the work that needs a person.', truth: ['BP §8.1'] },
      { name: 'Projects', body: 'Quoted before they begin.', truth: ['BP §8.1'] },
      { name: 'Add-ons', body: 'If you want them.', truth: ['BP §8.1'] },
    ],
    throughLabel: 'Passthrough, no markup',
    through: [
      { name: 'Azure', body: 'Exactly what your subscription shows.', truth: ['BP §8.4'] },
      { name: 'Microsoft 365 licenses', body: 'The same way.', truth: ['BP §8.5'] },
    ],
    total: { label: 'Markup', value: 'None' },
  },
  around: {
    heading: 'Around the platform',
    truth: ['BP §6.1', 'BP §6.2', 'BP §6.3'],
    items: [
      { name: 'Add-ons', body: 'Long-term log archival, Microsoft 365 data protection and recovery, a compliance automation platform, and others by plan.', truth: ['BP §6.1'] },
      { name: 'Retainers', body: 'Incident response on any plan. After-hours coverage for Core.', truth: ['BP §6.3'] },
    ],
  },
  services: {
    heading: 'Professional services',
    lede: 'Projects that build your workspace and keep improving it. Each one starts from what you need: we define the scope, the timeline and the deliverables, and quote it separately, before work begins.',
    truth: ['BP §3.2', 'BP §6.2'],
    areas: [
      { name: 'Migrations', body: 'Moving onto the platform from any desktop environment or tenant, including acquisitions and multi-site rollouts.', truth: ['BP §6.2'] },
      { name: 'Platform', body: 'Designing and building the workspace, the Azure environment and the Microsoft 365 tenant.', truth: ['BP §6.2'] },
      { name: 'Security and identity', body: 'Building the defense layers: identity, privileged access, Zero Trust, threat detection, data loss prevention.', truth: ['BP §6.2'] },
      { name: 'Compliance', body: 'Control gap analysis, technical remediation and compliance automation.', truth: ['BP §6.2'] },
      { name: 'Continuity and infrastructure', body: 'Protecting against the unexpected: disaster recovery, backup, business continuity, network.', truth: ['BP §6.2'] },
      { name: 'Sector work', body: 'Sector-specific projects for financial services and healthcare.', truth: ['BP §6.2'] },
    ],
    note: 'These are the areas where we work, not a fixed list of products.',
  },
  price: { question: 'Where’s the price?', body: 'Each plan has one price per user, per month. We quote it in writing with your assessment.', truth: ['BP §5.1'] },
  questions: [
    { question: 'Which plan fits?', answer: 'The assessment recommends it.', body: 'It looks at where you stand on security, performance and compliance, and at what you answer to.', truth: ['BP §6.4'] },
    { question: 'What happens outside business hours?', answer: 'It depends on the plan.', body: 'Standard support runs Monday through Friday, 9:00 AM to 5:00 PM, your local time. On Advanced and Enterprise, critical and high-impact incidents are covered 24/7. Platform monitoring is automated and runs 24x7 on every plan. Coverage is confirmed in your proposal.', truth: ['BP §5.1', 'BP §4.4'] },
    { question: 'Why does Core stop at 300 users?', answer: 'Microsoft’s limit, not ours.', body: 'Microsoft 365 Business Premium stops at 300 seats. Past that, you move to Advanced.', truth: ['BP §5.1'] },
  ],
};

export const whoPage = {
  title: 'Who it’s for · Regulated and growing organizations · Trisian',
  description: 'Safe Workspace is built for organizations that have to defend their decisions, with 50 people or more.',
  truth: ['BP §1.4', 'BP §5.1'],
  isThisYou: [
    'You hold information that has to be protected: a client’s, a patient’s, an investor’s.',
    'Someone asks you to account for it, or soon will.',
    'Your people work from wherever they are, on whatever they have.',
    'You’d rather have one accountable partner than six vendors.',
    'You want a cost you can predict and a scope you can read.',
    'You have 50 people or more.',
  ],
  isThisYouTruth: ['BP §2.1', 'BP §5.1'],
  seats: {
    heading: 'Four seats at one table',
    truth: ['BP §4.1', 'BP §4.2', 'BP §4.3', 'BP §4.7'],
    items: [
      { seat: 'If you own the business', line: 'One service instead of six vendors, and one price per user.', truth: ['BP §4.1', 'BP §5.1'] },
      { seat: 'If you run operations', line: 'Every issue has one owner, and the scope is in writing.', truth: ['BP §3.1', 'BP §4.2'] },
      { seat: 'If you lead technology', line: 'Azure Virtual Desktop in your own tenant, a published baseline, and a clear account of who can reach what.', truth: ['BP §4.3', 'BP §4.4', '01 §20c'] },
      { seat: 'If you run IT', line: 'Nobody files a ticket for a patch, and vendor coordination stops being your job.', truth: ['BP §4.7', 'BP §4.2'] },
    ],
  },
};

export const doorPages = [
  {
    id: 'financial-services', name: 'Financial services', light: 'noon',
    lines: ['For firms that answer to a regulator,'], ink: 'and to clients who read the fine print',
    protect: 'You hold other people’s money and the records that go with it. The questions come from two directions: the regulator’s examiners, and the due-diligence teams of the clients you want to keep.',
    facts: [
      { body: 'A published security baseline for your plan, applied and kept free of drift.', truth: ['BP §4.4'] },
      { body: 'A scope agreed in writing, so you can say who is answerable for what.', truth: ['BP §4.2'] },
      { body: 'Your tenant stays yours. Access to it is tiered, and no named Trisian user holds standing global administrator rights.', truth: ['BP §4.3', 'BP §11.2'] },
    ],
    start: 'Organizations with a framework to answer to are on Advanced or Enterprise. The assessment recommends the plan.',
    truth: ['BP §5.1', 'BP §6.4'],
  },
  {
    id: 'healthcare', name: 'Healthcare', light: 'morning',
    lines: ['Patient information stays in the workspace,'], ink: 'not on the device',
    protect: 'You hold patient information, and you are asked to account for it by auditors and by the health systems and payers you work with.',
    facts: [
      { body: 'The work and the data stay in the managed cloud, not on the device in someone’s hands.', truth: ['BP §2.4'] },
      { body: 'Desktops are non-persistent: nothing lives on the desktop between sessions.', truth: ['BP §4.6'] },
      { body: 'Controls that support HIPAA on Advanced, and HITRUST on Enterprise. Your compliance program and your auditor stay yours.', truth: ['BP §5.1', 'BP §10.3'] },
    ],
    start: 'Organizations with a framework to answer to are on Advanced or Enterprise. The assessment recommends the plan.',
    truth: ['BP §5.1', 'BP §6.4'],
  },
  {
    id: 'legal', name: 'Legal', light: 'gold',
    lines: ['Privileged work, from any device,'], ink: 'with nothing left on it',
    protect: 'You hold privileged client matter. The questions come from your clients’ general counsel, and from your insurer.',
    facts: [
      { body: 'Privileged work can be opened from any device, and nothing is left on it.', truth: ['BP §2.4', 'BP §4.6'] },
      { body: 'Every access is verified.', truth: ['BP §1.4'] },
      { body: 'One accountable partner: one point of contact, one owner for every issue.', truth: ['BP §3.1'] },
    ],
    start: 'The assessment recommends the plan, and the gaps to close.',
    truth: ['BP §6.4'],
  },
  {
    id: 'growing-businesses', name: 'Growing businesses', light: 'dusk',
    lines: ['Growth stops waiting for IT'], ink: 'to catch up',
    protect: 'The proposal is bigger than the last five combined. Somewhere in it: “Describe your infrastructure’s ability to scale.” You are not regulated, but the clients you want are, and they pass their questions down to the firms they hire.',
    facts: [
      { body: 'Safe Workspace runs from 50 users. Core runs to 300; past that, you move to Advanced.', truth: ['BP §5.1'] },
      { body: 'Capacity follows demand, as your people sign in and out.', truth: ['BP §4.6'] },
      { body: 'The approach is the same on every plan: one standard image, one published baseline, kept free of drift.', truth: ['BP §4.4'] },
    ],
    start: 'Most growing businesses start on Core and move to Advanced when a client asks for a framework. The assessment recommends the plan.',
    truth: ['BP §5.1', 'BP §6.4'],
  },
];

export const trustPage = {
  title: 'Trust · ISO/IEC 27001:2022 certified · Trisian',
  description: 'What Trisian holds, what its controls support, who is responsible for what, and where to check it.',
  statement: 'Not protection.',
  ink: 'Proof.',
  lede: 'We run a workspace that is secure, reliable and provable, on terms you can read in advance. This page is the provable part.',
  truth: ['BP §1.4'],
  questions: [
    { question: 'What certification do you hold?', answer: 'ISO/IEC 27001:2022.', body: 'Certified by an accredited certification body. The internal audit and the certification audit both closed with zero non-conformities. The scope names Safe Workspace.', truth: ['BP §10.1'] },
    { question: 'What do you support, as opposed to hold?', answer: 'Six frameworks, by plan.', body: 'Holding a certification and supporting yours are different statements. We hold one. Our controls support your obligations under six.', truth: ['BP §10.2', 'BP §5.1'] },
    { question: 'Who is responsible for what?', answer: 'The technical foundation is ours. The program is yours.', body: 'We set up and configure the platform, remediate findings and keep the controls in place. Continuous evidence collection is available on every plan. Your policies, your training and your auditor stay with you.', truth: ['BP §10.3'] },
    { question: 'Whose tenant is it, and who can reach it?', answer: 'Yours.', body: 'Your tenant belongs to you and is separate from ours. Access is tiered, and no named Trisian user holds standing global administrator rights in it.', truth: ['BP §4.3', 'BP §11.2'] },
    { question: 'Do you work the way you ask us to?', answer: 'Yes.', body: 'Trisian has no office and no datacenter of its own. The company runs on the same managed cloud model it sells.', truth: ['BP §3.1'] },
  ],
  closing: 'Nothing is claimed before the document that proves it is issued.',
  closingTruth: ['BP §11.3'],
};

export const companyPage = {
  title: 'Company · Founded in 1998 · Trisian',
  description: 'Founded in 1998. Cloud desktops since 2010. One brand, one product: Safe Workspace.',
  lines: ['Answering the same', 'questions'],
  ink: 'since 1998',
  truth: ['BP §1.3'],
  mission: 'Run a secure, reliable and provable workspace for our clients, on terms they can read in advance, so their people can focus on the work that moves the business.',
  missionTruth: ['BP §1.4'],
  pillars: [
    { name: 'Security', line: 'Every access is verified, data is protected, and each environment is kept to a published baseline.', truth: ['BP §1.4'] },
    { name: 'Performance', line: 'The workspace runs well every day and grows with you.', truth: ['BP §1.4'] },
    { name: 'Compliance', line: 'What can be proven about the first two.', truth: ['BP §1.4'] },
  ],
  people: 'We have no office and no datacenter of our own. Everyone at Trisian works inside the same managed cloud model we build for our clients.',
  peopleTruth: ['BP §3.1'],
  oneBrand: 'Trisian is one brand with one product. Everything we offer relates to Safe Workspace.',
  oneBrandTruth: ['BP §1.2'],
};

export const startPage = {
  title: 'Request your assessment · Trisian',
  description: 'Eight questions show where your workspace stands on security, performance and compliance. A conversation takes it from there.',
  lines: ['Ask us the'],
  ink: 'hard question',
  after: 'first.',
  lede: 'Start with eight questions. They are the ones every auditor, insurer and client ends up asking. See how many you can answer today.',
  truth: ['BP §6.4'],
  paths: [
    { id: 'assessment', name: 'Take the assessment', body: 'Eight questions, a few minutes. You get the result on the spot.', action: 'Start the eight questions', truth: ['BP §6.4'] },
    { id: 'talk', name: 'Go straight to a conversation', body: 'Prefer to talk? Choose a time. We’ll bring the questions.', bodyEmail: 'Prefer to talk? Email us, and we’ll set a time. We’ll bring the questions.', action: 'Choose a time', actionEmail: 'Email us', truth: ['BP §6.4'] },
  ],
  options: ['Yes, and I can show it', 'Probably', 'Not yet'],
  questions: [
    { pillar: 'Security', q: 'Do you know every system and data set your people use?' },
    { pillar: 'Security', q: 'Do you know where your data lives, and in whose name?' },
    { pillar: 'Security', q: 'Can you list who can reach it today?' },
    { pillar: 'Performance', q: 'Can you name every supplier involved in running it?' },
    { pillar: 'Performance', q: 'When something changes, do you find out, and can you say when?' },
    { pillar: 'Performance', q: 'Has your recovery been tested, not just written down?' },
    { pillar: 'Compliance', q: 'Is one named party responsible when something breaks?' },
    { pillar: 'Compliance', q: 'If someone asked today, could you show them?' },
  ],
  result: {
    heading: 'Where you stand',
    close: 'Every “probably” is a question someone else will ask you first. Safe Workspace is built so the answer is already written.',
    action: 'Review it with us',
  },
  next: [
    { name: 'Your assessment', body: 'Where you stand today.', truth: ['BP §6.4'] },
    { name: 'Your conversation', body: 'What you answer to, and the plan that fits.', truth: ['BP §6.4'] },
    { name: 'Your proposal', body: 'A strategic assessment maps your environment in depth, names the gaps to close and comes back as a proposal you can defend.', truth: ['BP §6.4'] },
    { name: 'Your onboarding', body: 'The scope goes in writing, and we build.', truth: ['BP §4.2', 'BP §6.2'] },
  ],
  minimum: 'Safe Workspace starts at 50 users. Fewer than that? Email us anyway, and we’ll point you somewhere useful.',
  minimumTruth: ['BP §5.1'],
};
