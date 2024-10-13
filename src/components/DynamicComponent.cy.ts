import DynamicComponent from './DynamicComponent.vue'

describe('<DynamicComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(DynamicComponent, {
      props: {
        componentId: 1,
      },
    })
    cy.get('#__cy_vue_root > [data-v-app=""] > div').should('exist')
    cy.get('#__cy_vue_root > [data-v-app=""] > div').should('have.text', '1')
  })
})
