import { Container } from '../components/ui/Container'
import { CtaLink } from '../components/ui/CtaLink'
import { SectionHeading } from '../components/ui/SectionHeading'
import { siteConfig } from '../data/siteConfig'

export function About() {
  const hasContactInfo =
    Boolean(siteConfig.contactEmail) || siteConfig.socialLinks.length > 0

  return (
    <Container className="flex flex-col gap-16 py-14 sm:py-20">
      <SectionHeading
        eyebrow="About"
        title="Who we are"
        description={siteConfig.mission}
      />

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-navy-950 text-2xl font-medium">
            What a meeting feels like
          </h2>
          <p className="text-navy-800/85 text-base leading-relaxed">
            CSA meetings are informal and hands-on. Expect a short walkthrough of a
            concept or tool, then time to try it yourself with people nearby to ask
            questions. Some weeks center on a guest speaker, some on a competition-style
            challenge, and some are just open working time with the group. There's no
            lecture-hall formality — bring a laptop and questions.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-navy-950 text-2xl font-medium">
            All levels welcome
          </h2>
          <p className="text-navy-800/85 text-base leading-relaxed">
            Members range from students who have never touched a terminal to those who
            compete nationally. Sessions are designed so a first-time attendee can follow
            along and a returning member still gets something out of it. Nobody is
            expected to already know the material — that's the point of showing up.
          </p>
        </div>
      </section>

      <section className="border-line flex flex-col gap-4 border-y py-10">
        <h2 className="font-display text-navy-950 text-2xl font-medium">
          How CSA fits in
        </h2>
        <p className="text-navy-800/85 max-w-3xl text-base leading-relaxed">
          BYU CSA is a student-run club at {siteConfig.university}. It's a space to learn
          alongside other students, practice skills through workshops and competitions,
          and build a peer network — it isn't a guarantee of a job, certification, or
          degree credit, and it isn't an official university department. What members get
          out of it depends on what they put in, the same as any club.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-navy-950 text-2xl font-medium">
          Leadership & contact
        </h2>
        {hasContactInfo ? (
          <p className="text-navy-800/85 max-w-2xl text-base leading-relaxed">
            Reach out using the contact information in the footer below.
          </p>
        ) : (
          <p className="text-navy-800/85 max-w-2xl text-base leading-relaxed">
            Officer names and a public contact channel will be listed here once they're
            approved for publication. In the meantime, check with BYU's official club
            directory for the most current contact information.
          </p>
        )}
        <div>
          <CtaLink to="/events" variant="secondary">
            See what's coming up
          </CtaLink>
        </div>
      </section>
    </Container>
  )
}
