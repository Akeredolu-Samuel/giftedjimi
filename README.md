# gifted.jimi — Abati Favour

Creative portfolio. Work videos play on the page.

## Open it

Double-click `index.html`, or from this folder:

```
python -m http.server 5173
```

Then visit http://localhost:5173

## Add a new video later

1. Drop the `.mp4` in this folder
2. Open `works.js`
3. Copy one of the objects and set `src` to the filename

```js
{
  title: "New piece",
  caption: "One line about it.",
  tag: "Film",
  year: "2026",
  src: "YOUR-VIDEO.mp4",
}
```
