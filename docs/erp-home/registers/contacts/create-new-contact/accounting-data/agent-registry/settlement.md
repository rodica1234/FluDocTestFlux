---
title: Liquidazione
sidebar_position: 3
---

In questa finestra si impostano gli elementi generali di calcolo della provvigione:

**Causale ritenuta**: il campo è **obbligatorio** per valorizzare automaticamente anche la parte della ritenuta d'acconto applicata sul compenso agente. Senza questo campo non sarà possibile valorizzare automaticamente il compenso dalla liquidazione agente; Il campo è collegato alla tabella [Tipi Ritenutaconfigurations/tables/finance/withholding-tax-types).

**Periodo di liquidazione**: indica la periodicità della liquidazione agenti;

:::note[Nota]
Questo campo ha solo funzione informativa, non viene utilizzato concretamente nelle procedure di calcolo liquidazione provvigioni. 

In particolare, con il metodo del *pagamento avvenuto* la selezione delle provvigioni da liquidare sarà sempre "tutto" *fino alla data*, non è possibile selezionare quello che è maturato in uno specifico range di date e non è previsto un collegamento con il presente campo della periodicità.
I range di filtro presenti nella procedura di [creazione automatica liquidazionisales/agents/procedures/automatic-generation-of-commission-settlement) infatti sono riferiti alle date di ordini/bolle/fatture, non a livello di date di **pagamento**. 

Ciò è necessario perchè mentre per i documenti non c'è modo di aggiungerne di nuovi / modificare in periodi già liquidati, il discorso è diverso per i pagamenti: niente vieta di creare un pagamento con data registrazione in un periodo già chiuso in un calcolo liquidazione agenti (magari perché non non sono state riconciliate le banche o si è commesso un errore in una vecchia registrazione), dunque il dato verrebbe "perso" nei calcoli successivi.
:::

**Tipo di documento considerato per l'imponibile provvigionale**: criterio base per la maturazione della provvigione. E' possibile indicare che l'agente matura la provvigione sull'*ordine confermato*, sulla *consegna merce* (cioè ddt emesso), sull'*emissione fattura*, sulla *scadenza maturata* (indipendentemente dall'incasso o meno), sul *pagamento avvenuto* (cioè sulla base della quota incassata: se il cliente paga metà fattura, l'agente maturerà metà provvigione di quel documento), sul *pagamento totale* (cioè solo quando tutta la fattura è pagata l'agente matura tutta la provvigione).

:::danger[Attenzione]
Questa impostazione NON può essere cambiata una volta che si iniziano a creare le liquidazioni per l'agente nell'area vendite: sarà necessario creare una nuova anagrafica con la nuova impostazione (e utilizzare la procedura ‘Assegnazione agenti' per aggiornare le anagrafiche clienti massivamente in Home>Contatti).
:::


:::note Nota
la modalità **Pagamento Totale** è disponibile solo utilizzando la [procedura di calcolo delle liquidazioni agenti gestita dal modulo Amministrazione/professional-men/procedures/calculate-commissions) che non è disponibile nel calcolo del modulo Agenti in vendita.
:::

:::note Nota
la procedura di gestione delle 'Commissioni' (provvigioni) in contabilità consente una modifica 'al volo' delle logiche di maturazione degli agenti: questo perché la logica di maturazione è memorizzata a livello di singola fattura/documento.
:::