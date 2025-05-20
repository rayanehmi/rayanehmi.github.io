/* --------------------------------------------------------------------
   Pixel-agent arena (Iteration 0 – placeholder)
   -------------------------------------------------------------------- */

/**
 * The real implementation will arrive in milestone 6. For now we expose
 * a lazy-loaded init() to keep bundle size minimal and to respect FCP.
 */

export async function initGame() {
  // Placeholder canvas creation
  const canvas = document.createElement("canvas");
  canvas.id = "agentArena";
  canvas.width = 320;
  canvas.height = 180;
  canvas.style.width = "320px";
  canvas.style.height = "180px";
  canvas.style.border = "1px dashed var(--accent)";

  document.getElementById("app")?.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#fff";
  ctx.font = "12px 'Press Start 2P', monospace";
  ctx.fillText("Game coming soon…", 16, 90);
}
