---
title: Parametri Fabbisogno Materiali
sidebar_position: 7
tags: [Fabbisogno materiali]
---

Attraverso questa finestra vengono settati i parametri che riguardano alcune delle impostazioni di base dell'area Produzione.

**Primo giorno della settimana cal. capacità produttiva**: è possibile decidere quale sia il giorno che debba essere considerato come primo della settimana nel [Calendario delle capacità produttiveconfigurations/tables/production/factory-calendar), quindi nel calendario dei centri di lavoro. Solitamente si imposta il lunedì.

**Ultimo ordine pianificato inserito per l'anno in corso**: rappresenta l'ultimo numero progressivo utilizzato nell'anno in corso per gli ordini pianificati.

**Rilascio RDA autorizzate**: se attivo, permette di fare in modo che le richieste di acquisto generate tramite il rilascio degli ordini pianificati di acquisto siano create con il flag di 'Autorizzato' attivato automaticamente. Diversamente, l'utente che deve generare ordini fornitori da RDA sarà costretto ad autorizzare tutte le righe della richiesta di acquisto prima di poter generare un ordine da essa. È possibile comunque autorizzare solo alcune delle righe della RdA e quindi procedere alla generazione ordini fornitori partendo solo dalle righe autorizzate.

**Colori sfondo**: permette di impostare il colore dello sfondo per le diverse tipologie di ordine: di Acquisto, di Produzione o di C/Lavoro, mentre la sezione dei *Colori testo* permette di impostare il colore del testo per le diverse tipologie di ordine: in ritardo e/o scaduti.

**Parametri per il rilascio ordini pianificati**  
In questa sezione l'utente può impostare il tipo richiesta d'acquisto e il tipo ordine di conto lavoro (se chiuso quindi non modificabile ulteriormente o aperto e quindi modificabile) che devono essere generati automaticamente durante il rilascio degli ordini pianificati rispettivamente di acquisto e di conto lavoro.

**Controllo terzista obbligatorio per le fasi esterne**: se attivo, nel caso non sia indicato il terzista in una fase esterna, questo verrà segnalato con il **Colore testo riga ordine** sotto indicato. 
**Controllo materiale obbligatorio**: abilita il controllo della presenza o meno dei materiali a magazzino e a seconda della disponibilità verranno evidenziati con differenti colori (**Colore sfondo riga ordine**: *Completa / Parziale / Assente*); inoltre, è possibile anche indicare in **Tipo controllo su** se questo debba essere fatto sulla giacenza o sulla disponibilità del materiale.

**Gestione semplificata della produzione**: è obsoleto e viene utilizzato solo nelle vecchie versioni.  

**Rilascio ordini di produzione esecutivi**; se attivo, permette di fare in modo che gli ordini di produzione generati tramite il rilascio degli ordini pianificati di produzione siano creati già nello stato di “Esecutivi”, e quindi non richiedano un'ulteriore procedura di Rilascio.

**Visualizzazione formato ad albero degli ordini**: se attivo, permette di visualizzare, nella parte sottostante della form di *Ricerca ordini pianificati*, un albero che leghi gli elementi di una commessa di produzione, in base ai legami delle distinte base coinvolte nella schedulazione di quella commessa.

**Mantenimento legame tra ordini di una Commessa**: se attivo, permette, sfruttando anche i flag immediatamente successivi, di decidere che qualora venga modificata manualmente la data di un ordine pianificato, la procedura attui la modifica conseguente anche sugli ordini pianificati immediatamente adiacenti a quello che ha subito la modifica iniziale.

**Numero giorni per il calcolo disponibilità**: indica fino a quanto spingersi avanti per la valutazione del calcolo della disponibilità, non considerando ordini e fabbisogni che superano quella data.

**Data impegno materiali alla fase di scarico materiali**: se attivo, la data impiego materiale indicata negli ordini pianificati sarà pari alla data inizio maggiore tra tutte le fasi, il che significa che sarà uguale alla data inizio dell'ultima fase. Mentre, se il flag non è attivo, la data impiego materiale indicata negli ordini pianificati sarà pari alla data inizio dell'ordine, quindi alla data inizio della prima fase.         

**Giorni anticipo impegno materiali**: il valore indicato permette di anticipare di quel numero di giorni la disponibilità del materiale rispetto l’inizio della lavorazione (sia negli ordini pianificati di produzione che negli ordini di produzione), in modo da permettere alla logistica di portare il materiale in tempo in produzione. Questo è preso in considerazione dalle seguenti procedure: tutte le schedulazioni "al più presto", "al più tardi", "a capacità finita", "MRP", "Completamento dati ordine" sia negli ordini pianificati che negli ordini di produzione, "Ricalcola data inizio" sia negli ordini pianificati che negli ordini di produzione tutte le procedure del CRP ("Gantt", "Capacità centri di lavoro" e "Sequenza fasi") che operano sul cambio data inizio o fine della fase dell'ordine.
 
**Magazzini di schedulazione ordini**  
La griglia è la semplice visualizzazione della lista di magazzini si cui deve essere controllata la disponibilità. Questa lista viene impostata nella form chiamata *Calcolo disponibilità* che si trova tra le Utilità del gestionale.

**Parametri Gantt**   
Permette di inserire dei parametri di default per la gestione della form del Gantt (*Tipo simulazione Gantt* e *Tipo simulazione Snapshot*).

**Parametri Calcolo Fattibilità**   
Permette di inserire le indicazioni per l'attivazione e la visualizzazione della Fattibilità delle Fasi di lavorazione.   
Per la versione di prodotto attuale l'unica attivazione possibile è nelle gestioni di *Sequenza fasi*.   
E' possibile attivare il controllo della fattibilità:   
- sui Materiali da utilizzare impostando la spunta su *Considera Materiali*;   
- sulle Fasi di produzione impostando la spunta su *Considera Fasi precedenti*.   

Si possono impostare dei colori che evidenziano le diverse informazioni sulle disponibilità dei materiali da utilizzare:   
- *Materiale non disponibile*;   
- *Materiale disponibile parzialmente*;   
- *Materiale disponibile*;   
- *Materiale non necessario*;   

e sullo stato di avanzamento delle fasi di lavoro precedenti alla fase analizzata e alla fase analizzata:   
- *Fase precedente non iniziata*;   
- *Fase precedente iniziata*;   
- *Fase precedente completata*;   
- *Fase iniziata*.   

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).