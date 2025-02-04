---
title: Date contabile
sidebar_position: 1
---

În acest form se inserează informațiile specifice contactului curent.

## Conturi analitice atribuite

Este compus dintr-un grid care conține lista cu conturile atribuite contactului și o serie de taburi cu detalii în care se vor insera informațiile specifice diverselor arii ale aplicației.

Atribuiți contactului un cont, poziționâdu-vă în prima coloană **Tip cont** și selectând un tip compatibil (Client, Furnizor, Agent sau Bancă). Liber profesioniștii sunt clasificați ca furnizori iar în taburile cu detalii se activează setările lor specifice.

:::note Notă
Tipurile compatibile sunt: *Clienți/Furnizori*, *Agenți* și *Bănci*. *Liber profesioniștii* sunt clasificați ca furnizori și în detaliul datelor se activează setări specifice pentru gestionarea reținerilor.
:::

După ce ați selectat tipul contului, apăsând tasta Tab pentru a trece la câmpurile următoare, vom observa că Fluentis atribuie automat un cont sintetic și unul analitic. În momentul salvării, se încărcă și tab-urile cu informațiile detaliate.

Asocierea dintre tipul de cont (ex. de client) și contul din planul de conturi este setată în [Parametrii contabiliconfigurations/parameters/finance/accounting-parameters). Asocierea se realizează când anul din *Parametri contabili* coincide cu anul când a fost creat contactul.

Contul analitic este atribuit automat, în mod progresiv. 

Evidențiem fapt că numărătorul progresiv NU recuperează nici o gaură din progresie (puteți însă manual să impuneți un anumit analitic, dacă nu este deja utilizat). 

:::note Notă
Numărătorul progresiv NU recuperează găurile din numerotare (este însă posibilă setarea manuală a unui anumit analitic dacă nu este deja utilizat).

Este de preferat să lăsați gestionarea atribuirii contului analitic în sarcina aplicației **Fluentis**. Evitați intervenția asupra numerotării analiticelor aferente registrelor direct din planul de conturi.
:::

Pentru fiecare registru este posibil **să se aloce mai multe conturi analitice** simultan. Cele mai frecvente cazuri în practică sunt cele ale unui furnizor care este și client sau al unui client care este și agent în același timp. În aceste cazuri, pe baza rândului selectat, se modifică și taburile cu detalii:

### [Registru clienți/furnizorierp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)

### [Registru băncierp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/references)

### [Registru agențierp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/analytic)
