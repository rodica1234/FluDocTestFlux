---
title: Parametri contabilitate
sidebar_position: 2
---

Formul se află în **Home>Parametri>Administrativă** și permite inserarea diverșilor parametrii de gestiune pentru fiecare an contabil selectat în tabelul din partea stângă.

:::tip Important  
Trebuie să existe o înregistrare care conține diferiți parametri detaliați *pentru fiecare an contabil*. Prin urmare, *fiecare nou an* trebuie inițializat creând o înregistrare nouă de parametri utilizând butonul **Nou**.

Când se creează noul record de parametri, programul întreabă dacă se dorește și crearea altor [contori pentru noul anconfigurations/utility/new-year-counter-generation).
:::

*Butoane specifice*

> **Inserează cont**: buton pentru inserarea tipurilor de conturi pentru fiecare cont inserat. Setarea autorizează substituirea automată a contului generic în șablon cu contul din documentul fiscal. Deasemenea, blochează sau semnalează conturile incompatibile.  
> **Anulează raporte definitive**: buton pentru anularea rapoartelor definitive ale registrului jurnal, doar în cazul în care utilizatorul are acest drept în l'ARM. După anularea raportului definitiv, utilizatorul trebuie să reseteze contoarele contorul corespunzător câmpului **Dată ultimă listare registru jurnal**, din secțiunea **Date an**, compusă din trei câmpuri care conțin data, ultima linie și ultima pagină a raportului final.  
> **Anulează registru amortizări**: buton pentru anularea rapoartelor definitive ale registrului amortizărilor, doar în cazul în care utilizatorul are acest drept în l'ARM. După anularea raportului definitiv, utilizatorul trebuie să reseteze contorul corespunzător câmpului **Dată ultimă listare registru jurnal**, *din secțiunea **Date an**.  
**Mută sus**: pentru a muta sus rândul selectat în tabelul"Propune centre de cost/profit", atribuindu-i astfel o prioritate mai mare.  
**Mută jos:**: pentru a muta sus rândul selectat în tabelul"Propune centre de cost/profit", atribuindu-i astfel o prioritate mai mică.

## Generale

### Date an

**Început/Sfârșit exercițiu**: se referă la intervalul de date de înregistrare ale exercițiului selectat. Fiecare înregistrare contabilă, pentru controalele câmpurilor precedente, este inserată în exercițiul de apartenență respectând aceste date, care nu trebuie să se suprapună cu diversele exerciții.  
**Început/Sfârșit competență curentă**: câmpuri facultative recomandate, definesc intervalul de date competență care pot fi gestionate în înregistrările exercițiului selectat.  
**Închidere exercițiu precedent**:  se referă la data închiderii exercițiului precedent.  
**Ultima dată a listării jurnalului**:  memorizează ultima dată listată  definitiv pentru exercițiul curent. La deschiderea unui nou exercițiu această dată trebuie să fie egală cu data  închiderii exercițiului precedent.  
**Ultima pagină listată a jurnalului**: memorizează ultima pagină a  registrului jurnal al exercițiului selectat, listată definitiv. La crearea unui nou exercițiu acest câmp trebuie să aibă valoarea zero.  
**Ultima linie listată a jurnalului**:  memorizează ultima linie a registrului jurnal al exercițiului selectat, listată definitiv. La crearea unui nou exercițiu acest câmp trebuie să aibă valoarea zero.  
**Sold debit/credit**: memorizează ultimele solduri debit/credit ale registrului jurnal al exercițiului selectat listate definitiv. La crearea unui nou exercițiu aceste câmpuri trebuie să aibă valoarea zero.  
**Ultima pagină listată din reg. mijl. fixe**: memorizează ultima pagină a registrului mijloacelor fixe a exercițiului selectat, listată definitiv. La crearea unui nou exercițiu acest câmp trebuie să aibă valoarea zero.  
**Procent pro-rata**: permite inserarea valorii procentuale a pro-ratei valabilă pentru exercițiul selectat. În cazul în care nu aveți o opțiune pe care doriți să o utilizați, lăsați câmpul gol sau cu valoarea 100%.  
**Șablon deschidere/închidere conturi**: aceste două câmpuri, opționale, permit pre inserarea șabloanelor care vor fi utilizate în procedurile de închidere/deschidere conturi.  
**Propune centrele de cost/profit de la**: secțiunea inferioară permite definirea ordinii logice pentru valorizarea contabilă a centrelor de cost/profit.  
**Tip contabilizare TVA**: permite definirea tipului contabilizării implicite a cotelor TVA în diversele conturi analitice din planul de conturi.  
**Lichidare TVA**: această secțiune permite stabilirea periodicității cu care se va face lichidarea TVA-ului periodic.  
**Închidere lunară**: dacă este activă modifică funcționarea procedurii *Închiderea automată conturi* pentru a fi realizată lunar.  
**Gestionare comisioane**: activează calcularea comisioanelor agenților din modulul *Administrativ*.  
**Factor de actualizare**: indică valoarea creșterii mijloacelor fixe de la an la an în scopul amortizarii calculate în mod specific în modulul *Controlling* și gestionat în diferitele alte detalii din tab-ul *Amortizare pentru controlling* din *Fișa mijlocului fix*. Setarea este utilizată și de [*Categorii mijloace fixe pentru controlling*configurations/tables/controlling/analytical-accounting/controlling-asset-categories).  

*Exemplu*:  
Prin inserarea unei valori de 1,1 se va produce în fiecare an o creștere a valorii amortizabile a mijlocului fix cu 10%. Prin urmare, un activ cu o valoare inițială de 1000 va avea o valoare de 1.100 în anul x + 1 iar în anul x + 2 se va adăuga o creștere suplimentară.    
**Tip rotunjire TVA**:  această secțiune permite stabilirea modalității rotunjirii TVA.  
**Registre TVA**:  această secțiune permite stabilirea modului de listare a registrelor TVA: după data înregistrării sau după data competenței TVA în perioada selectată. Pentru cei care nu utilizează opțiunea de facturare diferită până pe 15 ale lunii succesive, rezultatul nu se schimbă.  
**Dată competență plafon egală cu**: stabilește dacă data competenței plafon, care va fi atribuită înregistrărilor TVA cu cota asociată plafonului, este setată pe baza datei înregistrării sau a datei documentului.  
**Numerotare** : permite să asociați câte un numărător fiecărui an selectat pentru înregistrările contabile definitive și pentru cele cu statusul *provizorie*. Util în cazul modificărilor periodice ale politicii de numerotare în locul definiției fixe a numărătorului în tabelul [Numerotare înregistrări contabileconfigurations/tables/fluentis-numerations).  
Dacă numerotarea nu este setată în acest form, implicit va fi căutată în tabelul *Numerotare înregistrări contabile*.  
Setarea numărătorului pentru înregistrările definitive și provizorii este prezentă și în fiecare șablon contabil (pentru a diferenția numerele pentru fiecare tip de înregistrare, după cum solicită unele localizări străine, de obicei cea franceză) în [antetul șablonuluiconfigurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header) iar dacă nu este inserată în șablon va fi citit cel inserat în *Parametri generali*. Dacă nu este definit un numărător nici în parametri, va fi citit cel prezent în tabelul general.   
**Autofactura**: secțiunea conține parametrii pentru elaborarea autofacturii din înregistrările contabile pentru comunicarea datelor privind achizițiile către SDI [**Parametri specifici** /e-invoice/auto-invoice/parameters).  

### Lista conturi clienți furnizori

**Combinația** tipurilor de conturi de client, furnizor, bănci și agenți cu conturile respective (sintetic, fără codul analiticului) care urmează să fie efectuată în acest tabel, deși nu este obligatorie, **este** <u>**recomandată**</u> pentru a permite diverse automatisme in cadrul aplicației.   
Subliniem în special două cazuri:  
1. După crearea registrului contactului, când se atribuie tipul contului, parametrul permite crearea noului analitic contabil destinat clientului / furnizorului / agentului / băncii în cauză, plasându-l sub contul sintetic corect. Fără această combinație, această atribuire ar trebui introdusă manual.  
2. În cadrul șabloanelor contabile, în special cele de înregistrare a facturilor, schema de înregistrare care prezintă un anumit cont sintetic, permite, prin combinația în cauză, verificarea corectitudinii contului din înregistrare (de exemplu un cont de furnizor în înregistrarea achiziției în locul unui cont cu același nume dar de tip client, blocând eventual inserarea conform setării parametrului de securitate relativ în șablon).  

:::note Notă
Setarea autorizează înlocuirea automată a contului general din șablon cu analiticul emitentului documentului fiscal. Prin urmare, lipsa setării nu va face ca automatismele șabloanelor să funcționeze corect, împiedicând automatizarea contabilizării facturilor.
:::

### Propunere centrele de cost/profit din: {#center-proposal}

Secțiunea definește ordinea logică de valorizare a centrelor de cost/profit.

Posibilele criterii cuprinse în secțiune pot fi mutate cu butoanele *Mută sus*/*Mută jos* din ribbon bar, pentru a gestiona prioritatea cu care datele sunt considerate de aplicație.

## Conturi

În acest tab sunt configurate detaliat conturile planului de conturi care vor fi utilizate în diferitele proceduri contabile automate efectuate de aplicație.

**Cont analitic TVA achiziții****: permite inserarea contului analitic care va fi propus la înregistrarea automată a TVA în momentul listării definitive a lichidării TVA periodice.  
**Cont analitic TVA vânzări**: permite inserarea contului analitic care va fi propus la înregistrarea automată a TVA în momentul listării definitive a lichidării TVA periodice.  
**Stare patrimonială inițială/finală**: permite inserarea contului analitic care va fi propus pentru operațiile de deschidere/închidere automată conturi.  
**Profit exercițiu curent**: permite inserarea contului analitic care va fi propus pentru operațiile de închidere/deschidere automată conturi.  
**Pierderi exercițiu curent**: permite inserarea contului analitic care va fi propus pentru operațiile de închidere/deschidere automată conturi.  
**Profit exercițiu precedent**: permite inserarea contului analitic care va fi propus pentru operațiile de închidere/deschidere automată conturi.  
**Pierderi exercițiu precedent**: permite inserarea contului analitic care va fi propus pentru operațiile de închidere/deschidere automată conturi.  
**Cont economic**: permite inserarea contului analitic care va fi propus pentru operațiile de închidere automată conturi.  
**Minusvaloare**: permite inserarea contului analitic care va fi utilizat la înregistrarea diferențelor economice negative din cesiune mijloace fixe.  
**Plusvaloare**: permite inserarea contului analitic care va fi utilizat la înregistrarea diferențelor economice pozitive din cesiune mijloace fixe.  
**Venituri în afara exploatării**: permite inserarea contului analitic care va fi utilizat la înregistrarea veniturilor în afara exploatării.  
**Cheltuieli în afara exploatării**: permite inserarea contului analitic care va fi utilizat la înregistrarea cheltuielilor în afara exploatării.  
**TVA de plată**: permite inserarea contului analitic care va fi propus la înregistrarea automată a TVA în momentul listării definitive a lichidării TVA periodice.  
**TVA de recuperat**: permite inserarea contului analitic al TVA de recuperat care va fi propus la înregistrarea automatica a TVA în momentul listării definitive a lichidării TVA periodice.  
**Facturi de primit**:  câmpul permite inserarea contului analitic generic care va fi utilizat în procedura de ‘Contabilizare facturi de primit' prezent în modulul facturi de achiziții sau la contabilizarea facturilor de achiziții care au tipul care prevede gestionarea competenței.  
**Facturi de emis**:  câmpul permite inserarea contului analitic generic care va fi utilizat la contabilizarea facturilor de vânzare  care au tipul care prevede gestionarea competenței.  
**Cheltuieli anticipate**:  câmpul permite inserarea contului analitic generic care va fi utilizat în procedura pentru rectificarea automată din modulul Închideri infra anuale.  
**Cheltuieli angajate**:  câmpul permite inserarea contului analitic generic care va fi utilizat în procedura pentru rectificarea automată din modulul Închideri infra anuale.  
**Venituri anticipate**:  câmpul permite inserarea contului analitic generic care va fi utilizat în procedura pentru rectificarea automată din modulul Închideri infra anuale.  
**Venituri angajate**:  câmpul permite inserarea contului analitic generic care va fi utilizat în procedura pentru rectificarea automată din modulul Închideri infra anuale.  
**Cheltuieli suspendate**:  cont analitic standard pentru înregistrarea cheltuielilor suspendate, pentru contabilitatea simplificată/liber profesioniști.  
**Venituri suspendate**:  cont analitic standard pentru înregistrarea veniturilor suspendate, pentru contabilitatea simplificată/liber profesioniști.  
**Cont analitic autofactură**: permite inserarea analiticului pentru crearea autofacturii din evidențele contabile pentru comunicarea datelor privind achizițiile către SDI.

:::note Video tutorial
[Parametri/finance/intro)
:::