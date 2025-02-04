---
title: Valorizzazione DDT di acquisto
sidebar_position: 3
---

La procedura si apre tramite il percorso **Acquisti > Fatture di acquisto > Procedure > Valorizzazione DDT di acquisto**. 

Essa permette di eseguire/ripristinare la creazione della fattura di acquisto da uno o più DDT di acquisto.

### Valorizzazione

In questo tab, l'utente ha la possibilità di inserire filtri per cercare i DDT di acquisto da valorizzare. È possibile filtrare per: fornitore, tipo bolla di acquisto, numero, data, articolo e progetto.

- **Data creazione**: permette di specificare la data della fattura che sarà creata. 

*Pulsante specifico*: 

> **Valorizzazione DDT di acquisto**: permette di valorizzare i DDT selezionati nella griglia, in base ai parametri inseriti nel successivo tab *Parametri*.

### Parametri

*Inserimento in fattura*

- **Ricalcola CdC/CdR**: utilizzato nella contabilità analitica, serve per ricalcolare i centri di costo o di ricavo.  

- **Ordina DDT per numero documento fornitore**: se settato permette di inserire i DDT all’interno delle fatture riepilogative ordinandoli per *numero documento fornitore* invece del *numero interno*.  

- **Tipo fattura acquisto**: indica il tipo di fattura da creare.

*Riferimenti DDT*

- **Metti riferimenti DDT**: se questo flag è impostato, nel tab [Articolipurchase/purchase-invoices/insert-purchase-invoice/items) della fattura verrà visualizzato un *Articolo nota* che riprenderà i riferimenti del DDT dal quale è stata creata la fattura. Il contenuto di questa nota deve essere inserito nel campo *Descrizione*, secondo i parametri descritti nella label. 

    *Esempio*: ![](/img/it-it/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization/image06.png). Se il DDT ha il numero 5 e la data 11.09.2024, l'articolo nota nella fattura sarà: 'DDT riferimento no 5 del 11.09.2024'.

:::tip Ricorda
Per la fatturazione riepilogativa è necessario impostare nei [Parametri raggruppamento fattureconfigurations/parameters/purchase/invoice-grouping/) le condizioni di raggruppamento da utilizzare. 
:::

*Pulsante specifico*: 

> **Salva parametri valorizzazione**: permette di salvare i parametri impostati per la valorizzazione.

Dopo aver selezionato i DDT (dal tab *Valorizzazione*) e impostato i parametri, la fattura può essere creata con l'aiuto del pulsante *Valorizzazione DDT di acquisto*.

### Precedenti

L'ultimo tab è quello di ripristino: è possibile utilizzarlo per filtrare, visualizzare e annullare le operazioni.

I dati nelle griglie in basso, **Fatture** e **DDT**, corrispondono alla valorizzazione selezionata nella griglia superiore (dopo aver filtrato i dati). Inoltre, in queste ultime due griglie, c'è la possibilità di visualizzare la fattura e il DDT corrispondente con doppio click sulla riga desiderata.

*Pulsanti specifici*:
> **Ricerca valorizzazione DDT**: per cercare le fatture create e i DDT valorizzati in base ai filtri impostati. Il risultato di questa procedura viene visualizzato nella griglia di risultato.  
> **Rirpistino fatture**: per cancellare la fattura selezionata nella griglia inferiore.  
> **Ripristino valorizzazione**: per cancellare l'intera operazione selezionata, con tutti i suoi dettagli visualizzati nelle due griglie sottostanti.