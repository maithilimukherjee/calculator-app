# react native scientific calculator 

a dark-mode, ios-inspired scientific calculator built using **react native + expo**.  
supports advanced mathematical expressions with clean ui and robust input handling.

---

## features

- basic arithmetic: `+  -  *  /`
- exponentiation using `^`
- natural logarithm `ln(x)`
- mathematical constant `e`
- percentage calculations (calculator-style, not modulo)
- parentheses support
- expression evaluation using `mathjs`
- dark ui inspired by ios calculator
- fully custom reusable button component

---

## technical highlights

- built using **react native with expo**
- custom `CalcButton` component for consistent ui & behavior
- expression parsing with safety checks:
  - prevents invalid decimals
  - trims trailing operators before evaluation
  - balances parentheses automatically
- translates `ln()` to `log()` internally for mathjs compatibility
- handles edge cases like:
  - `200 * 10 %`
  - `ln(e)`
  - nested parentheses

---

## ui preview

dark theme, minimal layout, ios-style buttons  
(no screenshots yet — coming soon)

---

## tech stack

- react native
- expo
- typescript
- mathjs

---

## getting started

```bash
git clone https://github.com/maithilimukherjee/calculator-app
cd calculator-app
npm install
npx expo start
