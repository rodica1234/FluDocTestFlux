---
title: Filtrare, sortare și alte operații cu înregistrări în griduri
sidebar_position: 5
---

### Filtrare înregistrări

Înregistrările pot fi filtrate și/sau sortate în griduri.

Prima linie a gridului este pentru filtrare (icoana din antetul liniei are ca imagine: ![](/img/neutral/common/filter.png)): după ce ați deschis formul, este suficient să utilizați butonul de căutare pentru a afișa înregistrările prezente în el și să începeți inserarea (dacă procedura o prevede) sau gestionarea gridului. Caracterul jolly al căutării în interiorul întregului câmp este ‘%' iar pentru un singur caracter jolly este ‘_'.

Filtrul câmpurilor de text nu este ‘case sensitive' (nu face distincția între minuscul/majuscul). După ce se începe filtrarea înregistrărilor cu ajutorul antetelor coloanelor, în partea inferioară a formului va apare o mică fereastră care va afișa modul în care va fi aplicat filtrul însuși: în partea dreaptă a acestei secțiuni va apare un buton de închidere/anulare a filtrului, cât și butonul ![](/img/neutral/common/pencil.png) pentru editarea filtrului(astfel pot fi inserate filtre mai complexe).

![](/img/ro-RO/guide/operations-with-data/filter-sort-and-other-operations-with-records-in-grids/image03.png)

Tot în antetul coloanei, este activ butonul (similar unei pâlnii) care afișează o check list cu diverse evenimente ale înregistrărilor prezente în grid, cu posibilitatea de a selecta totul sau doar ceea ce ne interesează.

![](/img/ro-RO/guide/operations-with-data/filter-sort-and-other-operations-with-records-in-grids/image04.png)

### Sortare înregistrări

În griduri, în afara primei linii de filtru, înregistrările pot fi ordinate (crescător sau descrescător) pe o coloană făcând clic pe antetul coloanei: dacă doriți să ordonați și alte coloane, trebuie să țineți apăsată tasta ‘Shift' și să selectați cu mouse-ul coloanele dorite.

Puteți să copiați datele selectate din grid: cu CTRL+C se copie valorile, iar cu CTRL+SHIFT+C se copie și antetele colonelor.

În partea inferioară a ferestrei este prezent un text care indică înregistrarea selectată și totalul înregistrărilor prezente, cu butoanele care permit trecerea de la o înregistrare la alta sau saltul de la o pagină la alta sau saltul la sfărșitul sau începutul gridului. Scroll-ul gridului afișează numărul de înregistrări actuale față de totalul înregistrărilor.

Cu clic dreapta pe antetele gridului sunt permise următoarele operații:

**Ordonează ascendent**: setează ordonarea ascendentă după câmp

**Ordonează descendent**: setează ordonarea descendentă după câmp

**Elimină ordonarea**: șterge ordonarea

### Alte operații

**Grupează după această coloană**: înregistrările gridului sunt grupate după câmp. Clic pe semnul + al grupului pentru a afișa detaliile sale. Sunt permise mai multe grupuri, unul în interiorul celuilalt

**Degrupează**: (prezent dacă a fost definit un grup) anulează gruparea setată

**Afișează panoul grupului**: afișează deasupra gridului secțiunea pentru gestionarea grupării

**Ascunde **panoul grupului****: (dacă panelul grupului este prezent) ascunde secțiunea pentru gestionarea grupării

**Afișează selector coloană**: permite adăugarea coloanelor prevăzute pentru grid, dar care au fost ascunse

**Adaptează**: adaptează dimenisiunea coloanei selectate la valorile prezente în câmp

**Adaptează (toate coloanele)**: adaptează dimenisiunea tuturor coloanelor la valorile prezente în câmp

**Modifică index grupare**: (doar în cazul datelor grupate) deschide un form în care se poate seta un contor al evenimentelor pe grup, setând label-ul relativ și formatarea sa. (totalizările nu sunt prevăzute de această opțiune, dar se poate seta gridul cu încărcare totală și apoi panoul Rezumate totaluri, cum este explicat în continuare)

**Editor filtrare**: deschide panoul pentru inserarea manuală a filtrului în grid

**Afișează panoul de căutare**: deschide un câmp de căutare după evenimentele gridului, filtrând înregistrările

**Stil fix**: permite setarea unei coloane ca fiind fixă la stânga sau la dreapta gridului, iar celelalte pot fi derulate orizontal. Pentru a seta mai multe coloane fixe țineți apăsat CTRL iar cu butonul drepta adăugați-le pe cele dorite.

**Panou rezumat**: deschide panoul rezumat al gridului, unde va fi afișat, de exemplu, numărul total al liniilor

**Panou rezumat totaluri**: permite afișarea panelului care totalizează câmpurile afișate. Această opțiune este gestionată în cazul în care gridul a fost setat pentru a încărca toate datele 

**Rând de filtrare**: activează/dezactivează linia inițială a filtrului

**Subsol pagină grup**: afișează o secțiune finală pentru fiecare grup, în care sunt prezente totalurile și valorile coloanelor pentru acel grup (pentru griduri cu încărcare toatală)

**Export**…: permite exportarea gridului în diverse formate (csv, html, imagine, mht, pdf, rtf, text, xls, xlsx, xps).

**Print Preview**: afișează raportul tabelului gridului, din care datele pot fi exportate, listate sau atașate la un email. Setările sunt cele ale imprimantei implicite

**Listează**: execută direct imprimarea raportului tabelului gridului la imprimanta implicită.