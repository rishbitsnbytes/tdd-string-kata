# TDD String Kata

A small React-based String Calculator Kata, built with Test-Driven Development (TDD), Vite, and Vitest.

---

## 🚀 Features

- **String Calculator**: Enter numbers separated by commas, newlines, or custom delimiters to calculate their sum.
- **Custom Delimiters**: Supports custom single or multi-character delimiters as per the classic kata.
- **Error Handling**: Shows errors for invalid input and negative numbers.
- **Modern Stack**: Built with React 19, Vite, and Vitest for fast development and testing.
- **100% Unit Test Coverage**: All logic and UI components are fully tested.

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

```sh
git clone https://github.com/yourusername/tdd-string-kata.git
cd tdd-string-kata
npm install
```

### Running the App

```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Running Tests

```sh
npm run test
```

### Test Coverage

```sh
npm run test:coverage
```
Open the generated `coverage/index.html` in your browser to view the coverage report.

---

## 📦 Project Structure

```
src/
  ├── App.jsx                # Main App component
  ├── StringCalculator.jsx   # String Calculator UI and logic
  ├── utils/
  │     └── add.js           # String sum logic (kata)
  ├── tests/
  │     ├── add.test.js
  │     ├── StringCalculator.test.jsx
  │     └── App.test.jsx
  └── main.jsx               # App entry point
```

---

## 🧪 Kata Rules Supported

- Empty string returns 0
- Single number returns itself
- Two numbers, comma delimited, returns the sum
- Multiple numbers, comma delimited, returns the sum
- New lines between numbers are handled
- Custom delimiters (e.g. `//;\n1;2`)
- Negative numbers throw an error
- Numbers > 1000 are ignored

---

## 📄 License

MIT License

---

## 🙏 Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)

## Deployment - Vercel
 - [Link](https://tdd-string-kata.vercel.app/)

---

Happy TDD-
