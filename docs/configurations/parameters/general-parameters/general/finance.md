---
title: Business Areas - Amministrazione
sidebar_position: 1
---

**Creazione file Intraweb o Entratel** (codice FS-FI-Intrastat-ItalianFileType): questo parametro, in passato visibile solo nel database, permette di settare direttamente da interfaccia il tipo di tracciato di esportazione dei modelli intrastat, al fine di renderlo compatibile rispettivamente con l'applicazione Intraweb dell'agenzia delle dogane oppure con Entratel dell'agenzia delle Entrate (due canali alternativi possibili per l'invio dei modelli). La differenza , tecnicamente, risiede in particolare nel track record di testa del file richiesto per l'invio Entratel.
Il parametro, normalmente, è già impostato e può essere gestito semplicemente nella colonna VALORE, dove, come riportato nella nota, il flag in condizione FALSE (0 - disattivato) = Intraweb, mentre TRUE (1 - attivo) = Entratel. In caso di creazione manuale (problemi tecnici o retrocompatibilità), settare la colonna Tipo su Booleano, la data inizio validità e il campo valore. Il campo *Codice* nella griglia master è FS-FI-Intrastat-ItalianFileType.

**Utilizza il peso del documento nell'Intrastat acquisti / Vendite** (codice FS-FI-Intrastat-UseDocumentWeightInPurchase e FS-FI-Intrastat-UseDocumentWeightInSale): Abilitando (nel campo Valore) il flag (parametro di tipo booleano) rispettivamente per ognuno dei due parametri 
la procedura automatica di creazione intrastat da fatture rileva i pesi degli articoli dal campo di ‘NetWeight’ delle righe documento di acquisto / vendita, anzichè i pesi teorici dell’anagrafica articolo come di default.
La contabilizzazione della fattura di vendita, se la causale contabile prevede la gestione intrastat, a sua volta porta in contabilità i pesi del documento: in questo modo anche la procedura di acquisizione da registrazioni contabili avrà il peso del documento.

Questi parametri possono essere abbinati ad un ulteriore parametro (**visibile solo nel database**)	con cui
Fluentis porta in sezione Bis/Ter… i valori dei pesi così come presenti in creazione automatica, senza operare arrotondamenti di riga. Gli arrotondamenti che saranno gestiti nella fase successiva con il pulsante di raggruppamento presente in sezione Bis/Ter.

La query da eseguire è:

        update fluentis.SH_CompanyParameters set shcp_value = cast(0 as smallint)
        
        --update fluentis.SH_CompanyParameters set shcp_value = cast(1 as smallint)
        	
        from fluentis.SH_CompanyParameters
        		
        join fluentis.SH_LocalizationParameters on SHLP_Id = SHCP_Parameter_SHLP_Id
        	
        where SHLP_Code like 'IN-IntrastatRoundByOperation'

**Blocca la contabilizzazione quando la data di registrazione è precedente alla data di ricezione** (codice FS-FI-Posting-BlockPostingBeforeReceiveDate): abilitando questo parametro, la registrazione delle fatture di Acquisto da file Sdi non saranno consentite in data antecedente alla data ricezione Sdi stessa.

**Consentire la creazione di solleciti da partite chiuse** (codice FS-FI-DunningLetters-AllowClosedMaturities): con questo parametro, la generazione solleciti potrà creare anche lettere di avvenuto pagamento
