function showSection(section) {
    const content = document.getElementById('info');
    
    const sections = {
        topic: `
            <h2>Тема Мета Місце розташування лаб №3</h2>
            <p>Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</p>
            <p>Мета: придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок, придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX</p>
            <br>
            <p>Посилання на живу сторінку: https://nababenko.github.io/lab3/
            <a href="https://nababenko.github.io/lab3/">https://nababenko.github.io/lab3/</a></p>
            <p>Посилання на GitHub: https://github.com/nababenko/lab3
            <a href="https://github.com/nababenko/lab3">https://github.com/nababenko/lab3</a></p><br>

        `,
        task1: `
            <img src="../resources/task11.png"width=1000>
            <img src="../resources/task12.png">
            <img src="../resources/task13.png">

           `,
        fix_t: `
            <img src="../resources/task21.png">
            <img src="../resources/21.png">
            <img src="../resources/t2122.png">

        `,
        rubber_t: `
            <img src="../resources/task22.png">
            <img src="../resources/22.png">
            <img src="../resources/t2122.png">
        `,
        fix_b: `
            <img src="../resources/task23.png">
            <img src="../resources/23.png">
            <img src="../resources/t2324.png">
        `,
        rubber_b: `
            <img src="../resources/task24.png">
            <img src="../resources/24.png">
            <img src="../resources/t2324.png">
        `,
      
        flex: `
            <img src="../resources/t3.png" width=1000>
             
        `,
        html_flex: `
            <img src="../resources/ht3.png">
            
        `,
        css_flex: `
            <img src="../resources/ht4.png">
            
        `,
        conclusion: `
            <h2>ВИСНОВКИ</h2>
            <p>Під час виконання лабораторної роботи було набуті практичні навички верстки веб-сторінок за допомогою CSS, а також на основі плаваючих елементів та технології FLEXBOX. Було вивчено основні принципи роботи з блоковою версткою та особливості застосування CSS для створення різних типів макетів. FLEXBOX продемонстрував значну зручність у вирівнюванні та організації елементів на сторінці, особливо для динамічних макетів. Також були проаналізовані переваги та недоліки різних підходів до верстки, зокрема, плаваючі елементи мають обмеженість в адаптивності, тоді як FLEXBOX надає більшу гнучкість у розташуванні елементів, що робить його більш придатним для сучасної розробки.</p>
        `
    };

    content.innerHTML = sections[section] || 'Інформація не знайдена.';
}