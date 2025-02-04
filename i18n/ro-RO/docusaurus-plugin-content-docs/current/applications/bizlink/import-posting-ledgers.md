---
title: Import înregistrări contabile
sidebar_position: 2
---

Acest form permite completarea atât a secțiunii TVA, cât și a secțiunii contabile a înregistrărilor și este completat corespunzător în baza datelor care vor fi importate (care implică sau nu TVA).

Dacă se importă înregistrări de facturi:
- 1^ rând = antet
- 2^ rând = registrul jurnal + Registrul TVA
- 3^ rând (și următoarele) = înregistrările din registrul jurnal

**Notă contabilă**
- 1^ rând = antet
- Alte rânduri = registrul jurnal

*Exemplu*:

![](/img/it-it/applications/bizlink/import-mov-contabili.png)

**Dată înreg./Dată comp.**: sunt datele de înregistrare și de competență din antetul înregistrării contabile.

**Număr înreg.**: trebuie să fie liber în baza de date de destinație, altfel funcția va suprascrie ceea ce găsește fără control (este un update SQL).

**Șablon**: selectați un cod deja prezent și coerent cu înregistrarea (de exemplu, un șablon TVA dacă importați înregistrări de facturi).

**Registrul TVA**: selectați codul unui registru deja prezent.

**Nr. în reg. TVA**: inserați un număr liber.

**Divisă; Valută; Euro**: obligatorii, chiar dacă este totul în euro și nu există schimb valutar. Completați întotdeauna și cealaltă coloană cu 0,00 (de exemplu, dacă în coloana *Debit* inserați 1000,00 în coloana *Credit* inserați 0,00).


### Date TVA

Selectați **codul** cotei TVA și completați baza de impozitare TVA și TVA nedeductibilă (eventual cu valoarea 0,00).

**Centru de cost**: opțional, pentru a încărca și legătura cu centrul de cost (deja prezent).

**Număr proiect**: opțional, pentru a încărca și legătura cu proiectul.

### Parametri

Se poate insera valoarea 1 la **Recalculare**, pentru a recalcula datele începând de la registrul jurnal și pentru a genera angajamentele deschise din datele condițiilor de plată, dacă de exemplu lipsesc pentru că nu au fost importate separat.  
În caz contrar, nu se recalculează și angajamentele nu vor fi create dacă nu sunt importate. (Opțiune recomandată pentru motive de performanță și timpi de procesare, mai ales când sunt multe rânduri).

:::note Observație
Conturile trebuie să fie deja în baza de date, altfel mesajul de eroare nu va indica ce cont lipsește (se va referi întotdeauna la ultimul rând din file Excel).