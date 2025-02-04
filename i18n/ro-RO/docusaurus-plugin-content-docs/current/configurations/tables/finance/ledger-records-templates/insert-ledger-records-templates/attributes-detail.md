---
title: Detaliu atribute
sidebar_position: 2
---

### Filtre

*Câmpuri specifice*

**Șablon automat**: la salvarea înregistrării care conține șablonul principal, programul va crea automat o a doua înregistrare care conține șablonul inserat în acest câmp. Pentru ca a doua înregistrare să fie completată corect trebuie să fie respectate următoarele relații logice între cele două înregistrări. De exemplu, prima înregistrare deschide un angajament, în timp ce a doua operează închiderea imediată.  
**Tip autofactură automată**: consultați [**configurare autofacturi automate**/e-invoice/auto-invoice/ledger-templates).  
**Inversează coloane dacă suma este mai mică decât zero**: programul poate inversa coloanele debit/credit pe baza semnului mișcării TVA (recomandăm selectarea acestui câmp pentru toate înregistrările cu TVA).  
**Aviz**: câmpul este activ doar dacă precedentul câmp a fost activat; utilizatorul va fi avizat de inversarea semnului. Flag-ul este irelevant pentru șabloanele utilizate în procedurile automate de contabilizare.  
**Permite analitice cu valori zero**: dacă este activ, procedura:  
a) va permite inserarea manuală a liniilor cu valoarea atât debit, cât și credit egală cu zero;  
b) în momentul salvării înregistrării, NU va șterge liniile preluate din șablon și nevalorizate de utilizator în înregistrare;  
c) liniile care valorizează în registrul jurnal debitul/creditul TVA, cu acest flag va șterge oricum valoarea zero, numai dacă nu a fost activiată opțiunea *Permite TVA 0 în registru jurnal* din tabelul [Cote TVAconfigurations/tables/finance/vat-rates).  

### Detaliu cont sintetic/analitic -Prototip înregistrare  

Această este secțiunea fundamentală (dar nu obligatorie) a șablonului contabil, în care se inserează schema tipică a tipului înregistrării contabile. Se pot insera și coduri generice de cont (de ex. contul furnizori), care vor fi actualizate automat de program pe baza listei de conturi clienți/furnizori inserate în parametrii contabilității generale. Aceste conturi analitice și secțiunile debit/credit vor ghida valorizările contabile, care vor putea fi oricum modificate la inserarea manuală a înregistrării.

### Tipuri de sume 

Câmpul **Descriere** pentru *Tipurile de sume* este fundamental pentru valorizarea automată a registrului jurnal pe baza datelor TVA și al conturilor din înregistrare. 

**Manual**: indică faptul că valoarea va fi inserată manual de utilizator în momentul creării înregistrării;   
**Bază impozitare cont analitic**: indică faptul că valoarea va fi actualizată pentru fiecare cod de cont analitic inserat în secțiunea TVA cu suma obținută din baza de impozitare a liniei/liniilor; utilizarea acestui tip de sumă este recomandată pentru toate veniturile inserate în șabloanele de vânzare;  
**Total bază impozitare**: indică faptul că valoarea va fi actualizată cu totalul bazei de impozitare al înregistrării. De exemplu: vânzări în regim split payment sau intracomunitar;   
**Total TVA**: indică faptul că linia va fi actualizată cu totalul TVA al înregistrării: ;  
**TVA deductibil**: indică faptul că linia va fi actualizată cu totalul TVA deductibil al înregistrării;  
**Tot. Doc/Înregistrare**: indică faptul că linia va fi actualizată cu codul contului analitic al înregistrării (dacă este conform cu combinațiile inserate în parametrii contabili) pentru valoarea totală a documentului/înregistrării;  
**Bază impozitare + TVA nedeductibil**: indică faptul că linia va fi actualizată cu totalul bazei de impozitare însumat cu totalul TVA nedeductibil al înregistrării;  
**50% bază de impozitare**: indică faptul că linia va fi actualizată cu 50% din totalul bazei de impozitare al înregistrării;  
**50% Bază impozitare +TVA deductibil**: indică faptul că linia va fi actualizată cu 50% din totalul bazei de impozitare al înregistrării însumat cu totalul TVA deductibil al acesteia;  
**50% Bază impozitare +TVA nedeductibil**: indică faptul că linia va fi actualizată cu 50% din totalul bazei de impozitare al înregistrării însumat cu totalul TVA nedeductibil al acesteia;
**B. imp. ct. ana.+ TVA nededuc. cont analitic**: indică faptul că linia va fi actualizată pentru fiecare cod de cont analitic inserat în secțiunea TVA cu valoarea obținută din însumarea bazei de impozitare a liniei/liniilor cu TVA-ul nedeductibil relativ; utilizarea acestui tip de sumă este recomandat de obicei pentru toate codurile inserate în șabloanele de achiziție;
**Rotunjiri active**: indică faptul că linia va fi actualizată cu suma rotunjirilor active; se asociază șabloanelor pentru închiderea angajamentelor;
**Rotunjiri pasive**: indică faptul că linia va fi actualizată cu suma rotunjirilor pasive; se asociază șabloanelor pentru închiderea angajamentelor;
**Suma cont analitic**: indică faptul că linia va fi actualizată cu suma plăților angajamentelor inserate în înregistrare, pe baza semnului plății;  
**Profit diferență sch. valutar**: indică faptul că linia va fi actualizată cu contul analitic de profit al devizei de referință pentru diferență de schimb valutar, pentru suma obținută ca diferență între schimbul istoric și schimbul de la închiderea angajamentului; în cazul în care a fost setat flagul de închidere la schimbul istoric, linia nu va avea nici o valorizare;
**Pierderi diferență sch. valutar**: indică faptul că linia va fi actualizată cu contul analitic de pierderi al devizei de referință pentru diferență de schimb valutar, pentru suma obținută ca diferență între schimbul istoric și schimbul de la închiderea angajamentului; în cazul în care a fost setat flagul de închidere la schimbul istoric, linia nu va avea nici o valorizare;
**Automat**: tipul sumei utilziat în câteva proceduri de contabilizare automată. Gridul se completează cu un câmp de codificare al contrapartidelor (nu recomandăm utilizarea sa, în contabilitate deja există un raport care afișează contrapartidele independent de această setare) și de un câmp de note detaliate: în acest câmp este posibilă utilizarea tuturor codurilor raportate în partea inferioară a ferestrei, și, în particular, pentru șabloanele de închidere angajamente inserate în corespondență cu contul clienți/furnizori generic, recomandăm utilizarea codurilor (8) sau (9) concomitent cu flag-ul *Ref. doc. Angajament în plată* pentru a nota în contabilitate referințele la documentele plătite/încasate;  
**TVA deductibil si cont analitic TVA**: utilizat pentru valorizarea liniei relative la TVA cu valoarea deductibilă a TVA și cu contul analitic găsit în baza *Tipului contabilizării TVA* asociat cu prioritate în registrul partenerului din înregistrare sau implicit în *Parametrii contabilității generale*.  

### Descrierea parametrică a înregistrării contabile

În această secțiune se pot codifica descrierile standard care sunt completate de program cu ajutorul diverselor coduri indicate, descrieri care vor fi preluate în rapoartele contabile și, în particular, în extrasele de cont și în registrul jurnal.  
Și pentru fiecare linie din înregistrare din secțiunea *Detaiu conturi sintetice/analitice - Prototip înregistrare* se pot codifica anterior note ca în Descrierea generală.

NOTA: îndeosebi codurile (8) și (9) sunt utilizate doar pentru descrierea specifică a liniei și nu sunt considerate în descrierea generală a înregistrării.