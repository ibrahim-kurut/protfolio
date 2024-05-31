import Link from 'next/link';
import { useRouter } from 'next/router';

const NavbarItem = () => {
    const router = useRouter()
    // console.log(router);
    const items = [
        {
            id: 1,
            name: "home",
            url: "/"
        },
        {
            id: 2,
            name: "about",
            url: "/about"
        },
        {
            id: 3,
            name: "servies",
            url: "/servies"
        },
        {
            id: 4,
            name: "portfolio",
            url: "/portfolio"
        },
        {
            id: 5,
            name: "skills",
            url: "/skills"
        },
        {
            id: 6,
            name: "testimonial",
            url: "/testimonial"
        },
        {
            id: 7,
            name: "project",
            url: "/project"
        }
    ]
    return (
        <div>
            {
                items.map((item) => {
                    return (
                        <Link key={item.id}
                            href={item.url}
                            className={`${router.asPath == item.url ? "text-secondary" : "text-white"} capitalize block lg:inline-block lg:mt-0  mr-4 py-2 hover:text-secondary`}>
                            {item.name}
                        </Link>
                    )
                })
            }

        </div>
    )
}

export default NavbarItem




