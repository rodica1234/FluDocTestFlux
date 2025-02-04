---
title: Listini
sidebar_position: 6
---

In tab offre la possibilità di collegare i *Listini di vendita* relativi al contatto per permettere la valorizzazione dei documenti.

**Ricerca del prezzo per priorità**: questo flag abilita la colonna delle priorità nella griglia degli articoli. Nel caso dei clienti, con questa opzione si potranno associare al cliente più listini (sia generali che personalizzati) che saranno valutati in cascata dalla priorità 1 alla priorità N;

**Calcolo listino per miglior prezzo**: con questa opzione vengono valutati tutti i listini applicabili ai clienti per selezionare quello che garantisce il miglior prezzo al cliente.

**Gestione prezzi da listino acq. del forn.pref. articolo**: questo flag, visibile solo per le anagrafiche clienti, abilita la gestione dei prezzi dal listino di acquisti del fornitore preferenziale per l'articolo.

**Gestione prezzi di vend. da listino fornitore:** questo flag, visibile solo per le anagrafiche fornitori, abilita la gestione dei prezzi basandosi sui prezzi del fornitore preferenziale.

### Listini
La griglia offre la possibilità di inserire i listini applicabili al cliente/fornitore, secondo le priorità e le date validità. 

Per i clienti è disponibile la scelta dei listini generali, mentre per i fornitori è presente solo la lista di listini fornitore personalizzati.

La *data validità* sarà utilizzata per individuare i listini che hanno, a loro volta, data inizio validità superiore a questa: dato che possono esserci più listini dello stesso tipo con date validità differenti, sarà individuato il prezzo dell'articolo dal listino più recente (anche senza andare a impostare una data di fine validità del listino stesso). Quindi tutte le volte che si andrà a creare un nuovo listino aggiornato per quel cliente, non servirà andare a sostituirlo anche in anagrafica, perché grazie alla data validità, verrà considerato direttamente il più recente.

:::note[Osservazione]
Per poter collegare un listino al cliente/fornitore, bisognerà prima creare il listino generale o personalizzato per cliente tramite la procedura di *Creazione listini*, e una volta creato entrare nell'*Anagrafica del contatto > tab Listini* e selezionare il listino all'interno della griglia *Listini*.
:::

### Sconti di listino

Per ogni listino cliente/fornitore è possibile associare, sulla destra, una struttura di scontistica aggiuntiva, specifica per il soggetto in uso. Ad esempio, il cliente1 potrebbe avere il listino generale (che già prevede sconto 10% su alcuni articoli) con in più uno sconto cassa 2% (che sarà applicato in più, quindi ci saranno articoli con 10%+2% e altri con solo 2%) e un cliente2 con listino generale + 3% (che avrà quindi 10%+3% e 3%).

### Listini di vendita con aggiornamento automatico da ordini fornitori

Collegato al listino fornitore c'è la possibilità di associare una lista di listini di vendita che si aggiornano automaticamente al variare del listino fornitore stesso, secondo un criterio di incremento (percentuale) e di arrotondamento.

*Pulsanti specifici*:
> **Cancella listini**: per cancellare i listini selezionati.   
> **Cancella sconti per listino**: per cancellare gli sconti selezionati del listino.  

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).