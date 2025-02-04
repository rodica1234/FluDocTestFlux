---
title: Parametri risc client
sidebar_position: 6
---

Acești parametrii se găsesc în *Configurare > Utilitare > Trezorerie*.

Modulul **Risc client** citește toate angajamentele și efectele și documentele (ordinele clienți, avizele, facturile) dacă a fost activată opțiunea **Credit** în tabelele corespondente  (Tip OC, Tip avize vânzare, Tip facturi vânzare).

Cu opțiunea **Exclude blocare**, chiar dacă documentul generează credit, nu va fi blocat, ci doar semnalat.


**Logica generală**:
- ordinele sunt considerate dacă sunt listate, confirmate și au opțiuni active în tip (neexecutate sau executate forțat)
Executate forțat = restul nu va fi livrat și ordinul este considerat închis chiar dacă nu este.  
- avizele trebuie să fie listate și nefacturate.
- facturile dacă sunt sau nu listate depinde de parametru și necontabilizate (altfel sunt angajamente).  

*Câmpuri specifice*

**De la dată calcul (solduri contabile, facturi, avize)**: este data de începere a calculului. Documentele cu o dată anterioară nu vor fi luate în considerare.  
**Vizualizează efecte neîncasate contabilizate**: dacă este activ, permite vizualizarea sumelor restante contabilizate, indiferent de starea încasării. Are doar valoare informativă.  

**Multiplicator evaluare credit**: valore utilizzato nella form [**Utilizare credit**treasury/customer-risk/use-credit) pentru a determina valoarea câmpului *Credit estimat*.

*Baza de calcul pentru determinarea riscului client*  
**Sold contabil**: cu această setare, calculul creditului va fi efectuat pe baza soldului contabil al clientului.  
**Angajamente deschise**: cu această setare, calculul creditului va fi efectuat pe baza angajamentelor deschise ale clientului.  
**Consideră angajamentele din înregistrările provizorii**: dacă flagul precedent este activ, calculul consideră și eventualele mișcări derivate din înregistrările provizorii.  
**Blocare listare fizică**: când creditul clientului prevede blocarea documentului, acest flag blochează posibilitatea de a lista documentul blocat. Dacă nu este setat documentul, se poate lista, dar flagul ‘listat' nu va fi atribuit documentului.  
**Consideră facturile de listat**: dacă este activ, aplicația ia în considerare, la calculul creditului față de client, facturile create dar nelistate. Dacă nu este activ, la calcul sunt considerate doar facturile care au parametrul *Listat* activ.  