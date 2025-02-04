---
title: Sdi - Chiusura documenti
sidebar_position: 4
---

Con il bottone **Sdi - Chiusura documenti** viene aperto il modulo per collegare manualmente eventuali ordini e DDT di acquisto alle fatture generate dagli xml ricevuti. Questa procedura viene inoltre avviata automaticamente quando viene effettuato questo collegamento dalla maschera [Documenti acquisti in entrata/sdi-documents/incoming-purchase-documents).          
Il modulo è suddiviso in due sezioni principali: una a sinistra, dedicata alla visualizzazione dei DDT e degli Ordini, e una a destra, che mostra gli articoli della fattura. 

La griglia di ordini e DDT contiene le seguenti colonne:        
- Numero Riga Fattura Collegata
- Tipo Documento
- Numero
- Data
- Numero Riga
- Classe Articolo
- Codici Articolo
- Descrizione Articolo
- Quantità
- Prezzi
- Sconto Totale
- Importo Netto
- Prezzo Unitario Netto        

Le righe già collegate agli articoli della fattura saranno evidenziate in verde per facilitarne l'identificazione.

La griglia delle fatture contiene le seguenti colonne:        
- Numero riga
- Classe Articolo
- Codici Articolo
- Descrizione Articolo
- Quantità
- Prezzi
- Sconto Totale
- Importo Netto
- Prezzo Unitario Netto      

Le righe già collegate agli articoli di DDT o Ordini saranno evidenziate per facilitare la verifica.

In queste griglie vengono visualizzate solo le righe dei DDT o degli Ordini che non sono state eseguite o forzate in precedenza. 
Per eseguire il collegamento, è necessario inserire il numero di riga della fattura nella colonna *Numero Riga Fattura Collegata* e cliccare nella barra degli strumenti **Associa**. 

:::note
Lo stesso numero di fattura non può essere collegato contemporaneamente a un DDT e a un Ordine. 
:::

Con il pulsante **Associa**, le righe con il "Numero Riga Fattura Collegata" verranno eseguite nei DDT o negli Ordini corrispondenti.        
Il pulsante **Rollback Associa** permette di annullare il collegamento, ripristinando lo stato di esecuzione corretto per i DDT o gli Ordini.

Durante la fase di collegamento, il sistema esegue alcuni controlli per garantire la congruenza dei dati:       
- Prezzi: Differenze tra i prezzi riportati negli ordini/DDT e quelli della fattura generata automaticamente.
- Sconti: Discrepanze tra i valori totali degli sconti.
- Prezzo Netto Unitario: Differenze tra il prezzo netto unitario indicato nella fattura e quello riportato nei DDT/Ordini.
- Importo Totale: Differenze tra l'importo totale della fattura e la somma degli importi totali delle righe eseguite nei DDT/Ordini.

Se uno o più di questi controlli falliscono, il collegamento non viene effettuato automaticamente e l'errore viene riportato nella griglia degli errori, con l'indicazione del numero di riga della fattura e la descrizione dell'errore.