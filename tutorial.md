# Tic-Tac-Toe Web App — Beginner's Tutorial

Welcome! This tutorial walks you through a complete two-player Tic-Tac-Toe game built with only three web technologies: **HTML**, **CSS**, and **JavaScript**. No frameworks, no build tools, no installation required.

The full project is available on GitHub: [ktuladhar/tic-tac-toe-game](https://github.com/ktuladhar/tic-tac-toe-game). You can also **[play the live demo](https://ktuladhar.github.io/tic-tac-toe-game/)** in your browser without downloading anything.

By the end, you will understand:

- What each technology does and how they work together
- How the game board is built in HTML
- How the visual design is created with CSS
- How the game rules are implemented in JavaScript
- How to run and experiment with the project yourself

---

## Table of Contents

1. [Technology Summary](#technology-summary)
2. [What We Are Building](#what-we-are-building)
3. [Project Structure](#project-structure)
4. [How to Run the Game](#how-to-run-the-game)
5. [How to Play](#how-to-play)
6. [Part 1: HTML — The Structure](#part-1-html--the-structure)
7. [Part 2: CSS — The Appearance](#part-2-css--the-appearance)
8. [Part 3: JavaScript — The Logic](#part-3-javascript--the-logic)
9. [How the Three Files Work Together](#how-the-three-files-work-together)
10. [The Game Flow Step by Step](#the-game-flow-step-by-step)
11. [Key Concepts Glossary](#key-concepts-glossary)
12. [Ideas to Try on Your Own](#ideas-to-try-on-your-own)
13. [Further Learning](#further-learning)

---

## Technology Summary

Every website you visit is built from a small set of core technologies. Our Tic-Tac-Toe game uses three of them.

### HTML (HyperText Markup Language)

**What it is:** The skeleton of a webpage. HTML defines *what* appears on the page — headings, paragraphs, buttons, images, and containers.

**Analogy:** Think of HTML as the blueprint of a house. It marks where the rooms, doors, and windows go, but it does not paint the walls or wire the electricity.

**In our project:** HTML creates the game title, the 3×3 grid of nine clickable cells, the status message ("Player X's turn"), and the Reset button.

---

### CSS (Cascading Style Sheets)

**What it is:** The styling layer. CSS controls *how* the page looks — colors, fonts, spacing, layout, animations, and hover effects.

**Analogy:** CSS is the interior designer. It chooses paint colors, furniture placement, lighting, and decorative details.

**In our project:** CSS centers everything on the screen, gives the board a dark modern theme, adds hover effects when you move your mouse over empty cells, highlights the winning line, and makes the layout work on phones and desktops.

---

### JavaScript

**What it is:** The programming language of the web. JavaScript makes pages *interactive* — it responds to clicks, updates text, checks rules, and changes behavior in real time.

**Analogy:** JavaScript is the brain of the application. It remembers whose turn it is, enforces the rules of Tic-Tac-Toe, and knows when someone has won or the game is a draw.

**In our project:** JavaScript handles every game action: placing X or O, switching turns, detecting wins and draws, blocking illegal moves, and resetting the board.

---

### How They Fit Together

```
┌─────────────────────────────────────────────────────────┐
│                        Browser                          │
│                                                         │
│   HTML  ──►  Defines the board, buttons, and text       │
│     │                                                   │
│     ▼                                                   │
│   CSS   ──►  Makes it look polished and responsive      │
│     │                                                   │
│     ▼                                                   │
│   JS    ──►  Runs the game rules when you click         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

| Technology | Question it answers        | File in this project |
|------------|----------------------------|----------------------|
| HTML       | What is on the page?       | `index.html`  |
| CSS        | How does it look?          | `styles.css`  |
| JavaScript | What happens when I click? | `script.js`   |

These three files are linked together in `index.html`:

- Line 10 links the stylesheet: `<link rel="stylesheet" href="styles.css">`
- Line 47 links the script: `<script src="script.js"></script>`

When you open `index.html` in a browser, it loads all three files automatically.

### Tech stack at a glance

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Structure  | HTML5                                   |
| Styling    | CSS3 (Grid, Flexbox, custom properties) |
| Logic      | Vanilla JavaScript                      |

No frameworks, build tools, or package managers are required for the game itself.

---

## What We Are Building

A **single-page** Tic-Tac-Toe game for two human players sitting at the same computer (or passing a device back and forth).

![Tic-Tac-Toe game screenshot](docs/screenshot.png)

The game uses a dark theme with coral **X** marks, teal **O** marks, and a gold accent for wins and highlights. Player cards glow to show whose turn it is.

**Features:**

- A 3×3 grid where players alternate placing **X** and **O**
- Player X always goes first
- A status line showing whose turn it is, who won, or if the game is a draw
- Visual highlight of the active player and the winning three cells
- A **Reset Game** button to start over
- A responsive design that works on different screen sizes
- Accessibility features: keyboard-focusable cells, ARIA labels, and live status updates for screen readers

**What we are *not* building (yet):**

- Online multiplayer over the internet
- A computer opponent (AI)
- Score tracking across multiple rounds

Those are great extensions you can add later (see [Ideas to Try on Your Own](#ideas-to-try-on-your-own)).

---

## Project Structure

Your project folder should look like this:

```
tic_tac_toe_game/
├── index.html          ← Page structure
├── styles.css          ← Visual design
├── script.js           ← Game logic
├── docs/
│   └── screenshot.png  ← Preview image for the README
├── .github/
│   └── workflows/
│       └── deploy.yml  ← GitHub Pages deployment
├── LICENSE             ← MIT license
├── tutorial.md         ← This file
└── README.md           ← Project overview and screenshot
```

The three core game files (`index.html`, `styles.css`, `script.js`) each have one clear job. Keeping them separate is a common and healthy practice — even in small projects. The other files support documentation, deployment, and licensing.

---

## How to Run the Game

### Option 1: Open the file directly (simplest)

1. Clone or download the project from [GitHub](https://github.com/ktuladhar/tic-tac-toe-game), or use the folder you already have locally.
2. Open your file explorer (Windows Explorer, Finder on Mac, etc.).
3. Navigate to the `tic_tac_toe_game` folder.
4. Double-click `index.html`.
5. It should open in your default web browser (Chrome, Firefox, Edge, Safari, etc.).

You can now play the game!

### Option 2: Use a local development server (recommended for learning)

Some browser features work better when files are served over `http://` rather than opened as `file://`. To start a simple server:

1. Open a terminal in the project folder.
2. Run:

   ```bash
   npx serve .
   ```

3. Open the URL shown in the terminal (usually `http://localhost:3000`).

> **Tip:** If `npx` is not recognized, you may need to install [Node.js](https://nodejs.org/) first. Option 1 still works fine for this project.

### Option 3: Play online (no setup)

If you do not want to run anything locally, open the hosted version:

**[https://ktuladhar.github.io/tic-tac-toe-game/](https://ktuladhar.github.io/tic-tac-toe-game/)**

This version is deployed automatically from the GitHub repository using GitHub Pages.

> **Note:** An internet connection is needed on first load to fetch Google Fonts (Fraunces and Outfit).

---

## How to Play

1. Player **X** goes first.
2. Click an empty cell to place your mark.
3. Players alternate until someone gets three in a row, or the board is full (a draw).
4. Click **Reset Game** to start over.

The status line above the board always tells you whose turn it is, who won, or if the game ended in a draw. The active player's card is highlighted with a colored glow.

---

## Part 1: HTML — The Structure

Open `index.html` in a text editor (VS Code, Notepad++, Cursor, etc.).

### The basic document skeleton

Every HTML page starts with a standard structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Metadata: title, fonts, CSS link -->
</head>
<body>
  <!-- Visible content -->
</body>
</html>
```

- `<!DOCTYPE html>` tells the browser this is a modern HTML5 document.
- `<html lang="en">` wraps the entire page; `lang="en"` helps screen readers and search engines.
- `<head>` holds information *about* the page (not shown directly to users).
- `<body>` holds everything the user actually sees.

### Linking CSS and fonts

Inside `<head>`:

```html
<link rel="stylesheet" href="styles.css">
```

This tells the browser to download and apply our stylesheet.

We also load two Google Fonts — **Fraunces** (decorative, for titles and X/O marks) and **Outfit** (clean, for body text). Fonts are loaded from the internet, so you need an internet connection the first time you open the page.

### Semantic HTML elements

We use meaningful tags instead of generic `<div>` everywhere:

| Element    | Purpose in our game                          |
|------------|----------------------------------------------|
| `<main>`   | Wraps the primary content of the page        |
| `<header>` | Contains the title and subtitle              |
| `<h1>`     | Main heading: "Tic-Tac-Toe"                  |
| `<p>`      | Paragraph text (subtitle, status message)    |
| `<section>`| Groups related content (player scoreboard)   |
| `<button>` | Clickable cells and the Reset button         |

**Semantic HTML** means using tags that describe *what* content is, not just *how* it looks. This helps accessibility tools (like screen readers) understand the page.

### The game board

The board is a `<div>` containing nine `<button>` elements:

```html
<div class="board" id="board" role="grid" aria-label="Tic-tac-toe board">
  <button class="cell" type="button" data-index="0" ...></button>
  <button class="cell" type="button" data-index="1" ...></button>
  <!-- ... cells 2 through 8 ... -->
</div>
```

Important attributes explained:

- **`class="cell"`** — A label used by CSS and JavaScript to style and find all cells. Multiple elements can share a class.
- **`id="board"`** — A unique identifier. Only one element on the page can have `id="board"`. JavaScript uses this to grab the board element.
- **`data-index="0"`** — A custom data attribute. We store the cell's position (0–8) here so JavaScript knows which square was clicked.
- **`type="button"`** — Prevents the button from accidentally submitting a form (good practice even without a form).
- **`role="grid"`** and **`role="gridcell"`** — Accessibility hints for assistive technology.
- **`aria-label="Cell 1, empty"`** — Describes the cell for screen readers; JavaScript updates this when X or O is placed.

### Why buttons instead of `<div>` for cells?

Buttons are naturally:

- **Focusable** — keyboard users can tab to them
- **Clickable** — they fire click events without extra code
- **Disabled** — we can set `disabled` to block further clicks on a played cell

This is a small but important accessibility win.

### The status display

```html
<p class="status" id="status" role="status" aria-live="polite">Player X's turn</p>
```

- `id="status"` lets JavaScript update the message.
- `aria-live="polite"` tells screen readers to announce changes without interrupting the user.

### Connecting JavaScript

At the bottom of `<body>`:

```html
<script src="script.js"></script>
```

Placing the script at the end of `<body>` ensures all HTML elements exist before JavaScript tries to find them.

---

## Part 2: CSS — The Appearance

Open `styles.css`. CSS uses **selectors** to target HTML elements and **properties** to change how they look.

### CSS reset

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

Browsers apply slightly different default spacing to elements. This reset gives us a consistent starting point.

### CSS variables (`:root`)

```css
:root {
  --bg-deep: #0f1419;
  --accent-x: #ff6b4a;
  --accent-o: #4ecdc4;
  /* ... more variables ... */
}
```

**CSS variables** (also called custom properties) let you define colors and values once and reuse them everywhere. Change `--accent-x` in one place and every X-related style updates.

### Centering the page

```css
body {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

- `min-height: 100dvh` — at least the full height of the viewport (the visible screen area). `dvh` is a modern unit that works well on mobile browsers.
- `display: flex` — turns the body into a flex container.
- `align-items: center` and `justify-content: center` — center content vertically and horizontally.

### The 3×3 grid layout

```css
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  aspect-ratio: 1;
}
```

**CSS Grid** is perfect for our board:

- `grid-template-columns: repeat(3, 1fr)` creates three equal-width columns.
- Nine cells flow into three rows automatically.
- `aspect-ratio: 1` keeps the board perfectly square.
- `gap: 6px` adds space between cells.

### Hover effects

```css
.cell:not(.taken):not(:disabled):hover {
  transform: scale(1.04);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
}
```

This selector means: "Style a cell on hover, but only if it is not taken and not disabled."

- `transform: scale(1.04)` — slightly enlarges the cell.
- `box-shadow` — adds a subtle shadow for depth.

The `:not()` pseudo-class is a powerful way to apply styles only in certain conditions.

### Styling X and O

When JavaScript adds the class `x` or `o` to a cell, CSS takes over:

```css
.cell.x {
  color: var(--accent-x);
  text-shadow: 0 0 24px var(--accent-x-glow);
  animation: popIn 0.3s ...;
}

.cell.o {
  color: var(--accent-o);
  /* ... */
}
```

The **popIn** animation makes new marks appear with a small bounce — a satisfying micro-interaction.

### Active player highlight

```css
.player-card.player-x.active {
  border-color: var(--accent-x);
  box-shadow: 0 0 20px var(--accent-x-glow);
}
```

JavaScript toggles the `active` class on the current player's card. CSS handles the glow effect.

### Responsive design

```css
@media (max-width: 360px) {
  .scoreboard {
    flex-direction: column;
  }
}
```

A **media query** applies styles only when the screen is narrow (small phones). The player cards stack vertically instead of sitting side by side.

We also use `clamp()` for font sizes:

```css
font-size: clamp(2rem, 6vw, 2.75rem);
```

This means: "Use at least 2rem, prefer 6% of viewport width, but never more than 2.75rem." Text scales smoothly across screen sizes.

---

## Part 3: JavaScript — The Logic

Open `script.js`. This is where the game rules live.

### Representing the board

Instead of reading the DOM every time, we keep a JavaScript **array** that mirrors the board state:

```javascript
let board = Array(9).fill(null);
```

This creates:

```
[ null, null, null, null, null, null, null, null, null ]
```

Each index (0–8) maps to a cell:

```
 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8
```

- `null` means the cell is empty.
- `"X"` or `"O"` means a player has played there.

We also track:

```javascript
let currentPlayer = "X";   // Whose turn it is
let gameActive = true;     // Whether the game is still going
```

### Getting references to HTML elements

```javascript
const boardEl = document.getElementById("board");
const statusEl = document.getElementById("status");
const cells = Array.from(boardEl.querySelectorAll(".cell"));
```

- `document.getElementById("board")` finds the element with `id="board"`.
- `querySelectorAll(".cell")` finds every element with `class="cell"`.
- `Array.from(...)` converts the result into a real array so we can use array methods like `forEach`.

We store these in **constants** (`const`) because the references never change — we always talk to the same DOM elements.

### Winning combinations

```javascript
const WINNING_COMBOS = [
  [0, 1, 2],  // top row
  [3, 4, 5],  // middle row
  [6, 7, 8],  // bottom row
  [0, 3, 6],  // left column
  [1, 4, 7],  // middle column
  [2, 5, 8],  // right column
  [0, 4, 8],  // diagonal \
  [2, 4, 6],  // diagonal /
];
```

There are exactly eight ways to win in Tic-Tac-Toe. Storing them upfront makes checking for a winner straightforward.

### Checking for a winner

```javascript
function checkWinner() {
  for (const [a, b, c] of WINNING_COMBOS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], combo: [a, b, c] };
    }
  }
  return null;
}
```

For each winning line, we ask:

1. Is cell `a` occupied? (`board[a]` is truthy — not `null`)
2. Are all three cells the same?

If yes, we return the winner (`"X"` or `"O"`) and which three cells won. If no line matches, we return `null`.

### Checking for a draw

```javascript
function isDraw() {
  return board.every((cell) => cell !== null);
}
```

A draw happens when every cell is filled and nobody won. The `.every()` method returns `true` only if *all* cells pass the test (not empty).

### Handling a cell click

This is the heart of the game:

```javascript
function handleCellClick(event) {
  const cell = event.currentTarget;
  const index = Number(cell.dataset.index);

  if (!gameActive || board[index] !== null) {
    return;  // Ignore illegal clicks
  }

  // 1. Update internal state
  board[index] = currentPlayer;

  // 2. Update the visual cell
  cell.textContent = currentPlayer;
  cell.classList.add("taken", currentPlayer.toLowerCase());
  cell.disabled = true;

  // 3. Check win or draw
  const result = checkWinner();
  if (result) { /* handle win */ return; }
  if (isDraw()) { /* handle draw */ return; }

  // 4. Switch turns
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateStatus(`Player ${currentPlayer}'s turn`);
}
```

**Step-by-step:**

1. Figure out which cell was clicked using `data-index`.
2. If the game is over or the cell is taken, exit early (`return`).
3. Record the move in the `board` array.
4. Show X or O on screen and disable the button.
5. Check for a win or draw.
6. If the game continues, swap the player and update the status text.

The **ternary operator** `condition ? valueA : valueB` is shorthand for if/else:

```javascript
currentPlayer = currentPlayer === "X" ? "O" : "X";
// If current player is X, switch to O; otherwise switch to X.
```

### Event listeners

```javascript
cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
resetBtn.addEventListener("click", resetGame);
```

An **event listener** waits for something to happen (a click) and then runs a function. This is how JavaScript connects to user actions.

- Each cell listens for `"click"` and calls `handleCellClick`.
- The reset button listens for `"click"` and calls `resetGame`.

### Resetting the game

```javascript
function resetGame() {
  board = Array(9).fill(null);
  currentPlayer = "X";
  gameActive = true;

  cells.forEach((cell, index) => {
    cell.textContent = "";
    cell.className = "cell";
    cell.disabled = false;
    cell.setAttribute("aria-label", `Cell ${index + 1}, empty`);
  });

  updateStatus("Player X's turn");
  updateActivePlayer();
}
```

Reset clears all state and puts the visual board back to its starting condition.

---

## How the Three Files Work Together

Here is what happens when a player clicks an empty cell:

```
User clicks cell
       │
       ▼
┌──────────────┐
│  JavaScript  │  Reads data-index, checks board array
│  script.js   │  Updates board[index] = "X" or "O"
└──────┬───────┘
       │
       ├──► Changes cell.textContent to "X" or "O"     (HTML content)
       ├──► Adds class "x" or "o" to the cell         (triggers CSS color + animation)
       ├──► Sets cell.disabled = true                 (blocks further clicks)
       ├──► Updates #status text                      (HTML content)
       └──► Toggles .active on player cards           (triggers CSS glow)
```

**Key insight:** JavaScript rarely changes styles directly. Instead, it changes **classes** and **text content**, and CSS responds to those changes. This separation keeps code clean.

---

## The Game Flow Step by Step

### Starting a new game

1. Page loads → `index.html` renders the board.
2. `styles.css` applies the dark theme and layout.
3. `script.js` runs → sets `currentPlayer` to `"X"`, highlights Player 1's card.
4. Status shows: **"Player X's turn"**.

### During play

1. Player X clicks an empty cell.
2. JavaScript places X, disables that cell.
3. No winner yet, no draw → turn switches to O.
4. Player O clicks → same process.
5. Turns alternate until someone wins or the board fills up.

### When someone wins

1. `checkWinner()` finds three matching cells.
2. `gameActive` becomes `false` — further clicks are ignored.
3. Winning cells get the `winning` CSS class (gold border).
4. Status shows: **"Player X wins!"** (or O), colored to match the winner.

### When it is a draw

1. All nine cells are filled.
2. `checkWinner()` returns `null`.
3. `isDraw()` returns `true`.
4. Status shows: **"It's a draw!"**

### Reset

1. User clicks **Reset Game**.
2. `resetGame()` clears the array, re-enables all cells, removes X/O text and classes.
3. Game returns to the starting state.

---

## Key Concepts Glossary

| Term | Simple definition |
|------|-------------------|
| **DOM** | Document Object Model — the browser's live representation of your HTML. JavaScript can read and change it. |
| **Element** | A single HTML tag on the page, like a button or paragraph. |
| **Class** | A reusable label on elements (e.g. `class="cell"`). Used by CSS for styling and JS for selection. |
| **ID** | A unique label for one element (e.g. `id="status"`). |
| **Array** | An ordered list of values, accessed by index: `board[0]`, `board[1]`, etc. |
| **Function** | A reusable block of code that performs a task, like `checkWinner()`. |
| **Event** | Something that happens in the browser — a click, key press, page load, etc. |
| **Event listener** | Code that waits for an event and runs a function when it occurs. |
| **Selector** | A CSS pattern that targets elements, like `.cell` or `#board`. |
| **Flexbox** | A CSS layout system for arranging items in a row or column. |
| **Grid** | A CSS layout system ideal for two-dimensional layouts like our 3×3 board. |
| **Media query** | A CSS rule that applies only at certain screen sizes. |
| **Variable** | A named container for a value that can change, like `currentPlayer`. |
| **Constant** | A named value that should not be reassigned, like `WINNING_COMBOS`. |

---

## Ideas to Try on Your Own

Once you understand the basics, try these modifications to practice:

### Easy

1. **Change colors** — Edit the CSS variables in `:root` to create your own theme.
2. **Change the title** — Update the `<h1>` text in `index.html`.
3. **Add a sound** — Play a short audio clip on win using `new Audio("sound.mp3").play()`.

### Medium

4. **Track scores** — Add counters for how many games X and O have won across resets.
5. **Play again prompt** — Show a message overlay when the game ends instead of only updating the status line.
6. **Keyboard support** — Let players press number keys 1–9 to place marks.

### Advanced

7. **Computer opponent** — Add a single-player mode where JavaScript picks moves for O.
8. **Local storage** — Save win counts in `localStorage` so they persist after closing the browser.
9. **Animated winning line** — Draw a line through the three winning cells with CSS or SVG.

When experimenting, change one thing at a time and refresh the browser to see the effect. If something breaks, undo your last change and try again.

---

## Further Learning

### Official documentation (free)

- [MDN HTML basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
- [MDN CSS basics](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
- [MDN JavaScript basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

### Skills to build next

1. **Developer tools** — Press `F12` in your browser to inspect elements, see console errors, and experiment with CSS live.
2. **Git** — Version control to save snapshots of your code as you learn.
3. **Accessibility** — Learn about ARIA attributes, keyboard navigation, and color contrast.
4. **A framework** — Once comfortable with vanilla JS, explore React, Vue, or Svelte for larger apps.

### Browser support

The game works in all modern browsers that support CSS Grid and ES6 JavaScript, including Chrome, Firefox, Safari, and Edge.

---

## Quick Reference — File Responsibilities

| File | Responsibility | Key parts |
|------|----------------|-----------|
| `index.html` | Structure | 9 board buttons, status `<p>`, reset button, script/style links |
| `styles.css` | Design | CSS variables, grid layout, hover/active/win states, responsive rules |
| `script.js` | Behavior | Board array, win detection, click handler, reset function |
| `README.md` | Overview | Features, screenshot, live demo link, getting started |
| `tutorial.md` | Learning guide | Step-by-step explanations for beginners |
| `docs/screenshot.png` | Documentation | Preview image shown in the README |
| `.github/workflows/deploy.yml` | Deployment | Automates publishing the game to GitHub Pages |

---

## Summary

You now have a working Tic-Tac-Toe game built with the three foundational technologies of the web:

- **HTML** provides the structure — the grid, text, and buttons.
- **CSS** provides the experience — layout, color, motion, and responsiveness.
- **JavaScript** provides the intelligence — turns, rules, win/draw detection, and reset.

The pattern you learned here — structure, style, and behavior in separate files — scales from tiny games to large applications. Master these three, and you have the foundation for almost anything on the web.

### Where to go from here

- Read the **[README.md](README.md)** for a quick project overview
- Play the **[live demo](https://ktuladhar.github.io/tic-tac-toe-game/)** and compare it to your local copy
- Browse the source on **[GitHub](https://github.com/ktuladhar/tic-tac-toe-game)** to see how the project is organized

Happy coding!
