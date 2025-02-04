---
title: Tipi tasso
sidebar_position: 28
---

La definizione di questa tabella consente di codificare e impostare le varie tipologie di tipi tasso da gestire nella società attiva.

 

Nella **Griglia superiore** sono presenti i seguenti campi:

**Codice**: codice identificativo del tasso d'interesse.

**Descrizione**: descrizione del tasso d'interesse.

**Da data documento**: data documento a partire dalla quale va gestito il calcolo interessi (il rif. è al DECRETO LEGISLATIVO 9 ottobre 2002, n. 231). Lo scopo del campo è quello di impedire che siano calcolati interessi su documenti aventi data anteriore a quella di emanazione della legge.

**Da data scadenza**: data scadenza a partire dalla quale va gestito il calcolo interessi (il rif. è al DECRETO LEGISLATIVO 9 ottobre 2002, n. 231). Lo scopo del campo è quello di impedire che siano calcolati interessi su documenti aventi scadenza anteriore a quella di emanazione della legge.

**Interesse min.**: importo minimo degli interessi al di sotto del quale non valorizzare alcun importo.

**Giorni franchigia**: numero di giorni di franchigia che saranno detratti dal conteggio dei giorni di ritardo.

**Calcolo anche sconto**: flag di gestione anche in sconto in caso di pagamento anticipato. 

:::tip nota
ESEMPIO: in caso di pagamento anticipato da parte del cliente e successivo ritardo di pagamento, se l'importo dell'interesse calcolato sul ritardo è superiore al valore impostato nel campo Interesse min. , al valore dell'interesse calcolato sarà detratto il valore (negativo) calcolato in base ai giorni che intercorrono tra la data pagamento e la data scadenza. In ogni caso il risultato del calcolo non potrà mai essere un interesse negativo.
:::

Nella **Griglia inferiore** sono presente i seguenti campi:

**Codice**: codice identificativo del tasso.

**Da data**: data a partire dalla quale va gestito il tasso indicato nella riga.

**A data**: data fino alla quale sarà gestito il tasso indicato nella riga

**Percentuale**: percentuale di tasso d'interesse applicabile.

I campi relativi alle date di validità riferiti alla percentuale permettono di definire l'andamento della politica del tasso di interesse che, come noto, è soggetta a periodiche revisioni relative al tasso legale.

 

![](/img/it-it/configurations/tables/finance/rate-types/image01.png)

 

RIBBON BAR: per quanto riguarda le funzionalità comuni a tutte le form si rimanda all'articolo ** [Pulsanti comuniguide/common/common-buttons) ;**

Si rimanda inoltre agli articoli generali realtivi all' [**Inserimento dati**guide/common/operations-with-data/manual-entry-or-help-and-data-selection)  e all' [**Anteprima e Stampa**guide/common/operations-with-data/reports).






