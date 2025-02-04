---
title: Tipo codice lotto
sidebar_position: 26
---

:::important A cosa serve
La tabella Tipi Codice Lotto di Fluentis rappresenta uno strumento fondamentale per la personalizzazione e la gestione dei codici lotto utilizzati nella logistica e nella tracciabilità dei prodotti. Questa tabella consente di definire vari tipi di codice lotto in base alle specifiche esigenze aziendali, con l'obiettivo di ottimizzare le operazioni di gestione dei materiali e garantire una corretta identificazione dei lotti.

All'interno di questa tabella, è possibile inserire nuovi codici lotto, specificando sia un codice identificativo che una descrizione associata. Inoltre, è possibile configurare parametri come il valore iniziale del numero progressivo e la gestione dei caratteri alfabetici, permettendo una maggiore flessibilità nella composizione dei codici lotto. È importante notare che ogni tipo di codice deve essere associato all'anagrafica articolo per garantire una corretta integrazione durante le procedure di creazione automatica del lotto.

La configurazione di questi codici lotto non solo facilita il controllo e la tracciabilità, ma si rivela essenziale anche in contesti di gestione multi-magazzino, dove la rintracciabilità delle giacenze diventa fondamentale. Gli utenti possono così navigare attraverso diverse sezioni della tabella per definire in dettaglio le caratteristiche, le associazioni e i progressivi dei lotti, contribuendo a una gestione più efficiente e accurata dei materiali all'interno dell'azienda.
:::

La tabella si trova sul percorso **Tabelle > Logistica > Tipo codice lotto**.

In questa tabella è possibile codificare i *Tipi di codice lotto* personalizzandoli in base alle esigenze.

**Ricerca Codici lotto**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati nell'aria di risultato.

**Inserimento Codici lotto**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**. 

È necessario inserire **Codice** e **Descrizione** del tipo codice lotto, abilitare o meno il flag **Riempire valore progressivo** per riempire i valori mancanti nella numerazione, ed inserire il valore iniziale del progressivo numerico nel campo **Inizia valore progressivo** e quello alfabetico nel campo **Inizio valore carattere**. Ovviamente, il primo sarà il valore iniziale del **Numero progressivo**, mentre il secondo sarà il valore iniziale usato per i **Caratteri alfabetici**.

Il **Tipo codice lotto** deve poi essere agganciato all'*Anagrafica articolo* nell'apposito ed omonimo campo situato nel tab [Lotti e serial numbererp-home/registers/items/create-new-items/item-registry/lots-and-serial-number), in modo che nelle procedure che creano automaticamente il codice lotto per l'articolo in questione il lotto stesso venga generato secondo le regole impostate qui.

Al di sotto della tabella principale, sono presenti tre tab:   
- **Dettagli tipo codice lotto**
- **Dettagli tipo codice lotto definizione progressivo**  
- **Dettagli tipo codice lotto dei valori chiave progressivi**    

**Dettagli tipo codice lotto**
nella tabella *Codice predefinito*, sono presenti tutti i valori che è possibile utilizzare per la composizione del lotto che stiamo creando, che nello specifico sono:

> *Classe*: riporta la classe dell'articolo;    
> *Matricola*: riporta il codice articolo;     
> *Caratteristica*: riporta la caratteristica dell'anagrafica articolo;     
> *Cat. Merceologica*: riporta la categoria merceologica dell'anagrafica articolo;    
> *Tipo Articolo*: riporta il tipo articolo dell'anagrafica articolo;    
> *Variante*: riporta la variante dell'articolo;    
> *Numero progressivo*: è un progressivo di tipo numerico;          
> *Caratteri alfabetici*: è un progressivo di tipo alfabetico, al contrario del *Numero progressivo* che è numerico;        
> *Giorno Data Inserimento*: riporta il giorno della data inserimento;    
> *Mese Data Inserimento*: riporta il mese della data inserimento;    
> *Anno Data Inserimento*: riporta l'anno della data inserimento;    
> *Giorno Data Scadenza*: riporta il giorno della data di scadenza;    
> *Mese Data Scadenza*: riporta il mese della data di scadenza;    
> *Anno Data Scadenza*: riporta l'anno della data di scadenza;     
> *Tipo Lotto*: riporta il tipo lotto dell'articolo;     
> *Associazione Anno Lettera*: riporta il valore associato all'anno nella tabella [Associazione anno - letteraconfigurations/tables/general-settings/year-letter-association);    
> *Associazione Mese Lettera*: riporta il valore associato al mese nella tabella [Associazione mese - letteraconfigurations/tables/general-settings/month-letter-association);    
> *Nomignolo fornitore*: riporta il nomignolo presente in anagrafica del fornitore;          
> *Numero Bolla Acquisto*: riporta il numero della bolla di acquisto;     
> *Numero Fattura Acquisto*: riporta il numero della fattura di acquisto;    
> *Lotto Fornitore*: riporta il numero del lotto fornitore.    

Ognuno di questi, a seconda delle esigenze, deve essere poi spostato nella tabella *Dettagli tipo codice lotto* tramite l'uso degli appositi pulsanti presenti nella ribbon bar. 
Per ciascuna voce aggiunta, è possibile definire la *Lunghezza* e il *Carattere di riempimento*.

*Pulsanti specifici*:
> **Sposta: Predefinito -> Dettaglio**: permette di aggiungere una delle voci presenti nella tabella *Codice predefinito* alla tabella *Dettaglio tipo codice lotto*. Questo pulsante si abilita solamente dopo aver selezionato una riga nella tabella *Codice predefinito* del tab *Dettaglio tipo codice lotto*;          
> **Sposta: Dettaglio -> Predefinito**: permette di rimuovere una delle voci presenti nella tabella *Dettaglio tipo codice lotto* riportandola nella tabella *Codice predefinito*. Questo pulsante si abilita solamente dopo aver selezionato una riga nella tabella *Dettaglio tipo codice lotto* del tab *Dettaglio tipo codice lotto*;               

**Dettagli tipo codice lotto definizione progressivo** 

In questo tab è possibile definire quali delle voci presenti nella tabella *Codice predefinito* debbano comporre la radice del codice lotto, quindi quella parte del codice che rimarrà fissa mentre varierà il progressivo. In questo caso non è possibile selezionare le voci *Numero progressivo* e *Caratteri alfabetici* perchè essendo dei progressivi variano continuamente, mentre è possibile selezionare tutte le altre voci.

*Pulsanti specifici*:
> **Sposta: Predefinito -> Definizione progressivo**: permette di aggiungere una delle voci presenti nella tabella *Codice predefinito* alla tabella *Definizione progressivo*. Questo pulsante si abilita solamente dopo aver selezionato una riga nella tabella *Codice predefinito* del tab *Dettaglio tipo codice lotto definizione progressivo*;          
> **Sposta: Definizione progressivo -> Predefinito**: permette di rimuovere una delle voci presenti nella tabella *Definizione progressivo* riportandola nella tabella *Codice predefinito*. Questo pulsante si abilita solamente dopo aver selezionato una riga nella tabella *Definizione progressivo* del tab *Dettaglio tipo codice lotto definizione progressivo*;  

**Dettagli tipo codice lotto dei valori chiave progressivi**  

In questa tab vengono visualizzati tutti i valori degli ultimi progressivi relativi ad ogni singola radice del codice.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).