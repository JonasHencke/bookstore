# E-commerce Buchshop
![](https://i.imgur.com/pR1GXWe.png)

## Description

Ein React E-Commerce Store in Form eines Online-Buchhandels. Die Daten zu den Büchern werden von einer Firebase-Datenbank geladen, welche eigens erstellt worden ist.

Die Daten werden mit einer API Verknüpfung geladen und auf der Seite darfestellt. Für die einzelnen Bücher existieren individuelle Seiten und die Bücher können in den Einkaufswagen gelegt und entfernt werden.

## Demo

Link zur [Live-Website](https://jonashencke.github.io/bookstore/#/) ▶️
<br/><br/><br/>
![test](https://i.imgur.com/cCOSuP1.png)
![](https://i.imgur.com/DMcnu1b.png)
![](https://i.imgur.com/eTycuRz.png)
![](https://i.imgur.com/NsJeY9i.png)
## Features

- responsive Design für PC, Tablet und Smartphone
- funktionierender virtueller Einkaufswagen
- Filter mit welchen nach bestimmten Genres gesucht werden kann
- Darstellung der Buch-Datenbank innerhalb des Shops, wie auch individuelle Seiten für die einzelnen Bücher

## Verwendete Technologien

- Javascript
- React
- CSS
- React-Router
- npm
    - react-pagination-ui
- Context API (state management)
- Firebase (Backend-as-a-Service)
## Herangehensweise und Lernzuwachs
Bei diesem Projekt habe ich das Ziel verfolgt eine Single Page Application mit React und React-Router zu erstellen. Als ich mich dazu entschieden habe diese SPA als e-commerce Website zu gestalten, war ebenfalls klar, dass hierzu eine Datenbank notwendig sein wird. Da ich zum Zeitpunkt der Erstellung noch keine Kenntnisse in Backend-Programmierung hatte, entschied ich mich dazu eine Firebase-Datenbank zu erstellen. Diese habe ich über die API Schnittstelle mit meiner Webseite verbunden. Die Warenkorb-Funktion habe ich über die useState Hook und das State management Tool Context implementiert.

Die Folgende Dinge habe ich aus diesem Projekt mitgenommen:
- Das Erstellen und implementieren einer Datenbank mit Hilfe eines BaaS (Backend-as-a-Service) und einer API-Schnittstelle
- Erstellen einer SPA mit Hilfe von React-Router
- Erstellen eines Warenkorb-Systems mit Hilfe der useState Hook und dem state management Tool Context
## Quellen

- Die Daten, welcher der Firebase Datenbank hinzugefügt wurden stammen zum Großteil von [Thalia.de](http://Thalia.de). Hierzu gehören Bild-URL, Beschreibung etc.
- das Banner-Bild stammt von [dieser Seite](https://uk.bookshop.org/shop/thesmallcitybookshop)
- die auf der Website verwendeten SVGs stammen allesamt von [SVGRepo](https://www.svgrepo.com/). Teilweise habe ich diese per Code oder mit dem Programm "Affinity Designer" verändert.

## Lighthouse
Die Analyse von Google Lighthouse hat die Web-Applikation wie folgt bewertet:

![](https://i.imgur.com/k7Hk0fx.png)
