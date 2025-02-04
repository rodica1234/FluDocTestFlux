---
title: Facturare Achiziţii
sidebar_position: 2
---

Tabelul se află pe calea **Configurare > Tabele > Achiziții > Facturare Achiziţii** și conține informațiile necesare contabilizării documentelor.

Permite inserarea datelor noi sau căutarea celor existente pentru a le vizualiza, modifica sau șterge.

Conține o zonă de filtrare și una de rezultate. După ce ați setat toate filtrele dorite, efectuați clic pe butonul **Caută** pentru a vizualiza datele în tabelul de rezultate.

Pentru a insera datele, efectuați clic pe primul rând gol din tabel sau apăsați butonul **Nou**.

*Câmpuri specifice*

**Cont sinteti/analitic/Descriere**: utilizate pentru contabilizarea documentelor din contabilitatea generală;

**Tip TVA**: utilizat în contabilizarea documentului. De obicei este setat *Generic* (pentru alte detalii verificati folosirea lui în *șabloane contabile* și în *înregistrările contabile* din aria *Administrativă*);

**Cont sinteti/analitic/Descriere**: utilizate pentru contabilizarea documentului în contabilitatea analitică.

**Tip/Descriere**: utilizat în contabilizarea documentului. Pentru alte detalii verificati [utilizareaconfigurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail) în *înregistrările contabile* din aria *Administrativă*.

:::note Note
Dacă *Tipul facturării* este inserat în *Registru articole*, acest cod este propus în liniile articolului documentului de achiziții și automatizează contabilizarea documentelor într-un cont de contrapartidă.
:::

*Exemplu factură de achiziții*:

Deci dacă, *Tipul facturării* ar fi deja prezent în *Registru articol*, în documentele de achiziții ar fi preluat în tab *Articole*, în câmpul *Facturare achiziții*. Dacă nu este în *Registru articol*, se poate selecta direct îb documentul de achiziții, din combo-box-ul relativ.

Dacă nu este în *Registru articol* și nu a fost inserat manual în documentul de achiziții, aplicația, pentru a nu bloca contabilizarea documentelor, permite preluarea contului analitic implicit care a fost setat în *Registru contact > tab Date Contabile > tab Administrativ* în câmpul **Cheltuieli/Venituri contrapartidă implicit**.