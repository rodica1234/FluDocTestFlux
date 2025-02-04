---
title: Informații fiscale
sidebar_position: 3
---

În acest tab se inserează date și parametri îndeosebi financiari.

**Nu în spesometro**: câmp obsolet, prezent în versiunea italiană pentru compatibilitate cu versiunile precedente.

**Exclude din black list**: câmp obsolet, prezent în versiunea italiană pentru compatibilitate cu versiunile precedente.

**CIG**: acest flag activeză câmpul Cig în facturile de vânzare pentru a insera codul identificativ al licitației.

**CUP**: acest flag activeză câmpul Cup în în facturile de vânzare pentru a insera codul unic al proiectului (pentru facturare către entități publice).

**Reținere avans**: dacă furnizorul pe care îl inserăm este un liber profesionist, flag-ul activează gestionarea reținerii avans aplicate la plata liber profesionistului. Cu acest tip de gestionare activ, inserarea documentelor și contabilizarea facturii primite și a plății efectuate se va face din modulul Liber profesioniști cu obiectivul de a gestiona corect și automat reținerea avansului.

**Tip reținere**: câmpul este activat de flag-ul precedent și permite inserarea tipului de reținere care va fi propus implicit la crearea compensării. Pentru fiecare linie, care corespunde unui tip de reținere, trebuie să fie completate câmpurile care permit gestionarea automată a calculului și a contabilizării de către modulul Liber profesioniști.

**Administrație publică**: flag-ul permite gestionarea facturii către administrația publică și necesită completarea gridului inferior. 

### Administrație publică

**Cod/Nume oficiu**: codul și numele oficiului căruia îi este destinată factura.

**Nume**: în acest câmp se poate asocia un registru deja codificat în Fluentis și care se referă, de exemplu, la oficiul public care depinde de registrul principal.

**Dată început serviciu**: se referă la data inserării sau la data de la care începe relația de furnizare cu administrația publică.

**Dată sfârșit serviciu**: se referă la data de sfârșit a relației de furnizare cu administrația publică.

**Art. 62**: abilitează gestiunea scadențelor plății maxime în sectorul alimentar pentru mărfurile perisabile și neperisabile în baza art.62; în special în faza inserării articolelor în factură controlează scadența plății față de cele obligatorii pentru acest tip de produse. Se gestionează împreună cu flag-urile:

> **Sol. inf. 30 zile**: impune o soluție de plată la 30 de zile, ignorând celelalte setări

> **Sol. inf. 60 zile**: (câmp inactiv)

Există și alte setări care se referă la gestionarea mărfurilor perisabile:

- câmpul *Zile plată marfă perisabilă* în registrul articolului (tab Generalități) unde se inserează scadența de aplicat;

- câmpul *Zile primire factură* în tab *Adrese alternative* din registrul clientului/furnizorului (tab General), util pentru respectarea datei la care va fi primită factura (câmpul este activ dacă tipul adresei asociat la adresa alternativă, utilizat și definit în tabelul Tipuri adrese, are flag-ul “Email Fact.C.” activ)

- câmpul *Zile transport* în tabelul *Zone*, câmp care se poate insera în registrul clientului/furnizorului (tab Livrare)

**Procedura de calcul a scadenței plății**

Scadența plății este propusă pornind de la data calculată a facturii, care se obține astfel:

- la început este egală cu data cea mai mare dintre cea a inserării și a facturii,

- apoi, dacă în tipul adresei mailului pentru facturare au fost inserate zilele pentru primirea facturii, aceste zile sunt însumate la data facturii și, prin urmare, data calculată a facturii devine mai mare.

- dacă în tipul adresei mailului pentru facturare nu au fost inserate zilele pentru primirea facturii, aplicația va căuta zile de transport în codul zonei asociat clientului pe care le va însuma la data facturii și, prin urmare, data calculată a facturii devine mai mare.

- dacă nu au fost inserate zile pentru transport, data calculată va fi egală cu data cea mai mare dintre cea a inserării și a facturii.

În orice caz, utilizatorul va putea schimba data calculată, însă în factură va fi evidențiat faptul că data calculată a fost schimbată manual.

*Pentru a propune corect data scadenței trebuie să codificăm 2 noi soluții de plată cu flag-ul “DL Art.62” activat, ambele cu flag-urile Sfârșit lună și Comercial active, unul cu 30 de zile și celălalt cu 60 de zile*.

![](/img/ro-RO/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image02.png)

Dacă facturile se inserează manual (și executând liniile ordinului client) se pot insera, pentru clientul care are flag-ul Art62 activ, doar articolele care au același tip de plată, deci toate articolele la 30 de zile sau la 60 de zile sau fără zile pentru plată. Un mesaj va bloca inserarea aricolelor mixte și va aviza că soluția de plată va fi modificată automat cu soluția calculată pe baza zilelor de plată ale articolelor.

Dacă factura se creează din alte documente (ex. din avize), documentele vor fi împărțite după zilele de plată din articol și vor fi create mai multe facturi dacă în același document vor fi articole cu zile de plată diferite.

**Câmpuri pentru SDD (Sepa Direct Debit)**

SDD este un instrument de încasare preautorizat în baza unui mandat de debit emis de debitor în favoarea creditorului său.

Se bazează pe un acord (mandat) prealabil între Debitor și Creditor care permite acestuia din urmă să solicite activarea unei proceduri interbancare pentru a debita automat contul debitorului.

**Cod scop mandat: **trebuie introdus ‘Purpose code' (de obicei este setat codul 'GDSV' *PurchaseSaleOfGoodsAndServices*).

**Cod client/mandat**: reprezintă codul de identificare atribuit mandatului semnat de debitor. Corespunde în Rulebook (document oficial tehnic) la AT-01 Unique Mandate Reference.

Câmpul nu este case-sensitive. De ex., identificatorii 123AAa45678, 123aaA45678, 123aaa45678 și 123AAA45678 trebuie considerați identici. Nu poate fi completat doar cu spații și trebuie să conțină doar caractere latine.

Exemplu: IT05394480900 

**Mandat modificat**: flag neutilizat momentan (nu trebuie activat).

**Data semnare mandat**: se inserează data semnării. 

**Dată prima execuție/Dată ultima execuție**: deoarece debitarea SDD este o execuție periodică, acest interval de date controlează începutul și sfârșitul valabilității execuției.

Pentru gestionare SDD, în tabelul **Societăți**, trebuie completate câmpurile: Cod unic client și Identificator creditor

**Regim fiscal**: câmp obligatoriu pentru gestionarea facturilor către Administrația Publică. Datele sunt introduse în fișierele electronice .xml generate de Fluentis. Combo box-ul este asociat unui tabel fix care conține regimurile fiscale posibile din care îl puteți selecta pe cel dorit.** **

### Gestionare cotitulari

**Gestionare cotitulari**: flag-ul activează gestionarea facturii de vânzare cu cotitulari.

Acest caz este frecvent, de exemplu, în vânzarea către persoane fizice a bunurilor care pot fi supuse deducerii fiscale din impozitele pe venit. De exemplu, dacă cheltuiala este suportată de 2 persoane, factura trebuie adresată ambelor persone pentru a opera deducerea.

În facturile către partenerul care au acest flag activ, va fi adăugat un nou tab în care veți putea insera cotitularii.

Cotitularii trebuie să fie codificați anterior în secțiunea **Adrese alternative**, din tab Generale. Pentru acest lucru, va trebui sa avem inserat un tip de adresă cu flag-ul **Cotitulari **în tabelul** Tipuri adrese.**

![](/img/ro-RO/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image05.png)

![](/img/ro-RO/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image06.png)

![](/img/ro-RO/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image07.png)

După toate aceste setări veți putea să-i inserați în factură, indicând și procentul de repartizare al cheltuielilor.  
![](/img/ro-RO/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image08.png)