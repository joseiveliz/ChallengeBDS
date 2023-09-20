class eBayPage {
  get searchBox() { return $('#gh-ac'); }
  get searchButton() { return $('#gh-btn'); }
  get searchResults() { return $('.srp-controls__count h1 span:nth-child(1)'); }

  open() {
    browser.url('http://www.ebay.com');
  }

  search(prod) {
    this.searchBox.setValue(prod);
    this.searchButton.click();
  }

  getSearchResultsCount() {
    const searchResultsElement = this.searchResults;
    const resultText = searchResultsElement.getText();
    
    if (typeof resultText === 'string') {
      // Solo realizar la operación de reemplazo si resultText es una cadena de texto
      const resultCount = parseInt(resultText.replace(/[^\d]/g, ''), 10);
      return resultCount;
    } else {
      // En caso contrario, devuelve un valor por defecto o maneja el error según tu necesidad
      console.error('El resultado no es una cadena de texto válida:', resultText);
      return 0; // O cualquier otro valor por defecto
    }

  }
}

module.exports = new eBayPage();
