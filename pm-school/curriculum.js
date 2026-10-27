// Curriculum data for Maro PM School.
// Each day has an outline (always present) and, once built, a `lesson` with segments.
// Segment kinds: brief, read, watch, case, quiz, write, bonus.

window.MENTORS = {
  bier: {
    name: "Nikita Bier",
    role: "Built tbh (sold to Facebook) and Gas (sold to Discord). Head of Product at X from mid-2025 to Aug 2026.",
    lens: "Value in seconds. Every tap has to earn its place. A repeatable testing process beats any single idea.",
    link: "https://www.lennysnewsletter.com/p/how-to-consistently-go-viral-nikita-bier"
  },
  doshi: {
    name: "Shreyas Doshi",
    role: "Former PM leader at Stripe, Twitter, Google, Yahoo. Writes about product sense and PM craft.",
    lens: "LNO tasks. Impact, execution, optics. Most execution problems are strategy problems.",
    link: "https://www.lennysnewsletter.com/p/shreyas-doshi-live"
  },
  torres: {
    name: "Teresa Torres",
    role: "Author of Continuous Discovery Habits. Product discovery coach.",
    lens: "Talk to customers every week. Map opportunities before solutions.",
    link: "https://www.producttalk.org/opportunity-solution-tree/"
  },
  vohra: {
    name: "Rahul Vohra",
    role: "Founder of Superhuman. Ran 1:1 onboarding for every user, then learned what to automate.",
    lens: "Measure product-market fit. Hand-hold on purpose, then turn what you learn into product.",
    link: "https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/"
  },
  lenny: {
    name: "Lenny Rachitsky",
    role: "Former Airbnb product lead. Runs the largest product newsletter and podcast.",
    lens: "Pick an activation metric that predicts retention. Benchmarks over vibes.",
    link: "https://www.lennysnewsletter.com/p/how-to-determine-your-activation"
  },
  cagan: {
    name: "Marty Cagan",
    role: "Founder of SVPG, author of Inspired and Empowered.",
    lens: "Four risks: value, usability, feasibility, viability. Discovery before delivery.",
    link: "https://www.svpg.com/four-big-risks/"
  },
  christensen: {
    name: "Clayton Christensen",
    role: "Harvard professor, father of Jobs to Be Done and disruption theory.",
    lens: "People hire products to make progress. Find the job, not the demographic.",
    link: "https://hbr.org/2016/09/know-your-customers-jobs-to-be-done"
  },
  moesta: {
    name: "Bob Moesta",
    role: "Co-creator of Jobs to Be Done with Clayton Christensen. CEO of The Re-Wired Group.",
    lens: "Demand starts in a struggling moment. People switch when push and pull beat anxiety and habit.",
    link: "https://www.lennysnewsletter.com/p/the-ultimate-guide-to-jtbd-bob-moesta"
  },
  krug: {
    name: "Steve Krug",
    role: "Author of Don't Make Me Think, the most-read usability book.",
    lens: "If a user has to think about how to use it, you lost a little. Test with a few people, often.",
    link: "https://sensible.com/dont-make-me-think/"
  },
  sierra: {
    name: "Kathy Sierra",
    role: "Author of Badass: Making Users Awesome. Interaction designer and educator.",
    lens: "Nobody wants to be good at your tool. They want to be good at their job.",
    link: "https://businessofsoftware.org/talks/speakers/kathy-sierra/"
  },
  singer: {
    name: "Ryan Singer",
    role: "Wrote Shape Up while leading product strategy at Basecamp.",
    lens: "Set an appetite, shape the work, bet on it for a fixed cycle.",
    link: "https://basecamp.com/shapeup"
  },
  biddle: {
    name: "Gibson Biddle",
    role: "Former VP of Product at Netflix.",
    lens: "Delight customers in hard-to-copy, margin-enhancing ways (DHM).",
    link: "https://gibsonbiddle.medium.com/netflix-today-64fe91e2c693"
  },
  graham: {
    name: "Paul Graham",
    role: "Co-founder of Y Combinator, essayist.",
    lens: "Do things that don't scale, on purpose, until you know what to build.",
    link: "https://paulgraham.com/ds.html"
  },
  fitzpatrick: {
    name: "Rob Fitzpatrick",
    role: "Author of The Mom Test.",
    lens: "Ask about their life and past behavior, never about your idea.",
    link: "https://www.momtestbook.com/"
  },
  butterfield: {
    name: "Stewart Butterfield",
    role: "Co-founder of Slack and Flickr.",
    lens: "Sell the outcome (horseback riding), not the saddle.",
    link: "https://medium.com/@stewart/we-dont-sell-saddles-here-4c59524d650d"
  },
  verna: {
    name: "Elena Verna",
    role: "Growth leader (Miro, Amplitude, Dropbox, Lovable). Writes about product-led growth.",
    lens: "Activation is the highest-leverage growth lever most teams neglect.",
    link: "https://elenaverna.substack.com/"
  }
};

window.CURRICULUM = {
  weeks: [
    { n: 1, title: "See the product the way users do", summary: "What a PM does, who your users are, how to hear them, how to measure them, and how to choose." },
    { n: 2, title: "Make it obvious, then make it scale", summary: "Usability, onboarding, secure links on a parent's phone, specs, experiments, self-serve help, and your 90-day plan." }
  ],
  days: [
    {
      id: "day1", n: 1, week: 1,
      title: "The job is outcomes, not features",
      tagline: "What a PM actually does, and what yours is at Maro.",
      mentors: ["bier", "doshi"],
      goals: [
        "Explain the PM job in one sentence",
        "Tell an outcome from an output",
        "Name the two numbers your Maro job is about",
        "Write your first product charter"
      ],
      outline: ["Read: what a PM is (and isn't)", "Watch: Nikita Bier on why \"product management is not real\"", "Case: tbh and the three-second rule", "Quiz", "Write: your Maro product charter v0"],
      assignment: "Maro product charter v0",
      lesson: {
        bierRule: "“Every tap on a mobile app is a miracle for you as a product developer.”",
        bierSource: "Nikita Bier, as collected in Lessons from Nikita Bier",
        bierLink: "https://www.antoinebuteau.com/lessons-from-nikita-bier/",
        segments: [
          {
            kind: "brief", minutes: 1, title: "Today's mission",
            html: `
<p>You start a job where nobody hands you a spec. Today you will define the job yourself, in numbers, so that every later decision has something to be checked against.</p>
<p>By the end you will have written a one-page <strong>product charter</strong> for Maro for Schools and Secure Links. It gets saved to <a href="#playbook">your playbook</a>, and on Day 14 it becomes the first page of your 90-day plan.</p>`
          },
          {
            kind: "read", minutes: 7, title: "What a product manager actually is",
            html: `
<h3>The one-sentence job</h3>
<p>A product manager is responsible for whether the product <em>works</em>: for the people using it, and for the business paying for it. Engineers own the code. Designers own the interface. You own the result.</p>
<p>That is why the role is strange. You have no direct control over anything, and you are accountable for everything. Your tools are clarity, evidence, and taste.</p>

<h3>Outputs vs. outcomes</h3>
<p>An <strong>output</strong> is something you shipped. An <strong>outcome</strong> is a change in what people do.</p>
<div class="compare">
  <div><span class="tag tag-out">Output</span><p>We shipped a bulk roster upload.</p></div>
  <div><span class="tag tag-in">Outcome</span><p>New schools send their first consent links within two days of kickoff, without a support call.</p></div>
</div>
<p>A roadmap full of outputs feels productive and proves nothing. Your scorecard is outcomes. Outputs are only bets on how to get there.</p>

<h3>Your outcome at Maro</h3>
<p>Your brief, translated: make Maro for Schools and Secure Links so clear that schools onboard themselves and families finish the consent flow without help. That turns into two numbers you should learn by heart:</p>
<ol class="numbers">
  <li><strong>Time to first screening.</strong> Days from a school's kickoff to the first student screened. This is your activation speed. Hand-holding hides inside it.</li>
  <li><strong>Support contacts per active school per month.</strong> Every ticket, email, and call is a place where the product failed to explain itself.</li>
</ol>
<p>For every idea you hear this month, ask which of these two it moves, and by roughly how much. If the answer is “neither”, it waits.</p>

<h3>What PMs do all week</h3>
<p>The work is a loop you run over and over:</p>
<ul class="loop">
  <li><strong>Discover.</strong> Find out what is worth fixing. Read tickets, watch people use the product, talk to counselors and parents.</li>
  <li><strong>Decide.</strong> Pick the few things that matter and say no to the rest, out loud, with reasons.</li>
  <li><strong>Deliver.</strong> Write the spec, sketch the screens, unblock engineers, test it yourself before anyone else does.</li>
  <li><strong>Measure.</strong> Check whether the number moved. If it didn't, learn why and go again.</li>
</ul>

<h3>Nikita Bier's provocation</h3>
<p>In his conversation with Lenny Rachitsky, Nikita argues that “product management is not real”. You will hear his reasoning in the next segment. Listen for the useful part: at big companies, PM rituals (docs, reviews, alignment meetings) can quietly replace making things. At a startup like Maro you will write copy, mock screens, test builds, and answer tickets yourself. That is an advantage, because the person closest to the problem decides faster.</p>

<h3>One more lens: the three levels</h3>
<p>Shreyas Doshi points out that people work at three levels at once: <strong>impact</strong> (does this move the outcome?), <strong>execution</strong> (are we doing it well?), and <strong>optics</strong> (how does it look?). Many disagreements are two people arguing at different levels. When a meeting stalls, ask which level everyone is on.</p>

<h3>Taste is trainable</h3>
<p>Good PMs have “taste”: a quick sense of what feels confusing, slow, or untrustworthy. Taste comes from looking closely at many products and asking why each screen is the way it is. This school will make you do that every day.</p>`
          },
          {
            kind: "watch", minutes: 9, title: "Nikita Bier: why “product management is not real”",
            source: "Lenny's Podcast, Aug 2024",
            url: "https://www.youtube.com/watch?v=bhnfZhJWCWY&t=2539s",
            altUrl: "https://www.lennysnewsletter.com/p/how-to-consistently-go-viral-nikita-bier",
            altLabel: "Episode page and transcript",
            range: "42:19 → 51:49",
            html: `
<p>Watch two chapters: <strong>Big-tech product management</strong> (42:19) and <strong>Why “product management is not real”</strong> (48:46). The link starts at 42:19. Stop at 51:49.</p>
<p>While you watch, jot down answers to these:</p>
<ul>
  <li>What does he think slows down product work at large companies?</li>
  <li>What does he think a product person should spend their time on instead?</li>
  <li>Which of his points applies to a small team selling to schools, and which only to consumer apps?</li>
</ul>
<p class="muted">If you have extra time later, the chapters at 13:45 (The birth of tbh) and 34:08 (Lasting lessons from tbh) set up today's case study.</p>`,
            notesPrompt: "Your notes from the clip"
          },
          {
            kind: "case", minutes: 4, title: "Case study: tbh and the three-second rule",
            html: `
<p><strong>What happened.</strong> In 2017 Nikita Bier and his co-founders launched <em>tbh</em>, an app where teens answered anonymous, positive polls about their friends (“Who has the best laugh?”). They launched it in a few schools in Georgia, watched it spread school by school, and within weeks it was at the top of the App Store. Facebook acquired it that same year.</p>
<p><strong>Why it worked.</strong> The whole product was one loop. Open the app, answer a poll about people you know, and someone else gets a compliment that brings them in. Nikita's summary of the lesson: show the core value within the first few seconds, which “often requires ruthlessly cutting features.”</p>
<p><strong>The part people skip.</strong> tbh was not a lucky first try. The team had built many apps before it. What they had built up was a fast, repeatable way to test ideas. In Nikita's words, focus on “a reproducible testing process over any single idea.”</p>

<div class="maro-lens">
  <p class="lens-label">Maro translation</p>
  <p>Maro is not a teen social app, but the rule carries over. Picture a parent who taps a Secure Link from a text message in the school pickup line. They have maybe thirty seconds of attention. If the first screen is a login wall, a page of legal text, or English only, the link dies, the counselor gets a phone call, and the counselor calls Maro.</p>
  <p>Ask the same of a counselor's first login: what do they see in the first three seconds, and does it tell them what to do next?</p>
</div>`,
            prompt: "What does a parent see in the first three seconds after tapping a Maro Secure Link today? Describe it as exactly as you can, then say what you'd cut."
          },
          {
            kind: "quiz", minutes: 3, title: "Check yourself",
            questions: [
              {
                q: "Which of these is an outcome?",
                options: [
                  "Ship a CSV roster importer",
                  "Redesign the counselor dashboard",
                  "New schools send first consent links within 48 hours of kickoff, without a support call",
                  "Write 20 help center articles"
                ],
                answer: 2,
                why: "The other three are outputs: things you could ship that might or might not change behavior. The outcome describes what users do differently, with a number."
              },
              {
                q: "A district admin emails: “We need an export of everything to Excel.” What's the best first move?",
                options: [
                  "Add it to the roadmap",
                  "Ask what they plan to do with the spreadsheet and who will read it",
                  "Say no, it isn't a priority",
                  "Have an engineer build it this week"
                ],
                answer: 1,
                why: "Requests are solutions customers have guessed at. The job behind the request (a board report? a state compliance form?) may need something much smaller, or something different. You'll go deep on this on Day 2."
              },
              {
                q: "By Nikita Bier's onboarding principle, when should a new user see the core value?",
                options: ["After a short tutorial", "Within the first few seconds", "After their onboarding call", "By the end of their first week"],
                answer: 1,
                why: "His rule is to show core value within seconds. For B2B software that may mean minutes, but the instinct is the same: remove every step between the user and the moment it clicks."
              },
              {
                q: "Two teammates disagree about launching a redesigned consent page. One worries the sales team won't like how it looks in demos. The other wants to know if more parents will finish it. In Shreyas Doshi's terms, they are arguing at different levels. Which?",
                options: ["Impact vs. execution", "Optics vs. impact", "Execution vs. optics", "They're on the same level"],
                answer: 1,
                why: "How it looks in demos is optics. Whether more parents finish is impact. Name the levels and the argument gets shorter."
              },
              {
                q: "Which pair of numbers best captures your job at Maro?",
                options: [
                  "Features shipped and bugs closed",
                  "Number of schools signed and revenue",
                  "Time to first screening and support contacts per active school",
                  "Daily active users and session length"
                ],
                answer: 2,
                why: "Your brief is self-serve onboarding and fewer support requests. Signups and revenue matter to the company, but they mostly depend on sales. These two depend on the product."
              },
              {
                q: "Using Shreyas Doshi's LNO framework, writing a clear help article for your most common ticket type is most likely…",
                options: ["Leverage", "Neutral", "Overhead"],
                answer: 0,
                why: "One hour of work that removes dozens of tickets a month is a leverage task. Polishing internal meeting notes would be overhead."
              }
            ]
          },
          {
            kind: "write", minutes: 7, title: "Assignment: your Maro product charter v0",
            html: `<p>Write fast and from what you know today. This is version zero. You will rewrite it with real data on Day 4 and Day 14. Short answers are fine.</p>`,
            fields: [
              { id: "users", label: "Who touches Maro? List every type of person.", hint: "Think past counselors: district admins, principals, teachers, parents, students, clinicians, IT staff, Maro's own team…", rows: 4 },
              { id: "tickets", label: "From memory: the top three reasons schools or families contact support.", hint: "Tomorrow and on Day 4 you'll replace this with real data.", rows: 3 },
              { id: "outcome", label: "The outcome you'd bet your first 90 days on, as one sentence with a number.", hint: "Example: “A new school screens its first student within 7 days of kickoff, with no more than one call.”", rows: 2 },
              { id: "no", label: "What you will say no to this month.", hint: "Saying no early is how you protect the outcome.", rows: 2 },
              { id: "love", label: "One product (any product) whose onboarding you love, and the exact moment it clicked.", hint: "You'll tear it down on Day 7.", rows: 2 }
            ]
          },
          {
            kind: "bonus", minutes: 0, title: "Go further (optional)",
            links: [
              { label: "Good Product Manager / Bad Product Manager", by: "Ben Horowitz", url: "https://a16z.com/good-product-manager-bad-product-manager/", meta: "Read, 10 min. The classic memo on what the job is." },
              { label: "Shreyas Doshi on LNO, pre-mortems and the three levels", by: "Lenny's Podcast", url: "https://www.lennysnewsletter.com/p/shreyas-doshi-live", meta: "Listen. LNO starts around 42 minutes in." },
              { label: "Lessons from Nikita Bier", by: "Antoine Buteau", url: "https://www.antoinebuteau.com/lessons-from-nikita-bier/", meta: "Read, 5 min. His principles in one list." },
              { label: "The four big risks", by: "Marty Cagan", url: "https://www.svpg.com/four-big-risks/", meta: "Read, 5 min. Value, usability, feasibility, viability." }
            ]
          }
        ]
      }
    },
    {
      id: "day2", n: 2, week: 1,
      title: "Know the job your users hire Maro for",
      tagline: "Jobs to Be Done, and the six people who touch every screening.",
      mentors: ["christensen", "moesta", "sierra"],
      goals: ["Explain Jobs to Be Done with the milkshake story", "Write a job statement for each Maro user type", "Spot a feature request that hides a different job"],
      outline: ["Read: Jobs to Be Done in 7 minutes", "Watch: Christensen's milkshake story", "Case: the Maro cast (district admin, counselor, teacher, parent, student, clinician)", "Quiz", "Write: job map for every Maro user"],
      resources: [
        { label: "Know Your Customers' Jobs to Be Done", by: "Clayton Christensen et al., HBR", url: "https://hbr.org/2016/09/know-your-customers-jobs-to-be-done" },
        { label: "Why hire a milkshake?", by: "Clayton Christensen, Moral of the Story", url: "https://www.youtube.com/watch?v=6zfAurEA21Y" },
        { label: "Intercom on Jobs to Be Done (free book)", by: "Intercom", url: "https://www.intercom.com/resources/books/intercom-jobs-to-be-done" }
      ],
      assignment: "Job map: one job statement per Maro user type, plus their biggest anxiety",
      lesson: {
        bierRule: "“Look for existing user behaviors that are being done in a very inefficient way.”",
        bierSource: "Nikita Bier on latent demand, Lenny's Podcast show notes",
        bierLink: "https://www.lennysnewsletter.com/p/how-to-consistently-go-viral-nikita-bier",
        segments: [
          {
            kind: "brief", minutes: 1, title: "Today's mission",
            html: `
<p>Yesterday you listed everyone who touches Maro. Today you find out what each of them is actually trying to get done, and what scares them about it.</p>
<p>This matters for your brief because most support tickets are not about bugs. They are a person stuck between what they were trying to do and what the screen asked of them. If you know the job, you can see the gap.</p>`
          },
          {
            kind: "read", minutes: 6, title: "Jobs to Be Done in six minutes",
            html: `
<h3>People hire products to make progress</h3>
<p>Clayton Christensen's idea is simple: nobody buys a product for its own sake. They <em>hire</em> it to make progress in a specific situation, and they <em>fire</em> it when something else does the job better. The unit of analysis is the job, not the customer's age, title or school size.</p>

<h3>The job has three layers</h3>
<p>Every job has a practical side and two human sides. For a school counselor running screening season:</p>
<ul>
  <li><strong>Functional:</strong> get consent and screenings done for 600 students before the window closes.</li>
  <li><strong>Emotional:</strong> not feel overwhelmed, and feel sure no at-risk kid slips through.</li>
  <li><strong>Social:</strong> look competent to the principal and the district when the numbers come in.</li>
</ul>
<p>Most products only design for the first layer. Most support calls come from the other two.</p>

<h3>Write jobs as job stories</h3>
<p>Intercom's product team replaced personas with a three-part format they called the job story:</p>
<div class="compare">
  <div><span class="tag tag-out">Persona</span><p>Sarah, 42, school counselor, 8 years experience, likes clear dashboards.</p></div>
  <div><span class="tag tag-in">Job story</span><p><strong>When</strong> screening day is two days away and a third of consents are missing, <strong>I want to</strong> see which families haven't answered, <strong>so I can</strong> follow up before the window closes.</p></div>
</div>
<p>The situation (“when…”) does the heavy lifting. It tells you what the screen should show <em>at that moment</em>, which a persona never does.</p>

<h3>Your real competition</h3>
<p>Maro's competitor in a school is rarely another screening company. It is the paper packet in a backpack, a Google Form, a spreadsheet the counselor already knows, or doing nothing at all. Your onboarding has to beat the habit, not just look better than a rival.</p>

<h3>The four forces of switching</h3>
<p>Bob Moesta, who developed the theory with Christensen, describes four forces acting on anyone who is deciding whether to change how they do something:</p>
<div class="forces">
  <div class="force force-go"><strong>Push</strong><span>of the current situation. “Chasing paper consent forms takes me three weeks.”</span></div>
  <div class="force force-go"><strong>Pull</strong><span>of the new solution. “Parents could consent from their phone.”</span></div>
  <div class="force force-stop"><strong>Anxiety</strong><span>about the new thing. “What if parents think the link is a scam? What if a result flags suicide risk and I miss it?”</span></div>
  <div class="force force-stop"><strong>Habit</strong><span>of the present. “Our paper process works well enough, and I know where everything is.”</span></div>
</div>
<p>People switch only when push and pull beat anxiety and habit. Here is the useful part for you: <span class="mark">reducing anxiety and habit is usually cheaper than adding pull.</span> A clear sentence about who sees the results can do more than a new feature.</p>

<h3>Nobody wants to be good at Maro</h3>
<p>Kathy Sierra's rule: users don't want to be good at your tool, they want to be good at what the tool lets them do. A counselor wants to be great at keeping students safe. Every screen and help article should make them better at <em>that</em>. Compare “How to get every consent back before screening day” with “Using the Consent Settings page”. Same article, different job.</p>

<h3>Requests are guesses at solutions</h3>
<p>When someone asks for a feature, they are proposing their own fix for a job. Your work is to find the job and then choose the best fix, which may be smaller, different, or already there but hidden.</p>`
          },
          {
            kind: "watch", minutes: 9, title: "Clayton Christensen: why hire a milkshake?",
            source: "Moral of the Story, YouTube, 8:27",
            url: "https://www.youtube.com/watch?v=6zfAurEA21Y",
            range: "Whole video, from 0:00",
            altUrl: "https://therewiredgroup.com/case-studies/milkshakes/",
            altLabel: "Bob Moesta's firm's 3-minute write-up of the original milkshake research",
            html: `
<p>This whole video is the milkshake story, told by Christensen as it appears in his book <em>How Will You Measure Your Life?</em> Start at the beginning and watch to the end. A fast food chain tries to sell more milkshakes by asking customers how to improve them, and sales don't move. Then a researcher asks a different question: what job is the milkshake being hired to do?</p>
<p>Listen for:</p>
<ul>
  <li>When are most milkshakes bought, and by whom?</li>
  <li>What is the milkshake really competing against in the morning?</li>
  <li>Why does a parent hire the same milkshake for a different job in the afternoon, and what does it compete with then?</li>
</ul>`,
            notesPrompt: "What's Maro's \u201cmorning commute\u201d? Name one situation where a school hires Maro for a job you hadn't thought about."
          },
          {
            kind: "watch", minutes: 3, title: "Bob Moesta: struggling moments create demand",
            source: "Lenny's Podcast, Aug 2023",
            url: "https://www.youtube.com/watch?v=xQV7HVyAJjc&t=449s",
            range: "07:29 \u2192 09:51",
            altUrl: "https://www.lennysnewsletter.com/p/the-ultimate-guide-to-jtbd-bob-moesta",
            altLabel: "Episode page (audio, chapters and transcript)",
            html: `
<p>The link starts at <strong>07:29</strong>, the chapter called \u201cStruggling moments and demand\u201d. Stop at <strong>09:51</strong>, when the next chapter (\u201cUnderstanding the context behind pain points\u201d) begins. If you have a few extra minutes, back up to 04:04 for Moesta's own short explanation of Jobs to Be Done.</p>
<p>Moesta, who ran the milkshake interviews with Christensen, argues that demand doesn't come from your product. It comes from a moment when someone is struggling. Listen for how he describes that moment, then think about where Maro's users struggle: the week before screening, the first login, the text message a parent didn't expect.</p>
<p class="muted">Bookmark 14:46 for later. It's how Autobooks improved its buying process and 4x'ed conversion, which you'll want on Day 9.</p>`,
            notesPrompt: "One struggling moment you've seen a Maro user in, described as specifically as you can."
          },
          {
            kind: "case", minutes: 5, title: "Case study: the Maro cast",
            html: `
<p>Here is a first draft of the six main people around a Maro screening, each with a job story, their biggest anxiety, and what they would use without Maro. <strong>These are hypotheses.</strong> You know the product better than this page does. Correct them in today's assignment, and test them in real interviews on Day 3.</p>
<div class="cast">
  <article class="cast-card">
    <span class="label">District leader</span>
    <h4>Student services or mental health director</h4>
    <p><strong>When</strong> the board or state asks what we're doing about student mental health, <strong>I want to</strong> show screening coverage and follow-up across every school, <strong>so I can</strong> defend the program and its budget.</p>
    <p class="cast-anx"><span>Anxiety</span>A flagged student who never got follow-up, and the liability that comes with it.</p>
    <p class="cast-alt"><span>Without Maro</span>Each school does its own thing, or nothing.</p>
  </article>
  <article class="cast-card">
    <span class="label">Daily user</span>
    <h4>School counselor</h4>
    <p><strong>When</strong> screening season lands on top of my caseload, <strong>I want to</strong> get consents and screenings done without chasing paper, <strong>so I can</strong> spend my time with the students who need me.</p>
    <p class="cast-anx"><span>Anxiety</span>More flagged results than they have hours to act on. A messy rollout that makes them look bad.</p>
    <p class="cast-alt"><span>Without Maro</span>Paper forms in backpacks, Google Forms, a spreadsheet.</p>
  </article>
  <article class="cast-card">
    <span class="label">Helper</span>
    <h4>Teacher</h4>
    <p><strong>When</strong> I'm asked to give up class time for screening, <strong>I want</strong> it to take minutes and just work, <strong>so I can</strong> get back to teaching.</p>
    <p class="cast-anx"><span>Anxiety</span>The tech failing in front of 28 students.</p>
    <p class="cast-alt"><span>Without Maro</span>Handing out paper, or being left out entirely.</p>
  </article>
  <article class="cast-card">
    <span class="label">Gatekeeper</span>
    <h4>Parent or guardian</h4>
    <p><strong>When</strong> a text from school asks me to consent to a mental health screening, <strong>I want to</strong> understand what it is and that it's safe, <strong>so I can</strong> decide quickly and get on with my day.</p>
    <p class="cast-anx"><span>Anxiety</span>Is this link a scam? Who sees the answers? Will this go on my child's record?</p>
    <p class="cast-alt"><span>Without Maro</span>A paper form, or ignoring the message.</p>
  </article>
  <article class="cast-card">
    <span class="label">The reason it exists</span>
    <h4>Student</h4>
    <p><strong>When</strong> a screen at school asks how I've been feeling, <strong>I want to</strong> feel safe being honest, <strong>so I can</strong> get help without being embarrassed.</p>
    <p class="cast-anx"><span>Anxiety</span>Classmates seeing the screen. Not knowing who reads the answers.</p>
    <p class="cast-alt"><span>Without Maro</span>Nobody asks.</p>
  </article>
  <article class="cast-card">
    <span class="label">Next step</span>
    <h4>Clinician or care partner</h4>
    <p><strong>When</strong> a referral comes in, <strong>I want</strong> the context and the family's contact details in one place, <strong>so I can</strong> book a first appointment fast.</p>
    <p class="cast-anx"><span>Anxiety</span>Incomplete referrals and families who never pick up.</p>
    <p class="cast-alt"><span>Without Maro</span>Faxes, phone tag, an email chain.</p>
  </article>
</div>

<div class="maro-lens">
  <p class="lens-label">Decode a request</p>
  <p><strong>The request:</strong> “Can you add a button to resend the consent link to every parent who hasn't answered?”</p>
  <p><strong>The job:</strong> when screening day is close and consent is low, the counselor wants to reach the threshold without spending an afternoon on follow-up.</p>
  <p><strong>Better fixes to consider:</strong> automatic reminders on a schedule the counselor sets once. A consent-rate progress bar with a countdown to screening day. Reminders that go out in the family's language. Any of these might remove the request, and the tickets behind it, for every school at once.</p>
</div>`,
            prompt: "Which of the six cards is most wrong for Maro, and what's the real job? (Or: who is missing from the cast?)"
          },
          {
            kind: "quiz", minutes: 3, title: "Check yourself",
            questions: [
              {
                q: "In the milkshake story, what were morning commuters mostly hiring the milkshake to do?",
                options: [
                  "Get a cheap, sweet treat",
                  "Make a long, boring drive more interesting and stay full until lunch",
                  "Replace a full breakfast with something healthier",
                  "Reward themselves before work"
                ],
                answer: 1,
                why: "The milkshake competed with bananas, bagels and boredom, not with other milkshakes. Improving the flavor did nothing because flavor wasn't the job."
              },
              {
                q: "Which of these is a well-formed job story?",
                options: [
                  "As a counselor, I want a consent dashboard.",
                  "Counselors are busy and need better tools.",
                  "When screening day is two days away and a third of consents are missing, I want to see which families haven't answered, so I can follow up before the window closes.",
                  "Build a page listing parents with missing consent."
                ],
                answer: 2,
                why: "A job story starts with the situation, names the motivation, and ends with the outcome. The first option is a user story that names a solution. The last is a task."
              },
              {
                q: "For a school counselor, what is usually Maro's biggest competitor?",
                options: [
                  "Another mental health screening company",
                  "The paper forms, Google Forms or spreadsheets they already use, or doing nothing",
                  "The district's student information system",
                  "Counseling apps aimed at students"
                ],
                answer: 1,
                why: "Habit and nonconsumption are the real competition. Onboarding has to feel easier than the process they already know, starting on day one."
              },
              {
                q: "A parent writes to support: “Is this link real, or is it a scam?” Which of the four forces is that?",
                options: ["Push", "Pull", "Anxiety", "Habit"],
                answer: 2,
                why: "It's anxiety about the new thing. A school logo, the counselor's name and a sentence on who sees the answers can lower it without adding any features."
              },
              {
                q: "Using Kathy Sierra's principle, which help article title is better?",
                options: [
                  "Using the Consent Settings page",
                  "How to get every consent back before screening day",
                  "Consent module: overview and configuration",
                  "Consent FAQ"
                ],
                answer: 1,
                why: "It names the job the counselor is trying to do, not the part of the tool. People search for their goal, not your menu names."
              },
              {
                q: "A counselor asks for a “resend to everyone” button. What's the best first move?",
                options: [
                  "Build it; it's small",
                  "Ask what was happening when they needed it, and what they did instead",
                  "Tell them the feature already exists in settings",
                  "Add it to a feature-request vote board"
                ],
                answer: 1,
                why: "Find the situation and the job first. You may find a fix that helps every school, such as automatic reminders, instead of a button only power users find."
              }
            ]
          },
          {
            kind: "write", minutes: 7, title: "Assignment: the Maro job map",
            html: `<p>Rewrite the cast in your own words, using the job story format. Fix what the case got wrong. Keep each answer to two or three lines: <em>When… I want to… so I can…</em> then <em>Anxiety:</em>.</p>`,
            fields: [
              { id: "job-district", label: "District leader", hint: "When… I want to… so I can… / Anxiety:", rows: 3 },
              { id: "job-counselor", label: "School counselor", hint: "When… I want to… so I can… / Anxiety:", rows: 3 },
              { id: "job-teacher", label: "Teacher", hint: "When… I want to… so I can… / Anxiety:", rows: 3 },
              { id: "job-parent", label: "Parent or guardian (Secure Links)", hint: "When… I want to… so I can… / Anxiety:", rows: 3 },
              { id: "job-student", label: "Student", hint: "When… I want to… so I can… / Anxiety:", rows: 3 },
              { id: "job-clinician", label: "Clinician or care partner", hint: "When… I want to… so I can… / Anxiety:", rows: 3 },
              { id: "decode", label: "Decode one real request you've heard at Maro: the request, the job behind it, and a better fix.", hint: "Check the support inbox or ask the person who runs onboarding calls.", rows: 4 },
              { id: "anxiety-ticket", label: "Which anxiety above do you think creates the most support contacts? What's the cheapest way to lower it?", hint: "On Day 4 you'll check this guess against real tickets.", rows: 3 }
            ]
          },
          {
            kind: "bonus", minutes: 0, title: "Go further (optional)",
            links: [
              { label: "Know Your Customers' Jobs to Be Done", by: "Clayton Christensen et al., Harvard Business Review", url: "https://hbr.org/2016/09/know-your-customers-jobs-to-be-done", meta: "Read, 15 min. The original argument, with the milkshake and more cases." },
              { label: "Milkshakes in the Morning", by: "The Re-Wired Group (Bob Moesta's firm)", url: "https://therewiredgroup.com/case-studies/milkshakes/", meta: "Read, 3 min. The original research, from the people who did the interviews." },
              { label: "The ultimate guide to JTBD (full episode)", by: "Bob Moesta on Lenny's Podcast", url: "https://www.lennysnewsletter.com/p/the-ultimate-guide-to-jtbd-bob-moesta", meta: "Listen, 1 hr. 30:07 is on why he doesn't use a discussion guide, useful before Day 3." },
              { label: "How we accidentally invented job stories", by: "Paul Adams, Intercom", url: "https://www.intercom.com/blog/accidentally-invented-job-stories/", meta: "Read, 6 min. Where the format came from." },
              { label: "Intercom on Jobs to Be Done", by: "Intercom (free book)", url: "https://www.intercom.com/resources/books/intercom-jobs-to-be-done", meta: "Read in parts. How a software team uses JTBD day to day." },
              { label: "Jobs to Be Done theory", by: "Christensen Institute", url: "https://www.christenseninstitute.org/theory/jobs-to-be-done/", meta: "Read, 5 min. A short reference page." }
            ]
          }
        ]
      }
    },
    {
      id: "day3", n: 3, week: 1,
      title: "Talk to users without fooling yourself",
      tagline: "Interviews that get the truth, even from polite school staff.",
      mentors: ["fitzpatrick", "torres"],
      goals: ["Ask about past behavior, not opinions about ideas", "Run a 20-minute counselor interview", "Turn interviews into an opportunity solution tree"],
      outline: ["Read: The Mom Test rules", "Watch: YC's How to Talk to Users", "Case: three bad questions and how to fix them", "Quiz", "Write: your counselor and parent interview guides"],
      resources: [
        { label: "How To Talk To Users", by: "Gustaf Alströmer, Y Combinator", url: "https://www.youtube.com/watch?v=z1iF1c8w5Lg" },
        { label: "The Mom Test", by: "Rob Fitzpatrick", url: "https://www.momtestbook.com/" },
        { label: "Teresa Torres on how to interview customers", by: "Lenny's Podcast", url: "https://www.lennysnewsletter.com/p/teresa-torres-on-how-to-interview" },
        { label: "Opportunity Solution Trees", by: "Teresa Torres", url: "https://www.producttalk.org/opportunity-solution-tree/" }
      ],
      assignment: "Interview guides for a counselor and a parent, and a plan to book five calls this week"
    },
    {
      id: "day4", n: 4, week: 1,
      title: "Your support inbox is a product spec",
      tagline: "Every ticket is a screen that failed to explain itself.",
      mentors: ["vohra", "graham"],
      goals: ["Tag tickets by root cause, not by symptom", "Find the 20% of causes behind 80% of contacts", "Decide what hand-holding to keep on purpose"],
      outline: ["Read: a ticket taxonomy for Maro", "Watch: Superhuman's manual onboarding, and why it scaled", "Case: do things that don't scale, then automate them", "Quiz", "Write: tag 50 real tickets and rank the root causes"],
      resources: [
        { label: "Superhuman's secret to success", by: "Rahul Vohra on Lenny's Podcast", url: "https://www.lennysnewsletter.com/p/superhumans-secret-to-success-rahul-vohra" },
        { label: "Do Things that Don't Scale", by: "Paul Graham", url: "https://paulgraham.com/ds.html" },
        { label: "Onboarding teardowns", by: "UserOnboard", url: "https://www.useronboard.com/user-onboarding-teardowns/" }
      ],
      assignment: "Ticket audit: 50 tickets tagged by root cause, top five causes ranked by volume"
    },
    {
      id: "day5", n: 5, week: 1,
      title: "Measure it: activation, funnels and the aha moment",
      tagline: "From contract signed to first student screened, step by step.",
      mentors: ["lenny", "verna"],
      goals: ["Define Maro's activation moment", "Draw the onboarding funnel with drop-off at each step", "Pick leading indicators you can check weekly"],
      outline: ["Read: activation, retention and north-star metrics", "Watch/Read: Lenny on choosing an activation metric", "Case: Maro's funnel (kickoff, roster, links sent, consent, screening, referral)", "Quiz", "Write: Maro's metric tree"],
      resources: [
        { label: "How to determine your activation metric", by: "Lenny Rachitsky", url: "https://www.lennysnewsletter.com/p/how-to-determine-your-activation" },
        { label: "What is a good activation rate", by: "Lenny Rachitsky", url: "https://www.lennysnewsletter.com/p/what-is-a-good-activation-rate" },
        { label: "North Star metric", by: "Reforge", url: "https://www.reforge.com/blog/north-star-metric-growth" },
        { label: "Elena's Growth Scoop", by: "Elena Verna", url: "https://elenaverna.substack.com/" }
      ],
      assignment: "Metric tree: one north star, the funnel steps under it, and what you'll check every Monday"
    },
    {
      id: "day6", n: 6, week: 1,
      title: "Choose: prioritization and saying no",
      tagline: "Opportunity cost, RICE, LNO, and the courage to cut.",
      mentors: ["doshi", "cagan"],
      goals: ["Score a backlog with RICE without fooling yourself", "Think in opportunity cost instead of ROI", "Write a kind, clear no"],
      outline: ["Read: three ways to prioritize and when each breaks", "Listen: Shreyas Doshi on opportunity cost", "Case: ten Maro problems, one quarter", "Quiz", "Write: your ranked top 10 and three “not now” replies"],
      resources: [
        { label: "RICE: simple prioritization", by: "Intercom", url: "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/" },
        { label: "Shreyas Doshi live", by: "Lenny's Podcast", url: "https://www.lennysnewsletter.com/p/shreyas-doshi-live" },
        { label: "The four big risks", by: "Marty Cagan", url: "https://www.svpg.com/four-big-risks/" }
      ],
      assignment: "Ranked list of Maro's top 10 problems with RICE scores, plus three written “not now” replies"
    },
    {
      id: "day7", n: 7, week: 1,
      title: "Teardown day: onboarding, screen by screen",
      tagline: "Do what Nikita does to other people's apps, to your own.",
      mentors: ["bier"],
      goals: ["Count every tap, field and decision in a flow", "Spot drop-off risks before data shows them", "Compare Maro to the best onboarding you know"],
      outline: ["Read: how to run a teardown", "Study: Nikita Bier's public onboarding feedback", "Case: growth.design comic case studies", "Quiz", "Write: full teardown of Maro onboarding with a tap count"],
      resources: [
        { label: "Nikita's onboarding feedback (profile photos, calendar sync)", by: "Nikita Bier on X", url: "https://x.com/nikitabier/status/1867270647912788365" },
        { label: "On long onboarding and which steps earn their place", by: "Nikita Bier on X", url: "https://x.com/nikitabier/status/1945880377513632159" },
        { label: "Explode product analysis", by: "Julian Ivaldy", url: "https://julianivaldy.medium.com/explode-product-analysis-by-nikita-bier-509ea9910749" },
        { label: "Case studies in comic form", by: "growth.design", url: "https://growth.design/case-studies" },
        { label: "Real app screens to compare against", by: "Mobbin", url: "https://mobbin.com/" }
      ],
      assignment: "Teardown of Maro onboarding: every screen, tap count, and the three worst moments"
    },
    {
      id: "day8", n: 8, week: 2,
      title: "Don't make me think: usability basics",
      tagline: "Products live and die in the pixels.",
      mentors: ["krug", "bier"],
      goals: ["Use Nielsen's 10 heuristics as a checklist", "Run a five-person usability test in an afternoon", "Write error messages that fix the problem"],
      outline: ["Read: the 10 heuristics with Maro examples", "Watch: a usability test, start to finish", "Case: the counselor dashboard", "Quiz", "Write: heuristic audit of one Maro screen"],
      resources: [
        { label: "10 Usability Heuristics", by: "Jakob Nielsen, NN/g", url: "https://www.nngroup.com/articles/ten-usability-heuristics/" },
        { label: "Why you only need to test with 5 users", by: "NN/g", url: "https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/" },
        { label: "Usability Testing 101", by: "NN/g", url: "https://www.nngroup.com/articles/usability-testing-101/" },
        { label: "Error message guidelines", by: "NN/g", url: "https://www.nngroup.com/articles/error-message-guidelines/" },
        { label: "Don't Make Me Think", by: "Steve Krug", url: "https://sensible.com/dont-make-me-think/" }
      ],
      assignment: "Heuristic audit of the counselor dashboard: issues ranked by severity"
    },
    {
      id: "day9", n: 9, week: 2,
      title: "Onboarding that runs without you",
      tagline: "Empty states, checklists, defaults, and selling the outcome.",
      mentors: ["butterfield", "sierra", "vohra"],
      goals: ["Design a first-run experience around the first win", "Turn empty screens into next steps", "Replace a kickoff call with product"],
      outline: ["Read: the anatomy of self-serve onboarding", "Read: We Don't Sell Saddles Here", "Case: Superhuman moving from 1:1 calls to product", "Quiz", "Write: redesigned flow from contract to first screening"],
      resources: [
        { label: "We Don't Sell Saddles Here", by: "Stewart Butterfield", url: "https://medium.com/@stewart/we-dont-sell-saddles-here-4c59524d650d" },
        { label: "Empty states in complex apps", by: "NN/g", url: "https://www.nngroup.com/articles/empty-state-interface-design/" },
        { label: "Progressive disclosure", by: "NN/g", url: "https://www.nngroup.com/articles/progressive-disclosure/" },
        { label: "Kathy Sierra talks", by: "Business of Software", url: "https://businessofsoftware.org/talks/speakers/kathy-sierra/" }
      ],
      assignment: "New onboarding flow: kickoff to first screening in as few steps as possible, with the empty state of every screen"
    },
    {
      id: "day10", n: 10, week: 2,
      title: "Secure Links: trust on a parent's phone",
      tagline: "Consent, privacy and plain language for a distracted, worried parent.",
      mentors: ["bier"],
      goals: ["Design for one-handed, distracted, mobile use", "Write consent copy at a 6th-grade reading level", "Handle expired links, wrong devices and other languages gracefully"],
      outline: ["Read: designing for trust and consent", "Study: GOV.UK design system patterns for forms", "Case: how ClassDojo won parents through teachers", "Quiz", "Write: the Secure Link journey, redesigned"],
      resources: [
        { label: "GOV.UK Design System", by: "UK Government Digital Service", url: "https://design-system.service.gov.uk/" },
        { label: "Writing for user interfaces", by: "GOV.UK Service Manual", url: "https://www.gov.uk/service-manual/design/writing-for-user-interfaces" },
        { label: "Federal plain language guidelines", by: "plainlanguage.gov", url: "https://www.plainlanguage.gov/guidelines/" },
        { label: "The tricky business of innovating in the classroom (ClassDojo)", by: "Inc.", url: "https://www.inc.com/laura-montini/2015-30-under-30-classdojo.html" }
      ],
      assignment: "Secure Link redesign: the text message, every screen, and the copy, for an English and a Spanish-speaking parent"
    },
    {
      id: "day11", n: 11, week: 2,
      title: "Write it down: specs engineers love",
      tagline: "Shaped pitches, PR/FAQs and one-page specs.",
      mentors: ["singer", "cagan"],
      goals: ["Write a problem statement before a solution", "Set an appetite instead of an estimate", "Hand off work with no open questions"],
      outline: ["Read: Shape Up, chapters on appetite and pitches", "Read: Amazon's working-backwards press release", "Case: a spec that saved a week, and one that cost a month", "Quiz", "Write: a shaped pitch for your number-one problem"],
      resources: [
        { label: "Shape Up (free book)", by: "Ryan Singer, Basecamp", url: "https://basecamp.com/shapeup" },
        { label: "Working Backwards", by: "Colin Bryar and Bill Carr", url: "https://www.workingbackwards.com/" },
        { label: "The Linear Method", by: "Linear", url: "https://linear.app/method" },
        { label: "Lenny's favorite templates", by: "Lenny Rachitsky", url: "https://www.lennysnewsletter.com/p/my-favorite-templates-issue-37" }
      ],
      assignment: "A one-page shaped pitch for your top problem: problem, appetite, solution sketch, rabbit holes, no-gos"
    },
    {
      id: "day12", n: 12, week: 2,
      title: "Ship fast, learn faster",
      tagline: "Experiments when you have hundreds of schools, not millions of users.",
      mentors: ["bier", "vohra"],
      goals: ["Build a repeatable testing process", "Pick the right test for small B2B numbers", "Measure product-market fit with the Sean Ellis question"],
      outline: ["Read: experiments without big traffic", "Read: Superhuman's product-market fit engine", "Case: Nikita's testing machine (first app took a year, last took two weeks)", "Quiz", "Write: an experiment plan for one onboarding change"],
      resources: [
        { label: "How Superhuman built an engine to find product-market fit", by: "Rahul Vohra, First Round Review", url: "https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/" },
        { label: "Nikita Bier's playbook (chapters on tbh and Gas)", by: "Lenny's Podcast", url: "https://www.youtube.com/watch?v=bhnfZhJWCWY" },
        { label: "Lessons from Nikita Bier", by: "Antoine Buteau", url: "https://www.antoinebuteau.com/lessons-from-nikita-bier/" }
      ],
      assignment: "Experiment plan: hypothesis, change, metric, sample, decision rule, and what you'll do if it fails"
    },
    {
      id: "day13", n: 13, week: 2,
      title: "Help that helps itself",
      tagline: "Docs, in-app guidance and support deflection that people actually use.",
      mentors: ["verna", "krug"],
      goals: ["Know when to fix the product and when to write help", "Put help where the question happens", "Write help articles people finish"],
      outline: ["Read: the help hierarchy (fix it, then explain in place, then document)", "Study: Stripe's docs as the gold standard", "Case: rewriting your top five tickets as product fixes and articles", "Quiz", "Write: the five help articles that would remove the most tickets"],
      resources: [
        { label: "Stripe documentation", by: "Stripe", url: "https://stripe.com/docs" },
        { label: "Writing for GOV.UK", by: "GOV.UK", url: "https://www.gov.uk/guidance/content-design/writing-for-gov-uk" },
        { label: "Heuristic 10: help and documentation", by: "NN/g", url: "https://www.nngroup.com/articles/ten-usability-heuristics/" }
      ],
      assignment: "Five help articles (or in-app fixes) for your top ticket causes, with the ticket volume each should remove"
    },
    {
      id: "day14", n: 14, week: 2,
      title: "Strategy and your 90-day plan",
      tagline: "From a list of fixes to a point of view.",
      mentors: ["biddle", "doshi", "bier"],
      goals: ["Write a product strategy in one page", "Use DHM to test your bets", "Present a 90-day plan your CEO can say yes to"],
      outline: ["Read: what strategy is and isn't", "Read: Gibson Biddle's DHM model", "Case: Nikita's year rebuilding X's onboarding and notifications", "Quiz: the final review", "Write: your 90-day plan, built from your playbook"],
      resources: [
        { label: "Netflix today (DHM in practice)", by: "Gibson Biddle", url: "https://gibsonbiddle.medium.com/netflix-today-64fe91e2c693" },
        { label: "Inspired", by: "Marty Cagan", url: "https://www.svpg.com/books/inspired-how-to-create-tech-products-customers-love-2nd-edition/" },
        { label: "The most important thing", by: "Marty Cagan", url: "https://www.svpg.com/the-most-important-thing/" }
      ],
      assignment: "Your 90-day plan: charter, bets, metrics, and what you won't do. Assembled from every earlier assignment."
    }
  ]
};
