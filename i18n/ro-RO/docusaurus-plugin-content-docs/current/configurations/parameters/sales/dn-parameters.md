---
title: Parametri avize de vânzare
sidebar_position: 3
---

Parametrii avizelor de vânzare permit setarea de bază pentru gestionarea corectă şi în baza particularităților fiecărei societăți.

*Butoane specifice*:

> **Restaurează parametrii**: permite restaurarea parametrilor la valorile inițiale. 

### Generale

**Gestionare UM dublă**: când este selectat, se activează câmpurile *UM alternativă* şi coloana *Cantitate alternativă* din gridul *Articole* al avizului. 

**Propune automat U.M. alternativă**: acest parametru se activează doar dacă *Gestiune UM dublă* este activ. Când este inserat un articol care conţine în registrul său, în tab UM alternativă o UM alternativa implicită, această UM este automat propusă ca UM alt pentru articol şi este calculată şi cantitatea alternativă folosind factorul de conversie al acesteia. 

**Control continuitate dată şi număr**: când este activ, trebuie să fie progresivitate între numărul şi data documentului. Astfel, dacă în data 21/11/2021 sunt 3 documente cu numărul 7, 8, 10 şi pentru data 22/11/2021 există avizul numărul 11, şi utilizatorul vrea să insereze unul în data 22/11/2012 – unicul număr posibil în acea dată va fi 12 pentru a menţine progresivitatea între număr şi dată.  dacă este activ, aplicația va verifica secvențialitatea dată/număr a avizelor. În cazul în care nu există continuitate, aplicația va returna o eroare împiedicând utilizatorul să introducă avizul. Dacă acest flag este activ, nu va fi posibilă activarea următoarelor două opțiuni *Recuperare doar în ziua curentă* și *Recuperare automată*.

**Recuperare din ziua curentă**: când este activ, recuperarea golurilor de numerotare se realizează automat doar pentru ziua curentă. Dacă de-a lungul zilei au fost create avizele 7,8,11,12 şi acest flag este setat, următorul număr propus va fi 10 adică cel mai mic număr liber faţă de cel inserat de utilizator.  

**Control disponibilitate**: dacă este activ, va fi verificată disponibilitatea articolului avizului. 

**Disponibilitate obligatorie**: dacă este activ, disponibilitatea articolului avizului va fi obligatorie, şi anume cantitatea nu va putea fi superioară disponibilităţii. 

**Recuperare automată**: dacă este activ, în recuperare va fi propus automat primul număr disponibil. Acest parametru se poate activa doar dacă cel anterior a fost activat. Dacă nu este activ, aplicația va permite recuperarea automată, dar numărul va trebui să fie inserat manual.

**Exclude ordine clienţi**: dacă este activ, angajarea ordinelor clienţi nu va fi considerată la calcularea disponibilităţii articolului avizului. 

**Vizualizează dispononibilitatea**: dacă este activ, inserând cantitatea în linie va fi afişată disponibilitatea articolului. 

**Consideră disponibilitate din**:  
> **Sistem lohn**: dacă este activ, documentele din sistem lohn vor fi considerate la calcularea disponibilităţii articolului avizului.  
> **Achiziții**: dacă este activ, documentele de achiziţie vor fi considerate la calcularea disponibilităţii articolului avizului.  
> **Vânzări**: dacă este activ, documentele de vânzare  vor fi considerate la calcularea disponibilităţii articolului avizului.  
> **Prod. planificată**: dacă este activ, documentele din necesar materiale şi comanda de producţie vor fi considerate la calcularea disponibilităţii articolului avizului.  
> **Prod. lansată**: dacă este activ, ordinele de producţie vor fi considerate la calcularea disponibilităţii articolului avizului.  
> **Gestiune**: dacă este activ, înregistrările de gestiune vor fi considerate la calcularea disponibilităţii articolului avizului.  

### Executare

**Plată**: specifică valoarea utilizată pentru plata avizului în cazul executării multiple a ordinelor: primul ordin, registru sau selecţie manuală 

**Destinatar**: specifică valoarea utilizată pentru destinatarul avizului în cazul executării multiple a ordinelor: primul ordin, registru sau selecţie manuală. 

**Control coerenţă între plăţi aviz şi ordin**: dacă este , nu va fi permisă executarea ordinelor cu plăţi diferite. 

**Recalculează CDC/CDP:** în cazul în care a fost aleasă generarea avizului pornind din ordinul client cu procedura corespunzătoare, activând acest parametru, sistemul va recalcula centrele de cost și profit, fără a lua în considerare cele stabilite în ordin. Dacă nu este activat, sistemul nu va recalcula aceste date, ci le va păstra pe cele introduse în ordinul clientului.

**Propune loturi**: dacă este activ, în momentul expedierii, în cazul în care este inserată o cantitate de executat diferită față de cea din documentul sursă, cantitatea loturilor va fi egală cu cantitatea din rândul documentului creat pentru a evita ca documentul creat să aibă o cantitate diferită pe rând față de cea din loturi.

### Descărcare

**Creează înregistrarea cu data documentului**: când este setat, înregistrarea de gestiune este creată cu data egală cu data avizului, şi nu va fi necesară specificarea datei înregistrării în fereastra de descărcare. 

**Prioritate gestiune şi şablon de descărcare din liniile articol ale avizelor**: când acest parametru este setat, gestiunea şi şablonul de descărcare sunt citite din liniile avizului, iar dacă nu a fost setat sunt utilizate gestiunea şi şablonul inserate în acest  form de parametri. 

**Încărcare/Descărcare automată**: dacă este activ, descărcarea avizului va fi efectuată automat la activarea opțiunii *Listat*. Dacă nu este activ, descărcarea se poate face cu butonul (vedeți [Inserare aviz-delivery-notes/insert-delivery-notes/insert-delivery-note)) sau cu procedura relativă.

**Aviz articole fictive**: dacă este setat, în timpul descărcării avizului, programul controlează dacă în aviz sunt prezente articole fictive; dacă acestea există, este lansat un mesaj pentru confirmarea operației. În cazul confirmării, tot avizul va fi descărcat (cu excepția articolelor fictive), iar în cazul negării, avizul nu va fi descărcat.

### Analitic

Aceşti parametri indică prioritatea de căutare a centrelor de cost sau de profit pentru a le atribui articolelor documentului.

Modificarea priorităților se poate face utilizând butoanele:  

> **Mută sus** ![](/img/neutral/common/move-up.png) și  
> **Mută jos**![](/img/neutral/common/delete-cc.png).

**Valori implicite**: CDC sau CDP este preluat din *Tipul facturării*, dacă există. Pentru informații suplimentare, consultați tabelul [Tip facturareconfigurations/tables/sales/sales-turnover).

Dacă nu este prezent în tipul facturării, sistemul îl va căuta în registrul clientului. Dacă nu este prezent nici aici, acesta va fi căutat în registrul articolului și ulterior în gestiune.

După inserarea parametrilor aceștia trebuie salvați cu ajutorul butonului **Salvează**.

<iframe width="560" height="315" src="https://www.youtube.com/embed/fEpcxS9pRkg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>