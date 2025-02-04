---
title: Import angajamente deschise
sidebar_position: 2
---

### Parametrii Bizlink

**În plată**: indică dacă angajamentul este deja inclus într-o listă de transferuri bancare către furnizori. În general este 0 pentru angajamentele deschise, normale.
**Id stare angajament**: setați 1 în mod implicit.

#### Date 

CLIENT/FURNIZOR

**Cont sintetic/analitic**: reprezintă contul sintetic și analitic client/furnizor deja prezent în Fluentis.

REFERINȚE DOCUMENT

**Tip document**: de ex. FA pentru factură de achiziție, FV pentru factură de vânzare. Utilizați codificarea deja prezentă în Fluentis.  
**Număr/data factură**: când angajamentul este generic, câmpurile pot fi omise, indicând ca tip document *Gen*.

DATE PLATĂ

**Tip plată**: este obligatorie selectarea unei plăți deja prezente în Fluentis.  
**Dată scadență**: reprezintă data scadenței angajamentului.  
**Cont sintetic/analitic bancă**: reprezintă banca asociată angajamentului.  

DATE ANGAJAMENTE

**Sold (debit/credit)**: valoarea soldului deschis. Dacă angajamentul nu este parțial plătit, corespunde contravalorii.  
Completați secțiunea *Debit* sau *Credit* (în funcție de semnul angajamentului) și introduceți întotdeauna valoarea 0,00 în coloana adiacentă.  
 
**Contravaloare (debit/credit)**: este valoarea angajamentului în moneda societății (ex. Euro).  
Completați secțiunea *Debit* sau *Credit* (în funcție de semnul angajamentului) și introduceți întotdeauna valoarea 0,00 în coloana adiacentă.   

**Moneda**: selectați un cod deja prezent în Fluentis (ex. EUR pentru Euro, USD pentru dolar).   
**Blocat**: flag care indică dacă angajamentul este blocat și nu poate fi plătit (1) sau este liber (0).  
**Note**: câmp opțional pentru notele angajamentului.

DATE ÎNREGISTRARE

Secțiune opțională, include **Data** și **Numărul** de referință al înregistrării contabile asociate angajamentului.

:::note Notă
Dacă se completează, înregistrarea trebuie să fie deja în Fluentis și va fi căutată în timpul importului. Dacă nu va fi găsită, importul va returna o eroare.
:::

*Verificați ca în tabelul Devizelor să fie completat peste tot codul ISO*.  

*Controlați dacă numărătorul angajamentelor include și anii anteriori în cazul în care în fișierul Excel există angajamente cu scadențe din anii anteriori, pentru ca aplicația să nu genereze erori.*