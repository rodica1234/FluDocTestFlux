---
title: Tipi progetto
sidebar_position: 12
---

La tabella è accesssibile da **Tabelle > Gestione Progetti > Tipi progetto**

La tabella contiene le possibili tipologie di **Progetto**. E' composta da una parte di filtro in cui si può ricercare attraverso la descrizione del tipo, e da due griglie: una in cui verranno elencate tutte le tipologie di progetto inserite (basterà cliccare sul pulsante di ![](/img/neutral/common/search.png) ricerca nella ribbon bar per visualizzarle) ed una in cui potranno essere indicati i costi/ricavi predefiniti per ogni tipologia progetto da utilizzare nel calcolo SAL.

![](/img/it-it/configurations/tables/projects/proj-type.png)

Sempre all'interno di questa form è possibile aggiungere nuove tipologie di progetto all'interno della griglia, cliccando sul pulsante ![](/img/neutral/common/new.png) New: in questo modo verrà aggiunta una nuova riga all'interno della griglia dove si potranno definire le seguenti informazioni:

**Tipo**: è il codice del tipo progetto;

**Descrizione Tipo Progetto**: è la descrizione del tipo progetto;

**Numerazione**: è la numerazione associata al progetto configurata appositamente;

**Struttura gerarchica**: questo flag se abilitato permette ai progetti di avere una struttura gerarchica, quindi multilivello; 

**Tipo ordine**: è possibile indicare un tipo ordine associato;

**Descrizione Tipo Ordine**: è la descrizione del tipo ordine associato; utilizzato nel caso di creazione progetti da ordine.

**Tipo Fattura**: è possibile indicare un tipo fattura associato, necessario per la fatturazione dei progetti;

**Descrizione Tipo Fattura**: è la descrizione della fattura associata;

**Template**: questo flag indica che il tipo progetto è un template, quindi non potrà essere richiamato in altri documenti, ma utilizzato solamente come modello per la generazione di nuovi progetti.  

**Sicurezza del Progetto abilitata**: se flaggato, abilita la possibilità di scegliere, nella tab Permessi Utente della Testata del Progetto, gli utenti che hanno il diritto di Read Only oppure Read Write sul progetto (gli altri utenti non potranno accedervi); se non flaggato, permette la modifica del Progetto a tutti gli utenti;

**Tipo richiesta d’acquisto**: è possibile associare un tipo di richiesta d’acquisto; in questo modo sarà possibile generare le richieste di acquisto direttamente da progetto. 

Sono poi presenti alcuni flag nella griglia, che indicano le varie tab da mostrare per il tipo progetto.

**Attività**: tab contenente tutti i dati principali ed obbligatori per la riga di progetto, come articolo, quantità e prezzo ed il riepilogo dei costi;

**Pianificazione Servizio**: tab relativa alle date di inizio/fine previsti, la % di avanzamento, i tipi intervento da utilizzare ed eventuali legami con altre wbs;

**Risorse**: tab di pianificazione risorse;

**Materiali**: tab contenente l'elenco materiali con il relativo costo;

**Fasi**:

**Dati**: tab contenente informazioni generiche relative ai codici per il calcolo SAL di progetto, riferimento a ticket, commesse di produzione, contatti crm. 

**Avanzamento**: 

**Agenti**: tab di inserimento Agenti relativi al progetto.

**Fatturazione**: tab per compilare la scaletta delle rate di fatturazione per la riga di progetto;

**Extra Data**: tab per gestire gli extra data;

**Documenti Allegati**: tab per gestire gli allegati.

**Gannt**: tab generale che mostra il diagramma di Gannt relativo al progetto. 

**Fattura di Anticipo**: tab per gestire le fatture di anticipo legate ai progetti.

**Fatturato Obbligatorio**: nel caso di riga progetto fatturabile e flag fatturato obbligatorio, verrà bloccato il salvataggio.

**Ricalcolo data inizio-fine**: se abilitato, permette la modifica automatica della data di inzio e fine pianificazione nelle righe wbs di progetto. Le date si aggiorneranno in base alla quantità di riga se la UM corrisponde alla UM dei giorni impostata nei parametri progetto, oppure in inserimento nuove risorse nella tab risorse della riga progetto.

Nella griglia sottostante è possibile costruire la valorizzazione del SAL nell’ambito dello stato avanzamento lavori. Per ogni progetto è possibile indicare una serie di codici, che rappresenteranno documenti da includere nel calcolo dello stato avanzamento lavori. Questi codici verranno poi proposti nelle singole righe di progetto. 
Dopo aver selezionato una riga dalla prima griglia, i campi da compilare nella seconda sono:

**Tipo origine Costo/Ricavo**: contiene l'elenco dei codici di costi/ricavi previsti per il calcolo SAL per i progetti di quello specifico tipo;

**Descrizione**: è la descrizione dei costi/ricavi;

**Tipo**: indica se è costo o un profitto.

**Espressione filtro**: se il campo non è valorizzato, vengono considerati tutti i documenti previsti per il specifico codice. Se invece si vuole escludere determinati documenti (ad es. per tipologia, numerazione, etc) è possibile configurare un'espressione filtrante. 

![](/img/it-it/configurations/tables/projects/revenue.png)
