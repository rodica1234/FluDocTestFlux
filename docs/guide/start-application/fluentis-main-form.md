---
title: La form principale di Fluentis
sidebar_position: 2
---

La form principale di **Fluentis** è composta da più zone con funzionalità diverse:

## Sezione superiore 

La toolbar contiene i combo-box per selezionare la **Società** e/o la **Divisione** che vengono utilizzate per l'inserimento dei dati e l'editore per facilitare la ricerca delle form all'interno dell'applicazione

Subito sotto ci sono diversi tab:

### Primo tab

Contiene Informazioni sulle **Versioni**, permette di **Stampare**, contiene informazioni dettagliate sulla **Licenza**, permette di **Chiudere** il programma.

### Tab Home

Il tab contiene:

- il combo-box per selezionare la **Lingua** desiderata,
    
- il combo-box per scegliere il **Menù** di Fluentis,

:::note Menu    
In base al menu attivato, viene completata la ribbon bar del tab **Home** con le informazioni trasversali a tutta l'applicazione e si aggiungono i tab che corrispondono alle aree di Fluentis.
:::
    
- i **Temi** che l'utente può scegliere per cambiare lo sfondo dell'applicazione in base alle sue esigenze visive,
    
- lo spazio disponibile per visualizzare le *form aperte dall'utente*,
    
- la **freccia** per nascondere o visualizzare l'intera ribbon bar.
    
### I tab delle Aree

Contengono una serie di ribbon raggruppati per tipo/modulo. Per esempio, il tab *Acquisti* contiene tutti i documenti del ciclo attivo: richieste, ordini, DDT, fatture ecc.

### Help
    
Per informazioni dettagliate sulla form in uso, l'utente può consultare la documentazione usando **F1** oppure premendo il pulsante **?**.

## Panello sinistro

Contiene la [Form Navigatorform-navigator/data-grid-settings) con informazioni sulla form attiva.

## Panello destro

Contiene:

**[Strumentiapplications/applications-intro)** contiene diverse applicazioni complementari: ARM, Audit Trail, BizLink, Business Intelligence, CRM, Gestione Documentale, Applicazioni non supportate.

**[Object Navigatorobject-navigator/object-navigator-intro)** contiene informazioni sull'oggetto attivo, utile a personalizzare le form con l'aggiunta di ulteriori dati o informazioni.

**[Context Panelpanels/context-panel)** in base alle impostazioni, Fluentis permette di visualizzare informazioni contestuali al campo selezionato (esempio: se selezionate l'articolo l'applicazione mostra la sua disponibilità).

**[Configurazioniconfigurations/configuration)** contiene informazioni che consentiranno la definizione della gestione dei moduli.

**Fluentis Chat** permette di interagire con gli utenti abilitati a tale servizio di comunicazione, sia interno nel contesto aziendale, sia esterno per accedere al supporto di Fluentis. La chat è uno strumento molto utile per condividere informazioni rapidamente con un altro l'operatore, condividere documenti digitali o addirittura documenti attivi del gestionale. 

## Sezione inferiore

Nella parte inferiore dell'applicazione, la barra di stato contiene una serie di informazioni che spieghiamo di seguito:

**Attività**: permette un rapido collegamento con la gestione delle attività pending (derivanti dalle procedure di WorkFlow configurate);

**Calendario**: permette la gestione del calendario, che può essere agganciato con Exchange o Outlook.
:::note Sincronizzare il *calendario Outlook* con il *calendario Fluentis*. 

1. Configurare l'utente in **ARM** e definire nel tab **Altre Caratteristiche** la mail: 

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image01.png)


2. Successivamente, premendo il bottone *Percorso predefinito per Outlook*, verrà richiesto quale calendario configurare tra quelli che trova e il campo **Percorso predefinito per Outlook** verrà compilato automaticamente: 

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image02.png) ![](/img/it-it/guide/panels/status-bar/calendar-configuration/image03.png)


A questo punto, spostandosi in **Calendario** (barra di stato), dopo aver *riavviato* Fluentis, si noterà che la sincronizzazione con Outlook è avvenuta con successo:

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image04.png)


Vedi anche [Pianificazione a calendario delle risorse/transverse-procedures).
:::


**Dashboards**: permette una rapida sintesi dei fatti salienti della gestione con un interfaccia statistica molto potente e facilmente customizzabile;

**Trova**: permette di visualizzare tutti i comandi dell'applicazione. Usato insieme al campo di ricerca che si trova in alto, nel menu principale, possiamo trovare un comando specifico oppure dei comandi raggruppati;

**...**: permette all'utente di accedere, con clic destra, alla finestra **Navigation Options** per selezionare il numero massimo degli elementi da visualizzare (freccette su/giù per aumentare/diminuire) e per stabilire l'ordine in quale questi devono essere esposti (freccette su/giù per cambiare l'ordine). Usare il pulsante 'OK' per confermare le scelte e il pulsante 'Reset' per tornare alla situazione standard;

**Database**: le informazioni esposte fanno riferimento alla connessione alla database e sono, in ordine visualizzata: *Utente*, *Server\Database*, *Società*, (*Divisione*).