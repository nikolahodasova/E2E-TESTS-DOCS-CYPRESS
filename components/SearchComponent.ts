class SearchComponent {
  searchInput() {
    return cy.get('input[type="search"]');
  }

  search(text: string) {
    this.searchInput().clear().type(`${text}{enter}`);
  }

  clear() {
    this.searchInput().clear();
  }
}

export default new SearchComponent();