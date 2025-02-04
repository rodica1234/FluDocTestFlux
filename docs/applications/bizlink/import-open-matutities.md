---
title: Importazione Partite aperte
sidebar_position: 2
---

Il foglio excel (template) per l'importazione delle partite aperte nel modulo Amministrazione necessita di essere compilato in entrambe le sezioni:

## **Bizlink parameters:**

**Sezione visibile facendo doppio click in uno dei campi combo, oppure richiesta dal software prima di confermare ed eseguire l'importazione**

Campi da compilare (non valorizzati automaticamente)

- In pagamento: flag che indica se la partita è già inserita in una distinta di bonifico fornitori. Settare generalmente a 0 (FALSE) per normali partite aperte.
- Stato partita: corrisponde agli stati presenti nelle interfaccia, generalmente si utilizza Aperta, oppure parzialmente aperta (residuo diverso da zero) oppure scaduta (un sottoinsieme di aperta con data scadenza già passata)


## **Dati:**

CLIENTE / FORNITORE
    
- Conto / Sottoconto: inserire un codice di conto e sottoconto clienti o fornitore già presente in Fluentis (OBBLIGATORIO)

RIFERIMENTI DOCUMENTO
- Tipo codice: es FA per fattura d'acquisto, FV per fattura di vendita. Usare codifica già presente su Fluentis e già popolata dal FastStart. In caso di problemi o non presenza dei tipi desiderati verificare la tabella sql  Fluentis.SH_DocumentTypes relativamente al campo (non visibile in interfaccia) SHDT_Country_SHCNTR_Id valorizzando con id corrispondente al codice IT della tabella Fluentis.SH_Countries
- Numero / data Fattura: facoltativi, in caso di partita generica si possono omettere indicando come tipo documento GEN

DATI PAGAMENTO
- Tipo pagamento: deve essere già presente su Fluentis (riferirsi al codice dei tipi pagamento presenti) - OBBLIGATORIO. ATTENZIONE: nella tabella Tipi pagamento (anche da interfaccia) verificare che sia compilato il campo Nazione con codice IT per abilitare le tipologie desiderate e consentire una corretta importazione (le tipologie non valide perchè non abilitate si intuiscono anche perchè non sono visibili nel caso venga utilizzata la combo box con doppio click nel tracciato excel)
- Scadenza: è la data scadenza partita - OBBLIGATORIO
- Conto / sottoconto banca. si tratta della banca d'appoggio collegata alla partita (facoltativo)

DATI PARTITE
- Residuo (Dare / Avere): dato del residuo aperto, se la partita non è parzialmente pagata corrisponde al controvalore. 
DATO ESPRESSO NELLA VALUTA INSERITA NELLA APPOSITA COLONNA. ATTENZIONE, compilare la sezione Dare oppure Avere (a seconda del segno della partita) e inserire sempre il valore 0,00 nella colonna adiacente. (se valorizzo Dare es 100,00 metto in Avere 0,00) OBBLIGATORIO
- Controvalore (Dare / Avere): è il valore della partita nella moneta di conto della società (es. Euro). ATTENZIONE, compilare la sezione Dare oppure Avere (a seconda del segno della partita) e inserire sempre il valore 0,00 nella colonna adiacente. (se valorizzo Dare es 100,00 metto in Avere 0,00). OBBLIGATORIO
- Divisa: valorizzare con un codice già presente in Fluentis (es. Eur per Euro, Usd per dollaro) OBBLIGATORIO
- Non pagabile: flag che indica se la partita è bloccata e non pagabile (1) oppure libera (0). OBBLIGATORIO
- Note blocco: campo note di partita facoltativo

DATI REGISTRAZIONE
Data e numero di riferimento della registrazione contabile collegata alla partita.
Sezione facoltativa.

ATTENZIONE: se valorizzata la registrazione deve essere già presente in Fluentis e verrà ricercata dall'importazione, se non trovata l'import restituirà errore.

---

Controllare che nelle divise (tabella divise) sia compilato dappertutto l’isocode (a volte manca proprio per l’euro)


**ATTENZIONE**: controllare che il numeratore delle partite includa anche gli anni precedenti se nel foglio excel ci sono partite con scadenze degli anni precedenti, altrimenti darà errore. Questo perché, tipicamente, un db nuovo ha numeratore che parte dall’anno corrente.



