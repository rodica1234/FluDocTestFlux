---
title: Imballi a rendere
sidebar_position: 15
---

La tabella si trova sul percorso **Tabelle > Logistica > Imballi a rendere**.

In questa tabella è possibile codificare i diversi *Imballi a rendere* da utilizzare nella *Gestione imballi* nei documenti di acquisto, vendita e conto lavoro.

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Imballi a rendere**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Imballi a rendere**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Inserimento**.  

Questa tabella contiene gli articoli che sono da considerarsi *Imballi a rendere* per la tracciabilità della giacenza. L’articolo inserito in questa tabella deve avere come Natura articolo: *Imballo* (la Natura articolo si inserisce in Anagrafica articolo, tab [Generalitàerp-home/registers/items/create-new-items/item-registry/generality)).     
Attraverso i flag in griglia è possibile scegliere in quali aree l'articolo sarà gestibile per essere movimentato.    

*Dati obbligatori*: 

> **Codice**: è il codice dell'*Imballo a rendere*;     
> **Descrizione**: è la descrizione dell'*Imballo a rendere*;   
> **Classe articolo**: indica la [Classeconfigurations/tables/logistics/item-class) a cui appartiene l'articolo;   
> **Codice articolo**: indica il codice dell'articolo.    

*Campi specifici*: 

> **Utilizzo negli acquisti**:  attivando questo flag l'imballo sarà visibile nei documenti dell'area acquisti;     
> **Utilizzo nel conto lavoro**: attivando questo flag l'imballo sarà visibile nei documenti dell'area conto lavoro;   
> **Utilizzo nelle vendite**: attivando questo flag l'imballo sarà visibile nei documenti dell'area vendite.   

Infine è possibile inserire **Magazzino** e **Causale** da utilizzare per l'articolo per ciascuna area.

Una volta parametrizzata questa tabella, nei documenti che lo prevedono sarà possibile aprire la form degli imballi a rendere con il ribbon button **Gestione Imballi**. Il bottone aprirà la procedura di *Gestione imballi*, già compilata con gli imballi definiti nella tabella *Imballi a rendere*, in modo che l’utente debba solo inserire le quantità.   

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).