---
title: Parametri controllo articoli
sidebar_position: 1
---

I parametri si trovano sul percorso **Parametri > Qualità > Parametri controllo articoli**.

I dati presenti in questa gestione sono utilizzati per proporre informazioni nelle gestioni:   
> **Schede tecniche**;   
> **Piani di controllo**;   
> **Controllo articoli**;   
> **Certificati di analisi**.   

**Salvataggio dei Parametri**

Per poter memorizzare le informazioni modificate è necessario premere il pulsante **Salva**.   

## Generale   

In questa tabulatore è possibile inserire dati da proporre di default nei documenti del modulo *Controllo articoli*.   

### Tipi prova      

In questo expander è possibile inserire dati da proporre nei *Tipi prova*.   
Nell'expander è possibile inserire:   
> **Tipo valore**: *Tipo valore* da proporre all'inserimento di un *Tipo prova*.   
> **Tipo limite**: *Tipo limite* da proporre all'inserimento di un *Tipo prova*.   

### Schede tecniche      

In questo expander è possibile inserire dati da proporre nelle *Schede tecniche*.   
Nell'expander è possibile inserire:   
> **Tipo scheda tecnica**: *Tipo scheda tecnica* da proporre all'inserimento di una *Scheda tecnica*.   
> **Responsabile**: *Dipendente* da proporre come responsabile all'inserimento di una *Scheda tecnica*.   
> **Tipo dichiarazione in Articoli**: *Tipo di dichiarazione* da proporre all'inserimento di *Articolo associato* di una *Scheda tecnica*.   
> **Tipo dichiarazione in stampa**: *Tipo di dichiarazione* da proporre in *Tipo dichiarazione da stampare in caso l'articolo ne sia sprovvisto* nella *Stampa scheda tecnica*.   

### Piani di controllo      

In questo expander è possibile inserire dati da proporre nei *Piani di controllo*.   
Nell'expander è possibile inserire:   
> **Tipo piano di controllo**: *Tipo piano di controllo* da proporre all'inserimento di un *Piano di controllo*.   
> **Responsabile**: *Dipendente* da proporre come responsabile all'inserimento di un *Piano di controllo*.   

### Certificati di analisi      

In questo expander è possibile inserire dati da proporre nei *Certificati di analisi*.   
Nell'expander è possibile inserire:   
> **Tipo certificato**: *Tipo certificato di analisi* da proporre all'inserimento di un *Certificato di analisi*.   
> **Responsabile**: *Dipendente* da proporre come responsabile all'inserimento di un *Certificato di analisi*.   


## Controllo articoli   

In questa tabulatore è possibile inserire dati:
> - da proporre di default nei *Controllo articoli*;   
> - per definire varie colorazioni per riconoscere i vari stati di un *Controllo*;   
> - per impostare parametri di gestione;   
> - ricerca e associazione automatica dei *Piani di controllo* da associare al *Controllo articolo*.   

> **Abilita il rilevamento multiplo valori**: indica l'abilitazione della possibilità di rilevare più valori per ogni prova, in tutte le tipologie di documento.   
> **Approvazione automatica dei valori rilevati**: indica l'*Approvazione* automatica della *Prova* alla rilevazione dei *Valori* e all'attribuzione automatica dell'*Esito*.   
> **Proposta esito negativo**: è un elenco di valori predefiniti dal sistema che indicano la metodologia di attribuzione di non conformità della *Prova*.   
> La metodologia viene considerata solo per la rilevazione di *Prove* di tipo *Numerico* nella *Rilevazione multipla valori*.   I valori predefiniti sono:   
> - *al primo valore rilevato non conforme*;   
> - *sulla media aritmetica dei valori rilevati (solo valori numerici)*.   
>
> **Tipo di esito negativo**: è la proposta del *Tipo esito* nel caso di *Prove* non conformi.   
> **Tipo di esito positivo**: è la proposta del *Tipo esito* nel caso di *Prove* conformi.   


### Tipi documento per l'importazione      

In questo expander/elenco è possibile inserire dati da considerare durante l'*Importazione articoli da controllare* e da proporre nel *Controllo articolo*.   
La tabella contiene le tipologie di documento gestite dal *Controllo articoli*.   
Sono tipologie predefinite dal sistema e non è possibile inserirne di nuove o eliminarle. I valori predefiniti sono:
> - *Ricevimento merce*;   
> - *DDT di Acquisto*;   
> - *Fattura di Acquisto*;   
> - *Dichiarazione di produzione*;   
> - *Fase Ordine di produzione*;   
> - *Rientro da Conto lavoro*;   
> - *Movimentazione di carico*.   

Nell'elenco, per ogni tipologia di documento, è possibile inserire:   
> **Def.**: indica la tipologia documento proposta nei filtri di ricerca; può essere selezionata una sola tipologia o nessuna.   
> **Dettaglio articolo**: è un elenco di valori predefiniti dal sistema che identificano il tipo di dettaglio da controllare dell'*Articolo* per la tipologia documento specifica. I valori predefiniti sono:   
>- *Nessuno* - la riga *Articolo* considerata non prenderà alcun dato di dettaglio;   
>- *Lotto* - la riga *Articolo* considerata prenderà come massimo dettaglio il *Lotto*;   
>- *S.N.* - la riga *Articolo* considerata prenderà come massimo dettaglio il *Serial Number*;   
>- *UDC* - la riga *Articolo* considerata prenderà come massimo dettaglio l'*Unità di Carico*;   
>
> **Mult.**: indica se abilitare la *Rilevazione multipla valori* nel *Controllo articoli* per la tipologia documento specifica.   
> Per essere considerato deve essere indicato il parametro generale *Abilita il rilevamento multipli valori*.   
> **Tipo controllo**: *Tipo controllo* da proporre all'inserimento di un *Controllo articoli* per la tipologia documento specifica.   
> **Tipo piano di controllo**: durante l'*Importazione articoli da controllare*, escluse le tipologie documento di produzione (*Dichiarazione di produzione* e *Fase Ordine di produzione*), è il *Tipo piano di controllo* che ha priorità maggiore per la ricerca del *Piano di controllo* da associare al *Controllo articoli*.   
> **Descrizione tipo controllo**: è la descrizione del *Tipo controllo*.   
> **Descrizione tipo piano di controllo**: è la descrizione del *Tipo piano di controllo*.   


### Colori righe Controlli articolo      

In questo elenco è possibile definire varie colorazioni per riconoscere i vari stati di un'*Controllo articolo*.   
Tali colori sono applicati nel *Filtro dei Controlli articolo*. L'elenco si compone delle seguenti informazioni:   
> **Tipo**: è lo stato del *Controllo articolo* al quale associare le colorazioni.   
> La tabella contiene dei valori predefiniti dal sistema e non è possibile inserirne di nuovi, eliminarli o modificarli. I valori predefiniti sono:
> - *Articoli non soggetti a controllo*;   
> - *Controlli privi di un Piano di controllo*;   
> - *Controlli con più Piani di controllo*;   
> - *Controlli ancora da rilevare*;   
> - *Controlli con esiti Non conformi*;   
> - *Controlli ancora da rilevare*;   
> - *Controlli ancora da rilevare*;   
> - *Controlli già validati*.   
>
> **Sfondo**: è il colore applicato allo sfondo della riga del *Controllo articolo* dello stato specifico.   
> **Testo**: è il colore applicato al testo della riga del *Controllo articolo* dello stato specifico.   


### Personalizzazione dati per tipo documento      

In questo elenco è possibile aggiungere *Proprietà* della tipologia documento di origine nell'elenco dati del *Controllo articolo*.   
La tabella contiene le medesime tipologie di documento riportate in **Tipi documento per l'importazione**.   
Sono tipologie predefinite dal sistema e non è possibile inserirne di nuove o eliminarle.   
Sono previste 5 informazioni per tipo di dato: *Testo*, *Si/No*, *Intero*, *Decimale*, *Data*.   
Tramite un doppio click sulla cella è possibile selezionare la *Proprietà* desiderata del documento.   

:::tip *Esempio:*   
per la tipologia documento *Fattura di Acquisto* è possibile aggiungere il valore della *Proprietà* di testata *Vostro riferimento*.   
Tramite il doppio click del mouse sulla colonna *Testo 01* viene eseguito l'Help sulle proprietà di riga del documento *Fattura di Acquisto*.   
Espandere il riferimento *Invoice (Fattura)*, selezionare la proprietà *Your reference (Vostro riferimento)* e premere il pulsante *Seleziona*.   
Nella cella dove è stato effettuata la selezione comparirà la proiprietà *YourReference*.
:::

### Personalizzazione intestazioni colonne per tipo documento      

In questo elenco è possibile indicare il *Titolo della proprietà*, corrispondenti alle *Proprietà* selezionate dell'elenco **Personalizzazione dati per tipo documento** e che compariranno nell'elenco dati del *Controllo articolo*.   
La tabella contiene le medesime tipologie di documento riportate in **Tipi documento per l'importazione**.   
Sono tipologie predefinite dal sistema e non è possibile inserirne di nuove o eliminarle.   
Sono previste 5 informazioni per tipo di dato: *Testo*, *Si/No*, *Intero*, *Decimale*, *Data*.   
Tramite un doppio click sulla cella è possibile selezionare la *Voce del dizionario* desiderata da riportare come intestazione.   

:::tip *Esempio:*   
per la tipologia documento *Fattura di Acquisto* è possibile indicare l'intestazione corrispondente all'esempio fatto precedentemente per il valore della *Proprietà* di testata *Vostro riferimento*.   
Tramite il doppio click del mouse sulla colonna *Testo 01* o digitando manualmente la *Voce del dizionerio* inserire *Vostro riferimento*.   
:::

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).