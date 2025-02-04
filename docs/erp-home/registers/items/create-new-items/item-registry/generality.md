---
title: Generalità
sidebar_position: 1
---

:::important A cosa serve
Il tab Generalità contiene le informazioni principali e logistiche degli articoli, come il codice, la descrizione, l'unità di misura e altre classificazioni opzionali, tra cui categoria merceologica e natura dell’articolo.     
Questo tab consente di definire ulteriori dettagli utili per la gestione e la tracciabilità degli articoli all'interno dei processi aziendali, facilitando l'organizzazione e la reportistica.
:::

All'interno di questo tab possono essere definiti i seguenti dati generali:

**Data inserimento**: campo che viene compilato in automatico alla creazione dell'articolo, e che appunto indica la data di creazione dell'articolo;

**Aliquota IVA**: combo attraverso la quale si va a selezionare ed inserire l'aliquota IVA relativa a quell'articolo; questo campo ha priorità rispetto all'aliquota IVA che viene attribuita al cliente/fornitore nell'anagrafica contatto;

**IVA acquisti agricoli / IVA vendite agricole**: che hanno un metodo diverso di gestione;

**Caratteristica e Modello**: sono due campi non obbligatori in cui si va a dare un'ulteriore definizione dell'articolo in base a una serie di raggruppamenti che vengono stabiliti all'interno della gestione aziendale dei prodotti; 

**Fatturato acquisti**: combo che si collega a una tipologia di *Fatturato acquisti* che è stata definita nella tabella dei sottoconti contabili per la contabilizzazione delle fatture di acquisto;

**Tipo articolo**: è una tabella non obbligatoria in cui si può inserire un'ulteriore descrizione dell'articolo in base ad altri raggruppamenti interni;

**Nomenclatura**: in questi campi viene selezionata attraverso l'help, la nomenclatura (ovvero la voce doganale dell'articolo) utile ai fini l'intrastat per la dichiarazione delle merci all'importazione o all'esportazione nonché ai fini statici per il commercio degli articoli all'interno dell'UE;

**Giorni di pagamento merce deperibile**: è collegato all'articolo 62; per la merce deperibile la fattura deve essere creata e pagata entro una scadenza di 30/60 giorni in base al tipo di articolo. In questo caso questo controllo viene fatto sia sull'articolo, sia sul tipo di pagamento che viene inserito in modo che non si possano emettere fatture con data decorrenza maggiore rispetto a quella indicata;
	
**Data ultima modifica**: indica la data di ultima modifica dell’articolo;

**Categoria fiscale**: attraverso questa combo si può andare a selezionare la categoria fiscale a cui appartiene l'articolo che serve per le stampe fiscali di magazzino, per poter raggruppare gli inventari per categoria fiscale;

**Categoria merceologica**: dato statistico come la caratteristica, e viene utilizzato in alcuni report specifici; 

**Fatturato vendite**: come per il fatturato acquisti, questa combo serve per la gestione dei sottoconti di ricavo per la vendita dell'articolo; 

**Natura articolo**: è un campo che viene utilizzato per attribuire all'articolo alcune caratteristiche specifiche per poi essere utilizzato in alcune procedure particolari. Nella combo troviamo la lista delle varie nature che possiamo attribuire all'articolo (click per il [glossario-intro#item-nature));

> **Attrezzatura/Utensile**: l’articolo di questa natura è associabile all’anagrafica degli strumenti di misura e delle attrezzature presenti nelle fasi dei cicli di lavorazione.
> **Macchina/Impianto**: questa natura è associabile all’anagrafica delle macchine;
> **Famiglia articoli**: che definisce l’articolo come una famiglia di articoli / prodotti delle previsioni di vendita;
> **Imballo**: serve per la gestione degli imballi a rendere, per la contabilità (per capire quanti imballi ho in casa e quanti ne ho dati al cliente o al fornitore e quindi capire quanti me ne devono rendere);
> **Servizi**: per la gestione degli interventi post-vendita;
> **Prestito d’uso/Componente impianto**: servono per la gestione delle manutenzioni;

Infine, troviamo una serie di flag:	

**Controllo qualità**: se attivo questo flag innesca il processo del controllo qualità, di conseguenza vorrà dire che l’articolo rientrerà nel flusso della qualità;

**Fittizio**: se attivo, questo flag serve per dichiarare che l'articolo non deve essere movimentato;

**Interesse fiscale**: se è attivo, questo flag serve per riportare l'articolo nelle stampe fiscali del magazzino;

**ABC:** per ABC, nella gestione delle scorte ai fini logistici, si intende un metodo di categorizzazione dell'inventario che consiste nel suddividere gli articolo in tre classi, denominate appunto A, B, e C dove A contiene gli articoli più importanti e C gli articoli meno importanti. È un metodo utile a focalizzare l'attenzione sui pochi prodotti essenziali e non su molti prodotti di scarsa importanza. Se questo metodo viene utilizzato dall'azienda, in questo campo si troverà la lettera che definisce la categoria a cui l'articolo appartiene;

**In esaurimento**: se attivo, questo flag indica che l'articolo è In esaurimento.         
Le condizioni per ottenere l'avviso che l'articolo sta per esaurire, nei documenti, per esempio negli Ordini cliente, sono:
- nei [parametri Ordini clienteconfigurations/parameters/sales/sales-orders-parameters) deve essere settato il flag "Verifica articoli in esaurimento";             
- in anagrafica articolo deve essere settato il flag "In esaurimento" e inoltre la "Data esaurimento" deve essere minore o uguale alla data dell'ordine.          

**Data in esaurimento**: indica da quando l'articolo è stato messo in esaurimento;

**Articolo senza calcolo della disponibilità**: se il flag è attivo, il sistema non andrà a considerare la disponibilità per poter utilizzare l'articolo;

**Archiviato**: se attivo, l'articolo non comparirà più nella lista degli articoli che si possono utilizzare, in quanto diventato obsoleto;

**Diritti d'autore**: se attivo, indica che l'articolo è soggetto a diritti d’autore/royalties e sarà considerato nella [Gestione royaltieserp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/).       

Per maggiori informazioni sulle modalità di inserimento e selezione dati all'interno delle form si rimanda all'articolo [Inserimento e selezione datiguide/common/operations-with-data/manual-entry-or-help-and-data-selection).
