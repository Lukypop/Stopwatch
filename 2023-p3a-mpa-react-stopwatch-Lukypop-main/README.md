[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12969193&assignment_repo_type=AssignmentRepo)
# Jednoduché stopky

Zadání na procvičení useState, useEffect, obsluhy tlačítek, předávání dat přes props.

Vytvořte - samostatně - a jen s použitím oficiální dokumentace – tedy [MDN](https://developer.mozilla.org/en-US/) a [React.dev](https://react.dev/) - aplikaci pro použití během písemek pro sledování toho, kolik času ještě studentům zbývá. 

## Obrazovka se stopkami
V tomto případě očekáváme, že během samotné písemky bude na obrazovce (například na projektoru) vidět jen zbývající čas vyjádřený jako počet hodin, minut a sekund a jako [progressbar](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress). Z této obrazovky je možné stopky pozastavit, znovu rozběhnout a také zcela zastavit. Případná tlačítka by ale neměla rušit obraz během odpočtu - lze je skrývat, lze se přepnout na další obrazovku. Nezapomeňte vhodně rušit timeout aplikace.

## Obrazovka nastavení
Na této obrazovce je možné nastavit délku písemky. Ta se pohybuje od 5 sekund do 6 hodin. Uživatel zde má také předpřipravené možnosti:

* pětiminutovka - 5 minut
* desetiminutovka - 10 minut
* maturitní zkouška - 15 minut
* hodinový test - 40 minut
* dvouhodinový test - 85 minut
* maturitní práce - 4 hodiny

Z této obrazovky lze přejít na obrazovku stopek.

## Vzhled a UI

Do aplikace připojte vhodný font a pomocí css modulů ji nastylujte tak, aby bylo rozhraní minimalistické, připravené na promítání na celou obrazovku. Aplikaci lze stylovat jako digitální hodiny nebo elegantní minimalistickou aplikaci (Android, iOS).

## Vylepšení
* Na poslední momenty (jsou to procenta nebo minuty, ideálně by si uživatel mohl zvolit) práce uživatele upozorněte změnou barvy vhodného prvku.
