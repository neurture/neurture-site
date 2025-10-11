export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f8f9fa]">
      <section className="max-w-[800px] mx-auto py-12 px-8">
        <h1 className="text-[3rem] text-[#0a0a23] mb-6 font-serif">
          Privacy policy
        </h1>
        <span className="italic mb-8 block">Last Updated: October 1, 2025</span>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">
          1. Introduction
        </h2>
        <p className="mb-6 leading-[1.6]">
          Welcome to Neurture. This Privacy Policy outlines our practices
          regarding the collection, use, and sharing of information when you use
          our app.
        </p>
        <p className="mb-6 leading-[1.6]">
          <strong>Privacy-first design:</strong> Nearly all of your
          data—including journal entries, check-ins, conversations, plans, and
          progress tracking—is stored locally on your device. We do not store
          this personal content on our servers. The only data shared with
          third-party services is what&apos;s necessary to provide specific
          features like AI chat and image-to-text conversion, as detailed below.
        </p>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">
          2. Data Collection
        </h2>
        <p className="mb-6 leading-[1.6]">
          We do not collect personally identifiable information from our users.
          However, we may collect the following:
        </p>
        <ul className="ml-8 mb-6">
          <li className="mb-4 leading-[1.6]">
            Images of handwritten journal entries (only if you use the
            image-to-text feature)
          </li>
          <li className="mb-4 leading-[1.6]">
            Chat messages submitted for interaction with our AI feature (only if
            you use AI chat)
          </li>
        </ul>
        <p className="mb-6 leading-[1.6]">
          You can opt out of usage analytics at any time by turning off
          Analytics in Settings. When disabled, we stop sending analytics events
          to PostHog from your device. This opt-out does not affect error
          logging (Sentry).
        </p>
        <p className="mb-6 leading-[1.6]">
          We also collect analytics and technical information to improve the
          app:
        </p>
        <ul className="ml-8 mb-6">
          <li className="mb-4 leading-[1.6]">
            <strong>PostHog (usage analytics):</strong> Generic actions taken
            within the app (e.g., starting a new conversation, saving a journal
            entry), interaction with app features, and aggregated performance
            metrics. PostHog does not collect personally identifiable
            information.
          </li>
          <li className="mb-4 leading-[1.6]">
            <strong>Sentry (error logging):</strong> Error messages, stack
            traces, and technical diagnostic information when the app encounters
            issues. Personally identifiable information is automatically
            scrubbed before being sent to Sentry.
          </li>
        </ul>
        <p className="mb-6 leading-[1.6]">
          If you install Neurture from a partner link we store a non-personal
          partner identifier so we can share revenue with that partner. No
          health data is shared.
        </p>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">
          3. Data Use
        </h2>
        <p className="mb-6 leading-[1.6]">The collected data is used for:</p>
        <ul className="ml-8 mb-6">
          <li className="mb-4 leading-[1.6]">
            Converting handwritten journal entry images to text (using Google
            Cloud)
          </li>
          <li className="mb-4 leading-[1.6]">
            Processing chat messages (using OpenAI API)
          </li>
          <li className="mb-4 leading-[1.6]">
            Analyzing app usage and interaction patterns (using PostHog)
          </li>
          <li className="mb-4 leading-[1.6]">
            Monitoring and fixing technical errors (using Sentry)
          </li>
        </ul>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">
          4. Data Sharing
        </h2>
        <p className="mb-6 leading-[1.6]">Data is shared with:</p>
        <ul className="ml-8 mb-6">
          <li className="mb-4 leading-[1.6]">
            OpenAI for processing chat messages
          </li>
          <li className="mb-4 leading-[1.6]">
            Google Cloud for converting handwritten images to text
          </li>
          <li className="mb-4 leading-[1.6]">
            Supabase for temporary storage of journal images during text
            conversion and for authentication
          </li>
          <li className="mb-4 leading-[1.6]">PostHog for user metrics</li>
          <li className="mb-4 leading-[1.6]">
            Sentry for error logging and monitoring
          </li>
        </ul>
        <p className="mb-6 leading-[1.6]">
          These third-party services handle your data according to their privacy
          policies.
        </p>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">
          5. Data Management and User Rights
        </h2>
        <p className="mb-6 leading-[1.6]">
          Users can view, modify, and delete their data within the app. For
          image-to-text (OCR), any journal images temporarily uploaded for
          transcription are deleted immediately after processing. If processing
          is interrupted, an automated cleanup removes any remaining images
          within approximately 60 minutes.
        </p>
        <p className="mb-6 leading-[1.6]">
          Data deletion requests can be made via email to
          privacy@neurtureapp.com.
        </p>
        <p className="mb-6 leading-[1.6]">
          Our app retains on-device data until you delete it. For transient OCR
          uploads, see the deletion timeline above. Third-party providers may
          retain limited operational logs according to their privacy policies.
        </p>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">
          6. Data Security
        </h2>
        <p className="mb-6 leading-[1.6]">
          We take data security seriously and work with industry-leading service
          providers who implement strong security measures to protect your
          information:
        </p>
        <ul className="ml-8 mb-6">
          <li className="mb-4 leading-[1.6]">
            <strong>OpenAI (chat processing):</strong> Does not use your data to
            train AI models. Data is retained for 30 days for abuse monitoring,
            then deleted. SOC 2 Type 2 and ISO 27001 certified.
          </li>
          <li className="mb-4 leading-[1.6]">
            <strong>Google Cloud (journal image processing):</strong> Images are
            processed in memory and not saved to disk. Google does not use your
            images to train models or claim ownership of your content.
            HIPAA-compliant and ISO 27001 certified.
          </li>
          <li className="mb-4 leading-[1.6]">
            <strong>Supabase (image storage and authentication):</strong>{" "}
            Journal images are temporarily uploaded solely for text conversion,
            then passed to Google Cloud. Images are deleted immediately after
            successful processing; if processing is interrupted, an automated
            cleanup removes any remaining images within approximately 60
            minutes. Provides enterprise-grade security with encryption at rest
            and in transit. SOC 2 Type 2 certified and GDPR compliant.
          </li>
          <li className="mb-4 leading-[1.6]">
            <strong>PostHog (analytics):</strong> SOC 2 Type II certified with
            encryption and access controls. Does not require personally
            identifiable information.
          </li>
          <li className="mb-4 leading-[1.6]">
            <strong>Sentry (error monitoring):</strong> Automatically scrubs
            personally identifiable information from error reports. SOC 2 Type 2
            and ISO 27001 certified. Error data retained for 30 days, then
            deleted. Does not track users across apps.
          </li>
        </ul>
        <p className="mb-6 leading-[1.6]">
          In the event of a data breach, we will notify affected users via email
          and in-app notifications.
        </p>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">
          7. Children&apos;s Privacy
        </h2>
        <p className="mb-6 leading-[1.6]">
          Our app is not targeted at children under the age of 13, and we do not
          knowingly collect data from them.
        </p>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">
          8. Privacy Policy Changes
        </h2>
        <p className="mb-6 leading-[1.6]">
          We may update this policy and will notify users of any changes through
          the app.
        </p>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">
          9. Contact Us
        </h2>
        <p className="mb-6 leading-[1.6]">
          For questions about this Privacy Policy, contact us at
          privacy@neurtureapp.com.
        </p>
      </section>
    </main>
  );
}
