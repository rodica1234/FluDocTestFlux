---
title: Parametri ordine clienţi
sidebar_position: 2
---

Parametrii ordinelor clienţi permit setarea de bază pentru gestionarea corectă şi în funcţie de specificul cerut de fiecare societate.

*Buton specific*

**Restaureaza parametrii**:  permite restaurarea parametrilor la valorile inițiale.  

### Generale

**Propune comision inserat în antetul documentului pentru toate articolele** : această procedură nu mai este utilizată. 
**Gestionare unitate de măsură dublă**: Semnalează faptul că este gestionată unitatea de măsură alternativă în ordinul client.   
**Propune automat U.M. alternativă**: dacă este activ, este gestionată unitatea de măsură alternativă în ordinul client.  
**Propune automat U.M. alternativă**: acest check se activează doar dacă *Gestionare unitate de măsură dublă*  este activ. Când este inserat un articol care conţine în registrul său, în tab *UM alternativă* o UM alternativa implicită, această UM este automat propusă ca UM alternativa pentru articol şi este calculată şi cantitatea alternativă folosind factorul de conversie al acesteia. 
**Completează succesiune dată și număr document**: dacă este activ, sunt recuperate numerele disponibile.  
**Cod oper. obligatoriu**: dacă este activ, este obligatorie inserarea operatorului/angajatului în antetul ordinului.  
**Control secvenţă dată şi număr document**: dacă este activ, este verificată continuitatea datei/numărului ordinelor clienţi.  
**Recuperează din ziua curentă**: dacă este activ, sunt recuperate numerele disponibile doar din ziua curentă.  
**Recuperare automată**: semnalează faptul că va fi propus automat primul număr disponibil.  
**Inserare automată variante în atribute variante**: dacă este activ, variantele atributelor vor fi inserate automat în registru.   
**Extinde lista componentelor**: dacă este activ, când se inserează un articol este substituit din primul nivel din lista sa de componente, dacă există.  
**Control disponibilitate**: dacă este activ, va fi verificată disponibilitatea articolului ordinului client.  
**Exclude ordine clienţi**: dacă este activ, angajarea ordinelor clienţi nu va fi considerată la calcularea disponibilităţii articolului ordinului client.  
**Disponibilitate obligatorie**: dacă este activ, disponibilitatea articolului ordinului client va fi obligatorie, deci cantitatea nu poate fi mai mare decât disponibilitatea.  
**Vizualizează disponibilitatea**: dacă este activ, va fi afişată disponibilitatea la nivel de linie articol când se inserează cantitatea.  
**Consideră disponibilitate din**:  
> **Sistem lohn**: dacă este activ, documentele din Sistem lohn vor fi considerate la calcularea disponibilităţii articolului ordinului client.  
> **Achiziţii**: dacă este activ, documentele de achiziţie vor fi considerate la calcularea disponibilităţii articolului ordinului client.  
> **Vânzări**: dacă este activ, documentele de vânzare vor fi considerate la calcularea disponibilităţii articolului ordinului client.  
> **Prod. planificată**: dacă este activ, documentele din necesar materiale şi comandă de producţie vor fi considerate la calcularea disponibilităţii articolului ordinului client.  
> **Prod. lansată**: dacă este activ, ordinele de producţie vor fi considerate la calcularea disponibilităţii articolului ordinului client.  
> **Gestiune**: dacă este activ, înregistrările de gestiune vor fi considerate la calcularea disponibilităţii articolului ordinului client.  
**Caută preţ articol în toate ofertele predefinite**: dacă este activ, articolul inserat în linia ordinului client va fi căutat şi în ofertele specificate în registrul clientului, în afara ofertei implicite.  
**Utilizare barcod**: dacă este activ, este vizibilă coloana barcod articol din grid articole.  
**Utilizare articol client**: dacă este activ, sunt vizibile coloanele articol client şi descriere articol client din grid articole.  
**Gestionare talie şi culoare**: dacă este activ, sunt gestionate coloanele lot din gridul variantelor.  
**Vizualizează dimensiuni**: dacă este activ, sunt gestionate coloanele dimensiuni (Înălţime, Lăţime, Adâncime) din grid articole.  
**Permite discounturi pt. articole promo**: dacă este activ, articolele promo gestionează discounturile.  
**Control integritate**: Semnalează faptul că este verificată integritatea ordinului client.  
**Obligatoriu raport colete cantitate**: dacă este activ, este verificată cantitatea liniei ordinului client relativ la numărul de colete din registrul articolului.  
**Blocare inserare document în sărbători legale**: Când este activ, nu se pot insera documentele cu data corespunzătoare unei sărbători legale.  
**Propune lot economic**: dacă este activ, este propus lotul economic din registrul articolului pentru cantitatea liniei din ordinul client.  
**Legătură ord. cli./prod**: dacă este activ, cantitate liniei din ordinul client va fi menţinută egală cu cantitatea comenzii de producţie cu care este asociată.  
**Uneşte atribute**: dacă este activ, vor fi inserate ca atribute linie ordin, atât atributele clientului, cât şi cele din registrul articolului.  
**Blochează atribute**: dacă este activ,  gridul atribute al articolului ordinului va fi blocat.  

### Executare

**Plăţi**: specifică valoarea utilizată pentru plata ordinului client în cazul executării multiple a comenzii de vânzare: primul ordin, registru sau selecţie manuală.  
**Destinatar**: specifică valoarea utilizată pentru destinatarul ordinului client în cazul executării multiple a comenzii de vânzare: primul ordin, registru sau selecţie manuală.  
**Executare din căutare ordine Grupare pe tip şi soluţie de plată**: specifică faptul că ordinele clienţi vor fi grupate după tipul şi soluţia de plată la executarea directă în avize sau în facturi.  
**Executare din căutare ordine Grupare pe destinaţie**: specifică faptul că ordinele clienţi vor fi grupate după destinatar şi destinaţie la executarea directă în avize sau în facturi.  

### Descărcare

**Prioritate parametri inserați pentru fiecare linie ordin**: dacă este activ, gestiunea și șablonul de descărcare sunt preluați din liniile ordinului. Dacă nu este activ, sunt utilizate informațiile inserate în următoarele două câmpuri: *Gestiune* și *Șablon*.

### Analitic

Aceşti parametri indică prioritatea de căutare a centrelor de cost sau de profit pentru a le atribui articolelor documentului.

Modificarea priorităților se poate face utilizând butoanele:  

> **Mută sus** ![](/img/neutral/common/move-up.png) și  
> **Mută jos**![](/img/neutral/common/delete-cc.png).

*Valori implicite*: CDC sau CDP este preluat din Tipul facturării, dacă există. Pentru informații suplimentare, consultați tabelul [Tip facturareconfigurations/tables/sales/sales-turnover).

Dacă nu este prezent în tipul facturării, sistemul îl va căuta în registrul clientului. Dacă nu este prezent nici aici, acesta va fi căutat în registrul articolului și ulterior în gestiune.

După inserarea parametrilor aceștia trebuie salvați cu ajutorul butonului **Salvează**.