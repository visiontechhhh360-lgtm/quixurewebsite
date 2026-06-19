import LegalLayout from "../components/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="13 April 2025">
      <p>
        At Quixure VPN, user security and confidentiality is at the core of
        our efforts. Protecting your privacy and security is our first
        concern. While committed to this goal, we endeavour to deliver
        smooth, lightning-fast VPN service to our valued consumers while
        maintaining total security and secrecy. This Privacy Policy describes
        the kinds of information we gather, how we use it, and the
        safeguards we put in place to keep your data safe.
      </p>

      <h2>Data Security and Privacy</h2>
      <p>
        Quixure VPN is dedicated to protecting user privacy. We have a strict
        no-log policy, which means that we don't gather, save, or distribute
        any data related to your online activities, browsing habits, or
        personal information. With just one click, Quixure VPN keeps your
        online presence safe, anonymous, and secure around-the-clock.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We minimize the acquisition of personal data as part of our
        dedication to the policy stated above. To maintain service
        reliability and performance, we may, however, gather the following
        minimal data subject to its requirement:
      </p>
      <ul>
        <li>Email address (for account management purposes to ensure fair usage and support for a smooth user experience).</li>
        <li>Payment details (processed by a third party via Google Pay – Android Users / Apple Pay – iOS/Mac Users).</li>
        <li>Basic app connection details (to manage traffic distribution and provision of best-in-class services).</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        No private, financial, or personal information is ever traded, sold,
        or given to third parties. Any information shared with third parties
        is strictly for provision of desired VPN services (such as payment
        processing, which is also managed by Google Pay / Apple Pay). The
        following are the only uses for any data that is gathered:
      </p>
      <ul>
        <li>Improving and streamlining VPN operations.</li>
        <li>Overseeing subscriptions and user accounts.</li>
        <li>Addressing technological problems and offering customer service.</li>
        <li>Enhancing service performance and creating new features.</li>
        <li>Customer support.</li>
        <li>Development of new features and services based on network statistics.</li>
      </ul>

      <h2>Protection of Minors</h2>
      <p>
        People under the age of eighteen are not eligible to use Quixure VPN
        services. We urge parents or guardians to contact our support staff
        if we learn that a minor has inadvertently given us any information
        so that we may take immediate action to delete it.
      </p>

      <h2>Advertising</h2>
      <p>No ads — no ad is displayed to the end user.</p>

      <h2>Trial Period and Subscription Details</h2>
      <p>
        By joining Quixure VPN, users can enjoy unlimited connectivity to all
        our VPN servers for a 30-day trial period. Upon completion of the
        trial period, users will be notified via the app to subscribe for
        continued services.
      </p>
      <ul>
        <li>
          <strong>User Data Retention:</strong> IDs of users who do not
          subscribe after the trial period will be retained solely for
          managing/controlling subsequent installations from the same user
          ID. This data will not be shared with any third party for any
          purpose. To ensure fair usage policy, the unsubscribe option for
          deletion of user ID is available to Pro users only.
        </li>
        <li>
          <strong>Subscription Options:</strong> Users may choose between
          free or paid (Pro Plan) subscriptions, offered at nominal charges.
          Payments are processed securely via Google Pay (Android) or Apple
          Pay (iOS/Mac).
        </li>
        <li>
          <strong>Automatic Renewal:</strong> Subscriptions renew
          automatically upon expiry (e.g., weekly, monthly, or annually).
          Users may terminate payments at any time via the in-app menu.
        </li>
        <li>
          <strong>Renewal Notification:</strong> Users will receive an email
          notification 1 day in advance of subscription renewal.
        </li>
      </ul>

      <h2>Pro Plan Pricing</h2>
      <ul>
        <li>1 Week Pro Plan: $0.99</li>
        <li>1 Month Pro Plan: $2.99</li>
        <li>1 Year Pro Plan: $19.99</li>
      </ul>

      <h2>Account Deletion</h2>
      <p>
        Through the in-app settings, Pro users can easily remove their
        accounts. No user data is kept on our servers after deletion.
      </p>

      <h2>Security of Personal Information</h2>
      <p>
        Industry-leading security procedures are used by Quixure VPN to stop
        breaches, illegal access, and data leaks. Our service is centered on
        protecting user anonymity, and we make sure that your data is safe
        and hidden. In order to comply with changing requirements, our
        Privacy Policy may need to be modified. Any changes will be
        announced on this page.
      </p>

      <h2>Third Party Services</h2>
      <p>
        You may access other third-party services while using Quixure VPN,
        for example, while clicking third-party links within the app. We
        shall not be held responsible for the privacy policies and/or
        practices of these third-party services. You are encouraged to tread
        carefully and read their privacy policies.
      </p>

      <h2>Policy Updates</h2>
      <p>To notify our users of any changes, we will post any updates to our privacy policy here.</p>

      <h2>Terms of Use</h2>
      <ul>
        <li>Apple Users: Apple Terms of Use</li>
        <li>Microsoft Users: Microsoft License Terms</li>
        <li>Google Users: see our Android Terms of Service</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        You can contact us at{" "}
        <a href="mailto:support@quixure.com" className="text-teal-600 dark:text-teal-400 hover:underline">
          support@quixure.com
        </a>{" "}
        if you have any queries about our privacy policy.
      </p>
    </LegalLayout>
  );
}
