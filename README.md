# Student Speaking Assessment Report

**Full Stack Development Assignment**

This project is a functional prototype of a **Student Speaking Assessment Report Page**, inspired by platforms such as **SpeechAce score reports**.

The objective of this assignment is to demonstrate:

* Frontend UI and visualization skills
* Basic backend and data handling
* Logical thinking and clarity of implementation
* Clean and readable code structure

---

## Assignment Scope Covered

* Overall Band Score (out of 9)
* Skill-wise Scores (Pronunciation, Fluency, Vocabulary, Grammar)
* Graphical Representation using Bar Chart
* Descriptive Feedback based on score ranges
* Simple backend API with one student record
* Clean, responsive user interface

Not Included (as per instructions):

* Authentication or login
* Database
* Admin panel
* AI / ML logic
* Deployment

---

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Sumit24C/Student-Assessment-Report.git
cd speaking-assessment-report
```

---

### 3. Start Backend Server

The backend is a simple Express.js server that returns a single student report.

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```
http://localhost:8000
```

---

### 4. Start Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Where the Scores Are Stored

All scores are stored in a simple in-memory object on the backend.

### Backend File Location

```
backend/data.js
```

### Sample Data Structure

```js
export const studentReport = {
  name: "John Doe",
  overallScore: 7,
  skills: {
    pronunciation: 7,
    fluency: 6,
    vocabulary: 8,
    grammar: 7
  }
};
```

---

### API Endpoint

```
GET /api/report
```

### Sample API Response

```json
{
  "success": true,
  "data": {
    "name": "John Doe",
    "overallScore": 7,
    "skills": {
      "pronunciation": 7,
      "fluency": 6,
      "vocabulary": 8,
      "grammar": 7
    }
  }
}
```

The frontend fetches this data and renders:

* Overall band score
* Skill-wise bar chart
* Skill breakdown
* Descriptive feedback

---

## Graphical Representation

The project uses **Recharts BarChart** to display skill scores visually.

Displayed Skills:

* Pronunciation
* Fluency
* Vocabulary
* Grammar

Each skill is scored on a scale of **0 to 9**, aligned with IELTS-style scoring.

---

## How Feedback Logic Works

Descriptive feedback is generated automatically based on the **overall band score**.

### Feedback Rules

```
Score ≥ 8
→ Excellent performance with strong control.

Score between 6–7
→ Good performance with minor inaccuracies.

Score < 6
→ Needs improvement.
```

### Implementation Location

```
frontend/src/components/Feedback.jsx
```

### Logic Implementation

```js
if (score >= 8) {
  level = "Excellent";
  message = "You demonstrate strong fluency, pronunciation, and grammatical control.";
} else if (score >= 6) {
  level = "Good";
  message = "Your speaking is generally effective, with some minor inaccuracies.";
} else {
  level = "Needs Improvement";
  message = "Focus on pronunciation clarity, sentence structure, and fluency.";
}
```

Feedback updates automatically whenever the score values change.

---

## UI Design Overview

* Assessment-style layout similar to official test reports
* Left-aligned bar chart for quick visual comparison
* Right-aligned detailed skill breakdown
* Clear score hierarchy and spacing
* Fully responsive for smaller screens

---

## Tech Stack Used

Frontend:

* React
* Recharts
* CSS (Grid and Flexbox)

Backend:

* Node.js
* Express.js
* In-memory data source

---

## Evaluation Notes

This submission focuses on:

* Practical understanding over complexity
* Clear UI presentation
* Correct data flow
* Simple and maintainable logic

The project meets all primary functional requirements described in the assignment.

---
