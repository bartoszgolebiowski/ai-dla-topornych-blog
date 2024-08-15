const securityAgenda = {
  title: 'Ochrona Danych i Bezpieczeństwo Informacji',
  duration: '30 minut + pytania + quiz',
  type: 'Wykład',
  agenda: [
    {
      title: 'Wprowadzenie do tematu',
      description:
        'Cel spotkania i omówienie znaczenia ochrony danych w kontekście używania AI. Krótkie przedstawienie agendy.',
    },
    {
      title: 'Studium przypadku: Wyciek danych w firmie Samsung',
      description:
        'Opis incydentu: Jak pracownicy Samsunga nieświadomie udostępnili wrażliwe dane za pomocą narzędzi AI. Konsekwencje wycieku danych: Potencjalne ryzyka związane z używaniem AI do przetwarzania danych.',
    },
    {
      title: 'Umiejscowienie danych wrażliwych i konsekwencje ich ujawnienia',
      description:
        'Identyfikacja miejsc przechowywania danych. Skutki potencjalnych wycieków dla firmy i klientów.',
    },
    {
      title: 'Naruszenie NDA: Skutki prawne i finansowe',
      description:
        'Omówienie naruszeń umów NDA poprzez udostępnianie danych w AI. Kary finansowe, prawne i konsekwencje dla reputacji firmy.',
    },
    {
      title: 'Ochrona danych osobowych w promptach',
      description:
        'Przykłady danych wrażliwych. Jak unikać naruszeń i bezpiecznie korzystać z narzędzi AI. Quiz dotyczący ochrony danych (interaktywna sesja).',
    },
    {
      title: 'Dyskusja i pytania',
      description:
        'Otwarte forum do zadawania pytań i omawiania zagadnień poruszonych podczas spotkania. Wnioski końcowe i rekomendacje dotyczące bezpieczeństwa danych.',
    },
    {
      title: 'Podsumowanie i zakończenie',
      description:
        'Przypomnienie kluczowych punktów. Zaplanowanie dalszych działań i kolejnych kroków.',
    },
  ],
}

const gptAgenda = {
  title: 'Wysokopoziomowe wtyłumaczenie jak Funkcjonuje Model GPT',
  duration: '40 minut + pytania + quiz',
  type: 'Wykład',
  agenda: [
    {
      title: 'Wprowadzenie do Prompt Engineeringu i Modelu GPT',
      description: 'Proste wyjaśnienia i wysokopoziomowy przegląd.',
    },
    {
      title: 'Jak Działa Model GPT',
      description:
        'Przyjęcie prompta, tokenizacja, uwzględnienie historii chatu, wybór słów, uwzględnienie współczynnika temperatury, generowanie odpowiedzi.',
    },
    {
      title: 'Terminologia Prompt Engineeringu',
      description:
        'Definicje: prompt, tokenizacja, historia chatu, generowanie wyrazów, temperatura.',
    },
    {
      title: 'Podsumowanie Informacji Dotyczących Działania Modeli GPT',
      description:
        'Zasady działania, rola promptów i temperatury, długość odpowiedzi, okno kontekstowe.',
    },
    {
      title: 'Wnioski Empiryczne',
      description:
        'Efektywność promptów, analiza wyników AI, bezpieczeństwo danych, procesowanie wyników.',
    },
    {
      title: 'Quiz',
      description:
        'Test wiedzy z zakresu prompt engineeringu, tokenizacji, historii chatu, temperatury i daty odcięcia.',
    },
  ],
}

const aiToolsAgenda = {
  title: 'Narzędzia Sztucznej Inteligencji: Przegląd i Porównanie Microsoft Copilot i Chat GPT',
  duration: '90 minut + pytania + quiz',
  type: 'Wykład + zadania praktyczne',
  expercices: '2',
  agenda: [
    {
      title: 'Wprowadzenie do Narzędzi Sztucznej Inteligencji',
      description: 'Analiza najnowszych technologii i zastosowań.',
    },
    {
      title: 'Microsoft Copilot',
      description:
        'Omówienie trybów, limitów znaków, zarządzania plikami, oraz możliwości wyszukiwarki.',
    },
    {
      title: 'Generowanie Obrazów za Pomocą Microsoft Copilot',
      description: 'Jak wygenerować obraz: opis tekstowy, kreatywność, dostosowanie.',
    },
    {
      title: 'Czego Microsoft Copilot Nie Potrafi',
      description:
        'Ograniczenia w tworzeniu wykresów, załączaniu filmów, oraz personalizacji odpowiedzi.',
    },
    {
      title: 'Tryby "Work" i "Web" w Microsoft Copilot',
      description: 'Różnice między trybami pracy: zasoby wewnętrzne vs. zasoby publiczne.',
    },
    {
      title: 'Chat GPT: Modele i Cechy Wspólne',
      description: 'Porównanie modeli GPT-4o, GPT-4, i GPT-3.5 oraz ich wspólne cechy.',
    },
    {
      title: 'Chat GPT: Mocne i Słabe Strony',
      description:
        'Przegląd zalet i wad, w tym obsługi załączników, tworzenia obrazów i możliwości personalizacji.',
    },
    {
      title: 'Quiz',
      description: 'Test wiedzy na temat trybów pracy Microsoft Copilot i porównania modeli GPT.',
    },
  ],
}

const promptEngineeringAgenda = {
  title: 'Podstawowe techniki pisania promptów. Zasady ogólne i praktyczne wskazówki',
  duration: '60 minut + pytania + quiz',
  type: 'Wykład',
  agenda: [
    {
      title: 'Wprowadzenie do Prompt Engineeringu',
      description: 'Kluczowe zasady tworzenia skutecznych promptów.',
    },
    {
      title: 'Struktura Skutecznego Promptu',
      description:
        'Omówienie roli, instrukcji, kontekstu, przykładów i pytania jako elementów struktury promptu.',
    },
    {
      title: 'Znaczenie Roli w Prompcie',
      description:
        'Definiowanie roli, jaką model ma pełnić, aby ustalić ton i kontekst odpowiedzi.',
    },
    {
      title: 'Znaczenie Instrukcji',
      description: 'Określanie konkretnych zadań i formatu odpowiedzi, aby uniknąć nieporozumień.',
    },
    {
      title: 'Znaczenie Kontekstu',
      description:
        'Dostarczanie tła i specyfikacji zadania, co pomaga modelowi w zrozumieniu celów użytkownika.',
    },
    {
      title: 'Znaczenie Przykładów',
      description:
        'Ilustrowanie oczekiwanych odpowiedzi, co pomaga modelowi lepiej zrozumieć zadanie i dostosować odpowiedź.',
    },
    {
      title: 'Znaczenie Pytania / Polecenia',
      description: 'Formułowanie pytania, które precyzyjnie kieruje model na rozwiązanie problemu.',
    },
    {
      title: 'Czy Prompt Musi Być Złożony?',
      description:
        'Omówienie, kiedy prostota promptu jest wystarczająca, a kiedy złożoność jest wymagana.',
    },
    {
      title: 'Formowatowanie i Separatory',
      description: 'Rola formatowania i separatorów w poprawie czytelności i organizacji promptu.',
    },
    {
      title: 'Badania Naukowe nad Inżynierią Promptów',
      description:
        'Zwiększenie precyzji i użyteczności modeli AI dzięki badaniom nad inżynierią promptów.',
    },
    {
      title: 'Ogólne Zasady Tworzenia Promptów',
      description:
        'Powtarzanie kluczowych słów, używanie trybu rozkazującego, oraz sugerowanie odpowiedzi.',
    },
    {
      title: 'Quiz',
      description:
        'Test wiedzy na temat znaczenia poszczególnych elementów struktury promptu i ich zastosowania.',
    },
  ],
}

const promptExercises = {
  title: 'Ćwiczenia praktyczne w tworzeniu promptów w Microsoft Copilot lub Chat GPT',
  duration: '120 minut + pytania',
  expercices: 'od 6 do 8',
  type: 'Ćwiczenia praktyczne + analiza wyników',
  agenda: [],
}

const promptCopilot365Exercises = {
  title: 'Ćwiczenia praktyczne w tworzeniu promptów w Microsoft Copilot 365',
  duration: '60 minut + pytania',
  expercices: '3',
  type: 'Ćwiczenia praktyczne + analiza wyników + demonstracja praktycznych zastosowań',
  agenda: [],
}

export const agenda = [
  securityAgenda,
  gptAgenda,
  aiToolsAgenda,
  promptEngineeringAgenda,
  promptExercises,
  promptCopilot365Exercises,
]
