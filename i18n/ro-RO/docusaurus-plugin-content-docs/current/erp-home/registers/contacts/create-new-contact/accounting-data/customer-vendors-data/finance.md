---
title: Administrativ
sidebar_position: 2
---

În acest tab sunt prezente următoarele câmpuri:

**Moneda**: câmp, obligatoriu, propus implicit pe baza devizei societății, dar poate fi modificat pentru a avea această propunere la crearea documentelor și înregistrărilor contabile;

**Cod TVA**: reprezintă cota TVA care va fi propusă în documentele de achiziții/vânzări și în înregistrările contabile. 

:::note Observație

Prioritatea cu care va fi propusă cota în documente este următoarea:  
1. verifică declarațiilor de intenție, dacă există, și substituie cotele din ele,  
2. apoi registrul client/furnizor și, în final,  
3. registrul articolului.  

Trebuie evaluat dacă, în baza acestei priorității, trebuie sau nu să fie completat acest câmp în registrul clientului/furnizorului.

*Exemplu*: când completăm câmpul în registrul unui client intra-UE cu o cotă TVA neimpozabilă, această cotă va suprascrie în documente cota care a fost inserată în registrul articolelor din factură. Această prioritate poate să nu fie adecvată în alte situații, motiv pentru care trebuie să fiți atenți.

**Tip contab. TVA**: acest câmp permite inserarea, în combinație cu setarea șabloanelor contabilității generale, a contului analitic TVA de achiziții/vânzări de utilizat în înregistrările atribuite partenerului utilizat. Există un tip contab. TVA implicit în parametrii contabili;

**Tip contab. articol**: pentru contabilizările facturilor Fluentis, permite definirea logicii de completare a contului analitic detaliat pentru facturare achiziții/vânzări, diferențiind contrapartida (de cheltuieli/venituri) de clientul/furnizorul căruia îi aparține factura de achiziții/vânzări.

*Exemplu*: în planul de conturi avem contul de Venituri din vânzarea produselor cu analiticele:

1 Venituri din vânzarea produselor finite

2 Venituri intercompany din vânzarea produselor finite

3 Venituri externe din vânzarea produselor finite

Articolul XYZ are facturarea vânzărilor ‘A – Venituri din vânzarea produselor finite' în registru, care este asociat contului Venituri din vânzarea produselor finite. 

Dacă avem un client cu codul 001 care este român, setarea este adecvată, linia din vânzări cu articolul XYZ cu facturarea vânzărilor ‘A', deci cu înregistrarea venitului în contul corect.

Dar dacă vânzarea este către un client cu codul 002 intercompany sau către un client extern cu codu 003, pentru a evita ca utilizatorul să schimbe de fiecare dată facturarea vânzărilor (în B sau C) pe toate liniile documentului (facturii) pentru a contabiliza linia documentului cu contul potrivit, se poate defini completarea corectă pentru registrul în discuție, făcând astfel încât să aibă prioritate față de setarea generală.

Completarea câmpului se realizează cu ajutorul combobox-ului asociat tabelului [Tip contab. articol:configurations/tables/finance/articles-accounting-types) în acest tabel vom crea, de exemplu, un tip de contabilizare cu codul 1 ‘Intercompany' și un tip de contabilizare cu codul 1 ‘Extern', și vom activa flag-ul ‘Client' ambilor, astfel încât aceste două înregistrări să fie vizibile în registrele clienților. Deci, în registrul 002 vom seta cod 1 'Intercompany' și în 003 cod 2 ‘Extern'.

Apoi, în tabelul [Facturare vânzări,configurations/tables/sales/sales-turnover) pentru linia 'A -  Venituri din vânzarea produselor finite' din primul grid va trebui să inserăm în gridul inferior:

- o linie cu tipul contabilizării ‘Entercompany' și contul Venituri intercompany din vânzarea produselor finite;

- o linie cu tipul contabilizării ‘Extern' și contul Venituri externe din vânzarea produselor finite;

![](/img/ro-RO/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image03.png)

În acest mod utilizatorul va trebui apoi să seteze doar registrul și setările vor completa cu contul analitic adecvat. Contabilizarea va verifica pentru fiecare facturare vânzări inserată în factură dacă există un detaliu cu un cont particular pentru tipul inserat în client.

Setarea operează similar și în furnizori, setând flag-ul *Furnizor* în tabelul [Tip contabilizare articolconfigurations/tables/finance/articles-accounting-types) și actualizând tabelul *Facturare achiziții*.

**Cont analitic societate mamă**: în analizele riscului client, permite unirea clienților care aparțin aceluiași grup de companii; 

**Cont analitic de plată (pl. furn.)**: acest analitic este asociat angajamentelor contabile create, cu scopul de a verifica plățile/încasările în rapoarte și în simulări de cash flow;

**Cont gestiune contrapartidă**: este analiticul care va fi propus implcit în înregistrările din contabilitatea de gestiune;

**Cont analitic facturi de primit**: indicare in questo campo il sottoconto patrimoniale (prioritario rispetto al default inserito nei parametri di contabilità) da utilizzare nella procedura dell'area acquisti **Contabilizzazione fatture da ricevere** (funzionalità attualmente disabilitata).

**Cont analitic facturare**: câmpul, gestionat exclusiv pentru registrele clienți, permite definirea analiticului căruia îi va fi adresată factura în momentul creării facturilor din avize;

**Nu facturi însoțitoare**: dacă este selectat acest flag, aplicația nu va permite crearea facturilor de vânzare de tip însoțitoare pentru acest partener.

**Facturare cumulativă**: permite gruparea mai multor documente de transport într-o unică factură de achiziții/vânzări, pe baza logicii de grupare a procedurii însăși;

**Nu grupa după destinație**: indică faptul că, pentru acest partener, nu se dorește niciodată gruparea avizelor pe destinație în momentul creării facturilor de vânzare;

**Grupează după proiect**: indică faptul că avizele de transport sunt grupate pe proiect pentru a crea facturile de vânzare;

**Crează facturi din avize pe OC**: avizele de transport sunt grupate pe ordin client pentru crearea facturilor de vânzare.

**Gest. EDI**: abilitează gestiunea fișierelor EDI (funcționalitate inactivă);

**Intrastat/Cod. Serv**: dacă este selectat acest flag, se abilitează urmărirea declarației intrastat pentru documentele/înregistrările atribuite acestui partener. În cazul partenerului cu flag-ul ‘Intrastat' se poate insera codul serviciului implicit pentru 2 sectiunii din declarația intrastat.

**Proc. cheltuieli intrastat/Semn**: indică procentul mediu al cheltuielilor de adăugat/scăzut la valoarea mărfii pentru calcularea valorii statistice în declarația intrastat;

**Semn**: acest semn indică dacă cheltuielile se însumează sau se scad pentru a obține valoarea statistică a mărfurilor în declarațiile intrastat;

**Categorie administrativă**: este o informație statistică a categoriei administrative asociate partenerului;

**Categorie comercială**: este o informație statistică, dar și de configurare a discounturilor pe baza criteriilor de asociere definite în ofertele din aria vânzări;

**Categorie facturare**: criteriu de filtrare pentru procedura de creare facturi de vânzare din avize;

**Responsabil**: în analizele riscului client, este responsabilul comercial al partenerului.

*Buton specific*  
> **Calculare discount**: pentru atribuirea, în registrul partenerului, a unei configurări discounturi (definite în modulul Oferte de vânzări, în aria Vânzări). Acest buton este activ doar în registrul unui client. 