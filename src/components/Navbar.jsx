import React,{useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {FiShoppingCart} from "react-icons/fi";
import {BsChatLeft} from 'react-icons/bs';
import {RiNotification3Line} from 'react-icons/ri';
import {MdKeyboardArrowDown} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import {Cart,Chat,Notification,UserProfile} from '.';
import { useStateContext } from '../Contexts/ContextProvider';

const NavButton=({title,customFunc,icon,color,dotColor})=>(
<TooltipComponent content={title} position="BottomCenter">
  <button type="button"  onClick={() => customFunc()} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
 <span style={{background:dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
 
 {icon}
  </button>
  </TooltipComponent>
)


const Navbar = () => {  
const {activeMenu,currentColor, handleClick,setactiveMenu,isClicked,setIsClicked,screenSize, setscreenSize}=useStateContext();

useEffect(() => {
  const handleResize=()=>setscreenSize(window.innerWidth);
  window.addEventListener('resize',handleResize);
  handleResize();
  return()=>window.removeEventListener('resize',handleResize)
}, []);

useEffect(()=>{
  if(screenSize<=900){
    setactiveMenu(false);
  }else{
    setactiveMenu(true);
  }
},[screenSize]);


  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
     <NavButton title="Menu" customFunc={()=>setactiveMenu((preActiveMenu)=>!preActiveMenu)} color={currentColor} icon={<AiOutlineMenu/>}/>
     <div  className="flex">
     <NavButton title="Cart"customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart/>}/>
     <NavButton title="Chat" customFunc={() => handleClick('chat')} color={currentColor} dotColor="#03C9D7" icon={<BsChatLeft/>}/>
     <NavButton title="Notification" customFunc={() => handleClick('notification')} color={currentColor} dotColor="#03C9D7" icon={<RiNotification3Line/>}/>
     <TooltipComponent content="Profile" position="BottomCenter">
      <div className='flex items-center gap-2 p-1 hover:bg-light-gray rounded-lg cursor-pointer' onClick={()=>handleClick('userProfile')}>
        <img src={avatar} alt="user-profile" className="rounded-full w-8 h-8"/>
        <p>
          <span className='text-gray-400 text-14'>Hi,</span>
          <span className='text-gray-400 font-bold text-14 ml-1'>Michael</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 text-14'/>
      </div>
     </TooltipComponent>
     { isClicked.cart && <Cart/>}
     { isClicked.chat && <Chat/>}
     { isClicked.notification && <Notification/>}
     { isClicked.userProfile && <UserProfile/>}
     </div>
     </div>
  )
}

export default Navbar