describe("Checking and unchecking standards", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.contains("English").click();
      cy.contains("Kindergarten").click();
      cy.contains("Language").click();
      cy.contains("Conventions of Standard English").click();
    });
  
    it("Selects and deselects standards", () => {
        cy.get('input[type="checkbox"]').first().check();
      cy.contains(
        "You have not selected any standard. Your selected standards will appear here."
      ).should("not.exist");
      cy.contains("Standard").should("exist");
  
      cy.get('input[type="checkbox"]').first().uncheck();
      cy.contains("Standard").should("not.exist");
      cy.contains(
        "You have not selected any standard. Your selected standards will appear here."
      ).should("exist");
    });
  });
  