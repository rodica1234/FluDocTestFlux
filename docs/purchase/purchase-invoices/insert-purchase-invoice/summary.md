---
title: Riepiloghi
sidebar_position: 5
---

Nelle diverse sezioni di questo tab sono presentate le informazioni principali dell'intero documento e alcuni pulsanti specifici.

## Sconti finali

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

## Spese

Sono proposte le spese inserite nell'anagrafica contatto, nel tab *Spese/Sconti*. In questa griglia eventuali spese devono essere inserite in positivo, eventuali sconti in negativo.      

Questi elementi vengono applicati alla totalità del documento e non sono distribuiti tra le righe degli articoli. Possono includere costi aggiuntivi, sconti globali, o maggiorazioni applicate all'intero documento. Se impostati nell'anagrafica articolo, vengono automaticamente proposti al momento della creazione del documento.

- **Tipo/Descrizione**: permette di scegliere le tipologie di spesa (predefiniti nella tabella [Tipi speseconfigurations/tables/general-settings/expenses-types)), attribuendo alla tipologia la percentuale di spesa da applicare.  
- **Importo spesa**: indica il valore della spesa espresso nella divisa del documento.    
- **IVA**: indica l'aliquota IVA da applicare alle spese inserite.   
- **Percentuale/Valore**: indica se calcolare le spese con una percentuale oppure con un valore monetario predefinito. Selezionando *valore* l'importo della spesa va inserito sotto la voce omonima.      
- **Percentuale**: valore numerico della percentuale di spesa.  

:::note Nota
Se il *Tipo spesa* inserito ha il flag [ripartitoconfigurations/tables/general-settings/expenses-types#flag-di-aggancio-alle-logiche) attivo, durante il carico della fattura a magazzino la spesa sarà ripartita su tutti gli articoli in base agli importi totali di ogni riga articolo. Il risultato della ripartizione della spesa è visibile nella [registrazione di magazzinowarehouse/stock-records/record).    
1. Se gli articoli hanno un prezzo: la spesa totale sarà ripartita proporzionalmente sugli importi netti di ciascun articolo; il risultato verrà aggiunto al prezzo iniziale dell'articolo nel campo *Totale importo* della registrazione. Se per alcune righe l'importo è 0, esso sarà considerato come 1 per consentire una ripartizione della spesa su tutti gli articoli.   
2. Se tutti gli articoli hanno prezzo pari a 0: la spesa verrà distribuita equamente tra tutte le righe articolo e, a partire da questa distribuzione, sarà calcolato l'*importo movimento/importo gestionale* nella registrazione, tenendo conto delle quantità di ciascun articolo.   
:::


## Riepiloghi IVA

Viene proposto il riepilogo IVA del documento, per ogni codice IVA.

## Riepilogo scadenze

Rappresenta il riepilogo delle scadenze del documento, per ogni *tipo* e *soluzione* di pagamento.  
- **Numero**: valore progressivo della riga.  
- **Pagamento**: rappresenta il codice alfanumerico del *Tipo pagamento* ripreso dalla *Testata del documento > tab Pagamenti*.  
- **Importo**: Importo della scadenza calcolato. Può essere forzato manualmente, nel qual caso si attiva automaticamente il successivo flag *Modifica manuale*. (Scattano in automatico dei controlli e avvisi sulla quadratura tra i valori delle scadenze e il totale fattura)
- **Data scadenza**: Data della scadenza calcolata. Può essere forzata manualmente, nel qual caso si attiva automaticamente il successivo flag *Modifica manuale*.
- **Spese di incasso**: Campo in cui riportate le spese di incasso calcolate.
- **IVA**: da applicare alle spese di incasso (può essere impostata anche manualmente)
- **Causale pagamento**: è possibile inserire direttamente in fattura una causale contabile che da luogo ad una scrittura automatica di incasso / pagamento. NB prestare attenzione al template della causale perchè utilizzerà i conti presenti anche senza sottoconto, motivo per il quale è presente il campo seguente.
- **Conto sottoconto cliente / fornitore** conto che usa per incassare/pagare (cassa o banca ad esempio) la scadenza andando a sovrascrivere il conto presente nella causale contabile di pagamento (o incasso).
- **Segno**: solo le scadenze che hanno questo flag vengono poi gestite in pagamento con causale e conto impostato.
- **Modelli riferimento pagamento**: Modello di creazione del codice di pagamento. In alcune localizzazioni estere ogni scadenza in fattura prevede un codice attribuito da chi fattura: questo codice è strutturato secondo alcuni modelli specifici (tabella MB_PaymentReferenceModels), in modo da poter costruire il codice con un algoritmo.
- **Codici modelli pagamento**: Questo è il codice (strutturato come da modello precedente) da riportare nella partita e quindi poi nei pagamenti che si inviano alla banca, in modo che questa comunichi al beneficiario qual è la scadenza che è stata pagata (e così automatizzare l’import dai movimenti bancari con chiusura partita). Da qui viene compilato dentro la partita e nel file Sepa.
- **Data limite pag anticipato** Questo è un campo previsto nel tracciato fatture Sdi, la data limite per poter applicare lo sconto finanziario.
- **Tipo sconto**: Tipo di sconto finanziario.
- **Valore sconto**: Valore dello sconto finanziario su incasso.


## Altri campi

**Note finali**: è un campo libero che può essere compilato dall'utente anche con l'ausilio dell'*Help note codificate*.


## Totali documento

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />
