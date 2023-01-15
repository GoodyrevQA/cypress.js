describe('Example_1', function () {
    it('Простой тест навигации по сайту', function () {
         cy.visit('https://eftgroup.ru/');
         cy.get('.menu-only > .mega-menu > .table-menu > table > tbody > tr > .catalog > .wrap > .dropdown-toggle > div').click();
         cy.get('#bx_1847241719_283 > .section_item_inner > tbody > tr > .image > .thumb > svg').click();
         cy.get('#bx_1847241719_295 > .section-compact-list__info > .section-compact-list__link > span').click();
         cy.contains('Кабели');  
     })
 })

 describe('Example_2', function () {
    it('Простой тест поиска по сайту', function () {
         cy.reload();
         cy.visit('https://eftgroup.ru/');
         cy.get('.menu-only > .mega-menu > .table-menu > table > tbody > tr > .catalog > .wrap > .dropdown-toggle > div').click();
         cy.get('.items-wrapper > .right-icons > :nth-child(3) > .wrap_icon > .top-btn > .svg > svg').click();
         cy.get('#title-search-input').type('нив');
         cy.get('#title-search > .search > .search-button-div > .btn').click();
         cy.contains('Нивелир')
        })
 })