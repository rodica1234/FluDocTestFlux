---
title: Parametri richieste di acquisto
sidebar_position: 5
---

I parametri delle richieste di acquisto permettono l'impostazione di base per gestire correttamente e secondo le specifiche richieste da ogni singola società.

*Pulsanti*:

> **Salva**: permette di salvare i parametri impostati.  
> **Ripristina**: permette di ripristinare i parametri ai valori iniziali.

### Generale

**Costo zero in assenza di listini**: il prezzo è ricercato nei listini; se non viene trovato ed è attivo questo flag nella riga di richiesta viene messo prezzo 0. Se non è attivo e non è attivo neanche l'altro parametro e non trova il prezzo in listino, cerca il costo ultimo in anagrafica articolo e se non lo trova mette 0.

**Costo ultimo in assenza di listini**: quando è attivo, se non trova il prezzo nel listino e non trova il costo ultimo in anagrafica articoli prende il massimo tra i prezzi presenti nelle richieste di acquisto dello stesso fornitore e articolo.

**Esplodi distinta base**: se attivo, all'inserimento di un articolo verrà sostituito dal primo livello della sua distinta base, se esiste. Quindi invece dell'articolo “prodotto finito” l'ordine sarà popolato con la distinta base dell'articolo inserito.

### Analitica

In questo tab si specifica con che priorità recuperare il centro di costo (CdC) o centro di profitto (CdP) nella riga documento.

È possibile modificare le priorità utilizzando i pulsanti:

> **Sposta su** e **Sposta giù**

*Valori di default*: il CDC o CDP viene recuperato dal tipo fatturato qualora presente. Per approfondimenti fare riferimento a tabella [Tipo Fatturato Acquisticonfigurations/tables/purchase/purchase-invoices-type). Qualora non fosse presente nel tipo fatturato il sistema lo cercherà in *Anagrafica fornitore*. Se non presente verrà cercato in *Anagrafica articolo*