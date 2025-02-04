---
title: Tipi scheda tecnica
sidebar_position: 4
---

La tabella si trova sul percorso **Tabelle > Qualità > Controlli articolo > Tipi scheda tecnica**.

In questa tabella è possibile codificare i *Tipi scheda tecnica*.   
Il *Tipo scheda tecnica* è parte integrante, assieme all'*Anno*, *Numero* e *Revisione*, del codice univoco della *Scheda tecnica*.
Alcuni esempi di utilizzo di *Tipi scheda tecnica* li troviamo nelle gestioni:
> **Schede tecniche** - nei *dati di testata*;   
> **Parametri Controlli articolo** - nel tabulatore *Generale*;   
e in tutte le gestioni dove viene ultilizzata la *Scheda tecnica*.

La tabella consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Tipi scheda tecnica**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Tipi scheda tecnica**

Per poter inserire nuovi *Tipi scheda tecnica* è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**.   
Per il nuovo record si devono inserire almeno i campi obbligatori richiesti dal programma: il **Codice** e la **Descrizione**.

## Tipi scheda tecnica

E' l'elenco dove vengono inserite le informazioni principali dei *Tipi scheda tecnica*.   
L'elenco si compone delle seguenti informazioni:   
> **Codice**: è il codice del *Tipo scheda tecnica*.   
> **Descrizione**: è la descrizione del *Tipo scheda tecnica*.   
> **Note**: annotazioni libere.

### Attributi Tipo scheda tecnica

E' possibile inserire degli [Extra Dataconfigurations/utility/extra-data/extradata/search-extradata) generali per il *Tipo scheda tecnica*.   
Questi *Extra data* vengono ereditati nelle *Schede tecniche* di quella determinata tipologia.   

### Metodo di codifica

E' l'elenco dove vengono inserite le informazioni per la codifica del *Codice* e della *Descrizione* della *Scheda tecnica*.   
L'elenco si compone delle seguenti informazioni:   
> **Ordinamento**: è la sequenza di attuazione nella creazione del *Codice* e della *Descrizione* della *Scheda tecnica*.   
> **Tipo**: è un elenco di valori predefiniti dal sistema che identificano l'oggetto con il quale creare la codifica della *Scheda tecnica*; I valori predefiniti sono:   
>> *ExtraData* - utilizzato solo per la creazione del codice e della descrizione, è un Extra data identificabile dalla colonna *Extradata*;   
>> *Anno* - utilizzato solo per la creazione del codice, è l'*Anno* di creazione della *Scheda tecnica*, impostabile a 2, 3 o 4 cifre impostabili nel campo *Lunghezza*;   
>> *Mese* - utilizzato solo per la creazione del codice, è il *Mese* di creazione della *Scheda tecnica*, valore fisso a 2 cifre;   
>> *Giorno* - utilizzato solo per la creazione del codice, è il *Giorno* di creazione della *Scheda tecnica*, valore fisso a 2 cifre;   
>> *Progressivo* - utilizzato solo per la creazione del codice, è il *Progressivo* di creazione della *Scheda tecnica*, valore iniziale, carattere di riempimento e dimensioni impostabili nel campo *Lunghezza*;   
>> *Codice Tipo* - utilizzato solo per la creazione del codice, è il *Codice* del *Tipo scheda tecnica*;   
>> *Descrizione Tipo* - utilizzato solo per la creazione della descrizione, è la *Descrizione* del *Tipo scheda tecnica*;   
>> *Valore fisso Codice* - utilizzato solo per la creazione del codice, sono dei caratteri fissi impostabili nella colonna *Valore fisso*;   
>> *Valore fisso Descrizione* - utilizzato solo per la creazione della descrizione, sono dei caratteri fissi impostabili nella colonna *Valore fisso*.   
>
> **Extradata**: abilitato se in *Tipo* è stato selezionato il valore *ExtraData*, è l'*ExtraData* da utilizzare per comporre *Codice* e/o *Descrizione* della *Scheda tecnica*.   
> **Proprietà Codice**: abilitato se in *Tipo* è stato selezionato il valore *ExtraData*, è la proprietà *Codice* dell'*ExtraData* da utilizzare per comporre il *Codice* della *Scheda tecnica*.   
> **Proprietà Descrizione**: abilitato se in *Tipo* è stato selezionato il valore *ExtraData*, è la proprietà *Descrizione* dell'*ExtraData* da utilizzare per comporre la *Descrizione* della *Scheda tecnica*.   
> **Lunghezza**: abilitato se in *Tipo* è: *Anno* o *Progressivo*, è la lunghezza che verrà data al *Tipo*.   
> **Spazio**: indica se verrà inserito uno spazio nel *Codice* tra questa componente di *Codice* e la successiva.   
> **Separatore**: è il carattere utilizzato come separatore tra questa componente di *Codice* e la successiva.   
> **Carattere riempimento**: è il carattere utilizzato per completare la lunghezza del *Progressivo*.   
> **Valore iniziale progressivo**: è il valore iniziale del *Progressivo* all'inserimento della prima *Scheda tecnica*.   
> **Valore fisso**: abilitato se in *Tipo* è: *Valore fisso Codice* o *Valore fisso Descrizione*.   

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).