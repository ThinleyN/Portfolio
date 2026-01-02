export function Header() {
    const menu = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'About',
            link: '/about'
        },
        {
            title: 'Work',
            link: '/work'
        },
        {
            title: 'Contact',
            link : '/contact'
        }
    ]
  return (
    <header className="flex justify-between container m-auto py-8">
        <h1>Thinley</h1>
       <ul className="flex gap-8">
        {menu.map(item => {
            return (
                <li key={item.link}>
                    <a href={item.link}>{item.title}</a>
                </li>
            )
        })}
       </ul>
    </header>
  );
}