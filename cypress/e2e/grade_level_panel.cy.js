
describe("When a user clicks a grade level, a domain panel should open", () => {

    beforeEach(() => {
        cy.fixture('subject.json').as('subjects');
        cy.fixture('grades.json').as('grades');
    });

    it("Opens a domain panel when a grade level is clicked", () => {
      cy.visit("/");
      cy.get('@subjects').then((subjects) => {
        cy.contains(subjects[0].name).click();
    });
    cy.get('@grades').then((grades) => {
        cy.contains(grades[0].name).click();
    });
      cy.get("#headlessui-disclosure-panel-6").should("be.visible");  //Assert that domain panel is open
    });
});
  