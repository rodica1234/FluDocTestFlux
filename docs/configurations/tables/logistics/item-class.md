---
title: Classi articolo
sidebar_position: 12
---

:::important A cosa serve
La Classe Articolo in Fluentis è un elemento cruciale per la gestione efficiente degli articoli. Essa consente di raggruppare articoli omogenei, facilitandone la rintracciabilità e permettendo analisi dettagliate.        
Ogni articolo viene identificato in modo univoco grazie alla combinazione tra la Classe, un dato precodificato, e un Codice alfanumerico. In alcuni casi, la classe articolo può essere configurata per generare automaticamente sia il codice che la descrizione degli articoli appartenenti a quella classe, agevolando così i processi di codifica.           
Inoltre, è possibile gestire le classi articolo, personalizzandole in base alle esigenze operative. Questo approccio garantisce una maggiore efficienza nella classificazione e nella gestione dei prodotti.     
:::

La tabella si trova sul percorso **Tabelle > Logistica > Classi articolo**.  

La tabella permette di gestire la codifica delle diverse classi articolo per poter effettuare il raggruppamento degli articoli.

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Classi articolo**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Classi articolo**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**.

*Campi specifici*

> **Codice**: indica il codice della classe articoli;  
> **Descrizione**: indica la descrizione della classe articoli;  
> **Cambiamento classe**: se attivo, permette di modificare la classe articolo di un articolo anche se già movimentato;  
> **Famiglia Prodotti**: indica il codice della famiglia prodotti che include la classe articolo;  
> **Descrizione Famiglia Prodotti**: indica la descrizione della famiglia prodotti che include la classe articolo.  

*Nella parte destra della form invece, sono presenti tre ulteriori tab:*

- **Codificatore articolo**: permette di guidare l’operatore nella codifica di un nuovo articolo per quella classe articolo; sarà possibile definire delle regole di codifica utilizzando i seguenti campi:   
> **Ordinamento**: indica l’ordinamento del singolo componente della codifica;   
> **Tipo**: indica il tipo di dato da utilizzare nella codifica;   
> **ExtraData**: indica il codice di extra data utilizzato nella codifica;   
> **Utilizza in codice**: se attivo, questo elemento sarà impiegato nel codice articolo;  
> **Utilizza in descrizione**: se attivo, questo elemento sarà impiegato nella descrizione dell’articolo;  
> **Proprietà codice**: indica la proprietà dell'oggetto business;   
> **Descrizione proprietà**: indica la descrizione della proprietà di oggetto business;  
> **Lunghezza**: indica la lunghezza del componente del codice;   
> **Separatore**: indica il carattere da usare come separatore;   
> **Char Riempimento Progressivo**: indica il carattere da utilizzare come riempimento del progressivo;   
> **Valore iniziale progressivo**: indica il valore iniziale del progressivo della codifica;   
> **Valore Fisso**: Indica il valore fisso da inserire nella codifica;   
> **Propagazione**: indica che è attiva la propagazione del dato;   
> **Obbligatorio**: indica che il dato è obbligatorio.   

- **Extra Data**: permette di gestire gli extra data legati a quella classe articolo;
*Per quanto riguarda le funzionalità presenti negli Extradata si rimanda all'articolo Extradata.*

- **Descrizione in lingua**: permette di inserire la traduzione della descrizione della classe articolo in una nuova lingua.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).