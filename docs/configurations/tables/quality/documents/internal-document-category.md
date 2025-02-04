---
title: Categorie Documenti di origine interna
sidebar_position: 2
---

La tabella si trova sul percorso **Tabelle > Qualità > Documenti > Categorie Documenti di origine interna**.

:::important A cosa serve
I dati presenti in questa tabella sono utilizzati per catalogare le diverse tipologie dei Documenti di origine interna.   
I dati inseriti in queste griglie verranno riportati nella creazione dei Documenti di origine interna.   
Un esempio di utilizzo lo troviamo nella gestione **Documenti di origine interna**.
:::

La tabella consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Categorie Documenti di origine interna**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Categorie Documenti di origine interna**

Per poter inserire nuovi *Categorie Documenti di origine interna* è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**.   
Per il nuovo record si devono inserire almeno i campi obbligatori richiesti dal programma: il **Codice** e la **Descrizione**.

**Duplica Categorie Documenti di origine interna**

Per poter duplicare una *Categoria Documento* esistente in una nuova *Categoria Documento* è necessario cliccare nella griglia sulla *Categoria Documento* da cui si desidera duplicare e premere il pulsante **Duplica**.   
Verrà visualizzata una richiesta di **Codice** e **Descrizione** della nuova *Categoria Documento* (dati entrambe obbligatori).   
Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di duplica o meno. 

## Categorie Documenti di origine interna

E' l'elenco dove vengono inserite le informazioni principali della *Categoria Documento*.   
L'elenco si compone delle seguenti informazioni:   
> **Categoria**: è il codice della *Categoria Documento*.   
> **Descrizione categoria**: è la descrizione della *Categoria Documento*.   
> **Sequenza**: è la sequenza di visualizzazione negli elenchi delle *Categorie Documento*.   
> **Documento obbligatorio**: indica se è obbligatorio allegare il documento.   
> **Codifica automatica**: indica se si desidera abilitare la codifica automatica del documento; la codifica sarà composta da: *Codice categoria* più un progressivo di un numero di cifre indicato in *Numero di cifre progressive* a partire nal numero indicato in *Progressivo iniziale*.   
> **Numero di cifre progressive**: abilitato se richiesta la *Codifica automatica*, è il numero di cifre del progressivo che comporranno il codice del documento.   
> **Progressivo iniziale**: abilitato se richiesta la *Codifica automatica* è il numero di progressivo che verrà proposto all'inserimento del primo documento.   
> **Funzione di verifica/approvazione**: è la *Funzione aziendale* responsabile della verifica/approvazione del documento.   
> **Funzione di redazione/emissione**: è la *Funzione aziendale* responsabile della redazione/emissione del documento.   
> **Tipo documento**: è il codice del *Tipo documento* proposto per la codifica del documento allegato per la codifica nel *Documentale*.   
> **Descrizione tipo documento**: è la descrizione del *Tipo documento* proposto per la codifica del documento allegato per la codifica nel *Documentale*.   
> **Archivio**: in questo campo viene assegnato il magazzino dove trovare la categoria specifica.   
> **Ubicazione**: indica la posizione fisica abituale della *Categoria*; è possibile scegliere solo le *Ubicazioni* facenti parte dell'*Archivio* selezionato.   
> **Ubicazione descrittiva**: se la posizione non è codificata, è possibile inserirla manualmente in questo campo libero.   
> **Periodo di conservazione**: contiene un periodo di conservazione da inserire manualmente.   
> **Funzione responsabile**: contiene la *Funzione aziendale* responsabile della *Categoria*.   
> **Note**: annotazioni libere.

### Lista di distribuzione

In questo elenco è possibile associare: *Funzioni aziendali*, *Dipendenti*, *Clienti/Fornitori* e *Contatti* che abitualmente ricevono copia della *Categoria Documento* selezionata ed indicare le metodologie abituali di ricezione del documento.   
L'elenco si compone delle seguenti informazioni:   
> **Gruppo**   
>> **Codice**: è il codice del *Ruolo A.R.M.* destinatario.   
>> **Descrizione**: è la descrizione del *Ruolo A.R.M.* destinatario.   
>
> **Utente**   
>> **Codice**: è il codice dell'*Utente A.R.M.* destinatario.   
>> **Descrizione**: è la descrizione dell'*Utente A.R.M.* destinatario.   
>
> **Funzione aziendale**
>> **Codice**: è il codice della *Funzione aziendale* destinataria.   
>> **Descrizione**: è la descrizione della *Funzione aziendale* destinataria.   
>
> **Dipendente**
>> **Codice**: è il codice del dipendente* destinatario.   
>> **Cognome**: è il cognome del dipendente* destinatario.   
>> **Nome**: è il nome del dipendente* destinatario.   
>
> **Cliente/Fornitore**
>> **Descrizione**: è la ragione sociale del *Cliente/Fornitore* destinatario.   
>
> **Contatto**
>> **Codice**: è il codice del *Contatto* destinatario.   
>> **Descrizione**: è la descrizione del *Contatto* destinatario.   
>
> **Altro destinatario**
>> **Descrizione**: è la libera descrizione di un destinatario non codificato.   
>
> **Dati per la consegna**
>> **Cartacea**: indica che al momento della distribuzione (procedura interna alla gestione *Documenti di origine interna*) il soggetto desidera ricevere copia *Cartacea* del documento o in allegato tramite *Email*.   
>> **Metodo di consegna**: indica la metodologia di consegna abituale della *Categoria Documento*.   
>> **Email**: indica una email di destinazione, se non codificata nell'anagrafica del destinatario.   
>> **Numero di copie**: indica il numero di copie cartacee che il destinatario desidera ricevere.   
>> **Note**: annotazioni libere.   

*Pulsanti specifici*:      
**Nuovo destinatario**: inserisce una nuova riga in elenco.   
**Cancella destinatario**: cancella la riga selezionata dall'elenco.   

### Accesso consentito alle funzioni
In questa elenco è possibile inserire le *Funzioni aziendali* a cui dare i diritti di accesso.   
Se non vengono inserite righe in questa tabella, allora l'accesso è consentito a tutti.   
L'elenco si compone delle seguenti informazioni:   
> **Funzione**: è il codice della *Funzione aziendale*.   
> **Descrizione funzione**: è la descrizione della *Funzione aziendale*.   
> **Note**: annotazioni libere.

*Pulsanti specifici*:      
**Nuova funzione di accesso**: inserisce una nuova riga in elenco.   
**Cancella funzione di accesso**: cancella la riga selezionata dall'elenco.   

### Extra data
E' possibile inserire degli [Extra Dataconfigurations/utility/extra-data/extradata/new-extradata-simple) per ogni *Documento di origine interna*.   
Questi *Extra data* vengono ereditati nel *Documento interno* di quella determinata categoria.   

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).