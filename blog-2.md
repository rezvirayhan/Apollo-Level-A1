# TypeScript Generics Explained

### Build Reusable & Strictly Typed Components and Functions
---
# What Are Generics in TypeScript?

Generics allow us to create reusable functions, classes, and components that work with different data types while still maintaining full type safety.
Instead of writing separate code for every type, Generics let us write flexible code once and reuse it everywhere.

---

# ❌ Without Generics

Normally, developers may use `any` when they want flexibility.

```ts
function getData(data: any): any {
  return data;
}

const result = getData("Hello");
```
