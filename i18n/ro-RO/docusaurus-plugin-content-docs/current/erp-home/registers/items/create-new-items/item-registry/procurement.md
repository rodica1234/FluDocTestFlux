---
title: Aprovizionare
sidebar_position: 4
---

În acest tab pot fi inserate datele necesare pentru furnizarea articolului.

### Date generale pentru toate gestiunile

Secțiunea conține datele pentru aprovizionarea generală a articolului, deci nu pe fiecare depozit:

**Stocul minim și stocul maxim**: reprezintă cantitățile minime de articol care trebuie să fie întotdeauna prezente în gestiune și cantitățile maxime care pot fi păstrate în gestiune;

**Zile stoc**: reprezintă numărul de zile necesare pentru a înlocui cel puțin stocul minim care a fost indicat pentru articol;

**Săptămâni de acoperire**: reprezintă intervalul de timp (calculat în săptămâni) în timpul căruia (pentru care/în care) stocul acoperă necesarul din articolul analizat;

**Indice de acoperire**: reprezintă procentul care va fi sau nu considerat de planificator sau MRP pentru refacerea stocurilor.  
Dacă în parametrii MRP este activ *Consideră indicele de acoperire*, în momentul planificării, procedura va considera procentul indicat în acest câmp pentru a restabili disponibilitatea articolului pentru o cantitate care să acopere necesarul celor n săptămâni inserate în câmpul **Săptămâni de acoperire**;  

**Moment de reaprovizionare**: la atingerea cantității inserate în acest câmp se declanșează procedura pentru reaprovizionarea cu articolul analizat;

**Zile pentru lansare comandă**: reprezintă zilele necesare restaurării materialului în gestiune;

**Interval de timp pentru reexaminare moment de reaprovizionare**: frecvența cu care momentul de reaprovizionare trebuie revizuit și actualizat;

**Ultima dată de calcul al momentului de reaprovizionare**: se indică data referitoare la ultima dată când s-a efectuat analiza și s-a stabilit momentul de reaprovizionare indicat mai sus;

**Lead time analize**: dacă este activ, pentru material sunt necesare analize de laborator care au nevoie de o perioadă de timp (în zile) și care se inserează în câmpul alăturat. Acesta este utilizat pentru a stabili după câte zile de la recepție se poate utiliza materialul în producție sau, în cazul unui produs finit, după câte zile de la producerea sa este posibilă expedierea.

### Imprimante etichete  
Secțiunea permite alegerea imprimantelor care vor fi propuse implicit la imprimarea etichetelor loturilor pentru diferitele *Stări lot*( *Unic*, *Conform*, *Neconform* și *Carantină*).

### Tip rapoarte etichete  
Secțiunea permite specificarea rapoartelor implicite care vor fi tipărite pentru loturi cu diverse *Stări lot*(*Unic*, *Conform*, *Neconform* și  *Carantină*).

### Tabel inferior  
Se inserează diferitele depozite în care se poate afla articolul și, eventual, se pot insera unele dintre datele enumerate anterior (stoc minim/maxim, zile pentru stoc, moment relansare comandă și zile necesare, raport etichetă unică/neconformă/conformă/carantină) pentru fiecare depozit.
