---
title: Numerotări Fluentis
sidebar_position: 13
---

La introducerea unui nou document, una dintre primele informații necesare este numărul său. Acesta este propus automat datorită tabelelor cu numeratori.

În Fluentis, gestionarea numerotărilor este împărțită pe tipuri de documente, așa cum putem vedea în meniul prezent în tabelele fiecărui modul.

Logica care stă la baza tuturor acestor numerotări este aceeași, așa că vom examina unul, **Numerotare compensări*, care va reprezenta bază teoretică pentru definirea numerotărilor pentru toate celelalte tipuri de documente.

În form-ul de **Numerotare compensări** există un grid care prezintă lista numărătorilor prezenți pentru compensări. Aceasta înseamnă că este posibil să gestionați mai mulți numărători pentru același tip de document. Cu butonul **Nou** accesăm form-ul Numerotare, care este compus din două tabele distincte.

**Antet** 

![](/img/ro-RO/configurations/tables/fluentis-numerations/image01.png)

**Cod **și** Descriere**: reprezintă codul și descrierea numărătorului;

**Număr formulă**: în acest câmp se poate insera valorizarea unui string alfanumeric, care va fi memorizat în proprietatea alfanumerică predefinită ‘FormattedNumber' a obiectului (în timp ce câmpul numeric este memorizat în proprietatea ‘Number'). Definirea formulei pentru formatarea numărului documentului poate fi specificată la nivelul tipului numerotării, la nivelul perioadei de valabilitate a tipului numerotării sau la nivelul definirii intervalelor de valabilitate. Prioritatea de aplicare este bottom-up, deci se verifică dacă este definită în intervalele de valabilitate, dacă este null se verifică dacă este definită în perioade de valabilitat, dacă este null se verifică dacă este definită în tip numerotare.

În imaginea anterioară, a fost inserat “Year.ToString() + "-" + Number.ToString("D5") + "-" + SalesInvoiceType.Code”, care va crea un string de tipul “2015-00001-TestCode”.

Un alt exemplu, inserarea în număr a unei valori preluate din utilizatorul inserării: “Number.ToString("D5") + "-" + "-" + (CreationUser != null ? CreationUser.Description.Substring(0,3) : "")”

În acest caz este necesar să interveniți și în ARM pentru a abilita, în setterul numărului formatat, pentru că acesta citește proprietatea utilizator: în Patterns se editează acest setter

![](/img/ro-RO/configurations/tables/fluentis-numerations/image02.png)

și se activează **Used**:

![](/img/ro-RO/configurations/tables/fluentis-numerations/image03.png)

Se salvează în IIS și se repornește pool-ul Fluentis pentru a obține informația operativă. 

*Alt exemplu*: setare număr factură (sau aviz) cu bara oblică (exemplu 1/A, 2/A.... 1/B, 2/B):

number.ToString()+"/B"

de pus în numărător (în antet)

Apoi, în raport, trebuie să fie substituit câmpul standard (ex. Number) cu un câmp calculat (es. CalcNumber) în care este această expression:

Iif(IsNullOrEmpty([FormattedNumber]),  [Number], [FormattedNumber])

*Atenție!*: funcționează doar în raport. În formuri numărul va fi afișat normal, fără bară.

**Dezactivat**: pentru dezactivarea numărătorului.

### Politici de gestiune (primul tabel)

În această secțiune se inserează politicile pentru gestionarea numărătorului.

**Ordine**: codul înregistrării de pe linie;

**De la dată valabilitate**: câmp obligatoriu, indica data inițială a intervalului de valabilitate al numerotării;

**La dată valabilitate**: data finală a intervalului de valabilitate. Nu este obligatoriu (vezi câmpul următor);

**Perioadă**: periodicitate interval. Opțiunile sunt *Niciuna* (adică intervalul este valabil numai în intervalul definit; dacă nu există o dată de sfârșit, acesta va fi un contor peren), *Anual* (numărătorul va reseta automat numărul inițial în fiecare an, până la *data sfârșit valabilitate*), *Lunar* (numărătorul se va reseta automat la numărul inițial în fiecare lună, până la *data sfârșit valabilitate*), *Zilnic* (numărătorul se va reseta automat la numărul inițial în fiecare zi, până la *data sfârșit valabilitate*);

**Decalaj luni**: luni de adăugat la data începerii valabilității pentru a obține luna în care se resetează numărătorul;

**Decalaj zile**: zile de adăugat la data începerii valabilității pentru a obține ziua în care se resetează numărătorul;

**Dată număr progresiv**: dacă este activ, este utilizat pentru a se asigura că numerotarea este progresivă în funcție de dată, blocând posibilitatea inserării unui document cu un număr mai mare decât ultimul introdus, dar cu o dată anterioară acestuia;

**Recuperare numere**: permite recuperarea automată a găurilor din numerotare. Dacă opțiunea **Dată număr progresiv** este activă, recuperarea numărului se va face doar dacă respectă logica explicată anterior;

**Număr formulă** și **Configurare**: câmpuri neutilizate;

**Dezactivat**: pentru dezactivarea politicii numerotării. 


### Intervale numerice (al 2-lea tabel)

Acest grid este asociat la politica selectată în gridul superior.

**Ordine**: codul intervalului numeric;

**Număr inițial**: este obligatoriu și indică numărul inițial al intervalului;

**Număr inițial căutare**: poate fi inserat dacă doriți să limitați căutarea numărului pornind de la un anumit interval;

**Număr final**: reprezintă numărul final al intervalului; nu este obligatoriu;

**Numerotare externă**: trebui să fie selectat dacă numerotarea nu este atribuită de Fluentis, ci de o aplicație externă;

**Dezactivat**: pentru dezactivarea intervalului din linie.