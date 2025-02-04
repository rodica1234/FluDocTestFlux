---
title: Inserare Extradata SimplU in Xtrareport
sidebar_position: 4
---

Pentru a insera un extradata in XtraReport, va fi utilizat un script care atribuie o valoare unui câmp calculat.

În primul rând, deschideți raportul corect, creați un câmp calculat nou, iar în scriptul GetValue, introduceți următorul script și înlocuiți cu ce ce află între parantezele pătrate, cu valorile corecte:


 //NCEPUT SCRIPT PENTRU EXTRADATA SIMPLU

private void calcRange_GetValue(object sender,  DevExpress.XtraReports.UI.GetValueEventArgs e)

{

 [OggettoReport] row = (OggettoReport)e.Row;

 if (row != null)

 {

  var extraData = [OggettoReport].ExtraData.Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == “[OggettoExtraData]”).FirstOrDefault();

  if (extraData != null)

  {

    e.Value = extraData.ExtraDataValue;

  }

 }

}

//SFARSIT SCRIPT PENTRU EXTRADATA SIMPLU

Scriptul utilizat în exemplul dat în timpul creării extradata “adâncime” în factură este următorul:

//INCEPUT SCRIPT

private void CalcDepth_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e) {

 Fluentis.FluentisErp.Core.SD.SalesInvoices.FSSalesInvoice invoice = (Fluentis.FluentisErp.Core.SD.SalesInvoices.FSSalesInvoice)e.Row;

 if (invoice != null && invoice.ExtraData != null)

 {

  var extraData = invoice.ExtraData.Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == "Depth").FirstOrDefault();

  if (extraData != null)

  {

    e.Value = extraData.ExtraDataValue;

  }

 }

}

//SFARSIT SCRIPT

AVERTISMENTE: 

- Acest script extrage o valoare unică, chiar dacă poate fi găsit câmpul calculat în detail report, etc.

- Acest script este singurul mod de a vizualiza extradatele în raport, deci pentru fiecare extradata codificat pe care doresc să-l tipăresc, va trebui să scriu acest script.