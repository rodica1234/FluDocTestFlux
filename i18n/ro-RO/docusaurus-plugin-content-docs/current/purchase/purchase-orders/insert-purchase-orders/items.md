---
title: Articole
sidebar_position: 3
---

**Tip linie** ofera posibilitatea de a selecta tipuri diferite de articole:

**Articol codificat**: se refera la articole codificate in registrul de articole al societatii, deci articole care influenteaza atat contabilitatea, cat si gestiunea;

**Articol necodificat**: se refera la articole care nu sunt codificate in registrul de articole al societatii, influenteaza contabilitatea, dar nu si gestiunea;

**Articol cheltuieli**: se refera la articole care sunt sau nu codificate, sunt gestionate separat in rezumatul documentelor; dacă articolul cheltuieli este codificat şi cu mişcări în gestiune va fi înregistrat în gestiune, dacă nu este codificat sau dacă nu este cu mişcări în gestiune nu va fi înregistrat în gestiune;

**Articol note: **este o simpla nota, nu influenteaza contabilitatea si nici gestiunea. Se poate renunta la inserarea pas cu pas a acestor date, pentru ca, in momentul in care inserati direct o clasa sau o matricola, tipul liniei 'codificat' este selectat automat.

**Cod**: se referă la "cod articol barcode" inserat în Articole, tab "Cod barcode". În momentul inserării, programul va prelua automat articolul asociat, cu toate datele registrului său. Inserarea clasei sau matricolei se poate realiza manual sau cu ajutorul "Help Articole" (dublu clic pe banda galbena) care va propune toate datele relative inserate in Registrul Articole. Dupa ce ati inserat articolul, descrierea lui va fi preluata automat din registru. Daca articolul are variante, trebuie sa selectati varianta corespunzatoare din combobox Variante.

**Unitate de masură**: este propusa U.M. principală a articolului, dar utilizatorul are posibilitatea să aleagă o unitate de măsură alternativă.

**Variante**: se referă la variantele articolului selectat, dacă există. Alegerea variantei este utilă pentru articolele cu această  configurare particulară, care pot avea un preţ diferit de cel standard inserat. Ca urmare, preţul articolului cu variante poate fi diferit de preţul articolului fără variante. Acest lucru poate cere, eventual, gestionarea variantelor articolului în oferta de vânzare de referinţă.

**Cantitate**: este cantitatea care se refera la U.M. principala care poate fi inserata manual de utilizator sau poate fi propusă automat pe baza cantităţii alternative şi a factorului de conversie.

**Preţ**: pretul este propus din oferta inserată în registrul furnizorului; oferta de referinţă pentru articol este afişată în tab "Totaluri". Acelaşi ordin furnizor poate conţine articole cu preţuri preluate din oferte diferite, dacă registrul conţine mai multe oferte în cascadă (vezi registrul clienţi/furnizori). Cu dublu clic în câmp Oferte (tab "Totaluri") utilizatorul are posibilitatea să selecteze o ofertă diferită de cea propusă automat, din care va fi preluat preţul articolului inserat. Dacă oferta lipseşte, informaţia propusă ar putea fi preluată din costul ultim inserat în registrul articolului, în cazul în care în parametrii nu este setat “costo zero în absenţa ofertelor”.

**TVA**: este preluat cu prioritate campul TVA din Registrul furnizorului. Dacă acesta nu este prezent, este propusă valoarea din registrul articolului. Este un câmp obligatoriu.

**Facturare achizitii**: este propusa informatia care se afla in tab "Generalitati" din Registrul articole. In cazul in care aceasta nu este prezentă, nu este propusă nici o informaţie, dar, în momentul contabilizării facturii, va fi considerată valoarea inserată în câmpul "Cheltuieli/Venituri contrapartida predefinit" din registrul furnizorului.

**Unitate de masura alternativa**: este propusa U.M. prezenta in gestiunea U.M. alternative din registrul articolului care are flag-ul "implicit".

**Cantitatea alternativa**: este propusa valoarea relativa la U.M. alternativa, calculata prin multiplicarea sau divizarea cantitatii gestionale (relativa la U.M. principala) cu factorul de conversie inserat in registru.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferentă fiecarei ferestre din aria in care se lucreaza. Lista functionalitatiilor posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Salvează | Buton pentru salvarea operaţiilor efectuate. Acelaşi rezultat se obţine mutând cursorul pe o linie diferită de cea pe care doriţi să o salvaţi. |
| Diverse-Căutare  | Permite căutarea condiţiilor de achiziţie pe articol în documentele de vânzare precedente şi permite preluarea preţului şi discountului. |
| Articol nou | Buton pentru inserarea unui nou articol. |
| Şterge articol | Buton pentru ştergerea articolului inserat. |
| Deschide filtru articole (Gestiune) | Buton pentru deschiderea registrului articol. |
| Deschide filtru articole (Furnizor) | Buton pentru deschiderea tabelului cu articole furnizori. |
| Navigator articole | Buton pentru deschiderea navigatorului de articole. |
| Parametri pentru inserare articole | Deschide fereastra de parametri:-	Inserarea automată a articolelor în registru, dacă este setat permite codificarea articolelor inserate în ordin direct în registru articol.-	Inserarea automată a variantelor în registru, dacă este setat permite codificarea variantelor articolului la inserarea liniei ordinului.-	Propune automat codul variantei, dacă este setat permite crearea automată a codului variantei; poate fi modificat.-	Inserarea automată a articolelor furnizorilor în registru, dacă este setat permite codificarea codurilor articolelor furnizori inserate în ordin direct din tabelul articole furnizor.-	Actualizare automată ofertă furnizori, dacă este setat permite inserarea şi actualizarea preţurilor în oferta furnizorului, prezent în tab oferte de actualizat prezent în aceşti parametri, cu articolele inserate în ordin.-	Actualizare automată ofertă vânzare, dacă este setat permite inserarea şi actualizarea preţurilor în oferta de  vânzare prezentă în tab articole din ordinul furnizor. |
| Atribute articol | Buton pentru deschiderea ferestrei atribute din registru articol. |
| Expandează/Comprimă dimensiunea gridului articole | Permite vizualizarea/ascunderea tabului 'totaluri', 'date', 'variante', 'loturi'. |
| Subdivide cantitate pe mai multe date de livrare | Permite adăugarea unui articol. |



| Functie | Functionalitate |
| --- | --- |
| Document manager | Procedura da posibilitatea de a asocia anumite fisiere articolului curent. |






