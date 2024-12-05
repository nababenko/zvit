function showSection(section) {
    const content = document.getElementById('info');

    const sections = {
        topic: `
            <h2>Тема Мета Місце розташування лаб №7</h2>
            <p><b>Тема:</b> КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ.</p>
            <p><b>Мета:</b>придбати практичні навички роботи з об'єктами. Методи об'єкта. Callback. Стрілочні функції. Стрілочні функції як колбеки. Реалізація програм засовами мови JAVASCRIPT</p>
            <br>
            <p>Посилання на живу сторінку: https://nababenko.github.io/web_lab7/
            <a href="https://nababenko.github.io/web_lab7/">https://nababenko.github.io/web_lab7/</a></p>
            <p>Посилання на GitHub: https://github.com/nababenko/web_lab7
            <a href="https://github.com/nababenko/web_lab7">https://github.com/nababenko/web_lab7</a></p><br>

        `,
        task1: `
            <h2>Завдання №1</h2>
            <img src="../resources/ts1%20(4).png"><br>
            <img src="../resources/ts1%20(1).png"><br>
            <img src="../resources/ts1%20(2).png"><br>
            <img src="../resources/ts1%20(3).png">
            
           `,
        task3: `
           <h2>Завдання №3</h2>           
            <img src="../resources/ts3%20(3).png"><br>
            <img src="../resources/ts3%20(4).png"><br>
            <img src="../resources/ts3%20(1).png"><br>
            <img src="../resources/ts3%20(2).png">
           
        `,
        task5: `
           <h2>Завдання №5</h2>
            <img src="../resources/ts5%20(4).png"><br>
            <img src="../resources/ts5%20(1).png"><br>
            <img src="../resources/ts5%20(2).png"><br>
            <img src="../resources/ts5%20(3).png">
        `,
        task7: `
           <h2>Завдання №7</h2>            
            <img src="../resources/ts7%20(4).png"><br>
            <img src="../resources/ts7%20(1).png"><br>
            <img src="../resources/ts7%20(2).png"><br>
            <img src="../resources/ts7%20(3).png">
        `,
        task8: `
           <h2>Завдання №8</h2>            
            <img src="../resources/ts8%20(4).png"><br>
            <img src="../resources/ts8%20(1).png"><br>
            <img src="../resources/ts8%20(2).png"><br>
            <img src="../resources/ts8%20(3).png">
        `,
        task9: `
           <h2>Завдання №9</h2> 
           <img src="../resources/ts9%20(4).png"><br>
            <img src="../resources/ts9%20(1).png"><br>
            <img src="../resources/ts9%20(2).png"><br>
            <img src="../resources/ts9%20(3).png">
        `,
        task10: `
           <h2>Завдання №10</h2> 
           <img src="../resources/ts10%20(4).png"><br>
            <img src="../resources/ts10%20(1).png"><br>
            <img src="../resources/ts10%20(2).png"><br>
            <img src="../resources/ts10%20(3).png">
           
        `,

        conclusion: `
            <h2>ВИСНОВКИ</h2>
            <p>У ході виконання лабораторної роботи було здобуто практичні навички роботи з об'єктами у JavaScript. Ознайомлено з методами об'єктів та їх застосуванням у програмуванні. Досліджено використання стрілочних функцій як колбеків для забезпечення більш зручного синтаксису. Реалізовано кілька програм, що демонструють переваги стрілочних функцій у контексті роботи з методами об'єктів. Робота дозволила закріпити розуміння ключових аспектів об'єктно-орієнтованого програмування в JavaScript.






</p>
            
        `
    };

    content.innerHTML = sections[section] || 'Інформація не знайдена.';
}