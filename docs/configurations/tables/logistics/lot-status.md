---
title: Stato lotto
sidebar_position: 22
---

La tabella si trova sul percorso **Tabelle > Logistica > Stato lotto**.

In questa tabella è possibile codificare lo *Stato dei lotti* per definirne la validità.

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Stato lotto**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Stato lotto**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**.   
Per il nuovo record si devono inserire almeno i campi obbligatori richiesti dal programma: il **Codice** e la **Descrizione**.

Un lotto è caratterizzato da uno stato che ne va a definire la validità. Per alcuni tipi di materiali in particolare, come i prodotti alimentari e farmaceutici, lo stato è obbligatorio (per es. nell'ambito farmaceutico un lotto che necessita di analisi prima di poter essere utilizzato avrà come stato iniziale *In quarantena* fino al completamento delle analisi).

*Campi specifici*:     

> **Disp. prel. auto**: se attivo, questo lotto non verrà considerato dalla disponibilità;     
> **Non disponibile per MRP**: se attivo, questo lotto verrà considerato dall'mrp solo se nei *Parametri MRP* dell'articolo è stato flaggato anche il flag *Considera lotti in stato non disponibile*. Se uno dei due flag *Non disp. per MRP* e *Considera lotti in stato non disponibile* non è attivo allora non verrà considerato nemmeno dall'MRP.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).