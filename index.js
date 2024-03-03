console.log('bobbyhadz.com');

const canvas = document.getElementById('canvas');
console.log(canvas); // 👉️ canvas#canvas

// ✅ works
const ctx = canvas.getContext('2d');

console.log(ctx); // 👉️ CanvasRenderingContext2D
