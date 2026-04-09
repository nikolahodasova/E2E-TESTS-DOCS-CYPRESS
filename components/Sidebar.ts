class Sidebar {
  menuItem(name: string) {
    return cy.contains(name);
  }

  openMenu(name: string) {
    this.menuItem(name).click();
  }

  selectSubItem(name: string) {
    cy.contains(name).click();
  }
}

export default new Sidebar();