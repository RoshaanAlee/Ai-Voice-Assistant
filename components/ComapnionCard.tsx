import Link from "next/link";

interface CompanionCardProps {
    id : string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
}
const ComapnionCard = ({id ,name ,topic,subject , duration, color}:CompanionCardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
        <div className="flex justify-between items-center ">
            <div className="subject-badge">{subject}</div>
            <button className="companion-bookmark">
                <img src="/icons/bookmark.svg" alt="bookmark"
                    width={12.5} height={15}
                />
            </button>
        </div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-sm">{topic}</p>
        <div className="flex items-center gap-2">
            <img src="/icons/clock.svg" alt="clock" 
                width={13.5} height={13.5}/>
            <p className="text-sm">{duration} mins duration</p>
        </div>
        <Link href={`/companions/${id}`}>
            <button className="btn-primary w-full justify-center">
                Launch Lesson
            </button>
        </Link>

    </article>
  )
}

export default ComapnionCard