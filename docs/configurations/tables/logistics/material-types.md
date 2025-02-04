---
title: Tipi materiale
sidebar_position: 6
---

La tabella si trova sul percorso **Tabelle > Logistica > Tipi materiale**.

In questa tabella è possibile gestire la codifica dei diversi *Tipi materiale* di imballaggio usati nella [Gestione Conai-flow/conai).

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Tipi materiale**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Tipi materiale**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**.  

Nella griglia superiore vengono codificati i *Tipi materiale*. I campi obbligatori richiesti dal programma sono il **Codice** e la **Descrizione**.  

*Campi specifici*: 

> **Codice materiale Conai**: codice alfanumerico che indica il tipo di materiale di cui è composto l'imballaggio (cioè Acciaio, Alluminio, Carta, Legno, Plastica, ecc.);     
> **Classi articolo**: indica la [Classeconfigurations/tables/logistics/item-class) a cui appartiene l'articolo;   
> **Articolo per tassa di riciclo**: indica un codice articolo fittizio da utilizzare per l’inserimento della riga *Spesa Conai* in bolla/fattura (se non viene indicato un codice articolo, il materiale non sarà valido per la configurazione Conai negli articoli di vendita/acquisto);   
> **Descrizione articolo**: indica la descrizione dell'*Articolo per tassa di riciclo*;    
> **Note**: annotazioni libere.  

Nella griglia inferiore è possibile definire i *Costi di riciclo* associati a ciascun materiale inserito nella tabella superiore, ovvero le tariffe da applicare all’interno dei vari *range di date*, con l’**Unità di misura** da applicare: questa deve essere coerente con l’unità di misura che si utilizzerà all’interno degli articoli di vendita e degli articoli fittizi Conai.

Per tutto quanto non dettagliato in questo documento sul funzionamento della *Gestione Conai* in Fluentis fare riferimento al seguente link [Gestione Conai-flow/conai).