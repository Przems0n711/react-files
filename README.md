# Ćwiczenie 2

W tym ćwiczeniu stworzymy kontekst, który pozwoli zarządzać motywem aplikacji.

1. W `src/contexts` stwórz folder `ThemeContext`.
2. Wewnątrz folderu `ThemeContext` stwórz plik `index.jsx`.
3. W pliku `index.jsx` zaimportuj funkcję `createContext` z biblioteki `react`.
4. Stwórz stałą o nazwie `ThemeContext` i przypisz do niej kontekst utworzony za pomocą funkcji `createContext`.
5. Stwórz stałą o nazwie `ThemeProvider` i przypisz do niej komponent funkcyjny.
6. Wewnątrz komponentu za pomocą destukturyzacji wyjmij z propsów pole `children`.
7. Wewnątrz komponentu stwórz stan o nazwie `theme`. Domyślna wartość to `light`.
8. Wewnątrz komponentu stwórz funkcję o nazwie `toggleTheme`, która naprzemiennie zmienia stan `theme` z `light` na `dark`, z `dark` na `light`.
9. Komponent powinien zwrócić JSX, gdzie element nadrzędny to komponent będący dostawcą danych z kontekstu `ThemeContext`.
10. Za pomocą propsa `value` do dostawcy możemy przekazać wszystkie elementy, które chcemy udostępnić konsumentom. A więc przekażmy obiekt, składający się z aktualnej wartości stanu `theme` oraz funkcji `toggleTheme`.
11. Wewnątrz elementu nadrzędnego należy wyrenderować to co komponent otrzymał w `children` props.
12. Wyeksportuj utworzony komponent `ThemeProvider` za pomocą `export`.
13. Wyeksportuj utworzony kontekst `ThemeContext` za pomocą `export default`.

---

14. Wewnątrz pliku `src/main.jsx` zaimportuj komponent pełniący rolę dostawcy - `ThemeProvider` i owiń nim komponent `App`.

---

15. W `src/components` stwórz folder na komponent funkcyjny `ThemeSwitch`.
16. Wewnątrz folderu `ThemeSwitch` stwórz pliki `ThemeSwitch.jsx`, `ThemeSwitch.scss` oraz `index.jsx`.
17. Wewnątrz pliku `ThemeSwitch.jsx` zaimportuj style, stwórz komponent funkcyjny i wyeksportuj go za pomocą `export default`.
18. Komponent jest konsumentem kontekstu `ThemeContext`, a więc należy zaimportować hook `useContext` oraz `ThemeContext`.
19. Wewnątrz komponentu należy wywołać `useContext`, przekazując mu w argumencie `ThemeContext`. Funkcja zwróci wszystkie dane, które zostały udostępnione przez dostawcę, a więc `theme` i `toggleTheme`. Dokonaj destrukturyzacji obiektu, który zwraca `useContext`.
20. Komponent powinien zwracać JSX, w którym nadrzędny element to przycisk o klasie `theme-switch` oraz warunkowo klasa `fill`, gdy motyw jest ciemny.
21. Wewnątrz przycisku powinna znajdować się poniższa ikona:

```jsx
<svg
  className="moon"
  fill="none"
  stroke="currentColor"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="2"
  width="24"
  height="24"
  viewBox="0 0 24 24"
>
  <defs></defs>
  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
</svg>
```

22. Po kliknięciu w przycisk należy zmienić motyw na przeciwny.

23. W pliku `ThemeSwitch.scss` ostylizuj `.theme-switch`:

- ustaw tło na przezroczyste
- usuń obramowanie
- usuń marginesy wewnętrzne
- ustaw kolor tekstu na wartość ze zmiennej --main-color
- za pomocą flexbox wyśrodkuj dzieci na osi głównej i poprzecznej

23. Ostylizuj `.theme-switch.fill svg`. (Użyj do tego zagnieżdzonych selektorów)

- ustaw właściwość fill na wartość ze zmiennej --main-color

24. W pliku `index.jsx` zaimportuj komponent i wyeksportuj go za pomocą `export default`.

---

26. W pliku `src/components/AppHeader.jsx` zaimportuj komponent `ThemeSwitch` i wyrenderuj go jako pierwsze dziecko elementu `.app-header > div:nth-child(2)`.

---

27. W pliku `src/App.jsx` analogicznie jak w `ThemeSwitch` skorzystaj z kontekstu `ThemeContext`. Za pomocą destrukturyzacji wyjmij `theme`.

28. Zaktualizuj element nadrzędny komponentu tak, aby posiadał dodatkowo klasę `light` lub `dark`, w zależności od aktualnego motywu.

29. W `App.scss` ostylizuj `.app` pod warunkiem, że posiada klasę `light`. Użyj do tego nested selectors. Dodaj poniższe zmienne lokalne:

```css
{
    --app-container: #f3f6fd;
    --main-color: #1f1c2e;
    --secondary-color: #4a4a4a;
    --link-color: #1f1c2e;
    --link-color-hover: #c3cff4;
    --link-color-active: #fff;
    --link-color-active-bg: #1f1c2e;
    --projects-section: #fff;
    --message-box-hover: #fafcff;
    --message-box-border: #e9ebf0;
    --more-list-bg: #fff;
    --more-list-bg-hover: #f6fbff;
    --more-list-shadow: rgba(209, 209, 209, 0.4);
    --button-bg: #1f1c24;
    --search-area-bg: #fff;
    --star: #1ff1c2e;
    --message-btn: #fff;
}
```

30. W `App.scss` ostylizuj `.app` pod warunkiem,
    że posiada klasę `dark`. Użyj do tego nested selectors. Dodaj poniższe zmienne lokalne:

```css
{
      --app-container: #111827;
    --main-color: #fff;
    --secondary-color: rgba(255, 255, 255, 0.8);
    --projects-section: #1f2937;
    --link-color: rgba(255, 255, 255, 0.8);
    --link-color-hover: rgba(195, 207, 244, 0.1);
    --link-color-active-bg: rgba(195, 207, 244, 0.2);
    --button-bg: #1f2937;
    --search-area-bg: #1f2937;
    --message-box-hover: #243244;
    --message-box-border: rgba(255, 255, 255, 0.1);
    --star: #ffd92c;
    --light-font: rgba(255, 255, 255, 0.8);
    --more-list-bg: #2f3142;
    --more-list-bg-hover: rgba(195, 207, 244, 0.1);
    --more-list-shadow: rgba(195, 207, 244, 0.1);
    --message-btn: rgba(195, 207, 244, 0.1);
}
```
