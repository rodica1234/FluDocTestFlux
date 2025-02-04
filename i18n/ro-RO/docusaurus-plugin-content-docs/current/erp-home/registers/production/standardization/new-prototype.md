---
title: Management prototipuri
sidebar_position: 2
---

Prototipuri este răspunsul la modelul ETO (Engineering To Order), tipic companiilor din sectorul Manufacturing sau Plant Engineering, care operează la comandă, prevăzând crearea unui produs „pe măsură” pentru un anumit client.

*Integrare cu lista componente/cicluri*

După definirea în prototip a tuturor componentelor necesare, la orice nivel al listei componentelor, se poate crea lista componentelor relativă și analiza, cu privire la aceasta, eventuale diferențe succesive.   
Cu ajutorul aceste funcționalități se poate evita reconstruirea structurii produsului în modulul *Liste componente*, după ce oferta este confirmată de client.  
Aceeași procedura este operativă și în contextul ciclurilor de lucru, unde, datorită definirii anterioare a fazelor de lucru, cu confirmarea comenzii se poate obține și ciclul de lucru care reflectă ceea ce a fost definit în structura prototipului.

Fereastra conține un antet, unde se poate insera codul produsului finit și unitatea sa de măsură și diverse tab-uri.

### Componente

Permite crearea, modificarea și afișarea arborelului listei componentelor a prototipului.
Cu ajutorul butoanelor din ribbon bar, pot fi adăugate sau eliminate componentele din arbore. Acest lucru se poate realiza și cu opțiunile activabile cu tasta dreapta a mouseului poziționat pe componentul din arbore. O altă posibilitate este utilizarea drag&drop pentru a muta un component în arbore.

Pentru fiecare element din arbore, în tab **Generale** pot fi definiți parametrii specifici ai componentului în secțiunea **Component** și pentru părinte, în secțiunea **Prototip**.

*Câmpuri sepcifice* 

**Cost lucrare**: însumează costul manoperei cu al mașinii;  
**Cost component**: însumează costul materialului cu al lucrării.  

Dacă elementul selectat în arbore este *semifabricat*, în tab *Componente* pot fi afișate componentele de prim nivel din care este format.  

În **Extra data - model** și **Extra data - component** pot fi inserate datele suplimentare referitoare la articolul părinte și la component. Pentru informații suplimentare consultați [Extra dataconfigurations/utility/extra-data/extradata/new-extradata-simple).   

În partea inferioară a form-ului, în tab **Ciclu**, se pot insera fazele lucrărilor relative la fiecare element din arbore, cu timpii și costurile de montaj și de lucru. Se poate insera manual un cost în **Cost fază manual** care va avea prioritate mai mare în momentul calculării costurilor.

În tab **Faze de descăcare** se inserează faza în care elementul relativ trebuie descărcat din gestiune.

*Butoane specifice*:

> **Parametri prototip**: permite consultarea acestor parametri;     
> **Recalculare costuri**: permite recalcularea costurilor prototipului pe baza costurilor care îl compun;    
> **Registru articole**: permite consultarea registrului articolului relativ la elementul selectat;    
> **Parametri MRP**: permite consultarea parametrilor MRP relativi la elementul selectat;    
> **Listă componente**: permite consultarea listei componentelor relativă la elementul selectat;    
> **Ciclu de lucru**: permite consultarea ciclului de lucru relativ la elementul selectat;   
> **Analizează**: permite confruntarea componentelor existente în tab *Componente* cu cele prezente în lista componentelor din registru, evidențiind componentele prezente în ambele;        
> **Importă**: selectând din arbore un component, se poate atașa la acel component o listă de componente deja predefinită, care se poate astfel modifica;      
> **Exportă**: memorizează sau suprascrie lista componentelor creată în prototipuri. Funcționează împreună cu opțiunea *Export listă componente* în tab *Generale*, secțiune *Componente*;    
> **Inserează/Elimină component**: permite adăugarea/ștergerea unui component la/din elementul selectat;  
> **Extinde tot**: permite consultarea întregului arbore al listei componentelor;    
> **Copie/Taie/Lipește**: permite copierea/tăierea/lipirea unui element al arborelui listei componentelor.

### Costuri

În acest tab sunt preluate prețurile generale și pe client. Se pot insera și **Costurile directe**, **Costurile generale** și/sau **Alte costuri** care vor fi considerate la calculul total.

**Cost orar manual**: permite inserarea manuală a costului, care va avea impact doar asupra acelor componente care au asociate faze;    
**Cost material/manoperă/mașină**: reprezintă totalul costului materialului/manoperei/mașinii calculat din arborele listei componentelor;      
**Cost gestiune**: reprezintă totalul costurilor *Materiale*, *Manoperă* și *Mașină*;     
**Costuri directe**: reprezintă totalul costurilor inserate în secțiunea *Costuri directe*;    
**Total costuri generale**: reprezintă totalul *Cost gestiune* și *Costuri directe*;    
**Reîncărcare**: permite inserarea reîncărcării în procent sau valoare; această informație majorează *Costul de gestiune* sau *Totalul costurilor generale*, dacă în *Parametri prototip* în *Calcul p. vânzare cu reîncărcare în:* este activat *Costuri directe* sau *Costuri totale*;      
**Preț de vânzare**: reprezintă totalul câmpului *Total costuri generale* și al reîncărcării;     
**Costuri generale**: reprezintă totalul costurilor inserate în secțiunea *Costuri generale*;    
**Total alte costuri**: reprezintă totalul costurilor inserate în secțiunea *Alte costuri*;    
**Corecție**: permite inserarea valorii pentru a corecta noul preț de vânzare;      
**Rotunjire**: permite rotunjirea în plus sau în minus și ordinea mărimii;      
**Preț de vânzare nou**: totalul valorilor din *Preț de vânzare*, *Costuri generale*, *Total alte costuri*, *Corecție* și *Rotunjire*. Dacî în **Parametri prototip**este activ parametrul **Nou preț de vânzare**, acest câmp este calculat automat și nu poate fi modificart manual, dar dacă dezactivați câmpul poate fi modificat manual;        
**Lot de producție**: reprezintă valoarea lotului de producție care determină o majorare sau diminuare a costurilor manoperei și mașinii. În plus, incide pe costul unitar al montajului;    
**Total lot producție**: reprezintă totalul câmpului *Nou preț de vânzare* calculat pentru *Lotul de producție* indicat.

**Modalitate de calcul costuri**

Costurile raportate pentru fiecare component sunt costuri unitare. În structura listei prototipurilor se raportează costurile unitare și totale ale materialului și ale lucrărilor raportate la cantitățile părinte ale fiecărui component. 
- pentru *articolele de achiziție* nu se calculează costurile lucrării, iar costurile materialelor sunt preluate pe baza parametrilor prototipurilor (costuri de gestiune, costuri ofertă și cel mai bun preț din ofertă).  
Costul este căutat în ofertă pe baza datei de valabilitate a prototipului; dacă data de valabilitate a prototipului nu este inserată, costurile sunt căutate după data curentă.
Pentru căutarea costul în oferte, este folosită UM utilizată și ca UM alternativă a articolului, iar dacă se găsește un preț cu o UM diferită de UM Utilizare, se aplică factorul de conversie al UM Alternative a articolului pentru a calcula costul materialului.
Costul materialului componentei poate fi introdus manual și se recalculează costul materialului prototipului pe baza noului cost. Lansând însă recalcularea costurilor din ribbon bar, costul este căutat pe baza regulilor stabilite în parametri.
- pentru *articolele din sistem lohn*, costurile materialului sunt preluate din componente iar costurile lucrării sunt preluate din faze dacă sunt prezente; în caz contrar sunt preluate din ofertele din sistem lohn.  
- pentru *articolele de producție*, costurile materialului sunt preluate din componente iar costurile lucrării sunt preluate din faze.
Calculul costurilor lucrării consideră prioritar costul manual din fază. Dacă acesta nu există, verifică dacă este prezent costul manual orar în tab *Costuri*, iar dacă nu este prezent, căută costul în centrul de cost al grupurilor de manoperă și mașini.

Pentru montaj, dacă este introdus timpul de montaj, acesta este considerat inclusiv cu manoperă și mașini și totul este calculat ca manoperă folosind costul pe baza priorităților descrise anterior.  
Dacă însă se separă costul montajului mașinii de cel al manoperei, trebuie să fie inserate grupul de manoperă și mașina pentru căutarea costului centrului său de cost. Dacă aceste informații lipsesc, chiar dacă sunt inserate timpii montaj operator și montaj mașină acestea nu sunt considerate la calcularea costului.

Fiecare component al listei prototipului include în costul său și costul componentelor sale, același deci și în prototip.  

Inserarea lotului de producție în tab *Costuri* este doar pentru calculul costului unitar al montajului de adăugat la costul de gestiune al prototipului prin modificarea lotului de producție, crescând sau diminuând costul manoperei și al mașinii în tab *Costuri*.

Procedura de recalculare a costurilor recalculează toate costurile prin preluarea datelor din parametrii de achiziție (costuri de gestiune, costuri din ofertă și cel mai bun preț din ofertă) și din fazele pentru lucrări.