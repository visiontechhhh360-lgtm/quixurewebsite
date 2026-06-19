import LegalLayout from "../components/LegalLayout";

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" updated="13 April 2025">
      <p>
        By installing or using Quixure VPN on your Android device, you agree
        to the following terms:
      </p>

      <h2>Use of Service</h2>
      <ul>
        <li>Quixure VPN is a fast, ultra-secure, no-log VPN service that hides your location and secures your personal data.</li>
        <li>Users must be of legal age (eligible to use VPN services) under the law of their country.</li>
        <li>By using Quixure VPN, you agree not to engage in illegal activities.</li>
        <li>Misuse of the service or violation of terms may result in suspension or termination.</li>
      </ul>

      <h2>Data Collection &amp; Privacy</h2>
      <p>
        Quixure VPN follows a strict no-log policy. We do not track, store,
        or share your browsing activity or personal data. Minimal
        non-personal data collected:
      </p>
      <ul>
        <li>Email address (for account management).</li>
        <li>Payment info (handled by Google Pay).</li>
        <li>Basic connection data (for traffic distribution and service quality).</li>
      </ul>
      <p>For more, refer to our full Privacy Policy.</p>

      <h2>Free Trial and Subscriptions</h2>
      <ul>
        <li>Users can access all features of Quixure VPN free for a 30-day trial period.</li>
        <li>After the trial, users can subscribe to a Pro Plan. Non-subscribing user IDs may be retained to control reinstallations but are not shared with any third parties.</li>
        <li>Pro Plans (handled via Google Pay): 1 Week – $0.99 · 1 Month – $2.99 · 1 Year – $19.99.</li>
        <li>Subscriptions renew automatically unless canceled via in-app settings.</li>
        <li>Users will receive an email 1 day before renewal.</li>
      </ul>

      <h2>Account Deletion</h2>
      <p>
        Pro users can delete their accounts via the app. Upon deletion, no
        user data is retained by Quixure.
      </p>

      <h2>Security</h2>
      <p>
        We use AES-256-bit encryption and industry-leading security
        practices to protect user anonymity and prevent data leaks.
      </p>

      <h2>Disclaimer</h2>
      <p>
        Quixure VPN is provided "as-is" without warranties. We are not
        liable for any damages arising from use of the service. Quixure VPN
        provides secure and anonymous access to the web/internet and does
        not contain any direct links to third-party websites or services.
        Users are responsible for accessing any third-party content; we are
        not responsible for their content or policies.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        Quixure reserves the right to update these Terms at any time.
        Continued use of the app after changes constitutes acceptance of the
        new terms. All changes to terms will be communicated through this
        page.
      </p>

      <h2>Contact</h2>
      <p>
        For questions or support:{" "}
        <a href="mailto:support@quixure.com" className="text-teal-600 dark:text-teal-400 hover:underline">
          support@quixure.com
        </a>
      </p>
    </LegalLayout>
  );
}
