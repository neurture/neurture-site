export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f8f9fa]">
      <section className="max-w-[800px] mx-auto py-12 px-8">
        <h1 className="text-[3rem] text-[#0a0a23] mb-6 font-serif">Privacy policy</h1>
        <span className="italic mb-8 block">Effective Date: February 9, 2024</span>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">1. Introduction</h2>
        <p className="mb-6 leading-[1.6]">
          Welcome to Neurture. This Privacy Policy outlines our practices
          regarding the collection, use, and sharing of information when you use
          our app.
        </p>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">2. Data Collection</h2>
        <p className="mb-6 leading-[1.6]">
          We do not collect personally identifiable information from our users.
          However, we do collect the following:
        </p>
        <ul className="ml-8 mb-6">
          <li className="mb-4 leading-[1.6]">Images of handwritten journal entries</li>
          <li className="mb-4 leading-[1.6]">Audio recordings of voice memos</li>
          <li className="mb-4 leading-[1.6]">Chat messages submitted for interaction with our AI feature</li>
        </ul>
        <p className="mb-6 leading-[1.6]">
          In addition to the data mentioned previously, we have partnered with
          Mixpanel to collect and analyze user event metrics to better
          understand how our services are used. The types of data collected via
          Mixpanel include:
        </p>
        <ul className="ml-8 mb-6">
          <li className="mb-4 leading-[1.6]">
            Generic actions taken within the app (e.g., starting a new
            conversation, saving a journal entry)
          </li>
          <li className="mb-4 leading-[1.6]">
            Interaction with app features (e.g., using the chat feature, adding
            a log entry)
          </li>
          <li className="mb-4 leading-[1.6]">Aggregated usage data and app performance metrics</li>
        </ul>
        <p className="mb-6 leading-[1.6]">
          This information helps us improve app functionality and user
          experience. Note that Mixpanel does not collect personally
          identifiable information through this process.
        </p>
        <p className="mb-6 leading-[1.6]">
          If you install Neurture from a partner link we store a non-personal
          partner identifier so we can share revenue with that partner. No
          health data is shared.
        </p>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">3. Data Use</h2>
        <p className="mb-6 leading-[1.6]">The collected data is used for:</p>
        <ul className="ml-8 mb-6">
          <li className="mb-4 leading-[1.6]">
            Converting journal entry images to text (using Google Cloud OCR)
          </li>
          <li className="mb-4 leading-[1.6]">Processing voice memos and chat messages (using OpenAI API)</li>
          <li className="mb-4 leading-[1.6]">Analyzing app usage and interaction patterns (using Mixpanel)</li>
        </ul>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">4. Data Sharing</h2>
        <p className="mb-6 leading-[1.6]">Data is shared with:</p>
        <ul className="ml-8 mb-6">
          <li className="mb-4 leading-[1.6]">OpenAI for processing chat messages and voice memos</li>
          <li className="mb-4 leading-[1.6]">Google Cloud for OCR services</li>
          <li className="mb-4 leading-[1.6]">Vercel for temporary storage of images and audio files</li>
          <li className="mb-4 leading-[1.6]">Mixpanel for user metrics</li>
        </ul>
        <p className="mb-6 leading-[1.6]">
          These third-party services handle your data according to their privacy
          policies.
        </p>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">5. Data Management and User Rights</h2>
        <p className="mb-6 leading-[1.6]">
          Users can view, modify, and delete their data within the app. However,
          this does not delete it from our cloud storage or that of third-party
          providers.
        </p>
        <p className="mb-6 leading-[1.6]">
          Data deletion requests can be made via email to
          privacy@neurtureapp.com.
        </p>
        <p className="mb-6 leading-[1.6]">
          Our app retains data indefinitely. Third-party providers retain data
          according to their privacy policies.
        </p>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">6. Data Security</h2>
        <p className="mb-6 leading-[1.6]">
          We currently do not employ additional security measures or encryption.
        </p>
        <p className="mb-6 leading-[1.6]">
          In the event of a data breach, we will notify affected users via email
          and in-app notifications.
        </p>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">7. Children&apos;s Privacy</h2>
        <p className="mb-6 leading-[1.6]">
          Our app is not targeted at children under the age of 13, and we do not
          knowingly collect data from them.
        </p>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">8. Privacy Policy Changes</h2>
        <p className="mb-6 leading-[1.6]">
          We may update this policy and will notify users of any changes through
          the app.
        </p>

        <h2 className="text-[1.5rem] text-[#0a0a23] mt-8 mb-4 font-serif">9. Contact Us</h2>
        <p className="mb-6 leading-[1.6]">
          For questions about this Privacy Policy, contact us at
          privacy@neurtureapp.com.
        </p>
      </section>
    </main>
  );
}