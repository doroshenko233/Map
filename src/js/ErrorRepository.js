export default class ErrorRepository {
    constructor() {
        this.errors = new Map([
          [110, 'Нельзя повысить уровень умершего!'],
          [111, 'Такого героя не существует!'],
          [112, 'Имя персонажа не должно быть меньше 2 символов и не больше - 10 символов'],
          [113, 'Персонаж уже существует, выберите другого персонажа']
        ]);
    }  

    translate(code) {
      if (this.errors.has(code)) {
        return this.errors.get(code);
      } else {
        throw new Error ('Неизвестная ошибка');
      }
    }
}