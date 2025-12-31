const jobs = [
    {
        title: "RRB Ministerial & Isolated Category Posts 2025",
        org: "RRB",
        posts: 311,
        qualification: "Graduation",
        salary: "₹19,900 - ₹44,900",
        location: "All India",
        deadline: "Jan 29, 2026",
        applyStart: "Dec 30, 2025",
        isNew: true,
        applyLink: "https://www.rrbapply.gov.in/",
        description: "Railway Recruitment Board invites applications for Teacher, Lab Assistant, Junior Translator (Hindi), Junior Translator (Urdu), Staff & Welfare Inspector posts across various railway zones. Age: 18-36 years."
    },
    {
        title: "UPSSSC Lekhpal Recruitment 2024",
        org: "PSU",
        posts: 7994,
        qualification: "Graduation",
        salary: "₹25,500 - ₹81,100",
        location: "Uttar Pradesh",
        deadline: "Jan 28, 2026",
        applyStart: "Dec 29, 2025",
        isNew: true,
        applyLink: "https://upsssc.gov.in/",
        description: "UP Subordinate Services Selection Commission recruiting Revenue Inspector (Lekhpal) for rural development department. Graduation required with knowledge of Hindi & basic computer skills. Age: 18-40 years."
    },
    {
        title: "SSC GD Constable Recruitment 2026",
        org: "SSC",
        posts: 25487,
        qualification: "10th",
        salary: "₹21,700 - ₹69,100",
        location: "All India",
        deadline: "Dec 31, 2025",
        applyStart: "Active",
        isNew: true,
        applyLink: "https://ssc.gov.in/",
        description: "Staff Selection Commission recruiting General Duty Constables in BSF, CRPF, CISF, SSB, ITBP, Assam Rifles & SSF. 10th pass with Physical standards required. Age: 18-23 years. Height: Male-170cm, Female-157cm."
    },
    {
        title: "RRB Group D Level-1 Posts 2026",
        org: "RRB",
        posts: 22000,
        qualification: "10th",
        salary: "₹18,000 - ₹56,900",
        location: "Railway Zones",
        deadline: "Feb 2026",
        applyStart: "Coming Soon",
        isNew: true,
        applyLink: "https://www.rrbapply.gov.in/",
        description: "Railway Level-1 posts including Track Maintainer Grade-IV, Helper, Assistant Pointsman, Level Crossing Gate Man. 10th with ITI/NAC preferred. Physical standards apply. Age: 18-33 years."
    },
    {
        title: "UPSC NDA & NA Examination 1/2026",
        org: "UPSC",
        posts: 394,
        qualification: "12th",
        salary: "₹56,100 - ₹1,77,500",
        location: "All India",
        deadline: "Dec 30, 2025",
        applyStart: "Active",
        isNew: true,
        applyLink: "https://upsconline.nic.in/",
        description: "National Defence Academy & Naval Academy 157th Course for Army (208), Navy (42), Air Force (120) & Naval Academy (24). Unmarried male/female candidates. Age: 16.5-19.5 years. Written exam on Apr 13, 2026."
    },
    {
        title: "UPSC CDS Examination (I) 2026",
        org: "UPSC",
        posts: 451,
        qualification: "Graduation",
        salary: "₹56,100 - ₹1,77,500",
        location: "All India",
        deadline: "Dec 30, 2025",
        applyStart: "Active",
        isNew: true,
        applyLink: "https://upsconline.nic.in/",
        description: "Combined Defence Services for IMA (100), INA (26), AFA (32), OTA Men (258), OTA Women (35). Graduates for IMA/INA/AFA, any degree for OTA. Age varies: 19-24 years. Written exam on Apr 13, 2026."
    },
    {
        title: "IAF AFCAT 01/2026 Entry",
        org: "INDIAN AIR FORCE",
        posts: 340,
        qualification: "Graduation",
        salary: "₹56,100 - ₹1,77,500",
        location: "All India",
        deadline: "Jan 2026",
        applyStart: "Closed",
        isNew: false,
        applyLink: "https://careerindianairforce.cdac.in/",
        description: "Air Force Common Admission Test for Flying Branch (men/women), Ground Duty (Technical & Non-Technical). Engineering/Science/Commerce graduates. Age: 20-24 years for Flying, 20-26 for Ground Duty."
    },
    {
        title: "Agniveer Vayu Intake 01/2026",
        org: "INDIAN AIR FORCE",
        posts: 3500,
        qualification: "12th",
        salary: "₹30,000 - ₹40,000",
        location: "All India",
        deadline: "Jan 27, 2026",
        applyStart: "Jan 7, 2026",
        isNew: true,
        applyLink: "https://careerindianairforce.cdac.in/",
        description: "4-year Agnipath scheme enrollment in IAF for various technical & non-technical trades. 12th with Physics & Maths. Age: 17.5-21 years. Monthly package ₹30,000-40,000 with benefits. 25% absorption opportunity."
    },
    {
        title: "Indian Navy Sailor SSR & MR Recruitment",
        org: "INDIAN NAVY",
        posts: 3000,
        qualification: "12th",
        salary: "₹22,000 - ₹69,100",
        location: "Naval Bases",
        deadline: "Jan 2026",
        applyStart: "Upcoming",
        isNew: false,
        applyLink: "https://www.joinindiannavy.gov.in/",
        description: "Senior Secondary Recruit (SSR) with 12th PCM/PCB & Matric Recruit (MR) with 10th. Service period 15 years. Physical: Height Male-157cm, Female-152cm, Chest 77-82cm. Age: 17-21 years."
    },
    {
        title: "Indian Army Agniveer General Duty",
        org: "INDIAN ARMY",
        posts: 45000,
        qualification: "10th",
        salary: "₹30,000 - ₹40,000",
        location: "All India",
        deadline: "Ongoing",
        applyStart: "Rally Basis",
        isNew: false,
        applyLink: "https://www.joinindianarmy.nic.in/",
        description: "4-year Agnipath scheme for General Duty soldiers. 10th pass with 45% & 33% in each subject. Physical: Height-168cm(R), 170cm(NR), Running-1.6km in 5:30min. Age: 17.5-21 years. Chest: 77-82cm expansion."
    },
    {
        title: "Indian Army TES 55 Entry 2026",
        org: "INDIAN ARMY",
        posts: 90,
        qualification: "12th",
        salary: "₹56,100 - ₹1,77,500",
        location: "All India",
        deadline: "Closed",
        applyStart: "Completed",
        isNew: false,
        applyLink: "https://www.joinindianarmy.nic.in/",
        description: "Technical Entry Scheme for direct entry as Lieutenant (Engineers). 12th PCM with 70% aggregate & 50% each. B.Tech training at Army Cadet College. Permanent commission. Age: 16.5-19.5 years. Unmarried only."
    },
    {
        title: "RRB NTPC Graduate Level Posts (CBT-2 Stage)",
        org: "RRB",
        posts: 5810,
        qualification: "Graduation",
        salary: "₹35,400 - ₹1,09,200",
        location: "Railway Zones",
        deadline: "Exam Phase",
        applyStart: "Closed",
        isNew: false,
        applyLink: "https://www.rrbapply.gov.in/",
        description: "Non-Technical Popular Categories: Station Master, Goods Guard, Commercial cum Ticket Clerk, Junior Account Assistant. Currently in CBT-2 stage. Age relaxation as per rules. Computer knowledge essential."
    },
    {
        title: "SSC Combined Graduate Level Exam 2025",
        org: "SSC",
        posts: 17000,
        qualification: "Graduation",
        salary: "₹25,500 - ₹81,100",
        location: "All India",
        deadline: "2025",
        applyStart: "Upcoming",
        isNew: false,
        applyLink: "https://ssc.gov.in/",
        description: "CGL for Inspector (Central Excise/Income Tax), Auditor, Assistant Section Officer, Assistant Enforcement Officer in various ministries. Graduation required. 4-tier selection: CBT-1, CBT-2, Descriptive, CPT/DEST. Age: 18-32 years."
    },
    {
        title: "SSC Combined Higher Secondary Level 2025",
        org: "SSC",
        posts: 9500,
        qualification: "12th",
        salary: "₹19,900 - ₹63,200",
        location: "All India",
        deadline: "2025",
        applyStart: "Upcoming",
        isNew: false,
        applyLink: "https://ssc.gov.in/",
        description: "CHSL for Lower Division Clerk, Junior Secretariat Assistant, Postal Assistant, Data Entry Operator. 12th from recognized board. 3-tier exam: CBT, Descriptive, Skill Test. Age: 18-27 years. Computer knowledge required."
    },
    {
        title: "DRDO Scientist 'B' (GATE 2025 Based)",
        org: "DRDO",
        posts: 351,
        qualification: "Post Graduation",
        salary: "₹56,100 - ₹1,77,500",
        location: "DRDO Labs",
        deadline: "Aug 8, 2025",
        applyStart: "Active",
        isNew: false,
        applyLink: "https://www.drdo.gov.in/drdo/",
        description: "Defence Research & Development Organisation recruiting Scientists in Aeronautical, Computer Science, Electronics, Mechanical, Physics, Chemistry, Life Sciences. M.Tech/M.Sc with valid GATE-2025 score. Age: 28 years."
    },
    {
        title: "BARC OCES/DGFS Scientific Officer 2026",
        org: "BARC",
        posts: 200,
        qualification: "Post Graduation",
        salary: "₹56,100 - ₹1,77,500",
        location: "Mumbai, Kalpakkam",
        deadline: "Mar 23, 2025",
        applyStart: "Active",
        isNew: true,
        applyLink: "https://www.barc.gov.in/",
        description: "Bhabha Atomic Research Centre Scientific Officer in Engineering (Mechanical, Chemical, Electrical, Electronics, Computer), Physics, Chemistry, Life Sciences streams. M.Sc/M.Tech/ME required. Written test + interview. Age: 26 years."
    },
    {
        title: "ISRO Scientist/Engineer 'SC' Recruitment",
        org: "ISRO",
        posts: 182,
        qualification: "Post Graduation",
        salary: "₹56,100 - ₹1,77,500",
        location: "ISRO Centers",
        deadline: "Periodic",
        applyStart: "Check Website",
        isNew: false,
        applyLink: "https://www.isro.gov.in/Careers.html",
        description: "Indian Space Research Organisation Scientist/Engineer in Electronics, Computer Science, Mechanical, Electrical disciplines for Satellite Development, Launch Vehicles, Space Applications. M.Tech/ME with 65% or GATE. Age: 35 years."
    },
    {
        title: "IBPS PO (Probationary Officer) 2025",
        org: "BANKING",
        posts: 4000,
        qualification: "Graduation",
        salary: "₹36,000 - ₹70,000",
        location: "All India",
        deadline: "Aug 2025",
        applyStart: "2025",
        isNew: false,
        applyLink: "https://www.ibps.in/",
        description: "Institute of Banking Personnel Selection conducting Common Recruitment Process for PO in 11 Public Sector Banks. Graduation (60%/55%/50% for Gen/OBC/SC-ST). 3 stage: Prelims, Mains, Interview. Age: 20-30 years. Computer knowledge must."
    },
    {
        title: "IBPS Clerk (Clerical Cadre) 2025",
        org: "BANKING",
        posts: 6000,
        qualification: "Graduation",
        salary: "₹19,900 - ₹46,200",
        location: "All India",
        deadline: "Sep 2025",
        applyStart: "2025",
        isNew: false,
        applyLink: "https://www.ibps.in/",
        description: "Common Recruitment for Office Assistant (Multipurpose) in PSU Banks. Graduation from recognized university. Local language knowledge preferred. 2-tier: Prelims CBT, Mains CBT. Age: 20-28 years. Computer literacy certificate required."
    },
    {
        title: "SBI PO (Probationary Officer) 2025",
        org: "BANKING",
        posts: 2000,
        qualification: "Graduation",
        salary: "₹36,000 - ₹70,000",
        location: "All India",
        deadline: "2025",
        applyStart: "Upcoming",
        isNew: false,
        applyLink: "https://sbi.co.in/careers",
        description: "State Bank of India recruiting PO for various branches. Graduation with 60%/55%/50%. 3-phase selection: Prelims, Mains, Group Exercise & Interview. 2-year probation period then confirmed as Assistant Manager. Age: 21-30 years."
    },
    {
        title: "SBI Clerk (Junior Associate) 2025",
        org: "BANKING",
        posts: 8000,
        qualification: "Graduation",
        salary: "₹19,900 - ₹46,200",
        location: "All India",
        deadline: "2025",
        applyStart: "Upcoming",
        isNew: false,
        applyLink: "https://sbi.co.in/careers",
        description: "State Bank of India Junior Associate (Customer Support & Sales) for all branches across India. Any graduate from recognized university. Local language knowledge essential. 2-tier exam: Prelims & Mains. Age: 20-28 years."
    },
    {
        title: "IBPS RRB Officer Scale-I 2025",
        org: "BANKING",
        posts: 3000,
        qualification: "Graduation",
        salary: "₹30,000 - ₹55,000",
        location: "Rural Banks",
        deadline: "2025",
        applyStart: "Upcoming",
        isNew: false,
        applyLink: "https://www.ibps.in/",
        description: "Regional Rural Banks Officers Scale-I (Assistant Manager) across 43 RRBs. Graduation with 50%/45%/40%. Local language mandatory. Service in rural/semi-urban areas. 2-tier: Prelims, Mains + Interview for Scale-I. Age: 18-28 years."
    },
    {
        title: "ONGC Graduate Trainee (GATE Based)",
        org: "PSU",
        posts: 500,
        qualification: "Graduation",
        salary: "₹40,000 - ₹1,40,000",
        location: "Various",
        deadline: "GATE Based",
        applyStart: "Periodic",
        isNew: false,
        applyLink: "https://www.ongcindia.com/",
        description: "Oil & Natural Gas Corporation Graduate Trainee in Mechanical, Electrical, Instrumentation, Chemical, Civil, Geology Engineering. B.E/B.Tech with valid GATE score. 1-year training period. Posting in offshore/onshore locations. Age: 26 years."
    },
    {
        title: "NTPC Executive Trainee (Engineering/HR/Finance)",
        org: "PSU",
        posts: 280,
        qualification: "Post Graduation",
        salary: "₹50,000 - ₹1,60,000",
        location: "Various",
        deadline: "GATE Based",
        applyStart: "Periodic",
        isNew: false,
        applyLink: "https://www.ntpc.co.in/",
        description: "National Thermal Power Corporation Executive Trainee in Engineering (Electrical, Mechanical, Electronics, Civil, IT) & Management (HR, Finance). B.E/B.Tech with GATE or MBA/CA. Age: 27 years (32 for MBA/CA)."
    },
    {
        title: "BHEL Engineer Trainee (GATE)",
        org: "PSU",
        posts: 230,
        qualification: "Graduation",
        salary: "₹40,000 - ₹1,40,000",
        location: "Various",
        deadline: "GATE Based",
        applyStart: "Periodic",
        isNew: false,
        applyLink: "https://careers.bhel.in/",
        description: "Bharat Heavy Electricals Limited Engineer Trainee in Mechanical, Electrical, Electronics, Civil, Metallurgy, Industrial Engineering. B.E/B.Tech with valid GATE score. 1 year training in manufacturing plants & projects. Age: 27 years."
    },
    {
        title: "SAIL Management Trainee (Technical)",
        org: "PSU",
        posts: 390,
        qualification: "Post Graduation",
        salary: "₹50,000 - ₹1,60,000",
        location: "Various",
        deadline: "Periodic",
        applyStart: "Check Website",
        isNew: false,
        applyLink: "https://www.sail.co.in/",
        description: "Steel Authority of India Management Trainee in Metallurgy, Mechanical, Electrical, Electronics, Instrumentation, Chemical, Mining, Civil Engineering. B.Tech with 65% or valid GATE. Posting at steel plants. Age: 28 years."
    },
    {
        title: "IOCL Trade Apprentice Recruitment",
        org: "PSU",
        posts: 2000,
        qualification: "Diploma",
        salary: "₹25,000 - ₹35,000",
        location: "Refineries",
        deadline: "Periodic",
        applyStart: "Check Website",
        isNew: false,
        applyLink: "https://iocl.com/",
        description: "Indian Oil Corporation Trade Apprentices in Fitter, Electrician, Instrument Mechanic, Machinist, Welder, Turner, Refrigeration & AC Mechanic. ITI/Diploma with NAC. 1-year training with stipend. Age: 18-24 years."
    },
    {
        title: "Nainital Bank PO/Clerk/SO Recruitment 2025",
        org: "BANKING",
        posts: 185,
        qualification: "Graduation",
        salary: "₹25,000 - ₹60,000",
        location: "Uttarakhand",
        deadline: "Active",
        applyStart: "Dec 2025",
        isNew: true,
        applyLink: "https://www.nainitalbank.co.in/",
        description: "Nainital Bank Limited (Associate Bank of Bank of Baroda) recruiting Probationary Officers (75), Clerks (95), Specialist Officers-IT (15). Graduation required. Local language (Hindi/Garhwali/Kumaoni) knowledge essential. Age: 21-35 years."
    }
];

let activeOrg = 'all';
let activeQual = 'all';

function formatNumber(num) {
    return num.toLocaleString('en-IN');
}

function renderJobs() {
    const grid = document.getElementById('jobsGrid');
    const filtered = jobs.filter(job => {
        const orgMatch = activeOrg === 'all' || job.org === activeOrg;
        const qualMatch = activeQual === 'all' || job.qualification === activeQual;
        return orgMatch && qualMatch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <div style="font-size: 64px; margin-bottom: 20px;">🔍</div>
                <h3 style="color: rgba(255,255,255,0.9); margin-bottom: 8px;">No jobs found</h3>
                <p>Try adjusting your filters to see more opportunities</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(job => `
        <div class="job-card">
            <div class="job-header">
                <div class="job-org">
                    ${job.org}
                    ${job.isNew ? '<span class="new-badge">New</span>' : ''}
                </div>
                <h3 class="job-title">${job.title}</h3>
                <div class="job-meta">
                    <span class="meta-item">📍 ${job.location}</span>
                    <span class="meta-item">👥 ${formatNumber(job.posts)} Posts</span>
                </div>
            </div>
            
            <div class="job-description">
                ${job.description}
            </div>

            <div class="job-details">
                <div class="detail-row">
                    <span class="detail-label">Qualification</span>
                    <span class="detail-value">${job.qualification}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Salary Range</span>
                    <span class="detail-value">${job.salary}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Application Status</span>
                    <span class="detail-value">${job.applyStart}</span>
                </div>
            </div>

            <div class="job-footer">
                <span class="deadline">⏰ Deadline: ${job.deadline}</span>
                <button class="apply-btn" onclick="openApplyLink('${job.applyLink}', '${job.title.replace(/'/g, "\\'")}')">Apply Now →</button>
            </div>
        </div>
    `).join('');

    updateStats(filtered);
}

function updateStats(filtered) {
    const totalPosts = filtered.reduce((sum, job) => sum + job.posts, 0);
    const newCount = filtered.filter(j => j.isNew).length;
    
    document.getElementById('totalJobs').textContent = filtered.length;
    document.getElementById('newJobs').textContent = newCount;
    document.getElementById('totalPosts').textContent = formatNumber(totalPosts);
}

function openApplyLink(link, title) {
    window.open(link, '_blank');
    setTimeout(() => {
        alert(`✅ Opening Official Application Portal\n\n📋 Job: ${title}\n\n⚠️ Important Instructions:\n\n✓ Verify all information on official website\n✓ Keep scanned documents ready (Photo, Signature, ID proof)\n✓ Read notification carefully before applying\n✓ Check age limit and eligibility criteria\n✓ Save application number for future reference\n✓ Apply before the deadline\n\n🎯 Best of luck for your application!`);
    }, 500);
}

document.getElementById('orgFilters').addEventListener('click', (e) => {
    if (e.target.classList.contains('chip')) {
        document.querySelectorAll('#orgFilters .chip').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        activeOrg = e.target.dataset.org;
        renderJobs();
    }
});

document.getElementById('qualFilters').addEventListener('click', (e) => {
    if (e.target.classList.contains('chip')) {
        document.querySelectorAll('#qualFilters .chip').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        activeQual = e.target.dataset.qual;
        renderJobs();
    }
});

renderJobs();
