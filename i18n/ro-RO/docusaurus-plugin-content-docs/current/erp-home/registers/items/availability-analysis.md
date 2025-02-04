---
title: Analiză disponibilitate
sidebar_position: 6
---

Fereastra pentru listarea analizei se află în **Home > Articole > Analiză disponibilitate** și cuprinde trei zone: filtre, gridul rezultatelor și cel al detaliilor.

### Zona de filtre

**Articolo**: secțiunea permite selectarea articolului/articolelor pentru care se dorește verificarea disponibilității în gestiune.

**Cantitate cumulată**: permite vizualizarea cantității disponibile cumulative pe articol sau pe fiecare document. 
Tot în această secțiune puteți să decideți dacă sa fie luat în calcul și *stocul indisponibil* în perioada considerată sau dacă să fie vizualizat și stocul care va fi disponibil pornind de la data în care se efectuează căutarea, daca aceasta *nu este în întârziere*.

**Consideră disponibilitățile care provin din**: permite selectarea categoriilor care sunt considerate pentru disponibilitate;

**Perioadă de verificare**: permite indicarea perioadei în care se verifică disponibilitatea. Poate fi: **Lunară** (se inserează numărul de luni care va fi considerat), **Săptămânală**, **Zilnică** sau se poate insera o dată exactă pentru efectuarea verificării.

**Vizualizează linii fără disponibilitate**: dacă este activ, permite vizualizarea liniilor care nu au disponibilitate în acel moment, cu opțiunile:

- **Doar în întârziere**: deci liniile a căror cantitate, la data lconsiderată, ar trebui să fie deja produsă, dar din cauza întârzierilor de producție nu este încă;

- **Doar cu stoc negativ**: deci cantități care trebuie produse, care sunt deja planificate, dar pentru care stocul nu este suficient pentru a acoperi producția (sistemul va conține probabil un ordin furnizor pentru a acoperi cantitatea lipsă);

- **Rezumat**: reprezintă rezumatul celor două opțiuni menționate anterior;

- **Detaliu listă componente**: dacă este activ, este afișată disponibilitatea tuturor componentelor listei componentelor articolului căutat;

**Puncte de vânzare**: în cazul comerțului cu amănuntul, puteți vizualiza disponibilitatea prin filtrarea după punctul de vânzare;

**Pentru documente fără datele necesare**: permite să nu fie considerate articolele care nu au data de recepție/livrare a mărfurilor sau, dacă doriți să le considerați, să puteți insera datele în câmpul alăturat;  

**Disponibilitate gestiune**: permite inserarea gestiunilor considerate pentru verificarea stocului.

După inserarea filtrelor dorite, este suficient să apăsați butonul **Caută** din ribbon bar.

### Disponibilitate produs

În tabelele cu rezultate pe gestiuni vor fi afișate diversele linii de disponibilitate în baza documentelor sau linia cumulativă în baza gestiunilor. Deci vor fi vizualizate disponibilitățile generale în baza angajamentelor tuturor gestiunilor (Total) sau disponibilitățile pe fiecare gestiune (toate tab-urile cu nume de gestiune codificate în database).

### Detalii

Clicând pe linia cu gestiunea dorită, se afișează toate documentele asociate acelei linii. Deci, ordinul client, ordinul de producție și comanda de referință și eventuale documente de vânzare, dacă există.

*Buton specific*:
> **Expandează/comprimă grid articole**: permite vizualizarea detaliată sau nu a rezultatelor.

Pentru detalii despre funcționarea generală a form-urilor: [Funcționalități, butoane și câmpuri comuneguide/common).
