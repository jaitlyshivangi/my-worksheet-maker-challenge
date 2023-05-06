

describe("When a user clicks a subject, they should see a list of 12 grade levels", () => {

    beforeEach(() => {
        cy.fixture('subject.json').as('subjects');
    });

    it("Displays 12 grade levels for English subject", () => {
        cy.visit('/');
        cy.get('@subjects').then((subjects) => {
            cy.contains(subjects[0].name).click();
            cy.get("div[data-headlessui-state='open']")
                .should("be.visible")
                .find(".space-y-4")
                .should("have.length", 12);  //Assert that the list contains 12 grade levels
        });
    });
});
