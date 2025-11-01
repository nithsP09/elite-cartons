describe('Contact Page', () => {
  it('fills and submits the contact form successfully', () => {
    cy.visit('https://elite-cartons.vercel.app/contact')

    // Intercept the actual Web3Forms request
    cy.intercept('POST', 'https://api.web3forms.com/submit', {
      statusCode: 200,
      body: { success: true },
    }).as('submitForm')

    // Fill form fields
    cy.get('input[name="name"]').type('Nithya Parvathy')
    cy.get('input[name="email"]').type('nithya@example.com')
    cy.get('input[name="phone"]').type('9876543210')
    cy.get('input[name="company"]').type('Cartons')
    cy.get('select[name="subject"]').select('Request a Quote')
    cy.get('textarea[name="message"]').type('This is a Cypress automated form test.')

    // Submit the form
    cy.get('button[type="submit"]').click()

    // Wait for the intercepted request
    cy.wait('@submitForm', { timeout: 10000 })

    // Assert success message
    cy.contains("✅ Thank you for your message! We'll get back to you soon.", { timeout: 15000 })
      .should('be.visible')
  })
})
