---
title: Evasione DDT
sidebar_position: 2
---

La procedura permette la creazione di una fattura di acquisto mediante evasione di uno o più DDT di acquisto.

Nella testata del documento, premendo il pulsante **Evasione DDT** si aprirà la form in cui è possibile filtrare i DDT intestati al fornitore del documento. È quindi possibile inserire gli articoli all'interno della fattura, evadendo totalmente o parzialmente i DDT.

Per poter utilizzare questa procedura vi sono delle condizioni iniziali che devono essere rispettate:

- i/il fornitore dei DDT deve essere lo stesso della fattura;
- il DDT che si vuole evadere deve avere attivo il flag *Controllato* e non deve essere già *Valorizzato*.

*Procedimento*:

Si dovrà andare ad impostare nella testata della nuova fattura, il [Tipo fatturaconfigurations/tables/purchase/purchase-invoices-type) che si vuole creare e il *Fornitore*. Una volta inseriti questi dati, bisognerà cliccare sul pulsante *Evasione DDT* per aprire la form di evasione.

I filtri per fornitore e divisa verranno riportati in automatico in base al fornitore inserito nella fattura.

Nell'area di filtro è possibile scegliere se visualizzare i dati in una *Griglia*, una *Struttura gerarchica* oppure entrambe le soluzioni.

> La **Struttura gerarchica** permette di avere una suddivisione più chiara dei DDT disponibili per l'evasione e degli articoli contenuti in ciascuno di essi. Permette inoltre la selezione massiva tutti gli articoli contenuti all'interno di un DDT semplicemente attivando il flag sulla riga del DDT.   
> La **Griglia** permette una maggiore personalizzazione della form mediante aggiunta di campi da *Object navigator*. In questo caso la selezione massiva va effettuata mediante l'utilizzo dei tasti della tastiera e cliccando sul pulsante *Seleziona/Deseleziona* nella ribbon bar.

Una volta impostati tutti i filtri desiderati, cliccando sul pulsante di *Ricerca* verranno visualizzati nella parte sottostante tutti i DDT controllati e non ancora valorizzati oppure valorizzati parzialmente.

Nella griglia di risultati, l'utente ha poi la possibilità di:

 - Selezionare tutti o alcuni degli articoli proposti: per farlo basterà selezionare il flag presente all'inizio della riga articolo. La *Quantità da evadere* sarà automaticamente impostata uguale alla *Quantità residua*.
 - Selezionare alcuni articoli per una *quantità parziale*. In questo caso si dovrà andare a modificare la *Quantità da evadere*.

Per completare la procedura bisognerà poi cliccare sul pulsante *Trasferimento*, che andrà a riprendere tutti i dati presenti nei DDT seezionati e li riporterà nella fattura.

*Pulsanti specifici*:

> **Ricerca**: permette di cercare i DDT disponibili per il trasferimento.  
> **Trasferimento**: permette di trasferire gli articoli/ordini selezionati.  
> **Seleziona tutto**: permette di selezionare tutti gli articoli dalla lista.  
> **Deseleziona tutti**: permette di deselezionare tutti gli articoli dalla lista.  
> **Seleziona**: permette di attivare i flag per tutte le righe selezionate con il mouse.   
> **Deseleziona**: permette di disattivare i flag per tutte le righe selezionate con il mouse.

:::important Ricorda
Nel caso di più evasioni parziali per una determinata riga articolo all'interno della stessa fattura è possibile scegliere se sommare le quantità in un'unica riga nella fattura oppure se mantenere righe distinte, rispettivamente disattivando o attivando il flag **Evasione quantità articolo non sommata** nella tabella dei [Tipi fatture di acquistoconfigurations/tables/purchase/purchase-invoices-type).
:::
