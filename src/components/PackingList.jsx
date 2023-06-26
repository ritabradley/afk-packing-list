import Item from './Item';

export default function PackingList({ items, onPackedChange, onRemoveItem, onClearList, onSort }) {
  return (
    <section className='bg-navy text-whip list flex flex-col items-center justify-between gap-8 py-10'>
      <ul className='grid content-start justify-center w-4/5 gap-3 overflow-scroll list-none'>
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              description={item.description}
              quantity={item.quantity}
              packed={item.packed}
              onPackedChange={onPackedChange}
              onRemoveItem={onRemoveItem}
            />
          );
        })}
      </ul>
      <div>
        <select onChange={onSort} className='pill pill-sm'>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={onClearList} className='pill pill-sm'>
          Clear List
        </button>
      </div>
    </section>
  );
}
