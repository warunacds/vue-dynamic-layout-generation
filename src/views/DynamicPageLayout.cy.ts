import DynamicPageLayout from './DynamicPageLayout.vue'

describe('<DynamicPageLayout />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(DynamicPageLayout)
  })

  cy.get('h1').should('have.text', 'Test Page Layout')
  cy.get('textarea').should('exist')
})
