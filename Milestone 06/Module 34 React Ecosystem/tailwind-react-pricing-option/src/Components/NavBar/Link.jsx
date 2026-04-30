const Link = ({route}) => {
    return (
        <li className="px-4 rounded-2xl hover:bg-amber-500">
            <a href="{route.path}">{route.name}</a>
        </li>
    )
}

export default Link