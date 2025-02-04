---
title: Task & Blockly
sidebar_label: Task & Blockly
sidebar_position: 2
---

În acest form implicit este afișat *Script Editor* și nu *Blockly*.  
Dacă se face o modificare a codului și se salvează/compilează folosind *Blockly*, la următoarea deschidere a Task-ului, platforma de codare implicită va fi *Blockly*.

*Supervisor* folosește blocuri personalizate de Blockly pentru a crea scripturi C#. În plus față de categoriile standard Blockly (logice, *Supervisor* sfrutta i blocchi personalizzati di Blockly per creare script C#. Oltre alle categorie standard di Blockly (logiche, loops, operații matematice, texte, date, liste, culori, variabile), categoriile personalizate care pot fi găsite în **Toolbox** sunt:

- **Variabile de context**, conține blocuri pentru selectarea variabilelor din contextul curent și pentru conversia unui obiect generic într-un șir de caractere/număr/...;

- **Dicționar**, conține toate blocurile necesare pentru a lucra cu structura de date de tip <span style={{ fontFamily: 'Consolas' }}>Dictionar</span>;

- **Obiecte Fluentis**, împărțite în trei subcategorii:
     - **Commons**: conține blocuri pentru efectuarea operațiilor comune pe *Obiectele Fluentis* (de exemplu, selectarea unei proprietăți a unui obiect, crearea unei expresii logice pentru a filtra un obiect, crearea unui recordset dintr-o expresie LINQ, etc.);
     - **Read Only**: conține blocuri specifice pentru efectuarea operațiilor doar de citire pe *Obiectele Fluentis* (de exemplu, citirea valorilor, filtrarea elementelor dintr-o colecție, etc.);
     - **Read Write**: conține blocuri specifice pentru efectuarea operațiilor de citire-scriere pe *Obiectele Fluentis* (de exemplu, crearea și instanțierea obiectelor, setarea proprietăților sau referințelor, etc.);

- **Acces la baza de date**: conține blocuri care pot efectua operațiuni direct cu baza de date, cum ar fi apelarea stored procedure sau citirea valorilor din seturile de date;

- **Activități**: sunt împărțite în categorii care au aceleași numele grupurilor (aceleași grupuri care pot fi consultate din form-ul principal al activităților). Grupurile standard sunt:
     - **Utilități**, care conține toate [activitățile](../activity/activity-intro) standard (utilizatorul nu poate adăuga noi activități sau modifica pe cele existente în acest grup);
     - **Exemple**, conține toate exemplele de activități care pot ghida utilizatorul la crearea unui nou *Task* personalizat (utilizatorul nu poate adăuga noi activități sau modifica pe cele existente în acest grup, este necesar să creeze un nou grup cu propriile activități personalizate).

- **Globals**, conține blocuri care pot recupera [parametri globali] sau [liste de distribuție](../distribution-list/distribution-list-intro).

- **Task Utility**, conține scripturi standard/comune utile tuturor *activităților*.

Pentru a adăuga cod unui *Task* cu *Blockly*, efectuați drag&drop blocurilor din *Toolbox* în **Workspace**. Există mai multe *Workspace*-uri selectabile în *Blockly*:

- **#STD** gestionează codul în metoda scriptului <span style={{ fontFamily: 'Consolas' }}>ExecuteTask()</span>;
- **TaskCompleted** gestionează codul în metoda scriptului <span style={{ fontFamily: 'Consolas' }}>TaskCompleted()</span>;

Pentru a schimba *Workspace*-ul actual, selectați o altă valoare din meniul derulant al *Secțiunii*.

După introducerea codului, efectuați clic pe butonul *Salvează/Compilează* și verificați ca scriptul să fie vizibil și în *Script Editor*, selectând *Script* din selectorul *Tip Script* (pentru a schimba platforma de coding).

Codul scriptului generat va apărea între cele două linii comentate (redenumite <span style={{ color: 'forestGreen' , fontWeight: 'bold' }}>// START WIZARD CODE</span> and <span style={{ color: 'forestGreen' , fontWeight: 'bold' }}>// END WIZARD CODE</span>).