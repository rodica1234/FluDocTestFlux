---
title: Tipi controllo articolo
sidebar_position: 9
---

La tabella si trova sul percorso **Tabelle > Qualità > Controlli articolo > Tipi Controllo articolo**.

In questa tabella è possibile codificare i *Tipi controllo articolo*.   
Il *Tipo controllo articolo* è parte integrante, assieme all'*Anno* e *Numero*, del codice univoco del *Controllo articolo*.
Alcuni esempi di utilizzo di *Tipi controllo articolo* li troviamo nelle gestioni:
> **Importa articoli da controllare** - nei *dati di testata*;   
> **Controlli articolo** - nell'elenco dei *dati di testata*;   
> **Certificati di analisi** - nel tabulatore *Controlli e valori rilevati*;   
> **Parametri Controlli articolo** - nel tabulatore *Generale*;   
e in tutte le gestioni dove viene ultilizzato il *Controllo articolo*.

La tabella consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Tipi controllo articolo**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Tipi controllo articolo**

Per poter inserire nuovi *Tipi controllo articolo* è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**.   
Per il nuovo record si devono inserire almeno i campi obbligatori richiesti dal programma: il **Codice** e la **Descrizione**.

## Tipi controllo articolo

E' l'elenco dove vengono inserite le informazioni principali dei *Tipi controllo articolo*.   
L'elenco si compone delle seguenti informazioni:   
> **Tipo controllo**: è il codice del *Tipo controllo articolo*.   
> **Descrizione tipo controllo**: è la descrizione del *Tipo controllo articolo*.   
> **Magazzino**: è il codice del *Magazzino* che viene proposto in *Controllo articoli > Prove > Magazzino*;   
è il *Magazzino* di controllo qualità utilizzato per movimentare gli articoli, una volta controllati, nel rispettivo *Magazzino* conforme e non conforme (se impostato come contropartita nella rispettiva *Causale*).   
> **Causale scarico articoli non conformi**: è il codice della *Causale di magazzino* che viene proposta in *Controllo articoli > Prove > Causale scarico articoli non conformi*;   
è la *Causale* di prelievo utilizzata per movimentare gli articoli non conformi, una volta controllati, nel rispettivo *Magazzino* non conforme;   
la *Causale* di contropartita non è obbligatoria se non si desidera gestire un *Magazzino* scarti o di reintegro dopo successivo ricondizionamento o rilavorazione dell'articolo controllato.   
> **Causale scarico articoli conformi**: è il codice della *Causale di magazzino* che viene proposta in *Controllo articoli > Prove > Causale scarico articoli conformi*;   
è la *Causale* di prelievo utilizzata per movimentare gli articoli conformi, una volta controllati, nel rispettivo *Magazzino* conforme;   
è auspicabile impostare la relativa *Causale* di contropartita per rendere nuovamente disponibile l'articolo conforme una volta controllato.   
> **Causale scarico prove distruttive**: è il codice della *Causale di magazzino* che viene proposta in *Controllo articoli > Prove > Causale scarico articoli non conformi* se la *Prova* è di tipo *Distruttiva*;   
è la *Causale* di prelievo utilizzata per movimentare gli articoli non conformi, una volta controllati;   
non è prevista la *Causale* di contropartita in quanto la *Prova* è di tipo *Distruttiva* ed è impossibile effettuare un successivo ricondizionamento o rilavorazione dell'articolo controllato.   
> **Tipo certificato proposto**: è il codice del *Tipo certificato di analisi* che viene proposto alla creazione di un nuovo *Certificato di analisi* da questo *Tipo controllo articolo*.   
> **Descrizione magazzino**: è la descrizione del *Magazzino*;   
> **Descrizione causale scarico articoli non conformi**: è la descrizione della *Causale scarico articoli non conformi*;   
> **Descrizione causale scarico articoli conformi**: è la descrizione della *Causale scarico articoli conformi*;   
> **Descrizione causale scarico prove distruttive**: è la descrizione della *Causale scarico prove distruttive*;   
> **Descrizione tipo certificato proposto**: è la descrizione del *Tipo certificato proposto*;   
> **Note**: annotazioni libere.

### Extra data

E' possibile inserire degli [Extra Dataconfigurations/utility/extra-data/extradata/search-extradata) generali per il *Tipi controllo articolo*.   
Questi *Extra data* vengono ereditati nei *Controlli articolo* di quella determinata tipologia.   

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).