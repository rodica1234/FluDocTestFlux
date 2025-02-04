---
title: Valorizzazione DDT di acquisto e di rientro
sidebar_position: 5
---

La procedura si apre tramite il percorso **Acquisti > Fatture di acquisto > Procedure > Valorizzazione DDT di acquisto e di rientro**. 

Essa permette di eseguire/ripristinare la creazione di fatture di acquisto partendo sia da DDT di acquisto, sia da DDT di rientro.

### Valorizzazione

In questo tab, l'utente ha la possibilità di inserire filtri per cercare i DDT di acquisto e di rientro da valorizzare. È possibile filtrare per: fornitore, tipo bolla di acquisto, tipo rientro, numero, data, articolo e progetto.

A differenza delle due procedure analoghe [Valorizzazione DDT di acquistopurchase/purchase-invoices/procedures/purchase-delivery-note-valorization) e [Valorizzazione DDT di Rientropurchase/purchase-invoices/procedures/return-delivery-notes-valorization), in questa form viene visualizzata una riga per ciascuna riga articolo contenuta nel documento. Di conseguenza è possibile valorizzare anche una sola riga articolo.

- **Numero e data fattura**: permette di specificare il numero e la data della fattura che sarà creata. 

*Pulsanti specifici*: 

> **Valorizzazione**: permette di valorizzare i DDT selezionati nella griglia, in base ai parametri inseriti nel successivo tab *Parametri*.   
> **Mostra solo documenti**: questo pulsante attiva o disattiva il flag omonimo posto nella sezione di filtro, permettendo di scegliere se visualizzare una riga per ogni articolo contenuto nei documenti oppure solo la testata del documento.

### Parametri

#### Parametri DDT di Acquisto 

*Inserimento in fattura*

- **Ricalcola CdC/CdR**: utilizzato nella contabilità analitica, serve per ricalcolare i centri di costo o di ricavo.  
- **Ordina DDT per numero documento fornitore**: se settato permette di inserire i DDT all’interno delle fatture riepilogative ordinandoli per *numero documento fornitore* invece del *numero interno*.  
- **Tipo fattura acquisto**: indica il tipo di fattura da creare.

*Riferimenti DDT*

- **Metti riferimenti DDT**: se questo flag è impostato, nel tab [Articolipurchase/purchase-invoices/insert-purchase-invoice/items) della fattura verrà visualizzato un *Articolo nota* che riprenderà i riferimenti del DDT dal quale è stata creata la fattura. Il contenuto di questa nota deve essere inserito nel campo *Descrizione*, secondo i parametri descritti nella label. 
    
    *Esempio*: ![](/img/it-it/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization/image06.png). Se il DDT ha il numero 5 e la data 11.09.2024, l'articolo nota nella fattura sarà: 'DDT riferimento no 5 del 11.09.2024'.

#### Parametri di Rientro da Conto Lavoro 

*Tipo fattura*

- **Tipo fattura**: indica il tipo di fattura da creare.
- **Ordina DDT per numero documento fornitore**: se settato permette di inserire i rientri all’interno delle fatture riepilogative ordinandoli per *numero documento*. In alternativa i rientri saranno ordinati per data documento.  

*Riferimenti rientro*

- **Metti riferimenti rientri**: se questo flag è impostato, nel tab [Articolipurchase/purchase-invoices/insert-purchase-invoice/items) della fattura verrà visualizzato un *Articolo nota* che riprenderà i riferimenti del rientro dal quale è stata creata la fattura. Il contenuto di questa nota deve essere inserito nel campo *Descrizione*, secondo i parametri descritti nella label. 


:::tip Ricorda
Per la fatturazione riepilogativa è necessario impostare nei [Parametri raggruppamento fattureconfigurations/parameters/purchase/invoice-grouping/) le condizioni di raggruppamento da utilizzare. 
:::

*Pulsanti specifici*: 

> **Salva parametri DDT**: permette di salvare i parametri impostati per la valorizzazione dei DDT di acquisto.   
> **Salva parametri rientri**: permette di salvare i parametri impostati per la valorizzazione dei rientri di conto lavoro.

Dopo aver selezionato i DDT (dal tab *Valorizzazione*) e impostato i parametri, la fattura può essere creata con l'aiuto del pulsante *Valorizzazione*.

### Precedenti

L'ultimo tab è quello di ripristino: è possibile utilizzarlo per filtrare, visualizzare e annullare le operazioni.

Nella griglia superiore vengono visualizzate tutte le fatture create. Selezionandone una è possibile vedere nelle griglie inferiori il **Nome operatore** e la data della valorizzazione, il **DDT di Acquisto** o il **Rientro di conto lavoro** da cui è stata generata la fattura, con l'elenco degli articoli valorizzati. C'è inoltre la possibilità di aprire il DDT, il rientro o la fattura generata con doppio click sulla riga desiderata.

*Pulsanti specifici*:
> **Ricerca valorizzazioni**: per cercare le fatture create e i DDT valorizzati in base ai filtri impostati. Il risultato di questa procedura viene visualizzato nella griglia di risultato.  
> **Rirpistino fatture**: per cancellare la fattura selezionata nella griglia inferiore.  