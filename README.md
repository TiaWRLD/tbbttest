# tbbttest ❤️
### A relationship experiment with a 0% success rate (so far)

A small web app inspired by Arthur Aron's famous experiment on the 36 questions that are supposed to foster intimacy between two people.

The idea is simple: ask increasingly personal questions, create a comfortable atmosphere, stare into each other's souls for four minutes, and see what happens.

The implementation works.

The results? That's a different story.

**Four participants. Four failed experiments. Zero successful deployments to production.**

Apparently, human relationships are harder to debug than JavaScript.

---

## 🧪 The Experiment

The app guides two people through a series of increasingly intimate questions, loosely inspired by the 36 Questions experiment developed by psychologist Arthur Aron and his colleagues.

The experience is divided into four progressive levels:

- **Level 1 — Breaking the Ice:** Questions about personal preferences, ideal experiences, abilities, and curiosity about life.
- **Level 2 — Getting to Know Each Other:** Questions about meaningful memories, gratitude, friendship, and personal aspirations.
- **Level 3 — Establishing a Connection:** Questions about shared interests, personal appreciation, and what it means to take a relationship further.
- **Level 4 — Emotional Vulnerability:** Questions about regrets, unspoken thoughts, and asking each other something that deserves an honest answer.

Each level introduces a different visual atmosphere and a short simulated loading sequence before moving on to the next set of questions.

Once all the questions have been answered, the experiment reaches its final stages.

### The Four-Minute Challenge

Inspired by the original experiment, participants are invited to look into each other's eyes in silence for four minutes.

A countdown timer keeps track of the experience. Once it reaches zero, a sound notification signals the end of the challenge and unlocks the final stage.

Both participants then get to ask one last question, with a single rule:

**100% honesty.**

The experiment concludes with one final question:

*Now that we're in love, what do we do?* ❤️

Whether the participants actually fall in love is, unfortunately, outside the scope of the JavaScript runtime.

---

## 💻 How It Works

The application is deliberately lightweight. No backend, database, authentication system, or complicated infrastructure is required.

Everything runs directly in the browser.

### Tech Stack

The application is built with **vanilla JavaScript**, without frameworks or external JavaScript libraries.

- **HTML5** — Application structure and entry point.
- **CSS3** — Styling, visual transitions, and progressively darker backgrounds.
- **Vanilla JavaScript** — Application logic, question management, progression between sections, loading sequences, and countdown timer.
- **JSON** — Stores the questions separately from the application logic, making them easier to manage and update.
- **HTML Audio API** — Plays a notification sound when the four-minute countdown finishes.
- **Google Fonts** — Typography for the interface and its terminal-inspired loading screens.

No React, no Vue, no Angular, no unnecessary dependencies.

Just JavaScript, JSON, and questionable romantic decisions.

### Application Flow

The application follows a progressive sequence designed to make each section feel more intense than the previous one.

1. **Initialization:** The application displays its opening screen and prepares the experiment.
2. **Question loading:** Questions are retrieved from a JSON file and presented through the interface.
3. **Section progression:** Participants answer increasingly personal questions, progressing through the different sections.
4. **Increasing loading times:** Every new section has a longer simulated loading sequence than the previous one. The delays are intentional and contribute to the experience.
5. **Progressive darkening:** The background becomes progressively darker as participants advance, visually reinforcing the increasingly intimate nature of the questions.
6. **Four-minute challenge:** Participants are invited to maintain eye contact in silence for four minutes, with a countdown timer tracking the duration.
7. **Final questions:** After the countdown, a notification sound signals the transition to the final stage.
8. **Completion:** The application presents its final question and concludes the experiment.

The experience combines question progression, timed transitions, and visual changes to create a gradual shift from a relatively light atmosphere to a darker, more intimate one.

### Progressive Loading Sequences

One of the application's defining features is its intentionally increasing loading time.

Each new question section takes longer to load than the previous one. These delays are simulated on the client side rather than representing actual network requests or increasingly expensive computations.

During these sequences, the application displays **custom loading logs written in Italian**, giving the impression that something increasingly significant is happening behind the scenes.

The logs are part of the experience: they add personality, build anticipation, and provide a tongue-in-cheek technical narrative as the experiment progresses.

The underlying implementation remains lightweight. The application does not require a backend to generate these messages or manage the loading sequences.

### Progressive Darkening

The visual design follows the same progression as the questions.

As participants move through the sections, **the background becomes progressively darker**.

This gradual transition reinforces the shift from casual conversation to more personal and emotionally intimate topics.

Combined with the increasingly long loading sequences and the custom Italian logs, the changing background creates a sense of escalation throughout the experiment.

In other words, the deeper the questions get, the darker things become.

Whether this is good UX design or foreshadowing is left as an exercise for the reader.
### Project Structure

```text
tbbttest/
├── index.html    # Application entry point
├── style.css     # Styling and visual presentation
├── script.js     # Questions, progression, timer, and UI logic
├── sound.mp3     # End-of-timer notification
└── package.json  # Minimal Node.js project metadata
