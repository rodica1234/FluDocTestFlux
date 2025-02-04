---
title: Importazione METEL
sidebar_position: 6
---

**BizLink** consente l'importazione dei listini Metel, sono resi disponibili due flussi per tale import. L'unica operazione che deve fare l'utente è configurare il connettore per effettuare l'import.

:::danger[Lunghezza del file]
In Fluentis sono supportati solo 2 tipologie di file, quelli a 178 e 233 caratteri!
:::

:::danger[Formato del file]
In Fluentis è supportato solo il formato ANSI del file!
:::

:::tip[Processo file in formato non corretto]
Se il file non rispetta le due caratteristiche sopra riportate BizLink, sposterà il file nella cartella dei file processati e nei documenti in entrata non scriverà nulla in quanto "scarta" il file
:::

### Prerequisiti
- Servizio di BizLink installato e funzionante
- Listino Metel (file in formato txt) valido

:::tip[Sito ufficiale Metel]
Per qualsiasi dubbio sul file si rimanda al sito: https://listinipubblici.metel.it/ nel quale c'è la funzionalità "Verifica Listino"
:::

### Visione Parser e Flussi

:::note[Nota bene]
In questa sezione vengono riportati e spiegati i flussi già presenti in Fluentis. Nella sezione successiva viene spiegato come configurare il connettore ed effettuare l'import.
:::

#### Parser

Metel ha un parser chiamato FluentisEDIExtendedParser

![](/img/it-it/applications/bizlink/import-metel/1.png)

Al suo interno ci sono due oggetti parser, uno per il file a 178 caratt. e uno per quello a 233

![](/img/it-it/applications/bizlink/import-metel/2.png)

Prendendo come esempio l'oggetto parser per il file a 233, vediamo ogni campo come viene importato e in che posizione dovrebbe essere.
Questo può tornare utile in caso di errori di import, in quanto data la proprietà che ha errore possiamo capire in che posizione del file si trova.

![](/img/it-it/applications/bizlink/import-metel/3.png)

#### Flusso

Metel ha poi un flusso chiamato METEL

![](/img/it-it/applications/bizlink/import-metel/4.png)

Tale flusso ha un'operazione di flusso al suo interno chiamata FLOW_OP_MetlPriceList

![](/img/it-it/applications/bizlink/import-metel/5.png)

Tale operazione di flusso ha 2 documenti di flusso differenziati dal numero di caratteri del file

![](/img/it-it/applications/bizlink/import-metel/6.png)

Il documento di flusso definisce poi quale oggetto parser usare per processare il file

![](/img/it-it/applications/bizlink/import-metel/7.png)

### Creazione connettore

Andare in Bizlink - Connettori e premere nuovo

![](/img/it-it/applications/bizlink/import-metel/8.png)

Impostare poi Codice, Descrizione, Tipo connettore = Folder Monitor, Partner, Flusso, Operazione di flusso, Documento di flusso (in base al numero di caratteri del file che si vuole importare), Gestito dal servizio di autenticazione.
Infine impostare il percorso delle cartelle:
- Incoming: dove verrà messo il file per essere processato
- Processed: dove verrà spostato il file dal servizione se verrà importato correttamente
- Failed: dove verrà spostato il file dal servizione se tale file avrà degli errori

![](/img/it-it/applications/bizlink/import-metel/9.png)

:::tip[Gestione di entrambi i file]
Per poter gestire entrambi i tipi di file, creare due connettori diversi con i due documenti di flusso diversi.
Inoltre la cartella di Incoming dovrà essere diversa. Failed e Processed possono anche essere le stesse cartelle.
:::

### Test import

:::danger[Attenzione]
In caso di errori o di re-importazione di uno stesso file è necessario riavviare il servizio di BizLink in quanto non può processare un documento con lo stessso nome per evitare doppioni. Con il riavvio si sblocca questa cosa.
:::

Per effettuare un test di import, assicurarsi che il servizio sia attivo e copiare il file .txt nella cartella di incoming e attendere qualche secondo.
Nei documenti in entrata di BizLink sarà presente una riga con il risultato dell'import.

![](/img/it-it/applications/bizlink/import-metel/10.png)