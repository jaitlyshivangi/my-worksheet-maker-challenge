describe('When a user clicks a domain, a subdomain panel should open', () => {
  let subjects, grades, domains, subdomains;

  beforeEach(() => {
    cy.fixture('subject.json').then((data) => {
      subjects = data;
    });

    cy.fixture('grades.json').then((data) => {
      grades = data;
    });

    cy.fixture('domains.json').then((data) => {
      domains = data;
    });

    cy.fixture('subdomains.json').then((data) => {
      subdomains = data;
    });
  });

  it('Opens a subdomain panel for Language domain', () => {
    cy.visit('/');
    cy.contains(subjects[0].name).click();
    cy.contains(grades[0].name).click();
    cy.contains(domains[1].name).click();
    cy.get("#headlessui-disclosure-panel-32").should('be.visible');
  });
});
