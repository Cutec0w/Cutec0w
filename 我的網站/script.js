const discordCard = document.getElementById('discordCard');
const discordName = '.cutecow';

if (discordCard) {
  discordCard.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(discordName);
      discordCard.textContent = `Discord：牛牛（已複製使用者名稱）`;
      setTimeout(() => {
        discordCard.textContent = `Discord：牛牛`;
      }, 1800);
    } catch (error) {
      alert('複製Discord名稱失敗，請手動複製。');
    }
  });
}
