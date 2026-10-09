import Marquee from "react-fast-marquee";

interface IHeadlinesProps {
    id: string,
    title: string
}

const Headlines = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10")
    const data = await res.json()
    const headlines: IHeadlinesProps[] = data.data
    console.log(headlines)
    return (
        <div className="w-full bg-red-700">
            <div className="flex items-center container mx-auto">
                <div className="bg-red-600 text-white text-lg px-5">
                    সর্বশেষ
                </div>
                <Marquee speed={120} className="flex gap-6  text-white font-semibold">
                    {
                        headlines.map(lines => (
                            <span className="hover:underline ml-2 text-lg cursor-pointer list-item list-disc list-inside" key={lines.id}>{lines.title}</span>
                        ))
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default Headlines;