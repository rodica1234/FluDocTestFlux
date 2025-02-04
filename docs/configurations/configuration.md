---
title: Configurazione
sidebar_position: 1
---

L'area di confiugurazione si compone principalmente di due elementi: **Tabelle** e **Parametri**.

Entrambi sono raggruppati per area funzionale, oltre ad un gruppo di tabelle e parametri generali (necessari indipendentmente dall'area alla quale si è interessati).

:::danger[Attenzione]
Una mancata gestione di questi dati di base potrebbe impedire l'utilizzo concreto dell'ERP nell'area interessata.
:::

**TABELLE**: contengono dati di base necessari alla creazione di altri dati o documenti. Ad esempio la tabella Tipi Fatture contiene le tipologie di fattura. Per la creazione di una nuova fattura è necessario per prima cosa richiamare il tipo dall'apposita combo box.

**PARAMETRI**: contengono generalmente delle opzioni o dei dati di default per il funzionamento di procedure di elaborazione o creazione automatica di dati. La loro mancata gestione, in particolare, in alcuni casi, il salvataggio di un parametro di default, potrebbe impedire il corretto funzionamento della procedura relativa.

:::important[**Fast Start**]
Dopo l'installazione di Fluentis ERP, prima di iniziare ad utilizzarlo è possibile inizializzare un [**ambiente *FastStart* totalmente pronto all'uso**guide/fast-start).

Vedere il link per l'elenco delle **tabelle** e **parametri** che vengono popolati da questa procedura.

Un elemento discriminante per il lancio del Fast Start è il [**Piano dei conti**erp-home/registers/accounting/analytic-chart-of-accounts) (area amministrativa).

Lanciando la procedura di Fast Start verrà creato un piano dei conti standard, è possibile comunque integrarlo e modificare le descrizioni dei conti, oppure cancellare alcuni conti ma solo se questi non sono già utilizzati in altri dati generati dalla procedura (es. causali contabili, modelli di riclassificazione di bilancio). Nel caso in cui il piano dei conti sia totalmente indatto alla relatà aziendale che ha installato Fluentis, è consigliabile procedere con una configurazione manuale delle tabelle e parametri relativi alle aree funzionali alle quali si è interessati (oltre che alla creazione manuale o importazione del piano dei conti desiderato). Al link sopra indicato è presente una **check list** per la verifica di dettaglio delle tabelle più importatnti.
:::
