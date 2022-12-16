# Рефакторинг и оптимизация кода на языке программирования JavaScript

Рефакторинг - исправление кода без изменения его внешнего поведения

## Соглашения:

- Код выполняется на сервере и позволяет использовать возможности современного синтаксиса языка
- Имеем дремучее легаси и не имеем понятия почему код был написан именно так
- Код не содержит ошибок, он работает, но не оптимален по ряду характеристик
- Контракты функций должны остаться без изменений
- По каким-либо причинам не используются линтеры и преимущества подсветки кода в IDE
- Рассматриваем общие антипаттерны без привязки к конкретной парадигме

## Цели

- Улучшение характеристик кода:
  - читаемость и понимаемость человеком
  - удовлетворение новых конвенций (стандарты языка, кодстайл, принятый в компании)
  - имасштабируемость
  - использование новых возможностей языка
  - строгость кода (типизация и иммутабельность)
- Улучшение характеристик исполнения:
  - скорость выполнения 
  - потребление памяти
  - уход от блокирующих операций

# Практика на основе различных техник

[Переименование](./renaming.mjs)

[Избавление от дублирующих фрагментов](./duplication.mjs)

[Замена алгоритмов](./algorithms.mjs)

[Использование стандартных методов языка](./standardMethods.js)

[Области видимости и переменные](./visAreas.js)

[Антипаттерны](./antipatterns.js)





