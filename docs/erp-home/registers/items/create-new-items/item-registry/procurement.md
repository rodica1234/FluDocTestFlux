---
title: Approvvigionamento
sidebar_position: 3
---

:::important A cosa serve
Il tab Approvvigionamento dell'anagrafica articoli di Fluentis permette di definire tutti i parametri necessari per gestire in modo ottimale le scorte dell’articolo. Nella prima sezione, si impostano i dati generali come la scorta minima e massima, che indicano i limiti entro cui mantenere le quantità di magazzino. Altri parametri includono le settimane di copertura, i giorni per la scorta e il punto di riordino, che stabilisce quando è necessario procedere con un nuovo ordine.
Inoltre, sono disponibili impostazioni per le stampanti etichette e i tipi di report etichette, utili per la gestione dei lotti nei diversi stati (Unico, Conforme, Non conforme, Quarantena). Nella seconda sezione, è possibile specificare questi parametri per ogni magazzino in cui l'articolo è presente, offrendo una gestione accurata e personalizzata delle scorte.
:::

In questo tab si vanno a definire tutti i dati necessari per l'approvvigionamento dell'articolo in oggetto.

La finestra si compone di due parti: 

1. Nella prima parte vengono settati i dati per l'approvvigionamento generale dell'articolo e non per singolo magazzino:

**Scorta minima e scorta massima**: rappresenta le quantità minime che devono essere sempre presenti a magazzino per quell'articolo e le quantità massime che si possono tenere a magazzino;

**Giorni per la scorta**: rappresenta il numero di giorni necessari per rimpiazzare almeno la scorta minima che è stata indicata per quell'articolo;

**Settimane di copertura**: viene indicato l'intervallo di tempo (calcolato in settimane) durante il quale (per cui/in cui) la scorta va a coprire il bisogno di quell'articolo;

**Indice di copertura**: è un campo editabile nel quale viene inserita una percentuale che può venire o meno considerata dallo schedulatore o dall'MRP per il ripristino delle scorte.

Se nei parametri MRP si mette il flag su *Considera indice copertura* nel momento della schedulazione la procedura andrà a tenere in considerazione la percentuale indicata in questo campo per ripristinare la disponibilità dell'articolo per una quantità tale da coprire il fabbisogno delle n settimane che si è deciso di specificare nel campo **Settimane di copertura**;

**Punto di riordino**: qui si va ad indicare al raggiungimento di quale quantità è necessario procedere con riordino di quell'articolo;

**Giorni per il riordino**: giorni necessari per il ripristino del materiale a magazzino;

**Intervallo tempo revisione punto di riordino**: viene indicato ogni quanto tempo va rivisto e aggiornato il punto di riordino;

**Data ultimo calcolo punto di riordino**: viene indicata la data relativa all'ultima volta che è stata fatta l'analisi e in cui si è stabilito il punto di riordino indicato sopra;

Ci sono poi due sezioni chiamate:

- **Stampanti etichette**: permette di scegliere le stampanti da proporre di default per stampare le etichette dei lotti per i diversi *Stati lotto*; sarà quindi possibile scegliere tra la stampante per lo stato lotto *Unico*, *Conforme*, *Non conforme*, e *Quarantena*.

- **Tipi report etichette**,: permette di specificare i report di default da stampare per i lotti nei diversi *Stati lotto*; sarà quindi possibile scegliere dei report diversi in base allo stato del lotto *Unico*, *Conforme*, *Non conforme*, e *Quarantena*.

2. Nella seconda parte della finestra invece, si vanno ad indicare i vari magazzini in cui possiamo trovare l'articolo ed eventualmente è possibile definire alcuni dei dati sopra elencati (scorta minima/massima e giorni per la scorta, punto di riordino e giorni per il riordino, stampa etichetta unica/conforme/non conforme/quarantena) per ogni singolo magazzino. (es. la scorta minima o la scorta massima che si potrà avere di quell'articolo in quello specifico magazzino, e cosi per il resto delle informazioni).

