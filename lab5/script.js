function showSection(section) {
    const content = document.getElementById('info');

    const sections = {
        topic: `
            <h2>Тема Мета Місце розташування лаб №5</h2>
            <p>Тема: ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT </p>
            <p>Мета: придбати практичні навички роботи з конструкціями мови JS, масивами та функціями у js-сценаріях.  Реалізація програм засовами мови JAVASCRIPT </p>
            <br>
            <p>Посилання на живу сторінку: https://nababenko.github.io/web_lab5/
            <a href="https://nababenko.github.io/web_lab5/">https://nababenko.github.io/web_lab5/</a></p>
            <p>Посилання на GitHub: https://github.com/nababenko/web_lab5
            <a href="https://github.com/nababenko/web_lab5">https://github.com/nababenko/web_lab5</a></p><br>

        `,
        task1: `
            
           `,
        task2: `
           
        `,
        task3: `
            
        `,
        task4: `
            
        `,
        task5: `
            
        `,

        conclusion: `
            <h2>ВИСНОВКИ</h2>
            <p> У ході виконання лабораторної роботи було отримано практичні навички роботи з основними конструкціями мови JavaScript, масивами та функціями в рамках написання сценаріїв на цій мові. У процесі реалізації завдань було закріплено знання з обробки даних у масивах, застосування різних методів для їхньої маніпуляції, а також розробки функцій, які допомагають структурувати та організовувати код для досягнення ефективного вирішення завдань. Робота з JavaScript дозволила детальніше ознайомитись із принципами функціонального програмування та покращити навички написання структурованого та зрозумілого коду.
                <br>Інструменти розробника в браузерах допомогли в процесі тестування та налагодження верстки, дозволяючи перевірити поведінку сторінки в різних умовах. Таким чином, лабораторна робота продемонструвала ефективність застосування адаптивних технік для створення зручних і функціональних веб-сторінок, що відповідають сучасним вимогам.
            </p>
        `
    };

    content.innerHTML = sections[section] || 'Інформація не знайдена.';
}