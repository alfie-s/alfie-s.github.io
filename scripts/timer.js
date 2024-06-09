function updateCountdown() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let nextFriday = new Date();
    nextFriday.setDate(now.getDate() + ((5 - dayOfWeek + 7) % 7));
    nextFriday.setHours(16, 30, 0, 0); // 4:30 PM UK time

    if (dayOfWeek === 5 && hours >= 16 && minutes >= 30) {
        const midnight = new Date(nextFriday);
        midnight.setDate(nextFriday.getDate() + 1);
        midnight.setHours(0, 0, 0, 0);
        const timeUntilMidnight = midnight - now;

        if (timeUntilMidnight > 0) {
            document.getElementById('countdown').innerHTML = '<span class="message">Time For Pub!</span>';
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
