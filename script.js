const discordCard = document.getElementById('discordCard');
const cs2CodeButton = document.getElementById('cs2CodeButton');
const discordName = '.cutecow';
const cs2Code = 'S8UQD-VWUE';

if (discordCard) {
  discordCard.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(discordName);
      const original = discordCard.textContent;
      discordCard.textContent = 'Discord 代碼已複製！';
      setTimeout(() => {
        discordCard.textContent = original;
      }, 1800);
    } catch (error) {
      alert('複製代碼失敗。');
    }
  });
}

if (cs2CodeButton) {
  cs2CodeButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(cs2Code);
      const original = cs2CodeButton.textContent;
      cs2CodeButton.textContent = 'CS2 代碼已複製！';
      setTimeout(() => {
        cs2CodeButton.textContent = original;
      }, 1800);
    } catch (error) {
      alert('複製代碼失敗。');
    }
  });
}
