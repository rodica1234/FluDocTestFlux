---
title: Parametri Pagamenti Fornitore
sidebar_position: 3
---

I parametri del modulo **Pagamenti fornitore** si trovano in **Parametri > Tesoreria**.

Nei parametri del modulo Pagamenti fornitore si possono pre-impostare gli elementi di default da proporre nelle procedure del modulo. 

> **Percorso di creazione dei tracciati**: impostazione della  directory standard di creazione del tracciato telematico per i bonifici Italia. Si consiglia di creare una directory condivisa di rete all'interno di un server, per poter accedere da tutte le postazioni della procedura.ATTENZIONE: il campo è obbligatorio ma ***FluentisERP*** utilizza il sistema della gestione documentale integrato per memorizzare il file .xml del tracciato telematico per le distinte di pagamento. Il file sarà dunque prelevabile direttamente dalla form della distinta di pagamento.  
> **ABI Centro Applicativo**: obsoleto
> **Utilizzare il tasso di cambio storico**: con questa opzione, in caso di partite in divisa allora il controvalore in divisa società sarà gestito al cambio storico della partita, senza rilevazione di differenze cambio.
> **Imponi la banca d'appoggio presente in anagrafica del fornitore**: con il flag attivo verrà imposto l'utilizzo della banca d'appoggio inserita nell'anagrafica del fornitore (Griglia Banca d'appoggio) rispetto alla banca d'appoggio definita nella registrazione contabile, e collegata alla partita aperta, tramite la griglia Tipi Pagamento nell'anagrafica. Il parametro è visibile (e nuovamente disattivabile di volta in volta) nella procedura Creazione Automatica Pagamenti Fornitori. Non è visibile, invece, se si crea una nuova distinta di pagamento (Pagamenti Fornitori > Crea Pagamento Fornitore) e pertanto in questo caso va gestito da qui.  
> **Contabilizzazione da pagamenti fornitori**: impostato di default per contabilizzare l'operazione dal modulo Pagamenti fornitori ed escludere la chiusura della partita presente in distinta da registrazione contabile.
> **Gestione rif. Iban**: impostazione dell'obbligo di gestione dei codici IBAN: in questo caso il tracciato non sarà creato in caso manchino gli Iban di alcuni pagamenti in distinta. 
> **Tipi pagamento per avvisi ricevute**: nel caso si importino gli avvisi Riba passive, è necessario indicare il tipo di pagamento di default da assegnare alla distinta creata.