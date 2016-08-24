import StockStore from './stock_store.coffee';

const RevisionStore = new StockStore({
  sortKey: 'date',
  sortAsc: false,
  descKeys: {
    date: true,
    characters: true
  },
  modelKey: 'revision'
}
);

export default RevisionStore.store;
