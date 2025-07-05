import InterviewCard from "@/components/InterviewCard"
import { Button } from "@/components/ui/button"
import { dummyInterviews } from "@/public/constants"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice with real interview questions, get instant feedback, and
            track your progress.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Get Started</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robot"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.length === 0 ? (
            <p>You haven&apos;t taken any interviews yet.</p>
          ) : (
            <div className="flex flex-col gap-6">
              {dummyInterviews.map((interview) => (
                <InterviewCard key={interview.id} {...interview} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          <p>There are no interviews available at the moment.</p>
        </div>
      </section>
    </>
  )
}

export default Page
