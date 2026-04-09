describe('API Tests', () => {

  const baseUrl: string = 'https://jsonplaceholder.typicode.com';

  it('GET posts', () => {
    cy.request(`${baseUrl}/posts`).its('status').should('eq', 200);
  });

  it('GET single post', () => {
    cy.request(`${baseUrl}/posts/1`)
      .its('body.id')
      .should('eq', 1);
  });

  it('POST post', () => {
    cy.request('POST', `${baseUrl}/posts`, {
      title: 'QA',
      body: 'Test',
      userId: 1
    }).its('status').should('eq', 201);
  });

  it('PUT post', () => {
    cy.request('PUT', `${baseUrl}/posts/1`, {
      title: 'Updated'
    }).its('status').should('eq', 200);
  });

  it('DELETE post', () => {
    cy.request('DELETE', `${baseUrl}/posts/1`)
      .its('status')
      .should('be.oneOf', [200, 204]);
  });

});