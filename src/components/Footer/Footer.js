import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {MdCopyright} from 'react-icons/md'
const Footer = () => {
  return (
    <footer>
        <div className="icons">
            <div className="Social"><FaFacebookF /></div>
            <div className="Social"><FaTwitter /></div>
            <div className="Social"><FaYoutube /></div>
            <div className="Social"><FaGithub /></div>
        </div>
        <div className="copyr">
            <p><MdCopyright /> Gradution Project</p>
        </div>
    </footer>
  )
}

export default Footer