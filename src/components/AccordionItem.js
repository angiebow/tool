import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"
import { Collapse } from 'react-collapse';
import localFont from "next/font/local";

const lun = localFont({ src: "/lunema-regular.ttf" });

const AccordionItem = ({open, toggle, title, desc}) => {
    return ( 
        <div className='pt-[10px] '>
            <div className='rounded-xl border p-4 bg-opacity-50 py-[25px] px-[50px] flex justify-between items-center cursor-pointer border border-black p-4' onClick={toggle}>
                 <p class={`text-sSize font-semibold ${lun.className}`}>{title}</p>
                 <div className="text-[30px]">
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                 </div>
            </div>
            <Collapse isOpened={open}>
                <div className="bg-opacity-50 px-[50px] pb-[20px]">{desc}</div>
            </Collapse>
        </div>
    );
}
 
export default AccordionItem;