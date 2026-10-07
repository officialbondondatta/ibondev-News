import Link from "next/link";

interface ILinksProps {
    scrapable: boolean,
    slug: string,
    title: string,
    topicId: string | null,
    url: string
}
const NavLinks = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories")
    const data = await res.json()
    const links: ILinksProps[] = data.data
    const filteredLinks = links.filter(link => link.scrapable)
    return (
        <div className="overflow-x-auto  [scrollbar-color:red_transparent] [scrollbar-width:thin] mt-2">
            <div className="flex gap-4 mx-auto w-max px-2 lg:p-0 py-1 items-center justify-center">
                <Link className="hover:underline text-lg hover:text-red-700" href={"/"}>হোম</Link>
                {
                    filteredLinks.map((link, ind) => (
                        <Link className="hover:underline text-lg hover:text-red-700" href={link.slug} key={ind}>{link.title}</Link>
                    ))
                }
            </div>
        </div>
    );
};

export default NavLinks;