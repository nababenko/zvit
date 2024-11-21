function showSection(section) {
    const content = document.getElementById('info');

    const sections = {
        topic: `
            <h2>Тема Мета Місце розташування лаб №6</h2>
            <p><b>Тема:</b>   ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ.</p>
            <p><b>Мета:</b> придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки. Реалізація програм засовами мови JAVASCRIPT</p>
            <br>
            <p>Посилання на живу сторінку: https://nababenko.github.io/web_lab6/
            <a href="https://nababenko.github.io/web_lab6/">https://nababenko.github.io/web_lab6/</a></p>
            <p>Посилання на GitHub: https://github.com/nababenko/web_lab6
            <a href="https://github.com/nababenko/web_lab6">https://github.com/nababenko/web_lab6</a></p><br>

        `,
        task1: `
            <h2>Завдання №1</h2>
            <img src="../resources/tk1%20(2).png">
            <img src="../resources/tk1%20(3).png">
            <img src="../resources/tk1%20(1).png">
            <img src="../resources/tk1%20(4).png">
            <img src="../resources/tk1%20(5).png">
            
           `,
        task3: `
           <h2>Завдання №3</h2>
           <img src="../resources/tk3.png">
           <img src="../resources/tk3%20(1).png">
           <img src="../resources/tk3%20(2).png">
           <img src="../resources/tk3%20(3).png">
           
        `,
        task5: `
           <h2>Завдання №5</h2>
            <img src="../resources/tk5%20(3).png">
            <img src="../resources/tk5%20(4).png">
            <img src="../resources/tk5%20(1).png">
            <img src="../resources/tk5%20(2).png">
        `,
        task7: `
           <h2>Завдання №7</h2>            
            <img src="../resources/tk7%20(5).png">            
            <img src="../resources/tk7%20(1).png">            
            <img src="../resources/tk7%20(2).png">            
            <img src="../resources/tk7%20(3).png">
            <img src="../resources/tk7%20(4).png">
        `,
        task9: `
           <h2>Завдання №9</h2> 
           <img src="../resources/tk9%20(1).png">            
           <img src="../resources/tk9%20(2).png">            
           <img src="../resources/tk9%20(3).png">
           <img src="../resources/tk9%20(4).png">
        `,
        task10: `
           <h2>Завдання №10</h2> 
           <img src="../resources/tk10%20(4).png">
           <img src="../resources/tk10%20(5).png">
           <img src="../resources/tk10%20(6).png">
           <img src="../resources/tk10%20(7).png">
           <img src="../resources/tk10%20(1).png">
           <img src="../resources/tk10%20(2).png">
           <img src="../resources/tk10%20(3).png">
           
        `,

        conclusion: `
            <h2>ВИСНОВКИ</h2>
            <p>Отже, в результаті виконання лабораторної роботи були здобуті практичні навички роботи з об'єктами в JavaScript та розглянуті основні методи їх використання. Зокрема, було освоєно застосування callback-функцій для обробки асинхронних операцій та покращення структури коду. Також було вивчено стрілочні функції, які дозволяють зручно працювати з контекстом та використовувати їх як колбеки. Застосування стрілочних функцій спростило написання коду та уникнення проблем з this. Отримані знання допомогли краще зрозуміти принципи асинхронного програмування в JavaScript та їх ефективне використання.</p>
            
        `
    };

    content.innerHTML = sections[section] || 'Інформація не знайдена.';
}