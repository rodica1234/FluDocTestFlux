---
title: Parametri insoluti
sidebar_position: 2
---

I parametri del modulo **Insoluti** si trovano in **Parametri > Tesoreria**.

Nei parametri degli insoluti si possono pre-impostare gli elementi di default da proporre nelle procedure del modulo.

*Tipo di registrazione*:  
> **Conto transitorio + spese di protesto**: con tale impostazione si procederà alla riapertura della partita cliente su un conto transitorio ,per lo stesso importo dell'effetto d'origine, e addebitare le spese al conto bancario.   
> **Cliente + spese di protesto**: si consiglia l'impostazione della scelta su ‘Cliente +spese di protesto ' al fine di poter riaprire la partita cliente ,per lo stesso importo dell'effetto d'origine, e addebitare le spese al conto bancario.  

*Gestione partite*:  
> **Riapertura della partita relativa alla fattura**: si consiglia l'impostazione della scelta su ‘Riapertura della partita relativa alla fattura'. Con questa opzione, infatti la procedura aprirà una nuova partita, ma con gli stessi riferimenti al numero e data documento della fattura d'origine. In caso di effetto riepilogativo di più documenti sarà inserito il primo della lista, ma nelle note della partita sarà gestita la lista di tutti i riferimenti.  
> **Apertura di una nuova partita**: l'opzione alternativa, apertura di una nuova partita, andrà invece a creare una nuova partita con numero e data documento attribuiti sulla base del numero e data dell'effetto andato insoluto. 

*Spese*:

La sezione è da impostare nel caso si voglia avere un default da proporre per la creazione della fattura al cliente per le spese di insoluto.

> **Tipo fattura**: consente di impostare il tipo di fattura da utilizzare.  
> **Tipo pag.**: consente di impostare il tipo pagamento da utilizzare.  
> **Unità di misura**: consente di impostare il l'unità di misura della riga articolo.  
> **Sol. pagamento**: consente di impostare la soluzione di pagamento per generare la scadenza relativa.  

*Spese di rivalsa*:
> **Contabilizzazione a costo spese di rivalsa**: FluentisERP contabilizzerà il costo delle spese di rivalsa riaddebitate al cliente
> **Tipo fatturazione**: consente di impostare il fatturato vendite ovvero la contropartita di ricavo da associare alla riga fattura.  
> **Aliq. IVA**: consente di impostare l'aliquota iva. 

*Recupero bolli*:
> **Tipo fatturazione**: consente di impostare il fatturato vendite ovvero la contropartita di ricavo da associare alla riga fattura.  
> **Aliq. IVA**: consente di impostare l'aliquota iva. 

*Spese di rivalsa*:
> **Tipo fatturazione**: consente di impostare il fatturato vendite ovvero la contropartita di ricavo da associare alla riga fattura.
> **Aliq. IVA**: consente di impostare l'aliquota iva. 

*Parametri*:
> **Causale di contabilità**: è la causale da proporre nelle procedure di contabilizzazione insoluti.  
> **Conto spese di protesto**: è il conto da utilizzare per rilevare le spese addebitate dalla banca.  
> **Conto transitorio**: è il sottoconto di transito che sarebbe utilizzato per la contabilizzazione nel caso sia stato impostata la gestione ‘Conto transitorio +spese di protesto '. Si consiglia di compilare comunque il campo (magari con lo stesso conto delle spese) in quanto sarà richiesto obbligatoriamente per l'esecuzione della procedura di contabilizzazione.  
> **Conto transitorio banca**: è il  conto transitorio banca da utilizzare nel caso in cui l'insoluto sia relativo a effetti non presentati con la procedura (es. in caso di utilizzo del modulo DocFinance). 
 
:::danger Attenzione
Valorizzando questo campo il conto impostato verrà utilizzato, indipendentemente dal settaggio dei flag sopra descritti nella sezione *Tipo di registrazione*, con priorità rispetto al conto di contropartita normalmente movimentato (il conto effetti se l'effetto è *emesso*, il conto s.b.f in testata distinta se l'effetto è *presentato*, ed il conto banca C/C se l'effetto è *accreditato*).

**Si consiglia pertanto di non valorizzarlo se non necessario.**
:::

> **Conto addebito spese a cliente**: è il  sottoconto di ricavo da utilizzare nella procedura di contabilizzazione insoluti su cessione nel caso in cui sia stata scelta l'opzione di addebito spese al cliente.  
> **Tipo interesse**: all'insoluto può essere collegato un tasso di interesse di riferimento. In caso di cambiali può essere simulato un calcolo iniziale di interessi tra la data scadenze prevista del titolo e la data di rilevazione dell'insoluto.  
> **Creazione singola partita**: questo flag consente di aprire un'unica partita per l'insoluto di una riba creata da N partite diverse. Normalmente non si utilizza, in modo da riaprire lo storico delle partite con i riferimenti originali

:::danger Attenzione
da non impostare se si gestiscono Agenti con maturazione su pagamento avvenuto o totale
:::

> **Data scadenza uguale a data scadenza effetto**: attivando questo parametro la data di scadenza della partita riaperta a fronte dell'insoluto viene imposta pari alla data di scadenza dell'effetto, anzichè alla data dell'insoluto.
