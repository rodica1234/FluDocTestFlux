---
title: Generalități
sidebar_position: 1
---

Permite inserarea informațiilor generale ale articolului.

**Dată inserare**: este completat automat la crearea articolului și indică exact dată creării acestuia;

**Cota TVA**: reprezintă cota de TVA aferentă articolului respectiv. Acest câmp are prioritate față de cota TVA care este atribuită clientului/furnizorului în registru partener;

**Caracteristică și Model**: sunt câmpuri neobligatorii,pentru definirea suplimentară a articolului, pe baza unei serii de grupări care sunt stabilite în gestionarea produselor;

**Facturare achiziții**: permite selectarea tipului definit anterior în tabelul *Facturare achiziții* și este utilizat pentru gestionarea conturilor analitice la contabilizarea facturilor de achiziții;

**Tip articol**: câmp neobligatoriu, permite inserarea unei descrieri suplimentare pentru articol pe baza altor grupări interne; 

**Nomenclatură**: cu ajutorul help-ului de câmp,  se poate nomenclatura (corespondentul vamal al articolului), utilizat de intrastat pentru declararea mărfurilor de import și export, precum și de statistici pentru comerțul cu articole în cadrul UE;

**Zile plată mărfuri perisabile**: pentru mărfurile perisabile, factură trebuie creată și plătită în termen de 30/60 de zile, în funcție de tipul articolului. În acest caz, această verificare se face atât pe articol, cât și pe tipul de plata introdus, astfel încât facturile să nu fie emise cu o dată de început mai mare decât cea indicată;

**Data ultima modificare**: reprezintă data ultimei modificări a articolului;

**Categorie fiscală**: permite selectarea categoriei fiscale a articolului, pentru rapoartele fiscale de gestiune și pentru a putea grupa inventarele pe categorii fiscale;

**Categorie merceologică**: informație statistică, cum ar fi caracteristica, utilizat în anumite rapoarte specifice;

**Facturare vânzare**: permite selectarea tipului definit anterior în tabelul *Facturare achiziții* și este utilizat pentru gestionarea conturilor analitice de venituri din vânzarea articolului;

**Natură articol**: definește articolul și utilizat în anumite proceduri. În acest câmp, se va gasi o listă cu diferite naturi atribuite articolului:

 - *Echipament/unealtă/mașină*: grup de articole pentru producție;
 - *Familia de articole*: definește articolul pentru previziunile de vânzări;
 - *Ambalaje*: utilizat pentru gestionarea ambalajelor returnabile, pentru contabilitate (pentru a întelege câte ambalaje sunt în companie, câte au fost date clientului sau furnizorului, și, prin urmare, câte trebuie să returnez);
 - *Servicii*: pentru gestionarea intervențiilor post-vânzare;
 - *Utilizare împrumut/plată/componentă plată*: folosite pentru gestionarea întreținerilor.

**Fictiv**: dacă este activ, cu acest parametru se declară că articolul nu trebuie să fie înregistrat;

**Cu înr. mișc. în gest.**: dacă este activ, permite preluarea articolului în rapoartele fiscale ale gestiunii;

**ABC**: în gestionarea stocurilor în scopuri logistice, ABC este o metodă de clasificare a inventarului care constă în împărțirea articolului în trei clase, numite precis A, B și C, unde A conține cele mai importante articole și C elemente mai puțin importante. Este o metodă utilă pentru a concentra atenția asupra câtorva produse esențiale. Dacă această metodă este utilizată de companie, în acest câmp veți găsi litera care definește categoria căreia îi aparține articolul;

**În epuizare**: dacă este activ, înseamnă că articolul se epuizează.  
Condițiile pentru obținerea notificării că articolul se epuizează, în documente (de ex. în comenzile de vânzare), sunt:
- în [Parametri ordine cliențiconfigurations/parameters/sales/sales-orders-parameters) trebuie setat flag-ul **Verifică articole în epuizare**;
- în registrul articolului trebuie să fie activat flag-ul **În epuizare** iar **Data epuizării** trebuie să fie mai mică sau egală cu data ordinului.

**Dată în epuizare**: indică data la care articolul a fost setat **În epuizare**;

**Articol fără calcul disponibilitate**: dacă este activ, sistemul nu va lua în considerare disponibilitatea pentru a utiliza articolul;

**Arhivat**: dacă este activ, articolul nu va mai apărea în lista articolelor care pot fi utilizate, deoarece a devenit obsolet;

**Control calitate**: dacă este activ, articolul va fi inclus în fluxul de verificare al calității.
