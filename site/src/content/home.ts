// Home page copy. Every block that states a fact carries its source references in `truth`.
// Framing lines carry [].
// `tools/truth-check.mjs` fails the build if a block is missing the field.

export const hero = {
  eyebrow: 'Safe Workspace · a managed cloud desktop service',
  lines: ['Your workspace,', 'answered in'],
  ink: 'advance',
  lede: 'We build your organization’s workspace in your own cloud, and run it for you. One accountable partner, one price per user, one scope in writing.',
  close: 'Ready for your next client, hire or audit.',
  facts: ['ISO/IEC 27001:2022 certified', 'Built in your own cloud', 'Passthrough, no markup', 'From 50 users'],
  signin: ['Good morning.', 'Signed in.', 'Your desktop is ready.', 'Your files and settings are where you left them.'],
  truth: ['BP §4.1', 'BP §1.4', 'BP §1.3', 'BP §10.1', 'BP §4.3', 'BP §8.4', 'BP §5.1', 'BP §4.6', '01 §20'],
};

export const layers = {
  question: 'What’s behind the desktop your people sign in to?',
  heading: ['Six things,', 'working as'],
  ink: 'one',
  intro: 'Most organizations buy these from six vendors and hold the pieces together themselves. Safe Workspace is all six in a single managed relationship.',
  closing: ['One window wide. Six layers deep.', 'One name on the outcome.'],
  closingNote: 'Inside the Managed Scope.',
  truth: ['BP §4.1', 'BP §4.7', 'BP §4.2'],
  items: [
    { id: 'security', group: 'What’s protected', title: 'Security', body: 'Every access is verified. Data is encrypted at rest and in transit. And the whole environment is held to a published security baseline that is applied and kept free of drift.', detail: 'Every plan comes with Microsoft Defender endpoint protection, through its Microsoft 365 license.', truth: ['BP §1.4', 'BP §2.4', 'BP §4.4', 'BP §4.5'] },
    { id: 'monitoring', group: 'What’s protected', title: 'Monitoring', body: 'Automated platform monitoring, 24x7. Patching and scaling run on schedule.', detail: 'No one files a ticket for a patch.', truth: ['BP §4.4', 'BP §4.7'] },
    { id: 'desktop', group: 'How the day runs', title: 'The desktop', body: 'A Windows desktop in the cloud, delivered on Azure Virtual Desktop. Every desktop is built to the same standard.', detail: 'Your files and settings follow you in a managed profile.', truth: ['BP §4.3', 'BP §4.6', '01 §20c'] },
    { id: 'm365', group: 'How the day runs', title: 'Microsoft 365', body: 'Mail, files and meetings, on the license that comes with your plan: Business Premium, E3 or E5. Passthrough, no markup.', detail: 'One less agreement to manage.', truth: ['BP §5.1', 'BP §8.5'] },
    { id: 'support', group: 'How the day runs', title: 'Support', body: 'One point of contact. One owner for every issue, from the first call to the fix.', detail: 'People, not a queue.', truth: ['BP §3.1', 'BP §3.3'] },
    { id: 'compliance', group: 'What you can prove', title: 'Compliance controls', body: 'Technical controls that support the frameworks your plan covers, configured and kept in place.', detail: 'Six frameworks, by plan.', truth: ['BP §5.1', 'BP §10.3'] },
  ],
};

export const built = {
  statement: 'One foundation.',
  rest: 'Built around',
  ink: 'you',
  question: 'Is it the same for everyone?',
  intro: 'Three plans. Each one builds on the one before.',
  truth: ['01 §20', 'BP §1.5'],
  where: {
    question: 'Where does it run?',
    answer: 'In your own cloud.',
    body: 'We don’t host anything. Your workspace is built in your own Azure tenant, on your own subscription. Already have a datacenter? We connect it privately to Azure.',
    truth: ['BP §4.3', 'BP §8.4', 'BP §3.1', '01 §20.7', '01 §20c'],
  },
  notes: ['Each plan has one price per user, per month, and every plan starts at 50 users.', 'Core stops at 300 users because Microsoft 365 Business Premium does. That limit is Microsoft’s, not ours.'],
  notesTruth: ['BP §5.1', 'BP §8.2'],
};

export const scope = {
  question: 'What do we take care of?',
  heading: ['Inside the scope,'],
  ink: 'we own the outcome',
  after: 'Not just the ticket.',
  body: 'Managed Scope is everything we take operational responsibility for, across infrastructure, security, compliance and support. Inside it, every issue has an owner and a path to resolution. Outside it, the line is drawn in writing. You know in advance, not during an incident.',
  evidence: { body: 'Need the evidence for your audit? Continuous evidence collection is available on every plan.', truth: ['BP §4.7', 'BP §6.1'] },
  principle: 'We support what we build.',
  care: [
    { name: 'Building it', body: 'Your workspace, and everything our projects put in place.', truth: ['BP §4.2', 'BP §6.2'] },
    { name: 'Securing it', body: 'Access, encryption and the baseline, applied and kept free of drift.', truth: ['BP §4.4'] },
    { name: 'Keeping it current', body: 'Patching and scaling, automated and on schedule.', truth: ['BP §4.7'] },
    { name: 'Watching it', body: 'Automated platform monitoring, 24x7.', truth: ['BP §4.4'] },
    { name: 'Keeping the controls in place', body: 'The technical controls your framework asks for.', truth: ['BP §10.3'] },
    { name: 'Answering for it', body: 'One point of contact and one owner for every issue, including the vendors involved.', truth: ['BP §4.2', 'BP §4.4'] },
  ],
  closing: 'Clear from the start. Predictable from then on.',
  written: 'What we take care of is set down with you before you sign, and it changes only when you approve it.',
  truth: ['BP §4.2', '01 §20.9', '01 §20.10'],
  line: [
    { area: 'Day to day', ours: 'The workspace we built, and everything our projects put in place', yours: 'Your business applications, your devices, your internet connection', truth: ['BP §4.2', 'BP §7.1'] },
    { area: 'Compliance', ours: 'The technical controls your framework asks for, configured and kept in place', yours: 'Your program, your policies, your auditor', truth: ['BP §10.3'] },
    { area: 'The cloud', ours: 'Building it and running it', yours: 'The tenant and the subscription. They are in your name', truth: ['BP §4.3', 'BP §8.4'] },
  ],
  explorerPrompt: 'Where does it land? Try a few.',
  qualifier: 'Examples. Your own scope is set in writing at onboarding.',
};

export const tuesday = {
  heading: ['A Tuesday,', 'answered in'],
  ink: 'advance',
  intro: 'An ordinary working day, hour by hour. Every question it raises already has an answer.',
  signoff: 'Where probably stops, Trisian starts.',
  truth: ['BP §4.4', 'BP §4.6', 'BP §5.1', 'BP §3.1'],
  beats: [
    { id: 'morning', time: 'Morning', scene: 'Sign-in', ground: 'morning', hosts: 3, question: 'Is everything where I left it?', answer: 'Yes. Your files and settings follow you.', body: 'Desktops are non-persistent: nothing lives on the desktop itself.', truth: ['BP §4.6'] },
    { id: 'midmorning', time: 'Mid-morning', scene: 'Everyone arrives', ground: 'noon', hosts: 7, question: 'Will it cope?', answer: 'Capacity follows people.', body: 'The workspace grows as your people sign in.', truth: ['BP §4.4'] },
    { id: 'afternoon', time: 'Afternoon', scene: 'Someone needs help', ground: 'gold', hosts: 6, question: 'Who do they call?', answer: 'One service desk. One owner for the issue.', body: 'Inside the scope, we own the outcome, not just the ticket.', truth: ['BP §4.2', 'BP §4.4'] },
    { id: 'night', time: 'Night', scene: 'The office is dark', ground: 'night', hosts: 1, question: 'Is anyone watching?', answer: 'Platform monitoring is automated, 24x7. Patching runs on schedule.', body: 'On Advanced and Enterprise, critical and high-impact incidents are covered 24/7.', truth: ['BP §4.4', 'BP §5.1'] },
  ],
};

export const proof = {
  statement: 'Not protection.',
  ink: 'Proof.',
  intro: 'Sooner or later someone asks what you knew, and when: an auditor, a board, a client. Here is what is already answered.',
  answers: [
    { id: 'owner', question: 'Who owns what?', answer: 'It’s in writing before you sign.', body: 'Every task in your workspace has a named owner, and the scope changes only through a formal change order.', check: 'Ask us for the scope.', truth: ['BP §4.2'] },
    { id: 'baseline', question: 'What’s protected?', answer: 'A published security baseline.', body: 'Applied to your whole environment and kept free of drift, at the level your plan sets.', check: 'Ask for the baseline of your plan.', truth: ['BP §4.4'] },
    { id: 'certified', question: 'Can you prove it?', answer: 'ISO/IEC 27001:2022, certified.', body: 'By an accredited certification body, with zero non-conformities in the internal audit and in the certification audit. The scope names Safe Workspace.', check: 'The certificate details are on the Trust Center.', truth: ['BP §10.1', 'BP §10.2'] },
  ],
  truth: [],
  exhibits: [
    { id: 'passthrough', title: 'Passthrough, no markup', question: 'What does it cost?', answer: 'Azure, at exactly what your subscription shows.', body: 'Your Azure subscription sits in your own tenant, and you pay exactly the amount shown on it. Microsoft 365 licenses pass through the same way. What you pay us for is running it: one price per user, per month.', note: '', aside: 'It’s a sentence worth asking any provider to put in writing.', check: 'Open your Azure subscription and compare.', truth: ['BP §8.4', 'BP §8.5', 'BP §5.1'] },
  ],
  hold: 'ISO/IEC 27001:2022',
  support: [
    { plan: 'Advanced', frameworks: ['CIS Controls v8.1', 'NIST CSF 2.0', 'HIPAA'] },
    { plan: 'Enterprise adds', frameworks: ['SOC 2', 'ISO/IEC 27001', 'HITRUST'] },
  ],
  supportTruth: ['BP §5.1', 'BP §10.2'],
  qualifierHome: 'Our controls support your obligations under the frameworks of your plan. Certifications and attestation reports are issued only by your independent certification body, CPA firm or assessor.',
  qualifier: 'Our controls support your obligations under these frameworks. Certifications and attestation reports are issued only by your independent certification body, CPA firm or assessor.',
  qualifierTruth: ['BP §10.3', 'BP §10.4'],
};

export const who = {
  heading: ['Built for organizations', 'that have to'],
  ink: 'defend their decisions',
  sub: 'To a regulator. To an auditor. To a board. To the client you just won.',
  truth: ['BP §1.4', 'BP §2.1', 'BP §2.2'],
  doors: [
    { id: 'financial-services', name: 'Financial services', line: 'For firms that answer to a regulator, and to clients who read the fine print.', sub: 'A published baseline, a written scope, and a clear account of who can reach your tenant.', light: 'noon', truth: ['BP §4.4', 'BP §4.2', 'BP §4.3'] },
    { id: 'healthcare', name: 'Healthcare', line: 'Patient information stays in the workspace, not on the device.', sub: 'Non-persistent desktops, and controls that support HIPAA and HITRUST.', light: 'morning', truth: ['BP §2.4', 'BP §4.6', 'BP §5.1'] },
    { id: 'legal', name: 'Legal', line: 'Privileged work, from any device, with nothing left on it.', sub: 'Every access verified. One accountable partner.', light: 'gold', truth: ['BP §4.6', 'BP §1.4', 'BP §3.1'] },
    { id: 'growing-businesses', name: 'Growing businesses', line: 'Growth stops waiting for IT to catch up.', sub: 'From 50 people. Capacity that follows demand. Ready when a bigger client starts asking questions.', light: 'dusk', truth: ['BP §5.1', 'BP §4.6'] },
  ],
  open: 'Not on this list? If the description fits, so does the workspace.',
  rule: 'The rules don’t shrink with the headcount.',
};

export const since = {
  line: 'We have been answering these questions since 1998.',
  link: 'Our story',
  heading: 'of running IT.',
  ink: 'in the cloud',
  // Home shows the heading and a link. The introduction and the eras are the Company page's.
  more: 'The story',
  intro: 'Safe Workspace wasn’t designed in a quarter. Each part of it is something we learned by running desktops for clients, one era at a time.',
  truth: ['BP §1.3'],
  eras: [
    { year: '1998', name: 'ILS Inc.', what: 'We start in Florida: technical support, and PCs built to order.', taught: 'People don’t call about technology. They call because work has stopped.', part: 'Support', truth: ['BP §1.3'] },
    { year: '2010', name: 'All IT Host', what: 'We take the desktop off the desk: Citrix desktops, hosted on our own servers in a datacenter.', taught: 'Work is safer in one well-run place than on a hundred devices.', part: 'The desktop', truth: ['BP §1.3'] },
    { year: '2010–24', name: 'The Citrix years', what: 'We follow the Citrix line all the way to Citrix DaaS.', taught: 'A hundred identical desktops are easier to keep right than a hundred unique ones.', part: 'Security · Monitoring', truth: ['BP §1.3'] },
    { year: '2024', name: 'To Azure', what: 'We leave the datacenter for Microsoft Azure, and add Azure Virtual Desktop alongside Citrix.', taught: 'Capacity should follow people. And your cloud should sit in your own tenant.', part: 'Microsoft 365 · scaling', truth: ['BP §1.3'] },
    { year: '2026', name: 'Trisian', what: 'A new name, and ISO/IEC 27001:2022 certification.', taught: 'If it can’t be shown, it doesn’t count.', part: 'Compliance controls', truth: ['BP §1.3'] },
  ],
};

export const start = {
  lines: ['Ask us the'],
  ink: 'hard question',
  after: 'first.',
  sub: 'The one your auditor, your board or your biggest client would ask. We’ll answer it in writing.',
  how: 'It starts with an assessment, not a pitch. Eight questions show where your workspace stands. A conversation takes it from there.',
  signoff: 'Answered in advance.',
  truth: ['BP §6.4', 'BP §6.2', 'BP §3.2'],
};

export const projects = {
  eyebrow: 'Projects · professional services',
  heading: 'Built as a project.',
  ink: 'Always improving',
  body: 'We work close to your team. That is how we see what your workspace needs next, and how you tell us where the business is going. Every idea, yours or ours, becomes a project: planned, quoted in writing and delivered.',
  steps: [
    { name: 'Stay close', body: 'We work alongside your team and keep looking for what would serve you better.', truth: ['BP §6.2'] },
    { name: 'Propose', body: 'An idea, yours or ours, becomes a plan: scope, timeline and price.', truth: ['BP §6.2'] },
    { name: 'Approve', body: 'You see all of it, and sign before work begins.', truth: ['BP §6.2', 'BP §4.2'] },
    { name: 'Deliver', body: 'We implement it, then support it inside the Managed Scope.', truth: ['BP §6.2', 'BP §4.2'] },
  ],
  reach: 'From moving you onto the platform to closing a compliance gap.',
  link: 'See what projects cover',
  truth: ['BP §3.2', 'BP §6.2'],
};
