---
title: Inserare șabloane contabilitate generală
sidebar_position: 1
---

Fereastra este compusă dintr-un antet și trei secțiuni: **[Detaliu atributeconfigurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail)**, **[Detaliu înregistrareconfigurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/recording-detail)** și **[Parametriconfigurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/parameters)**.

### Antet

**Șablon**: cod alfanumeric de 5 caractere, care trebuie să fie univoc.  
**Tip mișcare**: reprezintă tipul mișcării înregistrării. Este un tabel fix intern, care nu se poate modifica de utilizator, care separă șabloanele fără TVA de celelalte.  
**Tip document**: Tabelul  este predefinit dar poate fi modificat/integrat de utilizator. În acest tabel, particulare sunt liniile care prevăd flag-urile ‘Accredito' și ‘Nota di variazione': pentru Accredito procedura controlează dacă secțiunea TVA este valorizată cu sume negative (un control al coerenței semnelor este efectuată la contabilizarea notelor de credit din aria vânzări/achiziții: înseamnă că nu pot fi prezente linii cu sume pozitive și, simultan, altele pentru un alt cont analitic cu sume negative); pentru ‘Nota di variazione' procedura va activa, tot în secțiunea TVA a înregistrării, un flag pentru identificarea liniilor relative la notele di variazione și o dată de referință.  
**Numerotare**: acești parametri permit asocierea unei [numerotăriconfigurations/tables/fluentis-numerations) la fiecare șablon contabil. Questo tipo di gestione è richiesto in alcune localizzazioni estere. Dacă nu este specificată numerotarea, implicit va fi inserată cea inserată în [*Parametri contabilitate generală* configurations/parameters/finance/accounting-parameters/) și, în lipsa aceste setări, va fi citit tabelul general *Numerotare înregistrări contabile*.

**Registre contabile**: este util pentru gruparea și clasificarea șabloanelor. Aceste categorii pot fi asociate la diverse numerotări din câmpul precedent.  
Exemplu: achizițiile ar putea avea numărătorul a) asociat la jurnalul de "Achiziții", iar vânzările la b) jurnalul "Vânzări", etc.  
**Registru de încasări și plăți**: identifică șabloanele care vor fi preluate în registrul de încasări/plăți din contabilitatea simplificată a liber profesioniștilor.  
**Liber profesioniști**: identifica un șablon pentru contabilitatea liber profesioniștilor.  
**Dată sfârșit valabilitate**: este utilă pentru blocarea utilizării unui șablon contabil pornind de la această dată. Nu va mai fi vizibilă în lista șabloanelor din data succesivă.  