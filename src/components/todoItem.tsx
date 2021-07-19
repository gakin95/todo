import { AiOutlineCheck, AiTwotoneDelete } from 'react-icons/ai';
import {Props }from '../models/todo';
import '../css/main.scss';

  const Todo = ({ bgColor,text, checked, onCheck,onClick, onDelete }: Props) => (
    <div className={`itemContainer ${bgColor} ${bgColor === 'dark'?'borderBottomLight' :'borderBottomDark'}`}>
      <div className={`item }`}>
      <div className={`iconContainer ${checked? 'checked' : 'unchecked'}`} onClick={onCheck}> 
      {checked && <AiOutlineCheck style={{color:'#fff'}}/>}
      </div>
      <div className='children'>
        <p className={bgColor === 'light'?'lightText':'darkText'}>
          
          {text}
          {checked && <span className={bgColor === 'light'?'spanLight':'spanDark'}></span>}
          </p>
      </div>
    </div>
    <div onClick={onDelete} className='delete'>
      <AiTwotoneDelete style={{color:bgColor==='dark'?'#fff':'#000'}}/>
    </div>
    </div>
  );

  export default Todo
