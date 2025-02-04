---
title: Facturare vânzări
sidebar_position: 6
---

Tabelul conține datele necesare pentru contabilizarea documentelor și permite inserarea datelor noi sau căutarea celor existente pentru a le vizualiza, modifica sau șterge.

Conține o zonă de filtrare și una de rezultate. După ce ați setat toate filtrele dorite, efectuați clic pe butonul **Caută** pentru a vizualiza datele în tabelul de rezultate.

Pentru a insera datele, efectuați clic pe butonul **Nou**.

*Câmpuri specifice*

**Tip** și **Descriere**: reprezintă tipul și descrierea facturării;

**Cont sinetic/analitic/Descriere analitic**: reprezintă contul utilizat la contabilizarea documentelor de vânzare;

**Tip TVA**: utilizat la înregistrarea contabilă a documentului. De obicei este setat generic; pentru alte detalii verificați utilizarea sa în șabloane contabile și înregistrările contabile din aria administrativă;

**Detaliu țări**: sunt informații utilizate doar pentru schimbul de date cu programe externe. În viitor va fi posibilă definirea conturilor de cheltuieli diferite pe țară și tip de contabilizare articol asociat în registrul clientului.

:::note Note
Dacă *tipul facturării* este inserat în *Registrul articole* acest cod este propus în liniile documentului şi este sugerat la contabilizarea documentelor.
:::

*Exemplu de factură de vânzare*

Dacă *Tipul facturii* ar fi fost deja prezent în *Registru articol*, în documentele de vânzări l-am regăsi în tab *Articole*, în câmpul *facturare vânzări*. În cazul în care nu este prezent în registrul articolului, se poate selecta direct în documentul de vânzare, cu ajutorul relativului combo box.

În cazul în care nu este inserat în registrul articolului și nu este inserat manual în documentul de vânzare, aplicația pentru a nu bloca contabilizarea documentelor, permite preluarea contului analitic de contrapartidă implicit care a fost inserat în registrul contact > Date contabile > administrativ, în câmpul **Cheltuieli/venituri de contrapartidă implicit**.
