---
title: Tipi picking
sidebar_position: 34
---

:::important A cosa serve
La tabella Tipo Picking di Fluentis consente di codificare e definire le diverse tipologie di picking che possono essere utilizzate durante la creazione delle liste di prelievo. Gli utenti possono inserire nuovi record, modificare quelli esistenti o eliminarli in base alle esigenze operative.

Ogni tipologia di picking può essere associata a parametri specifici, tra cui il codice alfanumerico univoco, la numerazione dei documenti, e le causali di movimentazione. È possibile stabilire anche il tipo di fattura o DDT da utilizzare e gestire configurazioni come lo stato iniziale del picking e la priorità delle ubicazioni di magazzino. Questa flessibilità consente alle aziende di adattare il sistema alle proprie necessità, migliorando così l'efficienza nelle operazioni di magazzino e contribuendo a una gestione ottimale dei flussi di materiali.
:::

La tabella si trova sul percorso **Tabelle > Logistica > Tipi picking**.

In questa tabella è possibile codificare le diverse tipologie di picking da utilizzare quando si crea un [Nuovo Pickingpicking/picking-management).

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Tipo picking**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Tipo picking**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**.

**Tipo/Descrizione**: codice alfanumerico univoco e descrizione del *Tipo picking*;   

**Numerazione**: in questo campo va inserito il codice della numerazione appropriato. Per approfondimenti fare riferimento all'articolo relativo alle [Numerazioni Fluentisconfigurations/tables/fluentis-numerations);

**Numerazione lista di prelievo**: indica la numerazione da utilizzare per le liste UDC create con questo tipo picking;   

**Evasione tipo fattura**: in questo campo va definito il tipo fattura che deve essere proposto per creare la fattura da picking tramite l'apposita procedura;

**Evasione tipo DDT**: in questo campo va definito il tipo DDT che deve essere proposto per creare la bolla da picking tramite l'apposita procedura;

**Stato iniziale**: indica lo *Stato* di default con cui viene creato il picking;

**Magazzino/Descrizione magazzino**: in questi campi viene inserito il magazzino di movimentazione della merce da proporre in automatico sulle righe articolo inserite nel picking;   

**Causale/Descrizione causale**: in questi campi viene indicata la causale di movimentazione della merce contenuta nei picking appartenenti a questa tipologia;  

**Senza evasione**: al momento dell'evasione dell'ordine nel picking non viene cambiato lo stato evasione dell'ordine;

**Evasione quantità articolo non sommata**: se questo flag è attivo, nel momento in cui si andrà a creare un picking a partire da un altro documento le quantità delle righe articolo evase non saranno sommate; 

**Trasferimento**: se attivo indica che si tratta di un picking di trasferimento tra magazzini interni; 

**Lista prelievo materiali**: i *Tipi picking* che hanno questo flag attivo saranno visibili nella *Lista prelievo materiali*;

:::note Nota
Per i *Tipi picking* che saranno utilizzati nelle *Liste di prelievo materiali*, quindi per quelli che avranno il flag *Lista prelievo materiali* attivo, è necessario inserire una causale di magazzino che abbia anche una contropartita.
:::

**Evade ordini con commessa di produzione**: non più utilizzato;

**Unità di carico obbligatoria**: i tipi picking che hanno questo flag disattivato non potranno essere usati per il prelievo delle UDC e saranno visibili nella form di [Conferma pickingwms/sales/check-row-menagement#conferma-picking) del WMS. Viceversa, le tipologie di picking che hanno questo flag attivo saranno visualizzate nella [Gestione spuntawms/sales/check-row-menagement#gestione-spunta) del WMS. 

**Sovraevadibile**: se attivo, permette di sovra evadere la quantità indicata nel picking; è utilizzabile sia nella [Gestione spuntawms/sales/check-row-menagement) che nella [Conferma pickingwms/sales/check-row-menagement) del WMS. Nel caso non sia attivo e si tenti di movimentare una quantità maggiore rispetto a quella indicata viene mostrato un messaggio di avviso che impedisce di proseguire.

**Stampa**: indica il nome della stampa associata e il **Numero di copie** da eseguire di default. 

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).

