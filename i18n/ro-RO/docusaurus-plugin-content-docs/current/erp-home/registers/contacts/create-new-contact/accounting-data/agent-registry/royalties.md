---
title: Gestionare redevențe (Royalties)
sidebar_position: 9
---

Gestionarea redevențelor este similară cu cea a comisioanelor agenților, cu care utilizează parțial setările.

### Configurare registru articole

Registrele articolelor care fac obiectul drepturilor de autor/redevențelor trebuie să aibă activ parametrul (*Drepturi de autor*) în tab **Generale**

La introducerea articolului marcat în documentele de vânzare, numai pentru articolele care au acest parametru activ, Fluentis va identifica relativul designer (agent) care deține drepturile de autor asupra acestuia.

### Configurare registru agent

Configurarea agentului care deține drepturile de autor asupra diferitelor articole se realizează prin definirea unui registru de tip agent. 

În mod normal, acești subiecți nu sunt supuși impozitului reținut la sursă sau contribuții, deci va fi necesar să creați o [Categorie agentconfigurations/tables/sales/agent-category/) și un [Tip de reținereconfigurations/tables/finance/withholding-tax-types/) care nu prevăd contribuții sau procente de reținere la sursă.

În tab **Lichidare** se va indica tipul reținerii (care urmează să fie creat sau selectat, așa cum am menționat mai sus, un tip cu procent zero) și apoi criteriul de acumulare al comisionului așa cum se procedează pentru agent.

:::tip Important
Particularitatea setării se află în **Comisioane directe**, unde vom codifica tipul de comision  **23 – Royalties **
:::

! [](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/tipo23.png)

Intrând în detaliile acestui tip (cu butonul **Detaliu procente selectate**), va fi posibil să urmați două căi diferite:

! [](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/dettaglio.png)

- Introduceți lista detaliată a articolelor supuse drepturilor de autor (Fluentis nu va permite inserarea articolelor fără acest parametru activ) 

- sau linia de produse care conține articolele care fac obiectul redevențelor, în cazul în care linia de produse identifică designul (sau elementul) supus dreptului: **doar articolele care au parametrul redevențelor vor fi supuse procentului relativ**, nu este suficient să fie associate la linia stabilită în registrul agenților.

:::danger Atenție
Nu va fi permisă inserarea unui articol (sau a unei linii) în agentul X dacă articolul este gestionat într-un alt registru agent (ca articol sau ca linie de apartenență): nu este permis ca mai mulți designeri să acumuleze redevențe pentru același articol.
:::

### Logica de utilizare

Odată ce setările au fost făcute în registrul articolului și în agent, logica de operare este următoarea: la introducerea unui articol în documentele de vânzare, Fluentis va verifica dacă este supus redevențelor sau nu; în primul caz va căuta care este agentul care are setările (specifice sau pentru linia de articol relativă) în detaliile tipului "23 - Redevențe" și va adăuga linia de comision corespunzătoare în document.

Logica acestei valorizări va fi aceeași ca pentru orice agent, cu rapoartele rezumative agenți și calculele lichidărilor la scadență. 

:::tip Notă
Diferența substanțială dintre un agent și un titular al drepturilor de autor este că, pentru acesta din urmă, nu este necesară inserarea sa în fiecare registru client pentru a se asigura că Fluentis identifică procentul său care trebuie aplicat vânzării, ceea ce este obligatoriu pentru agenții obișnuiți.
:::
