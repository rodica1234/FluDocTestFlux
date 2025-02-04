---
title: Tipi ordine fornitore
sidebar_position: 3
---

Questa tabella è fondamentale per definire le varie tipologie di ordini fornitori disponibili, ognuna con le proprie caratteristiche. E' raggiungibile da *Configurazione > Tabelle > Acquisti > Tipi ordine fornitore*.   

I campi presenti sono:    

**Codice/Descrizione**: campi obbligatori per definire il tipo e la descrizione dell'ordine di acquisto.

**Numerazione\Descrizione**: campo obbligatorio per la [Numerazioneconfigurations/tables/fluentis-numerations) da associare al tipo ordine.

**Conferma ordine automatica**: se settato, al momento della creazione di un ordine con questo *Tipo ordine* viene compilato anche il campo *Data conferma ordine* presente nella testata dell'ordine, con la data odierna.

**Cash Flow**: se settato, il tipo ordine concorre al calcolo del cash flow.

**Magazzino/Descrizione magazzino**: è il magazzino di arrivo della merce che viene settato in automatico sulle righe articolo degli ordini creati con questo tipo ordine.

**Causale/Descrizione causale**: è la [Causaleconfigurations/tables/logistics/warehouse-templates) di movimentazione della merce in arrivo che viene settata in automatico sulle righe articolo degli ordini creati con questo tipo.

**Controlla disponibilità**: se settato, gli ordini di questo tipo concorrono al calcolo della disponibilità e sono visibili nella form di [Analisi disponibilitàerp-home/registers/items/availability-analysis).

**Agricola acquisti IVA**: se attivo, in fase di creazione ordine, il sistema controlla se per l'articolo utilizzato è presente un codice dell'IVA agricola, se non esiste viene preso il codice IVA normale.

**Gestione matrici extra data**: se attivo, permette di visualizzare, nel caso di gestione articoli con matrice, un tab aggiuntivo per l'imputazione dei valori della quantità per singola cella di matrice.

**Listini da aggiornare**: serve per far aggiornare in automatico i prezzi di listino in base ai prezzi specificati in ordine. Se tale flag non è selezionato, sarà comunque possibile, sulle righe dell'ordine, far aggiornare manualmente il valore del listino in  base al prezzo indicato sulla riga.

**Tipo bolla consegna**: è la tipologia di DDT di acquisto da creare quando si utilizza la procedura di [Evasione da ordinipurchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).

**Stampa**: in questo campo è possibile scegliere la stampa da utilizzare di default (si ricorda che, per stampare il report di default, in fase di stampa sarà necessario selezionare l'opzione *Stampe multiple*); nel campo successivo è possibile indicare un **Numero di copie** da stampare.    

**Controllo fornitore**: serve ad attivare un controllo per il quale, in fase di selezione del soggetto intestatario dell'ordine, la procedura ci permetterà di selezionare solo conti di tipo fornitore e non di tipo cliente.      

**Gestione cespiti**: questo flag permette di abilitare la [Gestione cespiti/fixed-assets/general-overview) per quel tipo ordine e di selezionare il **Tipo operazione** che si vuole effettuare.