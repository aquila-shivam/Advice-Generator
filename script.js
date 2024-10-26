document.addEventListener("DOMContentLoaded", () => {
    const adviceId = document.querySelector(".advice-id");
    const adviceText = document.querySelector(".advice-text");
    const diceBtn = document.querySelector(".dice-btn");
  
    async function fetchAdvice() {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        adviceId.textContent = `Advice #${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
      } catch (error) {
        console.error("Error fetching advice:", error);
      }
    }
  
    diceBtn.addEventListener("click", fetchAdvice);
    fetchAdvice(); 
  });
  