---
title: Centre companie
sidebar_position: 1
---

Secțiunea generală prezintă structura ramificată a centrelor de cost definite pentru compania activă: centrele de cost care nu pot fi evaluate în contabilitate sunt afișate în roșu, cele care pot fi utilizate în producție sunt afișate cu caractere aldine.

*Butoane specifice*  
> **Nouă legătură CdC**: permite inserarea unei legături/nivel al centrului de cost pe care sunteți poziționat.  
> **Șterge legătura CdC**: permite anularea legăturii/nivelului centruui de cost.   

*Modalitate de inserare centre noi*

Structura arborescentă creată pentru a organiza centrele și detaliul lor sunt vizibile în partea centrală a tabelului, dar centrele noi se inserează completând câmpurile în partea inferioară a ferestrei.

Câteva câmpuri se pot o modifica direct pe linia din tabelul superior, după ce a fost inserat centrul nou (de ex. câmpul *Cost driver*).

**Centru de afaceri**: cod alfanumeric centru de cost.  
**Descriere/Descrierea secundară**: descrierile CDC.  
**Tip centru de cost**: stabilește dacă centrul de cost este direct sau indirect.  
**Centru de responsabilitate**:  asociază centrul de cost relativ la centrul de responsabilitate.  
**Dată început/Dată sfârșit**: dată de început/sfârșit utilizare CDC.  
**Valorizabil**: dacă este activ, centrul de cost poate fi valorizat cu înregistrările contabile. Dezactivați parametrul de la nivelele structurii care nu trebuie sa fie valorizate în mod greșit și lăsați-l doar la nivelul inferior.  
**MRP**: permite utilizarea centrului de cost în modul Producție.  
**Conturi de reasignat**: identifică acest centru ca un colector în care contabilitatea generală atribuie costurile pe care nu reușește să le atribuie în mod precis și direct sau pe care le poate gestiona cu procente fixe, legate la planul de conturi.  
**Centrul implicit patrimonial**: reprezintă centrul generic căruia i se atribuie toate înregistrările patrimoniale din contabilitate. Întreaga gestionare a contabilității analitice afectează contul de profit și pierderi, dar compania ar putea fi interesată ca datele totale din contabilitatea analitică să fie echilibrate cu datele totale ale bilanțului. Deci se poate defini un centru generic unic în care sunt inserate toate conturile patrimoniale pentru a avea întregul bilanț complet și în partea de control de gestiune.  
**Comanda**: reprezintă centrul de afaceri generic care conține costurile directe ale comenzii. Acest centru trebuie să fie asociat la dimensiunea pe care parametrul *Comanda* o are în tabelul relativ.  
Un cost sau un venit direct de comandă poate fi asociat acestui centru generic de comandă sau va fi valorizat în [Tabel asociere centre/comenziconfigurations/tables/controlling/analytical-accounting/projects-centers-association).  
Ulterior se poate sugera aplicației cu care logică să fie valorizat centrul de afaceri.  
**Modele de reclasificare**: permite asocierea la centrul de afaceri a unui model de reclasificare (un model care poate gestiona atât înregistrările contabile, cât și înregistrările centrului de afaceri) pentru a determina costurile totale alocate centrului și pentru a obține indicele de cost al centrului propriu-zis. Acest lucru se datorează faptului că unele centre (în general de producție) sunt valorizate în mod obișnuit în ceea ce privește mărimile fizice (de exemplu, orele de lucru sau numărul de bucăți utilizate) și este necesar să se determine tariful de valorizare pentru costul unei singure ore de lucru sau al unei singure piese.  Modelul de reclasificare va determina de obicei costurile totale ale centrului care vor fi împărțite la valoarea totală a orelor încărcate pe centrul însuși.

:::tip Nota
Modelul de reclasificare care urmează să fie combinat cu centrul de afaceri pentru determinarea tarifului poate depinde de setarea teoretică pe care doriți să o dați sistemului dumneavoastră de control al managementului. În orice caz, va fi un model care tinde să determine costul total al centru şi prin alocarea unei părţi din costurile indirecte şi comune. În detaliul modelului de reclasificare se prevede indicarea cu ajutorul unui parametru specific a nodului (rândul) care afișează rezultatul reclasificării și deci costurile totale ale centrului care va deveni numărătorul coeficientului (exemplu Costul total al centrului/totalul orelor de lucru ale centrului) pentru a determina, de exemplu, costul orar al centrului. În imagini puteți vedea un exemplu de model specific numit Cost Control Framework. Acest model este configurat pentru a gestiona  ca numărător al raportului linia Costuri totale de exploatare. Consultați [Model de reclasificare/reclassifications/create-reclassification-model).
:::

![Immagine](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/corporate-center-model-connection.png)

![Immagine](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/QCC-model.png)

**Tip măsurare**: indică modalitatea cu care va fi valorizat centrul:
- **Nici unul**: centrul va fi valorizat cu un criteriu diferit de cele succesive prezente în listă, și anume în mod direct, prin atribuirea valorii prin intermediul contabilității analitice din contabilitatea generală;  
- **Dimensiune fizică**: centrul va fi valorizat cu ajutorul înregistrărilor exprimate în măsuri fizice (ore, bucăți etc.) și în acest caz, în câmpurile asociate care apar va fi inserată unitatea de măsură pentru cota fixă de cost și pentru cota variabilă. Sunt posibile maxim două unități de măsură simultan.

Consultați tabelul [Unități de măsurăconfigurations/tables/general-settings/measurement-units) pentru a defini **Tipul de evaluare al timpului**

- **Procent**: centrul va fi valorizat cu un criteriu procentual față de alte centre sau conturi, mai exact ca un coeficient (raport) între un model de reclasificare la numărător și câteva centre la numitor. Selectând acest criteriu se activează un alt câmp (**Filtru valori numitor**) pentru a desemna criteriul de calcul al numitorului coeficientului și un tabel secondar (în partea inferioară, stânga) pentru a combina centrele la calcul.
    Criteriile de calcul posibile sunt:  
    - *Total debit*: citește doar secțiunea *Debit* din înregistrările centrelor inserate în grid în partea inferioară, stânga;  
    - *Total credit*: citește doar secțiunea *Credit* din înregistrările centrelor inserate în grid în partea inferioară, stânga;  
    - *Marjă*: = Total debit - Total credit;    
    - *Pe contul analitic selectat*: dacă este activ, apare un nou tabel (în partea inferioară, la dreapta) pentru a combina conturile contabile care vor fi considerate în calcul. Deci vor fi considerate înregistrările centrelor din tabelul din stânga dacă acestea se referă la conturile analitice inserate în tabelul din dreapta.  
    - *Pe contul sintetic selectat*: se poate insera direct contul sintetic, obținând astfel citirea tuturor analiticelor sale.  
    - *Exclude conturile analitice selectate*: vor fi citite toate analiticele, dar nu și cele inserate în tabel. Prin urmare, înregistrările centrelor nu vor fi considerate daca nu se referă la analiticele inserate în tabelul din dreapta.  
    - *Exclude conturile sintetice selectate*: vor fi citite toate conturile sintetice cu relativele analitice, dar nu și cele inserate în tabel. Prin urmare, înregistrările centrelor din tabelul din stânga vor fi considerate doar dacă nu se referă la conturile inserate în dreapta.   
- **Procent și mărime fizică**: criteriu care permite combinarea elementelor celor două criterii precedente, parametrizând atât unitățile de măsură, cât și coeficientul (raport) de repartizare a altor centre.
