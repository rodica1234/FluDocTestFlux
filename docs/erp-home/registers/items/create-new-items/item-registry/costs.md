---
title: Costi
sidebar_position: 9
---

:::important A cosa serve
Nel tab Costi dell'anagrafica articoli di Fluentis, gli utenti possono registrare vari tipi di costi associati, tra cui il costo ultimo e il costo medio ponderato, che vengono aggiornati automaticamente in base alle movimentazioni di magazzino. Il costo ultimo rappresenta l'ultimo prezzo d'acquisto registrato, mentre il costo medio è il risultato delle movimentazioni di magazzino, utili per calcolare il valore delle rimanenze.       
Il tab consente anche di definire un costo standard, utilizzato come riferimento per l'anno e solitamente aggiornato annualmente. Inoltre, è possibile inserire il prezzo di vendita, da cui partire per la creazione di listini di vendita.          
Queste informazioni sono fondamentali per la valorizzazione delle rimanenze di magazzino e per la pianificazione finanziaria, contribuendo a una gestione più efficace degli articoli in magazzino.
:::

All'interno di questo Tab si inseriscono diversi costi associati all'articolo.

Questi sono campi editabili nei quali si andranno a definire:

**Costo ultimo** e il **Costo medio**: per costo ultimo si intende l'ultimo costo di acquisto (il più recente), mentre per costo medio ponderato si intende il costo medio che deriva dalle movimentazioni di magazzino. Per entrambi i costi la causale utilizzata per la movimentazione del magazzino deve avere il flag su aggiornamento *Costo medio/Costo ultimo* attivato ed anche il flag su *Aggiorna costo articolo* e su *Interesse fiscale*, in questo modo i relativi movimenti verranno presi in considerazione del calcolo dei costi.  

**Costo standard/costo standard successivo**: il costo standard è un costo impostato manualmente o dalla procedura di calcolo costo e indica il costo di riferimento per un dato articolo da usare durante l'anno. Solitamente è un costo che viene aggiornato all'inizio o alla fine dell'anno. Per gli articoli di acquisto solitamente corrisponde al costo medio mentre per gli altri articoli viene calcolato dalla procedura di [Calcolo costo/cost-calculation/cost) che si trova nell'area *Controlling*, come somma dei costi dei materiali e dei costi delle fasi di produzione.

Tutti questi costi possono essere usati per le valorizzazioni della distinta base, delle rimanenze di magazzino oppure (per gli articoli di acquisto) per la valorizzazione degli ordini di produzione (e relativi movimenti di carico) quando si carica a magazzino l'articolo di un ordine di produzione.

**Prezzo di vendita**: prezzo base da cui si può partire a creare un listino di vendita nel caso in cui si vada a considerare un listino per esempio nazionale di partenza. Nel caso in cui non vi siano listini per questo articolo, nei documenti questo articolo prenderà questo prezzo. (salvo per i documenti di reso nei quali l'articolo prende di default il prezzo indicato nel costo ultimo da verificare bene) (non viene molto utilizzato).

**Categoria di sconto/Configurazione fasce di prezzo/Formule di aggiornamento delle politiche di sconto**: sono dei dati prettamente commerciali che servono per l'aggiornamento dei prezzi.

Verrà utilizzato nei documenti non riporterà mai gli sconti provenienti dai listini in cui è contenuto e non verranno calcolate le provvigioni sulle vendite di questo articolo.
