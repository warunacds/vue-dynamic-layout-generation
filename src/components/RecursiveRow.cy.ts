import RecursiveRow from './RecursiveRow.vue'

describe('<RecursiveRow />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(RecursiveRow, {
      props: {
        row: [
          { col: 12, row: [{ col: 12, component_id: 1 }] },
          { col: 12, row: [{ col: 6, component_id: 2 }] },
        ],
      },
    })
    cy.get(':nth-child(1) > v-row > v-col > div').should('exist')
    cy.get(':nth-child(2) > v-row > v-col > div').should('exist')

    cy.get(':nth-child(1) > v-row > v-col > div').should('have.text', '1')
    cy.get(':nth-child(2) > v-row > v-col > div').should('have.text', '2')
  })
})
