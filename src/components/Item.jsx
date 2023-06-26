export default function Item({ description, quantity, packed }) {
  return (
    <>
      <li className='flex items-center gap-3'>
        <input className='accent-cerulean w-5 h-5' type='checkbox' name='' id='' />
        <span style={packed ? { textDecoration: 'strikethrough' } : {}}>
          {quantity} {description}
        </span>
        <button className='bg-none p-2 text-lg translate-y-0.5 border-none cursor-pointer'>❌</button>
      </li>
    </>
  );
}
