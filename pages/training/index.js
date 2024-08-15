import { agenda } from '@/data/training/agenda'

export default function Trainings() {
  return (
    <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24">
      <div className="pt-6 pb-8 space-x-2 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 mb-12">
          Oferta Szkoleniowa
        </h1>
        <h1 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          Opis Szkolenia: Prompt Engineering – Tworzenie Skutecznych Promptów
        </h1>
        <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
          Zapraszam na intensywne szkolenie z zakresu Prompt Engineeringu. Dzięki temu szkoleniu
          uczestnicy zdobędą praktyczne umiejętności w tworzeniu skutecznych promptów, które mogą
          być wykorzystane w różnych narzędziach sztucznej inteligencji, takich jak Microsoft
          Copilot czy Chat GPT lub opcjonalnie w Microsoft Copilot 365.
        </p>
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">O szkoleniowcu</h2>
        <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
          Jako szkoleniowiec z doświadczeniem w edukacji blisko 100 osób, w tym ponad 30
          specjalistów w dziedzinie Prompt Engineeringu, oferuję intensywne, 8-godzinne szkolenie w
          formie zdalnej lub na miejscu. Szkolenie przeznaczone jest dla grupy maksymalnie 7
          uczestników, co gwarantuje indywidualne podejście i możliwość dogłębnego zrozumienia
          tematyki.
        </p>

        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          Dla Kogo Jest Szkolenie?
        </h2>
        <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
          Szkolenie jest skierowane zarówno do osób technicznych, jak i nietechnicznych, którzy chcą
          poszerzyć swoje umiejętności w tworzeniu skutecznych promptów. Uczestnicy zyskają
          praktyczną wiedzę i narzędzia, które mogą zastosować w codziennej pracy, niezależnie od
          poziomu zaawansowania technologicznego.
        </p>
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          Indywidualne Konsultacje i Dedykowane Zadania
        </h2>
        <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
          Oferuję również usługi indywidualnej konsultacji, podczas których możemy wspólnie
          przeanalizować codzienne obowiązki uczestników szkolenia. Na tej podstawie stworzę
          dedykowane zadania, które będą zgodne z ich specyficznymi potrzebami i wymaganiami
          zawodowymi. Dzięki temu uczestnicy zdobędą umiejętności, które będą mogli bezpośrednio
          zastosować w swojej pracy.
        </p>
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">Co Obejmuje Szkolenie?</h2>
        <ul className="mt-4">
          <li>
            <strong>Dwa wstępne zadania rozgrzewkowe</strong>
            <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
              Wprowadzą uczestników w tematykę szkolenia i pomogą zbudować solidne fundamenty do
              dalszej nauki.
            </p>
          </li>
          <li>
            <strong>Sześć starannie opracowanych przykładów</strong>{' '}
            <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
              Ilustrują kluczowe zasady i techniki tworzenia promptów.
            </p>
          </li>
          <li>
            <strong>Cztery quizy</strong>{' '}
            <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
              Sprawdzą zrozumienie omawianych zagadnień i pomogą utrwalić zdobytą wiedzę.
            </p>
          </li>
          <li>
            <strong>Sześć zadań promptowych</strong>{' '}
            <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
              Pozwolą uczestnikom samodzielnie zastosować zdobyte umiejętności w realistycznych
              scenariuszach.
            </p>
          </li>
          <li>
            <strong>Trzy zadania z wykorzystaniem Microsoft Copilot 365</strong>{' '}
            <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
              Umożliwią uczestnikom praktyczne zastosowanie promptów w narzędziu Microsoft Copilot
              365.
            </p>
          </li>
        </ul>
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">Tematy Prezentacji</h2>
        {agenda.map((item) => {
          const Tag = item.agenda.length > 0 ? 'details' : 'div'
          return (
            <Tag key={item.title}>
              <summary className="mb-3 prose  max-w-none dark:text-gray-400">
                {item.title} <br />
                Czas trwania: {item.duration} <br />
                Typ prezentacji: {item.type} <br />
                {item.expercices ? `Ilość zadań: ${item.expercices}` : ''}{' '}
              </summary>
              <ul className="mt-4">
                {item.agenda.map((agendaItem) => (
                  <SummaryAndConclusion
                    key={agendaItem.title}
                    title={agendaItem.title}
                    description={agendaItem.description}
                  />
                ))}
              </ul>
            </Tag>
          )
        })}
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">Kontakt</h2>
        <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
          Zainteresowanych zapraszam do kontaktu mailowego:{' '}
          <a href="mailto:contact@bgolebiowski.com?subject=Zainteresowany%20Twoimi%20Usługami&body=Jestem%20zainteresowany%20Twoimi%20usługami.%20Czy%20możemy%20się%20skontaktować?">
            contact@bgolebiowski.com
          </a>
        </p>
      </div>
    </div>
  )
}

const SummaryAndConclusion = ({ title, description }) => {
  return (
    <li>
      <strong className="text-gray-900 dark:text-gray-100">{title}</strong>
      <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">{description}</p>
    </li>
  )
}
