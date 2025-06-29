# 🧪 TDD String Calculator Kata

A small, fast, and modern **React + Vite** app implementing the classic **String Calculator Kata**, fully built using **Test-Driven Development (TDD)** and covered with unit tests using **Vitest** and **React Testing Library**.

---

## 🚀 Features

* ✅ String calculator based on comma, newline, and custom delimiters
* ✅ Custom delimiters of any length (`//[***]\n1***2***3`)
* ✅ Multiple custom delimiters (`//[*][%]\n1*2%3`)
* ✅ Ignores numbers > 1000
* ✅ Throws error for negative numbers with full list
* ✅ Built with modern stack (React 19, Vite, Vitest)
* ✅ **100% unit test coverage**
* ✅ Easily deployable (Vercel compatible)

---

## 🛠️ Getting Started

### ⚙️ Prerequisites

* Node.js (v18+ recommended)
* npm or pnpm

### 📦 Installation

```bash
git clone https://github.com/rishbitsnbytes/tdd-string-kata.git
cd tdd-string-kata
npm install
```

---

### ▶️ Running the App

```bash
npm run dev
```

Open in your browser: [http://localhost:5173](http://localhost:5173)

---

### 🧪 Running Tests

```bash
npm run test
```

### 📈 Test Coverage

```bash
npm run test:coverage
```

Open the generated report at:

```
coverage/index.html
```

---

## 📁 Project Structure

```
src/
├── App.jsx                     # Main React component
├── main.jsx                    # Entry point
├── StringCalculator.jsx        # Calculator UI
├── utils/
│   └── add.js                  # TDD-based logic implementation
├── tests/
│   ├── add.test.js             # Unit tests for add()
│   ├── StringCalculator.test.jsx
│   └── App.test.jsx
```

---

## 🧪 Kata Rules Implemented

* `""` → `0`
* `"1"` → `1`
* `"1,2"` → `3`
* `"1\n2,3"` → `6`
* `"//;\n1;2"` → `3`
* `"//[***]\n1***2***3"` → `6`
* `"//[*][%]\n1*2%3"` → `6`
* Negative numbers throw: `Negative numbers are not allowed: -2,-5`
* Numbers > 1000 are ignored

---

## 📦 Dev Dependencies

All testing-related libraries are added under **`devDependencies`** only:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom @vitejs/plugin-react @vitest/coverage-v8
```

| Package                     | Purpose                                 |
| --------------------------- | --------------------------------------- |
| `vitest`                    | Fast unit test runner                   |
| `@testing-library/react`    | React component testing utilities       |
| `@testing-library/jest-dom` | Additional DOM matchers for assertions  |
| `jsdom`                     | Simulated browser environment for tests |
| `@vitejs/plugin-react`      | React plugin for Vite                   |
| `@vitest/coverage-v8`       | V8 code coverage provider for Vitest    |

---

## 📜 Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "test": "vitest",
  "test:coverage": "vitest run --coverage"
}
```

---

## 🌐 Deployment

Deployed here:
🔗 [Live App](https://tdd-string-kata.vercel.app/)

---

## 📄 License

MIT License

---

Happy TDDing! 🧪🚀
