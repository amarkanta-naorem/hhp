import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="landing-page-top">
        {/* Banner Section */}
        <div className="landing-page-banner"></div>

        <div className="landing-page-banner-paragraph">
          <h3>Donate Blood🩸, Save Lives❤️</h3>
          <h2>Be Someone’s Lifeline Today!</h2>
          <p>
            A single donation can save multiple lives. Take a step, make an
            impact, and give the gift of life!
          </p>
        </div>

        <div className="landing-page-logo">
          <Image src="../logo.svg" alt="HHP Logo" width={150} height={50} />
        </div>
        <div className="landing-page-blood-bag">
          <Image
            src="../blood-bag.svg"
            alt="HHP Logo"
            width={300}
            height={50}
          />
        </div>

        {/* Buttons */}
        <div className="landing-page-action-buttons-section">
          <div className="landing-page-action-buttons">
            <div>Become a Donor</div>
            <div>Get Blood Help</div>
            <div>Blood Donation Camp</div>
          </div>
        </div>
      </div>

      {/* Learn About Donation */}
      <div className="landing-page-learning-about-donation">
        <h1>Learn About Donation</h1>
      </div>

      {/* Contact */}
      <div className="landing-page-learning-contact">
        <h1>Contact</h1>
      </div>

      {/* Footer */}
      <div className="landing-page-learning-footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}
