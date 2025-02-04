---
title: Parametri differenze inventariali
sidebar_position: 3
---

:::important A cosa serve
L'introduzione ai parametri delle differenze inventariali di Fluentis è fondamentale per garantire un efficace allineamento tra le giacenze fisiche e logiche all'interno del magazzino. Questa funzionalità consente agli operatori di gestire e registrare le discrepanze identificate in modo sistematico, assicurando che ogni movimento di magazzino sia tracciato e contabilizzato in modo accurato.

I parametri delle differenze inventariali si trovano nella sezione di configurazione e permettono di stabilire le causali di magazzino da utilizzare durante il processo di calcolo delle differenze. Ogni magazzino può avere configurazioni personalizzate, in cui è necessario impostare sia una causale di carico per le rettifiche inventariali positive sia una causale di scarico per le rettifiche negative. Inoltre, il sistema automatizza la generazione di registrazioni di compensazione, semplificando così la gestione di eventuali variazioni nelle giacenze.

Nella procedura di differenze inventariali, Fluentis offre l'opzione di calcolare le differenze a una data specifica, consentendo una gestione retroattiva e una registrazione accurata delle giacenze. 
:::

La form permette di impostare, per ogni magazzino, le causali che dovranno essere utilizzate automaticamente dall'applicazione in caso di creazione automatica di registrazioni di magazzino tramite l'utilizzo della procedura *Differenze inventariali*. Permette di calcolare la differenza tra la quantità logica e la quantità fisica, ossia quella rilevata dall'inventario fisico, e di generare automaticamente le registrazioni di compensazione delle differenze tra quantità logica e quantità fisica.

Le causali di magazzino che possono essere impostate in questo tab sono esclusivamente le causali che hanno il flag *Gestione inventario fisico* attivo nelle [Causali di magazzinoconfigurations/tables/logistics/warehouse-templates). È necessario impostare, per ogni magazzino, una casuale di carico di rettifica inventariale ed una causale di scarico di rettifica inventariale. 

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).