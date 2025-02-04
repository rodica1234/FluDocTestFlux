---
title: Area
sidebar position: 2
---


:::tip Nota
La tabella è d'interesse solo nelle società con il flag *Controlling* attivo.
:::

I Dati del Controlling vengono sempre gestiti con un’area di analisi collegata che identifica che tipi di dati ci sono dentro: Possiamo immaginarla come una scatola fisica, dove ogni scatola viene alimentata con valori contabili e valori quantitativi e ogni scatola può avere un suo modello di calcolo diverso e a sé stante. Un’area comprende i dati di tutte le *dimensioni* dei centri.
I campi disponibili sono:
- ***Codice***
- ***Descrizione***
- [***Tipo Area***configurations/tables/controlling/managerial-accounting/area-type)
- ***Commessa di quadratura***, non gestito



***TIPOLOGIE DI AREE***
Avremo tipicamente 3 aree:
- *BUDGET*: avremo il budget per l’anno successivo;

- *CONSUNTIVO*: quando andiamo ad elaborare le chiusure infrannuali; 

- *SET DI REGOLE*: area che non ha valori, se non qualche misura fisica. E’ l’area depositaria delle regole *standard* dei cost driver: se sto elaborando, ad esempio, l’area dei consuntivi e sto cercando di ripartire il mio costo per gli affitti tramite un cost driver, se trovo un Cost driver specifico per i consuntivi Fluentis userà quel driver, altrimenti andrà a ricercare nelle regole generali valide di default collegandole all'area *set di regole*

:::tip Nota
Possiamo definire liberamente quante aree di analisi vogliamo. L'obiettivo tipico è quello di simulare *cosa succede se* cambio le regole dei cost driver aziendali, o magari con il fine di applicare configurazioni di costo differenziate.

Altro utilizzo è quello di 'cristallizzare' le elaborazioni del controlling: come avremo modo di spiegare parlando dei cost driver, le elaborazioni del controlling cancellano e ricreano i dati dell'anno che si sta elaborando. Se si vuole storicizzare, ad esempio, il primo *trimestre* per poterlo poi confrontare con i primi 3 mesi di quanto calcolato nell'elaborazione del primo *semestre*, possiamo ottenere questo risultato creando aree consuntive differenti.
:::


