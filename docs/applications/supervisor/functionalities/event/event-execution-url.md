---
title: Url Esecuzione Evento
sidebar_label: Url Esecuzione Evento
sidebar_position: 4
---

Questa funzionalità offre la possibilità di eseguire un *Evento* da un'origine/app esterna.

All'interno della form principale dell'[Evento](event-intro), posto sulla ribbon, è presente il pulsante **Genera URL di esecuzione**. Selezionato l'*Evento* dalla griglia sottostante e poi cliccato, l'app visualizzerà una finestra, contenente:

- **Parametro task URL di reindirizzamento** si occupa di reindirizzare l'utente a un'altra pagina dopo aver eseguito l'URL. Questo parametro può essere impostato nel *Task*, all'interno del metodo *TaskCompleted* (aggiungendo il valore dell'URL al *Dictionary* e impostando un parametro *Task* senza il flag *IsInputParamter*)

- **Data di scadenza** dell'URL generato

- **Genera URL** conterrà l'URL generato tramite il click sul pulsante