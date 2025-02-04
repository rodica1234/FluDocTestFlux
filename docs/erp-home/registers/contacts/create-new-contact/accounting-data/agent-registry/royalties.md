---
title: Gestione Royalties
sidebar_position: 9
---

La gestione delle royalties è simile a quella delle provvigioni agenti, della quale condivide in parte le impostazioni.

### Configurazione anagrafica articoli

Le anagrafiche degli articoli che sono soggetti a diritti d’autore/royalties devono avere il relativo flag (*Diritti d'autore*) nella scheda **Generalità**

All’inserimento dell' articolo contrassegnato nei documenti di vendita, solo per gli articoli che hanno questo flag Fluentis procederà ad identificare il relativo designer (agente) che detiene i diritti d’autore sullo stesso.

### Configurazione anagrafica agente

La configurazione del soggetto che detiene i diritti d’autore sui vari articoli si effettua tramite la definizione di una anagrafica di tipo agente. 

Normalmente questi soggetti non sono soggetti a ritenuta d'acconto né a contribuzione Enasarco, pertanto sarà necessario creare una [**Categoria agenti**configurations/tables/sales/agent-category/) e un [**Tipo ritenuta**configurations/tables/finance/withholding-tax-types/) specifici che non prevedano né contribuzione né percentuali di ritenute.

Nella scheda **Liquidazione**  indicheremo il tipo ritenuta (da creare eventualmente o selezionare, come detto sopra, un tipo con percentuale zero) e poi il criterio di maturazione della provvigione come avviene per l'agente.


:::tip ATTENZIONE
La specificità dell’impostazione si trova all’interno della scheda **Provv. dirette**, dove andremo a codificare il tipo di provvigione **23 – Royalties**
:::

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/tipo23.png)

Entrando poi nei dettagli di questa tipologia (tramite il bottone **Dettaglio percentuali selezionate**), sarà possibile seguire due strade differenti:

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/dettaglio.png)

- Inserire la lista dettagliata degli articoli sottoposti a diritti d’autore (Fluentis non consentirà di inserire articoli che non abbiano questo flag inserito) 

- oppure la linea prodotto che contiene gli articoli sottoposti a royalties, nell’ipotesi che la linea prodotto identifichi il design (o l'elemento) soggetto a diritto: **saranno comunque solo gli articoli che hanno il flag royalties ad essere soggetti alla relativa percentuale**, non è sufficiente che siano legati alla linea impostata in anagrafica agente.

:::danger ATTENZIONE
Non sarà consentito inserire nell’agente X un articolo (o una linea) se lo stesso articolo è gestito in altra anagrafica agente (come articolo o come linea di appartenenza): non è consentito, infatti, che sullo stesso articolo maturino royalties più designer.
:::

### Logica di utilizzo

Eseguite le impostazioni in anagrafica articoli e nell’agente, la logica di funzionamento è la seguente: all’inserimento di un articolo nei documenti di vendita, Fluentis verificherà se è soggetto a royalties o meno, nel primo caso andrà a ricercare qual è l’agente che ha le impostazioni (specifiche o per la linea articolo relativa) provvigionali nei dettagli del tipo ’23 - Royalties’ e aggiungerà la conseguente riga provvigionale nel documento.

La logica a valle di questa valorizzazione sarà la stessa di un agente qualsiasi, con le stampe riepilogative agenti e i calcoli delle liquidazioni a maturazione. 

:::tip Nota
La differenza sostanziale tra un agente e un titolare di diritti d’autore, è che per il secondo non è necessario il suo inserimento in ogni anagrafica cliente per far si che Fluentis identifichi la sua percentuale da applicare alla vendita, cosa invece obbligatoria per gli agenti ordinari.
:::

