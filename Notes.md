
#Episode 4 Notes
---

### 1. **Is JSX mandatory for React?**

* **No.** JSX is not mandatory — it’s just syntax sugar for `React.createElement()`.
* You can write React without JSX, but JSX makes code more readable and easier to write.

Example without JSX:

```js
return React.createElement("h1", null, "Hello World");
```

---

### 2. **Is ES6 mandatory for React?**

* **No.** ES6 is not mandatory, but most modern React code uses ES6+ features (like arrow functions, destructuring, classes, `let/const`, modules).
* Without ES6, code becomes verbose.

---

### 3. **`{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}`**

* `{TitleComponent}` → Refers to a **variable** holding a component, not rendering it.
* `{<TitleComponent />}` → Renders the component **self-closing syntax**.
* `{<TitleComponent></TitleComponent>}` → Same as above but **explicit opening & closing tags** (useful if children are inside).

---

### 4. **How can I write comments in JSX?**

* Inside JSX:

```jsx
{/* This is a JSX comment */}
```

* Outside JSX:

```js
// Normal JS comment
```

---

### 5. **What is `<React.Fragment></React.Fragment>` and `<> </>` ?**

* Both are used to group multiple JSX elements **without adding extra DOM nodes**.
* `<React.Fragment>` is the long form, `<> </>` is the short syntax.

Example:

```jsx
<>
  <h1>Title</h1>
  <p>Description</p>
</>
```

---

### 6. **What is Virtual DOM?**

* A **lightweight, in-memory representation** of the actual DOM.
* React updates the Virtual DOM first, then calculates the minimal set of changes to update the real DOM.

---

### 7. **What is Reconciliation in React?**

* The **process of comparing** the current Virtual DOM with the previous one and applying only the necessary changes to the real DOM.

---

### 8. **What is React Fiber?**

* A **complete rewrite** of React’s reconciliation algorithm introduced in React 16.
* Allows **incremental rendering**, pausing work, prioritizing updates, and improving UI responsiveness.

---

### 9. **Why we need keys in React? When do we need keys in React?**

* Keys help React identify which elements **changed, added, or removed**.
* Needed when **rendering lists** or **dynamic elements**.

---

### 10. **Can we use index as keys in React?**

* **Yes, but not recommended** unless:

  * The list is static (no reordering, insertion, deletion).
  * No unique IDs are available.
* Using index in dynamic lists can cause rendering bugs.

---

### 11. **What is props in React?**

* **Props** (short for “properties”) are read-only inputs passed from parent to child components.
* Props allow component reusability.

Example:

```jsx
<MyButton text="Click me" />
```

---

### 12. **Ways to use props**

* **Destructuring in function parameters**:

```jsx
const MyButton = ({ text }) => <button>{text}</button>;
```

* **Access via `props` object**:

```jsx
const MyButton = (props) => <button>{props.text}</button>;
```

---

### 13. **What is a Config Driven UI?**

* A UI that is **built dynamically** based on a configuration (JSON or object) rather than hardcoded elements.
* Useful for dynamic forms, menus, dashboards.

Example config:

```js
const formConfig = [
  { type: "text", label: "Name" },
  { type: "email", label: "Email" }
];
```

React renders the form based on this config.

---

