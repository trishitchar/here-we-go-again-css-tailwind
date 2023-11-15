import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonBadgeFill} from 'react-icons/bs'
const Social = () => {

    const links = [
        {
            id: 1,
            child: (
                <>LinkedIn <FaLinkedin size={30} /> </>
            ),
            href: 'https://in.linkedin.com/in/trishit-char-5659b7200',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>GitHub <FaGithub size={30} /> </>
            ),
            href: 'https://github.com/trishitchar',
            
        },
        {
            id: 3,
            child: (
                <>Mail <HiOutlineMail size={30} /> </>
            ),
            href: 'mailto:trishitchar@gmail.com',
            
        },
        {
            id: 4,
            child: (
                <>Resume <BsFillPersonBadgeFill size={30} /> </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ];

    return (
        <div className='hidden  lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={`${style} flex justify-between  roundr items-center bg-gray-500 w-40 h-14 px-4 hover:rounded-md duration-300 hover:ml-[-10px] ml-[-100px]`}>
                        <a href={href} className='flex justify-between text-white items-center w-full' download={download} target="_blank" rel='noreferrer'>{child}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Social