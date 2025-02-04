---
title: Parametri Ri.Ba
sidebar_position: 5
---

I parametri del modulo Ricevute bancarie si trovano in **Parametri > Tesoreria**

Nei parametri relativi si possono pre-impostare gli elementi di default da proporre nelle procedure del modulo. In particolare:

**Percorso di creazione dei tracciati Riba**: Impostazione della  directory standard di creazione del tracciato telematico per le ricevute bancarie. Si consiglia di creare una directory condivisa di rete all'interno di un server, per poter accedere da tutte le postazioni della procedura.  
**Riferimenti del cliente**: E' la ragione sociale della società attiva che sarà inserito nel file Cbi di presentazione.  
**Descrizione standard del credito**: E' possibile codificare, sfruttando i codici indicati tra parentesi, il testo da inserire nel file quale descrizione del documento di riferimento dell'emissione riba. Si tratta di un testo del tipo Ft. Nr. (2) del (3).  
**Inserisci carattere di controllo finale**: Per alcuni programmi di remote banking è necessario un ritorno a capo finale nel file, impostare questo flag se necessario.
**Senza riferimento per importazione insoluti**: In alcuni programmi di remote banking è previsto un aggiornamento automatico delle anagrafiche sulla base dei dati inseriti nel file riba. Il campo che sfruttiamo per la procedura di importazione insoluti può causare un continuo aggiornamento delle anagrafiche che si può evitare con questo flag (cosa che comporta la non utilizzabilità della procedura di importazione insoluti stessa).
**Gestione seconda descrizione**: Con questo flag la descrizione del cliente inserita nel file sarà composta come prima descrizione + seconda descrizione.

