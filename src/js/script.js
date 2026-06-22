// qa
const questions = document.querySelectorAll('.main__qa-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const icon = item.querySelector('h3 i');
        
        document.querySelectorAll('.main__qa-item').forEach(faq => {
            if (faq !== item) {
                faq.classList.remove('active');
                iconFaq = faq.querySelector('h3 i');
                if (iconFaq) {
                    iconFaq.classList.add('fa-angle-right');
                    iconFaq.classList.remove('fa-angle-down');
                }
            }
        });
        
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            icon.classList.add('fa-angle-down');
            icon.classList.remove('fa-angle-right');
        } else {
            icon.classList.add('fa-angle-right');
            icon.classList.remove('fa-angle-down');
        }
    });
});

// seasons 
const seasons = document.querySelectorAll('.main__seasons-btn-item');

seasons.forEach(season => {
    season.addEventListener('click', () => {
        const target = season.getAttribute('data-target');
        const seasonEl = document.getElementById(target);
        
        document.querySelectorAll('.main__seasons-btn-item').forEach(item => {
            item.classList.remove('active');
        }
        );
        document.querySelectorAll('.main__seasons-item').forEach(video => {
            video.classList.remove('active');
        });
        
        season.classList.add('active');
        seasonEl.classList.add('active');
    });
});

// trailers
const trailers = document.querySelectorAll('.main__trailer-item');

trailers.forEach(trailer => {
    trailer.addEventListener('click', () => {
        const target = trailer.getAttribute('data-target');
        const iframe = document.getElementById(target);

        document.querySelectorAll('.main__trailer-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.main__trailer-video').forEach(video => {
            video.classList.remove('active');
        });

        trailer.classList.add('active');
        iframe.classList.add('active');
    });
});