---
title: Parametri Rischio Cliente
sidebar_position: 6
---

**PREMESSA:**

Il modulo rischio cliente legge gli ordini clienti, DDT , fatture, partite, effetti a scadere (in pratica tutto quello che occupa fido e crea esposizione). 

Partite ed effetti sono letti in ogni caso, i documenti (OC, DDT, FV) sono una scelta da effettuare con apposito flag nelle varie tabelle (Tipo ordine cliente, Tipi DDT di vendita, Tipi Fattura di vendita)

Il flag da apporre per la lettura nello specifico dei vari tipi di documento è il flag **Fido**

E' presente anche il flag **Escludi blocco**: anche se il documento genera fido verrà escluso dal blocco. (anche se occupa fido non viene mai bloccato ma segnalato si)


**LOGICA GENERALE:**

Gli ordini sono considerati se sono stampati e confermati + flag nel tipo (non evasi oppure evasi forzatamente)
Evasi forzatamente = il residuo non sarà consegnato e l’ordine si considera chiuso anche se non lo sarebbe.

Le Bolle devono essere stampate e non fatturate
Le Fatture se stampate o no dipende dal parametro e non contabilizzate (altrimenti è partita)


Nei **parametri** del modulo Rischio Clienti si possono pre-impostare gli elementi di default da proporre nelle procedure del modulo.

> **N. giorni oltre la scadenza per effetti presentati al salvo buon fine**: questo campo consente di definire per quanti giorni considerare, l'effetto presentato s.b.f, non incassato dopo la sua data scadenza.  
> **N. giorni oltre la scadenza per effetti presentati al dopo incasso** | Questo campo consente di definire per quanti giorni considerare, l'effetto presentato al dopo incasso , non incassato dopo la sua data scadenza.  
> **Da data calcolo (saldi contabili, fatture, ddt)**: è la data di partenza del calcolo. Documenti con data antecedente non saranno considerati.  
> **Visualizza insoluti contabilizzati**: l'impostazione di questo flag visualizzerà nel modulo anche gli importi degli insoluti contabilizzati, indipendentemente anche dallo stato incassato. Ha semplicemente valore informativo.  

**Moltiplicatore valutazione fido**: valore utilizzato nella form [**Utilizzo fido**treasury/customer-risk/use-credit). per determinare l'importo del campo *Fido Stimato*.


*Base di calcolo per determinare il rischio cliente*:  
> **Saldo contabile**: con tale impostazione il calcolo del fido sarà effettuato sulla base del Saldo contabile del cliente.  
> **Partite aperte**: con tale impostazione il calcolo del fido sarà effettuato sulla base delle partite aperte del cliente.  
> **Considera partite da registrazioni provvisorie**: se attivo il flag precedente il calcolo considera anche eventuali movimenti derivanti da registrazioni provvisorie.  
> **Blocca stampa fisica**: nel caso in cui il fido cliente preveda il blocco documento, questo flag blocca la possibilità di stampare fisicamente il documento bloccato. Se non è impostato il documento si può stampare ma il flag ‘stampato' non sarà assegnato al documento.  
> **Considera fatture da stampare**: tiene in considerazione, nel calcolo del fido, le fatture create ma non stampate. Se non è attivato la logica di default considera le fatture solo se stampate (con il flag stampato attivo).  