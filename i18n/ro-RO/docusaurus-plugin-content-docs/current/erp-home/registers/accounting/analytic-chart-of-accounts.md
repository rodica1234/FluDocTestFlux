---
title: Planul de conturi
sidebar_position: 1
---

Codificarea planului de conturi implică și completarea unei serii de tabele:  [Tipuri contconfigurations/tables/finance/account-types), [Registre contacteerp-home/registers/contacts/registers-management), [Element de cheltuieliconfigurations/tables/finance/charge-item), Centre de cost, [Centre de profitconfigurations/tables/controlling/cost-accounting/profit-centres), Departamente, Înregistrări de rectificare/integrare, [Șabloane automateconfigurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail), Tip sumă.

*Butoane comune*

**Caută conturi**: buton pentru căutarea conturilor analitice pe baza filtrelor de căutare inserate în grupul selectat.  
**Cont nou**: poziționează cursorul pentru inserarea unui nou cont analitic de gestiune în grupul selectat.  
**Șterge cont**: buton pentru ștergerea contului analitic de gestiune selectat. Un cont analitic nu poate fi șters dacă a fost utilizat de sistem.  
**Șterge grup**: buton pentru ștergerea grupului selectat.  
**Extinde/Comprimă grup**: buton pentru extinderea/comprimarea arborelui grupului selectat.  
**CdC nou**: poziționează cursorul pentru inserarea unui nou centru de cost pentru contul analitic selectat.  
**Șterge CdC**: șterge centrul de cost selectat.  
**CdP nou**: poziționează cursorul pentru inserarea unui nou centru de profit pentru contul analitic selectat.  
**Șterge CdP**: șterge centru de profit selectat.  
**Vizualizează**: buton pentru vizualizarea conturilor analitice de gestiune pentru  grupul selectat.  
**Listează**: buton pentru listarea conturilor analitice de gestiune pentru  grupul selectat.  
**Nou cont automat**: poziționează cursorul pentru inserarea unui nou cont analitic automat pentru contul analitic selectat.  
**Șterge cont automat**: șterge contul analitic selectat.  

### Inserare structură plan de conturi

Codificarea planului de conturi prevede inserarea listei grupurilor în secțiunea superioară a ferestrei:

![](/img/ro-RO/erp-home/registers/accounting/analytic-chart-of-accounts/image01.png)

Cu ajutorul butoanelor pentru inserarea grupurilor se vor putea insera prime nivele noi sau nivele inferioare celui selectat, atribuind fiecăruia un cod alfanumeric univoc, o descriere și un tip de cont.

**Nouă grupare**: doar pentru inserarea unui nou *nivel zero* (un grup fără părinte deasupra lui).

**Nou grup**: pentru inserarea unui grup fiu pentru grupul selectat.

**Structură**: câmp completat automat de sistem pentru a reprezenta o concatenare a codurilor grupurilor și grupărilor în care este rândul;

**Descr. alternativă**: permite alocarea unei descrieri suplimentare care poate fi preluată, de exemplu, în bilanț (personalizându-l cu instrumente specifice). De exemplu, ar putea fi introdusă o traducere a descrierii contului.

**Natură grup**: reprezintă tipul contului grupului. Combo box-ul este legat la tabelul Tip cont. Se recomandă completarea tipului contului și pentru grupuri și grupări, așa cum se face în faza de introducere a conturilor analitice descrise mai jos.

### Inserare detaliu plan de conturi

O dată selectat grupul cu nivelul cel mai mic, se va activa, în gridul inferior, lista cu conturile analitice inserate în acesta.

![](/img/ro-RO/erp-home/registers/accounting/analytic-chart-of-accounts/image03.png)

Acest *grid inferior se completează introducând datele direct* în rânduri. Observați că întotdeauna ultima linie este disponibilă atunci când inserați un nou rând și este marcată cu simbolul asterisc în zona albastră din stânga.

![](/img/ro-RO/erp-home/registers/accounting/analytic-chart-of-accounts/image04.png)  

:::note Notă
Structura planului de conturi, pentru fiecare grup de nivel inferior pentru care introduceți detaliile, necesită inserarea unui cont sintetic fără cont analitic (in imaginea de sus avem contul de Furnizori interni doar cu contul sintetic). Vă reamintim însă că numai conturile sintetice care au un analitic pot fi utilizate în înregistrările contabile.
:::

Recomandăm să urmați un criteriu numeric progresiv cu un număr uniform de caractere (de exemplu, toate conturile sintetice cu 4 caractere, toate conturile analitice cu 3 caractere).

:::note Notă
La introducerea conturilor analitice, este activ un contor care crește automat numărul analiticului cu unu față de ultimul introdus pentru acel grup; nu este recomandat să lăsați „găuri” în numerotare, deoarece acestea nu vor fi recuperate automat.
::: 

Continuați cu introducerea *Tipului de cont*, apoi a *Contului sintetic* (fără analitic dacă intenționați să creați un nou „master”) și apoi a Contului analitic (dacă este introdus pentru prima dată pentru grupul respectiv, introduceți manual numărul definind și numărul de caractere, de exemplu 1 sau 01 sau 001; la următoarea inserare numărul va fi mărit automat). 

**Data inserare**: este data în care se creează contul sintetic/analitic;

**Ultima modificare**: este data ultimei modificări a codului contului sintetic/analitic, actualizat automat de aplicație;

**Deschidere angajamente**: flag care indică, pentru conturile asociate la registrele clienților și furnizorilor, dacă este considerată deschiderea angajamentelor pentru acel cont. Flag-ul este preluat și trebuie gestionat și în registru.

Este posibil să activați flag-ul de aici pentru conturile fără registru (costuri, venituri etc.) pentru a deschide angajamente simultan cu înregistrarea contabilă (caz rar). În acest caz, șablonul contabil utilizat trebuie să aibă activ parametrul pentru deschiderea angajamentelor. În acest caz, flag-ul activ pe cont permite realizarea controlul concordanței înregistrării contabile cu angajamentul deschis. În orice caz, deschiderea angajamentelor pentru conturi fără registru trebuie făcută manual.

**Data sf**: se foloseste pentru a bloca utilizarea contului analitic în tranzacții noi (începand de la data inserată), pastrând vizibilitatea tranzacțiilor introduse anterior;

**Cheltuieli/venituri - anticipate/angajate- Cont sintetic/analitic/Descriere**: reprezintă conturile care au prioritate față de cele inserate în [parametri contabilitateconfigurations/parameters/finance/accounting-parameters) care permit introducerea, pentru veniturile și cheltuielile anticipate și angajate, a unui cont analitic specific utilizat la contabilizarea înregistrărilor de ajustare și integrare aferente contului analitic de cheltuieli sau venituri pe care îl inserăm.

Vă amintim că pentru gestionarea automată a acestor câmpuri, contul de cheltuieli sau venituri supus ajustărilor trebuie să aibă un anumit tip de cont (de exemplu „de rectificat”) care să aibă flag-ul Serviciu activ în tabelul [Tip contconfigurations/tables/finance/account-types).

**Element de cheltuieli/Descriere**: combo box asociat la tabelul [Elemente de cheltuieliconfigurations/tables/finance/charge-item); permite asocierea la o informație statistică utilă în controlul de gestiune.

**Variabilitate**: acest câmp, conectat la gridurile *Atribuire CdC* și *Variație CdC* este utilizat îndeosebi când *înregistrarea contabilă este asociată la mai multe centre ale companiei*. La fel și în câmpul omonim din gridul *Variație CdC* se inserează o valoare procentuală care *definește dacă costul este un cost fix *(0% variație ) sau un *cost total variabil* (100% variație) sau parțial variabil (de ex. 70%). Vedeți în imaginea de mai jos completarea corectă.

*Observație*: nu trebuie confundat cu câmpul Procent (prezent în gridul Atribuire Cdc) care indică procentul înregistrării contabile care trebuie atribuit centrului respectiv (de exemplu un cost împărțit între două centre la 50% sau 70% și 30%).

Câmpul **Variabilitate** din gridul principal are prioritate față de cel din gridul *Variație Cdc*. Din acest motiv, dacă este completat doar câmpul din gridul principal, datele vor fi utilizate pentru ambele (sau pentru toate) centrele asociate contului selectat.

![](/img/ro-RO/erp-home/registers/accounting/analytic-chart-of-accounts/image05.png) 

**Nu utiliza în controlling**: flag-ul activ (de utilizat doar dacă funcțiile avansate pentru controlling sunt active în tabelul  Societăți) permite excluderea înregistrărilor contabile prezente pentru contul selectat din calculele specifice ale controlului de gestiune. În acest fel, va fi posibilă operarea manuală cu ajutorul funcțiilor specifice ale modulului de controlling.  

Metoda descrisă anterior necesită, periodic, efectuarea ajustărilor pentru a echilibra înregistrările contabile (care ajung în bilanț) cu înregistrările de gestiune (ale controlului). Aceste ajustări vor putea fi vizualizate în rapoartele specifice controlului prin intermediul rectificărilor specifice (cu semn pozitiv sau negativ, în funcție de caz) și indicat distinct, care reconciliază totalurile bilanțului cu totalurile contabilității de gestiune.

Următoarele două câmpuri sunt utile acestei proceduri:

**Timpi de echilibrare**: permite alegerea perioadei ajustării: anual, infraanual sau nici una din cele două.

**Tipuri de echilibrare**: permite alegerea între următoarele două metode de ajustare:

- **Reproporţionează aplicaţie** pornește de la înregistrarea contabilă și o reproporționează (inserând ajustări) folosind logica contabilității analitice (adică atribuirea centrelor de cost) pentru a gestiona diferența;

- **Diferențe analitică**: de la contabilitatea de gestiune (controlling) și o realiniează la datele contabile prin introducerea ajustărilor cu un semn pozitiv sau negativ.

**Procente de variație/descriere**: combo box asociat la tabelul [Procente de variațieconfigurations/tables/controlling/analytical-accounting/variation-percentages), permite definirea, pe fiecare analitic, a procentelor (predefinite și clasificate în tabelul relativ) care urmează să fie aplicate în diferite procese din controlling (de ex. bugetul prevăzut pornind de la cel realizat în anul precedent, aplicând majorări sau scăderi).

**Distribuție perioade/Descrizione**: combo box asociat la tabelul [Distribuție perioadeconfigurations/tables/controlling/managerial-accounting/periods-distribution), permite atribuirea, pe fiecare cont analitic, a logicii de distribuție specifice înregistrării contabile pe fiecare perioadă în faza elaborării închiderilor infrannuale.  

**Grupuri de regularizare**/**Descriere**: combo box asociat la tabelul [Grupuri regularizareconfigurations/tables/controlling/analytical-accounting/adjustments-groups) în care se pot codifica grupări de conturi care sunt utile pentru gestionarea rapoartelor specifice controlului. Câmpul nu are altă valoare operațională și nu generează automatisme suplimentare.

**Descriere extinsă 1 / 2 / 3**: câmpuri suplimentare pentru descrieri alternative (de exemplu în limba). Ele pot fi, de exemplu, introduse ulterior în raportul bilanțului prin personalizarea acestuia.

### Inserare asociere conturi analitice – Centre companie

Conexiunea se face selectând contul analitic de referință și inserând lista de CdC/CdP în cele două griduri laterale. Se poate asocia valorizarea pe diferite diviziunii, dar în mod normal, diviziunea nu este inserată. Nu se verifică dacă suma procentelor introduse este egală cu 100%.

*Observație*: dacă se activează funcțiile avansate pentru controlling în tabelul  [Societățiconfigurations/tables/general-settings/company), utilizarea centrelor de profit nu mai este relevantă pentru că se utilizează CdC cărora le vor fi atribuite componentele negative sau pozitive pentru a trece apoi la elaborări avansate, cum ar fi inversări și comparații pentru a determina marjele, etc. 

Reamintim faptul că există puncte de codificare ulterioare ale centrelor de cost/profit: Registre client/furnizor/agent, Registre articole,Gestiuni, Mijloace fixe. Prioritatea de valorizare este definită în mod normal în parametrii de gestionare a fiecărui modul.

### Atribuire CdC

**Nr**: progresiv linie

**CdC/Descriere**: combo box asociat la tabelul Centre de cost.

**Procent %**: reprezintă procentul de atribuire al înregistrării contabile la centrul inserat în linie. De exemplu, prin introducerea valorii 100 înregistrarea contabilă va fi atribuită 100% acestui centru, prin inserarea valorii 50 va atribuită la 50% și, prin urmare, reziduul va fi atribuit (eventual) altor centre inserate în liniile inferioare.

**Diviziune/Descriere**: asocierea poate fi inserată diferit, pe diviziuni.

**Dată început valabilitate**: indică data de la care este activă atribuirea automată a înregistrării la centru.

**Dată sfârșit valabilitate**: indică data de la care nu mai este activă atribuirea automată a înregistrării la centru.

**Dimensiune/Descriere**: reprezintă dimensiunea atribuită centrului de cost (este disponibil doar dacă sunt activate funcțiile avansate pentru controlling din tabelul  Societăți).

**Categorie/Descriere centru de cost**: asociate la tabelul *Categorii centre de cost* permit conectarea la fiecare *Dimensiune* de analiză din controlling unei categorii care, la rândul său, este conectată la diferite centre de cost. În acest fel, când se inserează înregistrarea contabilă, operatorul poate să aleagă o serie de centre de cost predefinite. Acest lucru se poate face ca alternativă la asocierea centrului la cont (posibil prin activarea parametrului *Obligatoriu cont/centru* în *Dimensiune*).

### Conturi analitice automate

În acest grid se poate insera, pentru fiecare cont analitic care va fi inclus într-o înregistrare contabilă inserată cu ajutorul unui șablon contabil care conține un șablon automat, un cont analitic specific de utilizat în înregistrarea care se referă la al doilea șablon automat. 

În acest fel, pot fi modificate în mod „dinamic” conturile analitice utilizate de șablonul secundar, în funcție de contul analitic care substituie contul generic (de obicei inserat în șablonul principal) la crearea înregistrării contabile.

În plus față de Codul contului analitic, este necesar să se introducă și *Tipul sumei* și secțiunea *Debit/Credit* (vezi și  [Șabloane contabileconfigurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header)).

Pentru detalii despre tab-ul cu **Extra Data** consultați documentația referitoare la  [Extra Dataconfigurations/utility/extra-data/extradata/new-extradata-simple). 