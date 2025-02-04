---
title: Articole
sidebar_position: 4
---

**Tip linie** ofera posibilitatea de a selecta tipuri diferite de articole: 

**Articol codificat**: se refera la articole codificate in registrul de articole al societatii, deci articole care influenteaza atat contabilitatea, cat si gestiunea; 

**Articol necodificat**: se refera la articole care nu sunt codificate in registrul de articole al societatii, influenteaza contabilitatea, dar nu si gestiunea;

**Articol cheltuieli**: se refera la articole care sunt sau nu codificate, sunt gestionate separat in rezumatul documentelor si nu au miscari in gestiune;

**Articol note**: este o simpla nota, nu influenteaza contabilitatea si nici gestiunea;

**Articol promo**: este gestionat ca un articol codificat sau necodificat; influențiază contabilitatea și gestiunea. Fiind un articol promo este calculat separat, în rezumatul facturii.

Se poate renunta la inserarea pas cu pas a acestor date, pentru ca, in momentul in care inserati direct o clasa sau o matricola, tipul liniei 'codificat' este selectat automat.

**Cod**: se referă la 'Codul articolului barcode' inserat în “Articole”, tab "Cod barcod". În momentul în care este inserat, programul preia automat articolul asociat cu toate datele sale din registru. Inserarea clasei sau matricolei se poate realiza manual sau utilizand "Help-ul Articole" (dublu clic pe banda galbena). Dupa ce ati inserat articolul, descrierea lui va fi preluata automat din registru.

**Lotul**: pentru articolele gestionate cu loturi, se genereaza automat sau poate fi inserat manual.

**Variante**: se referă la posibilele variante ale articolului selectat. Alegerea variantei este utilă pentru articolele cu această configurare particulară, care pot avea un preț diferit de cel standard inserat. Ca urmare, prețul articolului cu variante poate fi diferit de prețul articolului fără variante. Aceast lucru poate cere eventual gestionarea variantelor articolului în oferta de vânzare de referință.

**Unitate de masura**: este propusa U.M. principală a articolului, dar utilizatorul poate alege o unitate de masura alternativa.

**Cantitate**: este cantitatea care se refera la U.M. principala care poate fi inserata manual de utilizator sau care este preluata din ordinul furnizor pe baza caruia s-a facut executarea.

**Unitate de masura alternativa**: este propusa U.M. prezenta in gestiunea U.M. alternative din Registrul articolului care are flag-ul "implicit".

**Cantitatea alternativa**: este propusa valoarea relativa la U.M. alternativa, calculata prin multiplicarea sau divizarea cantitatii gestionale (relativa la U.M. principala) cu factorul de conversie inserat in registru.

**Preț**: prețul este propus din oferta inserată în registrul furnizorului: oferta de referință pentru articol este vizualizat în tab Totaluri. Când în registrul furnizorului sunt asociate mai multe oferte în cascadă (vezi registrul clienți/furnizori), același document de achiziții ar putea conține articole din oferte diverse. Cu dublu clic în câmp **oferte** (tab Totaluri) utilizatorul poate selecta o ofertă diferită de cea implicită din care va fi preluat prețul articolului inserat. În absența ofertei, informația propusă este costul ultim preluat din registrul articolului.

**TVA**: este preluat cu prioritate campul TVA din Registrul furnizorului. Când aceste nu este prezent, este propusă valoarea prezentă în registrul articolului. Este un câmp obligatoriu.

**Facturare achizitii**: este propusa informatia care se afla in tab "Generalitati" din Registrul articole. In cazul in care acesta nu este prezent, nu este propusă nici o informație, dar în momentul contabilizării facturii va fi considerată valoarea inserată în câmpul "Cheltuieli/Venituri de contrapartidă predefinit" din registrul furnizorului.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferentă fiecarei ferestre din aria in care se lucreaza. Lista functionalitatiilor posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Salvează | Permite salvarea operatiilor efectuate. Acelasi rezultat il puteti obtine si cand treceti pe o linie diferita de cea pe care doriti sa o salvati. |
| Articol nou | Articol nou	Permite inserarea unui articol nou. |
| Storno fact. de primit | Procedura permite stornarea facturilor de primit. |
| Modifica facturare achizitii | Permite modificarea tipului facturare achizitii. |
| Sterge articol | Permite eliminarea articolului inserat. |
| Expandeaza/Comprima grila articolelor | Permite vizualizarea sau ascunderea tab-urilor 'total', 'date', 'variante', 'loturi'. |
| Import barcode | Permite importul articolelor pe baza de cod de bare. |



| Functie | Functionalitate |
| --- | --- |
| Document manager | Procedura oferă posibilitatea de a atasa documente. |






