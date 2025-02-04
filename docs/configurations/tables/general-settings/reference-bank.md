---
title: Banca d'Appoggio
sidebar_position: 1
---

In questa tabella si inseriscono le banche d'appoggio che possono essere richiamate nelle anagrafiche Clienti e Fornitori (e Anagrafica Banche) per gestire diverse automazioni, quali soprattutto inserimento nelle stampe (es. coordinate bancarie di pagamento in una fattura attiva) e canalizzazione dei flussi finanziari riferiti alle partite aperte ecc.

All'interno di questa tabella è possibile inserire sia la banche della società, sia le banche della controparte (cliente o fornitore). 

:::tip
Si consiglia di utilizzare ad esempio una codifica alfabetica per le banche della società e le banche di clienti e fornitori con una codifica numerica in modo da differenziarle opportunamente.

Inoltre è possibile inserire sia righe complete di codice IBAN e/o SWIFT (consigliato per le banche della società) sia righe complete di soli codice ABI e CAB (consigliato per le banche di controparte per le quali IBAN e SWIFT possono essere indicati nei campi della griglia presente in anagrafica).

:::


Se la riga presente nella tabella Banca d'appoggio è completa di IBAN e/o SWIFT, oltre che di ABI e CAB, richiamando tale riga tramite la combobox i dati saranno riportati nella griglia in anagrafica, diversamente, saranno riportati solo ABI e CAB, ma sarà sempre possibile aggiungere i dati mancanti direttamente nella griglia. 

Ciò è consigliabile per le banche di controparte al fine di evitare di codificare nella tabella Banca d'appoggio troppe righe utilizzate solo per un unico cliente o fornitore. E' preferibile indicare solo i dati dello sportello bancario (ABI e CAB) presso il quale potrebbero avere il conto corrente diversi clienti o fornitori.

L'inserimento di una banca può essere eseguita anche attraverso un doppio click nei campi abi/cab **di un'anagrafica Cliente o Fornitore** per aprire l'help di ricerca tra le agenzie bancarie nazionali (Help che si appoggia ad una tabella denominata *ABI CAB*), dalle quali selezionare quella del caso. La selezione memorizzerà il dato nella presente tabella e nell'anagrafica, dove è possibile completare subito con i dati di conto corrente, cin, iban, swift.