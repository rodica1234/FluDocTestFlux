---
title: Tipi ricevimento merci
sidebar_position: 4
---

La tabella si apre tramite il percorso **Tabelle > Acquisti > Tipi Ricevimento merci** ed è utilizzato per determinare le proprietà di un ricevimento merce.

I campi presenti sono:

**Codice**: codice del tipo ricevimento merci.

**Descrizione**: descrizione del tipo ricevimento merci.

**Bolla di consegna**: se attivo, il sistema permette la generazione di una DDT dal ricevimento merci. Se non attivo, non sarà possibile generare la DDT dal ricevimento merci quindi le operazioni di carico a magazzino e registrazione DDT rimarranno non collegate. 

**Fattura**: se attivo, il sistema permette la generazione di una fattura dal ricevimento merci. Se non attivo, non sarà possibile generare la fattura dal ricevimento merci quindi l'operazione di carico a magazzino resterà non collegata. 

**Evasione quantità articolo non sommata**: se settato, nel momento in cui si andranno ad evadere righe ordine con quantità parziali nello stesso ricevimento merci questo flag consentirà di riportare le quantità evase dell'ordine suddivise per riga articolo senza sommare le quantità.

**Numerazione**: determina la [Numerazioneconfigurations/tables/fluentis-numerations) e la relativa **Descrizione** che è associata al *Tipo ricevimento merci*. 

**Controllo qualità**: i *tipi Ricevimento* che hanno questo flag attivo sono visibili nella form [Importa articoli da controllarequality/item-control/items-control/item-control-import/) posta nell'area *Qualità*.

**Gerstione cespiti**: questo flag permette di abilitare la [Gestione cespiti/fixed-assets/general-overview) per quel tipo ricevimento e di selezionare il **Tipo operazione** che si vuole effettuare, che nel caso degli acquisti sarà un *Costo originario*.
