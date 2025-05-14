document.getElementById("revealBtn").addEventListener("click", () => {
  const surprise = document.getElementById("surprise");
  surprise.classList.toggle("hidden");

  explodeEmojis();
});

function explodeEmojis(count = 30) {
  for (let i = 0; i < count; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("party-emoji");
    emoji.textContent = "🎉";

    // Posición inicial en el centro
    emoji.style.left = "50%";
    emoji.style.top = "50%";

    // Movimiento aleatorio
    const x = (Math.random() - 0.5) * 400 + "px";
    const y = (Math.random() - 0.5) * 400 + "px";
    emoji.style.setProperty("--x", x);
    emoji.style.setProperty("--y", y);

    document.body.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 1000);
  }
}
