const Aluno = require('./Aluno');

// 1. Testar se a média está sendo calculada corretamente
test('Calcula a média corretamente', () => {
    const aluno = new Aluno('Camila', [7, 8]);
    expect(aluno.calcularMedia()).toBe(7.5);
});

// 2. Testar se a menção "MS" é retornada corretamente
test('Retorna a menção "MS"', () => {
    const aluno = new Aluno('Camila', [7, 7]);
    expect(aluno.obterMencao()).toBe('MS');
});

// 3. Testar se o aluno foi aprovado ou reprovado
test('Aluno foi aprovado', () => {
    const aluno = new Aluno('Camila', [7, 8]);
    expect(aluno.statusAprovacao()).toBe('aprovad@');
});

// 4. Testar para menção "SS"
test('Retorna a menção "SS"', () => {
    const aluno = new Aluno('Camila', [9, 10]);
    expect(aluno.obterMencao()).toBe('SS');
});

// 5. Testar se o aluno foi aprovado com menção SS
test('Aluno foi aprovado com menção SS', () => {
    const aluno = new Aluno('Camila', [9, 10]);
    expect(aluno.statusAprovacao()).toBe('aprovad@');
});

// 6. Testar para menção "MM"
test('Retorna a menção "MM"', () => {
    const aluno = new Aluno('Camila', [5, 5]);
    expect(aluno.obterMencao()).toBe('MM');
});

// 7. Testar se o aluno foi aprovado com menção MM
test('Aluno foi aprovado com menção MM', () => {
    const aluno = new Aluno('Camila', [5, 5]);
    expect(aluno.statusAprovacao()).toBe('aprovad@');
});

// 8. Testar para menção "MI"
test('Retorna a menção "MI"', () => {
    const aluno = new Aluno('Camila', [4, 4]);
    expect(aluno.obterMencao()).toBe('MI');
});

// 9. Testar se o aluno foi reprovado com menção MI
test('Aluno foi reprovado com menção MI', () => {
    const aluno = new Aluno('Camila', [4, 4]);
    expect(aluno.statusAprovacao()).toBe('reprovad@');
});

// 10. Testar se a média de um array vazio retorna NaN
test('Média de notas vazias retorna NaN', () => {
    const aluno = new Aluno('Camila', []);
    expect(aluno.calcularMedia()).toBeNaN();
});

// 11. Testar se notas com valores decimais são calculadas corretamente
test('Calcula corretamente a média de notas decimais', () => {
    const aluno = new Aluno('Camila', [7.5, 8.2]);
    expect(aluno.calcularMedia()).toBeCloseTo(7.85);
});

// 12. Testar se notas fora do intervalo [0,10] geram erro
test('Lança erro quando a nota ultrapassa 10', () => {
    const aluno = new Aluno('Camila', [11, 9]);
    expect(() => aluno.calcularMedia()).toThrow('Média acima da máxima permitida!');
});

// 13. Testar se as notas são números
test('Lança erro se as notas não forem números', () => {
    const aluno = new Aluno('Camila', ['a', 8]);
    expect(() => aluno.calcularMedia()).toThrow();
});

// 14. Testar se o aluno pode ser aprovado faltando uma prova e tirando nota máxima na última
test('Aprovado com uma nota máxima e uma nota ausente', () => {
    const aluno = new Aluno('Camila', [0, 10]);
    expect(aluno.obterMencao()).toBe('MM');
    expect(aluno.statusAprovacao()).toBe('aprovad@');
});

// 15. Testar se todas as notas iguais a zero retornam menção "MI"
test('Notas iguais a zero retornam menção "MI"', () => {
    const aluno = new Aluno('Camila', [0, 0]);
    expect(aluno.obterMencao()).toBe('MI');
});

// 16. Testar se notas muito próximas de 7 retornam a menção correta
test('Nota 6.9 retorna "MM"', () => {
    const aluno = new Aluno('Camila', [6.9, 6.9]);
    expect(aluno.obterMencao()).toBe('MM');
});

// 17. Testar se uma única nota zero afeta a aprovação
test('Nota zero afeta aprovação', () => {
    const aluno = new Aluno('Camila', [0, 10]);
    expect(aluno.obterMencao()).toBe('MM');
});

// 18. Testar se a soma total das notas é correta
test('Soma total das notas está correta', () => {
    const aluno = new Aluno('Camila', [7, 8]);
    expect(aluno.calcularMedia()).toBe(7.5);
});

// 19. Testar se a função aprovado funciona com menção MM
test('Aprovado com menção MM', () => {
    const aluno = new Aluno('Camila', [5, 5]);
    expect(aluno.statusAprovacao()).toBe('aprovad@');
});

// 20. Testar se aluno com notas abaixo de 5 é reprovado
test('Aluno com notas abaixo de 5 é reprovado', () => {
    const aluno = new Aluno('Camila', [4, 4]);
    expect(aluno.statusAprovacao()).toBe('reprovad@');
});
