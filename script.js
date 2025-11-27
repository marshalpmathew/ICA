function checkPassword() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    if (password === 'cutebutnotperfect') {
        createHearts();
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000); // Wait for hearts to float up
    } else {
        message.textContent = 'Try again vavey 😘';
        const input = document.getElementById('password');
        input.classList.add('shake');
        setTimeout(() => {
            input.classList.remove('shake');
        }, 500);
    }
}

function createHearts() {
    const container = document.body;
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        container.appendChild(heart);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const shuffleBtn = document.getElementById('shuffle-btn');
    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', () => {
            const gallery = document.querySelector('.gallery');
            const polaroids = Array.from(gallery.children);
            polaroids.sort(() => Math.random() - 0.5);
            polaroids.forEach(p => gallery.appendChild(p));
        });
    }
});

document.addEventListener('mousemove', (e) => {
    const heart = document.createElement('div');
    heart.classList.add('cursor-heart');
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 1000);
});

let keySequence = '';
document.addEventListener('keydown', (e) => {
    keySequence += e.key;
    if (keySequence.includes('vavey23')) {
        window.location.href = 'easter_egg.html';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('confetti')) {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti-piece');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 5 + 's';
            document.getElementById('confetti').appendChild(confetti);
        }
    }

    if (document.getElementById('countdown')) {
        const anniversary = new Date('2025-01-01'); // Change to your anniversary date
        setInterval(() => {
            const now = new Date();
            const diff = anniversary - now;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            document.getElementById('countdown').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    }

    const quoteBtn = document.getElementById('quote-btn');
    if (quoteBtn) {
        const quotes = [
            "You’re my happiest forever, vavey.",
            "I love you more than words can say.",
            "You are the sunshine of my life.",
            "My heart is and always will be yours."
        ];
        quoteBtn.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            document.getElementById('quote-text').textContent = quotes[randomIndex];
        });
    }
});