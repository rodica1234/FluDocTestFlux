---
title: Introduzione
sidebar_position: 1
---

Il modulo si trova nell'area **Acquisti > Fatture di acquisto**.   

Le fatture di acquisto sono documenti fiscali emessi dai fornitori a fronte della fornitura di beni o servizi all'azienda e rappresentano la base per la registrazione contabile e il pagamento dei fornitori. Queste fatture contengono informazioni come i dettagli del fornitore, la descrizione dei beni o servizi acquistati, le quantità, i prezzi, le condizioni di pagamento e gli eventuali riferimenti a ordini di acquisto o DDT.

### **Flusso operativo**

Le fatture di acquisto possono essere inserite manualmente o generate automaticamente evadendo documenti esistenti, come:

- **Ordini di acquisto**: la fattura può essere generata automaticamente dall'evasione di uno o più ordini di acquisto, cliccando il pulsante [Evasione da ordinepurchase/purchase-invoices/insert-purchase-invoice/header-procedures/execution-from-purchase-order) dall'interno di una nuova fattura.   
- **DDT di acquisto**: l'evasione da DDT può essere effettuata sia dall'interno della fattura, mediante il pulsante *Evasione DDT*, sia dalla procedura di [valorizzazione DDT di Acquistopurchase/purchase-invoices/procedures/purchase-delivery-note-valorization) da cui è possibile effettuare anche un ripristino delle operazioni. 
- **Rientro di conto lavoro**: la procedura di *Valorizzazione DDT di rientro* consente di generare la fattura evadendo uno o più rientri di conto lavoro.   
- **Ricevimento merce**: la fattura può essere creata anche da un *Ricevimento merci* attraverso la [Creazione fatture da Ricevimento mercipurchase/purchase-invoices/procedures/create-purchase-invoices-from-goods-receipt).    

La gestione delle fatture è strettamente integrata con il magazzino e i DDT, consentendo di caricare automaticamente gli articoli e di generare fatture raggruppando uno o più DDT a seconda delle esigenze. La contabilizzazione automatica delle fatture permette poi di aggiornare i registri contabili e finanziari e garantendo la coerenza con il bilancio aziendale. 


### **Funzionalità principali**

- Gestione di più tipi di fatture e numerazioni: Fluentis consente di classificare e filtrare le fatture in base alla loro natura commerciale, garantendo una gestione ottimizzata di diversi flussi di fornitura.
- Prezzi e sconti da listini: Il sistema permette di recuperare automaticamente prezzi e sconti dai listini fornitore riducendo gli errori e accelerando il processo di fatturazione.
- Inserimento di spese e note: Le fatture possono includere spese o sconti legati ai beni scaricati dal magazzino, e ogni articolo può avere note specifiche per una maggiore personalizzazione della fattura.
- Articoli non codificati e varianti: È possibile inserire in fattura articoli non presenti a sistema, inserendo solo una descrizione, così come gestire varianti di articoli con attributi aggiuntivi.
- Visualizzazione e modifica delle scadenze: Nel riepilogo della fattura è possibile visualizzare i dettagli di pagamento e scadenza, con opzioni per modificarli, ricalcolarli o raggrupparli in modo flessibile.
- Gestione lotti e magazzino: i codici lotti e serial number possono essere codificati automaticamente o manualmente. 
- Stampa personalizzabile: Fluentis consente la stampa delle fatture, con layout personalizzabili, includendo tutti i dettagli commerciali e contabili richiesti.

### **Impostazioni**

Prima di utilizzare il modulo, è necessario compilare i seguenti parametri e tabelle: 
> - [Numerazioniconfigurations/tables/fluentis-numerations)    
> - [Fatturato acquisticonfigurations/tables/purchase/purchase-turnover/)
> - [Tipi fatture acquistoconfigurations/tables/purchase/purchase-invoices-type)
> - [Parametri fatture di acquistoconfigurations/parameters/purchase/purchase-invoices-parameters)
> - [Parametri di raggruppamento fatture di acquistoconfigurations/parameters/purchase/invoice-grouping/)
