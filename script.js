
function showSection(section) {
    const content = document.getElementById('info');
    
    const sections = {
        description: `
            <h2>Опис предметного середовища</h2>
            <h3>Каталог магазину меблів</h3>
            <p> Мета: пришвидшити та покращити процес купівлі товарів.<br>Сценарій адміністратор:додавати та редагувати вміст каталогу. Сценарій клієнт: Веб застосунок, що надає користувачам можливість переглядати асортимент магазину, отримувати інформацію щодо товару та самого магазину, додавати товар в кошик. На головній сторінці клієнт дізнається детально про концепцію магазину, дізнається контактні дані та може безпосередньо перейти до вибору товарів.Сайт має декілька додаткових вебсторінок, таких як: товари за категоріями, оформлення замовлення, інформація про розташування магазину і тд. </p>
        `,
        topic: `
            <h2>Тема Мета Місце розташування лаб №1</h2>
            <p>Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ.
            РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ.
            </p>
            <p>Мета: придбати практичні навички роботи  з HTML-документом, таблицями, , зображеннями, посиланнями, списками, формами
            Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.
            </p>
            <p>Посилання на сторінку:</p>
            <a href="https://nababenko.github.io/web_lab1/">https://nababenko.github.io/web_lab1/</a>
            <p>Посилання на GitHub:</p>
            <a href="https://github.com/nababenko/web_lab1">https://github.com/nababenko/web_lab1</a>
        `,
        structure: `
            <h2>СТРУКТУРА ДОКУМЕНТА</h2>
            <p>Документ має наступну структуру</p>
            <img src="resources/structure.png" >

        `,
        list: `
            <h2>HTML-код СПИСОК</h2>
            <img src="resources/ul1.png" >
            <img src="resources/ul2.png" >
            <p>HTML списки мають два основні теги: ul для маркованих списків і ol для нумерованих, де атрибут type в ol задає стиль нумерації (цифри, літери, римські числа). Для кожного елемента списку використовується тег li, який може містити текст або інші елементи. У маркованих списках атрибут type визначає тип маркерів (круги, квадрати, диски), а в нумерованих — стиль нумерації.</p>
            
        `,
        table: `
            <h2>HTML-код ТАБЛИЦЬ</h2>
            <img src="resources/tab1.png" >
            <img src="resources/tab2.png" >
            <p>Тег таблиці в HTML, table, має такі основні атрибути: border для задання товщини рамки, cellpadding для відступів всередині комірок, та cellspacing для відстані між комірками. Додаткові атрибути, як-от align (вирівнювання таблиці) та width, дозволяють налаштовувати зовнішній вигляд таблиці. Теги всередині таблиці, наприклад, tr, th, і td, також підтримують атрибути для індивідуального налаштування рядків і комірок.</p>
        `,
        form: `
            <h2>HTML-код ФОРМИ</h2>
            <img src="resources/form1.png" >
            <img src="resources/form2.png" >
            <p>Тег форми в HTML, form, має основні атрибути: action для вказівки URL, куди надсилаються дані, та method для вибору методу відправки (GET або POST).Тег input в HTML використовується для створення різних полів введення у формах, і має атрибут type, який визначає тип поля (текст, пароль, електронна пошта, файл тощо). Інші важливі атрибути включають name для ідентифікації даних при відправці, placeholder для відображення підказки в полі, та required для обов'язкових полів. Також, атрибути value (початкове значення), maxlength (максимальна довжина) і readonly (поле тільки для читання) налаштовують додаткові параметри вводу.</p>
            
        `,
      
        image: `
            <h2>HTML-код ЗОБРАЖЕННЯ</h2>
            <img src="resources/im1.png" height="224">
            <img src="resources/im2.png" height="224">
            <p>Тег img в HTML використовується для вставки зображень і має обов'язковий атрибут src для вказівки джерела зображення, а також alt для альтернативного тексту. Додаткові атрибути, як-от width, height, loading, srcset, дозволяють налаштовувати розміри та способи завантаження зображення. </p>
        `,
        conclusion: `
            <h2>ВИСНОВКИ</h2>
            <p>Отже, я навчилась працювати з HTML-документом, таблицями, , зображеннями, посиланнями, списками, формами. Я створила "скелет" майбутнього власного проекту, а також зробила шаблон звітного HTML-документу для відображення результатів роботи всіх лабораторних та самостійних робіт.
</p>
        `
    };

    content.innerHTML = sections[section] || 'Інформація не знайдена.';
}