---
title: Tipi piano di controllo
sidebar_position: 8
---

La tabella si trova sul percorso **Tabelle > Qualità > Controlli articolo > Tipi piano di controllo**.

In questa tabella è possibile codificare i *Tipi piano di controllo*.   
Il *Tipo piano di controllo* è parte integrante, assieme all'*Anno*, *Numero* e *Revisione*, del codice univoco della *Piano di controllo*.
Alcuni esempi di utilizzo di *Tipi piano di controllo* li troviamo nelle gestioni:
> **Piani di controllo** - nei *dati di testata*;   
> **Parametri Controlli articolo** - nel tabulatore *Generale*;   
e in tutte le gestioni dove viene ultilizzato il *Piano di controllo*.

La tabella contiene dei valori predefiniti dal sistema e non è possibile modificarli ed eliminarli. I valori predefiniti sono:
| Codice | Descrizione |   
|:--|:--|
| MInt | Interno |   
| MNNr | Non normalizzato |   
| MNrm | Normalizzato |   
| MUff | Ufficiale |   

La tabella consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli (se *Eliminabili*).

**Ricerca Tipi piano di controllo**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Tipi piano di controllo**

Per poter inserire nuovi *Tipi piano di controllo* è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**.   
Per il nuovo record si devono inserire almeno i campi obbligatori richiesti dal programma: il **Codice** e la **Descrizione**.

## Tipi piano di controllo

E' l'elenco dove vengono inserite le informazioni principali dei *Tipi piano di controllo*.   
L'elenco si compone delle seguenti informazioni:   
> **Codice**: è il codice del *Tipo piano di controllo*.   
> **Descrizione**: è la descrizione del *Tipo piano di controllo*.   
> **Numerazione**: è il codice della *Numerazione*.   
> **Eliminabile**: indica se il *Tipo piano di controllo* è eliminabile.   
> **Note**: annotazioni libere.

### Extra data

E' possibile inserire degli [Extra Dataconfigurations/utility/extra-data/extradata/search-extradata) generali per il *Tipi piano di controllo*.   
Questi *Extra data* vengono ereditati nei *Piani di controllo* di quella determinata tipologia.   

### Prove pianificate

E' possibile inserire dei [Tipi provaconfigurations/tables/quality/item-control/test-type) generali per il *Tipi piano di controllo*.   
Questi *Tipi prova* vengono ereditati nei *Piani di controllo* di quella determinata tipologia.   

#### Attributi Prove Pianificate

E' possibile inserire degli [Extra Dataconfigurations/utility/extra-data/extradata/search-extradata) generali per la *Prova pianificata*.   
Questi *Extra data* vengono ereditati nelle *Prove* dei documenti dove è previsto l'utilizzo degli attributi.   

#### Configurazione Prove Pianificate

Contiene gli [Extra Dataconfigurations/utility/extra-data/extradata/search-extradata) necessari agli operatori per preparare tutti gli strumenti necessari per poter iniziare una determinata prova. Possono essere considerate delle configurazioni necessarie, informazioni operative propedeutiche all'esecuzione della prova.   
Questi *Extra data* vengono ereditati nelle *Prove* dei documenti dove è prevista una configurazione.   

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).