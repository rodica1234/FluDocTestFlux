---
title: Corso base
sidebar_position: 3
---

La gestione si trova sul percorso **Home > Dipendenti > Corsi di formazione > Nuovo corso base** oppure è possibile eseguirla dalla **Ricerca Corsi base**.   


:::important A cosa serve
I Corsi di base sono dei templates di corsi che ricorsivamente, o non, vengono effettuati: all'assunzione di nuovi dipendenti, a loro cambi di mansione, periodicamente per rinnovi previsti da leggi e normative.   
:::


## Pulsanti di comando


### ![](/img/neutral/common/save.png) Salva

Premendo questo pulsante si memorizzano tutte le informazioni modificate del *Corso base* visualizzato.   


### ![](/img/neutral/common/duplicate.png) Duplica

Per poter duplicare un *Corso base* esistente in un nuovo *Corso base* è necessario premere il pulsante **Duplica**. Viene visualizzata una richiesta di:   
> **Tipo corso base**: è il *Tipo corso base* del nuovo *Corso base* (dato obbligatorio), viene proposto il *Tipo corso base* del *Corso base* di origine.   
> **Codice**: è il *Codice* del nuovo *Corso base* (dato obbligatorio).   
> **Titolo**: è il *Titolo* del nuovo *Corso base* (dato obbligatorio).   
> **Area**: è l'*Area* del nuovo *Corso base*, viene proposta l'*Area* del *Corso base* di origine.   
> **Settore**: è il *Settore* del nuovo *Corso base*, viene proposto il *Settore* del *Corso base* di origine.   
> **Categoria corso**: è la *Categoria corso* del nuovo *Corso base*, viene proposta la *Categoria corso* del *Corso base* di origine.   

Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di duplica o meno.   
Al termine dell'elaborazione il nuovo *Corso base* viene visualizzato.


### Pianifica prossimo corso

Per poter pianificare un nuovo *Corso di formazione* da un *Corso base* è necessario premere il pulsante **Pianifica prossimo corso**.   
Il nuovo *Corso di formazione* creato avrà le seguenti informazioni precaricate:   
> **Tipo corso di formazione**: specificato nella tabella dei *Tipi corso base* presente nel *Corso base* di origine.   
> **Anno**, **Numero** e **Data**: in base a quanto previsto dalla *Numerazione* associata al *Tipo corso di formazione* e alla data odierna.   
> **Pianificato**: indicatore di *Corso di formazione pianificato*.   
> Altre informazioni ereditate dal *Corso base* di origine: *Contenuti*, *Docente*, *Requisiti docente*, *Presenza stranieri*, *Valutazione efficacia*, *Riferimenti normativi*, *Settore*, *Area*, *Categoria corso*, *Ore previste* e *Costo previsto*; l'elenco delle *Mansioni* interessate.   
> Sulla base delle *Mansioni* interessate vengono proposti i *Dipendenti* che, alla data del corso, ricoprono quelle *Mansioni*.   

Al termine dell'elaborazione il nuovo *Corso di formazione* viene visualizzato.

### Pianifica prossimo rinnovo

Il pulsante è abilitato solamente se, dalla griglia di risultato, si seleziona un solo *Corso base* dove è previsto un rinnovo (*Dati rinnovo corso* con *Periodicità* diversa da *zero*).   
Per poter pianificare un nuovo rinnovo da un *Corso base* è necessario cliccare nella griglia sul *Corso base* da cui si desidera pianificare e premere il pulsante **Pianifica prossimo rinnovo**. Si può pianificare un solo *Corso di formazione* alla volta.   
Viene visualizzato un messaggio di impossibilità di creazione rinnovo se, per il *Corso base*, non è mai stato effettuato un *Corso di formazione*. 
Il nuovo *Corso di formazione* creato avrà le seguenti informazioni precaricate:   
> **Tipo corso di formazione**: specificato nella tabella dei *Tipi corso base* presente nel *Corso base* di origine.   
> **Anno**, **Numero** e **Data**: in base a quanto previsto dalla *Numerazione* associata al *Tipo corso di formazione* e alla data odierna.   
> **Pianificato**: indicatore di *Corso di formazione pianificato*.   
> **Rinnovo**: indicatore di *Rinnovo Corso di formazione*.   
> Altre informazioni ereditate dal *Corso base* di origine: *Docente*, *Requisiti docente*, *Riferimenti normativi*, *Settore*, *Area*, *Categoria corso*, l'elenco delle *Mansioni* interessate; dal *Corso base - Rinnovo*: *Contenuti*, *Presenza stranieri*, *Valutazione efficacia*, *Ore previste* e *Costo previsto*.   
> Sulla base delle *Mansioni* interessate vengono proposti i *Dipendenti* che, alla data del corso, ricoprono quelle *Mansioni*.   

Al termine dell'elaborazione il nuovo *Corso di formazione* viene visualizzato.


## Gestione dati


### Dati di testata

Le informazioni gestite sono:   
> **Tipo corso base**: è il *Tipo corso base* del nuovo *Corso base* (dato obbligatorio), viene proposto il *Tipo corso base* indicato nei *Parametri gestione del personale*.   
> **Codice**: è il *Codice* del nuovo *Corso base* (dato obbligatorio).   
> **Titolo**: è il *Titolo* del nuovo *Corso base* (dato obbligatorio).   
> **Attivo**: indica che il *Corso base* è ancora *attivo*.   
> **Data inizio validità**: è la data dalla quale il *Corso base* è valido.   
> **Data fine validità**: è la data dalla quale il *Corso base* cessa la sua validità.   
> **Ore previste**: sono le ore previste di formazione.   
> **Costo**: è il costo previsto di formazione.   
> **Contenuti**: annotazioni libere sull'argomento.   
> **Note**: annotazioni libere.   
>   
> **Settore**: è il *Settore* aziendale a cui è rivolto il *Corso*.   
> **Area**: è l'*Area* aziendale a cui è rivolto il *Corso*.   
> **Categoria corso**: è la *Categoria corso*.   
> **Docente**: è il *Docente* previsto che terrà il *Corso di formazione*.   
> **Requisiti docente**: annotazioni libere sull'argomento.   
> **Riferimenti normativi**: annotazioni libere sull'argomento.   
> **Attestato**: annotazioni libere sull'argomento.   
> **Presenza stranieri**: annotazioni libere sull'argomento.   
> **Valutazione efficacia**: annotazioni libere sull'argomento.   
>
> **Rinnovo**: expander dove è possibile inserire:   
>
>> **Dati rinnovo**: annotazioni libere sull'argomento.   
>> **Contenuti**: annotazioni libere sull'argomento.   
>> **Note**: annotazioni libere.   
>
>> **Ore previste**: sono le ore previste di formazione per singolo rinnovo.   
>> **Costo**: è il costo previsto di formazione per singolo rinnovo.   
>> **Periodicità (in mesi)**: è il periodo (espresso in mesi) che intercorre tra il primo *Corso* e il primo *Rinnovo* oppure tra *Rinnovo* e *Rinnovo*.   
>> **Attestato**: annotazioni libere sull'argomento.   
>> **Presenza stranieri**: annotazioni libere sull'argomento.   
>> **Valutazione efficacia**: annotazioni libere sull'argomento.   


### Mansioni interessate

Sono le *Mansioni* interessate alla partecipazione al *Corso*.   
Sulla base delle *Mansioni* elencate, nel *Corso di formazione* creato da questo *Corso base*, vengono proposti i *Dipendenti* che le ricoprono.   
L'elenco si compone delle seguenti informazioni:   
> **Mansione**: è il codice della *Mansione*.   
> **Descrizione mansione**: è la descrizione della *Mansione*.   
> **Note**: annotazioni libere.   


### Corsi pianificati e completati

In questi due elenchi è possibile visualizzare lo storico dei *Corsi di formazione pianificati* e dei *Corsi di formazione completati*.   
Tramite un doppio click del mouse sulla riga desiderata è possibile eseguire la gestione del *Corso di formazione* selezionato.   
L'elenco dei *Corsi pianificati* si compone delle seguenti informazioni:   
> **Argomenti da trattare**.   
> **Data prevista dalle**.   
> **Ore previste**.   
> **Docente**.   

L'elenco dei *Corsi completati* si compone delle seguenti informazioni:   
> **Argomenti trattati**.   
> **Data effettiva dalle**.   
> **Durata (ore)**.   
> **Docente**.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).