---
title: Parametri fatture di acquisto
sidebar_position: 4
tags: [fatture di acquisto]
keywords: [fatture di acquisto]
---

I parametri delle fatture di acquisto permettono l'impostazione di base per gestire correttamente e secondo le specifiche richieste da ogni singola società.

La finestra si compone di pulsanti e tre diversi tab: *Generale*, *Carico* e *Analitica*. 

### Generale

**Gestione doppia unità misura**: attivando questo flag è possibile gestire le unità di misura alternative nelle fatture di acquisto. Queste vanno inserite per ogni riga articolo nel tab *Dati*.

**Proposta automatica UM alternativa**: questo check si abilita solo se *Gestione doppia unità misura* è attivo. Quando viene inserito un articolo che ha nella sua anagrafica tab UM Alternative una UM Alternativa di default, questa UM viene automaticamente proposta come UM Alt dell'articolo e viene calcolata anche la quantità alternativa usando il fattore di conversione della medesima.

**Costo zero in assenza di listini**: se attivo, in assenza di un listino valido popola il prezzo con il valore zero. Nel caso in cui questa voce non fosse spuntata, il campo sarebbe valorizzato con il costo ultimo dell'articolo, se presente.

**Tipo fattura**, **Aliquota IVA**, **Tipo fatturato**: qui vengono impostati i valori di default da utilizzare nella creazione delle fatture da ordini.

**Lotti e S.N. (Serial Number) obbligatori:** se attivo obbliga l'utente ad inserire a livello di riga articolo il lotto ed il serial number per tutti gli articoli per cui è prevista questa gestione. Se non attivo, il lotto ed il serial number non risultano dati obbligatori e sarà possibile salvare il documento anche senza averli inseriti. Si consiglia l'accensione di questo flag qualora si utilizzi la gestione articoli con lotto.

**Ricerca prezzi articoli in tutti i listini predefiniti**: questo parametro è utilizzato per la ricerca del prezzo nei listini fornitori; la ricerca avviene nei listini del tipo predefinito in anagrafica fornitore anche se i listini non sono validi (i listini validi sono quelli che hanno data inizio validità \<= alla data odierna e hanno data fine validità nulla o >= alla data odierna).

**Consentire sconti per articoli omaggio**: se attivo, permette l'inserimento di sconti sulle righe articolo di tipo omaggio;

**Uso articolo fornitore**: se attivo, nella griglia articoli del documento viene proposto anche il campo per inserire il codice articolo fornitore. Se non attivo questo campo non sarà visibile;

**Verifica articoli in esaurimento**: se attivato, il sistema fa un controllo sulla disponibilità degli articoli inseriti in fattura ed avvisa qualora l'articolo fosse in esaurimento, ovvero se nell'[anagrafica dell'articoloerp-home/registers/items/create-new-items/item-registry/generality) il flag *In esaurimento* è attivo.

**Contabilizzazione imballi**: consente di poter contabilizzare, in contabilità generale, anche le righe con articoli di natura imballo che solitamente vengono gestiti per avere la verifica delle giacenze degli [Imballi a rendereconfigurations/tables/logistics/package-to-be-returned).

**Mantieni prezzi da ordini per gli scaglioni**: è utilizzato nell'evasione degli ordini in fattura nel caso in cui la quantità evasa sia diversa (solitamente parziale) della quantità ordinata per la quale è stato inserito un prezzo o uno sconto a scaglione di quantità. Se il prezzo o lo sconto non dipendono dalla quantità consegnata ma solo dalla quantità in ordine questo flag deve essere attivato, se invece il prezzo o sconto a scaglione non deve essere inserito nel documento di consegna nel caso in cui l'evasione non avvenga per la quantità totale dell'ordine il flag non deve essere attivato.

**Attiva il Controllo Qualità**: work in progress.

### Carico

**Crea registrazione con la data del documento**: se questo flag è attivo, la registrazione di magazzino viene fatta con la stessa data della fattura. Se non attivo, essa viene effettuata con la *Data carico* indicata nella testata della fattura, se presente, altrimenti con la *Data registrazione magazzino* indicata nella procedura di [Carico fatture di acquisto in magazzinopurchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse/). Se la registrazione viene effettuata dall'interno della fattura mediante il pulsante *Carico automatico nel magazzino* e la *Data carico* non è inserita, allora sarà usata la data odierna.

**Priorità magazzino e causale di carico**: se attivo, al momento della registrazione della fattura a magazzino vengono usati i valori impostati nei campi sottostanti: **Magazzino** e **Causale magazzino**. Se il flag non è attivo, il magazzino e la causale di carico vengono letti dalle righe della fattura. Qualora non fossero indicati non sarà possibile effettuare il Carico automatico dall'interno della fattura di acquisto, ma si potrà utilizzare la procedura di [Carico fatture di acquisto in magazzinopurchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse/) selezionando il flag "*Accettare come magazzino e causale i seguenti dati:*" nel tab *Parametri* e indicando *Magazzino* e *Causale* da utilizzare. 

**Carico/Scarico automatico**: se attivo, al momento dell'attivazione del flag *Controllata* in testata del documento si riceverà un messaggio che ricorda che il parametro di carico/scarico automatico è attivo e chiede se si desidera procedere. Premendo "*Sì*" la fattura verrà caricata a magazzino, altrimenti sarà possibile caricarla successivamente premendo il pulsante *Carico automatico nel magazzino* posto nella ribbon bar. 

**Avviso articoli fittizi**: controlla che, in fase di carico a magazzino, siano presenti o meno nelle righe della fattura degli articoli fittizi. Nel caso siano presenti sarà richiesto se effettuare comunque il carico, ovviamente senza tali articoli, oppure se non effettuare totalmente il movimento di magazzino. L'articolo fittizio può essere senza distinta base di primo livello se nei parametri MRP è dichiarato con tipo approvvigionamento di acquisto altrimenti la registrazione di carico darà un messaggio di errore nel caso ci siano degli articoli fittizi nel documento da caricare.

### Analitica

In questo tab si specifica con che priorità recuperare il centro di costo (CdC) o centro di profitto (CdP) nella riga documento.

È possibile modificare le priorità utilizzando i seguenti pulsanti nella ribbon bar:
> **Sposta su**       
> **Sposta giù**.

*Valori di default*: il CDC o CDP viene recuperato dal tipo fatturato qualora presente. Per approfondimenti fare riferimento a tabella [Tipo Fatturato Acquisticonfigurations/tables/purchase/purchase-invoices-type). Qualora non fosse presente nel tipo fatturato il sistema lo cercherà in *Anagrafica fornitore*. Se non presente verrà cercato in *Anagrafica articolo* e successivamente a livello di *Magazzino*.

**Ricalcolo**: se attivo, questo flag, ricalcola i centri di costo/profitto secondo la priorità scelta.

**Valuta la priorità su ogni dimensione**: se attivo, questo flag permette di valutare ogni priorità inserita nella parte superiore per capire se ci sono ulteriori dimensioni non ancora valorizzate. Ad esempio, supponiamo di avere nell'Anagrafica articolo il centro di costo della dimensione *Business unit* e nel Tipo fatturato acquisti la dimensione *Direzionale*. Se il flag non è attivo il sistema valuta solo il CdC presente nell'Anagrafica articolo; se il flag è attivo, dopo aver caricato il CdC presente nell'Anagrafica articolo il sistema valuta anche la dimensione presente nel Tipo fatturato acquisti (nel nostro esempio la dimensione *Direzionale*) e se è diversa da quelle che ha già gestito (*Business Unit*) carica il centro e prosegue con la verifica delle altre priorità.