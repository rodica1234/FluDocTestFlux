---
title: Parametri ordini fornitori
sidebar_position: 2
---

I parametri degli ordini fornitori permettono l'impostazione di base per gestire gli Ordini fornitori correttamente e secondo le specifiche richieste da ogni singola società.   

La finestra si compone di pulsanti e tre diversi tab: *Generale*, *Carico* e *Analitica*. 

### Generale

**Gestione doppia unità misura**: solo se attivato, il sistema può gestire l'unità di misura alternativa nell'ordine fornitore.

**Proposta automatica UM alternativa:** se attivato, fa in modo che venga proposta la quantità relativa all'unità di misura alternativa, a patto che sull'anagrafica dell'articolo ne sia stata impostata una di default. È possibile attivare questo flag solo se il flag precedente è stato attivato.

**Costo zero in assenza di listini**: se attivo, in assenza di un listino valido popola il prezzo con il valore zero. Nel caso in cui questa voce non fosse spuntata, il campo sarebbe valorizzato con il costo ultimo dell'articolo, se presente.

**Blocca inserimento documento in date festive:** se attivo, il sistema non permette l'inserimento dell'ordine in date festive (sabato, domenica e festività). Se non attivo, il sistema non effettua nessun controllo e lascia inserire l'ordine.

**Proponi marca con priorità listino fornitore/ordine cliente**: non più utilizzato.

**Permetti modifica IVA:** se attivo, in caso di [Creazione automatica Ordini da Richieste di acquistopurchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) viene proposto il codice IVA dall'anagrafica del fornitore.

**Codice operatore obbligatorio**: se attivo, è necessario specificare il codice dell'operatore in testata, sotto la voce *Nazione*, altrimenti non sarà possibile salvare l'ordine. Quando il flag non è attivo questo dato è facoltativo.

**Ricerca prezzi articoli in tutti i listini predefiniti**: se attivo, il prezzo dell'articolo inserito nella riga ordine fornitore verrà ricercato in tutti i listini predefiniti dell'anagrafica fornitore, oltre al listino di default. Se non attivo, il prezzo dell'articolo verrà ricercato solo nel listino di default presente nella testata dell'ordine, ma non negli altri listini per lo stesso fornitore aventi date di validità diverse.

**Uso articolo fornitore**: se attivo, nella griglia articoli dell'ordine fornitore viene proposto anche il campo per inserire e ricercare il codice articolo fornitore. Se non attivo questo campo non sarà visibile.

**Verifica articoli in esaurimento**: se attivato, il sistema fa un controllo sulla disponibilità degli articoli in riga ordine ed avvisa qualora l'articolo fosse in esaurimento, ovvero se nell'[anagrafica dell'articoloerp-home/registers/items/create-new-items/item-registry/generality) è stato attivato il flag *In esaurimento*.

**Contabilizzazione imballi**: consente di poter contabilizzare, in contabilità generale, anche le righe con articoli di natura imballo che solitamente vengono gestiti per avere la verifica delle giacenze degli [Imballi a rendereconfigurations/tables/logistics/package-to-be-returned).

### Carico

In questo tab vengono definiti i parametri utilizzati per il [Carico ricevimento merci-reception/procedures/good-receipt-load).

**Crea registrazione con la data del documento**: se attivo, la registrazione di magazzino viene fatta con la stessa data dell'ordine e non sarà necessario specificare la data registrazione nella form di carico. Se non attivo, sarà necessario specificare la data nella form di carico.

**Priorità magazzino e causale di carico**: se attivo, fa in modo che il carico di magazzino venga effettuato utilizzando il **Magazzino** e la **Causale** definiti in questo tab. Se invece il flag non è settato utilizza il magazzino e la causale definita nelle righe del ricevimento merci, se presenti, altrimenti vengono considerati i parametri impostati nella procedura di carico ricevimento merci.

### Analitica

In questo tab si specifica con che priorità recuperare il centro di costo (CdC) o centro di profitto (CdP) nella riga documento.

È possibile modificare le priorità utilizzando i seguenti pulsanti nella ribbon bar:

> **Sposta su**       
> **Sposta giù**.

*Valori di default*: il CDC o CDP viene recuperato dal tipo fatturato qualora presente. Per approfondimenti fare riferimento a tabella [Tipo Fatturato Acquisticonfigurations/tables/purchase/purchase-invoices-type). Qualora non fosse presente nel tipo fatturato il sistema lo cercherà in *Anagrafica fornitore*. Se non presente verrà cercato in *Anagrafica articolo* e successivamente a livello di *Magazzino*.

**Ricalcolo**: se attivo, questo flag, ricalcola i centri di costo/profitto secondo la priorità scelta.

**Centro di costo/ricavo obbligatori**: se attivo, questo flag, rende obbligatoria l'imputazione dei centri di costo/profitto.

**Valuta la priorità su ogni dimensione**: se attivo, questo flag permette di valutare ogni priorità inserita nella parte superiore per capire se ci sono ulteriori dimensioni non ancora valorizzate. Ad esempio, supponiamo di avere nell'Anagrafica articolo il centro di costo della dimensione *Business unit* e nel Tipo fatturato acquisti la dimensione *Direzionale*. Se il flag non è attivo il sistema valuta solo il CdC presente nell'Anagrafica articolo; se il flag è attivo, dopo aver caricato il CdC presente nell'Anagrafica articolo il sistema valuta anche la dimensione presente nel Tipo fatturato acquisti (nel nostro esempio la dimensione *Direzionale*) e se è diversa da quelle che ha già gestito (*Business Unit*) carica il centro e prosegue con la verifica delle altre priorità.