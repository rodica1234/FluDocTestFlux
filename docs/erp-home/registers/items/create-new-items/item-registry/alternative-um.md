---
title: U.M alternativa
sidebar_position: 20.1
---

:::important A cosa serve
Il tab Unità di Misura Alternative nell'anagrafica articoli di Fluentis offre un'importante funzionalità per la gestione delle diverse unità di misura associate a ciascun articolo. In questo tab è possibile definire un'unità di misura alternativa, utile per gestire articoli che possono essere trattati in più di un'unità. Questo approccio consente di semplificare le operazioni di approvvigionamento e magazzino, poiché i vari operatori possono utilizzare un'unità di misura con cui si sentono più a loro agio o che meglio si adatta alle loro esigenze operative.     
Nel tab è presente una sezione per specificare il fattore di conversione tra l'unità di misura principale e quella alternativa, permettendo di calcolare automaticamente la quantità richiesta.     
Le opzioni disponibili comprendono impostazioni per definire se un'unità di misura è predefinita o tassativa, nonché per stabilire quali unità di misura sono prioritarie durante le operazioni di gestione delle scorte.      
Attraverso queste funzionalità, le aziende possono gestire con maggiore efficienza le scorte di magazzino e gli ordinativi, adattando le informazioni relative alle unità di misura alle specifiche necessità operative e migliorando l'interoperabilità tra differenti sistemi di gestione, come il Warehouse Management System (WMS).
:::

In questo tab viene indicata, dove fosse necessaria, l'unità di misura alternativa dell'articolo. 

L'articolo può essere gestito in entrambe le unità di misura e creando delle relazioni tra le due.

**Unità di misura** e **Descrizione**: si indicherà quindi l'unità di misura alternativa con la sua descrizione;

**Fattore di conversione**: qui si va a definire il fattore di conversione tra l'unità di misura principale e l'unità di misura alternativa; la *quantità alternativa* nei documenti viene calcolata in base al settaggio effettuato nei [Parametri iniziali di magazzinoconfigurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)

**Default**: se attivo, questo flag indica qual'è l'unità di misura di riferimento tra N alternative possibili per articolo;

**Tassativa**: se attivo, questo flag determina l'invariabilità del fattore di conversione. Quando si va a inserire l'unità di misura gestionale tramite il fattore di conversione il sistema calcoli automaticamente l'unità di misura alternativa, e viceversa. Se flag Tassativa non è attivo, quell'unità di misura alternativa si può impostare come unità di misura primaria, indipendentemente dal flag **Prioritaria**;     

**Prioritaria**: se attivo, l’aggiornamento della *quantità gestionale* non cambia la *quantità alternativa* perché quest’ultima ha la priorità, mentre nel caso in cui venga modificata la *quantità alternativa*, la *quantità gestionale* viene ricalcolata in funzione della quantità alternativa sulla base del fattore di conversione;       

**Default WMS**: se attivo, indica che questa unità di misura sarà quella utilizzata di default all'interno del WMS.

