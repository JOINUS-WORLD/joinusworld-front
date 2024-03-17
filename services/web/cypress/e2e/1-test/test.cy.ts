describe("Navigation", () => {
  it("should navigate to the test page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="test"]').click();

    // The new url should include "/test"
    cy.url().should("include", "/test");

    // The new page should contain an h1 with "About"
    cy.get("h1").contains("Test");
  });
});
