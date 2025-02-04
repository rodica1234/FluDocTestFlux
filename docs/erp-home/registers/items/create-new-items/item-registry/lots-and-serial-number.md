---
title: Lotti e serial number
sidebar_position: 17
---

:::important A cosa serve
Il tab "Lotti e Serial Number" dell'anagrafica articoli di Fluentis consente una gestione dettagliata dei materiali attraverso due varianti: la gestione per lotti e la gestione tramite numeri di serie.
La gestione a lotti permette di organizzare gli articoli in gruppi omogenei che possono essere sia di acquisto che di produzione. Ogni lotto è identificato da un codice univoco che consente di rintracciarne i movimenti e le giacenze, anche in scenari multi-magazzino. All'interno della gestione a lotti, gli utenti possono definire la tipologia di prelievo (FIFO, data scadenza o manuale), selezionare il tipo di codice lotto per definirne la codifica. Questa gestione è fondamentale per articoli sensibili come quelli alimentari e farmaceutici.

In alternativa, la gestione con serial number offre la possibilità di tracciare ogni singolo pezzo attraverso un numero di serie unico. Questo è particolarmente utile per articoli ad alto valore o critici, dove ogni unità necessita di un monitoraggio preciso. Le opzioni disponibili includono la modalità di generazione del numero di serie (manuale o automatica) e la validità temporale del numero stesso.

Questo tab è quindi un elemento cruciale per garantire la rintracciabilità, la compliance normativa e la gestione efficiente delle scorte nel magazzino, contribuendo così a ottimizzare la logistica aziendale.
:::

L'articolo può essere gestito a Lotti o a Serial Number e di ogni codice articolo si possono creare dei sottogruppi che a loro volta possono essere gestiti a lotti o a serial number.

I lotti sono dei gruppi di quantità omogenee di articoli che entrano in azienda (lotti di acquisto) o che vengono prodotti nell'azienda stessa (lotti di produzione).

Ogni lotto deve poter essere identificato da un codice univoco, dal quale vengono reperite alcune informazioni che caratterizzano il lotto stesso. Questo codice può essere definito dall'azienda nella finestra **Tipo codice lotto**, oppure nel caso di lotti di acquisto si può decidere di mantenere lo stesso codice lotto del fornitore.

Ogni lotto deve poter essere quindi rintracciato, e nel caso di più magazzini, grazie al codice lotto deve essere possibile tenere traccia dei dati sulle giacenze per singolo magazzino.

All'interno di questo tab, si andranno a definire i parametri in base al tipo di gestione che si sceglierà di avere per quello specifico articolo e che verrà applicata tramite gli appositi flag che troviamo all'inizio di questo tab: **Gestito a lotti** e **Gestito con serial number**.

### Gestione a lotti

**Tipologia di prelievo del lotto**: indica se la tipologia di prelievo sia F.I.F.O., per data scadenza o manuale (quindi scelto dall’operatore);      
**Tipo codice lotto**: in questo caso si va a selezionare il tipo codice lotto (e le relative caratteristiche impostate per crearlo) che si è definito nella finestra *Tipo codice lotto* e che è dato dalla concatenazione di più campi;       
**Stato iniziale lotto**: solitamente il singolo lotto è caratterizzato anche da uno stato che ne va a definire la validità. Per alcuni tipi di materiali in particolare, come i prodotti alimentari e farmaceutici, lo stato è obbligatorio (per es. nell'ambito farmaceutico un lotto che necessita di analisi prima di poter essere utilizzato avrà come stato iniziale *in quarantena* fino al completamente delle analisi); per questo tipo di prodotti lo stato sarà accompagnato da una data di scadenza per evitare la vendita e l'utilizzo di merce scaduta. In base allo stato del lotto, si potrà scegliere di poterlo gestire a Rfid o a Rfid unico;       
**Gestito RFID**: se attivato, l'articolo verrà gestito tramite la tecnologia Rfid (radiofrequenza) tramite l'applicazione;       
**RFID unico**: se attivato, il codice RFID associato all'articolo è unico per l'articolo;      
**Tipi di scadenza lotto**: per selezionare il tipo di scadenza che si vuole attribuire al lotto (se a data scadenza, all'ultimo giorno del mese di scadenza, al primo giorno del mese di scadenza);      
**Modifica data di scadenza del lotto**: se attivato, consente di modificare la data di scadenza del lotto manualmente;      
**Anticipo blocco lotto espresso in giorni**: i due campi **Avviso blocco** e **Blocco** consentono di esprimere, in giorni, quando avvisare che si sta per bloccare quel lotto e stabilire il giorno di blocco del lotto;      
**Lotto mono fornitore**: se attivato, indica il fatto che a quel lotto apparterranno solo articoli con lo stesso fornitore;      

Si può scegliere altrimenti di gestire l'articolo attraverso la **Gestione con Serial Number**. In questo caso, per ogni pezzo viene creato un numero di serie che identifica in maniera univoca quel pezzo all'interno della struttura in modo da averne traccia. Questo tipo di gestione è particolarmente adatta per articoli considerati *critici* o ad *alto valore* per i quali è necessario tenere traccia di ogni pezzo movimentato e non di una quantità intera.

### Gestione con serial number

**Tipo codice serial number**: per selezionare il tipo predefinito nella tabella **Tipo codice serial number**;      
**Giorni validità del serial number**: per indicare per quanti giorni questo codice sarà valido;      
**Generazione del serial number**: per stabilire la modalità di creazione del serial number, se manuale o automatica; quanto è impostato su automatica, significa che per tutti i movimenti con causale di *carico* e con il flag *Crea serial number* attivo (sulla causale stessa), all'inserimento del lotto i serial number verranno creati automaticamente.
      


