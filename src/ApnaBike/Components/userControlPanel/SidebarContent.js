import PropTypes from "prop-types"
import React, { useCallback, useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
// import { withRouter } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef();
  let history = useNavigate();

  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }, []);

  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    new MetisMenu("#side-menu")
    let matchingMenuItem = null
    const ul = document.getElementById("side-menu")
    const items = ul.getElementsByTagName("a")
    for (let i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }

  }, [props.location.pathname, activateParentDropdown])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  return (
    <React.Fragment>

      <SimpleBar style={{ maxHeight: "100%" }} ref={ref} className="sidebar-menu-scroll">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>
            <li>
              <Link to={"/UserPanel/" + localStorage.getItem('userId')} className="waves-effect">
                <i className="fas fa-home"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to={"/UserPanel/allBookings/" + localStorage.getItem('userId')} className=" waves-effect">
                <i className="fas fa-clipboard"></i>
                <span>All Bookings</span>
              </Link>
            </li>

            <li>
              <Link to="/home" className="waves-effect" onClick={() => localStorage.clear()}>
                <i className="fas fa-sign-out-alt"></i>
                <span className="badge rounded-pill bg-warning float-end">
                </span>
                <span>Logout</span>
              </Link>
            </li>

            <li style={{ marginTop: '47vh' }}>
              <Link to="/home" className="waves-effect">
                <i className="fas fa-biking mr-2" style={{ color: '#ffffff' }}></i>
                <span className="badge rounded-pill bg-warning float-end">
                </span>
                <span style={{ fontSize: '17px', color: '#ffffff', fontWeight: '600' }}>Back to Home</span>
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default SidebarContent