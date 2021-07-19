import Props from '../models/addTodo';
import '../css/main.scss';

  const AddTodo = ({ bgColor,iconContainerBgColor,value,onChange,onKeyPress}: Props) => (
    <div className={`addtodo ${bgColor}`}>
      <div className={`iconContainer ${iconContainerBgColor}`}>
    
      </div>
      <div className='children'>
          <input
          type='text'
          className={`input ${bgColor === 'dark' ? 'dark' : 'light'}`}
          name='add'
          placeholder='Create a new todo'
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
           />
      </div>
    </div>
  );

  export default AddTodo

