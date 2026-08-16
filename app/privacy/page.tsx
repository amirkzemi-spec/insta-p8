export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px", lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>
      <h1>Privacy Policy</h1>
      <p><em>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</em></p>

      <p>
        This Instagram automation tool ("the App") is a self-hosted application used to
        automate replies to Instagram comments, direct messages, and story interactions
        for a connected Instagram Business or Creator account.
      </p>

      <h2>What data the App accesses</h2>
      <p>Through the official Instagram Graph API, the App accesses:</p>
      <ul>
        <li>Instagram comments left on the connected account's posts</li>
        <li>Direct messages sent to the connected account</li>
        <li>Story mentions and story replies directed at the connected account</li>
        <li>Basic profile information (username, user ID) of people who comment, message, or interact with the connected account</li>
      </ul>

      <h2>How the data is used</h2>
      <p>
        Data received through Instagram's API is used solely to generate and send
        automated replies (text, image, or link responses) back to the person who
        commented, messaged, or interacted with the connected account. The App does
        not sell, rent, or share this data with third parties for advertising or
        any purpose unrelated to operating the automated replies.
      </p>

      <h2>Data storage</h2>
      <p>
        Message and comment data, along with the interaction history needed to operate
        automations, is stored in a private database controlled by the operator of this
        App. Access tokens used to communicate with the Instagram API are stored securely
        and are not exposed to end users interacting with the connected Instagram account.
      </p>

      <h2>Data retention and deletion</h2>
      <p>
        Data is retained only as long as needed to operate the automations described
        above. To request deletion of data associated with your Instagram account's
        interactions with this App, contact the operator using the details below.
      </p>

      <h2>Third-party services</h2>
      <p>
        This App uses Meta's official Instagram Graph API to send and receive messages
        and comments. Use of Instagram is subject to{" "}
        <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noreferrer">
          Instagram's own Privacy Policy
        </a>.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about this policy or to request data deletion, contact:{" "}
        <a href="mailto:ak@nikavisa.com">ak@nikavisa.com</a>
      </p>
    </div>
  );
}
