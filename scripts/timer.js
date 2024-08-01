function updateCountdown() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const month = now.getMonth();
    const date = now.getDate();

    let nextFriday = new Date();
    nextFriday.setDate(now.getDate() + ((5 - dayOfWeek + 7) % 7));

    let targetHour = 16;
    let targetMinute = 30;
    let message = 'Time For Pub!';

    if (month === 7) {
        targetHour = 15;
        targetMinute = 0;
        message = 'Time For Pub Free From Three Edition';
    }

    // Add specific date check
    if ((month === 7 && date === 1) || (month === 7 && date === 16)) {
        targetHour = 21; // 12:00 PM
        targetMinute = 0;
        message = 'Time For Pub, Hey Canada Edition';
    }

    nextFriday.setHours(targetHour, targetMinute, 0, 0);

    if (dayOfWeek === 5 && (hours > targetHour || (hours === targetHour && minutes >= targetMinute))) {
        const midnight = new Date(nextFriday);
        midnight.setDate(nextFriday.getDate() + 1);
        midnight.setHours(0, 0, 0, 0);
        const timeUntilMidnight = midnight - now;

        if (timeUntilMidnight > 0) {
            document.getElementById('countdown').innerHTML = `<span class="message">${message}</span>`;
        } else {
            nextFriday.setDate(nextFriday.getDate() + 7);
        }
    } else {
        if (now > nextFriday) {
            nextFriday.setDate(nextFriday.getDate() + 7);
        }

        const timeUntilFriday = nextFriday - now;
        const days = Math.floor(timeUntilFriday / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeUntilFriday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeUntilFriday % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeUntilFriday % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `
            ${days}d ${hours}h ${minutes}m ${seconds}s
        `;
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);
