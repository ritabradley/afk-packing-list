import Item from './Item';

export default function PackingList() {
  return (
    <section className='bg-navy text-whip flex flex-col items-center list justify-between gap-8 py-10'>
      <ul className='grid content-start justify-center w-4/5 gap-3 overflow-scroll list-none'>
        <Item />
      </ul>
    </section>
  );
}
