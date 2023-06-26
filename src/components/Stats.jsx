export default function Stats({ numOfItems = 0, numOfPacked = 0, percentPacked = 0 }) {
  return (
    <footer className='bg-maroon text-whip py-8 text-lg font-bold text-center'>
      <p>
        You have {numOfItems} items on your list and you&apos;ve already packed {numOfPacked} ({percentPacked}%)
      </p>
    </footer>
  );
}
