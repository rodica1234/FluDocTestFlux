---
title: Calcolo disponibilità
sidebar_position: 5
---

:::important A cosa serve
Il Calcolo della Disponibilità di Fluentis è uno strumento essenziale che consente agli utenti di determinare con precisione la disponibilità degli articoli all'interno dei magazzini. Questa funzionalità è accessibile attraverso un'interfaccia user-friendly, dove è possibile selezionare i magazzini sui quali si desidera eseguire il calcolo. L'utente può inserire informazioni come il codice del magazzino e la sua descrizione, configurando così la base su cui operare.

Nella sezione dedicata al calcolo, gli utenti possono impostare i criteri per la disponibilità fisica e logica, specificando se considerare documenti relativi a acquisti, vendite, produzioni pianificate e rilasciate. Inoltre, è possibile stabilire un intervallo temporale specifico per il quale si desidera effettuare il calcolo, aumentando così l'accuratezza dei dati raccolti.

Questa funzionalità non solo facilita il monitoraggio delle scorte, ma supporta anche decisioni strategiche in tempo reale, assicurando che le aziende possano rispondere prontamente alle esigenze di approvvigionamento e vendita. Grazie al calcolo della disponibilità, Fluentis offre quindi un vantaggio competitivo significativo, ottimizzando la gestione delle giacenze e migliorando l'efficienza operativa.
:::

La finestra relativa al calcolo della disponibilità si apre tramite il percorso **Home > Articoli > Calcolo disponibilità**.

Attraverso questa form, si inseriscono i magazzini su cui si desidera calcolare la disponibilità e che poi verranno riportati nella form [Analisi della disponibilitàerp-home/registers/items/availability-analysis).

La form si compone da una griglia, in cui si inseriscono il codice del **Magazzino** e la relativa **Descrizione** per tutti i magazzini su cui si vuole venga calcolata la disponibilità (aggiungendo o togliendo un magazzino all'interno di questa griglia, questo verrà aggiunto o tolto anche dalla griglia dei magazzini presente nell'*Analisi della disponibilità*).

Nella sezione a destra si può impostare la tipologia di **Calcolo della disponibilità fisica** e della **Disponibilità logica** per: conto/lavoro, acquisti, vendite, produzione pianificata, produzione rilasciata, magazzino (si possono scegliere una, alcune o tutte queste opzioni che possono essere diverse nel caso della disponibilità fisica rispetto alla disponibilità logica).

Infine c'è la possibilità di indicare il periodo che il sistema deve tenere in considerazione per il calcolo della disponibilità, inserendo a partire dalla data odierna (ovvero dalla data in cui si lancia l'analisi della disponibilità) il **Numero dei giorni** fino a cui il sistema deve andare a controllare la disponibilità all'interno dei documenti.

Attualmente questi campi non vengono più gestiti perché sono stati implementati all'interno della schermata di Analisi della disponibilità. L'unica parte ancora attiva resta la griglia dei Magazzini.

Una volta che i parametri sono stati settati, si può procedere all'[Analisi della disponibilitàerp-home/registers/items/availability-analysis) attraverso la stampa *Analisi disponibilità*.
