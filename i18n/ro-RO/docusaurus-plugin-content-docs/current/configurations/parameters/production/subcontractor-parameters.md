---
title: Parametri sistem lohn
sidebar_position: 2
tags: [Sistem lohn]
---

Cu ajutorul acestei ferestre sunt inserați toți parametrii relativi la modulul Sistem lohn și, mai exact, modul în care trebuie să fie efectuate mișcările de gestiune generate de procedurile modulului.

### Generale

**Tip aviz**  
În secțiune se inserează tipul avizului de vânzare care trebuie să fie propus implicit când se utilizează procedura pentru crearea avizelor de livrare în sistem lohn. Acest tip de aviz va utiliza automat gestiunea și șablonul inserate în combo-boxurile din *Livrare materiale la terți* care se află în fereastra *Parametri în sistem lohn*.

**Cod operator obligatoriu**: când este activ, este necesară inserarea codului operatorului în momentul inserării avizului de livrare în sistem lohn.

**Date materiale propuse**: afișează 4 posibilități diferite pentru a propune materialele automat procedurii, în tab *Materiale de livrat* din ordinul în sistem lohn.  
Posibilitățile sunt:  
1. *De la ultima livrare efectuată către același terț*: se controlează ultimul ordin în sistem lohn generat pentru același terț și în care este prezent același articol de produs;  
2. *Extindere nivel din structura listei*: se controlează lista componentelor a articolului inserat în tab *Articole de produs*;  
3. *Livrare același articol de produs*: se inserează, în tab *Materiale de livrat*, același articol inserat în tab *Articole de produs*;  
4. *Niciun material*: în tab *Materiale de livrat* nu este propus niciun material. 

**Controlează disponibilitatea**: dacă este activ, permite procedurii să controleze sau nu disponibilitatea care provine din flagurile inserate în *Consideră disponibilitățile provenite din*.

**Niciun material în livrare**: dacă este activ, nu permite inserarea niciunui articol pentru niciun articol de produs în tab *Materiali de livrat*.

**Disponibilitate materiale**: dacă este activ, procedura va considera și disponibilitatea materialelor de utilizat când se realizează reintrarea din SL.

**Încărcare/Descărcare automată**: dacă este activ, permite ca înregistrările de gestiune în ieșire să fie realizate automat când avizul de livrare este listat. Această posibilitate permite evitarea pasului de descărcare a avizelor de livrare în SL.

**Blochează inserarea documentului în sărbători legale**: dacă este activ, nu permite inserarea unui ordin, a unui aviz sau a unei reintrări în zile nelucrătoare.

**Cost zero dacă lipsește oferta**: dacă este activ, permite inserarea unui articol în tab *Articole de produs* al ordinului SL fără ca procedura să insereze, ca preț unitar lucrare, costul ultim al articolului preluat din registru; deci se inserează un preț unitar egal cu zero.

**Control terț de referință pentru articole**: dacă este activ, opțiune care permite procedurii de creare a ordinelor SL să controleze dacă articolul care se inserează în tab *Articole de produs* are, ca furnizor preferențial, terțul inserat în antetul ordinului.

**Disponibilitate obligatorie**: dacă este activ, nu permite inserarea materialelor în ordinele SL în cazul în care nu eixstă disponibilitate în data eventualei livrări la terț.

**Propune ultimul preț lucrare efectuată**: dacă este activ, permite să fie propus prețul din ultimul ordin în SL emis pentru acel articol pentru același terț, în ordinul în SL în câmpul *Preț unitar lucrare* din tab *Articole de produs*.

**Valor. lucrare materiale la cost**: radio butoanele permit stabilirea modului în care se face valorizarea: la *ultimul* cost sau la costul *mediu*; deci este o metodă pentru a decide dacă materialele utilizate de terți trebuie să fie imputate lucrării utilizând ultimul cost sau costul mediu dintre cele inserate în registrul articolului.

**Versiune**: permite selectarea versiunii listei componentelor.

**Datele materialelor propuse în ordinele în sistem lohn** este constituită din 4 secțiuni:

1. **Consideră disponibilitățile provenite din**: se poate alege să fie considerate sau nu disponibilitățile car eprovin din *Sistem lohn/Producție/Achiziții/Gestiune/Vânzări*. Deci, dacă de exemplu utilizatorul alege să activeze doar parametrul pentru achiziții și nu pe cel pentru vânzări, disponibilitățile care vor fi considerate vor fi cele care provin din ordine furnizori, avize și facturi de achiziție și din cereri de achiziții și nu pe cele care provin din ordine clienți, avize și facturi de vânzare.

2. **Produse finite** (parametru): oferă posibilitatea, în momentul inserării unui articol în tab *Articole de produs* a ordinului în SL, de a considera cantitățile articolelor pe baza lotului economic, și/sau de a considera eventual și multiplii lotului;

3. **Materiale**: oferă posibilitatea, în momentul inserării unui articol în tab *Articole de produs* a ordinului în SL, de a considera, pentru materialele de livrat, cantitățile articolelor pe baza lotului economic, și/sau de a considera eventual și multiplii lotului;

**Regenerare materiale la actualizare articol**: dacă este activat, de fiecare dată când se modifică linia articolului în tab *Articole de produs* al ordinului în SL, procedura regenerează informațiile relative la materialele de livrat și de utilizat de inserat în ultimul tab al ordinului;

4. **Gestiuni**: utilizatorul poate să aleagă ca programul să considere gestiunile pe baza tipului avizului de reintrare sau pe baza tipului avizului de livrare, în loc să utilizeze setările inserate în combo-boxurile *Livrări materiale la terți* și *Reintrare produs*.

### Gestiuni

**Livrare materiale la terți**  
În secțiune se inserează gestiunea și șablonul care trebuie să fie considerate pentru descărcarea materialelor destinate terților. Deci, gestiunea inserată este cea din care vor fi descărcate materialele inserate în tab [Materiale de livratsubcontractor/subcontractor-orders/insert-subcontractor-orders/materials) al ordinului în sistem lohn.

**Încărcare materiale la terți**  
În secțiune se inserează gestiunea și șablonul care trebuie să fie considerate pentru încărcarea materialelor destinate terților. Deci, gestiunea inserată este cea în care vor fi încărcate materialele inserate în tab *Materiale de livrat* al ordinului în sistem lohn. Aceste date sunt preluate din șablonul de contrapartidă inserat în tabelul șabloanelor în corespondență cu șablonul care efectuează descăcarea materialelor destinate terților (și anume șablonul inserat în combo box-ul din secțiunea *Livrare materiale la terți*).

**Livrare materiale între terți**  
În secțiune se inserează gestiunea și șablonul care trebuie să fie considerate pentru mutarea materialelor de la un terț la altul. Aceste date sunt utilizate în fereastra *Transfer între terți*.

**Consum materiale utilizate**  
În secțiune se inserează gestiunea și șablonul care trebuie să fie considerate pentru descărcarea materialelor pe care terții le-au utilizat. Deci, gestiunea inserată este cea din care vor fi descărcate materialele inserate în tab *Materiale utilizate* din *Reintrări în sistem lohn*.  

**Reintrare produs W.I.P.**  
În secțiune se inserează gestiunea și șablonul care trebuie să fie considerate pentru încărcarea produselor finite (sau semifabricate) pe care terții le-au realizat. Deci, gestiunea inserată este cea în care vor fi încărcate articolele inserate în tab *Articole reintrate* din *Reintrări în sistem lohn*.

**Reintrare articol finit**  
În această secțiune se inserează gestiunea și șablonul care trebuie luate în considerare pentru încărcarea produselor finite/semifabricatelor realizate de terți. Aceasta va fi utilizată în cazul în care faza externă este ultima fază a ciclului de lucru. Astfel, gestiunea setată este cea în care vor fi încărcate articolele introduse în tab *Articole* din *Reintrare sistem lohn*.

**Materiale restituit**  
În secțiunea se inserează gestiunea și șablonul care trebuie să fie considerate pentru încărcarea materialelor restituite. Deci, gestiunea inserată este cea în care vor fi încărcate articolele inserate în tab *Materiale utilizate* din *Reintrări în sistem lohn* și căruia i-a fost asociată cantitatea restituită.