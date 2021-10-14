import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
    },

    {
        id: 2,
        title: 'Why ApnaBike',
        link: '/whyApnaBike',
    },

    {
        id: 3,
        title: 'Pricing',
        link: '/pricing',
    },
    {
        id: 4,
        title: 'FAQ',
        link: '/faq',
    },
    {
        id: 7,
        title: 'Contact',
        link: '/contact',
    },

]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}
                    <div className="d-flex pt-3 pl-3">
                        <img src="/logo.png" alt="" width="65" height="40" />
                        <p className='mt-2 ml-2'>ApnaBike</p>
                    </div>
                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    <Link to={item.link}>{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    <Link to="/login"><Button className="btn btn-success ml-5 mr-2">login</Button></Link>
                    <Link to="/signup"><Button className="btn btn-secondary">Signup</Button></Link>

                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>
            </div>
        )
    }
}
