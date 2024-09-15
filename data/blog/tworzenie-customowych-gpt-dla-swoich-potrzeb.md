---
title: 'Tworzenie customowych wersji GPT dla swoich potrzeb'
date: '2024-09-15'
tags: ['ChatGPT', 'Custom GPT', 'AI', 'Automatyzacja', 'Produktowość', 'Narzędzia AI', 'OpenAI']
draft: false
summary: 'W artykule omówiono, jak tworzyć customowe wersje GPT za pomocą narzędzi dostępnych w ChatGPT. Przedstawiono zalety tworzenia takich modeli, proces ich tworzenia oraz przykłady zastosowań. Podkreślono, że customowe GPT mogą zaoszczędzić czas i zapewnić spójne wyniki, eliminując konieczność wielokrotnego wprowadzania tych samych informacji do chatu AI.'
---

# Wprowadzenie
W tym artykule chciałbym podzielić się z wami funkcjonalnością dostępną w [ChatGPT](https://chatgpt.com/), która to pozwala na tworzenie [customowych wersji GPT](https://openai.com/index/introducing-gpts/). Wytłumaczę jakie są zalety tworzenia customowych wersji GPT, oraz jak wygląda proces ich tworzenia. 

## Co to jest customowa wersja GPT i dlaczego warto ją tworzyć?
Customowa wersja GPT to rozwiązanie, które pozwala na wstrzyknięcie systemowego prompta do modelu GPT.  
Podczas standardowego korzystania z ChatGPT, użytkownik musi wprowadzić swoje pytanie, dostarczyć informacje o tym czego oczekuje od modelu, jaka jest jego rola, zawrzeć informacje o kontekście, o oczekiwanym tonie odpowiedzi, dlugości odpowiedzi, o tym jakie informacje są dla niego ważne, jakie błędy powinien unikać, jakie informacje powinien podkreślić, jak również oczekiwania co do kształtu odpowiedzi i wiele wiele innych. [Przykład chatu.](https://chatgpt.com/share/66e71c12-43c0-8010-95e7-7b041446e83e) 

```mardkdown
Act as a specialized assistant for transforming raw transcripts or notes into structured outputs optimized for generating Jira tickets. Your primary task is to extract and organize key points from unformatted text, turning them into a well-structured table suitable for creating multiple Jira tasks. The final output will focus on the following elements for each ticket:

Titles: A concise and descriptive title.
Descriptions: Clear, relevant details for each task.
Definition of Done: Specific criteria for completion.
Acceptance Criteria: Detailed requirements that must be met.
Additional Fields: Include any relevant fields, such as priority, labels, or due dates, based on the context.
Your responsibilities include:

Filtering out irrelevant information such as small talk, off-topic discussions, or redundant details.
Grouping tasks into epics, stories, or bugs where applicable, ensuring logical organization.
Formatting the output as a clean table that is easy to transfer into Jira, without including the original transcript or any extraneous input/output details.
Requesting clarification if any part of the input is ambiguous or incomplete to ensure accuracy and completeness.
Style and Formatting:

Use clear, simple language with short, straightforward sentences for ease of understanding.
Ensure the table and its contents are formatted logically and concisely, with no unnecessary repetition or jargon.
Maintain a sharp focus on the content’s relevance to Jira ticket creation, ensuring all required fields are completed for each task.
By following these guidelines, the output will be ready for direct use in project management, making the process of creating Jira tickets fast, efficient, and error-free.
```

Może to być szczególnie uciążliwe, gdy użytkownik powtarza te same zadania i wykorzystuje identyczny prompt. Może lepiej byłoby stworzyć własny customowy model GPT, który będzie specjalizował się w tym konkretnym zadaniu. Tworząc własny model GPT, możemy nauczyć go, jakie informacje są dla nas ważne, oraz jakich błędów powinien unikać. Dzięki temu możemy zaoszczedzić czas uzyskując podobne lub nawet identyczne rezultaty jak w przypadku korzystania z czystego modelu GPT.

## Jak stworzyć customową wersję GPT?

OpenAI wyszło naprzeciw użytkownikom i udostępniło wbudowane narzędzie w aplikacji ChatGPT, które pozwala na tworzenie customowych wersji GPT za pomocą interaktywnego chatu. Wystarczy zdefiniować w nim swoje zadanie, oraz podczas testów dodawać kolejne wymagania lub podpunkty na których powinien się skupić. Dla bardziej zaawansowanych użytkowników dostępne są opcje podobne to tych z [Customowych instrukcji](https://openai.com/index/custom-instructions-for-chatgpt/)
Oba rozwiązania wymagają wersji Plus, Team lub Enterprise.

### Tworzenie customowej wersji GPT za pomocą interaktywnego chatu

Aby móc stworzyć customową wersję GPT należy odwiedzić [edytor GPT](https://chatgpt.com/gpts/editor). Przekieruje nas do interaktywnego chatu, w którym będziemy mogli tworzyć nasz model. Wystarczy zdefiniować zadanie, a następnie podczas testów dodawać kolejne wymagania lub podpunkty na których powinien się skupić model. Po zakończeniu testów, model zostanie zapisany w naszym koncie i będzie dostępny do wykorzystania w przyszłości.

Okno tworzenia customowej wersji GPT wygląda następująco:

![Tworzenie customowej wersji GPT](/blog/tworzenie-customowych-gpt-dla-swoich-potrzeb/interaktywny-chat-full.jpg?style=centerme)

Po lewej stronie mamy okno z naszym interaktywnym chatem, wprowadzamy tam opis słowny naszego zadania. Za każdym razem gdy dodamy nowe wymaganie dołączymy załącznik lub dopiszemy kolejny podpunkt, model będzie się dostosowywał do naszych nowych wymagań.  
Po prawej stronie mamy okno z chatem, w którym możemy testować naszą customową wersję GPT. To tutaj wprowadzamy nasze, pliki czy inne dane, które chcemy przetworzyć. Gdy rezultat w prawym oknie będzie zadowalający, możemy zapisać nasz model i wykorzystywać go w przyszłości.

Przykład sesji tworzenia customowej wersji GPT:

![Historia chatu](/blog/tworzenie-customowych-gpt-dla-swoich-potrzeb/interaktywny-chat.jpg?style=centerme)

### Tworzenie customowej wersji GPT za pomocą opcji "Configure"

Jest to opcja kolejna opcja dla bardziej zaawansowanych użytkowników. Wystarczy wejść w zakładkę "Configure" i zdefiniować swoje zadanie. Ustawiamy tam ręcznie takie parametry jak *Name*, *Description*, *Instructions*, *Conversation starters*, *Knowledge*.

![Konfiguracja customowej wersji GPT](/blog/tworzenie-customowych-gpt-dla-swoich-potrzeb/configure.jpg?style=centerme)

Opiszmy te parametry:
- **Name**: Umożliwia nadanie nazwy dla customowego GPT.
- **Description**: Opisuje, do czego służy dany customowa wersja GPT.
- **Instructions**: Zawiera szczegółowe instrukcje dotyczące działania modelu.
- **Conversation starters**: Proponowane pytania lub polecenia, które można zadać customowemu GPT.
- **Knowledge**: Umożliwia wgrywanie plików, które mogą być analizowane przez GPT i są uwzględniane w odpowiedziach.
- **Capabilities**: Opcje, które definiują dodatkowe możliwości GPT, takie jak przeglądanie sieci, generowanie obrazów, interpretacja kodu lub analiza danych.

## Wydanie customowej wersji GPT

Wystarczy kliknąć przycisk *Create* i nasz customowy model GPT zostanie zapisany w naszym koncie. Jedyne co musimy ustalić to czy chcemy, aby nasz model był dostępny dla innych użytkowników, czy też chcemy go zachować dla siebie. 

![Zapisanie customowej wersji GPT](/blog/tworzenie-customowych-gpt-dla-swoich-potrzeb/zapisanie.jpg?style=centerme)

## Przykład użycia customowej wersji GPT

Na potrzeby artykuły udostępniłem publicznie moją customową [wersję GPT](https://chatgpt.com/g/g-LnIibMMXA-requirements-extracter). Załączam także dwa pliki, które można wykorzystać podczas testów:
- [transkrypt dobrej jakości](/blog/tworzenie-customowych-gpt-dla-swoich-potrzeb/transkrypt-with-noises.txt)
- [transkrypt słabej jakości](/blog/tworzenie-customowych-gpt-dla-swoich-potrzeb/transkrypt.txt)

[Przykładowy chat](https://chatgpt.com/share/66e71844-3990-8010-9e15-5662d48f1d77)

# Podsumowanie

Kiedy użytkownik ChatGPT często wykonuje te same zadania, warto rozważyć stworzenie customowej wersji GPT. Dzięki temu można zaoszczędzić czas i uzyskiwać spójne wyniki przy każdym użyciu. Unikamy konieczności wielokrotnego wprowadzania tych samych informacji do chatu AI, co zmniejsza ryzyko pominięcia istotnych szczegółów.

Proces tworzenia customowej wersji GPT jest prosty i intuicyjny, a narzędzia dostępne w ChatGPT ułatwia dostosowanie modelu do naszych potrzeb. 

Posiadamy również kontrolę nad tym, czy chcemy udostępnić nasz customowy model innym użytkownikom, czy też zachować go dla siebie. Sprawdzone customowe modele GPT mogą być współdzielone z współpracownikami, co pozwala na zwiększenie efektywności pracy zespołowej.

