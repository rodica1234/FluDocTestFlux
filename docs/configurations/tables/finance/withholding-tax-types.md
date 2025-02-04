---
title: Tipi ritenuta
sidebar_position: 34
---
:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

In questa tabella vengono ricercate ed inserite le tipologie di ritenuta d'acconto da associare ai compensi percipienti (gli agenti di commercio sono a loro volta anche dei percipienti) per la corretta gestione delle contabilizzazioni e degli altri adempimenti fiscali connessi.

I campi della form sono:

**Codice ritenuta**: codice alfanumerico di 5 caratteri di identificazione della ritenuta; normalmente si richiama il codice tributo ministeriale.

**Descrizione ritenuta**: descrizione del codice ritenuta.

**[Codice tributoconfigurations/tables/finance/tax-code)**: richiama la tabella dei codici tributo: questa è precompilata al momento dell'installazione e contiene la lista completa dei codici tributo previsti per il modello F24.

**Causale di contabilità generale**: questo campo prevede l'impostazione obbligatoria per registrare il compenso in contabilità: si tratta normalmente di una causale iva, tipo un normale acquisto Italia. E' comunque prevista anche la valorizzazione di causali non Iva per gestire i casi di gestione ritenute a collaboratori saltuari non titolari di partita IVA.

**Tipi ritenuta fatturazione elettronica**: in questo campo è possibile inserire il codice specifico del tipo ritenuta valido ai fini della fatturazione elettronica attiva (ovvero quando la società in uso è soggetta a ritenuta d'acconto subita da parte del proprio cliente / cessionario /committente). Per codifica in vigore si rinvia alle specifiche tecniche aggiornate sulla fatturazione elettronica scaricabili dal sito dell'Agenzia delle Entrate.

**Quadro in Mod. 770**: è un campo obbligatorio: il modello 770, comunque, non è gestito nella procedura.

**Codice di pag. in mod. 770**: codice di pagamento in 770 è un campo non obbligatorio e non utilizzato.

**Tipi partite**: la scelta è tra partite nette e partite lorde. La distinzione è relativa alla creazione delle scadenze al netto o al lordo di tutti i tributi a carico del percipiente: l'impostazione standard prevede le partite nette, al fine d'avere uno scadenziario con l'effettivo importo da pagare al professionista, nel qual caso la causale contabile di riferimento non dovrà avere il blocco alla registrazione di movimenti sbilanciati con le partite.

**Tipo ritenuta**: prevede l'opzione a titolo d'acconto o a titolo d'imposta: la distinzione non ha attualmente alcuna rilevanza sull'operatività del modulo, ma è rilevante a livello di CU (Certificazione unica) per valorizzare i due campi *Ritenuta acconto* o *Ritenuta imposta*.

**Codice pagamento**: è il codice del pagamento della ritenuta. Questo dato è ripreso nella procedura di elaborazione della CU (certificazione unica) e per la sua gestione si consiglia di riferirsi alle relative istruzioni ministeriali scaricabili dal sito dell'Agenzia delle Entrate. 

**Codice altre somme non soggette a ritenuta**: il campo permette di contrassegnare in modo specifico, per ogni tipologia di ritenuta, il codice (generalmente numerico come da istruzioni ministeriali dell'Agenzia delle entrate) relativo alle somme non soggette alla ritenuta d'acconto. Se il campo non viene compilato, all'atto dell'elaborazione della CU nel [**modulo relativo**/declarations/declarations/withholding-tax-certification), sarà compilato di default il *codice 21* per quanto riguarda le righe dei compensi percipienti inserite nei documenti con il **tipo riga 4** (*Altro*) da utilizzare, ad esempio, per le spese anticipate dal percipiente per conto del cliente e riaddebitate. 

**Debiti v/erario**: questo sottoconto memorizza il sottoconto di debito da utilizzare per rilevare il debito relativo alla ritenuta d'acconto. Questo sottoconto viene utilizzato nella procedura di contabilizzazione pagamenti (con la contabilizzazione pagamenti viene rilevato il debito della ritenuta da versare, che è un tributo che segue la logica di cassa appunto): quando il pagamento riguarda i compensi percipienti, infatti, è necessario integrare la registrazione con i movimenti relativi alla ritenuta e gestire le tabelle del modulo per garantire la possibilità di ottenere la stampa delle certificazioni ritenute.

**Categoria agente** è la tipologia di agente dalla quale individuare le percentuali di contribuzione all'istituto Enasarco. Nel caso in cui la categoria sia stata impostata sarà necessario inserire anche il precedente sottoconto di debito verso l'Enasarco. Il campo è obbligatorio nel caso in cui sia inserita la gestione dell' Enasarco a carico ditta.

**Cont. Enasarco a carico ditta**: questo flag attiva l'impostazione dei due sottoconti successivi e rende obbligatoria l'assegnazione di una categoria agente e del sottoconto di debito per la quota a carico agente. L'attivazione di questo flag attiverà la rilevazione contabile dei contributi Enasarco con la procedura di contabilizzazione omonima. L'opzione è consigliata al fine di rendere autonoma tale rilevazione, dato che il contributo Enasarco va rilevato per competenza e non per cassa come la ritenuta d'acconto. All'interno di questo flag si trovano anche:

**Debito Enasarco a carico agente**: il campo è dedicato all'impostazione del sottoconto di debito sul quale sarà rilevato l'importo a carico dell'agente. Tale sottoconto sarà utilizzato nella contabilizzazione pagamenti o nella contabilizzazione enasarco a seconda che sia stata impostata la gestione enasarco a carico ditta o meno. Il campo è obbligatorio se è settato il campo successivo della categoria agente.

**Costo a carico ditta**: sottoconto da attribuire alla rilevazione contabile di costo Enasarco a carico ditta.

**Debito a carico ditta**: sottoconto da attribuire alla rilevazione contabile di debito Enasarco a carico ditta.



La sezione Percentuali contiene i seguenti campi (clic sulla freccia a destra di questa sezione):

% **Ritenuta**: percentuale di applicazione della ritenuta.

% **Imponibile**: base percentuale di applicazione della ritenuta.

% **Cassa previdenza**:  percentuale di cassa previdenza.

% **Rid. forf. compenso**: campo non in uso.

La sezione INPS consente di attivare una sezione tributi ulteriore all'interno del compenso percipiente, per gestire i contributi INPS dovuti ad esempio dai collaboratori a progetto e simili.
