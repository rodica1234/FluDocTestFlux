---
title: Introduzione
sidebar_position: 1
---

Il modulo permette la pianificazione e la registrazione dei corsi di formazione aziendali attuati per aumentare il livello di istruzione, necessario alle risorse, per garantire il mantenimento ed il miglioramento continuo del sistema di gestione.   


## I documenti gestiti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/erp-home/registers/employee/training-courses/basic-course-management">Corsi base</Link>
        <p>Sono dei templates di corsi formativi che, ricorsivamente o non, vengono effettuati: all'assunzione di nuovi dipendenti, a loro cambi di mansione, periodicamente per rinnovi previsti da leggi e normative.  </p>
        <p>Oltre al Tipo corso di base e il Titolo, le informazioni gestite sono: la Validità, Ore e Costi previsti, i Contenuti, Settore e Area di interesse, Categoria, Docente e suoi requisiti e altri riferimenti. Nella sessione Rinnovo (se previsto) vengono inserite le informazioni di rinnovo del corso: Dati rinnovo, Contenuti, Ore e Costi previsti, Periodicità e altri riferimenti. È inoltre possibile indicare le Mansioni aziendali interessate ad effettuare il corso.</p>
        <p>Tramite i pulsanti Pianifica prossimo corso e Pianifica prossimo rinnovo è possibile generare il Corso di formazione o di rinnovo che riporterà alcune delle informazioni presenti nel corso di Base.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/erp-home/registers/employee/training-courses/training-courses-intro">Corsi di formazione</Link>
        <p>I Corsi di formazione riportano le informazioni riguardanti lo svolgimento dei corsi di Informazione, Formazione e Addestramento ai dipendenti.</p>
        <p>Le informazioni gestite sono: Tipo corso, Anno, Numero e Data, il Titolo, i riferimenti al Corso di base, se è un Corso pianificato, se è un Rinnovo, dati di conferma del corso, i Contenuti, informazioni relative al Coordinatore e Responsabile, al Docente, all’eventuale Co-docente, Settore e Area di interesse, Categoria, se il corso è di Informazione, Formazione o Addestramento, la sede di svolgimento, le Ore e Costi previsti ed effettivi e altri riferimenti.</p>
        <p>Nelle sessioni sottostanti si possono gestire: le Date del corso, con i dettagli di quante ore di teoria di pratica e gli argomenti … previsti ed effettivi; è inoltre possibile indicare le Mansioni coinvolte per effettuare il corso … da questo elenco verranno proposti i Dipendenti coinvolti dove è possibile registrare le ore di teoria e di pratica effettuate e informazioni relative alla valutazione dell’efficacia.</p>
    </div>
</div>


## Per iniziare ad utilizzare   

i **Corsi base**:
- definire un [*Tipo corso base*configurations/tables/employee/training-courses/basic-course-type)   
- inserire un nuovo [*Corso base*erp-home/registers/employee/training-courses/basic-course-management)   

i **Corsi di formazione**:
- definire un [*Tipo corso di formazione*configurations/tables/employee/training-courses/course-type)   
- per agevolare la gestione dei *Corsi di formazione* impostare i [*Parametri Gestione del personale*configurations/parameters/employees/staff-management) nella sessione *Corsi di formazione*   
- inserire un nuovo [*Corso di formazione*erp-home/registers/employee/training-courses/training-courses-intro)   


## Collegamenti con altri moduli
Il modulo dei *Corsi di formazione* non è collegato ad alcun altro modulo.   