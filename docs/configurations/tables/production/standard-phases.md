---
title: Fasi standard
sidebar_position: 7
---

Questa tabella corrisponde all'anagrafica delle fasi che vengono utilizzate nei cicli di lavoro; in questa tabella vengono quindi codificate tutte le fasi con i relativi dati allo scopo poi di poter essere proposte e selezionate all'interno del ciclo di lavoro.

La tabella consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Fasi standard**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Fasi standard**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**. 

Per il nuovo record si devono inserire almeno i campi obbligatori richiesti dal programma: il **Codice**, **Descrizione fase/sottofase**, il **Centro di lavoro** e l’**Unità di misura dei tempi**.        
Quando viene inserito il centro di lavoro, questo riporta anche le informazioni inerenti alla macchina e al gruppo manodopera inseriti nella tabella dei centri di lavoro, i quali possono essere comunque variati manualmente sulla fase stessa dall’utente.           
Inoltre, bisogna fare attenzione ad inserire dei codici **Fase** e **Sottofase** univoci altrimenti viene visualizzato un messaggio di avviso.

Uno dei dati più importanti da inserire in questa tabella è il **Tipo di fase/sottofase**: *Interna* oppure *Esterna*. Nel caso in cui sia interna, significa che viene prodotta internamente allo stabilimento produttivo, mentre se si tratta di una fase esterna, significa che viene data in conto lavoro ad un fornitore e questa genererà direttamente un ordine di conto lavoro dedicato all’esecuzione della stessa.

*Campi specifici*: 

**Codice**: indica il codice della fase standard;  
**Fase**: indica il numero progressivo di fase;  
**Sottofase**: indica il numero di sottofase a parità di numero di fase;  
**Descrizione fase/sottofase**: indica la descrizione della fase/sottofase;  
**Tipo fase/sottofase**: indica se la fase/sottofase sia interna o esterna;  
**Fase produttiva**: indica se si tratta di una fase di tipo produttivo;  
**Movimentabile**: indica che la fase genererà dei movimenti di magazzino (scarichi e carichi);  
**Controllo qualità**: se attivato, questo flag indica che questa fase è soggetta a tutta una serie di analisi inerenti al controllo qualità;  
**Centro di lavoro**: indica il codice del CdL;  
**Tempo fisso**: indica che il CdL lavora a tempo fisso, il tempo di lavorazione dell’articolo non dipende dal numero di pezzi;  
**U.M. tempi**: indica l’unità di misura dei tempi della fase;  
**Tempo attesa/coda**: indica il tempo necessario che bisogna attendere alla fine della fase prima di poterla eseguire nuovamente;       
**Tempo attrezzaggio**: indica il tempo di attrezzaggio prima di iniziare la lavorazione;   
**Tempo riattrezzaggio**: indica il tempo di riattrezzaggio, cioè il tempo necessario per riattrezzare la macchina tra la produzione di uno o più pezzi;  
**Macchina**: indica il codice della macchina;  
**Tempo macchina**: indica il tempo di impiego della macchina in questa fase;                       
**Numero macchine**: indica il numero di macchine impegnate contemporaneamente dalla lavorazione;  
**Numero pezzi**: indica il numero di pezzi prodotto ad ogni esecuzione di quella fase;              
**Gruppi manodopera**: indica il codice del gruppo di manodopera;  
**Tempo assegnato**: indica il tempo impiegato dalla manodopera in quella fase;            
**Numero operai**: indica il numero di operai che stanno svolgendo la fase;           
**Manutenzione**: indica se la fase è di tipo manutenzione;        
**Costo**: indica il costo della fase per produrre i pezzi indicati nel campo Numero pezzi;    
**Descrizione terzista**: indica la descrizione del terzista (è abilitato solo se la fase è di tipo **Esterno**);  
**Ubicazione**: indica l'ubicazione di magazzino associata a quella fase; questo significa che tutti gli articoli impiegati in quella fase saranno presenti in quell'ubicazione;    
**Tipo fatturato acquisto**: indica il tipo fatturato d'acquisto riportato a livello della riga articolo presente nell’ordine di conto lavoro (è abilitato solo se la fase è di tipo **Esterno**);      
**Descrizione tipo fatturato acquisto**: indica la descrizione del tipo fatturato d'acquisto riportato a livello della riga articolo presente nell’ordine di conto lavoro (è abilitato solo se la fase è di tipo **Esterno**);      
**Tipo piano di controllo**: indica il tipo di piano per il controllo qualità (solo se abilitato il flag **Controllo qualità**);  
**Anno del piano di controllo**: indica l’anno del piano per il controllo qualità (solo se abilitato il flag **Controllo qualità**);  
**Codice piano di controllo**: indica il codice del piano per il controllo qualità (solo se abilitato il flag **Controllo qualità**);  
**Descrizione del piano di controllo**: indica la descrizione del piano per il controllo qualità (solo se abilitato il flag **Controllo qualità**);  
**Data creazione**: indica la data di creazione del record;  
**Data modifica**: indica la data di ultima modifica del record;  
**Note**: Campo libero per l’inserimento di note;  
**Descrizione centro di lavoro**: indica la descrizione del CdL;  
**Descrizione macchina**: indica la descrizione della macchina;  
**Descrizione gruppo MDO**: indica la descrizione del gruppo di manodopera.  
      

:::note Nota
Tutte le fasi esterne devono sempre avere i flag **Fase produttiva** e **Fase movimentabile** attivi.
:::


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).