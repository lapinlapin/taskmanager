<template>
  <div class="header">
    <div class="header__logo"/>
    <div class="header__title">Tasks Manager</div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {}
  },
}
</script>
<style lang="scss">
  $primary-gray: #ccc;

  .header {
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
    font-size: 24px;
    border-bottom: 1px solid $primary-gray;
  }

  .header__logo {
    width: 50px;
    height: 50px;
    margin: 0 10px;
    cursor: pointer;

    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MDUgNTA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDUgNTA1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGNpcmNsZSBzdHlsZT0iZmlsbDojOTBERkFBOyIgY3g9IjI1Mi41IiBjeT0iMjUyLjUiIHI9IjI1Mi41Ii8+PHBhdGggc3R5bGU9ImZpbGw6IzMyNEE1RTsiIGQ9Ik0zNzkuOSw0MzAuMUgxMjUuMWMtMi42LDAtNC43LTIuMS00LjctNC43VjEwMi41YzAtMi42LDIuMS00LjcsNC43LTQuN0gzODBjMi42LDAsNC43LDIuMSw0LjcsNC43djMyM0MzODQuNiw0MjgsMzgyLjUsNDMwLjEsMzc5LjksNDMwLjF6Ii8+PHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHBvaW50cz0iMTQ2LjQsMTE2LjggMTQ2LjQsMzc5LjYgMzIxLjYsMzc5LjYgMzIxLjYsMzQyLjcgMzU4LjYsMzQyLjcgMzU4LjYsMTE2LjggIi8+PHBvbHlnb24gc3R5bGU9ImZpbGw6I0U2RTlFRTsiIHBvaW50cz0iMzIxLjYsMzc5LjYgMzU4LjYsMzQyLjcgMzIxLjYsMzQyLjcgIi8+PHBhdGggc3R5bGU9ImZpbGw6I0ZGNzA1ODsiIGQ9Ik0yNzMuMyw4Ny4ydi03LjNjMC0xMS41LTkuMy0yMC44LTIwLjgtMjAuOGMtMTEuNSwwLTIwLjgsOS4zLTIwLjgsMjAuOHY3LjNIMTk1djQyLjZoMTE1LjFWODcuMkgyNzMuM3oiLz48Y2lyY2xlIHN0eWxlPSJmaWxsOiM5MERGQUE7IiBjeD0iMjUyLjUiIGN5PSI3OS45IiByPSIxMC40Ii8+PHBhdGggc3R5bGU9ImZpbGw6I0U2RTlFRTsiIGQ9Ik0yOTUuMSwzMDkuMUgxNzYuNlYxOTAuNmgxMTguNVYzMDkuMXogTTE4OC4zLDI5Ny41aDk1LjJ2LTk1LjJoLTk1LjJWMjk3LjV6Ii8+PHBvbHlnb24gc3R5bGU9ImZpbGw6IzU0QzBFQjsiIHBvaW50cz0iMjQzLjksMjg1LjQgMjAwLjMsMjQxLjggMjIwLjksMjIxLjIgMjQzLjksMjQ0LjIgMzA3LjgsMTgwLjQgMzI4LjQsMjAxICIvPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==);
  }
</style>
