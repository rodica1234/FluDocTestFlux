---
title: Importazione Movimenti contabili
sidebar_position: 2
---

Il foglio excel (template) per l'importazione dei movimenti contabili nel modulo Amministrazione permette di popolare sia la sezione iva, sia la sezione contabile delle registrazioni e viene pertanto compilato in maniera adeguata a seconda se si stiano importando scritture contabili che coinvolgono l'iva o semplicemente scritture di prima nota.


SE si importa registrazioni di fatture: 
1^ riga = testata 
2^ riga = libro giornale + Registro IVA
3^ riga (e seguenti) = movimenti del libro giornale

Prima nota
1^ riga = testata
Altre righe = libro giornale

Esempio

![](/img/it-it/applications/bizlink/import-mov-contabili.png)

**Data Reg / Data Comp:** sono le date registrazione e competenza della testata registrazione contabile. 

**Num Reg.** Attenzione, deve essere libero nel db di destinazione oppure la funzione andrà a sovrascrivere quello che trova senza controllo (è una update sql)

**Causale:** utilizzare un codice di causale già presente e coerente con la registrazione (esempio una causale IVA se importo registrazioni di fatture)

**Registro iva:**: utilizzare il codice di un registro già presente

**Protocollo IVA**: utilizzare un protocollo libero

**Divisa; Valuta; Euro** completare sempre tutto anche se è tutto in euro e non c’è il cambio. Compilare sempre anche l'altra colonna con 0,00 (Esempio se compilo la colonna Dare 1000,00 nella colonna adiacente Avere metto 0,00)

**Conto / Sottoconto:** utilizzare codici di conti già presenti

---
**Dati IVA**

Caricare il **codice** dell'aliquota che deve essere già presente nel db

Compilare tutti i dati quindi imponibile iva e anche iva indetraibile (eventualmente con valore 0,00)

---

Centro Aziendale: Opzionale, se intendo caricare anche il collegamento al centro di costo (già presente)

Numero commessa: Opzionale, se intendo caricare anche il collegamento

---

**Nella tab Parametri** si può mettere il valore 1 su **Ricalcolo**, in questo modo fa un ricalcolo dei dati a partire dal libro giornale e quindi genera le partite aperte dai dati delle condizioni di pagamento se ad esempio mancano perché non sono stati importati separatamente. Altrimenti non fa alcun ricalcolo e le partite ad esempio non si creeranno se non vengono importate. (Opzione consigliata per ragioni di performance e tempistiche di elaborazione soprattutto con molte righe)

Attenzione: i conti devono già esistere nel db altrimenti il messaggio di errore non mi dice quale conto manca ma si riferisce sempre all’ultima riga del foglio excel