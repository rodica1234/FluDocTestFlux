---
title: Parametri facturi de achiziţie
sidebar_position: 7
tags: [facturi de achiziţie]
keywords: [facturi de achiziţie]
---

Parametrii facturilor de achiziţie permit setarea de bază pentru gestionarea corectă şi în funcţie de specificul cerut de fiecare societate.

*Butoane specifice*:

> **Restaurează parametrii**: permite restaurarea parametrilor la valorile inițiale. 

### Generale

**Gestionare UM dublă**: dacă este activ, se activează combo box UM Alt şi coloana cantitate alternativă din gridul articole din factura de achiziţie. 

**Propune automat U.M. alternativă**: acest check se activează doar dacă “Gestiune UM dublă” este activ. Când este inserat un articol care conţine în registrul său, în tab UM alternativă o UM alternativa implicită, această UM este automat propusă ca UM alt pentru articol şi este calculată şi cantitatea alternativă folosind factorul de conversie al acesteia. 

**Cost zero dacă nu sunt oferte**: 	dacă este activ şi dacă nu există oferte, preţul propus va fi 0; dacă nu este setat va fi propus costul ultim din registrul articole.

**“Tip factură”, “Cotă TVA”, “Tip facturare achiziţii”**: aceşti parametri sunt utilizaţi implicit la crearea facturilor din ordine. 

**Loturi şi N.S. obligatorii**: dacă este activ, pentru articolele gestionate cu loturi şi număr de serie, este obligatorie inserarea lotului sau numărului de serie în taburile relative. Recomandăm selectarea acestui parametru când utilizați gestionarea articolelor cu loturi. 

**Caută preţ articole în toate ofertele predefinite**: acest parametru este utilizat pentru căutarea preţului în ofertele furnizori; căutarea se face în ofertele cu tipul predefinit în registrul furnizorului chiar dacă ofertele nu sunt valide (ofertele valide sunt cele care au data început valabilitate \<= cu data curentă şi au data sfârşit valabilitate nulă sau \>= cu data curentă). 

**Permite discount uri pentru articole promo**: Dacă este setat, se pot insera discounturi în liniile de tip promo. 

**Utilizează articolul furnizor**: dacă este activ, câmpul pentru introducerea codului articolului furnizorului este propus în gridul articolelor documentului. Dacă nu este activ, acest câmp nu va fi vizibil; 

**Verifică articole în epuizare**: dacă este activ, sistemul verifică disponibilitatea articolelor din facturpă avertizează dacă articolul se epuizează, și anume dacă în [registrul articoluluierp-home/registers/items/create-new-items/item-registry/generality) este activat flagul *În epuizare*.

**Contabilizare ambalaje**: permite contabilizarea, în contabilitatea generală, și a liniilor cu articole cu natura Ambalaj care, de obicei, sunt gestionare pentru a verifica stocurile ambalajelor care se returnează. 

**Menține prețurile din ordine pentru eșalone**: este utilizat la executarea ordinelor în avize în cazul în care cantitatea executată este diferită (de obicei parțială) de cantitatea comandată pentru care a fost inserat  un preț sau un discount pe eșalon de cantitate.Dacă prețul sau discountul nu depind de cantitatea livrată, ci doar de cantitatea din ordin, acest flag trebuie să fie activat. Dacă prețul sau discountul pe eșalon nu trebuie să fie inserat în documentul de livrare, în cazul executării nu trebuie să fie pentru cantitatea totală a ordinului flag-ul nu trebuie activat. 

###  Încărcare

**Creează înregistrarea cu data documentului**: dacă este activ, înregistrarea de gestiune este creată cu aceeaşi dată pe care o are factura de achiziţie; nu va fi necesară inserarea datei înregistrării în fereastra de încărcare. 

**Prioritate gestiune şi şabloane de încărcare**: dacă este activ, în momentul înregistrării facturii în depozit sunt utilizate valorile setate în câmpurile **Gestiune** și **Șablon de gestiune**. Dacă flagul nu este activ, gestiunea și șablonul de încărcare sunt preluate din liniile facturii. În cazul în care acestea nu sunt indicate, nu va fi posibilă efectuarea Încărcării automate din factura de achiziție, dar se poate utiliza procedura de [Încărcare facturi de achiziție în gestiunepurchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse/) selectând flagul "*Acceptă ca gestiune și șablon următoarele date:*" în tab *Parametri* indicând *Gestiunea* și *Șablonul* de utilizat.

**Aviz articole fictive**: dacă este activ, în timpul încărcării facturii, programul controlează dacă în factură sunt prezente articole fictive; dacă acestea există, este lansat un mesaj pentru confirmarea încărcării facturii. 

**Încărcare/Descărcare automată**: dacă este activ, permite încărcarea automată a gestiunii direct din factura de achiziții cu ajutorul butonului “Încărcare automată din gestiune“. 

### Analitic

Aceşti parametri indică prioritatea de căutare a centrelor de cost sau de profit pentru a le atribui articolelor documentului.

Modificarea priorităților se poate face utilizând butoanele:  

> **Mută sus** ![](/img/neutral/common/move-up.png) și  
> **Mută jos**![](/img/neutral/common/delete-cc.png).

*Valori implicite*: centrul de cost/profit este preluat din [Tip facturare achizițiiconfigurations/tables/purchase/purchase-invoices-type), dacă este prezent.   Când nu este prezent aici, aplicația îl va căuta în *Registru furnizor*. Dacă nici aici nu este prezent, îl va căuta în *Registru articol* și apoi în *Gestiune*.

**Recalculează**: dacă este activ, centrele de cost sau de profit sunt inserate sau actualizate cu ajutorul priorităţii alese.

După inserarea parametrilor aceștia trebuie salvați cu ajutorul butonului **Salvează**.