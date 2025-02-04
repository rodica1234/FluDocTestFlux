---
title: Lichidare
sidebar_position: 3
---

În acest form se inserează elementele generale pentru calcularea comisionului:



**Șablon rețineri**: este obligatoriu pentru valorizarea automată și a părții din reținerea avans aplicată compensării agentului. Fără acest câmp nu va fi posibilă valorizarea automată a compensării din lichidare agent. Câmpul este relativ la tabelul [Tipuri reținericonfigurations/tables/finance/withholding-tax-types).

**Perioadă de lichidare**: indică frecvența plății agenților;

**Tipul documentului considerat ca bază pentru calcularea comisionului**: se poate indica faptul că agentul acumulează comisionul pe ordinul confirmat, la livrarea mărfii (și anume, avizul emis), la emiterea facturii, la scadența acumulată, în momentul plății (și anume pe baza cotei încasate: dacă clientul plătește jumătate de factură, agentul acumulează jumătate de comision din acel document). Această setare nu poate fi schimbată dacă s-a început crearea lichidărilor pentru agent: va fi necesară crearea unui nou registru cu o nouă setare (și să fie utilizată procedura ‘Atribuire agenți' pentru a actualiza registrele clienți în mod masiv în Home > Contacte).

:::note Nota
Doar pentru  [procedura de calcul a lichidărilor/professional-men/procedures/calculate-commissions)  gestionată din modulul Administrativ există și ulterioara modalitate Plată totală. În acest caz factura trebuie plătită integral pentru acumularea comisionului, nu sunt luate în calcul eventuale plăți parțiale. 
:::