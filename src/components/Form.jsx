export default function Form({ onFormSubmit, quantity, description, onQuantityChange, onDescriptionChange }) {
  return (
    <form className='bg-lava p-7 md:flex-row  flex flex-col items-center justify-center gap-3' onSubmit={onFormSubmit}>
      <h3 className='mr-4 text-2xl'>what do you need for your trip?</h3>
      <div className='flex gap-3'>
        <select value={quantity} onChange={onQuantityChange} id='quantity' className='pill focus:outline-lava'>
          {/* 
          1. First, we create an array with 20 empty items by using the Array constructor and the ES6 array spread operator. 
          2. Then, we call the map() method to iterate over the array and create a new array with the number of options we need.
          3. The map() method calls the callback function on each array item. 
          4. The value of the first argument is always the current array item. 
          5. The value of the second argument is always the index of the current item. 
          6. We use the index to generate a unique key for each option. 
          */}
          {[...Array(20)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <input
          value={description}
          onChange={onDescriptionChange}
          id='description'
          className='pill focus:outline-lava'
          type='text'
          placeholder='Item...'
        />
      </div>

      <button className='pill bg-cerulean focus:outline-navy md:w-auto w-full uppercase' type='submit'>
        Add
      </button>
    </form>
  );
}
