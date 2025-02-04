---
title: Nivele de autorizare
sidebar_position: 23
---

Permite extinderea gestionării blocării angajamentelor pasive.

Presupunând că există
- o verificare administrativă a facturii  
- o verificare ulterioară de către biroul de achizitii  
- o autorizare finală din partea titularului  

se poate realiza o codificare a nivelurilor de autorizare după cum urmează:

! [](/img/it-it/configurations/tables/finance/authorization-levels.png)

Nivelul *00–Blocare inițială* ar trebui să fie presetat în fiecare **Registru furnizor**, în tab [**Plăți**erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/), pentru ca angajamentele sale să fie create create blocate, cu acest nivel de pornire.

! [](/img/it-it/configurations/tables/finance/authorization-levels-combo.png)

Angajamentul poate fi apoi adus la nivelul *01* de către utilizatorii  rolului *Administrativ* (în imagine *Fluentis Users* preluat din ARM). Acest lucru se datorează faptului că are *Nivelul părinte* o și îl duce la nivelul 1.  

Apoi angajamentul poate fi dus la nivelul *02* de către utilizatorii rolului *Achiziții* (în imagine *Fluentis Admins*). Acest lucru se datorează faptului că are *Nivelul părinte* 1 și îl duce la nivelul 2

Apoi, din nou, angajamentul poate ajunge la nivelul final *03* numai de către utilizatorul XXXXXXX (titularul), care va da  autorizația de a plăti (și, prin urmare, numai în acest moment va fi eliminată blocarea angajamentului)

Fiecare pas poate necesita inserarea unei note de autorizare, dacă parametrul este setat pe nivel.

Aceste modificări de stare pot fi efectuate în form [**Gestionare lichidităţi**/maturity-values/procedures/cash-management/), folosind  butonul *Autorizează angajament*. 

Dupa emiterea autorizației, tot din *Gestionare lichidităţi* se pot crea direct listele de plata ale modulului *Plăți furnizor*, pentru angajamentele autorizate (cele care nu sunt blocate) ca alternativa la procedura clasică de creare a borderoului de plata.