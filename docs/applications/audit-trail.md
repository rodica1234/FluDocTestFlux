---
title: Audit Trail
sidebar_position: 2
---



**Audit Trail** rappresenta una parte applicativa che permette di configurare una sorta di LOG in grado di tracciare qualsiasi operatività all'interno di Fluentis, da parte di qualsiasi operatore.

Molto utile e talvolta obbligatoria in taluni settori aziendali nei quali si renda necessario produrre documenti relativi a “chi ha svolto”, “quale attività” e soprattutto “quando”, ovvero in che lasso temporale.

E' possibile produrre dei log evidenziando anche quali valori sono stati modificati relativamente a qualsiasi dato.

Sono già disponibili, senza eseguire alcuna configurazione due utili form di log: 

**Monitoraggio attività** che visualizza in tempo reale gli utenti collegati al sistema e le form che stanno aprendo, il refresh della form può avvenire manualmente premendo il bottone **Aggiorna**, oppure in automatico dopo aver premuto **Aggiornamento automatico dati**.

**Cronologia delle attività**: questo pannello traccia e memorizza in automatico tutti gli accessi a tutte le form da parte di qualsiasi utente. 


### LOG SPECIFICI

E' possibile configurare un log per tenere sotto controllo le modifiche o le cancellazioni di dati particolari. Ad esempio possiamo monitorare le modifiche che vengono fatte sulle registrazioni contabili.

Aprire Configurazione -> **Configurazione Audit Trail** e premere **Nuovo**

Definire un codice ed una descrizione per il nuovo log specifico e quindi, nella griglia sottostante impostare il business object di riferimento (ed eventualmente, se necessario il suo oggetto padre).

Definendo l'oggetto verranno visualizzate le proprietà relative e potranno essere selezionate con il flag quelle da tenere monitorate al fine di tracciare le modifiche o le cancellazioni.

![](/img/it-it/applications/audittrail/audittrail.png)


Per **interrogare il LOG** aprire **Audit Trail**:

Nella form se viene premuto semplicemente **Ricerca** saranno visualizzate tutte le operazioni soggette e monitoraggio e sarà visibile i tipo di operazione: Inserimento, modifica, cancellazione.

Al fine di visualizzare il dettaglio e dunque il dato prima e dopo la modifica, **occorre selezionare** nella zona di testata, sia il tipo di LOG precedentemente configurato attraverso il campo **Registro eventi**, sia l'**Oggetto**.


![](/img/it-it/applications/audittrail/audittrail2.png)


