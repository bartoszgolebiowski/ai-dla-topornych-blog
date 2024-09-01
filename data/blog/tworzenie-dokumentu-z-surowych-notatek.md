---
title: 'Tworzenie schludnych dokumentów z surowych materiałów'
date: '2024-09-01'
tags: ['Microsoft Stream', 'ChatGPT', 'Pandoc', 'Transkrypcje', 'Notatki', 'Dokumenty', 'AI', 'Prompt Engineering']
draft: false
summary: 'W artykule omówiono dwa scenariusze, w których konieczne jest szybkie przetworzenie surowych materiałów w schludny dokument. Przedstawiam krok po kroku, jak wykorzystać narzędzia ChatGPT do tworzenia notatek w formacie markdown oraz Pandoc do konwersji tych notatek na schludne dokumenty Word'
---

# Wprowadzenie
Załóżmy dwa następujące scenariusze:

1. Obiecałeś swojemu szefowi, że napiszesz mu podsumowanie spotkania z klientem. Jest godzina 15:00, a deadline jest o 16:00. Właśnie sobie o tym przypomniałeś, a jedyne co masz, to nagranie wideo ze spotkania. Pamiętasz, że było tam kilka ważnych informacji, ale nie masz czasu na przesłuchanie całego nagrania.
   
2. Zostałeś poproszony o dostarczenie wkładu na temat twojego aktualnego projektu, który ma zostać wykorzystany w prezentacji dla klienta w celu propozycji nowej oferty. Masz kilka prezentacji, które powstały w ramach projektu, ale nie masz czasu na przeszukiwanie ich w celu znalezienia odpowiednich informacji.

W obu przypadkach masz do dyspozycji surowe materiały, które musisz przetworzyć w schludny dokument. W tym artykule przedstawimy jak można to zrobić w sposób efektywny i szybki. Ważnym elementem jest, że rezultat ma być schludny, a nie zlepkiem nieuporządkowanych informacji.

# Rozwiązanie

Jeszcze rok temu musiałbyś spędzić kilka godzin na przesłuchiwaniu całego nagrania lub przeszukiwaniu prezentacji w celu znalezienia odpowiednich informacji. Jednak jest to blog o promptach i rozwiązanie jest oczywiste - wykorzystajmy prompty!

## Rozwiązanie dla scenariusza 1

Pierwszym krokiem będzie pozyskanie transkrypcji z nagrania. Ponieważ pracuję w firmie, która korzysta z narzędzi microsoft, dlatego skorzystałem z [Microsoft Stream](https://www.microsoft.com/en-us/microsoft-365/microsoft-stream). Ta usługa posiada możliwość pobrania transkrypcji ze spotkania.

![Pobieranie transkrypcji](/blog/tworzenie-dokumentu-z-surowych-notatek/microsoft-streams-download-transcript.jpg?style=centerme)

Gdyby jednak nagranie nie było dostępne w Microsoft Streams, można je wgrać, a następnie wygenerować transkrypcję dla danego nagrania. 

![Generowanie transkrypcji](/blog/tworzenie-dokumentu-z-surowych-notatek/microsoft-streams-generate-transcript.jpg?style=centerme)

Tutaj jest przykład [transkrypcji](/blog/tworzenie-dokumentu-z-surowych-notatek/OpenAIDevDayOpeningKeynote.txt) ze spotkania które będziemy przetwarzać. Te spotkanie to [OpenAI Dev Day Opening Keynote](https://www.youtube.com/watch?v=U9mJuUkhUzk).

Gdy już mamy transkrypcję, potrzebujemy wygenerowanie notatek w postaci tekstu, a dokładniej w formacie markdown. W tym celu skorzystałem z narzędzia [ChatGPT](https://chatgpt.com/), a do wygenerowania prompta, który to ChatGPT będzie wykorzystywał, skorzystałem customowego GPT [Prompt Creator](https://chatgpt.com/g/g-TUlA5YcA6-prompt-creator). Tutaj historia [chatu](https://chatgpt.com/share/ffabae18-957b-4991-b5b5-011374a3e303) który to wygenerował mi prompta dla tego zadania. 

Po wygenerowaniu [notatek](https://chatgpt.com/share/46657db6-96e2-4096-8b6f-9f50b1d52f00), warto je przeczytać i uzupełnić o własne uwagi. W ten sposób mamy dokument markdown. Ale zaraz zaraz, przecież chcieliśmy schludny dokument, a nie markdown. Tutaj z pomocą przychodzi narzędzie [Pandoc](https://pandoc.org/). Można to pobrać z [tej strony](https://github.com/jgm/pandoc/releases/tag/3.3). Po zainstalowaniu, wystarczy wywołać komendę:

```bash
pandoc -s notatki.md -o notatki.docx
```

Gdzie [notatki.md](/blog/tworzenie-dokumentu-z-surowych-notatek/OpenAIDevDayOpeningKeynote.md) to nasz plik markdown, a [notatki.docx](/blog/tworzenie-dokumentu-z-surowych-notatek/OpenAIDevDayOpeningKeynote.docx) to plik docx, który możemy otworzyć w Wordzie.

A tak wygląda nasz [dokument](/blog/tworzenie-dokumentu-z-surowych-notatek/OpenAIDevDayOpeningKeynote.docx):

![Finalny Dokument](/blog/tworzenie-dokumentu-z-surowych-notatek/OpenAIDevDayOpeningKeynote.jpg)

## Rozwiązanie dla scenariusza 2

W moim przypadku zajmuję się szkoleniami, więc moim zadaniem było przygotowanie schludnego dokumentu z kilku prezentacji, surowe notatki i inne, które były wykorzystywane w ramach szkolenia. 

Wszystkie te materiały można przetworzyć w podobny sposób jak w przypadku scenariusza 1. Tylko zamiast surówki w postaci trakscrypcji z nagrania to załączamy do prompta kilka plików, które ChatGPT wykorzysta do wygenerowania notatek. Chat z generowania prompta można znaleźć [tutaj](https://chatgpt.com/share/0ab4ffc5-0a60-4ce1-aca5-e6355131ea03).

Teraz już z górki, wystarczy załączyć prompta do ChatGPT, dołączyć pliki i wygenerować notatki markdown. Następnie przekonwertować je do docx i gotowe!

```bash
pandoc -s notatki.md -o notatki.docx
```

Gdzie [notatki.md](/blog/tworzenie-dokumentu-z-surowych-notatek/trainingProposition.md) to nasz plik markdown, a [notatki.docx](/blog/tworzenie-dokumentu-z-surowych-notatek/trainingProposition.docx) to plik docx, który możemy otworzyć w Wordzie.

A tak wygląda nasz [dokument](/blog/tworzenie-dokumentu-z-surowych-notatek/trainingProposition.docx):

![Finalny Dokument](/blog/tworzenie-dokumentu-z-surowych-notatek/trainingProposition.jpg)


# Disclaimer

Chciałbym tutaj poruszyć temat security. W pracy zazwyczaj mamy do czynienia z poufnymi danymi. Nie zalecam korzystania z narzędzi online do przetwarzania takich danych.  

*Przed użyciem zapoznaj się z dokumentacją chatu AI, lub skonsultuj się z działem security bądź swoim przełożonym, gdyż każde użycie może skutkować złamaniem NDA oraz zagraża reputacji i stanowisku*.  

Do takich zadań warto wykorzystać narzędzii które to są zaakceptowane przez dział security w firmie.

# Podsumowanie

Przykłady, które przedstawiłem, w takiej lub innej formie zdarzają się w codziennej pracy. Problem, jaki rozwiązujemy, to stworzenie nowego dokumentu na podstawie surowych materiałów lub innych dokumentów. Wysoko poziomowe rozwiązanie polega na tym, żeby zebrać surowe materiały, wygenerować notatki, a następnie przekonwertować je do schludnego dokumentu. 

![Notatki Markdown Docx flow](/blog/tworzenie-dokumentu-z-surowych-notatek/notatki-markdown-docx-flow.jpg)

Pamiętajmy jednak, że taki dokument powinien być traktowany jako pierwsza wersja, którą warto uzupełnić o własne uwagi i poprawki

Jeżeli jesteś zainteresowany rozszerzeniem swojej wiedzy albo wiedzy swoich pracowników z zakresu prompt engineeringu, zapraszam do zapoznania się z moim [kursem](https://aidlazabieganych.pl/training).