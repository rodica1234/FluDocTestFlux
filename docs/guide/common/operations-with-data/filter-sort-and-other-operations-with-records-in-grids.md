---
title: Filtrare, ordinare e altre operazioni con i record nelle griglie
sidebar_position: 4
---

### Filtrare i record

All'interno delle griglie si possono filtrare e/o ordinare i record (vedi l'esempio nell'immagine sotto). 

La prima riga della griglia è di filtro (l'icona sul campo di intestazione di riga ha come immagine un imbuto ![](/img/neutral/common/filter.png)): una volta aperta la maschera è sufficiente eseguire una ricerca per visualizzare i record presenti nella stessa e attivare l'inserimento (se previsto) o la gestione della griglia stessa. Il carattere jolly della ricerca all'interno di tutto il campo è ‘%', il singolo carattere jolly è ‘_'. 

Il filtro nei campi testo non è ‘case sensitive' (cioè non distingue maiuscole/minuscole'). Una volta che si inizia a filtrare i record attraverso le intestazioni di colonna, apparirà alla base della maschera un pannello che mostra come sarà applicato il filtro stesso: all'estrema destra di questa sezione apparirà sia un pulsante di chiusura/annullamento del filtro stesso, che un utile pulsante ![](/img/neutral/common/pencil.png) di editing del filtro stesso, dove poter aggiungere in modo guidato filtri più complessi.

![](/img/it-it/guide/operations-with-data/filter-sort-and-other-operations-with-records-in-grids/image03.png)

Sull'intestazione di colonna, inoltre, è attivo un pulsante (un'altra icona simile ad un imbuto) che visualizza una check list con le varie occorrenze dei record presenti in griglia, con la possibilità di spuntare tutto o solo vuote/non vuote o i singoli record.

![](/img/it-it/guide/operations-with-data/filter-sort-and-other-operations-with-records-in-grids/image04.png)


### Ordinare i record

Sulle griglie, oltre che alla prima riga di filtro, è possibile ordinare i record (in modo crescente o decrescente) per una colonna premendo sull'intestazione della colonna stessa: se si vuole ordinare a cascata per altre colonne, è necessario tenere premuto ‘Shift' e cliccarle con il mouse.

E' possibile copiare i dati selezionati in griglia: con CTRL+C si copiano i valori, se si fa CTRL+SHIFT+C si copiano anche le intestazioni di colonna.

Alla base della maschera è presente un testo che indica il record selezionato e il totale dei record presenti, con pulsanti che consentono di passare da un record all'altro o saltare di pagina in pagina o andare in fondo o all'inizio. Lo scroll della griglia visualizza il numero di record attuale rispetto al totale dei record.

Con il pulsante destro sulle intestazioni di griglia sono consentite le seguenti operazioni:

**Ordinamento crescente**: setta l'ordinamento crescente per il campo

**Ordinamento decrescente**: setta l'ordinamento decrescente per il campo

**Rimuovi ordinamento**: rimuove l'ordinamento

### Altre operazioni

Con il pulsante destro sulle intestazioni di griglia sono consentite le seguenti operazioni:

**Raggruppa per questa colonna**: i record della griglia saranno raggruppati per il campo stesso e premendo il + del gruppo si apriranno i suoi dettagli. Sono consentiti più gruppi uno all'interno dell'altro

**De-raggruppa**: (presente se è stato definito un raggruppamento) annulla il raggruppamento impostato

**Mostra il pannello di raggruppamento**: visualizza sopra la griglia la sezione di gestione del raggruppamento

**Nascondi il pannello di raggruppamento**: (se il pannello di raggruppamento è presente) nasconde la sezione di gestione del raggruppamento

**Visualizza selettore colonne**: consente di aggiungere colonne previste per la griglia ma che sono state nascoste

**Adatta**: adatta la dimensione della colonna selezionata ai valori presenti nel campo

**Adatta (tutte le colonne)**: adatta la dimensione di tutte le colonne rispetto ai valori presenti nel campo

**Modifica indice di raggruppamento**: (solo in caso di dati raggruppati) apre una form dove poter impostare un contatore delle occorrenze per gruppo, impostando la relativa label e la sua formattazione. (Le totalizzazioni non vanno gestite in questa opzione ma impostando la griglia a caricamento totale e poi attraverso il pannello riepilogo totali, come spiegato più in basso.)

**Editor filtro**: apre il pannello di scrittura manuale del filtro sulla griglia

**Mostra pannello di ricerca**: apre un campo di ricerca sulle occorrenze della griglia, filtrando i record stessi

**Stile fisso**: consente di impostare una colonna come fissa a sinistra o destra in griglia, facendo scorrere orizzontalmente le altre. Per impostare fisse più colonne, tenere premuto CTRL e poi il pulsante destro per aggiungere le successive.

**Pannello riepilogo**: apre il pannello di riepilogo della griglia, dove visualizzare il numero totale delle righe ad esempio

**Pannello riepilogo totali**: consente di visualizzare il pannello di totalizzazione dei campi visualizzati. Tale opzione è gestita solo nel caso in cui la griglia sia stata impostata per caricare tutti i dati (dettagli più in basso)

**Riga filtro**: abilita/disabilita la riga iniziale di filtro

**Fine gruppo**: visualizza una sezione finale per ogni gruppo, dove è possibile visualizzare totali e valori delle colonne per quel gruppo (per griglie a caricamento totale, come spiegato più in basso)

**Esporta**…: consente di esportare la griglia in vari formati (csv, html, immagine, mht, pdf, rtf, testo, xls, xlsx, xps).

**Anteprima di stampa**: apre un'anteprima di stampa della tabella della griglia, dalla quale è possibile a sua volta esportare i dati, allegarli ad una email, stamparli. Le impostazioni sono quelle della stampante di default.

**Stampa**: esegue direttamente la stampa della tabella della griglia, sulla stampante di default.