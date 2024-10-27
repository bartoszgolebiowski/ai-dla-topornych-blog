---
title: 'Miesięczne raporty z utylizacji zasobów ludzkich na róznych projektach'
date: '2024-10-27'
tags: ['ChatGPT', 'Automatyzacja', 'Eksploracja danych', 'Raportowanie']
draft: false
summary: 'W artykule dzielę się, jak wykorzystać narzędzia takie jak ChatGPT do przekształcania surowych danych w czytelne raporty i wizualizacje. Skupiłem się na automatyzacji procesu tworzenia raportów dotyczących utylizacji zasobów ludzkich w projektach, pokazując krok po kroku, jak stworzyć customowy model GPT. Omawiam proces tworzenia, testowania i wdrażania takiego modelu, wskazując na jego zalety, takie jak oszczędność czasu i spójność wyników.'
---

# Wprowadzenie

W tym artykule chciałbym podzielić się z wami jak można skorzystać z narzędzi, takich jak ChatGPT w celu eksploracji danych, czyli przekształcania surowych danych na proste wykresy. W tym przypadku chciałbym pokazać jak można przygotować rraporty dotyczące utylizacji zasobów ludzkich w różnych projektach.

# Wymagania wstępne

Załóżmy, że mamy dostęp do danych z systemu do zarządzania projektami, w którym przechowywane są informacje o czasie pracy na poszczególnych projektach. Poniżej przedstawiam przykładowy plik CSV z danymi:

```csv
Project Number,Employee Name,01-03-2024,02-03-2024,03-03-2024,04-03-2024....
Project-1,Alice,11,5,11,1,8,1,4,8,12,....
```

Składa się on z nazwy projektu, imienia pracownika oraz liczby godzin przepracowanych w danym dniu. Prosty export z systemu zarządzania projektami.

# Przygotowanie customowej wersji GPT

To zadanie wydaje się idealne do zautomatyzowania, ponieważ takie raporty będziemy wykonywać pod koniec każdego miesiąca. W tym celu możemy przygotować customową wersję modelu GPT, która będzie w stanie przetwarzać nasze dane i generować spójne rezultaty.

![Tworzenie customowej wersji GPT](/blog/raporty-z-utylizacji/customowa-wersja-gpt-rezultat.jpg?style=centerme)

Tutaj jest finalny rezultat naszej customowej wersji GPT. Sam proces tworzenia polega na tym, że definiujemy nasze oczekiwania, a następnie testujemy model, dodając kolejne wymagania lub punkty, na których model powinien się skupić. Po zakończeniu testów model zostanie zapisany na naszym koncie i będzie dostępny do wykorzystania w przyszłości.

# Rezultaty
Ogromną zaletą customowych wersji GPT jest to, że gdy otwieramy nasz dedykowany chat, wklejamy tylko surowe dane, bez zbędnych opisów. Model sam zrozumie co chcemy osiągnąć i dostarczy nam odpowiedzi.

Prompt: 
![Prompt](/blog/raporty-z-utylizacji/prompt.jpg)

Odpowiedź:
Informacje o ilości przepracowanych godzin na poszczególnych projektach.
![Project wizualizacja](/blog/raporty-z-utylizacji/project.jpg)

Informacje o utylizacji zasobów ludzkich na różnych projektach.
![Employee](/blog/raporty-z-utylizacji/pracownik.jpg)

nic nie stoi na przeszkodzie, żeby dodać kolejne wymagania, takie jak wykresy, podsumowania, czy inne informacje, które chcielibyśmy zobaczyć w naszym raporcie.

# Podsumowanie

To jest właśnie cała magia zaawansowanych modeli językowych. Nie mówimy jak coś osiągnąć, ale co chcemy osiągnąć. Sposób myślenia przekształca się z "jak coś zrobić", w "co chcę osiągnąć". Model spróbuje zrozumieć nasze oczekiwania i dostarczyć nam odpowiedź. Im lepiej sprecyzowane zadanie, tym większe szanse na uzyskanie satysfakcjonującego rezultatu. 

Zasada [dziel i rządź](https://pl.wikipedia.org/wiki/Dziel_i_rz%C4%85d%C5%BA) znajduje tu swoje zastosowanie. Dzielimy nasze zadanie na mniejsze części, które są łatwiejsze do zrozumienia dla modelu, a on z kolei dostarcza nam odpowiedzi na każdą z nich.