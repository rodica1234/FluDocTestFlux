---
title: Parametri offerte
sidebar_position: 2
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

I parametri offerte permettono l'impostazione di base per gestire correttamente e secondo le specifiche richieste da ogni singola società. La finestra si compone di due tab: Generale e Scarico.     

### Generale 

I campi presenti in questa tab sono:      

**Gestione doppia unità misura**: se attivo, nelle righe offerta verranno visualizzate le due colonne UM Alternativa e Quantità Alternativa, sarà perciò possibile gestire la doppia unità di  misura, considerando sempre che è l’unità di misura principale sulla quale vengono fatti i controlli per l’evasione.     

**Proposta automatica UM alternativa:** questo flag diventa editabile solo se è stato attivato il flag di gestione della doppia unità di misura e consente di riportare nel tab articoli dell'offerta l'unità di misura alternativa impostata nell'anagrafica articolo, nel apposita colonna 'UM alternativa'; se non attivo, l'unità di misura non viene proposta.       

**Ricerca prezzi articoli in tutti i listini predefiniti**: quando si cercano il prezzo e gli sconti per un articolo all'interno di un'offerta, il sistema segue delle regole basate sulle impostazioni configurate nell'anagrafica cliente, sotto la sezione *Listini*. Se è attivata l'opzione 'default' su un determinato tipo di listino, la ricerca di prezzi e sconti si concentrerà solo su quella specifica tipologia di listino; se il flag "default" non è attivo, il sistema estenderà la ricerca a tutti i tipi di listini presenti, seguendo un ordine di priorità. In pratica, con il flag 'default' attivo, il sistema cercherà prima un listino valido per la tipologia predefinita; se non trova risultati, passerà a controllare le altre tipologie di listino in ordine di priorità inserita. Tuttavia, se nell'anagrafica del cliente non è presente alcuna tipologia di listino impostata come 'default' e ci sono solo priorità, questo parametro non influenzerà la ricerca, anche se attivo.       

**Proponi provvigione per gli articoli omaggio**: con questo flag verranno proposte le provvigioni agente anche per le righe articolo di tipo omaggio come avviene per le righe di tipo Articolo Codificato.                

**Consentire sconti per gli articoli omaggio**: con questo flag verranno inseriti gli sconti sull'importo di riga anche per le righe articolo di tipo omaggio.    

**Verifica articoli in esaurimento**: se settato, questo flag farà apparire un pop-up di avviso nel caso in cui vengano inseriti in offerta degli articoli che hanno settato in anagrafica il flag in Esaurimento e la data di esaurimento.          

**[Abilita Widget sconti semplificato-flow/discount-widget)**: attivando questo flag nella sezione Articoli delle offerte non gerarchiche, verranno visualizzate due nuove colonne: *Sconti Articolo* e *Sconti Finali Articolo*. La colonna *Sconti Articolo* è modificabile e mostra gli sconti applicati automaticamente in base alle impostazioni relative al cliente, all'articolo, al listino o alla categoria di sconto. L'utente ha la possibilità di inserire, modificare o eliminare gli sconti direttamente in questa colonna. Per utilizzare questo widget è necessario che, oltre ad attivare il flag, sia specificato nel tipo di offerta quale tipo di sconto utilizzare.     

**Uso articolo cliente**: se settato, questo flag inserirà, nella griglia articoli dell'offerta, le colonne per il Codice e la Descrizione cliente inseriti in anagrafica articolo, tab Cliente.       

**Uso barcode**: se settato, questo flag inserirà, nella griglia articoli dell'offerta, la colonna per riportare il barcode dell'articolo.     

**Codice operatore obbligatorio**: questo flag rende obbligatorio compilare il campo *Operatore* in testata offerta.     

**Blocca inserimento documento in date festive da calendario di fabbrica**: se attivo, il sistema non permette l'inserimento dell'offerta in date festive (viene controllato prima il Calendario di Fabbrica, poi il Calendario delle capacità produttive); se non attivo, il sistema non effettua nessun controllo e lascia inserire il documento.     

**Riferimenti offerta**: se questo flag viene impostato, nel progetto creato da offerta verrà inserito il Riferimento dell'offerta nel titolo del progetto; la composizione di questa nota deve essere inserita nel campo *Descrizione* secondo i parametri descritti nella label.     

**Costo predefinito materiali offerta**: in questo campo è possibile indicare il *Tipo costo origine* da usare come importo di partenza per il calcolo del ricavo dei *Materiali* di un'[offerta gerarchica/new-offer/group-items).       

**Articolo ordine risorse da offerta**: in questo campo è possibile indicare quale articolo codificato associare alle risorse di un'Offerta, per la creazione delle righe dell'Ordine dall'[offerta gerarchica/new-offer/group-items).      

**Riferimenti prototipo**: in questa sezione è possibile comporre la nota di riferimento al prototipo associato all'offerta; essa verrà riportata nel campo *Prototipo* del tab *Attività* dell'offerta gerarchica.     

**Blocca conferma e conversione offerta in ordine se presenti prototipi non codificati**: questo flag impedisce conferma e conversione offerta in ordine se sono associati prototipi non codificati.

### Scarico

I parametri di scarico sono utilizzati solo per proporre il magazzino e la causale nelle righe delle offerte non gerarchiche.

**Priorità parametri inseriti per ogni riga ordine**: se attivo il magazzino e la causale di scarico vengono letti dalle righe dell'ordine mentre se non viene attivato, verranno utilizzati il magazzino e la causale inseriti nei campi successivi (**Magazzino** e **Causale di magazzino**).     