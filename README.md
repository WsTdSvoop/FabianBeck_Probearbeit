# FabianBeck_Probearbeit
SevDesk Probearbeit von Fabian Beck
Abgegebe am 15.07.2020

Das Grundgerüst der Demo-Anwendung der Probearbeit wurde mit Bootstrap und dem Bootstrap-Template "Dashboard"
https://getbootstrap.com/docs/4.5/examples/dashboard/
und mithilfe von angular.js und jquery.js erstellt.

Die Anwendung zeigt dem Nutzer den aktuellen Bitcoinkurs (EUR, USD, NZD, AUD, GBP), Details über den Bitcoin, sowie einen Rechner um sich einfach ausrechnen zu können, wieviel Bitcoins man sich für einen vom User eingegeben Betrag erhalten könnte.

Erweiterungen für die Seite:
- Bitcoin Diagramm über die Bitcoin-Transactionen am Tag (https://www.blockchain.com/de/api/charts_api).

- Benutzeroptionen, zum anlegen seiner eigenen Bitcoins und Informationen über ihren Wert.


Informationen:
Die Informationen des Dashboards, sowie die Details werden von https://www.blockchain.com/de/api per angularjs als JSON OBJ gezogen.
Die Informationen des Rechners werden von https://www.blockchain.com/de/api per jquery geholt.
