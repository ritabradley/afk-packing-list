export default function Item({ id, description, quantity, packed, onPackedChange, onRemoveItem }) {
  return (
    <>
      <li className='flex items-center gap-3'>
        <input
          className='accent-cerulean w-5 h-5'
          type='checkbox'
          checked={packed}
          onChange={() => onPackedChange(id)}
        />
        <span style={packed ? { textDecoration: 'line-through' } : {}}>
          {quantity} {description}
        </span>
        <button
          className='bg-none p-2 text-lg translate-y-0.5 border-none cursor-pointer'
          onClick={() => onRemoveItem(id)}
        >
          ❌
        </button>
      </li>
    </>
  );
}
