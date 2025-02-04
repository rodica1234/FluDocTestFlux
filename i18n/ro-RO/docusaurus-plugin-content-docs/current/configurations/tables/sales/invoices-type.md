---
title: Tip facturi
sidebar_position: 16
---

Tabelul se află pe calea **Configurare > Tabele > Vânzări > Tip facturi**.  

Permite inserarea datelor noi sau căutarea celor existente pentru a le vizualiza, modifica sau șterge.

Conține o zonă de filtrare și una de rezultate. După ce ați setat toate filtrele dorite, efectuați clic pe butonul **Caută** pentru a vizualiza datele în tabelul de rezultate.

Pentru a insera datele, efectuați clic pe primul rând gol din tabel sau apăsați butonul **Nou**.

*Câmpuri specifice*

**Tip** și **Descriere**: reprezintă tipul și descrierea facturii.  
**Natură factură**: permite selectarea naturii tipului facturii.  
**Numerotare**: consultați [nmerotări Fluentisconfigurations/tables/fluentis-numerations).  
**Ordin**: dacă este setat, factura poate fi creată din executarea unui ordin client cu ajutorul procedurii corespondente.  
**Imediată**: dacă este setat, factura este de tip imediată și va trebui să inserați în factură și datele pentru transport. Dacă nu este activ, factura va fi ulterioară și datele pentru transport vor fi preluate din aviz.   
**Natură tranzacție**: reprezintă codul tranzacție utilizat pentru declarația intrastat. Consultați [Natură tranzacții intrastatconfigurations/tables/finance/nature-of-intrastat-transaction).  
**În statistică**: dacă este setat, înseamnă că factura de acest tip este considerată în statistici și va fi vizibilă în rapoartele *Facturat*.  
**Proformă**: dacă este setat, factura este de tip proforma și nu poate fi contabilizată.  
**Șablon/Descriere șablon**: reprezintă șablonul contabil utilizat pentru contabilizarea facturii. Consultați [șabloane contabilitate generalăconfigurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/recording-detail)
**Șablon de gestiune/Descriere șablon de gestiune**: reprezintă șablonul de gestiune utilizat pentru contabilizarea facturii în contabilitatea de gestiune.  
**Note**: permite inserarea notelor libere pentru tipul facturii.  
**Control client**: dacă este setat, în momentul inserării contului analitic titular al documentului, aplicația verifică dacă tipul contului este obligatoriu client. Dacă nu este activ, aplicația va lansa un mesaj de eroare. Recomandăm activrea lui pentru toate tipurile de factură de vânzare.  
**Blochează doc. listat**: dacă este setat, nu permite modificarea unei facturi deja listată și care are activ parametrul *Listat* în antetul său.  
**Intracomunitar**: dacă este setat, aplicația verifică dacă țara clientului este CEE, în caz contrar, dacă tipul facturii și clientul nu sunt de același tip  este lansat un avertisment. Acest parametru trebuie activat pentru toate tipurile de facturi intracomunitare.  
**Executare factură proformă**: dacă este setat și factura este proformă, procedura execută ordinul; dacă nu sunt îndeplinite aceste condiții ordinul rămâne neexecutat.  
**Șablon transport**: reprezintă descrierea șablonului de transport care va fi listată în factură.  
**Credit**: dacă este setat, factura cu acest tip este considerată la controlul creditului acordat.  
**Exclude blocare**: dacă este setat, aplicația nu va considera blocarea documentului datorat eventualei depășiri a creditului acordat și va permite utilizatorului să-l insereze și să-l listeze.  
**Șablon/Descriere șablon**: reprezintă șablonul pentru înregistrarea mărfii conținute în facturi de acest tip.   
**Gestiune/Descriere gestiune**: reprezintă gestiunea utilizată pentru mărfurile din facturi de acest tip. Această valoare va fi utilizată implicit.  
**Grupare angajamente**: dacă este setat, angajamentele sunt grupate în contabilizare facturi. Pentru detalii consultați [Grupare angajamente/maturity-values/maturity-values/maturity-value-grouping).
**Executare cantitate articol netotalizată**: dacă este setat, la executarea facturilor de acest tip, cantitățile executate sunt preluate în documentul de executare pentru fiecare linie din executare, fără însumarea cantităților.  
**Agr. vânz. TVA**: dacă este activ, în momentul creării facturii, aplicația va verifica, dacă pentru articolul utilizat, este prezent un cod TVA agricol. Dacă nu este prezent, este utilizat codul TVA prezent în [registrul articoluluierp-home/registers/items/create-new-items/item-registry/generality);  
**Control dispoziție de livrare descărcată**: dacă este activ, când se creează o factură dintr-o dispoziție de livrare descărcată, se activează automat parametrul *descărcat* pentru document.  
**Blochează cantitate dispoziție de livrare**: dacă este activ, blochează cantitatea și cantitatea alternativă în factura creată din lista UdI. Recomandăm activarea acestui parametru atunci când se utilizează gestionarea dispoziției de livrare și UdI.  
**Calculează comisioane**: dacă este setat, pentru facturile cu acest tip se calculează comisioanele agenților.  
**Separă aviz de vânzare**: dacă este setat, pot fi descărcate din gestiune și facturile diferite (în mod normal, descărcarea din gestiune se realizează prin intermediul avizului).  
**Gest.EDI**: dacă este setat, pentru facturile cu acest tip puteți să creați fișiere EDI.  
**Nu executa disp. livrare**: dacă este setat, aplicația nu permite crearea fișierului EDI pentru acest tip de factură.  
**Preț cu TVA**: dacă este activ, aplicația preia prețul de vânzare din ofertele de prețuri sau din registrul articolului și îl inserează cu tot cu TVA. Dacă nu găsește oferta de preț (pentru că este expirată sau nu este compatibilă) preia costurile sau prețurile din registrul articolului și le inserează cu tot cu TVA.
**Competență economică**: dacă este setat, tipul facturii are competența economică și va fi necesară inserarea datelor perioadei de competență.  
**Șablon competență economică**: permite selectarea șablonului care va fi utilizat la contabilizarea facturilor. Pentru detalii consultați [Șabloane contabilitate generalăconfigurations/tables/finance/ledger-records-templates/search-ledger-records-templates).
**Gestionare matrici Extra Data**: dacă este activ, în cazul gestionării articolelor cu matrice, permite afișarea unui tab suplimentar pentru atribuirea valorilor cantității în fiecare celulă a matricei. 