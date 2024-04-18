import ErrorRepository from "../ErrorRepository";

test('Должно быть описание ошибки', () => {
   const error = new ErrorRepository();
   expect(error.translate(110)).toBe('Нельзя повысить уровень умершего!');
   expect(error.translate(111)).toBe('Такого героя не существует!');
});

test('Должна быть неизвестная ошибка', () => {
   const error = new ErrorRepository();
   expect(() => error.translate(150)).toThrow(new Error ('Неизвестная ошибка'));
});