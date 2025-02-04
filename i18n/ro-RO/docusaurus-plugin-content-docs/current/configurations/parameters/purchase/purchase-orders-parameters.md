---
title: Parametri ordine furnizori
sidebar_position: 5
---

Parametrii ordinelor furnizori permit setarea de bază pentru gestionarea corectă şi în funcţie de specificul cerut de fiecare societate.

*Butoane specifice*:

> **Restaureaza parametrii**: permite restaurarea parametrilor la valorile inițiale. 

### Generale

**Gestiune unitate de măsură dublă**: când este activ, se activează combo box UM Alt şi coloana cantitate alternativă din gridul articole al ordinului pentru a le putea gestiona. 

**Propune automat U.M. alternativă**: acest parametru se activează doar dacă “Gestiune unitate de măsură dublă” este activ. Când este inserat un articol care conţine în registrul său, în tab *UM alternativă*, o UM alternativă implicită, această UM este automat propusă ca UM alt pentru articol şi este calculată şi cantitatea alternativă folosind factorul  de conversie al acesteia. 

**Recuperare din ziua curentă**: când este activ, recuperarea golurilor de numerotare se realizează automat doar pentru ziua curentă. Dacă de-a lungul zilei au fost create ordinele 7,8,11,12 şi acest flag este setat, următorul număr propus va fi 10 adică cel mai mic număr liber faţă de cel inserat de utilizator.  

**Auto inserare variante în atribute variante**: nu mai este utilizat;   

**Nu permite executarea unei cantităţi superioare**: dacă este activ, când este creată o recepţie mărfuri dintr-un ordin, utilizatorul nu poate insera o cantitate superioară celei inserate în prezentul ordin. 

**Control continuitate dată şi număr**: când este activ, trebuie să fie progresivitate între numărul şi data documentului. Astfel, dacă în data 21/11/2021 sunt 3 ordine cu numărul 7, 8, 10 şi pentru data 22/11/2021 există ordinul numărul 11, şi utilizatorul vrea să insereze un ordine în data 22/11/2012 – unicul număr posibil în acea dată va fi 12 pentru a menţine progresivitatea între număr şi dată. 

**Cost zero dacă nu sunt oferte**: dacă este activ şi nu există oferte pentru articolele inserate în ordin, preţul propus va fi 0; dacă nu este setat va fi propus costul ultim din registrul articole. 

**Vizualizează dimensiuni**: când este activ, în tab *Articole* din ordine furnizori sunt vizibile 3 coloane *Înălţime*,*Lăţime*, *Adâncime*; 

**Permite avize cu acelaşi număr şi furnizor**:  dacă este activ, permite inserarea aceluiași număr de aviz pentru același furnizor. Recomandăm să nu activați acest parametru pentru a permite aplicației să facă un control al univocității;   

**Blocare inserare document în sărbători legale**: când este activ nu se pot insera documentele cu data corespunzătoare unei sărbători legale (sâmbătă, duminică, sărbători).  

**Execută doar ordine autorizate**: dacă este activ, când sunt executate ordinele, sunt afişate doar ordinele autorizate (cu check-ul “Autorizat“ selectat in antetul ordinului furnizor). 

**Propune marca cu prioritate ofertă furnizor/ordin client**: nu mai este utilizat 

**Permite modificarea TVA**: dacă este activ, în cazul [Creării automate a ordinelor din Cereri de achiziţiepurchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests), codul TVA este propus din registrul furnizorului.   

**Cod operator obligatoriu**: dacă este activ, devine obligatorie inserarea operatorului/angajatului în antetul ordinului. 

**Caută preţuri articole în toate ofertele predefinite**: dacă este activ, articolul inserat în linia ordinului va fi căutat în toate ofertele inserate în registrul furnizorului, inclusiv în cele implicite (ofertele valide sunt cele care au data început valabilitate \<= cu data curentă şi au data sfârşit valabilitate nulă sau \>= cu data curentă). 

**Utilizează articol furnizor**: dacă este activ, câmpul pentru introducerea codului articolului furnizorului este propus în gridul articolelor ordinului Dacă nu este activ, acest câmp nu va fi vizibil; 

**Verifică articole în epuizare**: dacă este activ, sistemul verifică disponibilitatea articolelor pe linia ordinlui și avertizează dacă articolul se epuizează; 

**Contabilizare ambalaje**: dacă este activ, permite contabilizarea ambalajelor de returnat. 

### Încărcare

**Creează înregistrarea cu data documentului**: dacă este activ, înregistrarea de gestiune este creată cu aceeaşi dată pe care o are documentul; nu va fi necesară inserarea datei înregistrării în fereastra de încărcare. 

**Prioritate gestiune și șablon de încărcare**: dacă este activ, gestiunea şi şablonul de încărcare sunt citite din liniile documentului şi, dacă nu există, din parametrii ferestrei de încărcare; dacă nu este setat sunt utilizate gestiunea şi şablonul inserate în această fereastră de parametri. 

### Analitica

Aceşti parametri indică prioritatea de căutare a centrelor de cost sau de profit pentru a le atribui articolelor ordinului furnizor.

Modificarea priorităților se poate face utilizând butoanele:  

> **Mută sus** ![](/img/neutral/common/move-up.png) și  
> **Mută jos**![](/img/neutral/common/delete-cc.png).

**Recalculează**: dacă este activ, centrele de cost sau de profit sunt inserate sau actualizate cu ajutorul priorităţii alese.

**CdP/CdC obligatorii**: dacă este activ, atribuirea CdC/CdP devine obligatorie.

**Evaluează prioritatea pe fiecare dimensiune**: dacă este activ, acest flag permite evaluarea fiecărei priorități introduse în partea superioară pentru a verifica dacă există dimensiuni suplimentare care nu au fost încă valorificate. De exemplu, să presupunem că în *Registrul articolului* avem centrul de cost pentru dimensiunea *Business unit* și în *Tipul factuării achiziții* dimensiunea *Direcțională*. Dacă flagul nu este activ, sistemul evaluează doar centrul de cost prezent în *Registrul articolului*; dacă flagul este activ, după ce a încărcat centrul de cost prezent în *Registrul articolului*, evaluează și dimensiunea prezentă în *Tipul factuării achiziții* (în exemplul nostru dimensiunea *Direcțională*) și, dacă este diferită de cele deja gestionate (*Business Unit*), încarcă centrul și continuă cu verificarea celorlalte priorități.

După inserarea parametrilor aceștia trebuie salvați cu ajutorul butonului **Salvează**.