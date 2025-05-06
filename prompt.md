# Application Requirements

Create an application consisting of four files: `index.html`, `quiz.html`, `script.js`, and `styles.css`.

## General Requirements

- The name of the App is "Årstal"
- The application should have two pages: `index.html` and `quiz.html`.
- Navigation between the two pages should be possible using links. The navigation must be responsive and work on mobile devices.
  - Use the `navbar-toggler` button and the `collapse` class for the navigation links.
- Use Bootstrap to make the application responsive. Link to these Bootstrap files:
  - `bootstrap.min.css`
  - `bootstrap.bundle.min.js`
- All text displayed to the user must be in **Danish**.

## Page Details

### `index.html`
- The name of this page is "Liste"
- Displays a list of all questions.
- For each question, show the correct answer under the question. Just show the answer. Do not show yearForSorting.
- Questions should be sorted by the `yearForSorting` property.

### `quiz.html`
- The name of this page is "Quiz"
- Displays a quiz with the following functionality:
  - Presents one question at a time with its options.
  - When an answer is clicked:
    - If correct, the background of the answer should turn **green**.
    - If incorrect, the background of the clicked answer should turn **red**, and the correct answer should be highlighted with a **green** background.
  - All questions should be presented in a randomized order.
  - The options for each question should also be displayed in a random order.
  - The font color of the answer must be black.
- Statistics:
  - Show thes statistics:
    - The number of correct answers.
    - The total number of questions answered.
    - The percentage of correctly answered questions.
  - Continuously update and display these statistics on the page.
  - These statistics should be shown with a smaller font.
- Include a button to show the next question:
  - It should be just under the answers and should not be too wide.
  - When the quiz is over, this button should not be shown. Instead, show the text **"Quiz er færdig"**.
- Include a button to restart the quiz.

## Data

Embed this data in the `script.js` file.

### JSON Structure
```json
[
    {
        "question": "When did the Battle of Dybbøl take place?",
        "options": [
            {"option": "17 January 1888", "correct": false},
            {"option": "18 April 1864", "correct": true}
        ],
        "yearForSorting": 1864
    },
    {
        "question": "When did the Danes start resisting the German occupation?",
        "options": [
            {"option": "1945", "correct": false},
            {"option": "1940", "correct": false},
            {"option": "1942", "correct": true}
        ],
        "yearForSorting": 1942
    }
]