---
title: Parametri DDT acquisto
sidebar_position: 3
---

I parametri delle DDT di acquisto permettono l'impostazione di base per poter gestire le bolle di acquisto correttamente e secondo le specifiche richieste da ogni singola società.

La finestra si compone di pulsanti e tre diversi tab: *Generale*, *Carico* e *Analitica*. 

### Generale

**Gestione doppia unità misura**: solo se questo flag è attivato, il sistema può gestire l'unità di misura alternativa nei DDT di acquisto.

**Proposta automatica UM alternativa:** se attivato, viene proposta la quantità relativa all'unità di misura alternativa, a patto che sull'anagrafica dell'articolo ne sia stata impostata una di default. È possibile attivare questo flag solo se il flag precedente è stato attivato.

**Costo zero in assenza di listini**: se attivo, in assenza di un listino valido popola il prezzo con il valore zero. Nel caso in cui questa voce non fosse spuntata, il campo sarebbe valorizzato con il costo ultimo dell'articolo, se presente.

**Permetti DDT con stesso numero e fornitore:** se attivo, permette l'inserimento di due DDT per lo stesso fornitore con lo stesso numero. È consigliato lasciare disattivato questo flag per permettere al sistema di fare il controllo di univocità.

**Lotti e S.N. (Serial Number) obbligatori:** se attivo obbliga l'utente ad inserire a livello di riga articolo il lotto ed il serial number per tutti gli articoli per cui è prevista questa gestione. Se non attivo, il lotto ed il serial number non risultano dati obbligatori e sarà possibile salvare il documento anche senza averli inseriti. Si consiglia l'accensione di questo flag qualora si utilizzi la gestione articoli con lotto.

**Ricerca prezzi articoli in tutti i listini predefiniti**: se attivo, il prezzo dell'articolo inserito nella riga ordine fornitore verrà ricercato in tutti i listini predefiniti dell'anagrafica fornitore, oltre al listino di default. Se non attivo, il prezzo dell'articolo verrà ricercato solo nel listino di default presente nella testata dell'ordine, ma non negli altri listini per lo stesso fornitore aventi date di validità diverse.

**Consentire sconti per articoli omaggio**: se attivo, permette l'inserimento di sconti sulle righe articolo di tipo omaggio.

**Uso articolo fornitore**: se attivo, nella griglia articoli del DDT viene proposto anche il campo per inserire il codice articolo fornitore.

**Verifica articoli in esaurimento**: se attivato, il sistema fa un controllo sulla disponibilità degli articoli inseriti nel DDT ed avvisa qualora l'articolo fosse in esaurimento, ovvero se nell'[anagrafica dell'articoloerp-home/registers/items/create-new-items/item-registry/generality) il flag *In esaurimento* è attivo.

**Contabilizzazione imballi**: consente di poter contabilizzare, in contabilità generale, anche le righe con articoli di natura imballo che solitamente vengono gestiti per avere la verifica delle giacenze degli [Imballi a rendereconfigurations/tables/logistics/package-to-be-returned).

**Mantieni prezzi da ordini per gli scaglioni**: è utilizzato nella procedura di evasione degli ordini in DDT nel caso in cui la quantità evasa sia diversa (solitamente parziale) rispetto alla quantità ordinata per la quale è stato inserito un prezzo o uno sconto a scaglione di quantità. Se il prezzo o lo sconto non dipendono dalla quantità consegnata ma solo dalla quantità in ordine questo flag deve essere attivato, se invece il prezzo o sconto a scaglione non deve essere inserito nel documento di consegna nel caso l'evasione non avvenga per la quantità totale dell'ordine il flag non deve essere attivato.

**Attiva il Controllo Qualità**: work in progress.

**Ricalcola trasporto**: se attivo, calcola il peso e volume dai valori di anagrafica articoli sul documento, impostando il valore del trasporto in automatico. Se non attivo, il costo del trasporto del DDT dovrà essere calcolato manualmente poiché non verrà proposto.

**Def U.M. volume:** indica l'unità di misura di default per il volume quando si calcola il trasporto del DDT.

**Def. U.M. pesi:** indica l'unità di misura di default per il peso quando si calcola il trasporto del DDT.

### Carico

**Crea registrazione con la data del documento**: se attivo, la registrazione di magazzino viene fatta con la stessa data del DDT. Se non attivo, la registrazione viene effettuata con la *Data carico* indicata nella testata del DDT, se presente, altrimenti con la *Data registrazione magazzino* indicata nella procedura di [Registrazione DDT di acquisto in magazzinopurchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse). Se la registrazione viene effettuata dall'interno del DDT mediante il pulsante *Carico automatico nel magazzino* e la *Data carico* non è inserita sarà usata la data odierna.

**Priorità magazzino e causale di carico**: se attivo, al momento della registrazione del DDT a magazzino vengono usati i valori impostati nei campi sottostanti: **Magazzino** e **Causale magazzino**. Se il flag non è attivo, il magazzino e la causale di carico vengono letti dalle righe del DDT. Qualora non fossero presenti sulle righe del DDT non sarà possibile effettuare il Carico automatico dall'interno della bolla di acquisto, ma si potrà effettuare la registrazione del DDT mediante appostita procedura (vedi [Registrazione DDT di acquisto in magazzinopurchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse)) selezionando nel tab *Parametri* il flag "*Accettare come magazzino e causale i seguenti dati:*" e indicando *Magazzino* e *Causale* da utilizzare. 

**Carico/Scarico automatico**: se attivo, al momento dell'attivazione del flag *Controllata* in testata del documento si riceverà un messaggio che ricorda che il parametro di carico/scarico automatico è attivo e chiede se si desidera procedere. Premendo "*Sì*" il DDT verrà caricato a magazzino, altrimenti sarà possibile caricarlo successivamente premendo il pulsante *Carico automatico nel magazzino* posto nella ribbon bar. 

**Avviso articoli fittizi**: se attivo, durante il carico del DDT viene controllato se sono presenti degli articoli fittizi. Se sono presenti viene dato un messaggio per il completamento della procedura; se la risposta è affermativa tutto il DDT verrà caricato (ad eccezione degli articoli fittizi ovviamente). Rispondendo di no, il DDT non verrà caricato. L'articolo fittizio può essere senza distinta base di primo livello se nei parametri MRP è dichiarato con tipo approvvigionamento di acquisto altrimenti la registrazione di carico darà un messaggio di errore nel caso ci siano degli articoli fittizi nel documento da caricare.

### Analitica

In questo tab si specifica con che priorità recuperare il centro di costo (CdC) o centro di profitto (CdP) nella riga DDT.

È possibile modificare le priorità utilizzando i seguenti pulsanti nella ribbon bar:

> **Sposta su**       
> **Sposta giù**.

*Valori di default*: il CDC o CDP viene recuperato dal tipo fatturato qualora presente. Per approfondimenti fare riferimento a tabella [Tipo Fatturato Acquisticonfigurations/tables/purchase/purchase-invoices-type). Qualora non fosse presente nel tipo fatturato il sistema lo cercherà in *Anagrafica fornitore*. Se non presente verrà cercato in *Anagrafica articolo* e successivamente a livello di *Magazzino*.

**Ricalcolo**: se attivo, ricalcola i centri di costo/profitto secondo la priorità scelta.

**Valuta la priorità su ogni dimensione**: se attivo, questo flag permette di valutare ogni priorità inserita nella parte superiore per capire se ci sono ulteriori dimensioni non ancora valorizzate. Ad esempio, supponiamo di avere nell'Anagrafica articolo il centro di costo della dimensione *Business unit* e nel Tipo fatturato acquisti la dimensione *Direzionale*. Se il flag non è attivo il sistema valuta solo il CdC presente nell'Anagrafica articolo; se il flag è attivo, dopo aver caricato il CdC presente nell'Anagrafica articolo il sistema valuta anche la dimensione presente nel Tipo fatturato acquisti (nel nostro esempio la dimensione *Direzionale*) e se è diversa da quelle che ha già gestito (*Business Unit*) carica il centro e prosegue con la verifica delle altre priorità.