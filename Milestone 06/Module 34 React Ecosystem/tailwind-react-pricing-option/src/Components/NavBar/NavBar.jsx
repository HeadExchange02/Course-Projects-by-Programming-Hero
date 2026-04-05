import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "./Link";

const navData = [
    {
        "id": 1,
        "name": "Home",
        "path": "/"
    },
    {
        "id": 2,
        "name": "Products",
        "path": "/products"
    },
    {
        "id": 3,
        "name": "Orders",
        "path": "/orders"
    },
    {
        "id": 4,
        "name": "About",
        "path": "/about"
    },
    {
        "id": 5,
        "name": "Contact",
        "path": "/contact"
    }
]


const Navbar = () => {

    const [open, setOpen] = useState(false);
    const links = navData.map(route => <Link key={route.id} route={route}></Link>);

    return (

        <nav className="flex justify-between mx-6">
            <span className="gap-3 flex" onClick={() => setOpen(!open)}>
                {open ? <X className="md:hidden"></X> : <Menu className="md:hidden"></Menu>}
                <ul className={`md:hidden absolute duration-200 ${open ? 'top-6': '-top-40'}`}>{links}</ul>
                <h2>Xeon</h2>
            </span>

            <ul className="md:flex hidden gap-5">
                {links}
            </ul>

            {/* <ul className="flex">
                {
                    navData.map(route => <li className="mr-10"><a href="{route.path}">{route.name}</a></li>)
                }
            </ul> */}

            {/* <ul className="flex">
                <li className="mr-10"><a href="">Home</a></li>
                <li className="mr-10"><a href="/about">About</a></li>
                <li className="mr-10"><a href="/blog">Blog</a></li>
            </ul> */}

            <button>Sing In</button>
        </nav>
    )
}

export default Navbar