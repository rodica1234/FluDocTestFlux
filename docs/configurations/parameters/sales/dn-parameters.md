---
title: Parametri DDT
sidebar_position: 4
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

I parametri dei DDT di vendita permettono l'impostazione di base per gestire correttamente e secondo le specifiche richieste da ogni singola società. La finestra relativa a questi parametri si compone di 4 diversi tab: Generale, Evasione, Scarico e Analitica.

### Generale

**Gestione doppia unità misura**: se attivo, nelle righe DDT verranno visualizzate le due colonne UM Alternativa e Quantità Alternativa, sarà perciò possibile gestire la doppia unità di  misura, considerando sempre che è l’unità di misura principale sulla quale vengono fatti i controlli per l’evasione.      

**Proposta automatica UM alternativa:** questo flag diventa editabile solo se è stato attivato il flag di gestione della doppia unità di misura e consente di riportare nel tab articoli del DDT l'unità di misura alternativa impostata nell'anagrafica articolo, nell’apposita colonna 'UM alternativa'; se non attivo, l'unità di misura non viene proposta.      

**Controllo Disponibilità:** questo flag e gli altri relativi al controllo, visualizzazione e obbligorietà con la considerazion per area, nella versione attuale, non sono gestite.     

**Unità di misura volume/pesi predefinita**: queste unità di misura vengono considerate come UM di default da proporre nel tab [Trasporto-delivery-notes/insert-delivery-notes/transport) del DDT, come unità di misura di volume e pesi; il dato è modificabile nei documenti. 

**Ricerca prezzi articoli in tutti i listini predefiniti**: quando si cercano il prezzo e gli sconti per un articolo all'interno di un DDT, il sistema segue delle regole basate sulle impostazioni configurate nell'anagrafica cliente, sotto la sezione *Listini*. Se è attivata l'opzione 'default' su un determinato tipo di listino, la ricerca di prezzi e sconti si concentrerà solo su quella specifica tipologia di listino; se il flag "default" non è attivo, il sistema estenderà la ricerca a tutti i tipi di listini presenti, seguendo un ordine di priorità. In pratica, con il flag 'default' attivo, il sistema cercherà prima un listino valido per la tipologia predefinita; se non trova risultati, passerà a controllare le altre tipologie di listino in ordine di priorità inserita. Tuttavia, se nell'anagrafica del cliente non è presente alcuna tipologia di listino impostata come 'default' e ci sono solo priorità, questo parametro non influenzerà la ricerca, anche se attivo.       

**Proponi provvigione per gli articoli omaggio**: con questo flag verranno proposte le provvigioni agente anche per le righe articolo di tipo omaggio come avviene per le righe di tipo Articolo Codificato.     

**Consentire sconti per gli articoli omaggio**: con questo flag verranno inseriti gli sconti sull'importo di riga anche per le righe articolo di tipo omaggio.     

**Verifica articoli in esaurimento**: se settato, questo flag farà apparire un pop-up di avviso nel caso in cui vengano inseriti in DDT degli articoli che hanno settato in anagrafica il flag in Esaurimento e la data in cui l’articolo va in esaurimento; questo controllo evita di vendere articoli che non verranno più prodotti o riassortiti.      

**[Abilita Widget sconti semplificato-flow/discount-widget)**: attivando questo flag nella sezione Articoli verranno visualizzate due nuove colonne: *Sconti Articolo* e *Sconti Finali Articolo*. La colonna *Sconti Articolo* è modificabile e mostra gli sconti applicati automaticamente in base alle impostazioni relative al cliente, all'articolo, al listino o alla categoria di sconto. L'utente ha la possibilità di inserire, modificare o eliminare gli sconti direttamente in questa colonna. Per utilizzare questo widget è necessario che, oltre ad attivare il flag, sia specificato nel tipo di DDT quale tipo di sconto utilizzare.     

**Uso articolo cliente**: se settato, questo flag inserirà, nella griglia articoli del DDT, le colonne per il Codice e la Descrizione cliente inseriti in anagrafica articolo, tab Cliente.       

**Uso barcode**: se settato, questo flag inserirà, nella griglia articoli del DDT, la colonna per riportare il barcode dell'articolo.     

**Codice operatore obbligatorio**: questo flag rende obbligatorio compilare il campo *Operatore* in testata.     

**Blocca inserimento documento in date festive da calendario di fabbrica**: se attivo, il sistema non permette l'inserimento dell'offerta in date festive (viene controllato prima il Calendario di Fabbrica della società, poi il Calendario delle capacità produttive); se non attivo, il sistema non effettua nessun controllo e lascia inserire il documento.     

**Ricalcola trasporto**: questo flag fa in modo che nel tab [Trasporto-delivery-notes/insert-delivery-notes/transport) del DDT vengano riportati i totali di peso, volume e colli delle righe del documento; senza questo flag, i campi non saranno compilati.        

**Riferimenti esterni ordine**: questo flag fa in modo che i campi *Nostro* e *Vostro riferimento* vengano trasferiti dalle righe ordine alle righe DDT.

**Mantieni prezzi da OC per gli scaglioni**: questo flag garantisce che, durante l'evasione parziale di un ordine nel DDT, venga mantenuto lo stesso scaglione di prezzo presente nell'ordine originale, senza alcun ricalcolo. Ad esempio, se nell'ordine è specificata una quantità di 100 unità che attiva uno scaglione di prezzo specifico, ma nel DDT vengono evase solo 20 unità, con questo flag attivato il DDT conserverà il prezzo associato allo scaglione originale, senza modificarlo in base alla quantità effettivamente evasa.

### Evasione
In questo tab sono presenti i seguenti campi:       

**Pagamento**: specifica il valore usato per il pagamento del DDT cliente nel caso dell'evasione multipla di Ordini nel DDT: *Primo ordine*, *Anagrafica* oppure *Selezione manuale*.

**Destinatario**: specifica il valore usato per il destinatario del DDT cliente nel caso dell'evasione multipla di Ordini nel DDT: *Primo ordine*, *Anagrafica* oppure *Selezione manuale*.

**Controllo coerenza tra pagamenti DDT e ordine**: se attivo, il sistema non permetterà l'evasione da ordini con pagamenti diversi.

**Ricalcola CDC/CDP**: nel caso in cui si sia scelto di generare il DDT partendo dall'ordine cliente con l'apposta procedura, attivando questo flag, il sistema andrà a ricalcolare i centri di costo e di profitto se il DDT è stato generato da ordine, non considerando quelli impostati nell'ordine di vendita. Se non attivo il sistema non ricalcolerà questi dati ma terrà quelli inseriti nell'ordine cliente.

**Visualizzazione griglia evasione:** se attivo, il flag abilita la modalità griglia nella form di evasione ordini vendita.      

**Visualizzazione tree evasione:** se attivo, il flag abilita la modalità tree nella form di evasione ordini vendita.

**Proposta lotti**: questo flag fa in modo che al momento dell'evasione, nel caso in cui venga inserita una quantità diversa da evadere rispetto a quella presente nel documento di origine, la quantità dei lotti sia uguale alla quantità di riga nel documento creato; questo per evitare che il documento creato abbia una quantità di riga diversa da quella dei lotti.

### Scarico

**Crea registrazione con la data del documento**: se attivo, la registrazione di magazzino viene fatta con la stessa data del DDT, e non sarà necessario specificare la data registrazione nella form di scarico. Se non attivo, sarà necessario specificare la data nella form di scarico DDT

**Priorità magazzino e causale di scarico alle righe articoli dei DDT**: se attivo il magazzino e la causale di scarico vengono letti dalle righe del DDT mentre se non viene attivato, verranno utilizzati il magazzino e la causale inseriti nei campi successivi (**Magazzino** e **Causale di magazzino**);

**Carico/Scarico Automatico**: se attivo, lo scarico del DDT verrà effettuato in automatico all'attivazione del flag Stampata. Se non attivo lo scarico dovrà essere fatto con l'apposito pulsante.

**Avviso articoli fittizi**: se attivo, durante lo scarico del DDT il sistema andrà a controllare se sono presenti degli articoli fittizi e nel caso in cui ve ne siano comparirà un messaggio che permetterà all'utente di scegliere se completare lo stesso la procedura oppure no; in caso di risposta affermativa tutto il DDT verrà scaricato (ad eccezione degli articoli fittizi ), mentre in caso di risposta negativa il DDT NON verrà scaricato.

### Analitica
Questo TAB specifica con che priorità recuperare il Centro di costo(CDC) o Centro di profitto(CDP) nella riga DDT.      
È possibile modificare le priorità utilizzando i tasti **Sposta su**![](/img/neutral/common/move-up.png) e **Sposta Giù**![](/img/neutral/common/delete-cc.png).     
*Valori di default*: il CDC o CDP viene recuperato dal tipo fatturato qualora presente.     
Per approfondimenti fare riferimento a tabella [Tipo Fatturatoconfigurations/tables/sales/sales-turnover).      
Qualora non fosse presente nel *Tipo fatturato* il sistema lo cercherà in *Anagrafica cliente*. Se non presente verrà cercato in anagrafica articolo e successivamente a livello di magazzino.       
Il flag **Valuta la priorità di ogni dimensione** fa in modo che nei documenti i CDC/CDP vengano raggruppati per dimensione, nel tab Analitica. 
