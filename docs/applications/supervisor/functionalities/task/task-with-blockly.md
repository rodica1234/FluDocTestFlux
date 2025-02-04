---
title: Task & Blockly
sidebar_label: Task & Blockly
sidebar_position: 2
---

:::info
Quando si apre la form di dettaglio, di default viene visualizzato l'editor Blockly e non l'editor testuale.  
E' possibile passare da modalità Blockly ad editor testuale (o viceversa) attraverso il drop-down **Tipo Script** che consente di selezionare la modalità desiderata.
:::

**Supervisor** sfrutta i blocchi personalizzati della libreria Blockly di Google per creare script in C#. Oltre alle categorie standard di Blockly (operatori logici, istruzioni di ciclo, operazioni matematiche, testi, date, liste, colori, variabili), le categorie personalizzate che possono essere trovate nella **Toolbox** sono:

- **Variabili contestuali a Supervisor**, contiene blocchi per selezionare variabili dal contesto corrente e per convertire un oggetto generico in una stringa/numero/...;

- **Dizionario**, contiene tutti i blocchi necessari per lavorare con la struttura dati di tipo <span style={{ fontFamily: 'Consolas' }}>Dizionario</span>;

- **Oggetti Fluentis**, suddivisi in tre sottocategorie:
     - **Commons**, contiene blocchi per eseguire operazioni comuni sugli *Oggetti Fluentis*.
     - **Read Only**, contiene blocchi specifici per eseguire operazioni di sola lettura sugli *Oggetti Fluentis*.
     - **Read Write**, contiene blocchi specifici per eseguire operazioni di lettura-scrittura sugli *Oggetti Fluentis*.
  
- **Accesso al database**, contiene blocchi che possono eseguire operazioni direttamente con il database, come chiamare stored procedure o leggere valori da recordset.

- **Attività**, a sua volta suddivise in categorie che portano lo stesso nome dei gruppi (gli stessi gruppi consultabili dalla form principale delle attività). I gruppi standard sono:
     - **Utilità**, che contiene tutte le [attività](../activity/activity-intro) previste a standard (l'utente non può aggiungere nuove attività o modificare quelle esistenti in questo gruppo);
     - **Esempi**, contiene tutti gli esempi di attività che possono guidare l'utente nella creazione di un nuovo *Task* personalizzato (l'utente non può aggiungere nuove attività o modificare quelle esistenti in questo gruppo, è necessario creare un nuovo gruppo con le proprie attività customizzate)

- **Globals**, contiene blocchi che possono recuperare **Parametri** globali o [liste di distribuzione](../distribution-list/distribution-list-intro)

- **Task Utility**, contiene script utili per tutte le *attività*;

Per aggiungere codice ad un *Task* con *Blockly*, trascinare e rilasciare i blocchi dalla *Toolbox* nel **Workspace**.

- **#STD** gestisce il codice all'interno del metodo dello script <span style={{ fontFamily: 'Consolas' }}>ExecuteTask()</span>;

Terminato l'inserimento del codice è necessario salvare il progetto e procedere alla sua compilazione mendiante l'apposito pulsante dedicato.

Il codice dello script generato, apparirà tra le due righe commentate (rinominate <span style={{ color: 'forestGreen' , fontWeight: 'bold' }}>// START WIZARD CODE</span> and <span style={{ color: 'forestGreen' , fontWeight: 'bold' }}>// END WIZARD CODE</span>).

![alt text](/img/it-it/applications/supervisor/supervisor10.png)