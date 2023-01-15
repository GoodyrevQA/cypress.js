describe('Example_1', function () {
    it('Негативный тет регистрации', function () {
         cy.visit('https://bp.eft-cors.ru/register');
         cy.get('.swal2-close').click();
         cy.get('#name').type('Иванов Иван Иванович');
         cy.get('#register-form > .btn').click();
         cy.contains('Заполните регион');
     })
 })