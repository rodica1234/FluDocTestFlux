---
title: Valorizzazione DDT di rientro
sidebar_position: 4
---

La procedura si apre tramite il percorso **Acquisti > Fatture di acquisto > Procedure > Valorizzazione DDT di rientro**. 

La procedura permette di creare le fatture dai DDT di rientro.

### Filtro rientri

In questo tab, l'utente ha la possibilità di inserire filtri per cercare i DDT di rientro da valorizzare. È possibile filtrare per: fornitore, tipo rientro, numero documento, data, articolo e progetto.

- **Numero e data fattura**: permette di specificare il numero e la data della fattura che sarà creata. 

- **Totale**: permette di vedere il totale importo dei rientri selezionati per la valorizzazione.

*Pulsante specifico*:
 
> **Valorizzazione rientri di conto lavoro**: permette di valorizzare i rientri selezionati nella griglia, in base ai parametri inseriti nel successivo tab *Parametri*.


### Parametri

*Tipo fattura*

- **Tipo fattura**: indica il tipo di fattura da creare.

- **Ordina DDT per numero documento fornitore**: se settato permette di inserire i rientri all’interno delle fatture riepilogative ordinandoli per *numero documento*. In alternativa i rientri saranno ordinati per data documento.  

*Riferimenti rientro*

- **Metti riferimenti rientri**: se questo flag è impostato, nel tab [Articolipurchase/purchase-invoices/insert-purchase-invoice/items) della fattura verrà visualizzato un *Articolo nota* che riprenderà i riferimenti del rientro dal quale è stata creata la fattura. Il contenuto di questa nota deve essere inserito nel campo *Descrizione*, secondo i parametri descritti nella label. 

:::tip Ricorda
Per la fatturazione riepilogativa è necessario impostare nei [Parametri raggruppamento fattureconfigurations/parameters/purchase/invoice-grouping/) le condizioni di raggruppamento da utilizzare. 
:::

*Pulsante specifico*: 

> **Salva parametri valorizzazione**: permette di salvare i parametri impostati per la valorizzazione.

Dopo aver selezionato i DDT di rientro (dal tab *Filtro rientri*) e impostato i parametri, la fattura può essere creata con l'aiuto del pulsante *Valorizzazione rientri di conto lavoro*.

### Precedenti

L'ultimo tab è quello di ripristino: è possibile utilizzarlo per filtrare, visualizzare e annullare le operazioni.

I dati nelle griglie in basso, **Fatture** e **Rientri**, corrispondono alla valorizzazione selezionata nella griglia superiore (dopo aver filtrato i dati). Inoltre, in queste ultime due griglie, c'è la possibilità di visualizzare la fattura e il rientro corrispondente mediante un doppio click sulla riga.

*Pulsanti specifici*:
> **Ricerca valorizzazione rientri**: per cercare le fatture create e i rientri valorizzati. Il risultato di questa procedura viene visualizzato nella griglia di risultato.    
> **Ripristino valorizzazione**: per cancellare l'intera operazione selezionata, con tutti i suoi dettagli visualizzati nelle due griglie sottostanti.

