import React from 'react';

const sections = [
  {
    title: 'Who we are',
    content: 'Our website address is: http://www.colsonhouse.co.uk.',
  },
  {
    title: 'What personal data we collect and why we collect it',
    subsections: [
      {
        subtitle: 'Comments',
        content:
          'When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor\'s IP address and browser user agent string to help spam detection.\n\nAn anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.',
      },
      {
        subtitle: 'Booking',
        content:
          'When you make a booking with us we collect the names of all the guests who will be staying, the home address, email address and telephone number of the person making the booking. We also collect a debit or credit card number to guarantee your booking and to take any deposit or cancellation fees consistent with our terms and conditions.',
      },
      {
        subtitle: 'Media',
        content:
          'If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.',
      },
      {
        subtitle: 'Contact forms',
        content:
          'Information submitted to us in our Contact Form are emailed to our office for the purpose of ensuring that we can provide prompt customer service.',
      },
      {
        subtitle: 'Cookies',
        content:
          'If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.\n\nIf you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.\n\nWhen you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.',
      },
      {
        subtitle: 'Embedded content from other websites',
        content:
          'Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.\n\nThese websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.',
      },
      {
        subtitle: 'Analytics',
        content: 'Currently there are no analytics tools on this site.',
      },
    ],
  },
  {
    title: 'How we use the information we hold on you',
    content:
      'We use your home address as part of the card payment processing to validate the card.\n\nWe will use your email address to send you confirmation of the booking and an email with more details on how to find us and other information you may find useful for your stay.\n\nAfter your stay you will receive an email from us asking you to write a TripAdvisor review regarding your stay.\n\nWe will not use your telephone number to contact you unless it is for an emergency and/or we have been unable to contact you by email.',
  },
  {
    title: 'How is your data stored',
    content:
      'All of the personal and debit/credit card data you supply us, as part of the booking process, is stored securely on a third party system, Ezee Centrix. If you booked through an online travel agent (e.g. Booking.com), they will also hold your details.\n\nNeither we nor Ezee will share your information with any third party unless there is a legal reason for doing so.',
  },
  {
    title: 'Who we share your data with',
    content:
      'To the best of our knowledge we are not receiving third party data not submitted to us in the contact form. Information in the form may be used internally to help answer questions and make reservations.',
  },
  {
    title: 'How long we retain your data',
    content:
      'If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.\n\nInformation submitted to us in our Contact Form are emailed to our office for the purpose of ensuring that we can provide prompt customer service.\n\nFor users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.',
  },
  {
    title: 'Guest Registration',
    content:
      'We are required by law to collect the following information on all our guests. We do this by asking you to complete a registration form on arrival.\n\nFor British and Commonwealth guests:\n• Name and nationality\n\nFor non-Commonwealth guests:\n• Name, nationality, passport number, address of next destination\n\nWe will keep these forms safely. We are required to keep these registration forms for a year and show them to a police officer if they request to see them. We will destroy these forms 12 months after your stay.',
  },
  {
    title: 'What rights you have over your data',
    content:
      'If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes. If you would like a copy of this information, please email us at info@colsonhouse.co.uk.',
  },
  {
    title: 'Where we send your data',
    content:
      'All of the personal and debit/credit card data you supply us, as part of the booking process, is stored securely on a third party system, Ezee Centrix. If you booked through an online travel agent (e.g. Booking.com), they will also hold your details.\n\nNeither we nor Ezee will share your information with any third party unless there is a legal reason for doing so.\n\nVisitor comments may be checked through an automated spam detection service.',
  },
  {
    title: 'Additional information',
    subsections: [
      {
        subtitle: 'How we protect your data',
        content:
          'The limited information that we receive from users is largely in the form of email requests submitted from our users and is not stored on this site.',
      },
      {
        subtitle: 'What data breach procedures we have in place',
        content:
          'Data breaches are handled by our hosting platform which has its own set of data breach procedures.',
      },
      {
        subtitle: 'What third parties we receive data from',
        content:
          'To the best of our knowledge we are not receiving third party data not submitted to us in the contact form.',
      },
      {
        subtitle: 'Cookies',
        content:
          'Cookies are text files placed on your computer to collect standard internet log information and visitor behaviour information. This information is used to track visitor use of the website and to compile statistical reports on website activity.\n\nYou can set your browser not to accept cookies. See www.aboutcookies.org for more information.',
      },
    ],
  },
];

export default function PrivacyPolicyView() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-header">
          <span className="section-subtitle">Legal</span>
          <h2 className="section-title">Privacy Policy</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {sections.map((section, i) => (
            <div key={i}>
              <h3 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--dark)' }}>
                {section.title}
              </h3>

              {section.content && (
                <div style={{ color: 'var(--gray-600)', fontSize: '15px', lineHeight: '1.8' }}>
                  {section.content.split('\n\n').map((para, j) => (
                    <p key={j} style={{ marginBottom: '12px', whiteSpace: 'pre-line' }}>{para}</p>
                  ))}
                </div>
              )}

              {section.subsections && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '8px' }}>
                  {section.subsections.map((sub, j) => (
                    <div key={j}>
                      <h4 style={{ fontSize: '17px', marginBottom: '8px', fontFamily: 'var(--font-sans)', fontWeight: '600' }}>
                        {sub.subtitle}
                      </h4>
                      <div style={{ color: 'var(--gray-600)', fontSize: '15px', lineHeight: '1.8' }}>
                        {sub.content.split('\n\n').map((para, k) => (
                          <p key={k} style={{ marginBottom: '12px', whiteSpace: 'pre-line' }}>{para}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
