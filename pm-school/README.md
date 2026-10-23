# Maro PM School

A two-week, ~30-minutes-a-day product management course built around the actual job: making **Maro for Schools** and **Maro Secure Links** easier to use, so schools onboard themselves and support requests go down.

Every day has a reading, a video or podcast clip, a case study, a quiz, and a written assignment about Maro. The assignments add up to your playbook, and on Day 14 the playbook becomes your 90-day plan.

## Run it

It's a static site with no build step:

```sh
cd pm-school
python3 -m http.server 8000   # then open http://localhost:8000
```

Progress, quiz answers and writing are saved in your browser's localStorage. Use **Playbook → Copy playbook as text** to back them up or share them.

## Curriculum

The two numbers that drive every lesson: **time to first screening** for a new school, and **support contacts per active school per month**.

### Week 1: See the product the way users do

| Day | Lesson | Faculty | Assignment |
|---|---|---|---|
| 1 ✅ | The job is outcomes, not features | Nikita Bier, Shreyas Doshi | Maro product charter v0 |
| 2 ✅ | Know the job your users hire Maro for (Jobs to Be Done) | Clayton Christensen, Bob Moesta, Kathy Sierra | Job map for every Maro user type |
| 3 | Talk to users without fooling yourself | Rob Fitzpatrick, Teresa Torres | Counselor and parent interview guides |
| 4 | Your support inbox is a product spec | Rahul Vohra, Paul Graham | Tag 50 tickets by root cause |
| 5 | Measure it: activation, funnels, the aha moment | Lenny Rachitsky, Elena Verna | Maro metric tree |
| 6 | Choose: prioritization and saying no | Shreyas Doshi, Marty Cagan | Ranked top 10 with RICE + three "not now" replies |
| 7 | Teardown day: onboarding, screen by screen | Nikita Bier | Full Maro onboarding teardown with tap count |

### Week 2: Make it obvious, then make it scale

| Day | Lesson | Faculty | Assignment |
|---|---|---|---|
| 8 | Don't make me think: usability basics | Steve Krug, Nikita Bier | Heuristic audit of the counselor dashboard |
| 9 | Onboarding that runs without you | Stewart Butterfield, Kathy Sierra, Rahul Vohra | Kickoff-to-first-screening flow redesign |
| 10 | Secure Links: trust on a parent's phone | Nikita Bier (+ GOV.UK, ClassDojo case) | Secure Link journey redesign, English + Spanish |
| 11 | Write it down: specs engineers love | Ryan Singer, Marty Cagan | Shaped pitch for your #1 problem |
| 12 | Ship fast, learn faster | Nikita Bier, Rahul Vohra | Experiment plan for one onboarding change |
| 13 | Help that helps itself | Elena Verna, Steve Krug | Five help articles / in-app fixes for top tickets |
| 14 | Strategy and your 90-day plan | Gibson Biddle, Shreyas Doshi, Nikita Bier | 90-day plan assembled from the playbook |

✅ = fully built. Other days show their outline and source links in the app; ask Claude to "Build Day N of Maro PM School" to turn one into a full lesson.

## Files

- `index.html`: page shell
- `styles.css`: design tokens and layout (light and dark)
- `curriculum.js`: all course content. Day outlines, faculty, and full lessons live here.
- `app.js`: routing (`#home`, `#day1`…`#day14`, `#playbook`, `#faculty`), progress, quizzes, XP and streaks
