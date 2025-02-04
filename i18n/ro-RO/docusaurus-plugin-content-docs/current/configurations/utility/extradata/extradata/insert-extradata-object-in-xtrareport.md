---
title: Inserare Extradata Obiect in Xtrareport
sidebar_position: 5
---


Pentru a insera un extradata in XtraReport, va fi utilizat un script care atribuie o valoare unui câmp calculat.

În primul rând, deschideți raportul corect, creați un câmp calculat nou, iar în scriptul GetValue, introduceți următorul script și înlocuiți cu ce ce află între parantezele pătrate, cu valorile corecte:


```csharp
 //INCEPUT SCRIPT PENTRU EXTRADATA OBIECT

private void calcDiameter_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e)

{

  [OggettoReport] row = OggettoReporte.Row;

  if (row != null)

  {

    var extraData = [OggettoReport].ExtraData.Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == [OggettoExtraData]).FirstOrDefault();

    if (extraData != null)

    {

      var record = GetReport().DataProvider.Linq<[OggettoExtraData]>().Where(x => x.Id == extraData.ExtraDataId).FirstOrDefault();

      if (record != null)

      {

        e.Value = [OggettoExtraData].[Proprieta]

      }

    }

  }

}

//SFARSIT SCRIPT PENTRU EXTRADATA OBIECT

Scriptul utilizat în exemplul dat în timpul creării extradata “limba” în factură este următorul:

//INCEPUT SCRIPT

private void CalcLanguage_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e)

{

  Fluentis.FluentisErp.Core.SD.SalesInvoices.FSSalesInvoice row = (Fluentis.FluentisErp.Core.SD.SalesInvoices.FSSalesInvoice)e.Row;

  if (row != null)

  {

    var extraData = row.ExtraData.Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == “FSLanguage”).FirstOrDefault();

    if (extraData != null)

    {

      var record = GetReport().DataProvider.Linq<FSLanguage>().Where(x => x.Id == extraData.ExtraDataId).FirstOrDefault();

      if (record != null)

      {

        e.Value = FSLanguage.Description

      }

    }

  }

}

//SFARSIT SCRIPT
```
AVERTISMENTE GENERALE:

- Dacă întâmpinați dificultăți la inserarea obiectelor și/sau proprietăților în secțiunea de activare și propagare, faceți dublu clic în caseta corespunzătoare. Aceasta este utilă și pentru a verifica dacă obiectul respectiv poate avea un extradata.

- Dacă nu puteți găsi obiectul, trebuie să contactați programatorii care vor implementa această funcționalitate, deoarece nu toate obiectele sunt programate să aibă extradata.
