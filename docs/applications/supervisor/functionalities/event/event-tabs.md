---
title: Tabs dell'Evento
sidebar_label: Tabs dell'Evento
sidebar_position: 1
---

:::info Info
La form di dettaglio dell'*Evento* si compone:
* Di un ribbon menu con cui è possibile salvare, create o eseguire un evento, gestire i profili e festire eventuali parametri.  
* Informazioni di testata, in cui impostare codice, task da eseguire e gruppo di riferimento con informazioni obbligatorie.
* Tre tab per la gestione dei parametri legati al task, il log di esecuzione e i parametri di schedulazione.
:::

### Tab Parametri
Il tab Parametri permette di gestire i parametri di input dell'evento.
Tramite la colonna Task Parameter si ha accesso alla lista di parametri del task selezionato, si procede associando un codice e un nome da Dizionario.

![alt text](/img/it-it/applications/supervisor/supervisor12.png)

### Tab Logs
Il tab LOG permette di visualizzare il log di esecuzione del task, sia per le esecuzione schedulate che per quelle
manuali.

![alt text](/img/it-it/applications/supervisor/supervisor13.png)


### Tab Schedulazioni
Il tab SCHEDULES permette di schedulare tramite il pulsante dedicato l'esecuzione dell'evento.
il popup permette di definire il tipo di occorrenza con la relativa parametrizzazione di dettaglio distinguendo tra:

**Una volta**
> Permette di indicare data/ora esatti per l'esecuzione.

**Giornaliero**
> Permette di indicare l'ora di avvio, ogni quanti giorni ripetere nel corso della giornata e in quale intervallo orario.

**Settimanale**
> Permette una pianificazione settimanale, in cui oltre alle impostazioni su esecuzione giornaliera possiamo definire per quante settimane ripetere e indicare i giorni esatti della settimana.

**Mensile**
> Permette una pianificazione mensile indicando i mesi in cui ripetere, i giorni del mese etc.  

Infine, sarà possibile indicare un’eventuale data di fine esecuzione con il flag End date e decidere se abilitare o meno il task in automatico.

![alt text](/img/it-it/applications/supervisor/supervisor14.png)