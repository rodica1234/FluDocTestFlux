---
title: Calendar de lucru
sidebar_position: 2
---

Form-ul se află în **Configurare > Tabele > Producție > Calendar de lucru** și permite generarea și/sau schimbarea *Calendarului de lucru*, un element fundamental, util  procedurilor pentru *Planificarea generală MRP*.

În partea superioară conține zilele și lunile anului care pot fi selectate.   
Fiecare căsuță poate fi activată pentru a indica faptul că ziua respectivă este o sarbatoare legală.  
Faptul că o anumită zi este sărbătoare legală, permite ca, în momentul în care se generează [Calendarul capacităților productiveconfigurations/tables/production/productive-capacity-calendar), aplicația să genereze automat disponibilitatea *Resursei productive* doar pentru zilele care, în *Calendarul de lucru*, nu sunt sărbători legale.  
În plus, inserarea sărbătorilor legale este importantă și când sunt definiți *timpii de aprovizionare ai furnizorilor preferențiali*, care trebuie deci să fie inserați considerând *Calendarul de lucru*.  

*Exemplu*:
Dacă sunt considerate sărbători legale sâmbăta și duminica, inserând valoarea 10 zile ca timp de aprovizionare se înțelege că timpul total este de circa 2 săptămâni, considerând faptul că săptămâna lucrătoare este, în acest caz, doar de 5 zile calendaristice.

Parametrii pentru sărbătorile legale pot fi setați **manual** sau folosind butonul **Generare calendar de lucru**. Când apăsați acest buton, se deschide o fereastră pop-up numită **Generare calendar**.

În această fereastră pop-up, se poate decide generarea automată a calendarului de lucru pentru un anumit an, care se poate seta în câmpul corespunzător **Generare calendar pentru anul**.    
După ce s-au selectat sărbătorile săptămânii și dacă se iau sau nu în considerare setările făcute în tabelul *Sărbători anuale*, se poate face clic pe  butonul **OK** pentru a crea automat calendarul de lucru pentru anul indicat.

Odată generat calendarul, utilizatorul va trebui să facă clic din nou pe butonul **Salvează** și să închidă fereastra calendarului de lucru.