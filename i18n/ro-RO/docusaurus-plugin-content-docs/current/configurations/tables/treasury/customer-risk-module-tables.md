---
title: Tabele modul Risc client
sidebar_position: 7
---

Nu există tabele specifice pentru acest modul, dar semnalăm faptul că diverse tipuri de documente din achiziții și vânzări prezintă setări asociate la **Risc client**.

*Credit acordat clientului* extrage datele din următoarele documente de vânzare:

**[Tip ordin clientconfigurations/tables/sales/sales-order-types)**: parametrul *Control client* activat indică faptul că documentul (listat și confirmat) este considerat la calcularea creditului acordat clientului. Parametrul *Exclude blocare* exclude documentul din blocare client.

**Tipuri avize**: parametrul *Control client* activat indică faptul că documentul (listat și confirmat) este considerat la calcularea creditului acordat clientului. Parametrul *Exclude blocare* exclude documentul din blocare client.

**[Tipuri facturiconfigurations/tables/purchase/purchase-invoices-type)**: parametrul *Control client* activat indică faptul că documentul (listat și confirmat) este considerat la calcularea creditului acordat clientului. Parametrul *Exclude blocare* exclude documentul din blocare client.

Fiecare *Registru client* prezintă două setări asociate la modul:

- *Tip control credit* 

**Blocare document**: documentul de vânzare care depășește creditul va fi blocat și deci va fi necesară autorizarea lui pentru a parcurge fazele succesive ale fluxului documentar;

**Monitorizare credit**: va fi efectuat un control al creditului acordat clientului, iar utilizatorul va fi eventual avizat în momentul depășirii lui.

**Blocare de grup**: îndeplinește aceeași funcție ca primul, dar face calculul cumulat pentru toate societățile din baza de date care au același registru client.

**Monitorizare grup**: îndeplinește aceeași funcție ca al doilea, dar face calculul cumulat pentru toate societățile din baza de date care au același registru client.

- *Control expunere*, care face clientul vizibil în fereastra *Expunere clienți*.