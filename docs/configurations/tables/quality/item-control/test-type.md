---
title: Tipi prova
sidebar_position: 1
---

La tabella si trova sul percorso **Tabelle > Qualità > Controlli articolo > Tipi prova**.

In questa tabella è possibile codificare le tipologie di Prove da effettuare, in accettazione merce e durante il processo produttivo, sugli articoli.   
Alcuni esempi di utilizzo dei *Tipi prova* li troviamo nelle gestioni:
> **Schede tecniche** - nel tabulatore *Proprietà*;   
> **Piani di controllo** - nel tabulatore *Prove pianificate*;   
> **Controllo articoli** - nel tabulatore *Prove*;   
> **Certificati di analisi** - nel tabulatore *Controlli e valori rilevati > Valori rilevati*;   
> **M.E.S.** - nel tabulatore *Controlli qualità > Prove*.

La tabella consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Tipi prova**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Tipi prova**

Per poter inserire nuovi *Tipi prova* è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**.   
Per il nuovo record si devono inserire almeno i campi obbligatori richiesti dal programma: il **Codice** e la **Descrizione**.

**Duplica Tipi prova**

Per poter duplicare un *Tipo prova* esistente in un nuovo *Tipo prova* è necessario cliccare nella griglia sul *Tipo prova* da cui si desidera duplicare e premere il pulsante **Duplica**.   
Verrà visualizzata una richiesta di **Codice** del nuovo *Tipo prova* (dato obbligatorio) e dei flags che permettono di far scegliere se duplicare anche le informazioni di: *Configurazione*, *Esiti possibili*, *Funzione* e *Immagini*.   
Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di duplica o meno. 

## Tipi prova

E' l'elenco dove vengono inserite le informazioni principali del *Tipo prova*.   
L'elenco si compone delle seguenti informazioni:   
> **Codice**: è il codice del *Tipo prova*.   
> **Descrizione**: è la descrizione del *Tipo prova*.   
> **Riferimento piano di controllo standard**: è un campo descrittivo che contiene i riferimenti a codifiche di prove riconosciute globalmente.   
>  
> **Categoria**
>> **Codice**: è il codice della *Categoria*.   
>> **Descrizione**: è la descrizione della *Categoria*.   
>> **Distruttiva**: indica se la prova è di tipo distruttiva.   
>
> **Laboratorio interno**: indica se la prova viene effettuata internamente.   
>  
> **Laboratorio esterno**
>> **Descrizione**: abilitato se il Laboratorio è esterno, è la ragione sociale del *laboratorio di analisi* (*fornitore*) esterno che effettuerà la prova.
>  
> **Strumento di misura**
>> **Codice**: è il codice della *Categoria di strumento di misura* da utilizzare per rilevare i valori del *Tipo prova*.   
>> **Descrizione**: è la descrizione della *Categoria di strumento di misura* da utilizzare per rilevare i valori del *Tipo prova*.
>  
> **Valori**
>> **Da rilevare**: indica se la prova è da rilevare o è solamente una *Proprietà* e non è rilevabile e viene quindi utilizzato nelle *Schede tecniche*.   
>> **Unità di misura**: è l'*Unità di misura* dei valori da rilevare.   
>> **Tipo valore**: è il *Tipo valore* da rilevare: *Numerico*, *Si/No* o *Testo*.   
>> **Tipo limite**: abilitato se il *Tipo valore* è *Numerico*, è il *Tipo limite* da che verrà proposto nelle Prove.   
>  
> **Tipo controllo prova**
>> **Generico**: indica se la prova è comunemente attuata sulle tipologie di documento che si potranno specificare nelle successive colonne.   
>> **Tipo documento**: abilitato se il *Tipo valore* è *Generico*, è il documento dove il *Tipo prova* viene comunemente attuata.   
>> **Proposta in...**: abilitato se il *Tipo valore* è *Generico* e se il *Tipo documento* lo prevede, è il dettaglio (*Testata documento* o *Riga documento*) dove il *Tipo prova* viene comunemente attuata.   
>> **Codice**: è il codice del *Tipo controllo prova* da utilizzare.   
>> **Descrizione**: è la descrizione del *Tipo controllo prova* da utilizzare.
>> **Frequenza**: è la frequenza descrittiva con la quale effettuare il controllo.
>  
> **Note**: annotazioni libere.

### Attributi Tipo di prova

E' possibile inserire degli [Extra Dataconfigurations/utility/extra-data/extradata/search-extradata) generali per il *Tipo prova*.   
Questi *Extra data* vengono ereditati nelle *Prove* dei documenti dove è previsto l'utilizzo degli attributi.   

### Parametri di configurazione Prova e strumento di misura

Contiene gli [Extra Dataconfigurations/utility/extra-data/extradata/search-extradata) necessari agli operatori per preparare tutti gli strumenti necessari per poter iniziare una determinata prova. Possono essere considerate delle configurazioni necessarie, informazioni operative propedeutiche all'esecuzione della prova.   
Questi *Extra data* vengono ereditati nelle *Prove* dei documenti dove è prevista una configurazione.   

### Esiti possibili

E' possibile personalizzare, per il *Tipo prova* selezionato, i *Tipi esito* possibili.   
Quando verrà rilevata una singola prova, in base alla sua conformità, il sistema proporrà l'esito *positivo* oppure *negativo* di default.   
L'elenco si compone delle seguenti informazioni:   
> **Esito**: è il codice del *Tipo esito*.   
> **Descrizione esito**: è la descrizione del *Tipo esito*.   
> **Predefinito positivo**: indica che sarà proposto come esito positivo quando verrà rilevata una prova.   
> **Predefinito negativo**: indica che sarà proposto come esito negativo quando verrà rilevata una prova.   
> **Sequenza**: è la sequenza di visualizzazione negli elenchi dei *Tipi esito* per il "Tipo prova" selezionato.   
> **Note**: annotazioni libere.

### Funzioni di rilevamento ed approvazione

E' un'attribuzione di diritti che elenca chi può rilevare e/o approvare i valori della prova.   
L'elenco si compone delle seguenti informazioni:   
> **Funzione**: è il codice della *Funzione aziendale*.   
> **Descrizione funzione**: è la descrizione della *Funzione aziendale*.   
> **Tipo attività**: è il diritto dato alla *Funzione aziendale* durante le attività di rilevamento e/o approvazione di una prova. I valori possibili sono:   
> - *Può rilevare* - la *Funziona aziendale* ha i permessi di sola rilevazione dei valori;   
> - *Può approvare* - la *Funziona aziendale* ha i permessi di sola approvazione della prova;   
> - *Può rilevare e approvare* - la *Funziona aziendale* ha i permessi di rilevazione dei valori e approvazione della prova.   
>
> Le altre *Funzioni aziendali* non elencate non hanno alcun diritto di rilevazione valori e approvazione della prova.   
> Se non vengono specificate *Funzioni aziendali* tutti gli operatori potranno rilevare valori e approvare la prova.
>
> **Note**: annotazioni libere.

### Immagini

E' possibile associare delle immagini utili alla prova da rilevare. Per esempio, potrebbe servire ad indicare visivamente alcune caratteristiche o attività da fare durante la preparazione e l'attuazione della prova stessa.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).