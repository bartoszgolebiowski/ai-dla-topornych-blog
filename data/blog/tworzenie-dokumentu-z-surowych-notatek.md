---
title: 'Tworzenie schludnych dokumentów z surowych materiałów'
date: '2024-09-01'
tags: ['Microsoft Stream', 'ChatGPT', 'Pandoc', 'Transkrypcje', 'Notatki', 'Dokumenty', 'AI', 'Prompt Engineering']
draft: false
summary: 'W artykule omówiono dwa scenariusze, w których konieczne jest szybkie przetworzenie surowych materiałów w schludny dokument. Przedstawiam krok po kroku, jak wykorzystać narzędzia ChatGPT do tworzenia notatek w formacie Markdown oraz Pandoc do konwersji tych notatek na schludne dokumenty Word'
---

# Wprowadzenie
Załóżmy dwa następujące scenariusze:

1. Obiecałeś swojemu szefowi, że napiszesz mu podsumowanie spotkania z klientem. Jest godzina 15:00, a deadline jest o 16:00. Właśnie sobie o tym przypomniałeś, a jedyne, co masz, to nagranie wideo ze spotkania. Pamiętasz, że było tam kilka ważnych informacji, ale nie masz czasu na przesłuchanie całego nagrania.
   
2. Zostałeś poproszony o dostarczenie wkładu na temat twojego aktualnego projektu. Ten wkład ma zostać wykorzystany w prezentacji dla klienta w celu zaproponowania nowej oferty. Posiadasz kilka prezentacji z projektu, ale brakuje Ci czasu na ich przeszukiwanie w celu odnalezienia odpowiednich informacji.

W obu przypadkach masz do dyspozycji surowe materiały, które musisz przetworzyć w schludny dokument. W tym artykule przedstawimy, jak można to zrobić w sposób efektywny i szybki. Ważnym elementem jest, że rezultat ma być schludny, a nie zlepkiem nieuporządkowanych informacji.

# Rozwiązanie

Jeszcze rok temu musiałbym poświęcić sporo czasu na przesłuchaniu całego nagrania lub przeszukiwaniu prezentacji w celu znalezienia odpowiednich informacji. Jednak jest to blog o promptach i rozwiązanie jest oczywiste - wykorzystajmy prompty!

## Rozwiązanie dla scenariusza 1

> Obiecałeś swojemu szefowi, że napiszesz mu podsumowanie spotkania z klientem. Jest godzina 15:00, a deadline jest o 16:00. Właśnie sobie o tym przypomniałeś, a jedyne, co masz, to nagranie wideo ze spotkania. Pamiętasz, że było tam kilka ważnych informacji, ale nie masz czasu na przesłuchanie całego nagrania.

Pierwszym krokiem będzie pozyskanie transkrypcji z nagrania. Ponieważ świadczę usługi dla firmy, która korzysta z narzędzi Microsoft, skorzystałem z [Microsoft Stream](https://www.microsoft.com/en-us/microsoft-365/microsoft-stream). Ta usługa posiada możliwość pobrania transkrypcji ze spotkania.

![Pobieranie transkrypcji](/blog/tworzenie-dokumentu-z-surowych-notatek/microsoft-streams-download-transcript.jpg?style=centerme)

Gdyby jednak nagranie nie było dostępne w Microsoft Stream, można je wgrać, a następnie wygenerować transkrypcję dla wgranego wideo. 

![Generowanie transkrypcji](/blog/tworzenie-dokumentu-z-surowych-notatek/microsoft-streams-generate-transcript.jpg?style=centerme)

Tutaj jest przykład [transkrypcji](/blog/tworzenie-dokumentu-z-surowych-notatek/OpenAIDevDayOpeningKeynote.txt) ze spotkania, które będziemy przetwarzać. To spotkanie to [OpenAI Dev Day Opening Keynote](https://www.youtube.com/watch?v=U9mJuUkhUzk).

Gdy już mamy transkrypcję, potrzebujemy wygenerować notatki w postaci tekstu, a dokładniej tekstu w formacie Markdown. W tym celu skorzystałem z narzędzia [ChatGPT](https://chatgpt.com/), natomiast do wygenerowania zapytania skorzystałem z customowego GPT [Prompt Creator](https://chatgpt.com/g/g-TUlA5YcA6-prompt-creator). Tutaj historia [chatu](https://chatgpt.com/share/ffabae18-957b-4991-b5b5-011374a3e303), w którym to powstał prompt dla tego zadania. 

Po wygenerowaniu [notatek](https://chatgpt.com/share/46657db6-96e2-4096-8b6f-9f50b1d52f00) warto je przeczytać i uzupełnić o własne uwagi.   
W ten sposób mamy dokument Markdown. Jednakże, naszym celem jest schludny dokument, a nie plik w formacie Markdown. Tutaj z pomocą przychodzi narzędzie [Pandoc](https://pandoc.org/). Można je pobrać z [tej strony](https://github.com/jgm/pandoc/releases/tag/3.3). Po zainstalowaniu wystarczy wywołać komendę w folderze z naszymi notatkami:

```bash
pandoc -s notatki.md -o notatki.docx
```

Gdzie [notatki.md](/blog/tworzenie-dokumentu-z-surowych-notatek/OpenAIDevDayOpeningKeynote.md) to nasz plik Markdown, a [notatki.docx](/blog/tworzenie-dokumentu-z-surowych-notatek/OpenAIDevDayOpeningKeynote.docx) to plik docx, który możemy otworzyć w Wordzie.

A tak wygląda nasz [dokument](/blog/tworzenie-dokumentu-z-surowych-notatek/OpenAIDevDayOpeningKeynote.docx):

![Finalny Dokument](/blog/tworzenie-dokumentu-z-surowych-notatek/OpenAIDevDayOpeningKeynote.jpg)

## Rozwiązanie dla scenariusza 2

> Zostałeś poproszony o dostarczenie wkładu na temat twojego aktualnego projektu. Ten wkład ma zostać wykorzystany w prezentacji dla klienta w celu zaproponowania nowej oferty. Posiadasz kilka prezentacji z projektu, ale brakuje Ci czasu na ich przeszukiwanie w celu odnalezienia odpowiednich informacji.

Jedną z moich aktywności są szkolenia, więc moim zadaniem było przygotowanie schludnego dokumentu z kilku prezentacji, surowych notatek i innych źródeł informacji, które były wykorzystywane w ramach szkolenia w celu stworzenia propozycji nowej oferty.

Wszystkie te materiały można przetworzyć w podobny sposób jak w przypadku scenariusza 1. Tylko zamiast surowych materiałów w postaci transkrypcji możemy załączyć do prompta inne surowe materiały, takie jak prezentacje, PDF-y itd, oraz wygenerować na ich podstawie notatki w postaci Markdown. Czat z generowania zapytania można znaleźć  [tutaj](https://chatgpt.com/share/0ab4ffc5-0a60-4ce1-aca5-e6355131ea03).

Teraz już z górki, wystarczy połączyć zapytanie z plikami i wygenerować notatki Markdown. Następnie przekonwertować je do docx i gotowe!

```bash
pandoc -s notatki.md -o notatki.docx
```

Gdzie [notatki.md](/blog/tworzenie-dokumentu-z-surowych-notatek/trainingProposition.md) to nasz plik Markdown, a [notatki.docx](/blog/tworzenie-dokumentu-z-surowych-notatek/trainingProposition.docx) to plik docx, który możemy otworzyć w Wordzie.

A tak wygląda nasz [dokument](/blog/tworzenie-dokumentu-z-surowych-notatek/trainingProposition.docx):

![Finalny Dokument](/blog/tworzenie-dokumentu-z-surowych-notatek/trainingProposition.jpg)


# Disclaimer

Chciałbym tutaj poruszyć temat bezpieczeństwa. W pracy zazwyczaj mamy do czynienia z poufnymi danymi. Nie zalecam korzystania z narzędzi online do przetwarzania takich danych.

*Przed użyciem zapoznaj się z dokumentacją chatu AI lub skonsultuj się z działem bezpieczeństwa bądź swoim przełożonym, gdyż każde użycie może skutkować złamaniem NDA oraz zagrażać reputacji i stanowisku.*

Do takich zadań warto wykorzystać narzędzia, które są zaakceptowane przez dział bezpieczeństwa w firmie.

# Podsumowanie

Przykłady, które przedstawiłem, w takiej lub innej formie zdarzają się w codziennej pracy. Problem, jaki rozwiązujemy, to stworzenie nowego dokumentu na podstawie surowych materiałów lub innych dokumentów. Wysokopoziomowe rozwiązanie polega na tym, żeby zebrać surowe materiały, wygenerować notatki, a następnie przekonwertować je do schludnego dokumentu.

![Notatki Markdown Docx flow](/blog/tworzenie-dokumentu-z-surowych-notatek/notatki-markdown-docx-flow.jpg)

Pamiętajmy jednak, że taki dokument powinien być traktowany jako pierwsza wersja, którą warto uzupełnić o własne uwagi i poprawki.

Jeżeli jesteś zainteresowany rozszerzeniem swojej wiedzy albo wiedzy swoich pracowników z zakresu prompt engineeringu, zapraszam do zapoznania się z moim [kursem](https://aidlazabieganych.pl/training).