/// <reference types="cypress" />

declare global {
    type Chainable<Subject = any> = Cypress.Chainable<Subject>;
    type ChainableJQueryElement = Cypress.Chainable<JQuery<HTMLElement>>;
  }
  
  export {};
  