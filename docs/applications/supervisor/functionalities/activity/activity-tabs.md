---
title: Tabs dell'Attività
#hide_title: true
sidebar_label: Tabs dell'Attività
sidebar_position: 1
---

:::danger Nota
Una volta aperta la form di dettaglio dell'attività, nella parte superiore sono presenti alcuni parametri standard come *Codice*, *Nome*, *Descrizione*, *Data Crazione*, *Data Ultima Modifica*, *Gruppo* e *Tipo Attività*. Per questi ultimi due, bisogna prestare molta attenzione, perchè determinano come si andrà a comporre l'attività.
:::

### Tabs attività

La form delle attività è composta da una form di ricerca dedicata composta da:
* un **ribbon menu** per la gestione delle principali operazioni standard.
* un **filtro standard**.
* una **griglia dei risultati**, che mostra la lista delle attività divise in gruppi e sottogruppi.

![alt text](/img/it-it/applications/supervisor/supervisor6.png)

### Parametri Collegabili

Tutte le tipologie di Attività hanno dei *Parametri Collegabili* (sia di input che di output), questi parametri, diversamente da quelli globali, hanno una visibilità locale all'intenro dell'attività, task o evento.
Questi permettono di definire tutti i parametri che verrano collegati all'attività in input e in output.  
Questa configurazione verrà poi associata al blocchetto fruibile tramite Task permettendo di gestire i parametri.

Per creare un parametro è necessario popolare:
* **Codice** > riporta il codice del parametro.
* **Nome** / **Descrizione** > per indicare nome e descrizione localizzate in base al dizionario.
* **Input parameter** > permette di definire se il parametro deve essere letto in input o output.
* **Required** > indica i parametri obbligatori, che quindi verrano esposti automaticamente sul blocchetto.
* **Type** > indica il tipo di dato da associare al parametro.
* **Global Parameter** > permette di utilizzare un parametro globale per valorizzare il parametro specifico.

### Configurazione Attività

Il tab **Configurazione Attività** permette di configurare l'attività specificandone i parametri richiesti per il suo funzionamento.

In base alla tipologia d'attività, ovvero su che tipologia è basata (Script, Datasource, Run Report, SQL Query, Stored Procedure, Mail Template), saranno disponibili diverse opzioni di parametrizzazione.

Nel pagina [Tipi di attività](./activity-types.md) si analizzano tutte le tipologie.