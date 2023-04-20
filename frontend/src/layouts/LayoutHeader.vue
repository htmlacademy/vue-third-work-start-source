<template>
  <header class="header">
    <div class="header__logo">
      <a href="index.html" class="logo">
        <img src="img/logo.svg" alt="VueWork logo" width="147" height="23">
      </a>
    </div>



    <form action="#" class="header__search">
      <input type="search" name="search" required placeholder="Поиск">
    </form>

    <a href="#" class="header__create-task">Создать карточку</a>

    <a href="#" class="header__user">
      <img src="img/user1.jpg" alt="Вика Некрасова" width="40" height="40">
    </a>

    <div class="header__menu">
      <div class="user-menu">
        <img src="img/user1.jpg" width="56" height="56" alt="Вика Некрасова">
        <span>Вика Некрасова</span>
        <a href="#" class="user-menu__link">Мой аккаунт</a>
        <a href="#" class="user-menu__link">Выйти</a>
      </div>
    </div>
  </header>
</template>