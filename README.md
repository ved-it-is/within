# Within

React + Vite emotional-intelligence learning prototype. Plain CSS; no backend.

## Run locally

```sh
npm install
npm run dev
npm run build
npm test
```

If this computer's npm launcher reports a missing roaming npm-cli.js, invoke the installed CLI directly:

```powershell
node 'C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js' run dev
```

## Content database

**Edit `src/data/database.js` for all chapter and question content.** It is a local JavaScript content dictionary, not a server database. It contains:

- 31 chapters and their stage metadata.
- Five unscored introductory prompts.
- 700 keyed Arcade questions: 100 in each of seven practice domains.
- The 310 chapter practice questions are referenced by Arcade; another 390 items expand the bank to 700. They are not duplicated in the database.
- Historical set assignments retained as content metadata; Arcade draws from all 700 questions.
- Stable question IDs, choices, answer keys, explanations, scoring eligibility, review status, framework references, and a field dictionary.

The bank contains action questions and understanding questions paired around situations: 700 question items does not mean 700 unrelated situations. The seven Arcade domains are self-awareness, perspective, emotional regulation, communication, empathy, resilience, and thoughtful decisions. These are curriculum categories, not a validated seven-factor EQ model.

`chapters.js`, `chapterQuestions.js`, and `questions.js` are compatibility views of the database. Do not maintain a second copy of content there. Preserve question IDs while editing wording; answer-key or construct changes need a versioned scoring migration before treating historical results as comparable.

## Interface and behaviour

- `src/App.jsx`: homepage, hash navigation, and access gate.
- `src/components/Sidebar.jsx`: Home, Explore, and Arcade navigation; the latter two unlock after the five introductory situations.
- `src/components/GlobeSection.jsx`: illustrative globe perspectives.
- `src/components/JourneyExperience.jsx`: introduction with a 1-second reply pause and 1.4-second results pause. Introductory prompts remain unscored.
- `src/components/ExplorePage.jsx`: chapter catalogue, search, filters, and recommendations.
- `src/components/ChapterPractice.jsx`: ten-question chapter loop. No writing exercises or separate lesson screens.
- `src/components/ArcadePage.jsx`: immediate endless random practice, points, skill scores, coverage, and scoring explanation.
- `src/data/practiceSession.js`: repeat queue, first choices, outcomes, and restore validation.
- `src/data/progress.js`: saved chapter progress and migration from the older reading format.
- `src/data/arcade.js`: Arcade records, score calculations, and independent persistence.
- `src/styles.css`: responsive styling.

A matching response finishes a question. A mismatch returns the same question to the back of the remaining queue after feedback. “I don’t know” reveals the key and retires the question without adding a replacement. Pausing or refreshing preserves pending feedback and the queue. Arcade inserts retries after three other questions where available. On exhausting the queue, it shuffles the bank again, excluding revealed questions. If all 700 are revealed, it stops without adding replacements.

## Scores based on recorded answers

Accuracy = correct first answers / attempted first answers × 100, rounded to the nearest whole percent. “I don’t know” is excluded from this denominator and reported separately. No attempted answers means no percentage, not a manufactured zero.

Lifetime points award 10 points per question answered correctly on its first recorded Arcade response. Corrections and replays cannot add lifetime points for the same question. Lifetime skill accuracy keeps the original Arcade response. Skill cards show correct/attempted counts and coverage out of 100.

For example, one correct answer, one mismatch, and five unknowns give 50% accuracy, 10 lifetime points, and 7/700 encountered. Correcting the mismatch later does not rewrite the original score. These are authored-question performance scores, not psychometrically validated EQ measurements. Exposure to shared chapter content may improve performance.

## Local storage and privacy

- Chapter records: `within-learning-v2`. Access requires a valid stored response to every introductory question; old bare unlock flags are ignored. Earlier reading completions retain a “Previously explored” label.
- Arcade records: `within-arcade-v2`, separate from chapter progress; v1 first-answer scores are migrated.
- Records contain question IDs, response indices, first choices, outcomes, attempt counts, queues, and completion.
- Homepage feeling text is not stored. No written chapter reflection remains.
- No account, backend, or cross-device sync is connected. Clearing browser data removes progress. Storage failures display a notice and allow in-memory practice.

## Verification and content limitations

`npm test` covers content cardinality and references, full 700-question cycles, per-skill denominators, zero-data states, unknown retirement, retries, replay inflation prevention, persistence, migration, and the original chapter flow. The browser walkthrough checks scored play, refresh, completion, and mobile navigation.

The 700-question database is currently bundled with the client. Vite reports a large-chunk advisory; the build succeeds. Content splitting is a future performance improvement as the bank grows.

All questions are educational drafts with editorial answer keys, not independent expert validation. Qualified content review and user testing remain necessary before making effectiveness claims. Framework references do not imply endorsement. The Steve Jobs photo is served locally from `public/images/steve-jobs.jpg`, credited to Matthew Yohe (crop by Nagae Iku), CC BY-SA 3.0, with source and license links displayed beside the story.


### Account and navigation updates
- `#login` and `#signup` provide email/password sign-in and account creation. Existing email-link users can use `#link` without setting a password.
- Email confirmation and allowed redirect URLs are controlled by the existing Supabase project. The production site URL must be allowed there.
- Each signed-in account loads its own progress before rendering the app. All five introductory responses unlock Explore and Arcade; returning accounts resume without repeating the introduction. Guest progress stays separate.
- Sign-out is independent of progress saving. Pending progress is cached per account and recovered on the next sign-in on the same browser; background retries require an active session.
- Navigation stays on the left on mobile and desktop. The menu button expands or minimizes it; Escape closes it. Desktop preference is saved locally.
- `npm test` includes completion round-trip, account isolation and unsuccessful-save and conflict recovery checks. Email delivery and the deployed database still require a real-account smoke test.
