---
title: Modificare componenti
sidebar_position: 6
---

Questa form permette di modificare massivamente gli assiemi creati in precedenza, utilizzando tre procedure diverse in base al tipo di modifica che si desidera apportare tra: sostituzione/modifica, inserimento e annullamento.

### Sostituzione e modifica

Selezionando dalla combo **Tipo gestione** l'opzione **Sostituzione/Modifica**, è necessario inserire nell'area di filtro un componente, selezionandolo con l'apposito *Help articoli* posto vicino al campo **Componente**.

Filtrare per un solo articolo; non è possibile inserire come filtro di ricerca solo la classe articolo o solo una parte del codice o della descrizione.
Dopo aver impostato il criterio di ricerca, cliccando sul pulsante **Ricerca** posto sulla ribbon bar, la procedura visualizza nella griglia tutte le distinte base all'interno delle quali è presente il componente inserito nell'area di filtro, eseguendo quindi una *Implosione componente*.

Nella griglia dei risultati vengono visualizzate classe, codice, descrizione e variante dell'assieme, inizio e fine validità del legame tra il componente selezionato nell'area di filtro e l'assieme visualizzato nella griglia, la quantità del componente e la sua unità di misura di utilizzo, sempre contestualmente al legame assieme/componente.

Scegliere una delle distinte visualizzate, oppure, selezionare con la combinazione *CTRL+click* mouse, una lista di distinte base su cui eseguire la procedura di 'Sostituzione/Modifica'.

Selezionare, nella sezione in basso della finestra, il nuovo componente da sostituire a quello selezionato nella sezione di filtro. 
Per selezionare questo nuovo componente è possibile utilizzare l'*Help articoli*, inserendo i campi di *classe, codice, descrizione* ed eventualmente *variante* del nuovo componente, per il quale deve essere inserita obbligatoriamente anche la quantità (e se la quantità è *fissa* oppure *variabile*) e opzionalmente l'*unita di misura di utilizzo*, la *quantità di scarto*, la* % di scostamento positiva e negativa*, l'inizio e la fine validità, la *priorità*, le *note* del nuovo componente.

Tramite l'utilizzo dei flag *Alternative* e *Fasi* è possibile decidere se inserire nel nuovo legame anche le alternative e le fasi di lavorazione legate al nuovo componente.

E' possibile anche attivare, se necessario, il flag *Movimentabile* e il flag *Fittizio* (per la spiegazione dettagliata dei vari campi da compilare si rimanda all'articolo [Gestione struttureerp-home/registers/production/bill-of-materials/assemblies/structure-management).

Tramite questa procedura è possibile inserire, nella sezione in basso, lo stesso componente inserito nella sezione di filtro: in questo caso verrà semplicemente eseguita una modifica delle informazioni già presenti per quel componente all'interno delle distinte selezionate nella griglia.

Terminato l'inserimento delle informazioni, eseguire la procedura di **Sostituzione/Modifica** tramite l'utilizzo del pulsante di elaborazione ![](/img/neutral/common/execute.png).

### Inserimento

Selezionando dalla combo **Tipo gestione** l'opzione **Inserimento**, è necessario inserire nell'area di filtro l'assieme, selezionandolo con l'apposito *Help articoli* posto vicino al campo **Assieme**, all'interno del quale si vuole inserire un componente.

In questo caso non è necessario filtrare per un solo articolo, quindi è possibile inserire come filtro di ricerca anche solo la classe articolo o solo una parte del codice o della descrizione, (i campi di filtro sono i medesimi della procedura di (*Modifica/Sostituzione*). Poi cliccando sul pulsante **Ricerca** posto sulla ribbon bar, la procedura visualizza nella griglia tutte le distinte base corrispondenti al filtro di ricerca impostato. Nella griglia dei risultati vengono visualizzate classe, codice, descrizione e variante dell'assieme.

Scegliere una delle distinte visualizzate, oppure, selezionando con la combinazione *CTRL+click* mouse, una lista di distinte base su cui eseguire la procedura di Inserimento.

Selezionare, nella sezione in basso della finestra, il nuovo componente da inserire all'interno delle distinte base selezionata nella sezione di filtro. Per selezionare questo nuovo componente è possibile utilizzare l'*Help articoli*, inserendo i campi di *classe, codice, descrizione* ed eventualmente *variante* del nuovo componente, per il quale deve essere inserita obbligatoriamente anche la *quantità* (e se la quantità è *fissa* oppure *variabile*) e opzionalmente l'unita di misura di utilizzo, la quantità di scarto, la % di scostamento positiva e negativa, l'inizio e la fine validità, la priorità, le note del nuovo componente.

Tramite l'utilizzo dei flag *Alternative* e *Fasi* è possibile decidere se inserire nel nuovo legame anche le alternative e le fasi di lavorazione legate al nuovo componente.

E' possibile attivare, se necessario, il flag *Movimentabile* e il flag *Fittizio* (per la spiegazione dettagliata dei vari campi da compilare si rimanda all'articolo [Gestione struttureerp-home/registers/production/bill-of-materials/assemblies/structure-management).

Terminato l'inserimento delle informazioni, eseguire la procedura di **Inserimento** tramite l'utilizzo del pulsante di elaborazione ![](/img/neutral/common/execute.png).

### Annullamento

Selezionando dalla combo **Tipo gestione** l'opzione **Annullamento**, è necessario inserire nell'area di filtro il componente che si vuole eliminare dalle distinte base, selezionando con l'apposito *Help articoli* posto vicino al campo **Componente**, ed opzionalmente anche l'**Assieme** (o la sua classe o una parte del codice o della descrizione) dal quale si vuole eliminare il componente.

Poi cliccando sul tasto **Ricerca**, posto sulla ribbon bar, la procedura visualizza nella griglia tutte le distinte base corrispondenti al filtro di ricerca impostato. Nella griglia dei risultati vengono visualizzate classe, codice, descrizione e variante dell'assieme, inizio e fine validità del legame tra il componente selezionato nell'area di filtro e l'assieme visualizzato nella griglia, la quantità del componente e la sua unità di misura di utilizzo, sempre contestualmente al legame assieme\componente.

Scegliere una delle distinte visualizzate, oppure, selezionando con la combinazione *CTRL+click* mouse, una lista di distinte base su cui eseguire la procedura di Annullamento.

La sezione in basso della finestra risulta disattivata nel caso di **Annullamento**.

Una volta selezionato il componente da eliminare è possibile, tramite l'utilizzo del tasto di Elaborazione ![](/img/neutral/common/execute.png), eseguire la procedura di **Annullamento**.

*Pulsante specifico*:

> **Elaborazione**: pulsante che permette di attivare la procedura selezionata nella combo iniziale della finestra (quindi o la procedura di Sostituzione/Modifica, o la procedura di Inserimento oppure la procedura di Annullamento).

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).