// За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.

let login = prompt('Your Login', 'user');
let email = prompt('Your Email', 'usermale@gmail.com');
let password = prompt('Your Password', 'password');
alert('Dear ' + login + ', your email is ' + email + ', your password is' + password);