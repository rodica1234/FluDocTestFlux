---
title: Tipi fatture di acquisto
sidebar_position: 6
---

Questa tabella è fondamentale per definire le varie tipologie di fatture di acquisto disponibili, ognuna con le proprie caratteristiche. E' raggiungibile da *Configurazione > Tabelle > Acquisti > Tipi fatture di acquisto*.    

I campi presenti sono:

**Codice/Descrizione**: sono campi obbligatori necessari per definire il tipo fattura.

**Numerazione/Descrizione**: determina la [Numerazioneconfigurations/tables/fluentis-numerations) che è associata al tipo fattura.

**Natura fattura**: questo valore deve essere selezionato da un elenco e indica la natura della fattura: fattura, ricevuta fiscale, ricevuta fiscale riepilogativa, nota accredito da fornitore, nota addebito da fornitore.

**Causale/Descrizione causale**: [causale contabileconfigurations/tables/finance/ledger-records-templates/search-ledger-records-templates) utilizzata per contabilizzare la fattura. Verrà utilizzata questa causale qualora non ci fosse un fatturato acquisti oppure un conto di contropartita di default inserito in anagrafica fornitore.

**Tran. codice**: serve per indicare il codice di raggruppamento dei documenti per la dichiarazione Intrastat e deve essere compilato nei casi di fatture o documenti di variazione CEE.

**Magazzino/Descrizione** e **Causale magazzino/Descrizione**: sono proposti nell'inserimento delle righe della fattura accompagnatoria, dove possono essere poi variati e determinano il magazzino e la causale con cui verrà caricata la merce al momento del ricevimento.

**Da ordine**: se attivo, la fattura con questo tipo può evadere ordini fornitori.

**Fattura immediata**: se attivo, la fattura con questo tipo è di tipo immediato e dovranno essere compilati, nella fattura, anche i dati per il trasporto.

**Intracomunitaria**: se attivo, il sistema verifica che la nazione del cliente sia una nazione CEE. Questo flag andrà impostato solo su tipi fattura Intracomunitari. Qualora non ci fosse il link tra cliente e tipo fattura intracomunitaria, il sistema ritornerà un messaggio di avviso.

**In statistica**: se attivo, la fattura con questo tipo viene riportata nelle statistiche quindi sarà visibile nelle stampe *Fatturato*.

**Controllo fornitore**: serve ad attivare un controllo per il quale, in fase di selezione del soggetto intestatario della fattura, la procedura ci permetterà di selezionare solo conti di tipo fornitore e non di tipo cliente.

**Raggruppamenti partite**: se settato, in fase di contabilizzazione della fattura le partite verranno raggruppate e si utilizzerà quindi la modalità raggruppamento partite.

**Evasione quantità articolo non sommata**: se settato, nel momento in cui si andranno ad evadere righe ordine/DDT con quantità parziali all'interno della stessa fattura, questo flag consentirà di riportare le quantità evase suddivise per riga articolo senza sommare le quantità.

**Agricola acquisti IVA**: se attivo, in fase di creazione fattura, il sistema controlla se per l'articolo utilizzato è presente un codice dell'IVA agricola. Se non esiste viene preso il codice IVA presente nell'articolo.

**Causale competenza economica**: è legata alla gestione delle fatture da ricevere e quindi alla possibilità di rilevare automaticamente i risconti per eventuali righe di costo che avessero un range di date competenza al di fuori dell'esercizio contabile.

**Gestione matrici extra data**: se attivo, permette di visualizzare nel caso di gestione articoli con matrice, un tab aggiuntivo per l'imputazione dei valori della quantità per singola cella di matrice. Se non attivo, non viene visualizzato questo Tab e la conseguente matrice.

**Fatture da ricevere** e **Storno fatture da ricevere**: sono visualizzate solo per retro compatibilità con le versioni precedenti e sono ormai obsolete e non più utilizzate.

**Stampa**: permette di indicare il modello di stampa che verrà utilizzato in fase di stampa della fattura e, mediante il campo **Numero copie**, il numero di copie del documento che sarà proposto di default per la stampa. La stampa delle fatture d'acquisto in realtà non è di esteso utilizzo in quanto la fattura viene ricevuta dal fornitore e quindi non necessita di essere ulteriormente stampata da Fluentis.

**Gestione Conai**: questo flag permette di attivare la gestione Conai per ciascun di tipo fattura. Per maggiori dettagli sulla gestione delle spese relative al [Conai-flow/conai) si rimanda all'apposita pagina della documentazione.

**Controllo qualità**: se attivo, questo flag rende visibili i tipi fattura nella form [Importa articoli da controllarequality/item-control/items-control/item-control-import/) posta nell'area *Qualità*.

**Gestione cespiti**: questo flag permette di abilitare la [Gestione cespiti/fixed-assets/general-overview) per quel tipo ordine e di selezionare il **Tipo operazione**, che nel caso degli acquisti sarà sempre un *Costo originario*.    