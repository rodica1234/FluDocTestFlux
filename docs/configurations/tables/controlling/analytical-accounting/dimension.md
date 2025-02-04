---
title: Dimensione
sidebar_position: 5
---

:::note Percorso
**Tabelle > Controlling > Contabilità analitica > Dimensione**

Nota:
Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).

:::

---

:::tip Nota
La tabella è d'interesse solo nelle società con il flag *Controlling* attivo.
:::


Il concetto di Dimensione è spiegabile come un criterio di analisi e coerente suddivisione di COSTI e RICAVI all’ interno dell’ azienda.

E' possibile creare e movimentare molteplici dimensioni di analisi contemporaneamente.

![Immagine](/img/it-it/configurations/tables/controlling/analytical-accounting/dimension.png)

**ESEMPIO:** Tipicamente alla contabilità analitica viene associata la dimensione *INDUSTRIALE*, dove l’ azienda viene suddivisa nelle varie entità o funzioni aziendali, ovvero il CENTRO AZIENDALE AMMINISTRATIVO, IL CENTRO DIREZIONALE, IL CENTRO DEL COMMERCIALE e poi i CENTRI PRODUTTIVI. 

Relativamente a questa dimensione tutti i costi e ricavi aziendali vengono assegnati per arrivare ad un' analisi di FULL COSTING. 

Parallelamente abbiamo le *COMMESSE*, ovvero le aziende che lavorano su COMMESSA/PROGETTO; le commesse sono dimensioni parallele e quindi saranno collegati tutti i ricavi DIRETTI di commessa e saranno trasferiti dalla dimensione industriale i movimenti relativi ai centri ausiliari e generici (direzione, amministrazione ecc.). 

Abbiamo poi la possibilità di definire dimensioni **specifiche** dove l’ azienda vuole identificare certi valori, separandoli dalle logiche normali, perché vuole tenere nota di alcuni tipi di costi. 

**ESEMPIO:** l’ azienda vuole tenere traccia delle varie FIERE a cui partecipa, che rappresentano un investimento importante e definisce una dimensione *FIERE* assegnando il centro FIERA MILANO (esempio) e attribuendo non solo il costo della  fiera alla dimensione industriale ma anche alla dimensione FIERA poiché vuole suddividere ed analizzare **parallelamente** un dato di quell’ entità specifica. Non imposta in questo caso il flag di quadratura obbligatoria perché vuole solo un ulteriore elemento di analisi.

La dimensione dunque può essere vista anche come un' ETICHETTA che andiamo ad agganciare ai centri. 

Possiamo, attraverso i cost driver, ribaltare i dati (costi e profitti) da una dimensione all’ altra. 


---

:::note CAMPI DELLA TABELLA

- Il flag **QUADRATURA OBBLIGATORIA** va ad identificare che questa deve avere quadratura con la contabilità. Non è più la contabilità generale che va quadrata al centro di costo/profitto o commessa ma va quadrata rispetto alla singola dimensione d’analisi che prevede quadratura. Il test di quadratura sarà effettuato solo se la causale contabile di movimentazione prevede a sua volta il blocco al salvataggio di movimenti non quadrati a livello di valorizzazione dei centri;
- Il flag **COMMESSA** indica che la riga dell’analitica viene associata in via prioritaria al progetto per il quale il costo o ricavo è movimentato in modo diretto, e da questo progetto si deriverà un centro di costo da valorizzare, centro che potrà essere un codice generico uguale per tutti i progetti oppure magari un centro legato ad una caratteristica specifica del progetto selezionato;
- Il flag **VINCOLO CONTO/CENTRO** va a dire che si vuole limitare quello che l’utente può fare quando registra in contabilità un centro di questa dimensione: dato che nel piano dei conti possiamo agganciare ad ogni sottoconto di costo e di ricavo uno o più centri aziendali, con questa opzione dico che quello che è inserito nel piano dei conti non può essere modificato dall’utente. In sostanza, un costo di produzione non mi può diventare un costo assegnato al centro direzionale. Il vincolo può essere legato al singolo centro, piuttosto che sulle categorie dei centri;
- Il flag **ABILITA COMMESSA**, invece, serve per poter collegare una commessa di riferimento anche nelle righe della dimensione industriale/direzionale normale, per evitare di gestire due dimensioni differenti.
:::

