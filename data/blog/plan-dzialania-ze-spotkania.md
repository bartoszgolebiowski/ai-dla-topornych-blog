---
title: 'Plan działania ze spotkania'
date: '2024-11-07'
tags: ['Microsoft Teams', 'GPT', 'Automatyzacja', 'Transkrypcja', 'Pandoc', 'Plan działania', 'API']
draft: false
summary: 'Artykuł opisuje sposób przygotowania planu działania ze spotkania, wykorzystując transkrypcję z Microsoft Teams oraz customową wersję GPT.'
---

# Wprowadzenie

Ostatnio rozmawiałem ze swoim znajomym, który zarządza wieloma projektami. Większość czasu przesiaduje na spotkaniach, podczas których omawia zespołowi cele i zadania do wykonania. Niestety, po zakończeniu spotkania często zapomina, co zostało omówione i jakie były ustalenia, ponieważ zaraz po spotkaniu zaczyna kolejne.

Taki stan rzeczy może prowadzić do nieporozumień i błędów w realizacji projektów. W związku z tym, postanowiłem zaprezentować mu sposób, w jaki można przygotować plan działania ze spotkania.

# Propozycja

Zaproponowałem mojemu znajomemu, aby po każdym spotkaniu przygotowywał plan działania. Plan ten mógłby zawierać:
- Podsumowanie spotkania
- Cele do osiągnięcia
- Zadania do wykonania

Jednak podziękował mi za propozycję i powiedział, że nie ma czasu na przygotowywanie takich planów. Wtedy postanowiłem zaproponować mu, aby skorzystał z narzędzi, które mogą pomóc mu w przygotowaniu planu działania ze spotkania.

# Co potrzebujemy

## Transkrypcja spotkania

Używamy Microsoft Teams do prowadzenia spotkań. Microsoft Teams oferuje funkcję transkrypcji spotkania, która pozwala na przekształcenie mowy w tekst. Dzięki temu można łatwo przygotować podsumowanie spotkania. Jest to mniej inwazyjne niż nagrywanie spotkania, nie widać czerwonej lampki, która informuje, że spotkanie jest nagrywane, która może wprowadzać niepotrzebne napięcie.
Pomimo tego nadal potrzebna jest akceptacja uczestników spotkania na nagrywanie transkrypcji. W ramach przykładu wykorzystałem spotkanie drużynowe zespołu NodeJS o nazwie "Node.js Performance Team Meeting". 

[Node.js Performance Team Meeting](https://www.youtube.com/watch?v=334glI1nluU)

[Traksrypcja spotkania](/blog/plan-dzialania-ze-spotkania/transkrypcja.txt)

## Customowa wersja GPT

Niestety, Microsoft Teams nie oferuje funkcji automatycznego generowania planu działania ze spotkania. Dlatego postanowiłem skorzystać z customowej wersji GPT, która jest w stanie przetworzyć transkrypcję spotkania i wygenerować taki plan. Moim ulubionem formated jest markdown, który to przekształce w dokument word za pomocą narzędzia [Pandoc](https://pandoc.org/) i wyślę w wiadomości zwrotnej do uczestników spotkania.

[Customowa wersja GPT](https://chatgpt.com/g/g-4PqYLG2EI-action-plan-formatter)

# Rezultat

![Docx](/blog/plan-dzialania-ze-spotkania/word.jpg)

Po każdym spotkaniu mój znajomy może teraz przygotować plan działania w kilka minut. Jest tu obszar do poprawy, jak automatyczne generowanie planu działania ze spotkania, gdy transkrypcja zostanie wygenerowana, a następnie przekształcić nowo powstały plik za pomocą customowej wersji GPT, a na końcu wygenerowany plan działania wysłać do uczestników spotkania w wiadomości zwrotnej. 

Ostatnio odkryłem, że customowe wersje GPT mają umożliwiają integrację za pomocą API z zewnętrznymi serwisami. Nazywa się to [GPT Actions](https://platform.openai.com/docs/actions/introduction). Już nie mogę się doczekać, aby zaimplementować to w naszym zespole i wysyłać rezultaty z customowej wersji GPT bezpośrednio do Microsoft Teams.



