---
title: Parametri avize de achiziţie
sidebar_position: 6
---

Parametrii avizelor de achiziţie permit setarea de bază pentru gestionarea corectă şi în funcţie de specificul cerut de fiecare societate.

*Butoane specifice*:

> **Restaurează parametrii**: permite restaurarea parametrilor la valorile inițiale. 

### Generale

**Gestionare UM dublă**: când este selectat, se activează câmpurile *UM alternativă* şi coloana *Cantitate alternativă* din gridul *Articole* al avizului. 

**Propune automat U.M. alternativă**: acest parametru se activează doar dacă *Gestiune UM dublă* este activ. Când este inserat un articol care conţine în registrul său, în tab UM alternativă o UM alternativa implicită, această UM este automat propusă ca UM alt pentru articol şi este calculată şi cantitatea alternativă folosind factorul de conversie al acesteia. 

**Cost zero dacă nu sunt oferte**: 	când este setat şi dacă nu există oferte pentru articolele inserate în ordin, preţul propus va fi 0; dacă nu este setat va fi propus costul ultim din registrul articole. 

**Vizualizează dimensiuni**: când este activ, în tab Articole din avize achiziţie sunt vizibile 3 coloane “Înălţime”,”Lăţime”,”Adâncime”  (date prezente în Tab Greutăţi/Dimensiuni din Registru articol).  

**Permite avize cu acelaşi număr şi furnizor**: dacă este activ, permite inserarea aceluiși număr de aviz pentru același furnizor. Recomandăm să-l lăsați neselectat pentru a permite sistemului să execute controlul unicității; 

**Lot şi N.S. obligatorii**: când este setat, pentru articolele gestionate cu loturi şi număr de serie, este obligatorie inserarea lotului sau numărului de serie în taburile relative. Recomandăm activarea acestui parametru cand utilizați gestionarea articolelor pe lot.

**Caută preţuri articole în toate ofertele predefinite**: dacă este activ, prețul articolului inserat în linia ordinului va fi căutat în toate ofertele implicite inserate în registrul furnizorului, inclusiv în cele implicite. Dacă nu este activ, prețul articolului este căutat doar în oferta implicită din antetul ordinului, dar nu în alte oferte pentru același furnizor care au date de valabilitate diferite.

**Permite discounturi pentru articole promo**: dacă este setat, se pot insera discounturi şi în liniile de tip promo. 

**Utilizează articolul furnizor**: dacă este activ, în tabelul articolelor avizului este propus și câmpul pentru inserarea codului articolului furnizorului. 

**Verifică articole în epuizare**: dacă este activ, sistemul verifică disponibilitatea articolelor inserate în aviz și avertizează dacă articolul se epuizează, și anume dacă în [registrul articoluluierp-home/registers/items/create-new-items/item-registry/generality) parametrul *In epuizare* este activ.

**Contabilizare ambalaje**: permite contabilizarea, în contabilitatea generală, și a liniilor cu articole cu natura *Ambalaj* care, de obicei, sunt gestionare pentru a verifica stocurile ambalajelor care se returnează [Ambalaje de returnatconfigurations/tables/logistics/package-to-be-returned).

**Menține prețurile din ordine pentru eșalone**: este utilizat la executarea ordinelor în avize în cazul în care cantitatea executată este diferită (de obicei parțială) față de cantitatea comandată pentru care a fost inserat un preț sau un discount pe eșalon de cantitate. Dacă prețul sau discountul nu depind de cantitatea livrată, ci doar de cantitatea din ordin, acest parametru trebuie să fie activat. Dacă prețul sau discountul pe eșalon nu trebuie să fie inserat în documentul de livrare, în cazul executării nu trebuie să fie pentru cantitatea totală a ordinului, parametrul nu trebuie activat. 

**Recalculează transport**: dacă este activ, calculează greutatea și volumul din valorile inserate în registrul articolului din document, setând automat valoarea transportului. Dacă nu este activ, costul transportului din aviz va trebui calculat manual, deoarece nu va fi propus; 

**Def. U.M. volum**: dacă este activ, indică unitatea de măsură implicită pentru volum atunci când se calculează transportul avizului. 

**Def. U.M. greutate**: dacă este activ, indică unitatea de măsură implicită pentru greutate atunci când se calculează transportul avizului.

### Încărcare

**Creează înregistrarea cu data documentului**: când este activ, înregistrarea de gestiune este creată cu aceeași dată a avizului.  
Dacă nu este activ, înregistrarea este efectuată cu *Data încărcării* indicată în antetul avizului, dacă este prezentă; dacă nu cu *Data înregistrării gestiune* indicată în procedura de [Înregistrare avize de achiziție în gestiunepurchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse). Dacă înregistrarea este efectuată din aviz cu butonul *Încărcare automată în gestiune* iar *Data încărcării* nu este inserată, va fi utilizată data curentă.

**Prioritate gestiune şi şablon de încărcare**: dacă este activ, în momentul înregistrării avizului în gestiune, sunt utilizate valorile setate în câmpurile următoare: **Gestiune** și **Șablon**. Dacă parametrul nu este activ, gestiunea și șablonul de încărcare sunt citite din aviz. În cazul în care acestea nu sunt prezente în aviz, nu va fi posibilă efectuarea Încărcării automate din avizul de achiziție, dar se va putea efectua înregistrarea avizului prin procedura [Înregistrare avize de achiziție în gestiunepurchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse) selectând în tabul *Parametri* flag-ul *Acceptă ca geestiune și șablon următoarele date:*" și indicând *Gestiunea* și *Șablon* de utilizat.  

**Încărcare/Descărcare automată**: dacă este activ, în momentul activării parametrului *Controlat* în antetul documentului, aplicația va lansa un mesaj care reamintește că parametrul de încărcare/descărcare automată este activ și va solicita confirmarea. Apăsând *Da*, avizul va fi încărcat în depozit. Același lucru se obține utilizând butonul *Încărcare automată în gesiune* situat în ribbon bar.

**Aviz articole fictive**: dacă este activ, în timpul încărcării avizului se verifică prezența articolelor fictive. Dacă există, se afișează un mesaj pentru completarea procedurii. Dacă răspunsul este afirmativ, tot avizul va fi încărcat (cu excepția articolelor fictive). Dacă răspunsul este negativ, avizul nu va fi încărcat. Articolul fictiv poate fi fără listă de materiale de prim nivel dacă în parametrii MRP este declarat cu tipul de aprovizionare de achiziție. În caz contrar înregistrarea de încărcare va afișa un mesaj de eroare în cazul în care există articole fictive în documentul de încărcat. 

### Analitic

Aceşti parametri indică prioritatea de căutare a centrelor de cost sau de profit pentru a le atribui articolelor documentului.

Modificarea priorităților se poate face utilizând butoanele:  

> **Mută sus** ![](/img/neutral/common/move-up.png) și  
> **Mută jos**![](/img/neutral/common/delete-cc.png).

*Valori implicite*: centrul de cost/profit este preluat din [Tip facturare achizițiiconfigurations/tables/purchase/purchase-invoices-type), dacă este prezent.   Când nu este prezent aici, aplicația îl va căuta în *Registru furnizor*. Dacă nici aici nu este prezent, îl va căuta în *Registru articol* și apoi în *Gestiune*.

**Recalculează**: dacă este setat, centrele de cost sau de profit sunt inserate sau actualizate cu ajutorul priorităţii alese.

**Evaluează prioritatea pentru fiecare dimensiune**: dacă este activ, permite evaluarea fiecărei priorități introduse în partea superioară pentru a verifica dacă există alte dimensiuni care nu au fost încă valorizate.  
Să presupunem că în *Registrul articolului* avem centrul de cost pentru dimensiunea *Business unit* și în *Tipul facturării achizițiilor* dimensiunea *Direcțional*. Dacă flagul nu este activ, sistemul evaluează doar centrul de cost prezent în *Registrul articolului*; dacă flagul este activ, după încărcarea centrului de cost din *Registrul articolului*, sistemul evaluează și dimensiunea prezentă în *Tipul facturării achizițiilor* (în exemplu, dimensiunea *Direcțional*) și, dacă este diferită de cele deja gestionate (*Business unit*), încarcă centrul și continuă cu verificarea celorlalte priorități.

După inserarea parametrilor aceștia trebuie salvați cu ajutorul butonului **Salvează**.