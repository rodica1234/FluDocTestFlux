---
title: Ciclu nou
sidebar_position: 2
---

După crearea listelor componentelor articolelor, se definesc ciclurile de lucru, și anume ansamblul de diverse faze de producție ale unui produs.

Procedura de creare a unui **Ciclu nou** se deschide din:

**Producție > Cicluri de lucru > Cicluri de lucru**, clicând pe butonul **Nou**

sau

**Producție > Cicluri de lucru > Nou ciclu de lucru**.

Cu ambele proceduri, se va deschide fereastra **Gestionare cicluri de lucru** compusă dintr-o secțiune în care se vor defini caracteristicile obligatorii ale ciclului și dintr-o secțiune compusă din diverse tab-uri care-i grupează caracteristicile specifice.

### Secțiune superioară

Conține informațiile referitoare la ciclu.

**Articol** și **Variantă**: cu ajutorul help-ului de câmp se inserează articolul relativ la ciclu și, eventual, varianta sa, dacă există;

**Versiune**: reprezintă versiunea listei pentru care se inserează noul ciclu;

**Ciclu**: se poate alege una din opțiunile *Operativ* sau *Neoperativ*;

**Tip ciclu**: în mod normal se alege opțiunea *Standard*; în cazul în care sunt mai multe cicluri pentru același articol, se alege opțiunea *Alternativ*;

**Dată inserare/Dată ultima modificare**: sunt câmpuri care se completează automat la crearea și la modificarea ciclului.

### Faze

Conține fazele de lucru ale ciclului. Fiecare ciclu poate avea mai multe faze de lucru.

*Câmpuri specifice*

**Cod**: reprezintă codul fazei standard. Când selectați faza, aplicația va completa automat informațiile cu datele inserate în tabelul Fasi Standard;  
**Fază**: reprezintă numărul progresiv al fazei;  
**Subfază**: reprezintă numărul de subfaze în raport cu numărul fazei;  
**Tip**: poate fi o fază **Internă**, care va implica doar crearea ordinelor de producție sau o fază **Externă** care va implică, pe lângă ordinul de producție și un ordin în sistem lohn;  
**CDL**:reprezintă centrul de lucru, și anume mașina care va efectua faza;  
**Timp fix**: dacă este activ, timpul fazei este fix, nesupus variațiilor;  
**Control calitate**: dacă este activ, faza va fi supusă unei serii de analize legate de controlul calității;  
**Fază productivă/Fază cu mișcare**: sunt doi parametri importanți. Dacă faza este productivă, se pot insera semnalări de producție (deci producția pentru această fază va fi detectată). Dacă faza este și cu mișcare, în momentul în care se detectează faza de producție, se creează și înregistrări de gestiune. Acest lucru înseamnă că, realizând semnalarea de producție automat se efectuează și încărcarea produsului finit în gestiune și la descărcarea materiei prime utilizare pentru producerea fazei;  
**Mașina**: când selectați mașina fazei, aplicația va completa automat informațiile cu datele inserate în tabelul [Mașini
**Grup de manoperă**: când selectați grupul, aplicația va completa automat informațiile cu datele inserate în tabelul [Grupuri de manoperă
**UM timp**: se referă la U.M a timpului mașină, de obicei exprimată în minute mașină;  
**Început/Sfârșit valabilitate**: reprezintă intervalul de valabilitate al fazei;  
**Tip de suprapunere**: implicit este propusă valoarea **Niciuna**. Dacă însă faza se suprapune alteia, se indică tipul propus în combo: **Total**, pe **Bucăți** sau pe **Timp**;  
**Valoare**: acest câmp se referă la *Tipul de suprapunere* (de exemplu, dacă  suprapunerea este pe *Bucăți*, în câmp se inserează după câte bucăți pornește faza, dacă  suprapunerea este pe *Timp*, în câmp se inserează după cât timp pornește faza);  
**Fază suprapunere/Subfază suprapunere**: în cazul suprapunerii, în aceste câmpuri se inserează faza care va fi suprapusă și codul care va suprapune faza principală;  
**Cost unitar**:reprezintă costul fazei când se decide să nu fie valorizate mașina și grupul de manoperă;  
**Cont sintetic/analitic terț**: dacă faza este externă în aceste câmpuri se inserează conturile terțului fazei.

În următoarea secțiune se inserează date referitoare la mașină, operatori și timpi:

**Număr mașini**: reprezintă numărul de mașini implicați în realizarea fazei;  
**Timp mașină**: reprezintă timpii mașină exprimați în unitatea de măsură de referință selectată în gridul fazei;  
**Cantitate fază**: reprezintă cantitatea de produs care se estimează a fi produsă în faza selectată;  
**Număr lucrători/Timp lucrători**: reprezintă numărul de operatori necesari pentru realizarea fazei și timpul necesar, exprimat tot în minute;  
**Timp aștept/coadă**: indică timpul de așteptare/coadă care va fi adăugat la durata fazei.

### Diverse tab

**Montaj**: indica timpii de montaj pentru pornirea fazei și timpii de remontaj dacă o piesă trebuie facută iar; orele de montaj sunt, de obicei, timpi ficși. Se poate insera numărul de operatori necesari pentru faza de montaj a mașinii, iar dacă montajul are loc într-un centru de lucru diferit de cel al fazei, se poate insera ciclul de lucru utilizat pentru montaj;  

**Materiale**: indică materialele care vor fi descărcate la sfârșitul fazei specificate (deci nu la sfârșitul fazelor de producție a produsului finit);  

**Echipamente**: reprezintă echipamentele care vor fi utilizate în fază. Informațiile sunt precodificate în [Echipamente, din **Tabele > Producție**. Dacă este activată opțiunea **Planificată**, înseamnă că echipamentul va fi utilizat în producție;   

**Ustensile**: reprezintă ustensilele care vor fi utilizate în fază. Informațiile sunt precodificate în [Ustensile, din **Tabele > Producție**;  

**Control calitate**: dacă materialul implicat în faza este supus controlului de calitate, acest tab va fi completat selectând în primul rând **Planul de control**. Pentru fiecare fază a *Ciclului de lucru* se poate alege *Planul de control*, și, automat pentru plan, vor fi propuse **Probele planificate** de efectuat pentru verificarea articolului. Pentru detalii consultați [Planuri de control. 

**Desene**: reprezintă eventuale desene ale probei;

**Note**: reprezintă eventuale note tehnice sau de alt tip;

**Alternative**: in questo tab potranno essere inserite delle fasi alternative alla fase di riferimento; la fase alternativa potrà avere anche lo stesso codice della fase di riferimento ma per esempio avere il centro di lavoro diverso; in questo modo se il centro di lavoro della fase di riferimento dovesse essere pieno si potrà procedere con la produzione della fase alternativa nel centro di lavoro indicato;
în accest tab pot fi inserate fazele alternative celei de referință. Faza alternativă poate avea, de asemenea, codul fazei de referință, dar, de exemplu, un centru de lucru diferit. Astfel, dacă centrul de lucru al fazei de referință ar fi plin, se va putea continua cu producerea fazei alternative în centrul de lucru indicat;

**Extra data faze/extra data**: în aceste tab-uri se pot insera extra data pentru fiecare fază sau extra data asociate la ciclu, selectându-le dintre cele precodificate în tabelul *Extradata* (din Utilitare > Extradata). Pentru a insera un extra data, efectuați clic dreapta și selectați **Adaugă extra data** cu opțiunea **prim nivel** sau, dacă au fost deja inserate extra data **fiu** pentru a-l adăuga la unul existent. Astfel va apare o nouă linie în care veți putea continua inserarea.

*Pulsanti specifici*:

> **Actualizează din fază/Șterge date montaj**: apare în ribbon bar când sunteți în tab *Montaj*. Cu ajutorul butonului se actualizează datele montajului preluându-le din fază. Butonul *Șterge date montaj* va șterge toate datele montajului;  
> **Actualizează materiale din lista componente**: apare în ribbon bar când sunteți în tab *Materiale*.  Cu ajutorul butonului se actuadaugă materialele, preluându-le din lista de componente ale articolului;  
> **Inserează/Șterge echipament**: apare în ribbon bar când sunteți în tab *Echipament*. Permite inserarea/ștergerea echipamentelor;  
> **Inserează/Șterge ustensile**: apare în ribbon bar când sunteți în tab *Ustensile*. Permite inserarea/ștergerea ustensilelelor. 

Pentru detalii despre utilizarea comună a form-urilor vezi [Funcționlități, butoane și câmpuri comuneguide/common).